/* =========================================================
   API: lấy tên + avatar Discord của các thành viên Ban lãnh đạo
   GET /api/discord-users?ids=<ID1>,<ID2>,...

   Biến môi trường (Vercel → Project → Settings → Environment Variables):
     DISCORD_BOT_TOKEN   Token của bot (bot phải ở trong server)
     DISCORD_GUILD_ID    ID server Discord
     DISCORD_USER_IDS    (tuỳ chọn) danh sách ID được phép, cách nhau dấu phẩy.
                         Bỏ trống thì dùng danh sách mặc định bên dưới.
   ========================================================= */
const API = 'https://discord.com/api/v10';
const DEFAULT_IDS = [
  '946006418773925939',  // Commissioner
  '438691814099386370',  // Assistant Commissioner
  '520037888180748288',  // Deputy Commissioner
  '872509209693003776',  // Chief Of Police
  '1086562058717376542', // Sheriff
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function dc(path, token, tries = 3) {
  for (let i = 0; i < tries; i++) {
    const r = await fetch(API + path, { headers: { Authorization: 'Bot ' + token } });
    if (r.status === 429) {
      const j = await r.json().catch(() => ({}));
      await sleep(Math.min(5000, Math.ceil((j.retry_after || 1) * 1000)));
      continue;
    }
    if (r.status === 404) return null;
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

function avatarUrl(guildId, u, guildAvatar) {
  if (guildAvatar) return `https://cdn.discordapp.com/guilds/${guildId}/users/${u.id}/avatars/${guildAvatar}.png?size=1024`;
  if (u.avatar) return `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=1024`;
  const idx = u.discriminator && u.discriminator !== '0'
    ? Number(u.discriminator) % 5
    : Number((BigInt(u.id) >> 22n) % 6n);
  return `https://cdn.discordapp.com/embed/avatars/${idx}.png`;
}

async function lookup(id, guild, token) {
  // Ưu tiên tên + avatar riêng trong server; nếu người đó đã rời server thì lấy hồ sơ chung
  const m = await dc(`/guilds/${guild}/members/${id}`, token);
  if (m && m.user) {
    return { name: m.nick || m.user.global_name || m.user.username, avatar: avatarUrl(guild, m.user, m.avatar) };
  }
  const u = await dc(`/users/${id}`, token);
  if (u) return { name: u.global_name || u.username, avatar: avatarUrl(guild, u, null) };
  return null;
}

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method !== 'GET') {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: 'method_not_allowed' }));
  }

  const token = process.env.DISCORD_BOT_TOKEN;
  const guild = process.env.DISCORD_GUILD_ID;
  if (!token || !guild) {
    res.statusCode = 500;
    return res.end(JSON.stringify({ error: 'missing_config' }));
  }

  const allowed = (process.env.DISCORD_USER_IDS || DEFAULT_IDS.join(','))
    .split(',').map((s) => s.trim()).filter(Boolean);
  const ids = [...new Set(String((req.query && req.query.ids) || '').split(',').map((s) => s.trim()))]
    .filter((id) => /^\d{17,20}$/.test(id) && allowed.includes(id))
    .slice(0, 20);
  if (!ids.length) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ error: 'no_valid_ids' }));
  }

  try {
    const users = {};
    for (const id of ids) {
      const u = await lookup(id, guild, token);
      if (u) users[id] = u;
    }
    // Vercel lưu đệm 5 phút ở CDN để không gọi Discord liên tục
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    res.statusCode = 200;
    return res.end(JSON.stringify({ users }));
  } catch (e) {
    res.setHeader('Cache-Control', 'no-store');
    res.statusCode = 502;
    return res.end(JSON.stringify({ error: e.message }));
  }
};
