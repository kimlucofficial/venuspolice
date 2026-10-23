/* =========================================================
   API: danh sách sĩ quan cho bảng xếp hạng
   GET /api/discord-officers

   Lấy mọi thành viên có role cảnh sát, phân đơn vị theo name tag:
     "BCSO | Tên"          → BCSO
     "SASP | Tên", "SAS | Tên", "SAST | Tên" → SASP
     "LSPD | Tên" hoặc chưa đổi name tag → LSPD
   Nếu name tag có số (vd "LSPD | 214 | Tên") thì số đó là callsign.

   Biến môi trường (Vercel → Project → Settings → Environment Variables):
     DISCORD_BOT_TOKEN     Token của bot (bot phải ở trong server, bật Server Members Intent)
     DISCORD_GUILD_ID      ID server Discord
     DISCORD_OFFICER_ROLE  (tuỳ chọn) ID role cảnh sát, mặc định bên dưới
   ========================================================= */
const API = 'https://discord.com/api/v10';
const DEFAULT_ROLE = '1531744125207183694';
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

function avatarUrl(guildId, u, guildAvatar) {
  if (guildAvatar) return `https://cdn.discordapp.com/guilds/${guildId}/users/${u.id}/avatars/${guildAvatar}.png?size=128`;
  if (u.avatar) return `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=128`;
  const idx = u.discriminator && u.discriminator !== '0'
    ? Number(u.discriminator) % 5
    : Number((BigInt(u.id) >> 22n) % 6n);
  return `https://cdn.discordapp.com/embed/avatars/${idx}.png`;
}

/* Đọc name tag → đơn vị, callsign, tên */
const UNIT_OF = (w) => (w === 'BCSO' ? 'BCSO' : /^SAS[PT]?$/.test(w) ? 'SASP' : w === 'LSPD' ? 'LSPD' : null);
const WORDS = (s) => s.toUpperCase().split(/[^A-Z0-9]+/).filter(Boolean);

function parseTag(display) {
  const raw = String(display).trim();
  let tag = '', name = raw;
  const parts = raw.split(/\s*[|｜]\s*/).filter(Boolean);
  if (parts.length > 1) {
    // "BCSO | Tên", "SASP | 812 | Tên"
    tag = parts.slice(0, -1).join(' ');
    name = parts[parts.length - 1];
  } else {
    // "[SASP] Tên", "BCSO - Tên", "LSPD 214 Tên": chỉ nhận khi chữ đầu là mã đơn vị
    const m = raw.match(/^[\[(]?\s*([A-Za-z]{3,4})\s*[\])]?\s*[-–:._]?\s*(\d{2,4})?\s*[-–:._]?\s*(.+)$/);
    if (m && UNIT_OF(m[1].toUpperCase())) {
      tag = m[1] + (m[2] ? ' ' + m[2] : '');
      name = m[3];
    }
  }
  let unit = null;
  for (const w of WORDS(tag)) { const u = UNIT_OF(w); if (u) { unit = u; break; } }
  const num = tag.match(/\b\d{2,4}\b/);
  if (!unit && !num) name = raw; // dấu | nhưng không phải name tag → giữ nguyên tên
  unit = unit || 'LSPD';
  return { unit, cs: num ? `${unit}-${num[0]}` : unit, name: name.trim() || raw };
}

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method !== 'GET') {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: 'method_not_allowed' }));
  }

  const token = process.env.DISCORD_BOT_TOKEN;
  const guild = process.env.DISCORD_GUILD_ID;
  const role = (process.env.DISCORD_OFFICER_ROLE || DEFAULT_ROLE).trim();
  if (!token || !guild) {
    res.statusCode = 500;
    return res.end(JSON.stringify({ error: 'missing_config' }));
  }

  try {
    const officers = [];
    let after = '0';
    for (let p = 0; p < MAX_PAGES; p++) {
      const page = await dc(`/guilds/${guild}/members?limit=1000&after=${after}`, token);
      for (const m of page) {
        if (!m.user || m.user.bot || !m.roles.includes(role)) continue;
        const display = m.nick || m.user.global_name || m.user.username;
        const t = parseTag(display);
        officers.push({ id: m.user.id, name: t.name, unit: t.unit, cs: t.cs, avatar: avatarUrl(guild, m.user, m.avatar) });
      }
      if (page.length < 1000) break;
      after = page[page.length - 1].user.id;
    }
    officers.sort((a, b) => a.name.localeCompare(b.name, 'vi'));

    // Vercel lưu đệm 5 phút ở CDN: đổi name tag trên Discord thì tối đa ~5 phút web tự cập nhật
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    res.statusCode = 200;
    return res.end(JSON.stringify({ count: officers.length, officers }));
  } catch (e) {
    res.setHeader('Cache-Control', 'no-store');
    res.statusCode = 502;
    return res.end(JSON.stringify({ error: e.message }));
  }
};

module.exports.parseTag = parseTag;
