/* Lớp 3 — các dạng câu có hình theo bài học SGK Toán 3 (KNTT):
   Bài 16 Điểm ở giữa – trung điểm · Bài 17 Hình tròn: tâm, bán kính, đường kính · Bài 18 Góc vuông – góc không vuông ·
   Bài 21 Khối lập phương – khối hộp chữ nhật · Bài 47–52 Chu vi tam giác – tứ giác – hình vuông, diện tích ·
   Bài 29–31 Mi-li-mét, gam, mi-li-lít · Bài 33 Nhiệt độ · Bài 61 Tiền Việt Nam · Bài 14 Một phần mấy ·
   Bài 39 So sánh số lớn gấp mấy lần số bé · Bài 71–72 Bảng số liệu – khả năng xảy ra */
import * as A from './hinhb-art.mjs';
const { rnd, ri, pick, shuffle, sum, svg, R, L, C, EL, P, PL, T, EM, PATH, INK, PAL, mk, mkImg, saveImg, boxBody, flatBody, solidBody, SOLID_NAME, FLAT_NAME, numberedGrid, optCard, balanceSVG, rulerBody, tableSVG, barModelSVG, deg, r1, fmtNum, money } = A;
const G = 3;
const img = (key, s) => saveImg(G, key, s);

/* ── Điểm ở giữa – trung điểm ─────────────────────────────────────────────── */
function trungdiem(key) {
  if (rnd() < 0.55) {
    const names = 'ABCDE', u = 70, x0 = 40, y = 60;
    let s = L(x0 - 10, y, x0 + 4 * u + 10, y, INK, 2.5);
    for (let i = 0; i < 5; i++) { s += C(x0 + i * u, y, 5, INK, INK); s += T(x0 + i * u, y - 14, names[i], 15); }
    s += T(x0 + 2 * u, y + 30, 'các điểm cách đều nhau', 12, 'middle', '#666', 500);
    const path = img(key, svg(x0 * 2 + 4 * u, 100, s));
    const [a, b] = pick([[0, 4], [0, 2], [1, 3], [2, 4], [0, 4]]);
    const m = (a + b) / 2, seg = names[a] + names[b];
    const o = mk(names[m], shuffle([...names].filter(c => c !== names[m])), x => x);
    return { sec: 'Trung điểm', text: `Trên hình, các điểm A, B, C, D, E cách đều nhau. Trung điểm của đoạn thẳng ${seg} là điểm nào?`, img: path, ...o,
      why: `${names[m]} nằm giữa ${names[a]} và ${names[b]}, đồng thời ${names[a]}${names[m]} = ${names[m]}${names[b]} nên ${names[m]} là trung điểm của ${seg}.` };
  }
  const len = pick([8, 10, 12, 14, 16, 18, 20, 24]), half = len / 2, u = 14, x0 = 40, y = 60;
  const mode = pick(['half', 'whole']);
  let s = L(x0, y, x0 + len * u, y, INK, 2.5);
  s += C(x0, y, 5, INK, INK) + C(x0 + len * u, y, 5, INK, INK) + C(x0 + half * u, y, 5, '#e05b7e', '#e05b7e');
  s += T(x0, y - 14, 'A', 15) + T(x0 + len * u, y - 14, 'B', 15) + T(x0 + half * u, y - 14, 'M', 15, 'middle', '#e05b7e');
  if (mode === 'half') { s += PATH(`M ${x0} ${y + 12} L ${x0} ${y + 20} L ${r1(x0 + len * u)} ${y + 20} L ${r1(x0 + len * u)} ${y + 12}`, 'none', '#39a86b', 2); s += T(x0 + len * u / 2, y + 36, `AB = ${len} cm`, 13, 'middle', '#1d7a4b'); }
  else { s += PATH(`M ${x0} ${y + 12} L ${x0} ${y + 20} L ${r1(x0 + half * u)} ${y + 20} L ${r1(x0 + half * u)} ${y + 12}`, 'none', '#39a86b', 2); s += T(x0 + half * u / 2, y + 36, `AM = ${half} cm`, 13, 'middle', '#1d7a4b'); }
  const path = img(key, svg(x0 * 2 + len * u, 100, s));
  if (mode === 'half') {
    const o = mk(half, [len, half + 1, half - 1, len * 2], v => `${v} cm`);
    return { sec: 'Trung điểm', text: 'M là trung điểm của đoạn thẳng AB. Độ dài đoạn thẳng MB là bao nhiêu?', img: path, ...o, why: `M là trung điểm nên AM = MB = AB : 2 = ${len} : 2 = ${half} (cm).` };
  }
  const o = mk(len, [half, len + 2, len - 2, half + 2], v => `${v} cm`);
  return { sec: 'Trung điểm', text: 'M là trung điểm của đoạn thẳng AB. Độ dài đoạn thẳng AB là bao nhiêu?', img: path, ...o, why: `M là trung điểm nên AB = AM × 2 = ${half} × 2 = ${len} (cm).` };
}

/* ── Hình tròn: tâm, bán kính, đường kính ─────────────────────────────────── */
function duongtron(key) {
  const cx = 110, cy = 100, r = 72;
  const mode = pick(['bk', 'dk', 'dem', 'bk']);
  let s = C(cx, cy, r, '#f8fafc', INK, 2.5) + C(cx, cy, 4, INK, INK) + T(cx - 9, cy + 20, 'O', 15, 'end');
  if (mode === 'dem') {
    const k = ri(2, 4), angs = shuffle([20, 80, 140, 200, 260, 320]).slice(0, k), names = 'ABCDEF';
    angs.forEach((a, i) => { const px = cx + r * Math.cos(deg(a)), py = cy + r * Math.sin(deg(a)); s += L(cx, cy, px, py, '#5b8def', 2.5) + C(px, py, 4, INK, INK) + T(px + 14 * Math.cos(deg(a)), py + 14 * Math.sin(deg(a)) + 5, names[i], 14); });
    const extra = ri(0, 1); if (extra) { const a = 50, b = 230; const p1 = [cx + r * Math.cos(deg(a)), cy + r * Math.sin(deg(a))], p2 = [cx + r * Math.cos(deg(b)), cy + r * Math.sin(deg(b))]; s += L(p1[0], p1[1], p2[0], p2[1], '#e05b7e', 2) + T(p1[0] + 12, p1[1] + 4, 'M', 13) + T(p2[0], p2[1] + 16, 'N', 13); }
    const path = img(key, svg(230, 210, s));
    const o = mk(k, [k + 1, k - 1, k + extra + 1, extra ? k + 1 : k + 2]);
    return { sec: 'Hình tròn', text: 'Hình tròn tâm O. Trong hình có bao nhiêu bán kính được vẽ?', img: path, ...o,
      why: `Bán kính là đoạn thẳng nối tâm O với một điểm trên đường tròn: ${names.slice(0, k).split('').map(n => 'O' + n).join(', ')} → ${k} bán kính.${extra ? ' Đoạn MN không đi qua tâm nên không phải bán kính hay đường kính.' : ''}` };
  }
  const val = ri(2, 12);
  const a = pick([0, 30, 150, 200]);
  const p1 = [cx + r * Math.cos(deg(a)), cy + r * Math.sin(deg(a))], p2 = [cx - r * Math.cos(deg(a)), cy - r * Math.sin(deg(a))];
  s += L(p1[0], p1[1], p2[0], p2[1], '#5b8def', 2.5) + C(p1[0], p1[1], 4, INK, INK) + C(p2[0], p2[1], 4, INK, INK);
  s += T(p1[0] + 14 * Math.cos(deg(a)), p1[1] + 14 * Math.sin(deg(a)) + 5, 'A', 14) + T(p2[0] - 14 * Math.cos(deg(a)), p2[1] - 14 * Math.sin(deg(a)) + 5, 'B', 14);
  if (mode === 'bk') s += T((cx + p1[0]) / 2 + 15 * Math.sin(deg(a)), (cy + p1[1]) / 2 - 15 * Math.cos(deg(a)) + 4, `${val} cm`, 13, 'middle', '#1d4ed8');
  else s += T(cx, cy + r + 24, `AB = ${val * 2} cm`, 13, 'middle', '#1d4ed8');
  const path = img(key, svg(230, 210 + (mode === 'dk' ? 14 : 0), s));
  if (mode === 'bk') {
    const o = mk(val * 2, [val, val * 4, val * 2 + 1, val + 2], v => `${v} cm`);
    return { sec: 'Hình tròn', text: 'Hình tròn tâm O có bán kính OA dài như ghi trên hình. Đường kính AB dài bao nhiêu?', img: path, ...o, why: `Đường kính gấp 2 lần bán kính: AB = ${val} × 2 = ${val * 2} (cm).` };
  }
  const o = mk(val, [val * 2, val * 4, val + 1, val - 1], v => `${v} cm`);
  return { sec: 'Hình tròn', text: 'Hình tròn tâm O có đường kính AB dài như ghi trên hình. Bán kính OB dài bao nhiêu?', img: path, ...o, why: `Bán kính bằng nửa đường kính: OB = ${val * 2} : 2 = ${val} (cm).` };
}

/* ── Góc vuông – góc không vuông ──────────────────────────────────────────── */
function angleBody(cx, cy, ang, len, rot, label) {
  const a1 = rot, a2 = rot - ang;
  const p1 = [cx + len * Math.cos(deg(a1)), cy + len * Math.sin(deg(a1))], p2 = [cx + len * Math.cos(deg(a2)), cy + len * Math.sin(deg(a2))];
  let s = L(cx, cy, p1[0], p1[1], INK, 2.5) + L(cx, cy, p2[0], p2[1], INK, 2.5) + C(cx, cy, 3.5, INK, INK);
  if (ang === 90) { const k = 12; const q1 = [cx + k * Math.cos(deg(a1)), cy + k * Math.sin(deg(a1))], q2 = [cx + k * Math.cos(deg(a2)), cy + k * Math.sin(deg(a2))]; s += PL([q1, [q1[0] + q2[0] - cx, q1[1] + q2[1] - cy], q2], '#e05b7e', 1.8); }
  else { const rr = 16; s += PATH(`M ${r1(cx + rr * Math.cos(deg(a1)))} ${r1(cy + rr * Math.sin(deg(a1)))} A ${rr} ${rr} 0 0 0 ${r1(cx + rr * Math.cos(deg(a2)))} ${r1(cy + rr * Math.sin(deg(a2)))}`, 'none', '#5b8def', 1.8); }
  if (label) s += T(cx - 6, cy + 16, label, 13);
  return s;
}
function gocvuong(key) {
  if (rnd() < 0.5) {
    const n = ri(5, 6), angs = [];
    for (let i = 0; i < n; i++) angs.push(pick([90, 90, 60, 120, 45, 135, 75, 110]));
    if (!angs.includes(90)) angs[0] = 90;
    const grid = numberedGrid(angs, 3, 96, (a, cx, cy, i) => angleBody(cx - 22, cy + 24, a, 56, ri(0, 1) ? 0 : -10 - ri(0, 20), ''));
    const path = img(key, svg(grid.w, grid.h, grid.body));
    const idx = angs.map((a, i) => a === 90 ? i : -1).filter(i => i >= 0), c = idx.length;
    const o = mk(c, [c + 1, c - 1, n - c, n]);
    return { sec: 'Góc vuông', text: 'Trong các góc dưới đây (đỉnh ở góc dưới bên trái), có bao nhiêu góc vuông?', img: path, ...o,
      why: `Dùng ê ke kiểm tra: các góc số ${idx.map(i => i + 1).join(', ')} là góc vuông (được đánh dấu ô vuông nhỏ) → ${c} góc vuông. Các góc còn lại là góc không vuông (nhọn hoặc tù).` };
  }
  const shapes = {
    triR: { pts: [[40, 150], [40, 40], [190, 150]], n: 1, name: 'tam giác vuông', right: [1] },
    thangV: { pts: [[40, 150], [40, 40], [140, 40], [200, 150]], n: 2, name: 'hình thang vuông', right: [0, 1] },
    cn: { pts: [[40, 140], [40, 50], [200, 50], [200, 140]], n: 4, name: 'hình chữ nhật', right: [0, 1, 2, 3] },
    house: { pts: [[40, 150], [40, 80], [120, 30], [200, 80], [200, 150]], n: 2, name: 'hình "ngôi nhà"', right: [0, 4] },
    tri: { pts: [[40, 150], [120, 40], [200, 150]], n: 0, name: 'tam giác', right: [] },
    bh: { pts: [[40, 150], [90, 50], [220, 50], [170, 150]], n: 0, name: 'hình bình hành', right: [] },
    L: { pts: [[40, 150], [40, 40], [110, 40], [110, 100], [200, 100], [200, 150]], n: 5, name: 'hình chữ L', right: [0, 1, 2, 4, 5] },
  };
  const k = pick(Object.keys(shapes)), sh = shapes[k], names = 'ABCDEFG';
  let s = P(sh.pts, '#e8f0ff', INK, 2.5);
  sh.pts.forEach((p, i) => { const cx = 120, cy = 100; const dx = p[0] - cx, dy = p[1] - cy, d = Math.hypot(dx, dy); s += T(p[0] + dx / d * 14, p[1] + dy / d * 14 + 5, names[i], 14); });
  const path = img(key, svg(250, 176, s));
  const o = mk(sh.n, [sh.n + 1, sh.n - 1, sh.pts.length, sh.n + 2]);
  return { sec: 'Góc vuông', text: `Hình ${names.slice(0, sh.pts.length)} bên có bao nhiêu góc vuông?`, img: path, ...o,
    why: sh.n ? `Các góc vuông là góc ở đỉnh ${sh.right.map(i => names[i]).join(', ')} → ${sh.n} góc vuông (kiểm tra bằng ê ke).` : `Không có góc nào là góc vuông; các góc đều là góc nhọn hoặc góc tù.` };
}

/* ── Khối lập phương: đếm khối nhỏ trong khối hộp ─────────────────────────── */
function demkhoi(key) {
  const a = ri(2, 4), b = ri(1, 3), c = ri(1, 3);
  const bx = boxBody(30, 24, a, b, c, 36, { grid: true });
  const path = img(key, svg(bx.w + 60, bx.h + 50, bx.body));
  const n = a * b * c;
  const o = mk(n, [a * c + b, a * c, n + a, n - b, a + b + c]);
  return { sec: 'Khối lập phương', text: 'Khối hộp chữ nhật dưới đây được xếp kín bằng các khối lập phương nhỏ bằng nhau (không có chỗ rỗng). Có tất cả bao nhiêu khối lập phương nhỏ?', img: path, ...o,
    why: `Mỗi lớp có ${a} × ${b} = ${a * b} khối, xếp ${c} lớp: ${a * b} × ${c} = ${n} (khối).` };
}

/* ── Chu vi tam giác – tứ giác ────────────────────────────────────────────── */
function chuvi(key) {
  const kind = pick(['tri', 'quad', 'tri', 'quad']);
  const unit = pick(['cm', 'cm', 'dm', 'm']);
  let pts, sides;
  if (kind === 'tri') { pts = [[70, 150], [150 + ri(-30, 40), 30], [260, 150]]; sides = [ri(3, 15), ri(3, 15), ri(3, 15)]; }
  else { pts = [[70, 150], [90 + ri(-10, 20), 40], [230 + ri(-10, 30), 40 + ri(-8, 8)], [270, 150]]; sides = [ri(3, 15), ri(3, 15), ri(3, 15), ri(3, 15)]; }
  const names = 'ABCD';
  let s = P(pts, '#fff3d6', INK, 2.5);
  const cx = sum(pts.map(p => p[0])) / pts.length, cy = sum(pts.map(p => p[1])) / pts.length;
  pts.forEach((p, i) => { const dx = p[0] - cx, dy = p[1] - cy, d = Math.hypot(dx, dy); s += T(p[0] + dx / d * 14, p[1] + dy / d * 14 + 5, names[i], 14); });
  pts.forEach((p, i) => { const q = pts[(i + 1) % pts.length]; const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2; const dx = mx - cx, dy = my - cy, d = Math.hypot(dx, dy); s += T(mx + dx / d * 26, my + dy / d * 20 + 5, `${sides[i]} ${unit}`, 13, 'middle', '#1d4ed8'); });
  const path = img(key, svg(340, 190, s));
  const per = sum(sides);
  const o = mk(per, [per + 1, per - 1, per - sides[0], per + sides[1], sides[0] * sides[1]], v => `${v} ${unit}`);
  const nm = names.slice(0, pts.length);
  return { sec: 'Chu vi', text: `Tính chu vi ${kind === 'tri' ? 'hình tam giác' : 'hình tứ giác'} ${nm} có độ dài các cạnh ghi trên hình.`, img: path, ...o,
    why: `Chu vi bằng tổng độ dài các cạnh: ${sides.join(' + ')} = ${per} (${unit}).` };
}

/* ── Hình vuông: chu vi / diện tích / ngược lại ───────────────────────────── */
function hinhvuong(key) {
  const a = ri(2, 12), mode = pick(['cv', 'dt', 'nguoc']);
  const sz = 120;
  let s = R(60, 30, sz, sz, '#e8f7ee', INK, 2.5);
  [[60, 30], [180, 30], [180, 150], [60, 150]].forEach(([x, y]) => s += PL([[x + (x < 100 ? 0 : -12), y + (y < 100 ? 12 : -12)], [x + (x < 100 ? 12 : -12), y + (y < 100 ? 12 : -12)], [x + (x < 100 ? 12 : -12), y + (y < 100 ? 0 : 0)]], '#e05b7e', 1.5));
  if (mode === 'nguoc') s += T(120, 176, `Chu vi = ${a * 4} cm`, 14, 'middle', '#1d4ed8'); else s += T(120, 22, `${a} cm`, 14, 'middle', '#1d4ed8');
  const path = img(key, svg(240, 192, s));
  if (mode === 'cv') { const o = mk(a * 4, [a * a, a * 2, a * 4 + 2, a + 4], v => `${v} cm`); return { sec: 'Chu vi hình vuông', text: 'Tính chu vi hình vuông có độ dài cạnh ghi trên hình.', img: path, ...o, why: `Chu vi hình vuông = cạnh × 4 = ${a} × 4 = ${a * 4} (cm).` }; }
  if (mode === 'dt') { const o = mk(a * a, [a * 4, a * 2, a * a + a, a * a - a], v => `${v} cm²`); return { sec: 'Diện tích hình vuông', text: 'Tính diện tích hình vuông có độ dài cạnh ghi trên hình.', img: path, ...o, why: `Diện tích hình vuông = cạnh × cạnh = ${a} × ${a} = ${a * a} (cm²).` }; }
  const o = mk(a, [a * 2, a * 4, a + 1, a - 1], v => `${v} cm`);
  return { sec: 'Chu vi hình vuông', text: `Hình vuông có chu vi ${a * 4} cm. Độ dài cạnh hình vuông là bao nhiêu?`, img: path, ...o, why: `Cạnh = chu vi : 4 = ${a * 4} : 4 = ${a} (cm).` };
}

/* ── Diện tích theo ô vuông 1 cm² ─────────────────────────────────────────── */
function dientichO(key) {
  const W = ri(4, 7), H = ri(3, 5), cw = ri(1, W - 2), ch = ri(1, H - 1);
  const corner = pick(['tr', 'tl', 'br', 'bl']);
  const cell = 30, x0 = 20, y0 = 20;
  const inCut = (i, j) => (corner === 'tr' && j >= W - cw && i < ch) || (corner === 'tl' && j < cw && i < ch) || (corner === 'br' && j >= W - cw && i >= H - ch) || (corner === 'bl' && j < cw && i >= H - ch);
  let s = ''; let n = 0;
  for (let i = 0; i < H; i++) for (let j = 0; j < W; j++) { const cut = inCut(i, j); s += R(x0 + j * cell, y0 + i * cell, cell, cell, cut ? '#fff' : '#bfdbfe', cut ? '#e5e7eb' : INK, cut ? 1 : 1.5); if (!cut) n++; }
  s += T(x0 + W * cell / 2, y0 + H * cell + 20, 'mỗi ô vuông là 1 cm²', 12, 'middle', '#666', 500);
  const path = img(key, svg(x0 * 2 + W * cell, y0 + H * cell + 32, s));
  const o = mk(n, [W * H, n + 1, n - 1, cw * ch, n + W], v => `${v} cm²`);
  return { sec: 'Diện tích', text: 'Hình được tô màu xanh gồm các ô vuông 1 cm². Diện tích hình tô màu là bao nhiêu?', img: path, ...o,
    why: `Cả bảng có ${W} × ${H} = ${W * H} ô, phần trắng bị cắt đi ${cw} × ${ch} = ${cw * ch} ô. Còn lại ${W * H} − ${cw * ch} = ${n} ô → ${n} cm².` };
}

/* ── Mi-li-mét: đọc thước có vạch mm ──────────────────────────────────────── */
function mm(key) {
  const u = 50, x0 = 20, y = 64, len = 6;
  let a = 0; if (rnd() < 0.35) a = ri(1, 2) * 10 + pick([0, 5]);
  const Lmm = ri(15, 55); if (Lmm % 10 === 0) return mm(key);
  const bmm = a + Lmm; if (bmm > 60) return mm(key);
  const obj = pick([['cây bút chì', '#e8a33d'], ['chiếc kẹp giấy', '#8e6cd1'], ['con kiến (đoạn)', '#e05b7e'], ['chiếc đinh', '#64748b']]);
  let s = rulerBody(x0, y, len, u, { sub: 10, unit: 'cm' });
  s += L(x0 + a * u / 10, y + 4, x0 + a * u / 10, 26, '#999', 1.2, 'stroke-dasharray="3 3"') + L(x0 + bmm * u / 10, y + 4, x0 + bmm * u / 10, 26, '#999', 1.2, 'stroke-dasharray="3 3"');
  s += R(x0 + a * u / 10, 30, Lmm * u / 10, 14, obj[1], INK, 1.5, 'rx="4"');
  const path = img(key, svg(x0 * 2 + len * u, 110, s));
  const cm = Math.floor(Lmm / 10), rest = Lmm % 10;
  if (rnd() < 0.5) {
    const o = mk(Lmm, [Lmm + 10, Lmm - 10, bmm, cm * 10 + (10 - rest)], v => `${v} mm`);
    return { sec: 'Mi-li-mét', text: `Đặt ${obj[0]} dọc theo thước có vạch xăng-ti-mét (mỗi vạch nhỏ là 1 mm). ${obj[0].charAt(0).toUpperCase() + obj[0].slice(1)} dài bao nhiêu mi-li-mét?`, img: path, ...o,
      why: `${a ? `Vật bắt đầu ở vạch ${a} mm và kết thúc ở ${bmm} mm: ${bmm} − ${a} = ${Lmm} mm.` : `Vật dài ${cm} cm ${rest} mm.`} 1 cm = 10 mm nên ${cm} cm ${rest} mm = ${Lmm} mm.` };
  }
  const o = mk(`${cm} cm ${rest} mm`, [`${cm + 1} cm ${rest} mm`, `${cm} cm ${10 - rest} mm`, `${rest} cm ${cm} mm`, `${cm} cm ${rest + 1} mm`], x => x);
  return { sec: 'Mi-li-mét', text: `Đặt ${obj[0]} dọc theo thước có vạch xăng-ti-mét (mỗi vạch nhỏ là 1 mm). ${obj[0].charAt(0).toUpperCase() + obj[0].slice(1)} dài bao nhiêu?`, img: path, ...o,
    why: `${a ? `Từ vạch ${a} mm đến vạch ${bmm} mm là ${Lmm} mm. ` : ''}${Lmm} mm = ${cm} cm ${rest} mm (vì 1 cm = 10 mm).` };
}

/* ── Gam: cân với các quả cân 500 g, 200 g, 100 g, 50 g ───────────────────── */
function gWeights(m) { const w = []; let r = m; for (const v of [500, 200, 100, 50, 20, 10]) while (r >= v && w.length < 4) { w.push(v); r -= v; } return r === 0 ? w : null; }
function gam(key) {
  const thing = pick([['gói bánh', 'gói bánh'], ['quả cam', 'quả cam'], ['hộp sữa', 'hộp sữa'], ['túi kẹo', 'túi kẹo'], ['quyển sách', 'quyển sách']]);
  const mode = pick(['direct', 'sub', 'kg']);
  if (mode === 'kg') {
    let w; do { w = pick([200, 300, 400, 500, 600, 700, 800]); } while (!gWeights(1000 - w));
    const path = img(key, balanceSVG([{ kind: 'w', label: '1 kg' }], [{ kind: 'box', label: '?' }, ...gWeights(w).map(v => ({ kind: 'w', label: `${v} g` }))], { caption: 'cân thăng bằng · ô ? là gói hàng cần tìm' }));
    const o = mk(1000 - w, [w, 1000 + w, 1000 - w + 100, 1000 - w - 100], v => `${v} g`);
    return { sec: 'Gam', text: 'Cân thăng bằng: bên trái là quả cân 1 kg, bên phải có gói hàng và các quả cân như hình. Gói hàng nặng bao nhiêu gam?', img: path, ...o,
      why: `1 kg = 1000 g. Gói hàng + ${gWeights(w).join(' + ')} = 1000 nên gói hàng nặng 1000 − ${w} = ${1000 - w} (g).` };
  }
  let m, extra = 0, W;
  do { m = pick([150, 250, 350, 450, 550, 650, 750, 850, 120, 230, 370, 480, 620]); extra = mode === 'sub' ? pick([50, 100, 200]) : 0; W = m + extra; } while (!gWeights(W));
  const left = [{ kind: 'box', label: '?' }]; if (extra) left.push({ kind: 'w', label: `${extra} g` });
  const path = img(key, balanceSVG(left, gWeights(W).map(v => ({ kind: 'w', label: `${v} g` })), { caption: `cân thăng bằng · ô ? là ${thing[0]}` }));
  const o = mk(m, [W, m + 100, m - 100, W + extra, m + 50], v => `${v} g`);
  return { sec: 'Gam', text: `Cân đang thăng bằng như hình. ${thing[0].charAt(0).toUpperCase() + thing[0].slice(1)} nặng bao nhiêu gam?`, img: path, ...o,
    why: extra ? `${thing[1]} + ${extra} g = ${gWeights(W).join(' + ')} = ${W} g nên ${thing[1]} nặng ${W} − ${extra} = ${m} (g).` : `${thing[1]} nặng bằng tổng các quả cân: ${gWeights(W).join(' + ')} = ${m} (g).` };
}

/* ── Mi-li-lít: ca đong có vạch ───────────────────────────────────────────── */
function jugBody(x, y, w, h, maxMl, level, step, lblEvery, fill) {
  let s = R(x, y, w, h, '#fff', INK, 2.5, 'rx="4"');
  const yOf = v => y + 14 + (h - 24) * (1 - v / maxMl);
  s += R(x + 2, yOf(level), w - 4, y + h - 2 - yOf(level), fill, 'none', 0);
  for (let v = 0; v <= maxMl; v += step) { const yy = yOf(v); const big = v % lblEvery === 0; s += L(x, yy, x + (big ? 16 : 9), yy, INK, big ? 1.8 : 1.2); if (big && v) s += T(x + 20, yy + 4, String(v), 11, 'start', INK, 600); }
  s += PATH(`M ${x + w} ${y + 10} q 26 0 26 20 q 0 20 -26 20`, 'none', INK, 2.5);
  return s;
}
function ml(key) {
  const mode = pick(['read', 'two', 'read', 'pour']);
  if (mode === 'read') {
    const cfg = pick([[500, 50, 100], [1000, 100, 200], [250, 25, 50], [300, 50, 100]]);
    const lvl = cfg[1] * ri(1, cfg[0] / cfg[1] - 1);
    const path = img(key, svg(190, 240, jugBody(40, 20, 90, 190, cfg[0], lvl, cfg[1], cfg[2], '#bfdbfe') + T(85, 232, 'ml', 12, 'middle', '#555', 500)));
    const o = mk(lvl, [lvl + cfg[1], lvl - cfg[1], lvl + cfg[2], cfg[0] - lvl], v => `${v} ml`);
    return { sec: 'Mi-li-lít', text: `Ca đong có vạch chia, mỗi vạch nhỏ là ${cfg[1]} ml. Trong ca có bao nhiêu mi-li-lít nước?`, img: path, ...o,
      why: `Mặt nước ở vạch ${lvl} (${lvl % cfg[2] ? `giữa vạch ${lvl - cfg[1]} và ${lvl + cfg[1]}, mỗi vạch nhỏ ${cfg[1]} ml` : 'vạch có ghi số'}) → ${lvl} ml.` };
  }
  if (mode === 'two') {
    const a = 50 * ri(2, 9), b = 50 * ri(2, 9);
    const path = img(key, svg(400, 240, jugBody(30, 20, 90, 190, 500, a, 50, 100, '#bfdbfe') + T(75, 232, 'ca 1', 12) + jugBody(230, 20, 90, 190, 500, b, 50, 100, '#fde68a') + T(275, 232, 'ca 2', 12)));
    const ask = pick(['sum', 'diff']);
    if (ask === 'sum') { const o = mk(a + b, [a + b + 50, a + b - 50, Math.abs(a - b), a + b + 100], v => `${v} ml`); return { sec: 'Mi-li-lít', text: 'Hai ca đong (mỗi vạch nhỏ 50 ml) đựng nước như hình. Đổ cả hai ca vào một bình thì bình có bao nhiêu mi-li-lít nước?', img: path, ...o, why: `Ca 1 có ${a} ml, ca 2 có ${b} ml: ${a} + ${b} = ${a + b} (ml).` }; }
    const d = Math.abs(a - b); const o = mk(d, [d + 50, d - 50, a + b, d + 100], v => `${v} ml`);
    return { sec: 'Mi-li-lít', text: `Hai ca đong (mỗi vạch nhỏ 50 ml) đựng nước như hình. Ca ${a > b ? 1 : 2} nhiều hơn ca ${a > b ? 2 : 1} bao nhiêu mi-li-lít?`, img: path, ...o, why: `${Math.max(a, b)} − ${Math.min(a, b)} = ${d} (ml).` };
  }
  const a = 100 * ri(4, 9), out = 50 * ri(1, a / 50 - 2);
  const path = img(key, svg(190, 240, jugBody(40, 20, 90, 190, 1000, a, 100, 200, '#bfdbfe') + T(85, 232, 'mỗi vạch 100 ml', 11, 'middle', '#555', 500)));
  const o = mk(a - out, [a + out, a - out + 100, a - out - 100, out], v => `${v} ml`);
  return { sec: 'Mi-li-lít', text: `Ca đựng nước như hình. Rót ra ${out} ml. Trong ca còn lại bao nhiêu mi-li-lít?`, img: path, ...o, why: `Ca có ${a} ml. Còn lại: ${a} − ${out} = ${a - out} (ml).` };
}

/* ── Nhiệt độ: nhiệt kế ───────────────────────────────────────────────────── */
function thermoBody(x, y, temp, min = -10, max = 50) {
  const h = 200, w = 22;
  let s = R(x, y, w, h, '#fff', INK, 2, 'rx="10"') + C(x + w / 2, y + h + 8, 16, '#ef4444', INK, 2);
  const yOf = t => y + h - 14 - (t - min) / (max - min) * (h - 28);
  s += R(x + 7, yOf(temp), w - 14, y + h + 4 - yOf(temp), '#ef4444', 'none', 0);
  for (let t = min; t <= max; t += 5) { const yy = yOf(t); const big = t % 10 === 0; s += L(x + w, yy, x + w + (big ? 12 : 6), yy, INK, big ? 1.6 : 1); if (big) s += T(x + w + 16, yy + 4, String(t), 11, 'start', INK, 600); }
  s += T(x + w + 40, y + 2, '°C', 12, 'start', '#555', 600);
  return s;
}
function nhietdo(key) {
  if (rnd() < 0.6) {
    const t = pick([-5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45]);
    const place = pick(['Sa Pa buổi sáng', 'Hà Nội buổi trưa', 'Đà Lạt', 'trong tủ lạnh', 'ngoài trời hè']);
    const path = img(key, svg(120, 250, thermoBody(30, 10, t)));
    const o = mk(t, [t + 5, t - 5, t + 10, -t], v => `${v} °C`);
    return { sec: 'Nhiệt độ', text: `Nhiệt kế đo nhiệt độ ${place} chỉ như hình (mỗi vạch nhỏ là 5 °C). Nhiệt độ đó là bao nhiêu?`, img: path, ...o, why: `Cột màu đỏ dừng ở vạch ${t} → ${t} °C.` };
  }
  let a, b; do { a = pick([5, 10, 15, 20, 25, 30]); b = pick([15, 20, 25, 30, 35, 40]); } while (a === b);
  const path = img(key, svg(280, 250, thermoBody(30, 10, a) + T(50, 244, 'sáng', 12) + thermoBody(170, 10, b) + T(190, 244, 'trưa', 12)));
  const d = Math.abs(a - b);
  const o = mk(d, [d + 5, d - 5, a + b, d + 10], v => `${v} °C`);
  return { sec: 'Nhiệt độ', text: 'Hai nhiệt kế chỉ nhiệt độ buổi sáng và buổi trưa (mỗi vạch nhỏ 5 °C). Buổi trưa nóng hơn buổi sáng bao nhiêu độ?', img: path, ...o, why: `Sáng ${a} °C, trưa ${b} °C. Chênh lệch: ${Math.max(a, b)} − ${Math.min(a, b)} = ${d} °C.` };
}

/* ── Tiền Việt Nam lớp 3 ──────────────────────────────────────────────────── */
const NC = { 1000: '#1d4ed8', 2000: '#7c3aed', 5000: '#0f766e', 10000: '#b45309', 20000: '#1e40af', 50000: '#be123c', 100000: '#15803d' };
function notesSVG(notes) {
  const cols = 3, w = 104, h = 48; let s = '';
  notes.forEach((v, i) => { const x = 10 + (i % cols) * (w + 10), y = 10 + Math.floor(i / cols) * (h + 10); s += R(x, y, w, h, '#fff', NC[v], 3, 'rx="6"') + R(x + 6, y + 6, w - 12, h - 12, NC[v] + '22', 'none', 0, 'rx="4"') + T(x + w / 2, y + 24, fmtNum(v), 15, 'middle', NC[v]) + T(x + w / 2, y + 40, 'đồng', 11, 'middle', NC[v], 500); });
  return svg(20 + cols * (w + 10) - 10, 10 + Math.ceil(notes.length / cols) * (h + 10), s);
}
function tien(key) {
  const notes = Array.from({ length: ri(3, 6) }, () => pick([1000, 2000, 5000, 10000, 20000, 50000]));
  const total = sum(notes), who = pick(['Mai', 'Đức', 'Hà', 'Long']);
  const path = img(key, notesSVG(notes));
  const mode = pick(['sum', 'buy', 'need']);
  if (mode === 'sum') { const o = mk(total, [total + 1000, total - 1000, total + 10000, total - 5000], money); return { sec: 'Tiền Việt Nam', text: `${who} có các tờ tiền như hình. ${who} có tất cả bao nhiêu tiền?`, img: path, ...o, why: `${notes.map(fmtNum).join(' + ')} = ${fmtNum(total)} (đồng).` }; }
  if (mode === 'buy') {
    const price = pick([5000, 8000, 12000, 15000, 25000, 35000, 45000].filter(p => p < total)) || 1000;
    const rest = total - price; const o = mk(rest, [rest + 1000, rest - 1000, total + price, price], money);
    return { sec: 'Tiền Việt Nam', text: `${who} có các tờ tiền như hình và mua một quyển vở giá ${money(price)}. ${who} còn lại bao nhiêu tiền?`, img: path, ...o, why: `Có ${fmtNum(total)} đồng, còn lại ${fmtNum(total)} − ${fmtNum(price)} = ${fmtNum(rest)} (đồng).` };
  }
  const price = total + pick([2000, 5000, 10000, 15000]); const need = price - total;
  const o = mk(need, [need + 1000, need - 1000, price, total], money);
  return { sec: 'Tiền Việt Nam', text: `${who} có các tờ tiền như hình, muốn mua món đồ chơi giá ${money(price)}. ${who} còn thiếu bao nhiêu tiền?`, img: path, ...o, why: `Có ${fmtNum(total)} đồng. Thiếu: ${fmtNum(price)} − ${fmtNum(total)} = ${fmtNum(need)} (đồng).` };
}

/* ── Một phần mấy ─────────────────────────────────────────────────────────── */
function motphanmay(key) {
  const d = pick([2, 3, 4, 5, 6, 8, 9]);
  const shape = pick(['tron', 'cn', 'tron']);
  let s = '';
  if (shape === 'tron') {
    const cx = 100, cy = 90, r = 72;
    for (let i = 0; i < d; i++) { const a0 = -90 + i * 360 / d, a1 = a0 + 360 / d; s += PATH(`M ${cx} ${cy} L ${r1(cx + r * Math.cos(deg(a0)))} ${r1(cy + r * Math.sin(deg(a0)))} A ${r} ${r} 0 0 1 ${r1(cx + r * Math.cos(deg(a1)))} ${r1(cy + r * Math.sin(deg(a1)))} Z`, i === 0 ? '#60a5fa' : '#fff', INK, 2); }
  } else {
    const cw = 200 / d; for (let i = 0; i < d; i++) s += R(20 + i * cw, 40, cw, 100, i === 0 ? '#60a5fa' : '#fff', INK, 2);
  }
  const path = img(key, svg(shape === 'tron' ? 200 : 240, 180, s));
  const o = mk(`1/${d}`, shuffle([`1/${d + 1}`, `1/${d - 1}`, `${d - 1}/${d}`, `1/${d + 2}`]), x => x);
  return { sec: 'Một phần mấy', text: 'Đã tô màu một phần mấy của hình?', img: path, ...o, why: `Hình được chia thành ${d} phần bằng nhau, tô màu 1 phần → đã tô 1/${d} hình.` };
}

/* ── Gấp mấy lần: sơ đồ đoạn thẳng ───────────────────────────────────────── */
function gaplan(key) {
  const a = ri(2, 9), k = ri(2, 6), b = a * k;
  if (b > 40) return gaplan(key);
  const pair = pick([['Cam', 'Quýt', 'quả'], ['Sách', 'Vở', 'quyển'], ['Gà', 'Vịt', 'con'], ['Bút', 'Thước', 'cái']]);
  const path = img(key, barModelSVG([{ label: pair[0], len: b, segs: k, text: `${b} ${pair[2]}` }, { label: pair[1], len: a, text: `${a} ${pair[2]}`, fill: '#fde8ee' }], { u: Math.min(26, 260 / b) }));
  const o = mk(k, [b - a, k + 1, k - 1, a + b], v => `${v} lần`);
  return { sec: 'Gấp mấy lần', text: `Sơ đồ cho biết số ${pair[0].toLowerCase()} và số ${pair[1].toLowerCase()}. Số ${pair[0].toLowerCase()} gấp số ${pair[1].toLowerCase()} mấy lần?`, img: path, ...o,
    why: `Muốn biết số lớn gấp số bé mấy lần, ta lấy số lớn chia cho số bé: ${b} : ${a} = ${k} (lần).` };
}

/* ── Bảng số liệu ─────────────────────────────────────────────────────────── */
function bang(key) {
  const sets = [
    { title: 'Số cây trồng được của các tổ', head: ['Tổ', 'Tổ 1', 'Tổ 2', 'Tổ 3', 'Tổ 4'], row: 'Số cây', unit: 'cây', lo: 12, hi: 45 },
    { title: 'Số điểm 10 của lớp 3A trong 4 tuần', head: ['Tuần', 'Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'], row: 'Điểm 10', unit: 'điểm 10', lo: 5, hi: 30 },
    { title: 'Số quyển sách thư viện cho mượn', head: ['Thứ', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm'], row: 'Số sách', unit: 'quyển', lo: 20, hi: 90 },
  ];
  const st = pick(sets);
  let vals; do { vals = [1, 2, 3, 4].map(() => ri(st.lo, st.hi)); } while (new Set(vals).size < 4);
  const path = img(key, tableSVG(st.head, [[st.row, ...vals]], { title: st.title, cw: 82 }));
  const mode = pick(['max', 'total', 'diff', 'more']);
  const mx = Math.max(...vals), mn = Math.min(...vals), cats = st.head.slice(1);
  if (mode === 'max') { const c = cats[vals.indexOf(mx)]; const o = mk(c, cats.filter(x => x !== c), x => x); return { sec: 'Bảng số liệu', text: `Bảng thống kê "${st.title}". ${st.head[0]} nào có số ${st.unit} nhiều nhất?`, img: path, ...o, why: `So sánh các số: ${vals.join(', ')} → lớn nhất là ${mx} (${c}).` }; }
  if (mode === 'total') { const t = sum(vals); const o = mk(t, [t + 10, t - 10, t + 1, mx + mn]); return { sec: 'Bảng số liệu', text: `Bảng thống kê "${st.title}". Tổng số ${st.unit} của cả bốn ${st.head[0].toLowerCase()} là bao nhiêu?`, img: path, ...o, why: `${vals.join(' + ')} = ${t}.` }; }
  if (mode === 'diff') { const o = mk(mx - mn, [mx - mn + 1, mx - mn - 1, mx + mn, mx]); return { sec: 'Bảng số liệu', text: `Bảng thống kê "${st.title}". ${st.head[0]} nhiều nhất hơn ${st.head[0].toLowerCase()} ít nhất bao nhiêu ${st.unit}?`, img: path, ...o, why: `${mx} − ${mn} = ${mx - mn}.` }; }
  let i, j; do { i = ri(0, 3); j = ri(0, 3); } while (i === j || vals[i] <= vals[j]);
  const o = mk(vals[i] - vals[j], [vals[i] + vals[j], vals[i] - vals[j] + 1, vals[i] - vals[j] - 1, vals[i]]);
  return { sec: 'Bảng số liệu', text: `Bảng thống kê "${st.title}". ${cats[i]} nhiều hơn ${cats[j]} bao nhiêu ${st.unit}?`, img: path, ...o, why: `${vals[i]} − ${vals[j]} = ${vals[i] - vals[j]} (${st.unit}).` };
}

/* ── Khả năng xảy ra: vòng quay / hộp bóng ────────────────────────────────── */
const COLORS = [['đỏ', '#e11d48'], ['vàng', '#f5c400'], ['xanh', '#2563eb'], ['tím', '#8e6cd1']];
function khanang(key) {
  const cols = shuffle(COLORS).slice(0, 3);
  let counts; do { counts = cols.map(() => ri(1, 4)); } while (new Set(counts).size < 3 || sum(counts) > 8);
  const n = sum(counts), cx = 100, cy = 100, r = 80;
  const sectors = shuffle(cols.flatMap((c, i) => Array(counts[i]).fill(c[1])));
  let s = '';
  sectors.forEach((c, i) => { const a0 = -90 + i * 360 / n, a1 = a0 + 360 / n; s += PATH(`M ${cx} ${cy} L ${r1(cx + r * Math.cos(deg(a0)))} ${r1(cy + r * Math.sin(deg(a0)))} A ${r} ${r} 0 0 1 ${r1(cx + r * Math.cos(deg(a1)))} ${r1(cy + r * Math.sin(deg(a1)))} Z`, c, '#fff', 2); });
  s += C(cx, cy, r, 'none', INK, 2.5) + P([[cx, cy - 8], [cx - 6, cy + 6], [cx + 6, cy + 6]], INK) + C(cx, cy, 4, '#fff', INK, 1.5);
  const path = img(key, svg(200, 200, s));
  const mode = pick(['most', 'least', 'cannot']);
  if (mode === 'cannot') {
    const absent = COLORS.find(c => !cols.includes(c));
    const o = mk(absent[0], cols.map(c => c[0]), x => x);
    return { sec: 'Khả năng xảy ra', text: 'Quay vòng quay như hình. Kim KHÔNG THỂ dừng ở màu nào?', img: path, ...o, why: `Vòng quay chỉ có các màu ${cols.map(c => c[0]).join(', ')}; không có phần màu ${absent[0]} nên kim không thể dừng ở đó.` };
  }
  const i = counts.indexOf(mode === 'most' ? Math.max(...counts) : Math.min(...counts));
  const o = mk(cols[i][0], [...cols.filter((_, j) => j !== i).map(c => c[0]), COLORS.find(c => !cols.includes(c))[0]], x => x);
  return { sec: 'Khả năng xảy ra', text: `Quay vòng quay như hình (các phần bằng nhau). Kim có khả năng dừng ở màu nào ${mode === 'most' ? 'NHIỀU' : 'ÍT'} nhất?`, img: path, ...o,
    why: `Số phần mỗi màu: ${cols.map((c, j) => `${c[0]} ${counts[j]}`).join(', ')}. Màu chiếm ${mode === 'most' ? 'nhiều' : 'ít'} phần nhất có khả năng ${mode === 'most' ? 'cao' : 'thấp'} nhất: ${cols[i][0]}.` };
}

/* ── Chọn hình (4 phương án là hình) ──────────────────────────────────────── */
function chonhinh(key, kind) {
  const flatCard = k => optCard((cx, cy, s) => flatBody(k, cx, cy, s * 0.9, '#e8f0ff'));
  const solidCard = k => optCard((cx, cy, s) => solidBody(k, cx, cy, s * 1.1));
  if (kind === 'cn') { const o = mkImg(G, key, flatCard('cn'), shuffle([flatCard('bh'), flatCard('thang'), flatCard('thoi')])); return { sec: 'Hình chữ nhật', text: 'Hình nào là hình chữ nhật?', ...o, why: 'Hình chữ nhật có 4 góc vuông, hai cạnh dài bằng nhau và hai cạnh ngắn bằng nhau. Hình bình hành, hình thang, hình thoi không có 4 góc vuông.' }; }
  if (kind === 'vuong') { const o = mkImg(G, key, flatCard('vuong'), shuffle([flatCard('cn'), flatCard('thoi'), flatCard('bh')])); return { sec: 'Hình vuông', text: 'Hình nào là hình vuông?', ...o, why: 'Hình vuông có 4 góc vuông và 4 cạnh bằng nhau.' }; }
  if (kind === 'gocvuong') {
    const card = a => optCard((cx, cy, s) => angleBody(cx - s * 0.3, cy + s * 0.3, a, s * 0.75, 0, ''), 120, 100);
    const o = mkImg(G, key, card(90), shuffle([card(60), card(120), card(40)]));
    return { sec: 'Góc vuông', text: 'Góc nào là góc vuông?', ...o, why: 'Góc vuông là góc bằng góc của ê ke (được đánh dấu bằng ô vuông nhỏ ở đỉnh). Các góc còn lại nhỏ hơn hoặc lớn hơn góc vuông.' };
  }
  const k = kind.split(':')[1];
  const o = mkImg(G, key, solidCard(k), shuffle(['tru', 'cau', 'hop', 'lapphuong'].filter(x => x !== k).map(solidCard)));
  return { sec: 'Hình khối', text: `Hình nào là ${SOLID_NAME[k]}?`, ...o, why: { lapphuong: 'Khối lập phương có 6 mặt là hình vuông bằng nhau, 8 đỉnh, 12 cạnh.', hop: 'Khối hộp chữ nhật có 6 mặt là hình chữ nhật, 8 đỉnh, 12 cạnh.', tru: 'Khối trụ có hai đáy hình tròn.', cau: 'Khối cầu tròn đều.' }[k] };
}

/* ── KẾ HOẠCH 10 ĐỀ ───────────────────────────────────────────────────────── */
const rep = (f, n, arg) => Array.from({ length: n }, () => [f, arg]);
export const PLAN = [
  { title: 'Đề 1 · Điểm ở giữa — trung điểm', q: [...rep(trungdiem, 7), ...rep(gaplan, 3)] },
  { title: 'Đề 2 · Hình tròn: tâm — bán kính — đường kính', q: [...rep(duongtron, 7), ...rep(chonhinh, 1, 'cn'), ...rep(chonhinh, 1, 'vuong'), ...rep(chonhinh, 1, 'gocvuong')] },
  { title: 'Đề 3 · Góc vuông — góc không vuông', q: [...rep(gocvuong, 7), ...rep(chonhinh, 2, 'gocvuong'), ...rep(chonhinh, 1, 'cn')] },
  { title: 'Đề 4 · Khối lập phương — khối hộp chữ nhật', q: [...rep(demkhoi, 6), ...rep(chonhinh, 1, 'khoi:lapphuong'), ...rep(chonhinh, 1, 'khoi:hop'), ...rep(chonhinh, 1, 'khoi:tru'), ...rep(chonhinh, 1, 'khoi:cau')] },
  { title: 'Đề 5 · Chu vi tam giác — tứ giác — hình vuông', q: [...rep(chuvi, 5), ...rep(hinhvuong, 5)] },
  { title: 'Đề 6 · Diện tích theo ô vuông 1 cm²', q: [...rep(dientichO, 6), ...rep(hinhvuong, 4)] },
  { title: 'Đề 7 · Mi-li-mét — Gam', q: [...rep(mm, 5), ...rep(gam, 5)] },
  { title: 'Đề 8 · Mi-li-lít — Nhiệt độ', q: [...rep(ml, 5), ...rep(nhietdo, 5)] },
  { title: 'Đề 9 · Tiền Việt Nam — Một phần mấy', q: [...rep(tien, 5), ...rep(motphanmay, 5)] },
  { title: 'Đề 10 · Bảng số liệu — Khả năng xảy ra', q: [...rep(bang, 6), ...rep(khanang, 4)] },
];
export const HERO = {
  title: 'Toán lớp 3 qua hình — bài học: trung điểm, hình tròn, góc vuông, khối hộp, chu vi – diện tích, mm – g – ml – °C, tiền, bảng số liệu',
  intro: 'Bài 16 · 17 · 18 · 21 · 29–33 · 47–52 · 61 · 14 · 39 · 71–72 (SGK Kết nối tri thức)',
};
