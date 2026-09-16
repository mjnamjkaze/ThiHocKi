/* Lớp 2 — các dạng câu có hình theo bài học SGK Toán 2 (KNTT):
   Bài 26 Đường gấp khúc – Hình tứ giác · Bài 46 Khối trụ – khối cầu · Bài 15 Ki-lô-gam · Bài 16 Lít ·
   Bài 55 Đề-xi-mét – Mét · Bài 37–44 Phép nhân – phép chia · Bài 51 Số có ba chữ số · Bài 49 Tia số ·
   Bài 64 Thu thập – kiểm đếm số liệu · Bài 66 Chắc chắn – có thể – không thể · Bài 56 Tiền Việt Nam · Bài 30 Ngày – tháng */
import * as A from './hinhb-art.mjs';
const { rnd, ri, pick, shuffle, sum, svg, R, L, C, EL, P, PL, T, EM, PATH, INK, PAL, mk, mkImg, saveImg, flatBody, solidBody, SOLID_NAME, FLAT_NAME, SIDES, numberedGrid, optCard, balanceSVG, rulerBody, numberLineSVG, tallySVG, calendarSVG, WD, dim, emojiGroup, r1, fmtNum, money } = A;
const G = 2;
const img = (key, s) => saveImg(G, key, s);
const list = (idx) => idx.map(i => i + 1).join(', ');

/* ── Đường gấp khúc ───────────────────────────────────────────────────────── */
function gapkhuc(key) {
  const n = ri(3, 4), names = 'ABCDE'.slice(0, n + 1);
  const lens = Array.from({ length: n }, () => ri(2, 9));
  if (rnd() < 0.4) lens[ri(0, n - 1)] = ri(10, 15);
  const missing = rnd() < 0.4 ? ri(0, n - 1) : -1;
  const pts = []; let x = 34;
  for (let i = 0; i <= n; i++) { pts.push([x, (i % 2 ? 40 : 112) + ri(-12, 12)]); x += 96 + ri(-14, 14); }
  let s = PL(pts, '#5b8def', 3);
  pts.forEach((p, i) => { s += C(p[0], p[1], 4, INK, INK); s += T(p[0], p[1] + (i % 2 ? -12 : 22), names[i], 15); });
  lens.forEach((l, i) => {
    const [x1, y1] = pts[i], [x2, y2] = pts[i + 1];
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d = Math.hypot(dx, dy);
    const nx = -dy / d * 16, ny = dx / d * 16;
    s += T(mx + nx, my + ny + 5, missing === i ? '?' : `${l} cm`, 13, 'middle', missing === i ? '#b45309' : '#1d4ed8');
  });
  const path = img(key, svg(x + 4, 150, s));
  const total = sum(lens);
  if (missing < 0) {
    const o = mk(total, [total + 1, total - 1, total - lens[n - 1], total + lens[0], total - lens[0]], v => `${v} cm`);
    return { sec: 'Đường gấp khúc', text: `Đường gấp khúc ${names} có độ dài các đoạn thẳng ghi trên hình. Độ dài đường gấp khúc ${names} là bao nhiêu xăng-ti-mét?`, img: path, ...o,
      why: `Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng: ${lens.join(' + ')} = ${total} (cm).` };
  }
  const seg = names[missing] + names[missing + 1], rest = lens.filter((_, i) => i !== missing);
  const o = mk(lens[missing], [lens[missing] + 1, lens[missing] - 1, total - lens[missing], sum(rest) - lens[missing]], v => `${v} cm`);
  return { sec: 'Đường gấp khúc', text: `Đường gấp khúc ${names} dài ${total} cm. Độ dài các đoạn thẳng còn lại ghi trên hình. Đoạn thẳng ${seg} dài bao nhiêu xăng-ti-mét?`, img: path, ...o,
    why: `${seg} = ${total} − (${rest.join(' + ')}) = ${total} − ${sum(rest)} = ${lens[missing]} (cm).` };
}

/* ── Nhận biết hình tứ giác / tam giác trong nhóm hình ────────────────────── */
function tugiac(key) {
  const quads = ['vuong', 'cn', 'thang', 'thoi', 'bh', 'tugiac', 'thangV'], tris = ['tri', 'triR', 'triO'], others = ['ngugiac', 'lucgiac', 'tron', 'oval'];
  const q = ri(2, 4), t = ri(1, 3), oth = ri(1, 2);
  const items = shuffle([...shuffle(quads).slice(0, q), ...shuffle(tris).slice(0, t), ...shuffle(others).slice(0, oth)]);
  const fills = ['#e8f0ff', '#e8f7ee', '#fff3d6', '#fde8ee', '#efe8fb'];
  const grid = numberedGrid(items, 4, 76, (k, cx, cy, i) => flatBody(k, cx, cy, 56, fills[i % fills.length]));
  const path = img(key, svg(grid.w, grid.h, grid.body));
  const askQuad = rnd() < 0.6;
  const idx = items.map((k, i) => (askQuad ? SIDES[k] === 4 : SIDES[k] === 3) ? i : -1).filter(i => i >= 0);
  const n = idx.length;
  const o = mk(n, [n + 1, n - 1, items.length - n, askQuad ? t : q]);
  return { sec: 'Hình tứ giác', text: `Trong hình có bao nhiêu ${askQuad ? 'hình tứ giác' : 'hình tam giác'}?`, img: path, ...o,
    why: `${askQuad ? 'Hình tứ giác có 4 cạnh, 4 đỉnh' : 'Hình tam giác có 3 cạnh, 3 đỉnh'}. Đó là các hình số ${list(idx)} → có ${n} hình.` };
}

/* ── Khối trụ · khối cầu · khối hộp · khối lập phương ─────────────────────── */
function khoi(key) {
  const kinds = ['tru', 'cau', 'hop', 'lapphuong'];
  const n = ri(6, 8);
  let items;
  do { items = Array.from({ length: n }, () => pick(kinds)); } while (new Set(items).size < 3);
  const target = pick(items.filter(k => items.filter(x => x === k).length < n - 1));
  const grid = numberedGrid(items, 4, 84, (k, cx, cy) => solidBody(k, cx, cy, 70));
  const path = img(key, svg(grid.w, grid.h + 4, grid.body));
  const idx = items.map((k, i) => k === target ? i : -1).filter(i => i >= 0), c = idx.length;
  const o = mk(c, [c + 1, c - 1, n - c, c + 2]);
  return { sec: 'Hình khối', text: `Trong hình có bao nhiêu ${SOLID_NAME[target]}?`, img: path, ...o,
    why: `${SOLID_NAME[target].charAt(0).toUpperCase() + SOLID_NAME[target].slice(1)} là các hình số ${list(idx)} → có ${c} khối.` };
}

/* ── Ki-lô-gam: cân thăng bằng ────────────────────────────────────────────── */
function weightsFor(m) { const w = []; let r = m; for (const v of [5, 2, 1]) while (r >= v && w.length < 4) { w.push(v); r -= v; } return r === 0 ? w : null; }
function can(key) {
  const thing = pick([['túi gạo', 'gạo'], ['túi đường', 'đường'], ['quả dưa', 'dưa'], ['túi muối', 'muối'], ['con ngỗng', 'ngỗng']]);
  let m, w = 0, W;
  do { m = ri(2, 12); w = rnd() < 0.5 ? pick([1, 2, 5]) : 0; W = m + w; } while (!weightsFor(W));
  const left = [{ kind: 'bag', label: '?' }]; if (w) left.push({ kind: 'w', label: `${w} kg` });
  const right = weightsFor(W).map(v => ({ kind: 'w', label: `${v} kg` }));
  const path = img(key, balanceSVG(left, right, { caption: `Cân thăng bằng · bên trái: ${thing[0]}${w ? ` và quả cân ${w} kg` : ''}` }));
  const o = mk(m, [W, m + 1, m - 1, W + w, m + 2], v => `${v} kg`);
  return { sec: 'Ki-lô-gam', text: `Cân đang thăng bằng như hình. ${thing[0].charAt(0).toUpperCase() + thing[0].slice(1)} nặng bao nhiêu ki-lô-gam?`, img: path, ...o,
    why: w ? `Hai bên nặng bằng nhau: ${thing[1]} + ${w} kg = ${weightsFor(W).join(' + ')} = ${W} kg, nên ${thing[1]} nặng ${W} − ${w} = ${m} (kg).`
           : `Hai bên nặng bằng nhau nên ${thing[1]} nặng bằng tổng các quả cân: ${weightsFor(W).join(' + ')} = ${m} (kg).` };
}

/* ── Lít: bình, can, xô ───────────────────────────────────────────────────── */
function container(cx, base, w, h, label, kind, fill) {
  let s = '';
  if (kind === 'xo') s += P([[cx - w / 2, base - h], [cx + w / 2, base - h], [cx + w / 2 - 8, base], [cx - w / 2 + 8, base]], fill) + PATH(`M ${r1(cx - w / 2)} ${r1(base - h)} Q ${cx} ${r1(base - h - 26)} ${r1(cx + w / 2)} ${r1(base - h)}`, 'none', INK, 2);
  else if (kind === 'can') s += R(cx - w / 2, base - h, w, h, fill, INK, 2, 'rx="6"') + R(cx - w / 2 + 6, base - h - 10, w * 0.5, 10, fill, INK, 2) + R(cx + w / 2 - 20, base - h - 8, 12, 8, fill, INK, 2);
  else s += R(cx - w / 2, base - h, w, h, fill, INK, 2, 'rx="10"') + R(cx - 10, base - h - 14, 20, 14, fill, INK, 2, 'rx="3"');
  s += T(cx, base - h / 2 + 6, label, 15);
  return s;
}
function lit(key) {
  const kinds = [['xo', 'xô'], ['can', 'can'], ['binh', 'bình']];
  const fills = ['#dbeafe', '#dcfce7', '#fef3c7'];
  if (rnd() < 0.55) {
    const n = ri(2, 3), vals = Array.from({ length: n }, () => pick([1, 2, 3, 5, 10, 20]));
    const kind = pick(kinds);
    let s = ''; vals.forEach((v, i) => s += container(60 + i * 110, 150, 78, 56 + Math.min(v, 20) * 2, `${v} l`, kind[0], fills[i]));
    const path = img(key, svg(n * 110 + 20, 168, s));
    const total = sum(vals);
    const o = mk(total, [total + 1, total - 1, total + vals[0], n], v => `${v} l`);
    return { sec: 'Lít', text: `Có ${n} ${kind[1]} nước, số lít ghi trên mỗi ${kind[1]} như hình. Hỏi tất cả có bao nhiêu lít nước?`, img: path, ...o,
      why: `Tất cả có: ${vals.join(' + ')} = ${total} (l).` };
  }
  let V, c; do { V = pick([6, 8, 10, 12, 15, 20]); c = pick([2, 3, 5]); } while (V % c);
  let s = container(80, 150, 100, 110, `${V} l`, 'can', '#dbeafe') + T(200, 100, '←  đổ đầy bằng', 13, 'middle', '#555', 500) + container(290, 150, 58, 46, `${c} l`, 'xo', '#fef3c7') + T(290, 30, 'ca', 13, 'middle', '#555', 500);
  const path = img(key, svg(360, 168, s));
  const k = V / c;
  const o = mk(k, [k + 1, k - 1, V - c, V + c], v => `${v} ca`);
  return { sec: 'Lít', text: `Can đựng được ${V} l nước, ca đựng được ${c} l. Muốn đổ đầy can thì cần đổ bao nhiêu ca nước?`, img: path, ...o,
    why: `Số ca cần đổ: ${V} : ${c} = ${k} (ca).` };
}

/* ── Đề-xi-mét, mét: đo bằng thước có vạch dm ─────────────────────────────── */
function dm(key) {
  const u = 30, x0 = 24, y = 70;
  const a = rnd() < 0.4 ? ri(1, 4) : 0, b = ri(a + 2, 10);
  const obj = pick([['sợi dây', '#e05b7e'], ['băng giấy', '#39a86b'], ['thanh gỗ', '#b45309'], ['cây thước', '#8e6cd1']]);
  let s = rulerBody(x0, y, 10, u, { unit: 'dm' });
  s += L(x0 + a * u, y + 6, x0 + a * u, 24, '#999', 1.2, 'stroke-dasharray="3 3"') + L(x0 + b * u, y + 6, x0 + b * u, 24, '#999', 1.2, 'stroke-dasharray="3 3"');
  s += R(x0 + a * u, 30, (b - a) * u, 16, obj[1], INK, 1.5, 'rx="4"');
  s += T(x0 + 150, 20, '(mỗi vạch lớn là 1 dm = 10 cm)', 11, 'middle', '#666', 500);
  const path = img(key, svg(x0 * 2 + 10 * u + 24, 116, s));
  const len = b - a;
  if (rnd() < 0.7) {
    const o = mk(len * 10, [len, len * 10 + 10, len * 10 - 10, b * 10, len * 100], v => `${v} cm`);
    return { sec: 'Đề-xi-mét', text: `Đặt ${obj[0]} dọc theo thước đo có vạch đề-xi-mét như hình. ${obj[0].charAt(0).toUpperCase() + obj[0].slice(1)} dài bao nhiêu xăng-ti-mét?`, img: path, ...o,
      why: `${obj[0].charAt(0).toUpperCase() + obj[0].slice(1)} kéo dài từ vạch ${a} đến vạch ${b}, dài ${b} − ${a} = ${len} (dm). 1 dm = 10 cm nên ${len} dm = ${len * 10} cm.` };
  }
  const o = mk(len, [len * 10, b, len + 1, len - 1], v => `${v} dm`);
  return { sec: 'Đề-xi-mét', text: `Đặt ${obj[0]} dọc theo thước đo có vạch đề-xi-mét như hình. ${obj[0].charAt(0).toUpperCase() + obj[0].slice(1)} dài bao nhiêu đề-xi-mét?`, img: path, ...o,
    why: `Từ vạch ${a} đến vạch ${b} là ${b} − ${a} = ${len} (dm).` };
}

/* ── So sánh độ dài hai băng giấy (có đổi dm ↔ cm) ────────────────────────── */
function sosanh(key) {
  let a, b; do { a = ri(6, 30); b = ri(6, 30); } while (a === b);
  const lbl = v => (v % 10 === 0 && rnd() < 0.6) ? `${v / 10} dm` : `${v} cm`;
  const la = lbl(a), lb = lbl(b), u = 9;
  let s = T(40, 42, 'A', 15, 'end') + R(52, 28, a * u, 20, '#dbeafe', INK, 2) + T(52 + a * u + 8, 43, la, 13, 'start', '#1d4ed8');
  s += T(40, 90, 'B', 15, 'end') + R(52, 76, b * u, 20, '#fde8ee', INK, 2) + T(52 + b * u + 8, 91, lb, 13, 'start', '#be123c');
  const path = img(key, svg(52 + Math.max(a, b) * u + 70, 112, s));
  const [big, small, nb, ns] = a > b ? [a, b, 'A', 'B'] : [b, a, 'B', 'A'];
  const d = big - small;
  const o = mk(d, [a + b, d + 1, d - 1, Math.abs((la.includes('dm') ? a / 10 : a) - (lb.includes('dm') ? b / 10 : b))], v => `${v} cm`);
  return { sec: 'So sánh độ dài', text: `Băng giấy ${nb} dài hơn băng giấy ${ns} bao nhiêu xăng-ti-mét?`, img: path, ...o,
    why: `${la.includes('dm') || lb.includes('dm') ? `Đổi về cùng đơn vị: A = ${a} cm, B = ${b} cm. ` : ''}Băng ${nb} dài hơn: ${big} − ${small} = ${d} (cm).` };
}

/* ── Phép nhân qua lưới chấm ─────────────────────────────────────────────── */
function mang(key) {
  const r = ri(2, 6), c = pick([2, 5, 3, 4, 5, 2]);
  let s = '';
  for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) s += C(24 + j * 34, 22 + i * 32, 11, PAL[i % PAL.length], INK, 1.5);
  const path = img(key, svg(24 + c * 34 + 10, 22 + r * 32 + 4, s));
  const n = r * c;
  if (rnd() < 0.5) {
    const o = mk(n, [c + r, n + c, n - c, n + r]);
    return { sec: 'Phép nhân', text: 'Hình có tất cả bao nhiêu chấm tròn?', img: path, ...o,
      why: `Mỗi hàng có ${c} chấm, có ${r} hàng như thế: ${c} × ${r} = ${n} (chấm).` };
  }
  const o = mk(`${c} × ${r} = ${n}`, [`${c} + ${r} = ${c + r}`, `${c} × ${r + 1} = ${c * (r + 1)}`, `${c + 1} × ${r} = ${(c + 1) * r}`], x => x);
  return { sec: 'Phép nhân', text: 'Phép nhân nào phù hợp với hình bên (mỗi hàng là một nhóm bằng nhau)?', img: path, ...o,
    why: `Mỗi hàng có ${c} chấm, ${c} được lấy ${r} lần: ${c} × ${r} = ${n}.` };
}

/* ── Phép chia: chia đều vào đĩa / chia theo nhóm ─────────────────────────── */
function chia(key) {
  const k = pick([2, 5, 3, 4, 2, 5]), m = ri(2, 9), n = k * m;
  const [emo, unit] = pick([['🍪', 'cái bánh'], ['🍬', 'cái kẹo'], ['🍓', 'quả dâu'], ['✏️', 'cái bút']]);
  const cols = n > 20 ? 8 : 6;
  const gr = emojiGroup(16, 12, n, emo, cols, 30);
  let s = R(8, 6, gr.w + 16, gr.h + 12, '#fffbea', '#e8a33d', 2) + gr.body;
  const W = Math.max(gr.w + 24, 60 + k * 62);
  if (rnd() < 0.5) {
    for (let i = 0; i < k; i++) s += EL(40 + i * 62, gr.h + 52, 26, 10, '#f1f5f9', INK, 2);
    const path = img(key, svg(W, gr.h + 76, s));
    const o = mk(m, [m + 1, m - 1, n - k, k]);
    return { sec: 'Phép chia', text: `Chia đều ${n} ${unit} trong hình vào ${k} cái đĩa. Mỗi đĩa có mấy ${unit}?`, img: path, ...o,
      why: `${n} : ${k} = ${m}. Mỗi đĩa có ${m} ${unit}.` };
  }
  s += R(16, gr.h + 30, 130, 30, '#dcfce7', INK, 1.5, 'rx="6"') + T(81, gr.h + 50, `mỗi túi ${m} ${unit}`, 13);
  const path = img(key, svg(Math.max(gr.w + 24, 160), gr.h + 70, s));
  const o = mk(k, [k + 1, k - 1, n - m, m]);
  return { sec: 'Phép chia', text: `Có ${n} ${unit} như hình, xếp vào các túi, mỗi túi ${m} ${unit}. Xếp được bao nhiêu túi?`, img: path, ...o,
    why: `${n} : ${m} = ${k}. Xếp được ${k} túi.` };
}

/* ── Kiểm đếm bằng vạch đếm ───────────────────────────────────────────────── */
function kiemdem(key) {
  const sets = [
    { title: 'Loại quả các bạn lớp 2A thích', rows: [['🍎', 'Táo'], ['🍌', 'Chuối'], ['🍇', 'Nho'], ['🍊', 'Cam']], unit: 'bạn' },
    { title: 'Con vật nuôi của tổ 1', rows: [['🐶', 'Chó'], ['🐱', 'Mèo'], ['🐟', 'Cá'], ['🐰', 'Thỏ']], unit: 'con' },
    { title: 'Phương tiện đi học của lớp 2B', rows: [['🚶', 'Đi bộ'], ['🚲', 'Xe đạp'], ['🛵', 'Xe máy'], ['🚌', 'Xe buýt']], unit: 'bạn' },
  ];
  const st = pick(sets), rows = shuffle(st.rows).slice(0, ri(3, 4));
  let vals; do { vals = rows.map(() => ri(3, 14)); } while (new Set(vals).size < vals.length);
  const path = img(key, tallySVG(rows.map((r, i) => ({ emoji: r[0], name: r[1], n: vals[i] })), { title: st.title }));
  const mode = pick(['one', 'max', 'total', 'diff']);
  const mx = Math.max(...vals), mn = Math.min(...vals);
  if (mode === 'one') { const i = ri(0, rows.length - 1); const o = mk(vals[i], [vals[i] + 1, vals[i] - 1, vals[i] + 5, vals[i] - 5]); return { sec: 'Kiểm đếm', text: `Bảng vạch đếm ghi lại "${st.title}". Có bao nhiêu ${st.unit} ứng với ${rows[i][1].toLowerCase()} ${rows[i][0]}?`, img: path, ...o, why: `Mỗi nhóm 5 vạch (4 vạch đứng và 1 vạch chéo) là 5. Dòng ${rows[i][1].toLowerCase()} có ${Math.floor(vals[i] / 5)} nhóm 5 và ${vals[i] % 5} vạch lẻ: ${vals[i]}.` }; }
  if (mode === 'max') { const i = vals.indexOf(mx); const o = mk(rows[i][1], [...rows.map(r => r[1]).filter(x => x !== rows[i][1]), ...st.rows.map(r => r[1]).filter(x => !rows.some(r2 => r2[1] === x))], x => x); return { sec: 'Kiểm đếm', text: `Bảng vạch đếm ghi lại "${st.title}". Loại nào có nhiều ${st.unit} nhất?`, img: path, ...o, why: `Đếm vạch: ${rows.map((r, j) => `${r[1]} ${vals[j]}`).join(', ')}. Nhiều nhất là ${rows[i][1]} (${mx}).` }; }
  if (mode === 'total') { const t = sum(vals); const o = mk(t, [t + 1, t - 1, t + 5, t - 5]); return { sec: 'Kiểm đếm', text: `Bảng vạch đếm ghi lại "${st.title}". Có tất cả bao nhiêu ${st.unit}?`, img: path, ...o, why: `Tổng: ${vals.join(' + ')} = ${t} (${st.unit}).` }; }
  const o = mk(mx - mn, [mx - mn + 1, mx - mn - 1, mx + mn, mx]);
  return { sec: 'Kiểm đếm', text: `Bảng vạch đếm ghi lại "${st.title}". Loại nhiều nhất hơn loại ít nhất bao nhiêu ${st.unit}?`, img: path, ...o, why: `Nhiều nhất ${mx}, ít nhất ${mn}: ${mx} − ${mn} = ${mx - mn} (${st.unit}).` };
}

/* ── Chắc chắn · có thể · không thể ───────────────────────────────────────── */
const COLORS = [['đỏ', '#e11d48'], ['vàng', '#f5c400'], ['xanh', '#2563eb'], ['tím', '#8e6cd1']];
function khanang(key) {
  const cols = shuffle(COLORS);
  const single = rnd() < 0.3;
  const inBox = single ? [cols[0]] : [cols[0], cols[1]];
  const absent = single ? cols[1] : cols[2];
  const counts = inBox.map(() => ri(2, 5));
  const balls = shuffle(inBox.flatMap((c, i) => Array(counts[i]).fill(c[1])));
  let s = P([[20, 60], [200, 60], [190, 150], [30, 150]], '#f5deb3', INK, 2) + R(14, 48, 192, 14, '#d9b98a', INK, 2);
  balls.forEach((c, i) => s += C(48 + (i % 5) * 30, 88 + Math.floor(i / 5) * 28, 12, c, INK, 1.5));
  const path = img(key, svg(220, 164, s));
  const who = pick(['Mai', 'Nam', 'Hà', 'Việt']);
  const trues = single
    ? [`Chắc chắn lấy được bóng màu ${inBox[0][0]}`, `Không thể lấy được bóng màu ${absent[0]}`]
    : [`Có thể lấy được bóng màu ${inBox[0][0]}`, `Có thể lấy được bóng màu ${inBox[1][0]}`, `Không thể lấy được bóng màu ${absent[0]}`];
  const falses = single
    ? [`Có thể lấy được bóng màu ${absent[0]}`, `Không thể lấy được bóng màu ${inBox[0][0]}`, `Chắc chắn lấy được bóng màu ${absent[0]}`, `Có thể lấy được bóng màu ${cols[2][0]}`]
    : [`Chắc chắn lấy được bóng màu ${inBox[0][0]}`, `Chắc chắn lấy được bóng màu ${inBox[1][0]}`, `Không thể lấy được bóng màu ${inBox[0][0]}`, `Có thể lấy được bóng màu ${absent[0]}`, `Chắc chắn lấy được bóng màu ${absent[0]}`];
  const o = mk(pick(trues), shuffle(falses), x => x);
  return { sec: 'Khả năng xảy ra', text: `Trong hộp có các quả bóng như hình. Không nhìn vào hộp, ${who} lấy ra một quả bóng. Khẳng định nào đúng?`, img: path, ...o,
    why: single ? `Hộp chỉ có bóng màu ${inBox[0][0]} nên chắc chắn lấy được bóng ${inBox[0][0]}, không thể lấy được bóng màu khác.`
                : `Hộp có bóng màu ${inBox[0][0]} và màu ${inBox[1][0]} nên có thể lấy được một trong hai màu đó, không chắc chắn màu nào; không có bóng màu ${absent[0]} nên không thể lấy được bóng ${absent[0]}.` };
}

/* ── Số có ba chữ số qua khối trăm – chục – đơn vị ────────────────────────── */
function hangso(key) {
  const h = ri(1, 6), t = ri(0, 9), o1 = ri(0, 9);
  if (t === 0 && o1 === 0) return hangso(key);
  let s = '', x = 10;
  for (let i = 0; i < h; i++) {
    s += R(x, 20, 46, 46, '#dbeafe', INK, 1.8);
    for (let k = 1; k < 10; k++) { s += L(x + k * 4.6, 20, x + k * 4.6, 66, '#93c5fd', 0.6); s += L(x, 20 + k * 4.6, x + 46, 20 + k * 4.6, '#93c5fd', 0.6); }
    x += 54;
  }
  if (h) x += 10;
  for (let i = 0; i < t; i++) {
    s += R(x, 20, 9, 46, '#dcfce7', INK, 1.5);
    for (let k = 1; k < 10; k++) s += L(x, 20 + k * 4.6, x + 9, 20 + k * 4.6, '#86efac', 0.8);
    x += 15;
  }
  if (t) x += 10;
  for (let i = 0; i < o1; i++) { s += R(x + Math.floor(i / 5) * 14, 56 - (i % 5) * 11, 9, 9, '#fde8ee', INK, 1.5); }
  x += Math.ceil(o1 / 5) * 14;
  s += T(x / 2, 86, 'ô vuông lớn = 100 · thanh = 10 · ô nhỏ = 1', 11, 'middle', '#666', 500);
  const path = img(key, svg(Math.max(x + 10, 250), 96, s));
  const n = h * 100 + t * 10 + o1;
  const o = mk(n, [h * 100 + o1 * 10 + t, n + 10, n - 10, n + 100, Number(`${h}${t}${o1}`.split('').reverse().join('')), h * 100 + t + o1]);
  return { sec: 'Số có ba chữ số', text: 'Hình dưới biểu diễn số nào? (mỗi ô vuông lớn là 100, mỗi thanh là 10, mỗi ô nhỏ là 1)', img: path, ...o,
    why: `Có ${h} trăm, ${t} chục và ${o1} đơn vị: ${h * 100}${t ? ` + ${t * 10}` : ''}${o1 ? ` + ${o1}` : ''} = ${n}.` };
}

/* ── Tia số: điền số còn thiếu ────────────────────────────────────────────── */
function tiaso(key) {
  const step = pick([10, 100, 2, 5, 10, 1]);
  const n = ri(7, 9);
  const start = step === 100 ? 0 : step === 10 ? pick([0, 100, 200, 350, 500, 700]) : step === 1 ? ri(90, 400) : pick([0, 10, 20, 40, 60]);
  const vals = Array.from({ length: n }, (_, i) => start + i * step);
  const q = ri(2, n - 1);
  const hidden = new Set([q]); while (hidden.size < ri(2, 3)) { const h = ri(2, n - 1); if (h !== q) hidden.add(h); }
  const labels = vals.map((v, i) => i === q ? '?' : hidden.has(i) ? null : String(v));
  const path = img(key, numberLineSVG(labels, { u: step === 100 || start >= 100 ? 58 : 50 }));
  const v = vals[q];
  const o = mk(v, [v + step, v - step, v + 1, v - 1, v + step * 2]);
  return { sec: 'Tia số', text: 'Trên tia số, hai số liền nhau cách nhau một khoảng bằng nhau. Số cần điền vào ô có dấu ? là số nào?', img: path, ...o,
    why: `Các số cách nhau ${step} đơn vị (${vals[0]}, ${vals[1]}, …). Vị trí dấu ? là ${vals[q - 1] === undefined ? '' : vals[q - 1] + ' + ' + step + ' = '}${v}.` };
}

/* ── Chọn hình đúng (4 phương án là hình) ─────────────────────────────────── */
function polyCard(nSeg, curve = false) {
  return optCard((cx, cy, s) => {
    const pts = []; for (let i = 0; i <= nSeg; i++) pts.push([cx - s * 0.55 + i * (s * 1.1 / nSeg), cy + (i % 2 ? -s * 0.3 : s * 0.3)]);
    if (curve) return PATH(`M ${r1(pts[0][0])} ${r1(pts[0][1])} Q ${cx} ${r1(cy - s * 0.9)} ${r1(pts[pts.length - 1][0])} ${r1(pts[pts.length - 1][1])}`, 'none', '#5b8def', 3);
    return PL(pts, '#5b8def', 3) + pts.map(p => C(p[0], p[1], 3, INK, INK)).join('');
  }, 130, 90);
}
function chonhinh(key, kind) {
  const flatCard = k => optCard((cx, cy, s) => flatBody(k, cx, cy, s * 0.9, '#e8f0ff'));
  const solidCard = k => optCard((cx, cy, s) => solidBody(k, cx, cy, s * 1.1));
  if (kind === 'tugiac') {
    const q = pick(['thang', 'thoi', 'bh', 'tugiac', 'thangV', 'cn']);
    const o = mkImg(G, key, flatCard(q), shuffle([flatCard(pick(['tri', 'triO'])), flatCard(pick(['ngugiac', 'lucgiac'])), flatCard(pick(['tron', 'oval']))]));
    return { sec: 'Hình tứ giác', text: 'Hình nào là hình tứ giác?', ...o, why: 'Hình tứ giác có 4 cạnh và 4 đỉnh. Các hình còn lại có 3 cạnh, 5–6 cạnh hoặc không có cạnh thẳng.' };
  }
  if (kind === 'tamgiac') {
    const o = mkImg(G, key, flatCard(pick(['tri', 'triR', 'triO'])), shuffle([flatCard(pick(['thang', 'tugiac', 'thoi'])), flatCard(pick(['ngugiac', 'lucgiac'])), flatCard(pick(['tron', 'oval']))]));
    return { sec: 'Hình tam giác', text: 'Hình nào là hình tam giác?', ...o, why: 'Hình tam giác có đúng 3 cạnh và 3 đỉnh.' };
  }
  if (kind === 'gapkhuc') {
    const n = ri(2, 4);
    const wrong = [2, 3, 4, 5].filter(x => x !== n).slice(0, 2).map(x => polyCard(x)); wrong.push(polyCard(n, true));
    const o = mkImg(G, key, polyCard(n), shuffle(wrong));
    return { sec: 'Đường gấp khúc', text: `Đường gấp khúc nào gồm đúng ${n} đoạn thẳng?`, ...o, why: `Đếm số đoạn thẳng nối liền nhau: hình đúng có ${n} đoạn thẳng (${n + 1} điểm). Đường cong không phải đường gấp khúc.` };
  }
  const k = kind.split(':')[1];
  const o = mkImg(G, key, solidCard(k), shuffle(['tru', 'cau', 'hop', 'lapphuong'].filter(x => x !== k).map(solidCard)));
  return { sec: 'Hình khối', text: `Hình nào là ${SOLID_NAME[k]}?`, ...o,
    why: { tru: 'Khối trụ có hai mặt đáy là hình tròn và một mặt cong bao quanh.', cau: 'Khối cầu tròn đều mọi phía, không có mặt phẳng.', hop: 'Khối hộp chữ nhật có 6 mặt là hình chữ nhật.', lapphuong: 'Khối lập phương có 6 mặt đều là hình vuông bằng nhau.' }[k] };
}

/* ── Xem lịch tháng ───────────────────────────────────────────────────────── */
function lich(key) {
  const y = pick([2025, 2026]), mo = ri(1, 12), n = dim(y, mo);
  const mode = pick(['thu', 'dem', 'cuoi', 'thu']);
  if (mode === 'thu') {
    const d = ri(1, n), w = WD[new Date(y, mo - 1, d).getDay()];
    const path = img(key, calendarSVG(y, mo, { mark: d }));
    const o = mk(w, shuffle(WD.filter(x => x !== w)), x => x);
    return { sec: 'Ngày – tháng', text: `Xem tờ lịch tháng ${mo}. Ngày ${d} tháng ${mo} là thứ mấy?`, img: path, ...o, why: `Ngày ${d} (được khoanh) nằm ở cột ${w}.` };
  }
  if (mode === 'cuoi') {
    const w = WD[new Date(y, mo - 1, n).getDay()];
    const path = img(key, calendarSVG(y, mo));
    const o = mk(`Ngày ${n}, ${w}`, shuffle([`Ngày ${n}, ${WD[(WD.indexOf(w) + 1) % 7]}`, `Ngày ${n === 31 ? 30 : 31}, ${w}`, `Ngày ${n === 31 ? 30 : n + 1 > 31 ? 28 : 31}, ${WD[(WD.indexOf(w) + 6) % 7]}`]), x => x);
    return { sec: 'Ngày – tháng', text: `Xem tờ lịch. Ngày cuối cùng của tháng ${mo} năm ${y} là ngày nào, thứ mấy?`, img: path, ...o, why: `Tháng ${mo} năm ${y} có ${n} ngày; ngày ${n} rơi vào ${w}.` };
  }
  const wi = pick([0, 6, 1, 3]); let c = 0; for (let d = 1; d <= n; d++) if (new Date(y, mo - 1, d).getDay() === wi) c++;
  const path = img(key, calendarSVG(y, mo));
  const o = mk(c, [c + 1, c - 1, 7, 4]);
  return { sec: 'Ngày – tháng', text: `Xem tờ lịch. Tháng ${mo} năm ${y} có bao nhiêu ngày ${WD[wi]}?`, img: path, ...o, why: `Đếm các ngày ở cột ${WD[wi]}: có ${c} ngày.` };
}

/* ── Tiền Việt Nam: 100 · 200 · 500 · 1000 đồng ───────────────────────────── */
const NOTES = { 100: '#b45309', 200: '#c2410c', 500: '#be123c', 1000: '#1d4ed8', 2000: '#7c3aed', 5000: '#0f766e' };
function notesSVG(notes) {
  const cols = 3, w = 100, h = 46;
  let s = '';
  notes.forEach((v, i) => {
    const x = 10 + (i % cols) * (w + 10), y = 10 + Math.floor(i / cols) * (h + 10);
    s += R(x, y, w, h, '#fff', NOTES[v], 3, 'rx="6"') + R(x + 6, y + 6, w - 12, h - 12, NOTES[v] + '22', 'none', 0, 'rx="4"');
    s += T(x + w / 2, y + 22, fmtNum(v), 15, 'middle', NOTES[v]) + T(x + w / 2, y + 38, 'đồng', 11, 'middle', NOTES[v], 500);
  });
  return svg(20 + cols * (w + 10) - 10, 10 + Math.ceil(notes.length / cols) * (h + 10), s);
}
function tien(key) {
  const n = ri(3, 6), notes = Array.from({ length: n }, () => pick([100, 200, 500, 1000, 200, 500]));
  const path = img(key, notesSVG(notes));
  const total = sum(notes), who = pick(['Nam', 'Hoa', 'Bình', 'Lan']);
  if (rnd() < 0.55) {
    const o = mk(total, [total + 100, total - 100, total + 500, n * 1000, total - 200], money);
    return { sec: 'Tiền Việt Nam', text: `${who} có các tờ tiền như hình. ${who} có tất cả bao nhiêu tiền?`, img: path, ...o, why: `${notes.map(fmtNum).join(' + ')} = ${fmtNum(total)} (đồng).` };
  }
  const price = pick([100, 200, 300, 500, 700, 1000, 1500].filter(p => p < total));
  const rest = total - price;
  const o = mk(rest, [rest + 100, rest - 100, total, price, rest + 500], money);
  return { sec: 'Tiền Việt Nam', text: `${who} có các tờ tiền như hình và mua một chiếc kẹo giá ${money(price)}. ${who} còn lại bao nhiêu tiền?`, img: path, ...o,
    why: `Tổng tiền: ${notes.map(fmtNum).join(' + ')} = ${fmtNum(total)} đồng. Còn lại: ${fmtNum(total)} − ${fmtNum(price)} = ${fmtNum(rest)} (đồng).` };
}

/* ── KẾ HOẠCH 10 ĐỀ ───────────────────────────────────────────────────────── */
const rep = (f, n, arg) => Array.from({ length: n }, () => [f, arg]);
export const PLAN = [
  { title: 'Đề 1 · Đường gấp khúc — độ dài', q: [...rep(gapkhuc, 5), ...rep(sosanh, 3), ...rep(chonhinh, 2, 'gapkhuc')] },
  { title: 'Đề 2 · Hình tứ giác — hình tam giác', q: [...rep(tugiac, 4), ...rep(chonhinh, 2, 'tugiac'), ...rep(chonhinh, 1, 'tamgiac'), ...rep(gapkhuc, 3)] },
  { title: 'Đề 3 · Khối trụ — khối cầu — khối hộp', q: [...rep(khoi, 6), ...rep(chonhinh, 1, 'khoi:tru'), ...rep(chonhinh, 1, 'khoi:cau'), ...rep(chonhinh, 1, 'khoi:lapphuong'), ...rep(chonhinh, 1, 'khoi:hop')] },
  { title: 'Đề 4 · Ki-lô-gam — Lít', q: [...rep(can, 5), ...rep(lit, 5)] },
  { title: 'Đề 5 · Đề-xi-mét — Mét', q: [...rep(dm, 5), ...rep(sosanh, 3), ...rep(gapkhuc, 2)] },
  { title: 'Đề 6 · Phép nhân — phép chia qua hình', q: [...rep(mang, 5), ...rep(chia, 5)] },
  { title: 'Đề 7 · Số có ba chữ số — tia số', q: [...rep(hangso, 5), ...rep(tiaso, 5)] },
  { title: 'Đề 8 · Kiểm đếm số liệu', q: [...rep(kiemdem, 7), ...rep(khanang, 3)] },
  { title: 'Đề 9 · Chắc chắn — có thể — không thể', q: [...rep(khanang, 6), ...rep(kiemdem, 4)] },
  { title: 'Đề 10 · Tiền Việt Nam — xem lịch', q: [...rep(tien, 5), ...rep(lich, 5)] },
];
export const HERO = {
  title: 'Toán lớp 2 qua hình — bài học: đường gấp khúc, hình khối, kg – lít – dm, nhân chia, kiểm đếm, khả năng, tiền và lịch',
  intro: 'Bài 26 · 46 · 15 · 16 · 55 · 37–44 · 51 · 64 · 66 · 56 · 30 (SGK Kết nối tri thức)',
};
