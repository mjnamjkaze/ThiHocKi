/* Lớp 4 — các dạng câu có hình theo bài học SGK Toán 4 (KNTT):
   Bài 8 Góc nhọn – góc tù – góc bẹt · Bài 7 Đo góc, đơn vị đo góc · Bài 27–30 Hai đường thẳng vuông góc – song song ·
   Bài 31 Hình bình hành – hình thoi · Bài 17 Yến, tạ, tấn · Bài 18 dm², m² · Bài 19 Giây, thế kỉ ·
   Bài 25 Tìm hai số khi biết tổng và hiệu · Bài 47 Rút về đơn vị · Bài 46 Trung bình cộng · Bài 13 Làm tròn số ·
   Bài 49–51 Dãy số liệu – biểu đồ cột – số lần xuất hiện · Bài 53–58 Phân số, so sánh phân số */
import * as A from './hinhb-art.mjs';
const { rnd, ri, pick, shuffle, sum, gcd, svg, R, L, C, EL, P, PL, T, EM, PATH, INK, PAL, mk, mkImg, saveImg, flatBody, FLAT_NAME, numberedGrid, optCard, tableSVG, barChartSVG, barModelSVG, numberLineSVG, deg, r1, fmtNum, money, emojiGroup } = A;
const G = 4;
const img = (key, s) => saveImg(G, key, s);
const list = idx => idx.map(i => i + 1).join(', ');
const ROMAN = { 13: 'XIII', 14: 'XIV', 15: 'XV', 16: 'XVI', 17: 'XVII', 18: 'XVIII', 19: 'XIX', 20: 'XX', 21: 'XXI', 22: 'XXII', 23: 'XXIII', 24: 'XXIV' };
const eqFrac = (a, b, c, d) => a * d === b * c;

/* vẽ góc: đỉnh (cx,cy), tia 1 theo hướng rot (độ, 0 = sang phải), tia 2 lệch ang ngược chiều kim đồng hồ */
function angleBody(cx, cy, ang, len, rot = 0, labels = null) {
  const a1 = rot, a2 = rot - ang;
  const p1 = [cx + len * Math.cos(deg(a1)), cy + len * Math.sin(deg(a1))], p2 = [cx + len * Math.cos(deg(a2)), cy + len * Math.sin(deg(a2))];
  let s = L(cx, cy, p1[0], p1[1], INK, 2.5) + L(cx, cy, p2[0], p2[1], INK, 2.5) + C(cx, cy, 3.5, INK, INK);
  if (ang === 90) { const k = 12; const q1 = [cx + k * Math.cos(deg(a1)), cy + k * Math.sin(deg(a1))], q2 = [cx + k * Math.cos(deg(a2)), cy + k * Math.sin(deg(a2))]; s += PL([q1, [q1[0] + q2[0] - cx, q1[1] + q2[1] - cy], q2], '#e05b7e', 1.8); }
  else if (ang !== 180) { const rr = 18; s += PATH(`M ${r1(cx + rr * Math.cos(deg(a1)))} ${r1(cy + rr * Math.sin(deg(a1)))} A ${rr} ${rr} 0 0 0 ${r1(cx + rr * Math.cos(deg(a2)))} ${r1(cy + rr * Math.sin(deg(a2)))}`, 'none', '#5b8def', 1.8); }
  else s += PATH(`M ${cx + 18} ${cy} A 18 18 0 0 0 ${cx - 18} ${cy}`, 'none', '#5b8def', 1.8);
  if (labels) { s += T(p1[0] + 10 * Math.cos(deg(a1)), p1[1] + 10 * Math.sin(deg(a1)) + 5, labels[0], 14); s += T(p2[0] + 10 * Math.cos(deg(a2)), p2[1] + 10 * Math.sin(deg(a2)) + 5, labels[1], 14); s += T(cx - 4, cy + 18, labels[2], 14); }
  return s;
}
const KIND = a => a < 90 ? 'Góc nhọn' : a === 90 ? 'Góc vuông' : a < 180 ? 'Góc tù' : 'Góc bẹt';

/* ── Góc nhọn – góc tù – góc bẹt ──────────────────────────────────────────── */
function goc(key) {
  const ang = pick([30, 45, 60, 70, 90, 110, 120, 135, 150, 180]);
  const s = angleBody(ang === 180 ? 150 : 50, 130, ang, 130, 0, ang === 180 ? ['y', 'x', 'O'] : ['x', 'y', 'O']);
  const path = img(key, svg(ang === 180 ? 300 : 260, 160, s));
  const o = mk(KIND(ang), ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt'].filter(k => k !== KIND(ang)), x => x);
  return { sec: 'Góc', text: 'Góc xOy trong hình là góc gì?', img: path, ...o,
    why: ang === 90 ? 'Góc xOy bằng góc vuông (đánh dấu ô vuông ở đỉnh) → góc vuông (90°).' : ang === 180 ? 'Hai tia Ox, Oy tạo thành một đường thẳng → góc bẹt (180°, bằng hai góc vuông).' : ang < 90 ? `Góc xOy nhỏ hơn góc vuông (${ang}° < 90°) → góc nhọn.` : `Góc xOy lớn hơn góc vuông nhưng nhỏ hơn góc bẹt (90° < ${ang}° < 180°) → góc tù.` };
}

/* ── Đo góc bằng thước đo độ ──────────────────────────────────────────────── */
function thuocdo(key) {
  const th = pick([20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160]);
  const cx = 180, cy = 175, R0 = 150;
  let s = PATH(`M ${cx - R0} ${cy} A ${R0} ${R0} 0 0 1 ${cx + R0} ${cy} Z`, '#f8fafc', INK, 2);
  s += PATH(`M ${cx - 40} ${cy} A 40 40 0 0 1 ${cx + 40} ${cy}`, '#fff', INK, 1.5);
  for (let a = 0; a <= 180; a += 5) {
    const big = a % 10 === 0, len = a % 30 === 0 ? 18 : big ? 12 : 7;
    const x1 = cx + R0 * Math.cos(deg(180 - a)), y1 = cy - R0 * Math.sin(deg(180 - a));
    const x2 = cx + (R0 - len) * Math.cos(deg(180 - a)), y2 = cy - (R0 - len) * Math.sin(deg(180 - a));
    s += L(x1, y1, x2, y2, INK, big ? 1.4 : 0.9);
    if (a % 30 === 0) s += T(cx + (R0 - 30) * Math.cos(deg(180 - a)), cy - (R0 - 30) * Math.sin(deg(180 - a)) + 4, String(a), 11, 'middle', INK, 600);
  }
  s += T(cx + R0 - 14, cy - 8, '0', 10, 'middle', '#888', 500);
  const px = cx + (R0 + 22) * Math.cos(deg(th)), py = cy - (R0 + 22) * Math.sin(deg(th));
  s += L(cx, cy, cx + R0 + 22, cy, '#e05b7e', 3) + L(cx, cy, px, py, '#e05b7e', 3) + C(cx, cy, 4, '#e05b7e', '#e05b7e');
  s += T(cx + R0 + 34, cy + 5, 'x', 14) + T(px + 12 * Math.cos(deg(th)), py - 12 * Math.sin(deg(th)) + 4, 'y', 14) + T(cx, cy + 20, 'O', 14);
  const path = img(key, svg(370, 215, s));
  const o = mk(th, [180 - th, th + 10, th - 10, th + 5], v => `${v}°`);
  return { sec: 'Đo góc', text: 'Đặt thước đo góc như hình (tia Ox đi qua vạch 0). Góc xOy có số đo bao nhiêu?', img: path, ...o,
    why: `Tia Oy đi qua vạch ${th} trên thước (đọc theo vạch 0 ở tia Ox) → góc xOy = ${th}°.${th === 90 ? ' Đây là góc vuông.' : th < 90 ? ' Đây là góc nhọn.' : ' Đây là góc tù.'}` };
}

/* ── Hai đường thẳng vuông góc – song song ────────────────────────────────── */
function vgss(key) {
  if (rnd() < 0.6) {
    const flip = rnd() < 0.5;
    const X = x => flip ? 320 - x : x;
    const pts = { A: [X(60), 160], B: [X(60), 50], C: [X(190), 50], D: [X(260), 160] };
    let s = P([pts.A, pts.B, pts.C, pts.D], '#e8f0ff', INK, 2.5);
    const mark = (p, dx, dy) => PL([[p[0] + dx, p[1]], [p[0] + dx, p[1] + dy], [p[0], p[1] + dy]], '#e05b7e', 1.8);
    s += mark(pts.A, flip ? -14 : 14, -14) + mark(pts.B, flip ? -14 : 14, 14);
    s += T(pts.A[0] + (flip ? 14 : -14), pts.A[1] + 6, 'A', 15) + T(pts.B[0] + (flip ? 14 : -14), pts.B[1] + 2, 'B', 15) + T(pts.C[0] + (flip ? -12 : 12), pts.C[1] - 4, 'C', 15) + T(pts.D[0] + (flip ? -14 : 14), pts.D[1] + 6, 'D', 15);
    const path = img(key, svg(320, 185, s));
    if (rnd() < 0.5) {
      const o = mk('BC và AD', ['AB và CD', 'AB và BC', 'CD và AD'], x => x);
      return { sec: 'Song song', text: 'Trong hình tứ giác ABCD, cặp cạnh nào song song với nhau?', img: path, ...o, why: 'BC và AD cùng vuông góc với AB nên BC song song với AD. Cạnh CD xiên, không song song với cạnh nào.' };
    }
    const o = mk(pick(['AB và AD', 'AB và BC']), ['CD và AD', 'BC và CD', 'BC và AD'], x => x);
    return { sec: 'Vuông góc', text: 'Trong hình tứ giác ABCD (có hai góc vuông được đánh dấu), cặp cạnh nào vuông góc với nhau?', img: path, ...o, why: 'Góc A và góc B là góc vuông nên AB ⊥ AD và AB ⊥ BC. Các cặp còn lại không vuông góc (BC ∥ AD; CD xiên).' };
  }
  const shapes = {
    cn: { k: 'cn', n: 2, why: 'Hình chữ nhật có 2 cặp cạnh đối diện song song.' },
    bh: { k: 'bh', n: 2, why: 'Hình bình hành có 2 cặp cạnh đối diện song song.' },
    thang: { k: 'thang', n: 1, why: 'Hình thang chỉ có 1 cặp cạnh đáy song song, hai cạnh bên không song song.' },
    tri: { k: 'tri', n: 0, why: 'Tam giác không có cặp cạnh nào song song.' },
    lucgiac: { k: 'lucgiac', n: 3, why: 'Lục giác đều có 3 cặp cạnh đối diện song song.' },
    thoi: { k: 'thoi', n: 2, why: 'Hình thoi có 2 cặp cạnh đối diện song song.' },
  };
  const sh = shapes[pick(Object.keys(shapes))];
  const path = img(key, svg(220, 200, flatBody(sh.k, 110, 100, 150, '#fff3d6')));
  const o = mk(sh.n, [sh.n + 1, sh.n - 1, sh.n + 2, 4]);
  return { sec: 'Song song', text: `${FLAT_NAME[sh.k].charAt(0).toUpperCase() + FLAT_NAME[sh.k].slice(1)} trong hình có bao nhiêu cặp cạnh song song với nhau?`, img: path, ...o, why: sh.why };
}

/* ── Hình bình hành – hình thoi ───────────────────────────────────────────── */
function bhthoi(key) {
  const pool = ['bh', 'thoi', 'thang', 'thangV', 'tri', 'tugiac', 'ngugiac', 'cn'];
  const target = pick(['bh', 'thoi']);
  let items; do { items = Array.from({ length: ri(6, 8) }, () => pick(pool)); } while (items.filter(k => k === target).length < 2 || items.filter(k => k === target).length > 4);
  const grid = numberedGrid(items, 4, 80, (k, cx, cy, i) => flatBody(k, cx, cy, 58, ['#e8f0ff', '#e8f7ee', '#fff3d6', '#fde8ee'][i % 4]));
  const path = img(key, svg(grid.w, grid.h, grid.body));
  const idx = items.map((k, i) => k === target ? i : -1).filter(i => i >= 0), c = idx.length;
  const other = items.filter(k => k === (target === 'bh' ? 'thoi' : 'bh')).length;
  const o = mk(c, [c + other, c + 1, c - 1, items.length - c]);
  return { sec: 'Hình bình hành – hình thoi', text: `Trong hình có bao nhiêu ${FLAT_NAME[target]}?`, img: path, ...o,
    why: `${FLAT_NAME[target].charAt(0).toUpperCase() + FLAT_NAME[target].slice(1)} ${target === 'bh' ? 'có hai cặp cạnh đối diện song song và bằng nhau' : 'có bốn cạnh bằng nhau, hai cặp cạnh đối diện song song'}: các hình số ${list(idx)} → ${c} hình.${other ? ` (${FLAT_NAME[target === 'bh' ? 'thoi' : 'bh']} không tính.)` : ''}` };
}
function chuviBh(key) {
  if (rnd() < 0.5) {
    const a = ri(5, 15), b = ri(3, a - 1);
    let s = P([[40, 150], [90, 50], [90 + a * 14, 50], [40 + a * 14, 150]], '#e8f0ff', INK, 2.5);
    s += T(65 + a * 7, 172, `${a} cm`, 14, 'middle', '#1d4ed8') + T(50, 100, `${b} cm`, 14, 'end', '#1d4ed8');
    const path = img(key, svg(110 + a * 14, 190, s));
    const per = 2 * (a + b);
    const o = mk(per, [a + b, a * b, per + 2, 2 * a + b], v => `${v} cm`);
    return { sec: 'Chu vi hình bình hành', text: 'Hình bình hành có độ dài hai cạnh kề ghi trên hình (các cạnh đối diện bằng nhau). Chu vi hình bình hành là bao nhiêu?', img: path, ...o, why: `Hai cặp cạnh đối bằng nhau nên chu vi = (${a} + ${b}) × 2 = ${per} (cm).` };
  }
  const a = ri(4, 15);
  let s = P([[110, 30], [180, 100], [110, 170], [40, 100]], '#fde8ee', INK, 2.5) + T(158, 60, `${a} cm`, 14, 'start', '#be123c');
  const path = img(key, svg(230, 190, s));
  const o = mk(a * 4, [a * 2, a * a, a * 4 + 4, a + 4], v => `${v} cm`);
  return { sec: 'Chu vi hình thoi', text: 'Hình thoi có độ dài một cạnh ghi trên hình. Chu vi hình thoi là bao nhiêu?', img: path, ...o, why: `Hình thoi có 4 cạnh bằng nhau nên chu vi = ${a} × 4 = ${a * 4} (cm).` };
}

/* ── Yến – tạ – tấn ───────────────────────────────────────────────────────── */
function sackBody(cx, base, label, fill) {
  return PATH(`M ${cx - 30} ${base} L ${cx - 30} ${base - 46} Q ${cx} ${base - 76} ${cx + 30} ${base - 46} L ${cx + 30} ${base} Z`, fill, INK, 2) + L(cx - 20, base - 52, cx + 20, base - 52, INK, 1.5) + T(cx, base - 18, label, 13);
}
function yenta(key) {
  const units = [['yến', 10], ['tạ', 100], ['tấn', 1000], ['kg', 1]];
  const n = ri(2, 3);
  const parts = Array.from({ length: n }, (_, i) => { const u = pick(i === 0 ? units.slice(0, 3) : units); const v = u[0] === 'tấn' ? ri(1, 3) : u[0] === 'kg' ? pick([20, 30, 40, 50, 60, 80]) : ri(1, 9); return { v, u: u[0], kg: v * u[1] }; });
  let s = R(10, 130, 40 + n * 90, 26, '#94a3b8', INK, 2, 'rx="4"') + C(45, 166, 12, '#334155', INK, 2) + C(30 + n * 90, 166, 12, '#334155', INK, 2);
  parts.forEach((p, i) => s += sackBody(55 + i * 90, 130, `${p.v} ${p.u}`, ['#fef3c7', '#dcfce7', '#dbeafe'][i]));
  const path = img(key, svg(60 + n * 90, 186, s));
  const total = sum(parts.map(p => p.kg));
  const naive = sum(parts.map(p => p.v));
  const o = mk(total, [naive, total + 10, total - 10, sum(parts.map(p => p.u === 'tạ' ? p.v * 10 : p.u === 'tấn' ? p.v * 100 : p.kg)), total * 10], v => `${fmtNum(v)} kg`);
  return { sec: 'Yến, tạ, tấn', text: 'Xe chở các bao hàng có khối lượng ghi trên hình. Xe chở tất cả bao nhiêu ki-lô-gam?', img: path, ...o,
    why: `Đổi: ${parts.map(p => p.u === 'kg' ? `${p.v} kg` : `${p.v} ${p.u} = ${fmtNum(p.kg)} kg`).join('; ')}. Tổng: ${parts.map(p => fmtNum(p.kg)).join(' + ')} = ${fmtNum(total)} (kg).` };
}

/* ── Đề-xi-mét vuông, mét vuông ───────────────────────────────────────────── */
function dm2(key) {
  const big = rnd() < 0.5;
  const a = ri(2, 6), b = ri(2, 4), u = 34;
  let s = '';
  for (let i = 0; i < b; i++) for (let j = 0; j < a; j++) s += R(30 + j * u, 30 + i * u, u, u, '#dbeafe', INK, 1.5);
  s += T(30 + a * u / 2, 20, `${a} ${big ? 'm' : 'dm'}`, 14, 'middle', '#1d4ed8') + T(22, 30 + b * u / 2 + 5, `${b} ${big ? 'm' : 'dm'}`, 14, 'end', '#1d4ed8');
  s += T(30 + a * u / 2, 30 + b * u + 20, `mỗi ô là 1 ${big ? 'm²' : 'dm²'}`, 12, 'middle', '#666', 500);
  const path = img(key, svg(60 + a * u, 62 + b * u, s));
  const area = a * b;
  const o = mk(area * 100, [area, area * 10, area * 1000, (a + b) * 2 * 100], v => `${fmtNum(v)} ${big ? 'dm²' : 'cm²'}`);
  return { sec: big ? 'Mét vuông' : 'Đề-xi-mét vuông', text: `Hình chữ nhật được ghép từ các ô vuông cạnh 1 ${big ? 'm' : 'dm'} như hình. Diện tích hình chữ nhật là bao nhiêu ${big ? 'đề-xi-mét vuông' : 'xăng-ti-mét vuông'}?`, img: path, ...o,
    why: `Diện tích = ${a} × ${b} = ${area} (${big ? 'm²' : 'dm²'}). Vì 1 ${big ? 'm² = 100 dm²' : 'dm² = 100 cm²'} nên ${area} ${big ? 'm²' : 'dm²'} = ${fmtNum(area * 100)} ${big ? 'dm²' : 'cm²'}.` };
}

/* ── Thế kỉ trên trục thời gian ───────────────────────────────────────────── */
function theki(key) {
  const c0 = pick([16, 17, 18, 19]);
  const years = [0, 1, 2, 3].map(i => (c0 + i) * 100);
  const Y = pick([ri(years[1] + 1, years[2]), ri(years[0] + 1, years[1]), ri(years[2] + 1, years[3]), years[1], years[2]]);
  const u = 100, x0 = 40, y = 70;
  let s = L(x0 - 16, y, x0 + 3 * u + 20, y, INK, 2.5) + P([[x0 + 3 * u + 22, y], [x0 + 3 * u + 12, y - 6], [x0 + 3 * u + 12, y + 6]], INK);
  years.forEach((yr, i) => { s += L(x0 + i * u, y - 10, x0 + i * u, y + 10, INK, 2) + T(x0 + i * u, y + 28, String(yr), 13); });
  for (let i = 0; i < 3; i++) s += T(x0 + i * u + u / 2, y - 22, `thế kỉ ${ROMAN[c0 + i + 1]}`, 11, 'middle', '#666', 600);
  const px = x0 + (Y - years[0]) / 100 * u;
  s += C(px, y, 6, '#e05b7e', '#e05b7e') + T(px, y + 48, `năm ${Y}`, 13, 'middle', '#be123c');
  const path = img(key, svg(x0 * 2 + 3 * u + 10, 110, s));
  const c = Math.ceil(Y / 100);
  if (rnd() < 0.7) {
    const o = mk(ROMAN[c], [ROMAN[c - 1], ROMAN[c + 1], ROMAN[c - 2], ROMAN[c + 2]], x => `Thế kỉ ${x}`);
    return { sec: 'Thế kỉ', text: `Sự kiện xảy ra vào năm ${Y} (chấm đỏ trên trục thời gian). Năm ${Y} thuộc thế kỉ nào?`, img: path, ...o,
      why: `Thế kỉ ${ROMAN[c]} gồm các năm từ ${(c - 1) * 100 + 1} đến ${c * 100}. Năm ${Y} nằm trong khoảng đó${Y % 100 === 0 ? ' (năm tròn trăm là năm cuối của thế kỉ)' : ''}.` };
  }
  const target = pick([years[3], years[3] + 100]);
  const o = mk(target - Y, [target - Y + 100, target - Y - 100, target - Y + 1, Math.abs(Y - years[0])], v => `${v} năm`);
  return { sec: 'Thế kỉ', text: `Sự kiện xảy ra vào năm ${Y} (chấm đỏ). Từ năm ${Y} đến năm ${target} là bao nhiêu năm?`, img: path, ...o, why: `${target} − ${Y} = ${target - Y} (năm).` };
}

/* ── Tổng – hiệu qua sơ đồ đoạn thẳng ─────────────────────────────────────── */
function tonghieu(key) {
  const ctx = pick([['Anh', 'Em', 'tuổi'], ['Lớp 4A', 'Lớp 4B', 'học sinh'], ['Thùng 1', 'Thùng 2', 'lít dầu'], ['Ngăn trên', 'Ngăn dưới', 'quyển sách'], ['Số lớn', 'Số bé', '']]);
  const small = ri(4, 30), diff = ri(2, 14), big = small + diff, tot = big + small;
  const u = Math.min(9, 260 / big);
  const path = img(key, barModelSVG([{ label: ctx[0], len: big, text: '?' }, { label: ctx[1], len: small, text: '?', fill: '#fde8ee' }], { u, brace: { label: `Tổng: ${tot}` }, diff: { label: `${diff}` } }));
  const askBig = rnd() < 0.5;
  const ans = askBig ? big : small;
  const o = mk(ans, [askBig ? small : big, (tot + diff), (tot - diff), ans + 1, Math.floor(tot / 2)], v => `${v}${ctx[2] ? ' ' + ctx[2] : ''}`);
  return { sec: 'Tổng – hiệu', text: `Sơ đồ cho biết tổng của hai số là ${tot} và ${ctx[0].toLowerCase()} hơn ${ctx[1].toLowerCase()} là ${diff}${ctx[2] ? ' ' + ctx[2] : ''}. ${ctx[0]} có bao nhiêu${ctx[2] ? ' ' + ctx[2] : ''}?`.replace(`${ctx[0]} có`, askBig ? `${ctx[0]} có` : `${ctx[1]} có`), img: path, ...o,
    why: askBig ? `Số lớn = (tổng + hiệu) : 2 = (${tot} + ${diff}) : 2 = ${big}.` : `Số bé = (tổng − hiệu) : 2 = (${tot} − ${diff}) : 2 = ${small}.` };
}

/* ── Rút về đơn vị ────────────────────────────────────────────────────────── */
function rutve(key) {
  const k = ri(2, 6), unit = pick([3000, 4000, 5000, 6000, 8000, 12000, 15000]), P0 = k * unit;
  let m; do { m = ri(2, 9); } while (m === k);
  const [emo, name] = pick([['📦', 'hộp bút'], ['📚', 'quyển vở'], ['🧃', 'hộp sữa'], ['🍞', 'ổ bánh mì']]);
  const gr = emojiGroup(16, 12, k, emo, 6, 40);
  let s = R(8, 6, gr.w + 16, gr.h + 12, '#fffbea', '#e8a33d', 2) + gr.body;
  s += R(16, gr.h + 30, 190, 30, '#dcfce7', INK, 1.5, 'rx="6"') + T(111, gr.h + 50, `${k} ${name}: ${money(P0)}`, 13);
  const path = img(key, svg(Math.max(gr.w + 24, 220), gr.h + 70, s));
  const ans = m * unit;
  const o = mk(ans, [unit, P0 * m, P0 + (m - k) * 1000, ans + unit], money);
  return { sec: 'Rút về đơn vị', text: `Mua ${k} ${name} như hình phải trả ${money(P0)}. Hỏi mua ${m} ${name} như thế phải trả bao nhiêu tiền?`, img: path, ...o,
    why: `Giá 1 ${name}: ${fmtNum(P0)} : ${k} = ${fmtNum(unit)} (đồng). Mua ${m} ${name}: ${fmtNum(unit)} × ${m} = ${fmtNum(ans)} (đồng).` };
}

/* ── Trung bình cộng qua biểu đồ cột ─────────────────────────────────────── */
function bieudoTbc(key) {
  const sets = [['Tổ 1', 'Tổ 2', 'Tổ 3', 'Tổ 4'], ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'], ['Lớp 4A', 'Lớp 4B', 'Lớp 4C']];
  const cats = pick(sets), n = cats.length;
  const unitName = pick(['cây', 'quyển sách', 'kg giấy', 'điểm 10']);
  let vals; do { vals = cats.map(() => ri(6, 40)); } while (sum(vals) % n || new Set(vals).size < n);
  const path = img(key, barChartSVG(cats, vals, { title: `Số ${unitName} của các ${cats[0].split(' ')[0].toLowerCase()}` }));
  const mode = pick(['tbc', 'tbc', 'hon', 'tong']);
  if (mode === 'tbc') { const m = sum(vals) / n; const o = mk(m, [sum(vals), m + 1, m - 1, Math.max(...vals)], v => `${v} ${unitName}`); return { sec: 'Trung bình cộng', text: `Biểu đồ cho biết số ${unitName} của ${n} ${cats[0].split(' ')[0].toLowerCase()}. Trung bình mỗi ${cats[0].split(' ')[0].toLowerCase()} có bao nhiêu ${unitName}?`, img: path, ...o, why: `(${vals.join(' + ')}) : ${n} = ${sum(vals)} : ${n} = ${m}.` }; }
  if (mode === 'tong') { const t = sum(vals); const o = mk(t, [t + 1, t - 1, t / n, t + 10], v => `${v} ${unitName}`); return { sec: 'Biểu đồ cột', text: `Biểu đồ cho biết số ${unitName} của ${n} ${cats[0].split(' ')[0].toLowerCase()}. Tổng số ${unitName} là bao nhiêu?`, img: path, ...o, why: `${vals.join(' + ')} = ${t}.` }; }
  const m = sum(vals) / n; const above = vals.map((v, i) => v > m ? i : -1).filter(i => i >= 0);
  if (!above.length) return bieudoTbc(key);
  const i = pick(above);
  const o = mk(vals[i] - m, [vals[i], vals[i] - m + 1, vals[i] - m - 1, m], v => `${v} ${unitName}`);
  return { sec: 'Trung bình cộng', text: `Biểu đồ cho biết số ${unitName} của ${n} ${cats[0].split(' ')[0].toLowerCase()}. ${cats[i]} có nhiều hơn mức trung bình bao nhiêu ${unitName}?`, img: path, ...o, why: `Trung bình: ${sum(vals)} : ${n} = ${m}. ${cats[i]} hơn trung bình: ${vals[i]} − ${m} = ${vals[i] - m}.` };
}

/* ── Làm tròn số trên tia số ──────────────────────────────────────────────── */
function lamtron(key) {
  const a = ri(2, 89) * 1000;
  let v; do { v = a + ri(1, 999); } while (v % 100 === 0 || v % 1000 === 500);
  const labels = Array.from({ length: 11 }, (_, i) => i === 0 ? fmtNum(a) : i === 5 ? fmtNum(a + 500) : i === 10 ? fmtNum(a + 1000) : null);
  const path = img(key, numberLineSVG(labels, { u: 34, points: [{ i: (v - a) / 100, label: fmtNum(v) }] }));
  const near = v - a < 500 ? a : a + 1000;
  const o = mk(near, [near === a ? a + 1000 : a, a + 500, Math.round(v / 100) * 100], fmtNum);
  return { sec: 'Làm tròn số', text: `Trên tia số (mỗi vạch nhỏ là 100), số ${fmtNum(v)} được đánh dấu bằng chấm đỏ (vị trí gần đúng). Làm tròn số ${fmtNum(v)} đến hàng nghìn ta được số nào?`, img: path, ...o,
    why: `Chữ số hàng trăm của ${fmtNum(v)} là ${Math.floor((v % 1000) / 100)} (${v % 1000 < 500 ? '< 5 nên làm tròn xuống' : '≥ 5 nên làm tròn lên'}): ${fmtNum(v)} ≈ ${fmtNum(near)}. Trên tia số, ${fmtNum(v)} gần ${fmtNum(near)} hơn.` };
}

/* ── Dãy số liệu thống kê ─────────────────────────────────────────────────── */
function daysolieu(key) {
  const sets = [
    { title: 'Số ki-lô-gam giấy vụn của 6 bạn', names: ['An', 'Bình', 'Chi', 'Dũng', 'Hà', 'Kiên'], lo: 3, hi: 12, unit: 'kg' },
    { title: 'Chiều cao (cm) của 6 bạn tổ 1', names: ['Mai', 'Nam', 'Lan', 'Huy', 'Thu', 'Vũ'], lo: 128, hi: 145, unit: 'cm' },
    { title: 'Số quyển truyện đã đọc trong hè', names: ['Hoa', 'Đức', 'Linh', 'Minh', 'Quân', 'Yến'], lo: 2, hi: 15, unit: 'quyển' },
  ];
  const st = pick(sets);
  const mode = pick(['max', 'xuathien', 'tbc', 'hon']);
  let vals;
  if (mode === 'xuathien') { const x = ri(st.lo, st.hi); vals = st.names.map(() => ri(st.lo, st.hi)); const times = ri(2, 3); shuffle([0, 1, 2, 3, 4, 5]).slice(0, times).forEach(i => vals[i] = x); }
  else if (mode === 'tbc') { do { vals = st.names.map(() => ri(st.lo, st.hi)); } while (sum(vals) % 6); }
  else { do { vals = st.names.map(() => ri(st.lo, st.hi)); } while (new Set(vals).size < 6); }
  const path = img(key, tableSVG(['Bạn', ...st.names], [[st.unit, ...vals]], { title: st.title, cw: 62 }));
  if (mode === 'max') { const mx = Math.max(...vals), i = vals.indexOf(mx); const o = mk(st.names[i], shuffle(st.names.filter((_, j) => j !== i)), x => x); return { sec: 'Dãy số liệu', text: `Bảng thống kê "${st.title}". Bạn nào có số liệu lớn nhất?`, img: path, ...o, why: `Số lớn nhất trong dãy ${vals.join('; ')} là ${mx} (${st.names[i]}).` }; }
  if (mode === 'xuathien') { const x = vals.find(v => vals.filter(w => w === v).length >= 2); const c = vals.filter(v => v === x).length; const o = mk(c, [c + 1, c - 1, 6 - c, 1], v => `${v} lần`); return { sec: 'Số lần xuất hiện', text: `Bảng thống kê "${st.title}". Giá trị ${x} ${st.unit} xuất hiện bao nhiêu lần trong dãy số liệu?`, img: path, ...o, why: `Đếm trong dãy: ${vals.join('; ')} → ${x} xuất hiện ${c} lần (${st.names.filter((_, i) => vals[i] === x).join(', ')}).` }; }
  if (mode === 'tbc') { const m = sum(vals) / 6; const o = mk(m, [sum(vals), m + 1, m - 1, Math.max(...vals)], v => `${v} ${st.unit}`); return { sec: 'Trung bình cộng', text: `Bảng thống kê "${st.title}". Trung bình mỗi bạn có bao nhiêu ${st.unit}?`, img: path, ...o, why: `(${vals.join(' + ')}) : 6 = ${sum(vals)} : 6 = ${m} (${st.unit}).` }; }
  const mx = Math.max(...vals), mn = Math.min(...vals);
  const o = mk(mx - mn, [mx + mn, mx - mn + 1, mx - mn - 1, mx], v => `${v} ${st.unit}`);
  return { sec: 'Dãy số liệu', text: `Bảng thống kê "${st.title}". Bạn có số liệu lớn nhất hơn bạn có số liệu bé nhất bao nhiêu ${st.unit}?`, img: path, ...o, why: `${mx} − ${mn} = ${mx - mn} (${st.unit}).` };
}

/* ── Số lần xuất hiện của một sự kiện ─────────────────────────────────────── */
function solan(key) {
  if (rnd() < 0.5) {
    const n = ri(10, 16), seq = Array.from({ length: n }, () => rnd() < 0.5 ? 'S' : 'N');
    let s = '';
    seq.forEach((c, i) => { const x = 26 + (i % 8) * 40, y = 26 + Math.floor(i / 8) * 40; s += C(x, y, 16, c === 'S' ? '#fde68a' : '#e0f2fe', INK, 1.8) + T(x, y + 5, c, 14); });
    s += T(20 + 4 * 40, Math.ceil(n / 8) * 40 + 24, 'S: mặt sấp · N: mặt ngửa', 12, 'middle', '#666', 500);
    const path = img(key, svg(340, Math.ceil(n / 8) * 40 + 36, s));
    const face = pick(['S', 'N']), c = seq.filter(x => x === face).length;
    const o = mk(c, [n - c, c + 1, c - 1, n], v => `${v} lần`);
    return { sec: 'Số lần xuất hiện', text: `Tung một đồng xu ${n} lần, kết quả ghi lại theo thứ tự như hình. Mặt ${face === 'S' ? 'sấp' : 'ngửa'} xuất hiện bao nhiêu lần?`, img: path, ...o, why: `Đếm số đồng xu ghi chữ ${face}: ${c} lần (mặt ${face === 'S' ? 'ngửa' : 'sấp'} ${n - c} lần, tổng ${n}).` };
  }
  const faces = [1, 2, 3, 4, 5, 6];
  let counts; do { counts = faces.map(() => ri(1, 8)); } while (new Set(counts).size < 5);
  const total = sum(counts);
  const path = img(key, tableSVG(['Mặt', ...faces.map(f => `${f} chấm`)], [['Số lần', ...counts]], { title: `Kết quả gieo xúc xắc ${total} lần`, cw: 60 }));
  const mode = pick(['most', 'least', 'ge']);
  if (mode === 'ge') { const k = ri(4, 6); const c = faces.filter((f, i) => f >= k).reduce((t, f) => t + counts[f - 1], 0); const o = mk(c, [counts[k - 1], c + 1, c - 1, total - c], v => `${v} lần`); return { sec: 'Số lần xuất hiện', text: `Bảng ghi kết quả gieo xúc xắc ${total} lần. Số lần xuất hiện mặt có số chấm không nhỏ hơn ${k} là bao nhiêu?`, img: path, ...o, why: `Mặt từ ${k} đến 6 chấm: ${faces.filter(f => f >= k).map(f => counts[f - 1]).join(' + ')} = ${c} (lần).` }; }
  const i = counts.indexOf(mode === 'most' ? Math.max(...counts) : Math.min(...counts));
  const o = mk(`${faces[i]} chấm`, shuffle(faces.filter((_, j) => j !== i).map(f => `${f} chấm`)), x => x);
  return { sec: 'Số lần xuất hiện', text: `Bảng ghi kết quả gieo xúc xắc ${total} lần. Mặt nào xuất hiện ${mode === 'most' ? 'nhiều' : 'ít'} lần nhất?`, img: path, ...o, why: `So sánh số lần: ${counts.join(', ')} → ${mode === 'most' ? 'lớn' : 'bé'} nhất là ${counts[i]} lần (mặt ${faces[i]} chấm).` };
}

/* ── Phân số trên tia số ──────────────────────────────────────────────────── */
function psTiaso(key) {
  const d = pick([3, 4, 5, 6, 8]), over = rnd() < 0.35;
  const k = over ? ri(d + 1, 2 * d - 1) : ri(1, d - 1);
  const n = over ? 2 * d + 1 : d + 1;
  const labels = Array.from({ length: n }, (_, i) => i === 0 ? '0' : i === d ? '1' : i === 2 * d ? '2' : null);
  const path = img(key, numberLineSVG(labels, { u: over ? Math.min(40, 340 / (2 * d)) : 46, points: [{ i: k, label: 'M' }] }));
  const cands = [`${k}/${d + 1}`, `${k + 1}/${d}`, `${d}/${k}`, `${k}/${d - 1}`, `${k - 1}/${d}`].filter(f => { const [p, q] = f.split('/').map(Number); return q > 0 && p > 0 && !eqFrac(p, q, k, d); });
  const o = mk(`${k}/${d}`, cands, x => x);
  return { sec: 'Phân số trên tia số', text: `Đoạn từ 0 đến 1 trên tia số được chia thành ${d} phần bằng nhau. Điểm M biểu diễn phân số nào?`, img: path, ...o,
    why: `Mỗi phần là 1/${d}. Điểm M cách 0 đúng ${k} phần nên M biểu diễn ${k}/${d}${over ? ` (lớn hơn 1 vì ${k} > ${d})` : ''}.` };
}

/* ── Phân số của một nhóm đồ vật ──────────────────────────────────────────── */
function psTap(key) {
  const n = ri(6, 12), k = ri(1, n - 1);
  const [emoA, emoB, nameA, nameB, all] = pick([['🔴', '🔵', 'bóng đỏ', 'bóng xanh', 'quả bóng'], ['🍎', '🍐', 'táo', 'lê', 'quả'], ['⭐', '🌙', 'ngôi sao', 'mặt trăng', 'hình'], ['🐟', '🐠', 'cá vàng', 'cá cảnh', 'con cá']]);
  const items = shuffle([...Array(k).fill(emoA), ...Array(n - k).fill(emoB)]);
  let s = ''; items.forEach((e, i) => s += EM(28 + (i % 6) * 40, 34 + Math.floor(i / 6) * 40, e, 28));
  const path = img(key, svg(6 * 40 + 16, Math.ceil(n / 6) * 40 + 12, s));
  const askA = rnd() < 0.6, num = askA ? k : n - k;
  const cands = [`${num}/${n - num}`, `${n - num}/${n}`, `${n}/${num}`, `${num}/${n + 1}`].filter(f => { const [p, q] = f.split('/').map(Number); return q > 0 && !eqFrac(p, q, num, n); });
  const o = mk(`${num}/${n}`, cands, x => x);
  return { sec: 'Phân số', text: `Trong hình có ${n} ${all}. Phân số chỉ số ${askA ? nameA : nameB} so với tổng số ${all} là?`, img: path, ...o,
    why: `Có ${num} ${askA ? nameA : nameB} trong tổng số ${n} ${all} → phân số là ${num}/${n} (tử số là số ${askA ? nameA : nameB}, mẫu số là tổng số).` };
}

/* ── So sánh phân số qua băng giấy ────────────────────────────────────────── */
function sosanhPs(key) {
  const names = ['A', 'B', 'C', 'D'];
  let fr; do { fr = names.map(() => { const d = pick([2, 3, 4, 5, 6, 8]); return [ri(1, d - 1), d]; }); } while (new Set(fr.map(f => f[0] / f[1])).size < 4);
  const W = 240, x0 = 50;
  let s = '';
  fr.forEach(([p, q], i) => { const y = 14 + i * 44; s += T(x0 - 12, y + 18, names[i], 15, 'end'); for (let j = 0; j < q; j++) s += R(x0 + j * W / q, y, W / q, 26, j < p ? PAL[i] : '#fff', INK, 1.5); s += T(x0 + W + 10, y + 18, `${p}/${q}`, 13, 'start', '#555', 600); });
  const path = img(key, svg(x0 + W + 60, 14 + 4 * 44, s));
  const vals = fr.map(f => f[0] / f[1]);
  const most = rnd() < 0.5, i = vals.indexOf(most ? Math.max(...vals) : Math.min(...vals));
  const o = mk(`Băng ${names[i]} (${fr[i][0]}/${fr[i][1]})`, shuffle(names.filter((_, j) => j !== i).map(j => `Băng ${j} (${fr[names.indexOf(j)][0]}/${fr[names.indexOf(j)][1]})`)), x => x);
  return { sec: 'So sánh phân số', text: `Bốn băng giấy dài bằng nhau được tô màu như hình. Băng giấy nào được tô màu ${most ? 'NHIỀU' : 'ÍT'} nhất?`, img: path, ...o,
    why: `So sánh phần tô màu (hoặc so sánh các phân số ${fr.map(f => f.join('/')).join(', ')}): ${most ? 'lớn' : 'bé'} nhất là ${fr[i].join('/')} → băng ${names[i]}.` };
}

/* ── Chọn hình (4 phương án là hình) ──────────────────────────────────────── */
function chonhinh(key, kind) {
  const flatCard = k => optCard((cx, cy, s) => flatBody(k, cx, cy, s * 0.9, '#e8f0ff'));
  const angCard = a => optCard((cx, cy, s) => angleBody(cx - s * 0.35, cy + s * 0.3, a, s * 0.8), 130, 100);
  if (kind === 'thoi') { const o = mkImg(G, key, flatCard('thoi'), shuffle([flatCard('bh'), flatCard('thang'), flatCard('cn')])); return { sec: 'Hình thoi', text: 'Hình nào là hình thoi?', ...o, why: 'Hình thoi có bốn cạnh bằng nhau và hai cặp cạnh đối diện song song.' }; }
  if (kind === 'bh') { const o = mkImg(G, key, flatCard('bh'), shuffle([flatCard('thang'), flatCard('thoi'), flatCard('tugiac')])); return { sec: 'Hình bình hành', text: 'Hình nào là hình bình hành?', ...o, why: 'Hình bình hành có hai cặp cạnh đối diện song song và bằng nhau (các góc không vuông).' }; }
  const target = kind === 'goctu' ? pick([110, 125, 140]) : kind === 'gocnhon' ? pick([35, 50, 65]) : 180;
  const others = kind === 'goctu' ? [50, 90, 180] : kind === 'gocnhon' ? [90, 120, 180] : [60, 90, 130];
  const o = mkImg(G, key, angCard(target), shuffle(others.map(angCard)));
  const nm = { goctu: 'góc tù', gocnhon: 'góc nhọn', gocbet: 'góc bẹt' }[kind];
  return { sec: 'Góc', text: `Hình nào là ${nm}?`, ...o, why: { goctu: 'Góc tù lớn hơn góc vuông và nhỏ hơn góc bẹt.', gocnhon: 'Góc nhọn nhỏ hơn góc vuông.', gocbet: 'Góc bẹt có hai cạnh là hai tia đối nhau, tạo thành đường thẳng (bằng hai góc vuông).' }[kind] };
}

/* ── KẾ HOẠCH 10 ĐỀ ───────────────────────────────────────────────────────── */
const rep = (f, n, arg) => Array.from({ length: n }, () => [f, arg]);
export const PLAN = [
  { title: 'Đề 1 · Góc nhọn — góc tù — góc bẹt', q: [...rep(goc, 7), ...rep(chonhinh, 1, 'goctu'), ...rep(chonhinh, 1, 'gocnhon'), ...rep(chonhinh, 1, 'gocbet')] },
  { title: 'Đề 2 · Đo góc bằng thước đo độ', q: [...rep(thuocdo, 7), ...rep(goc, 3)] },
  { title: 'Đề 3 · Hai đường thẳng vuông góc — song song', q: [...rep(vgss, 10)] },
  { title: 'Đề 4 · Hình bình hành — hình thoi', q: [...rep(bhthoi, 4), ...rep(chonhinh, 1, 'thoi'), ...rep(chonhinh, 1, 'bh'), ...rep(chuviBh, 4)] },
  { title: 'Đề 5 · Yến — tạ — tấn · dm² — m² · thế kỉ', q: [...rep(yenta, 4), ...rep(dm2, 3), ...rep(theki, 3)] },
  { title: 'Đề 6 · Tổng – hiệu — rút về đơn vị', q: [...rep(tonghieu, 5), ...rep(rutve, 5)] },
  { title: 'Đề 7 · Trung bình cộng — làm tròn số', q: [...rep(bieudoTbc, 5), ...rep(lamtron, 5)] },
  { title: 'Đề 8 · Dãy số liệu — số lần xuất hiện', q: [...rep(daysolieu, 5), ...rep(solan, 5)] },
  { title: 'Đề 9 · Phân số trên tia số — phân số của nhóm', q: [...rep(psTiaso, 5), ...rep(psTap, 5)] },
  { title: 'Đề 10 · So sánh phân số qua hình', q: [...rep(sosanhPs, 6), ...rep(psTiaso, 2), ...rep(psTap, 2)] },
];
export const HERO = {
  title: 'Toán lớp 4 qua hình — bài học: góc và đo góc, vuông góc – song song, hình bình hành – hình thoi, đơn vị đo, tổng – hiệu, trung bình cộng, thống kê, phân số',
  intro: 'Bài 7 · 8 · 13 · 17 · 18 · 19 · 25 · 27–31 · 46 · 47 · 49–51 · 53–58 (SGK Kết nối tri thức)',
};
