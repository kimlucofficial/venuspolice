/* =========================================================
   API: lấy danh sách thành viên đang giữ một role Discord
   GET /api/discord-role?role=<ROLE_ID>

   Biến môi trường (Vercel → Project → Settings → Environment Variables):
     DISCORD_BOT_TOKEN   Token của bot (bot phải ở trong server)
     DISCORD_GUILD_ID    ID server Discord
     DISCORD_ROLE_IDS    (tuỳ chọn) danh sách role được phép, cách nhau dấu phẩy.
                         Bỏ trống thì chỉ cho phép role mặc định bên dưới.
   ========================================================= */
const API = 'https://discord.com/api/v10';
const DEFAULT_ROLES = ['1538867775865356339'];
const MAX_PAGES = 20; // tối đa 20.000 thành viên mỗi lần quét

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function dc(path, token, tries = 3) {
  for (let i = 0; i < tries; i++) {
    const r = await fetch(API + path, { headers: { Authorization: 'Bot ' + token } });
    if (r.status === 429) {
      const j = await r.json().catch(() => ({}));
      await sleep(Math.min(5000, Math.ceil((j.retry_after || 1) * 1000)));
      continue;
    }
    if (!r.ok) {
      const e = new Error('discord_' + r.status);
      e.status = r.status;
      throw e;
    }
    return r.json();
  }
  const e = new Error('discord_rate_limited');
  e.status = 429;
  throw e;
}

function avatarUrl(guildId, m) {
  const u = m.user;
  if (m.avatar) return `https://cdn.discordapp.com/guilds/${guildId}/users/${u.id}/avatars/${m.avatar}.png?size=256`;
  if (u.avatar) return `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=256`;
  const idx = u.discriminator && u.discriminator !== '0'
    ? Number(u.discriminator) % 5
    : Number((BigInt(u.id) >> 22n) % 6n);
  return `https://cdn.discordapp.com/embed/avatars/${idx}.png`;
}

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method !== 'GET') {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: 'method_not_allowed' }));
  }

  const token = process.env.DISCORD_BOT_TOKEN;
  const guild = process.env.DISCORD_GUILD_ID;
  const allowed = (process.env.DISCORD_ROLE_IDS || DEFAULT_ROLES.join(','))
    .split(',').map((s) => s.trim()).filter(Boolean);
  const role = String((req.query && req.query.role) || '').trim();

  if (!token || !guild) {
    res.statusCode = 500;
    return res.end(JSON.stringify({ error: 'missing_config' }));
  }
  if (!/^\d{17,20}$/.test(role) || !allowed.includes(role)) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ error: 'role_not_allowed' }));
  }

  try {
    const roles = await dc(`/guilds/${guild}/roles`, token);
    const info = roles.find((r) => r.id === role);
    if (!info) {
      res.statusCode = 404;
      return res.end(JSON.stringify({ error: 'role_not_found' }));
    }

    const members = [];
    let after = '0';
    for (let p = 0; p < MAX_PAGES; p++) {
      const page = await dc(`/guilds/${guild}/members?limit=1000&after=${after}`, token);
      for (const m of page) {
        if (!m.user || m.user.bot || !m.roles.includes(role)) continue;
        members.push({
          name: m.nick || m.user.global_name || m.user.username,
          avatar: avatarUrl(guild, m),
        });
      }
      if (page.length < 1000) break;
      after = page[page.length - 1].user.id;
    }
    members.sort((a, b) => a.name.localeCompare(b.name, 'vi'));

    // Vercel lưu đệm 5 phút ở CDN để không gọi Discord liên tục
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    res.statusCode = 200;
    return res.end(JSON.stringify({
      role: { name: info.name, color: info.color ? '#' + info.color.toString(16).padStart(6, '0') : null },
      count: members.length,
      members,
    }));
  } catch (e) {
    res.setHeader('Cache-Control', 'no-store');
    res.statusCode = 502;
    return res.end(JSON.stringify({ error: e.message }));
  }
};
