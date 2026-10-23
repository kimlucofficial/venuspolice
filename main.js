(function(){
  var $ = function(id){ return document.getElementById(id); };
  var esc = function(t){ return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); };
  var ROMAN = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];
  var CAM = '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M6 16h8l3-5h14l3 5h8v22H6z"/><circle cx="24" cy="26" r="7"/></svg>';
  var ph = function(img, cls){ return '<div class="ph '+(cls||'')+'">'+(img ? '<img src="'+esc(img)+'" alt="">' : CAM)+'</div>'; };
  var corners = '<i class="cn a"></i><i class="cn b"></i><i class="cn c"></i><i class="cn d"></i>';
  var fmt = function(n){ return n.toLocaleString('vi-VN'); };

  /* Hoa thị con dấu */
  (function(){
    var C = 250, svg = '';
    [[238,7,48,10,.2],[214,11,30,8,.16],[192,6,60,6,.12]].forEach(function(L){
      for (var k = 0; k < L[3]; k++){
        var d = '';
        for (var i = 0; i <= 720; i++){ var t = i/720*2*Math.PI, r = L[0] + L[1]*Math.sin(L[2]*t + k*0.5); d += (i?'L':'M')+(C+r*Math.cos(t)).toFixed(1)+' '+(C+r*Math.sin(t)).toFixed(1); }
        svg += '<path d="'+d+'Z" stroke-opacity="'+L[4]+'"/>';
      }
    });
    $('ros').innerHTML = '<g fill="none" stroke="#8d9cb8" stroke-width=".6">'+svg+'</g>';
    $('hros').innerHTML = '<g fill="none" stroke="#9fe3ff" stroke-width=".8">'+svg+'</g>';
  })();

  $('discordBtn').href = DATA.discord;
  function card(p, lead){
    return '<figure class="person panel'+(lead?' lead':'')+'"'+(p.discord?' data-dc="'+esc(p.discord)+'"':'')+(p.lockName?' data-lock="1"':'')+(p.img?' data-img="1"':'')+'><div class="phw">'+(lead?corners:'')+ph(p.img)+'</div>'+
      '<figcaption><div class="role">'+esc(p.role)+'</div><div class="who">'+esc(p.name || '—')+'</div></figcaption></figure>';
  }
  $('people').innerHTML = DATA.people.map(function(p){ return card(p, p.lead); }).join('');
  $('crewHC').innerHTML = (DATA.highCommand || []).map(function(p){ return card(p); }).join('');
  $('crewC').innerHTML = (DATA.command || []).map(function(p){ return card(p); }).join('');
  /* Tự lấy avatar + tên từ Discord cho mọi thẻ có ID */
  (function(){
    var cards = Array.prototype.slice.call(document.querySelectorAll('#gioithieu .person[data-dc]'));
    if (!cards.length || location.protocol === 'file:') return;
    var ids = cards.map(function(c){ return c.dataset.dc; }).filter(function(v, i, a){ return a.indexOf(v) === i; });
    fetch('/api/discord-users?ids=' + ids.join(',')).then(function(r){ return r.ok ? r.json() : null; }).then(function(d){
      if (!d || !d.users) return;
      cards.forEach(function(c){
        var u = d.users[c.dataset.dc]; if (!u) return;
        if (!c.dataset.img){
          var box = c.querySelector('.ph'), im = new Image();
          im.alt = ''; im.referrerPolicy = 'no-referrer';
          im.onload = function(){ box.innerHTML = ''; box.appendChild(im); };
          im.src = u.avatar;
        }
        if (!c.dataset.lock && u.name) c.querySelector('.who').textContent = u.name;
      });
    }).catch(function(){});
  })();
  $('forces').innerHTML = DATA.forces.map(function(f){
    return '<div class="force panel">'+corners+ph(f.img,'emb')+'<h3>'+esc(f.code)+'</h3><div class="full">'+esc(f.name)+'</div><div class="cs">'+esc(f.code)+' '+esc(f.range)+'</div></div>';
  }).join('');

  /* Cấp bậc dạng mở rộng */
  $('acc').innerHTML = DATA.ladder.map(function(t, i){
    return '<div class="tier'+(t.gold?' gold':'')+(i===0?' open':'')+'"><button class="tier-h" type="button"><span class="rn">'+ROMAN[i]+'</span><span class="cd">'+esc(t.code)+'</span><span class="tt">'+esc(t.title)+'</span><span class="ct">'+t.ranks.length+' chức danh</span><span class="pm"></span></button>'+
      '<div class="tier-b"><div><div class="tier-c"><div class="chips">'+t.ranks.map(function(r){ return '<span>'+esc(r)+'</span>'; }).join('')+'</div><p>'+t.desc+'</p>'+
      (t.notes ? '<div class="notes">'+t.notes.map(function(n){ return '<div><b>'+esc(n.r)+'</b><span>'+esc(n.d)+'</span></div>'; }).join('')+'</div>' : '')+'</div></div></div></div>';
  }).join('');
  $('acc').querySelectorAll('.chips').forEach(function(c){ Array.prototype.forEach.call(c.children, function(sp, i){ sp.style.animationDelay = (i * 40 + 120) + 'ms'; }); });
  $('acc').addEventListener('click', function(e){ var h = e.target.closest('.tier-h'); if (!h) return; var t = h.parentNode; t.classList.toggle('open'); if (t.classList.contains('open')) t.querySelectorAll('.chips span').forEach(function(sp){ sp.style.animationName = 'none'; void sp.offsetWidth; sp.style.animationName = ''; }); });


  /* Bộ luật */
  var tps = Array.prototype.slice.call(document.querySelectorAll('#lawSrc template'));
  var laws = tps.map(function(tp, i){
    var body = document.createElement('div'); body.className = 'law'; body.appendChild(tp.content.cloneNode(true));
    var k = 0, toc = '';
    Array.prototype.forEach.call(body.children, function(s){
      if (s.tagName !== 'SECTION') return; k++;
      s.id = tp.id + '-' + (s.id || k);
      var h = s.querySelector('h2'); if (!h) return;
      toc += '<a data-sec="'+s.id+'"><i>'+ROMAN[k-1]+'</i>'+esc(h.textContent)+'</a>';
      h.insertAdjacentHTML('afterbegin', '<i>Mục '+ROMAN[k-1]+'</i>');
    });
    /* Bảng -> danh sách bản ghi dễ đọc */
    body.querySelectorAll('.tablebox').forEach(function(box){
      var t = box.querySelector('table'); if (!t) return;
      var head = [], out = '';
      Array.prototype.forEach.call(t.querySelectorAll('tr'), function(r){
        var ths = r.querySelectorAll('th');
        if (ths.length){ head = Array.prototype.map.call(ths, function(x){ return x.textContent.trim(); }); return; }
        var cells = [], c = 0;
        r.querySelectorAll('td').forEach(function(td){ cells.push({ h: head[c] || '', html: td.innerHTML, cls: td.className, span: +(td.getAttribute('colspan') || 1) }); c += +(td.getAttribute('colspan') || 1); });
        var num = '', i = 0;
        if (cells[0] && (cells[0].h === '#' || cells[0].cls.indexOf('n') > -1)){ num = cells[0].html; i = 1; }
        var title = cells[i]; if (!title) return;
        var rest = cells.slice(i + 1);
        var tl = title.html.replace(/<small>([\s\S]*?)<\/small>/, '</span><small>$1</small><span>');
        out += '<div class="rec">' + (num ? '<div class="rn">' + num + '</div>' : '') +
          '<div class="rb"><div class="rt"><span>' + tl + '</span></div>' +
          (rest.length ? '<div class="rf">' + rest.map(function(x){
            var lbl = x.span > 1 ? head.slice(head.indexOf(x.h), head.indexOf(x.h) + x.span).join(' · ') : x.h;
            return '<div class="kv' + (x.cls.indexOf('yes') > -1 ? ' yes' : x.cls.indexOf('ban') > -1 ? ' ban' : '') + '"><span>' + lbl + '</span><div>' + x.html + '</div></div>';
          }).join('') + '</div>' : '') + '</div></div>';
      });
      var div = document.createElement('div'); div.className = 'recs' + (head[0] === '#' ? ' numbered' : ''); div.innerHTML = out;
      box.parentNode.replaceChild(div, box);
    });
    body.querySelectorAll('.heist summary').forEach(function(sm, i){ sm.setAttribute('data-n', String(i+1).padStart(2,'0')); });
    if (tp.dataset.credit) body.insertAdjacentHTML('beforeend', '<div class="credit">'+esc(tp.dataset.credit)+'</div>');
    return { id: tp.id, title: tp.dataset.title, intro: tp.dataset.intro, n: k, body: body, toc: toc, i: i };
  });
  $('libNav').innerHTML = laws.map(function(L){ return '<button class="lt" type="button" data-law="'+L.i+'"><i>'+ROMAN[L.i]+'</i><span><b>'+esc(L.title)+'</b><small>'+L.n+' mục</small></span></button>'; }).join('');
  $('fLaws').insertAdjacentHTML('beforeend', laws.map(function(L){ return '<a data-law="'+L.i+'">'+esc(L.title)+'</a>'; }).join(''));
  var curLaw = -1;
  function openLaw(i, scroll){
    var L = laws[i]; if (!L) return;
    if (curLaw !== i){
      var r = $('reader'); r.innerHTML = '<div class="reader-h"><div class="k">Bộ luật số '+ROMAN[i]+'</div><h3 style="margin-top:10px">'+esc(L.title)+'</h3><div class="rtoc">'+L.toc+'</div></div>';
      r.appendChild(L.body); curLaw = i;
      document.querySelectorAll('.lt').forEach(function(b){ b.classList.toggle('on', +b.dataset.law === i); });
    }
    if (scroll) goTo('boluat');
  }
  openLaw(0);
  document.addEventListener('click', function(e){
    var b = e.target.closest('[data-law]'); if (b){ e.preventDefault(); openLaw(+b.dataset.law, b.closest('footer') || window.innerWidth <= 980); return; }
    var a = e.target.closest('[data-sec]'); if (a){ var el = $(a.dataset.sec); if (el) goTo(el); }
  });

  /* Tra cứu toàn bộ luật */
  var norm = function(t){ return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'d'); };
  var IDX = [];
  laws.forEach(function(L){
    L.body.querySelectorAll('section').forEach(function(sec){
      var h = sec.querySelector('h2'), st = h ? h.textContent.replace(/^Mục [IVX]+/, '') : '';
      sec.querySelectorAll('li, tr:not(.th-row), .alert, .box > p').forEach(function(el){
        var t = el.textContent.replace(/\s+/g,' ').trim(); if (t.length > 3) IDX.push({ law: L, sec: st, el: el, t: t, n: norm(t) });
      });
    });
  });
  var sov = $('sov'), sQ = $('sQ'), sel = -1;
  function openS(){ sov.classList.add('open'); sQ.focus(); sQ.select(); }
  function closeS(){ sov.classList.remove('open'); }
  function hl(t, q){ var i = norm(t).indexOf(q), a = Math.max(0, i-60), b = Math.min(t.length, i+q.length+110);
    return (a?'… ':'')+esc(t.slice(a,i))+'<mark>'+esc(t.slice(i,i+q.length))+'</mark>'+esc(t.slice(i+q.length,b))+(b<t.length?' …':''); }
  function runS(){
    var q = norm(sQ.value.trim()); sel = -1;
    if (q.length < 2){ $('sRes').innerHTML = ''; $('sMeta').textContent = 'Gõ không dấu cũng tìm được.'; return; }
    var hits = IDX.filter(function(r){ return r.n.indexOf(q) > -1; }), last = '', h = '';
    $('sMeta').textContent = hits.length ? 'Tìm thấy ' + hits.length + ' kết quả' : 'Không tìm thấy kết quả phù hợp.';
    hits.slice(0,80).forEach(function(r){ if (r.law.title !== last){ h += '<div class="sgrp">'+esc(r.law.title)+'</div>'; last = r.law.title; } h += '<a class="sit" data-i="'+IDX.indexOf(r)+'"><small>'+esc(r.sec)+'</small><p>'+hl(r.t,q)+'</p></a>'; });
    $('sRes').innerHTML = h;
  }
  function goS(i){
    var r = IDX[i]; if (!r) return; closeS(); openLaw(r.law.i);
    goTo(r.el, function(el){ el.scrollIntoView({ behavior: 'smooth', block: 'center' }); el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit'); });
  }
  $('sOpen').addEventListener('click', openS); $('sClose').addEventListener('click', closeS);
  sov.addEventListener('click', function(e){ if (e.target === sov) closeS(); });
  sQ.addEventListener('input', runS);
  $('sRes').addEventListener('click', function(e){ var a = e.target.closest('.sit'); if (a) goS(+a.dataset.i); });
  document.addEventListener('keydown', function(e){
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); openS(); return; }
    if (!sov.classList.contains('open')) return;
    var it = $('sRes').querySelectorAll('.sit');
    if (e.key === 'Escape') closeS();
    else if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && it.length){ e.preventDefault(); sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + it.length) % it.length; it.forEach(function(x,k){ x.classList.toggle('on', k === sel); }); it[sel].scrollIntoView({ block: 'nearest' }); }
    else if (e.key === 'Enter' && it.length) goS(+it[Math.max(sel,0)].dataset.i);
  });

  /* Bảng xếp hạng */
  var LB = { p: 'week', u: 'ALL', k: 'score', q: '' }, P = DATA.points;
  var PREV = { week: 'month', month: 'all', all: 'all' };
  function rows(period){
    return DATA.officers.map(function(o){ var v = o[period] || [0, 0, 0]; return { o: o, hours: v[0], arrests: v[1], calls: v[2], score: v[0]*P.hours + v[1]*P.arrests + v[2]*P.calls }; });
  }
  function key(o){ return o.id || o.cs; }
  function sub(o){ return esc(o.cs) + (o.rank ? ' · ' + esc(o.rank) : ''); }
  function face(o){ return esc(ini(o.name)) + (o.avatar ? '<img src="'+esc(o.avatar)+'" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">' : ''); }
  function ini(n){ var w = n.trim().split(/\s+/); return (w.length > 1 ? w[0][0] + w[w.length-1][0] : n.slice(0,2)).toUpperCase(); }
  function medal(n){
    var c = n === 1 ? '#d6c294' : n === 2 ? '#c9cfdb' : '#b98b6a';
    return '<div class="medal"><svg viewBox="0 0 76 76" fill="none" stroke="'+c+'"><circle cx="38" cy="38" r="36" stroke-opacity=".5"/><circle cx="38" cy="38" r="30" stroke-dasharray="2 4"/><path d="M38 6l3 6M38 70l-3-6M6 38l6 3M70 38l-6-3" stroke-opacity=".6"/></svg><b style="color:'+c+'">'+n+'</b></div>';
  }
  function countUp(el, dur){
    var to = +el.dataset.n, from = +(el.dataset.from || 0), t0 = performance.now();
    (function step(t){ var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(Math.round(from + (to - from) * e)); if (k < 1) requestAnimationFrame(step); })(t0);
  }
  var lbShown = false, firstRows = true;
  var lastKey = '';
  function animateLB(prevPos, prevVal){
    if (!lbShown) return;
    var key = LB.p + LB.u, podAnim = key !== lastKey; lastKey = key;
    if (!podAnim) document.querySelectorAll('#podium .pd').forEach(function(p){ p.classList.add('go', 'still'); p.style.animation = 'none'; p.style.opacity = 1; p.style.transform = 'none'; p.querySelectorAll('.v').forEach(function(v){ v.textContent = fmt(+v.dataset.n); }); });
    if (podAnim) document.querySelectorAll('#podium .pd').forEach(function(p){ p.classList.remove('go'); void p.offsetWidth; p.classList.add('go'); });
    document.querySelectorAll(podAnim ? '#podium .v, #units .v' : '#units .v').forEach(function(v){ v.dataset.from = 0; countUp(v, podAnim ? 1400 : 600); });
    document.querySelectorAll('#lbBody tr[data-cs]').forEach(function(tr, i){
      var cs = tr.dataset.cs, v = tr.querySelector('.v');
      if (!firstRows && prevPos[cs] != null){
        var dy = prevPos[cs] - tr.getBoundingClientRect().top;
        tr.classList.add('flip');
        if (dy){ tr.style.transition = 'none'; tr.style.transform = 'translateY(' + dy + 'px)'; requestAnimationFrame(function(){ requestAnimationFrame(function(){ tr.style.transition = 'transform .6s cubic-bezier(.2,.7,.2,1)'; tr.style.transform = ''; }); }); }
        if (v){ v.dataset.from = prevVal[cs] || 0; countUp(v, 700); }
      } else {
        tr.style.animationDelay = (i * 45) + 'ms'; tr.classList.add('go');
        if (v){ v.dataset.from = 0; v.textContent = '0'; setTimeout(function(){ countUp(v, 900); }, i * 45); }
      }
    });
    firstRows = false;
    setTimeout(function(){ document.querySelectorAll('#lbBody .bar i, #units .bar i').forEach(function(b){ b.style.width = b.dataset.w + '%'; }); }, 60);
  }
  function render(){
    var prevPos = {}, prevVal = {};
    document.querySelectorAll('#lbBody tr[data-cs]').forEach(function(tr){ prevPos[tr.dataset.cs] = tr.getBoundingClientRect().top; var v = tr.querySelector('.v'); prevVal[tr.dataset.cs] = v ? +v.dataset.n : 0; });
    draw();
    animateLB(prevPos, prevVal);
  }
  function draw(){

    var all = rows(LB.p).filter(function(r){ return LB.u === 'ALL' || r.o.unit === LB.u; });
    var byScore = all.slice().sort(function(a,b){ return b.score - a.score; });
    byScore.forEach(function(r,i){ r.pos = i + 1; });
    var prevOrder = rows(PREV[LB.p]).filter(function(r){ return LB.u === 'ALL' || r.o.unit === LB.u; }).sort(function(a,b){ return b.score - a.score; }).map(function(r){ return key(r.o); });
    byScore.forEach(function(r){ var pi = prevOrder.indexOf(key(r.o)); r.delta = (LB.p === 'all' || pi < 0) ? 0 : (pi + 1) - r.pos; });
    var top = byScore.slice(0,3), order = [top[1], top[0], top[2]];
    var crown = '<svg class="pd-crown" viewBox="0 0 40 20" fill="none"><path d="M3 17h34M5 17L3 5l9 6 8-9 8 9 9-6-2 12" stroke="url(#pdg)" stroke-width="1.4" stroke-linejoin="round"/><defs><linearGradient id="pdg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1c1"/><stop offset=".5" stop-color="#e3b65a"/><stop offset="1" stop-color="#8c6422"/></linearGradient></defs></svg>';
    var rkName = { 1: 'Hạng nhất', 2: 'Hạng nhì', 3: 'Hạng ba' };
    $('podium').innerHTML = order.map(function(r){
      if (!r) return '<div class="pd pd-empty"></div>';
      return '<div class="pd pd'+r.pos+'" data-cs="'+esc(key(r.o))+'">'+
        '<div class="pd-who">'+(r.pos===1?crown:'')+'<div class="pd-av"><i>'+face(r.o)+'</i></div><div class="pd-nm" title="'+esc(r.o.name)+'">'+esc(r.o.name)+'</div><div class="pd-cs">'+sub(r.o)+'</div></div>'+
        '<div class="pd-blk"><div class="pd-top"></div><div class="pd-face">'+
          '<div class="pd-lb">'+rkName[r.pos]+'</div><div class="pd-rk">'+r.pos+'</div>'+
          '<div class="pd-pt"><span class="v" data-n="'+r.score+'">0</span><small>Điểm</small></div>'+
          '<div class="pd-mini"><span><b>'+r.hours+'</b> giờ</span><span><b>'+r.arrests+'</b> bắt giữ</span><span><b>'+r.calls+'</b> cuộc gọi</span></div>'+
        '</div></div></div>';
    }).join('');
    var q = norm(LB.q), list = byScore.filter(function(r){ return !q || norm(r.o.name + ' ' + r.o.cs + ' ' + (r.o.rank || '') + ' ' + r.o.unit).indexOf(q) > -1; });
    list.sort(function(a,b){ return b[LB.k] - a[LB.k] || a.pos - b.pos; });
    var max = Math.max.apply(null, byScore.map(function(r){ return r.score; }).concat([1]));
    $('lbCount').textContent = list.length + ' sĩ quan';
    $('lbBody').innerHTML = list.length ? list.map(function(r){
      var d = r.delta > 0 ? '<small class="up">▲ '+r.delta+'</small>' : r.delta < 0 ? '<small class="dn">▼ '+(-r.delta)+'</small>' : '<small class="eq">—</small>';
      return '<tr data-cs="'+esc(key(r.o))+'" class="'+(r.pos<=3?'t'+r.pos:'')+'"><td class="rk" style="'+(r.pos<=3?'color:var(--gold2)':'')+'">'+String(r.pos).padStart(2,'0')+d+'</td>'+
        '<td class="who"><div class="wf"><span class="mav">'+face(r.o)+'</span><div><b>'+esc(r.o.name)+'</b><small>'+sub(r.o)+'</small></div></div></td>'+
        '<td class="hide-m"><span class="unit '+esc(r.o.unit)+'">'+esc(r.o.unit)+'</span></td>'+
        '<td class="hide-m'+(LB.k==='hours'?' sk':'')+'">'+r.hours+'</td><td class="hide-m'+(LB.k==='arrests'?' sk':'')+'">'+r.arrests+'</td><td class="hide-m'+(LB.k==='calls'?' sk':'')+'">'+r.calls+'</td>'+
        '<td class="pt"><span class="v" data-n="'+r.score+'">'+fmt(r.score)+'</span><span class="bar"><i data-w="'+(r.score/max*100).toFixed(1)+'"></i></span></td></tr>';
    }).join('') : '<tr><td colspan="7" class="lb-empty">Không tìm thấy sĩ quan phù hợp.</td></tr>';
    var U = {}; rows(LB.p).forEach(function(r){ var u = U[r.o.unit] = U[r.o.unit] || { s: 0, n: 0 }; u.s += r.score; u.n++; });
    var us = Object.keys(U).map(function(k){ return { k: k, s: U[k].s, n: U[k].n }; }).sort(function(a,b){ return b.s - a.s; });
    var um = us[0] ? us[0].s : 1, names = { SASP: 'San Andreas State Police', LSPD: 'Los Santos Police Department', BCSO: "Blaine County Sheriff's Office" };
    $('units').innerHTML = us.map(function(u,i){ return '<div class="ust"><div class="t"><b>'+(i+1)+'. '+u.k+'</b><span class="v" data-n="'+u.s+'">0</span></div><small>'+names[u.k]+' · '+u.n+' sĩ quan</small><span class="bar"><i data-w="'+(u.s/um*100).toFixed(1)+'"></i></span></div>'; }).join('');
    document.querySelectorAll('.lbt th.s').forEach(function(th){ th.classList.toggle('on', th.dataset.k === LB.k); });
  }
  function seg(id, key, attr){ $(id).addEventListener('click', function(e){ var b = e.target.closest('button'); if (!b) return; LB[key] = b.dataset[attr]; this.querySelectorAll('button').forEach(function(x){ x.classList.toggle('on', x === b); }); render(); }); }
  seg('lbPeriod','p','p'); seg('lbUnit','u','u');
  document.querySelector('.lbt thead').addEventListener('click', function(e){ var th = e.target.closest('th.s'); if (th){ LB.k = th.dataset.k; render(); } });
  $('lbQ').addEventListener('input', function(){ LB.q = this.value; render(); });
  render();
  var lbIO = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting && !lbShown){ lbShown = true; firstRows = true; render(); lbIO.disconnect(); } }); }, { threshold: .15 });
  lbIO.observe($('podium'));

  /* Danh sách sĩ quan tự lấy từ Discord (role cảnh sát + name tag) */
  if (location.protocol !== 'file:') fetch('/api/discord-officers').then(function(r){ return r.ok ? r.json() : null; }).then(function(d){
    if (!d || !d.officers || !d.officers.length) return;
    var S = DATA.stats || {};
    DATA.officers = d.officers.map(function(o){ var st = S[o.id] || {}; return { id: o.id, name: o.name, cs: o.cs, unit: o.unit, avatar: o.avatar, rank: st.rank || '', week: st.week, month: st.month, all: st.all }; });
    var note = document.querySelector('.lb-note'); if (note) note.hidden = true;
    lastKey = ''; firstRows = true; render();
  }).catch(function(){});

  /* Hiện dần khi cuộn tới */
  document.querySelectorAll('.head, .person, .force, .cadet, .tier, .lib, .lb-bar, .lb-grid, .f-top').forEach(function(el){ el.classList.add('rv'); });
  document.querySelectorAll('.people, .forces').forEach(function(g){ Array.prototype.forEach.call(g.children, function(c, i){ c.style.transitionDelay = (i * 90) + 'ms'; }); });
  document.querySelectorAll('.acc .tier').forEach(function(c, i){ c.style.transitionDelay = (i * 70) + 'ms'; });
  var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); setTimeout(function(){ e.target.style.transitionDelay = ''; }, 1200); } }); }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.rv').forEach(function(el){ io.observe(el); });

  /* ===== Nền động: bản đồ tuần tra thành phố ===== */
  (function(){
    var cv = $('bg'); if (!cv || !cv.getContext) return;
    var ctx = cv.getContext('2d'), W, H, DPR = Math.min(2, devicePixelRatio || 1), run = true, map, xs, ys, units = [], pings = [], last = 0;
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    function rnd(a, b){ return a + Math.random() * (b - a); }
    function build(){
      W = innerWidth; H = innerHeight; cv.width = W * DPR; cv.height = H * DPR; ctx.setTransform(DPR,0,0,DPR,0,0);
      xs = []; ys = []; var x = rnd(-20, 40), y = rnd(-20, 40);
      while (x < W + 60){ xs.push(x); x += rnd(70, 160); }
      while (y < H + 60){ ys.push(y); y += rnd(60, 140); }
      map = document.createElement('canvas'); map.width = W * DPR; map.height = H * DPR;
      var m = map.getContext('2d'); m.setTransform(DPR,0,0,DPR,0,0);
      /* khối nhà */
      for (var i = 0; i < xs.length - 1; i++) for (var j = 0; j < ys.length - 1; j++){
        if (Math.random() < .55){
          var bx = xs[i] + 6, by = ys[j] + 6, bw = xs[i+1] - xs[i] - 12, bh = ys[j+1] - ys[j] - 12;
          m.fillStyle = 'rgba(41,182,255,' + rnd(.012, .035) + ')'; m.fillRect(bx, by, bw, bh);
          if (Math.random() < .35){ m.strokeStyle = 'rgba(41,182,255,.05)'; m.strokeRect(bx + .5, by + .5, bw, bh); }
        }
      }
      /* đường phố */
      m.lineWidth = 1;
      xs.forEach(function(x, i){ m.strokeStyle = 'rgba(110,170,230,' + (i % 4 === 0 ? .12 : .055) + ')'; m.lineWidth = i % 4 === 0 ? 1.4 : 1; m.beginPath(); m.moveTo(x, 0); m.lineTo(x, H); m.stroke(); });
      ys.forEach(function(y, i){ m.strokeStyle = 'rgba(110,170,230,' + (i % 3 === 0 ? .12 : .055) + ')'; m.lineWidth = i % 3 === 0 ? 1.4 : 1; m.beginPath(); m.moveTo(0, y); m.lineTo(W, y); m.stroke(); });
      /* đại lộ chéo + đường ven biển */
      m.strokeStyle = 'rgba(110,170,230,.10)'; m.lineWidth = 2; m.beginPath(); m.moveTo(-50, H * .9); m.lineTo(W * .75, -50); m.stroke();
      m.strokeStyle = 'rgba(41,182,255,.08)'; m.lineWidth = 1; m.setLineDash([2, 6]); m.beginPath();
      for (var k = 0; k <= 60; k++){ var px = W * k / 60, py = H * .93 + Math.sin(k / 6) * 22; k ? m.lineTo(px, py) : m.moveTo(px, py); } m.stroke(); m.setLineDash([]);
      /* đơn vị tuần tra */
      units = [];
      var n = Math.max(6, Math.min(12, Math.round(W / 140)));
      for (var u = 0; u < n; u++){
        var horiz = Math.random() < .5, gi = Math.floor(Math.random() * (horiz ? ys.length : xs.length));
        units.push({ horiz: horiz, line: horiz ? ys[gi] : xs[gi], p: horiz ? rnd(0, W) : rnd(0, H), d: Math.random() < .5 ? 1 : -1, sp: rnd(.35, .7), trail: [], c: u % 3 === 0 ? '255,110,120' : '120,215,255' });
      }
    }
    function nearest(arr, v){ for (var i = 0; i < arr.length; i++) if (Math.abs(arr[i] - v) < .6) return arr[i]; return null; }
    function step(u){
      u.p += u.d * u.sp;
      var cross = nearest(u.horiz ? xs : ys, u.p);
      if (cross !== null && Math.random() < .35 && !u.just){
        var np = u.line; u.horiz = !u.horiz; u.line = cross; u.p = np; u.d = Math.random() < .5 ? 1 : -1; u.just = 40;
      }
      if (u.just) u.just--;
      var lim = u.horiz ? W : H; if (u.p < -20) u.p = lim + 20; if (u.p > lim + 20) u.p = -20;
      var x = u.horiz ? u.p : u.line, y = u.horiz ? u.line : u.p;
      u.trail.push([x, y]); if (u.trail.length > 160) u.trail.shift();
      return [x, y];
    }
    function frame(ts){
      if (!run) return;
      ctx.clearRect(0,0,W,H); ctx.drawImage(map, 0, 0, W, H);
      /* điểm báo vụ việc */
      if (ts - last > 2600){ last = ts; pings.push({ x: xs[Math.floor(Math.random()*xs.length)], y: ys[Math.floor(Math.random()*ys.length)], t: 0, red: Math.random() < .3 }); }
      pings = pings.filter(function(p){
        p.t += 1; var k = p.t / 180, col = p.red ? '255,120,130' : '120,215,255';
        for (var r = 0; r < 2; r++){ var kk = (k + r * .35) % 1; ctx.strokeStyle = 'rgba(' + col + ',' + (.45 * (1 - kk) * (1 - k * .6)) + ')'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(p.x, p.y, 4 + kk * 46, 0, 6.283); ctx.stroke(); }
        ctx.fillStyle = 'rgba(' + col + ',' + (.8 * (1 - k)) + ')'; ctx.beginPath(); ctx.arc(p.x, p.y, 2.4, 0, 6.283); ctx.fill();
        return p.t < 180;
      });
      units.forEach(function(u){
        var pos = step(u), tr = u.trail;
        for (var i = 1; i < tr.length; i++){
          if (Math.abs(tr[i][0] - tr[i-1][0]) > 30 || Math.abs(tr[i][1] - tr[i-1][1]) > 30) continue;
          ctx.strokeStyle = 'rgba(' + u.c + ',' + (Math.pow(i / tr.length, 1.6) * .85) + ')'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(tr[i-1][0], tr[i-1][1]); ctx.lineTo(tr[i][0], tr[i][1]); ctx.stroke();
        }
        ctx.shadowColor = 'rgba(' + u.c + ',.9)'; ctx.shadowBlur = 12;
        ctx.fillStyle = 'rgba(' + u.c + ',.95)'; ctx.beginPath(); ctx.arc(pos[0], pos[1], 3, 0, 6.283); ctx.fill(); ctx.shadowBlur = 0;
      });
      requestAnimationFrame(frame);
    }
    build(); var rt; addEventListener('resize', function(){ clearTimeout(rt); rt = setTimeout(build, 200); });
    document.addEventListener('visibilitychange', function(){ run = !document.hidden; if (run) requestAnimationFrame(frame); });
    if (reduce) ctx.drawImage(map, 0, 0, W, H); else requestAnimationFrame(frame);
  })();

  /* Logo chìm rải rác trên nền */
  (function(){
    var box = $('marks'), src = document.querySelector('.crest img').src, pos = [[4,10],[30,22],[86,8],[62,34],[10,62],[92,46],[44,80],[76,74],[20,92],[96,90]];
    box.innerHTML = pos.map(function(p, i){ return '<img src="' + src + '" alt="" style="left:' + p[0] + '%;top:' + p[1] + '%;animation-delay:-' + (i * 1.7) + 's">'; }).join('');
  })();

  /* Ánh đèn theo chuột trên thẻ */
  document.querySelectorAll('.panel').forEach(function(p){ p.insertAdjacentHTML('afterbegin', '<span class="spot"></span><span class="border-glow"></span>'); });
  document.addEventListener('mousemove', function(e){
    var p = e.target.closest && e.target.closest('.panel'); if (!p) return;
    var r = p.getBoundingClientRect(); p.style.setProperty('--mx', (e.clientX - r.left) + 'px'); p.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });

  var wm = document.querySelectorAll('.wmk');
  document.addEventListener('scroll', function(e){ var t = e.target; if (!t.classList || !t.classList.contains('slide')) return; t.querySelectorAll('.wmk').forEach(function(w){ var r = w.parentNode.getBoundingClientRect(); w.style.transform = 'translateX(' + (r.top * .12) + 'px)'; }); }, { passive: true, capture: true });

  /* Cổng vào */
  (function(){
    var it = $('intro'); if (!it) return;
    document.body.classList.add('locked');
    function enter(target){
      if (it.classList.contains('leaving')) return;
      it.classList.add('leaving');
      setTimeout(function(){ it.classList.add('done'); document.body.classList.remove('locked'); document.body.classList.add('ready');
        if (target) setTimeout(function(){ goTo(target); }, 150); }, 650);
    }
    $('pGo').addEventListener('click', function(){ enter(); });
    it.querySelectorAll('[data-to]').forEach(function(c){ c.addEventListener('click', function(){ enter(c.dataset.to); }); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Enter' && !it.classList.contains('done')) enter(); });
  })();

  var mq = ['<b>VPD</b>Bảo vệ', '<b>VPD</b>Phục vụ', '<b>VPD</b>Chính trực', '<b>SASP</b>San Andreas State Police', '<b>LSPD</b>Los Santos Police Department', '<b>BCSO</b>Blaine County Sheriff&#39;s Office'];
  var mh = mq.map(function(x){ return '<span>' + x + '</span>'; }).join('');
  $('marq').innerHTML = mh + mh;

  /* =================== Điều khiển slide =================== */
  (function(){
    var deck = $('deck'), slides = Array.prototype.slice.call(deck.querySelectorAll('.slide')), cur = -1, lock = false, acc = 0, accT = 0;
    var bl = $('beamline'), fl = $('flash'), dots = $('dots'), sb = $('scrollbar');
    dots.innerHTML = slides.map(function(s, i){ return '<a data-i="' + i + '"><span>' + s.dataset.t + '</span><b>' + String(i+1).padStart(2,'0') + '</b><i></i></a>'; }).join('');
    function replay(s){
      s.querySelectorAll('.rv').forEach(function(el){ el.classList.remove('in'); io.observe(el); });
      if (s.querySelector('#podium') && lbShown){ lastKey = ''; firstRows = true; render(); }
    }
    function show(i, opt){
      opt = opt || {};
      if (i < 0 || i >= slides.length || (i === cur && !opt.force) || lock) return false;
      lock = true;
      var prev = slides[cur], next = slides[i], dir = i > cur ? 1 : -1;
      if (prev){ prev.style.setProperty('--dy', (-40 * dir) + 'px'); prev.classList.remove('on','p-in'); prev.classList.add('out','p-out'); }
      next.classList.remove('out','p-out'); next.classList.add('on','p-in');
      next.scrollTop = opt.bottom ? next.scrollHeight : 0;
      bl.classList.remove('go'); fl.classList.remove('go'); void bl.offsetWidth; bl.classList.add('go'); fl.classList.add('go');
      cur = i; replay(next); update();
      setTimeout(function(){ if (prev) prev.classList.remove('out','p-out'); next.classList.remove('p-in'); }, 1150); setTimeout(function(){ lock = false; acc = 0; }, 1500);
      return true;
    }
    function update(){
      var s = slides[cur];
      dots.querySelectorAll('a').forEach(function(a){ a.classList.toggle('on', +a.dataset.i === cur); });
      $('dCnt').innerHTML = '<b>' + String(cur+1).padStart(2,'0') + '</b>/ ' + String(slides.length).padStart(2,'0');
      $('dTtl').textContent = s.dataset.t;
      document.querySelectorAll('.side a').forEach(function(a){ a.classList.toggle('on', s.contains($(a.dataset.s))); });
      document.body.classList.toggle('deep', s.id === 's-boluat');
      $('dHint').style.visibility = cur === slides.length - 1 ? 'hidden' : '';
      prog();
    }
    function prog(){ var s = slides[cur], m = s.scrollHeight - s.clientHeight, k = m > 0 ? s.scrollTop / m : 1; sb.style.transform = 'scaleX(' + ((cur + k) / slides.length) + ')'; }
    function slideOf(el){ return slides.findIndex(function(s){ return s.contains(el); }); }
    window.goTo = function(id, then){
      var el = typeof id === 'string' ? $(id) : id; if (!el) return;
      var i = slideOf(el), delay = i === cur ? 0 : 1000;
      show(i);
      setTimeout(function(){ if (then) then(el); else if (!el.classList.contains('slide') && el.tagName !== 'SECTION' && el.tagName !== 'HEADER') el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, delay);
    };
    function atBottom(s){ return s.scrollTop + s.clientHeight >= s.scrollHeight - 3; }
    function atTop(s){ return s.scrollTop <= 2; }
    deck.addEventListener('wheel', function(e){
      if (document.body.classList.contains('locked') || $('sov').classList.contains('open')) return;
      var s = slides[cur], d = e.deltaY, now = Date.now();
      if (now - accT > 220) acc = 0; accT = now;
      if ((d > 0 && atBottom(s)) || (d < 0 && atTop(s))){
        e.preventDefault(); acc += d;
        if (Math.abs(acc) > 110){ acc = 0; d > 0 ? show(cur + 1) : show(cur - 1, { bottom: true }); }
      } else acc = 0;
    }, { passive: false });
    var ty = 0;
    deck.addEventListener('touchstart', function(e){ ty = e.touches[0].clientY; }, { passive: true });
    deck.addEventListener('touchend', function(e){
      var dy = ty - e.changedTouches[0].clientY, s = slides[cur]; if (Math.abs(dy) < 60) return;
      if (dy > 0 && atBottom(s)) show(cur + 1); else if (dy < 0 && atTop(s)) show(cur - 1, { bottom: true });
    }, { passive: true });
    document.addEventListener('keydown', function(e){
      if (document.body.classList.contains('locked') || $('sov').classList.contains('open') || /input/i.test(document.activeElement.tagName)) return;
      var s = slides[cur];
      if (e.key === 'PageDown' || (e.key === 'ArrowDown' && atBottom(s)) || (e.key === ' ' && atBottom(s))){ e.preventDefault(); show(cur + 1); }
      else if (e.key === 'PageUp' || (e.key === 'ArrowUp' && atTop(s))){ e.preventDefault(); show(cur - 1, { bottom: true }); }
      else if (e.key === 'Home'){ e.preventDefault(); show(0); }
      else if (e.key === 'End'){ e.preventDefault(); show(slides.length - 1); }
    });
    slides.forEach(function(s){ s.addEventListener('scroll', function(){ if (s === slides[cur]) prog(); }, { passive: true }); });
    dots.addEventListener('click', function(e){ var a = e.target.closest('a'); if (a) show(+a.dataset.i); });
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener('click', function(e){ var id = a.getAttribute('href').slice(1); var t = $(id); if (t){ e.preventDefault(); e.stopImmediatePropagation(); goTo(t); } }, true);
    });
    show(0);
  })();
})();
