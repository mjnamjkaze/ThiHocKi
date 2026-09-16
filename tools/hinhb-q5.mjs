/* Lớp 5 — các dạng câu có hình theo bài học SGK Toán 5 (KNTT):
   Bài 27 Hình thang – diện tích · Bài 28 Đường tròn – chu vi – diện tích hình tròn · Bài 25–26 Hình tam giác (tam giác vuông) ·
   Bài 50–55 Hình hộp chữ nhật – hình lập phương: hình khai triển, diện tích xung quanh, thể tích · Bài 63 Biểu đồ hình quạt tròn ·
   Bài 44 Tỉ lệ bản đồ · Bài 36–39 Tỉ số phần trăm · Bài 10–14 Số thập phân trên tia số · Bài 60 Vận tốc – chuyển động đều */
import * as A from './hinhb-art.mjs';
const { rnd, ri, pick, shuffle, sum, svg, R, L, C, EL, P, PL, T, EM, PATH, INK, PAL, mk, mkImg, saveImg, boxBody, cylinderBody, sphereBody, flatBody, solidBody, optCard, barChartSVG, numberLineSVG, pieSVG, deg, r1, fmtNum, fmtDec, money } = A;
const G = 5;
const img = (key, s) => saveImg(G, key, s);
const cm2 = v => `${fmtDec(v)} cm²`;
const cm = v => `${fmtDec(v)} cm`;

/* ── Hình thang ───────────────────────────────────────────────────────────── */
function thang(key) {
  let a, b, h; do { a = ri(6, 16); b = ri(3, a - 1); h = ri(3, 10); } while (((a + b) * h) % 2);
  const u = 14, x0 = 40, base = 160, top = base - h * u;
  const vuong = rnd() < 0.3;
  const off = vuong ? 0 : (a - b) * u * 0.45;
  const pts = [[x0, base], [x0 + a * u, base], [x0 + off + b * u, top], [x0 + off, top]];
  let s = P(pts, '#fff3d6', INK, 2.5);
  const hx = vuong ? x0 : x0 + off + b * u * 0.5;
  s += L(hx, top, hx, base, '#e05b7e', 1.6, vuong ? '' : 'stroke-dasharray="5 4"');
  if (vuong) s += PL([[x0 + 12, base], [x0 + 12, base - 12], [x0, base - 12]], '#e05b7e', 1.5); else s += PL([[hx + 10, base], [hx + 10, base - 10], [hx, base - 10]], '#e05b7e', 1.5);
  s += T(x0 + a * u / 2, base + 20, `${a} cm`, 14, 'middle', '#1d4ed8') + T(x0 + off + b * u / 2, top - 8, `${b} cm`, 14, 'middle', '#1d4ed8') + T(hx + 8, (top + base) / 2 + 5, `${h} cm`, 13, 'start', '#be123c');
  const path = img(key, svg(x0 * 2 + a * u + 20, 190, s));
  const S = (a + b) * h / 2;
  const mode = pick(['dt', 'dt', 'h']);
  if (mode === 'dt') {
    const o = mk(S, [(a + b) * h, a * b, (a + b) * h / 2 + h, a * h / 2 + b], cm2);
    return { sec: 'Diện tích hình thang', text: `Hình thang${vuong ? ' vuông' : ''} có hai đáy và chiều cao ghi trên hình. Diện tích hình thang là bao nhiêu?`, img: path, ...o, why: `S = (đáy lớn + đáy bé) × chiều cao : 2 = (${a} + ${b}) × ${h} : 2 = ${S} (cm²).` };
  }
  const o = mk(h, [S / (a + b) * 2 === h ? h * 2 : h + 1, h - 1, h + 2, (a + b) / 2], cm);
  return { sec: 'Diện tích hình thang', text: `Hình thang có hai đáy ${a} cm và ${b} cm, diện tích ${S} cm². Chiều cao (ghi trên hình) là bao nhiêu?`, img: path, ...o, why: `Chiều cao = S × 2 : (đáy lớn + đáy bé) = ${S} × 2 : ${a + b} = ${h} (cm).` };
}

/* ── Hình tròn: chu vi, diện tích ─────────────────────────────────────────── */
function tron(key) {
  const r = pick([2, 3, 4, 5, 6, 10, 2.5, 1.5]);
  const givenD = rnd() < 0.4, cx = 110, cy = 100, R0 = 78;
  let s = C(cx, cy, R0, '#f8fafc', INK, 2.5) + C(cx, cy, 4, INK, INK) + T(cx - 8, cy + 20, 'O', 15, 'end');
  if (givenD) { s += L(cx - R0, cy, cx + R0, cy, '#5b8def', 2.5) + C(cx - R0, cy, 4, INK, INK) + C(cx + R0, cy, 4, INK, INK) + T(cx, cy - 12, `d = ${fmtDec(r * 2)} cm`, 13, 'middle', '#1d4ed8'); }
  else { const a = -35; s += L(cx, cy, cx + R0 * Math.cos(deg(a)), cy + R0 * Math.sin(deg(a)), '#5b8def', 2.5) + T(cx + R0 * 0.55 * Math.cos(deg(a)), cy + R0 * 0.55 * Math.sin(deg(a)) - 10, `r = ${fmtDec(r)} cm`, 13, 'middle', '#1d4ed8'); }
  const path = img(key, svg(230, 205, s));
  const Cv = Math.round(r * 2 * 3.14 * 100) / 100, S = Math.round(r * r * 3.14 * 100) / 100;
  if (rnd() < 0.5) {
    const o = mk(Cv, [Math.round(r * 3.14 * 100) / 100, Math.round(r * 4 * 3.14 * 100) / 100, S, Math.round((Cv + 3.14) * 100) / 100], cm);
    return { sec: 'Chu vi hình tròn', text: `Hình tròn tâm O có ${givenD ? 'đường kính' : 'bán kính'} ghi trên hình. Chu vi hình tròn là bao nhiêu? (lấy π = 3,14)`, img: path, ...o,
      why: givenD ? `C = d × 3,14 = ${fmtDec(r * 2)} × 3,14 = ${fmtDec(Cv)} (cm).` : `C = r × 2 × 3,14 = ${fmtDec(r)} × 2 × 3,14 = ${fmtDec(Cv)} (cm).` };
  }
  const o = mk(S, [Cv, Math.round(r * 2 * 3.14 * 100) / 100, Math.round((r * 2) * (r * 2) * 3.14 * 100) / 100, Math.round(r * 3.14 * 100) / 100], cm2);
  return { sec: 'Diện tích hình tròn', text: `Hình tròn tâm O có ${givenD ? 'đường kính' : 'bán kính'} ghi trên hình. Diện tích hình tròn là bao nhiêu? (lấy π = 3,14)`, img: path, ...o,
    why: `${givenD ? `Bán kính r = ${fmtDec(r * 2)} : 2 = ${fmtDec(r)} cm. ` : ''}S = r × r × 3,14 = ${fmtDec(r)} × ${fmtDec(r)} × 3,14 = ${fmtDec(S)} (cm²).` };
}

/* ── Tam giác vuông: diện tích từ hai cạnh góc vuông ──────────────────────── */
function tgvuong(key) {
  let a, b; do { a = ri(3, 14); b = ri(3, 12); } while ((a * b) % 2);
  const u = 13, x0 = 50, y0 = 30;
  const pts = [[x0, y0], [x0, y0 + b * u], [x0 + a * u, y0 + b * u]];
  let s = P(pts, '#fde8ee', INK, 2.5) + PL([[x0 + 12, y0 + b * u], [x0 + 12, y0 + b * u - 12], [x0, y0 + b * u - 12]], '#e05b7e', 1.6);
  s += T(x0 + a * u / 2, y0 + b * u + 20, `${a} cm`, 14, 'middle', '#1d4ed8') + T(x0 - 8, y0 + b * u / 2 + 5, `${b} cm`, 14, 'end', '#1d4ed8');
  s += T(x0 - 6, y0 - 4, 'A', 14) + T(x0 - 6, y0 + b * u + 18, 'B', 14) + T(x0 + a * u + 12, y0 + b * u + 18, 'C', 14);
  const hyp = Math.round(Math.sqrt(a * a + b * b) * 10) / 10;
  const showHyp = rnd() < 0.4; if (showHyp) s += T(x0 + a * u / 2 + 14, y0 + b * u / 2 - 6, `${fmtDec(hyp)} cm`, 12, 'start', '#888', 500);
  const path = img(key, svg(x0 + a * u + 70, y0 + b * u + 40, s));
  const S = a * b / 2;
  const o = mk(S, [a * b, a + b, showHyp ? Math.round(a * hyp / 2 * 10) / 10 : S + a, (a + b) * 2, S + 1], cm2);
  return { sec: 'Diện tích tam giác', text: 'Tam giác ABC vuông tại B có độ dài hai cạnh góc vuông ghi trên hình. Diện tích tam giác ABC là bao nhiêu?', img: path, ...o,
    why: `Trong tam giác vuông, hai cạnh góc vuông chính là đáy và chiều cao: S = ${a} × ${b} : 2 = ${S} (cm²).${showHyp ? ' Cạnh huyền không dùng để tính.' : ''}` };
}

/* ── Hình ghép (chữ L) ────────────────────────────────────────────────────── */
function ghep(key) {
  const W = ri(8, 16), H = ri(6, 12), w = ri(2, W - 3), h = ri(2, H - 3), u = 13, x0 = 50, y0 = 30;
  const pts = [[x0, y0], [x0 + (W - w) * u, y0], [x0 + (W - w) * u, y0 + h * u], [x0 + W * u, y0 + h * u], [x0 + W * u, y0 + H * u], [x0, y0 + H * u]];
  let s = P(pts, '#e8f7ee', INK, 2.5);
  s += T(x0 + W * u / 2, y0 + H * u + 20, `${W} cm`, 14, 'middle', '#1d4ed8') + T(x0 - 8, y0 + H * u / 2 + 5, `${H} cm`, 14, 'end', '#1d4ed8');
  s += T(x0 + (W - w) * u + w * u / 2, y0 + h * u - 6, `${w} cm`, 13, 'middle', '#be123c') + T(x0 + (W - w) * u + 6, y0 + h * u / 2 + 5, `${h} cm`, 13, 'start', '#be123c');
  s += L(x0 + (W - w) * u, y0 + h * u, x0 + (W - w) * u, y0 + H * u, '#999', 1.2, 'stroke-dasharray="5 4"');
  const path = img(key, svg(x0 + W * u + 30, y0 + H * u + 40, s));
  const S = W * H - w * h;
  if (rnd() < 0.7) {
    const o = mk(S, [W * H, W * H + w * h, (W - w) * H, S + w], cm2);
    return { sec: 'Hình ghép', text: 'Mảnh vườn có dạng như hình (các góc đều là góc vuông), kích thước ghi trên hình. Diện tích mảnh vườn là bao nhiêu?', img: path, ...o,
      why: `Hình chữ nhật lớn ${W} × ${H} = ${W * H} cm² bị khuyết góc ${w} × ${h} = ${w * h} cm². Diện tích = ${W * H} − ${w * h} = ${S} (cm²). (Hoặc chia thành hai hình chữ nhật: ${W - w} × ${H} + ${w} × ${H - h} = ${(W - w) * H} + ${w * (H - h)} = ${S}.)` };
  }
  const per = 2 * (W + H);
  const o = mk(per, [per - 2 * w, per - 2 * h, W + H + w + h, per + w + h], cm);
  return { sec: 'Hình ghép', text: 'Mảnh vườn có dạng như hình (các góc đều là góc vuông), kích thước ghi trên hình. Chu vi mảnh vườn là bao nhiêu?', img: path, ...o,
    why: `Dời hai cạnh của phần khuyết ra ngoài, chu vi hình chữ L bằng chu vi hình chữ nhật ${W} × ${H}: (${W} + ${H}) × 2 = ${per} (cm).` };
}

/* ── Hình hộp chữ nhật: thể tích, diện tích xung quanh, toàn phần ─────────── */
function hop(key) {
  const a = ri(4, 12), b = ri(2, 8), c = ri(2, 8);
  const u = Math.min(16, 200 / (a + b));
  const bx = boxBody(50, 26, a, b, c, u, { labels: { a: `${a} cm`, b: `${b} cm`, c: `${c} cm` } });
  const path = img(key, svg(bx.w + 120, bx.h + 60, bx.body));
  const V = a * b * c, Sxq = (a + b) * 2 * c, Stp = Sxq + 2 * a * b;
  const mode = pick(['V', 'V', 'Sxq', 'Stp']);
  if (mode === 'V') { const o = mk(V, [Sxq, Stp, a * b + c, (a + b + c) * 2, V + a], v => `${fmtNum(v)} cm³`); return { sec: 'Thể tích hình hộp chữ nhật', text: 'Hình hộp chữ nhật có ba kích thước ghi trên hình. Thể tích hình hộp là bao nhiêu?', img: path, ...o, why: `V = dài × rộng × cao = ${a} × ${b} × ${c} = ${V} (cm³).` }; }
  if (mode === 'Sxq') { const o = mk(Sxq, [Stp, V, (a + b) * c, a * b * 2], cm2); return { sec: 'Diện tích xung quanh', text: 'Hình hộp chữ nhật có ba kích thước ghi trên hình. Diện tích xung quanh của hình hộp là bao nhiêu?', img: path, ...o, why: `S xung quanh = chu vi đáy × chiều cao = (${a} + ${b}) × 2 × ${c} = ${Sxq} (cm²).` }; }
  const o = mk(Stp, [Sxq, V, Sxq + a * b, (a * b + b * c + a * c)], cm2);
  return { sec: 'Diện tích toàn phần', text: 'Hình hộp chữ nhật có ba kích thước ghi trên hình. Diện tích toàn phần của hình hộp là bao nhiêu?', img: path, ...o, why: `S xung quanh = (${a} + ${b}) × 2 × ${c} = ${Sxq} cm²; hai mặt đáy = ${a} × ${b} × 2 = ${2 * a * b} cm². S toàn phần = ${Sxq} + ${2 * a * b} = ${Stp} (cm²).` };
}

/* ── Đếm khối 1 cm³ ───────────────────────────────────────────────────────── */
function demkhoi(key) {
  const a = ri(2, 5), b = ri(2, 3), c = ri(2, 4);
  const bx = boxBody(40, 24, a, b, c, 30, { grid: true });
  const path = img(key, svg(bx.w + 80, bx.h + 56, bx.body + T(bx.w / 2 + 40, bx.h + 46, 'mỗi khối nhỏ là 1 cm³', 12, 'middle', '#666', 500)));
  const V = a * b * c;
  const o = mk(V, [a * c + a * b + b * c, a * c * 2 + b, V + a, a + b + c], v => `${v} cm³`);
  return { sec: 'Thể tích', text: 'Hình hộp được xếp kín bằng các khối lập phương cạnh 1 cm (không rỗng). Thể tích hình hộp là bao nhiêu?', img: path, ...o,
    why: `Mỗi lớp có ${a} × ${b} = ${a * b} khối, có ${c} lớp: ${a * b} × ${c} = ${V} khối → ${V} cm³.` };
}

/* ── Hình lập phương ──────────────────────────────────────────────────────── */
function lapphuong(key) {
  const a = ri(2, 10), u = Math.min(28, 130 / a);
  const bx = boxBody(50, 26, a, a, a, u, { labels: { a: `${a} cm` }, fill: '#d7f5e3', fillTop: '#ecfbf1', fillSide: '#a9dcc0' });
  const path = img(key, svg(bx.w + 110, bx.h + 60, bx.body));
  const V = a ** 3, Stp = 6 * a * a, Sxq = 4 * a * a;
  const mode = pick(['V', 'Stp', 'Sxq', 'V']);
  if (mode === 'V') { const o = mk(V, [Stp, a * a, a * 3, Sxq], v => `${fmtNum(v)} cm³`); return { sec: 'Thể tích hình lập phương', text: 'Hình lập phương có cạnh ghi trên hình. Thể tích hình lập phương là bao nhiêu?', img: path, ...o, why: `V = cạnh × cạnh × cạnh = ${a} × ${a} × ${a} = ${V} (cm³).` }; }
  if (mode === 'Stp') { const o = mk(Stp, [Sxq, V, a * a, a * 12], cm2); return { sec: 'Diện tích toàn phần', text: 'Hình lập phương có cạnh ghi trên hình. Diện tích toàn phần của hình lập phương là bao nhiêu?', img: path, ...o, why: `Mỗi mặt là hình vuông ${a} × ${a} = ${a * a} cm², có 6 mặt: ${a * a} × 6 = ${Stp} (cm²).` }; }
  const o = mk(Sxq, [Stp, V, a * a, a * 4], cm2);
  return { sec: 'Diện tích xung quanh', text: 'Hình lập phương có cạnh ghi trên hình. Diện tích xung quanh của hình lập phương là bao nhiêu?', img: path, ...o, why: `Diện tích xung quanh gồm 4 mặt bên: ${a} × ${a} × 4 = ${Sxq} (cm²).` };
}

/* ── Hình khai triển hình lập phương: mặt đối diện ───────────────────────── */
function khaitrien(key) {
  // lưới chữ thập: (r,c) — hàng 0: (0,1); hàng 1: (1,0)(1,1)(1,2)(1,3); hàng 2: (2,1). Đối diện: (1,0)-(1,2), (1,1)-(1,3), (0,1)-(2,1)
  const cells = [[0, 1], [1, 0], [1, 1], [1, 2], [1, 3], [2, 1]];
  const opp = { '0,1': '2,1', '2,1': '0,1', '1,0': '1,2', '1,2': '1,0', '1,1': '1,3', '1,3': '1,1' };
  const nums = shuffle([1, 2, 3, 4, 5, 6]);
  const at = {}; cells.forEach((c, i) => at[c.join(',')] = nums[i]);
  const u = 48, x0 = 20, y0 = 16;
  let s = '';
  cells.forEach((c, i) => { s += R(x0 + c[1] * u, y0 + c[0] * u, u, u, ['#dbeafe', '#dcfce7', '#fef3c7', '#fde8ee', '#ede9fe', '#cffafe'][i], INK, 2) + T(x0 + c[1] * u + u / 2, y0 + c[0] * u + u / 2 + 7, String(nums[i]), 20); });
  const path = img(key, svg(x0 * 2 + 4 * u, y0 * 2 + 3 * u, s));
  const pickCell = pick(cells), n = at[pickCell.join(',')], ans = at[opp[pickCell.join(',')]];
  const o = mk(ans, nums.filter(v => v !== n && v !== ans));
  return { sec: 'Hình khai triển', text: `Gấp hình khai triển bên thành một hình lập phương. Mặt ghi số ${n} sẽ đối diện với mặt ghi số nào?`, img: path, ...o,
    why: `Trong hình khai triển chữ thập, hai mặt cách nhau một ô trên cùng hàng (hoặc cùng cột) sẽ đối diện nhau khi gấp; các mặt kề cạnh nhau thì tiếp giáp. Mặt ${n} cách mặt ${ans} đúng một ô nên chúng đối diện.` };
}

/* ── Biểu đồ hình quạt tròn ───────────────────────────────────────────────── */
function quat(key) {
  const sets = [
    { title: 'Môn thể thao yêu thích của học sinh khối 5', labels: ['Bóng đá', 'Cầu lông', 'Bơi', 'Cờ vua'], unit: 'học sinh', tot: [40, 60, 80, 120] },
    { title: 'Loại sách trong thư viện', labels: ['Truyện', 'Khoa học', 'Tham khảo', 'Tạp chí'], unit: 'quyển sách', tot: [200, 400, 500, 1000] },
    { title: 'Phương tiện đến trường của lớp 5A', labels: ['Xe đạp', 'Đi bộ', 'Xe máy (bố mẹ đưa)', 'Xe buýt'], unit: 'học sinh', tot: [40, 20, 50] },
  ];
  const st = pick(sets);
  const n = ri(3, 4), labels = shuffle(st.labels).slice(0, n);
  let pcts; do { pcts = Array.from({ length: n - 1 }, () => pick([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])); pcts.push(100 - sum(pcts)); } while (pcts.some(p => p < 5 || p > 60) || new Set(pcts).size < n);
  const path = img(key, pieSVG(labels.map((l, i) => ({ label: l, pct: pcts[i] })), { title: st.title }));
  const total = pick(st.tot);
  const mode = pick(['count', 'count', 'max', 'diff', 'find']);
  if (mode === 'count') { const i = ri(0, n - 1); const v = total * pcts[i] / 100; if (!Number.isInteger(v)) return quat(key); const o = mk(v, [pcts[i], total - v, v + total / 20, v * 2], val => `${fmtNum(val)} ${st.unit}`); return { sec: 'Biểu đồ hình quạt', text: `Biểu đồ hình quạt tròn cho biết "${st.title}". Nếu tổng số là ${fmtNum(total)} ${st.unit} thì ${labels[i].toLowerCase()} có bao nhiêu ${st.unit}?`, img: path, ...o, why: `${labels[i]} chiếm ${pcts[i]}%: ${fmtNum(total)} × ${pcts[i]} : 100 = ${fmtNum(v)} (${st.unit}).` }; }
  if (mode === 'max') { const i = pcts.indexOf(Math.max(...pcts)); const o = mk(labels[i], labels.filter((_, j) => j !== i), x => x); return { sec: 'Biểu đồ hình quạt', text: `Biểu đồ hình quạt tròn cho biết "${st.title}". Loại nào chiếm tỉ lệ lớn nhất?`, img: path, ...o, why: `Phần quạt lớn nhất là ${pcts[i]}% → ${labels[i]}.` }; }
  if (mode === 'diff') { let i, j; do { i = ri(0, n - 1); j = ri(0, n - 1); } while (i === j || pcts[i] <= pcts[j]); const o = mk(pcts[i] - pcts[j], [pcts[i] + pcts[j], pcts[i], pcts[j], pcts[i] - pcts[j] + 5], v => `${v}%`); return { sec: 'Biểu đồ hình quạt', text: `Biểu đồ hình quạt tròn cho biết "${st.title}". ${labels[i]} chiếm nhiều hơn ${labels[j].toLowerCase()} bao nhiêu phần trăm?`, img: path, ...o, why: `${pcts[i]}% − ${pcts[j]}% = ${pcts[i] - pcts[j]}%.` }; }
  const i = ri(0, n - 1); const v = total * pcts[i] / 100; if (!Number.isInteger(v)) return quat(key);
  const o = mk(total, [v, total + total / 10, total - total / 10, v * 100 / pcts[i] * 2], val => `${fmtNum(val)} ${st.unit}`);
  return { sec: 'Biểu đồ hình quạt', text: `Biểu đồ hình quạt tròn cho biết "${st.title}". Biết ${labels[i].toLowerCase()} có ${fmtNum(v)} ${st.unit}. Tổng số ${st.unit} là bao nhiêu?`, img: path, ...o, why: `${labels[i]} chiếm ${pcts[i]}% ứng với ${fmtNum(v)}. Tổng = ${fmtNum(v)} : ${pcts[i]} × 100 = ${fmtNum(total)} (${st.unit}).` };
}

/* ── Tỉ lệ bản đồ ─────────────────────────────────────────────────────────── */
function tile(key) {
  const scale = pick([1000, 2000, 5000, 10000, 20000, 50000, 100000, 500]);
  const d = pick([2, 3, 4, 5, 6, 8, 2.5, 4.5]);
  const real = d * scale; // cm
  const [pa, pb] = pick([['Trường học', 'Bưu điện'], ['Nhà An', 'Công viên'], ['Bến xe', 'Chợ'], ['Ga tàu', 'Sân vận động']]);
  let s = R(10, 10, 320, 170, '#f0fdf4', INK, 2) + T(300, 30, 'N', 12) + L(300, 62, 300, 38, INK, 1.5) + P([[300, 34], [296, 44], [304, 44]], INK);
  for (let i = 1; i < 6; i++) s += L(10, 10 + i * 28, 330, 10 + i * 28, '#d1fae5', 1) + L(10 + i * 53, 10, 10 + i * 53, 180, '#d1fae5', 1);
  const A = [60, 130], B = [250, 70];
  s += L(A[0], A[1], B[0], B[1], '#e05b7e', 2.5, 'stroke-dasharray="6 4"') + C(A[0], A[1], 6, '#1d4ed8', INK, 1.5) + C(B[0], B[1], 6, '#1d4ed8', INK, 1.5);
  s += T(A[0], A[1] + 22, pa, 12) + T(B[0], B[1] - 14, pb, 12) + T((A[0] + B[0]) / 2 + 10, (A[1] + B[1]) / 2 + 18, `${fmtDec(d)} cm`, 13, 'middle', '#be123c');
  s += R(14, 150, 120, 24, '#fff', INK, 1.5) + T(74, 167, `Tỉ lệ 1 : ${fmtNum(scale)}`, 13);
  const path = img(key, svg(340, 190, s));
  const km = real >= 100000 && real % 100000 === 0, m = real % 100 === 0;
  const fmtAns = v => km ? `${fmtDec(v / 100000)} km` : m ? `${fmtNum(v / 100)} m` : `${fmtNum(v)} cm`;
  const o = mk(real, [real * 10, real / 10, real * 100, d * 100, real + scale], v => (v <= 0 ? null : fmtAns(v)));
  return { sec: 'Tỉ lệ bản đồ', text: `Trên bản đồ tỉ lệ 1 : ${fmtNum(scale)}, khoảng cách từ ${pa.toLowerCase()} đến ${pb.toLowerCase()} đo được ${fmtDec(d)} cm. Khoảng cách thực tế là bao nhiêu?`, img: path, ...o,
    why: `Độ dài thật = ${fmtDec(d)} × ${fmtNum(scale)} = ${fmtNum(real)} cm${km ? ` = ${fmtDec(real / 100000)} km` : m ? ` = ${fmtNum(real / 100)} m` : ''}.` };
}

/* ── Tỉ số phần trăm qua lưới 100 ô ──────────────────────────────────────── */
function phantram(key) {
  const n = ri(8, 92), cell = 18, x0 = 16, y0 = 16;
  const idx = new Set(shuffle([...Array(100).keys()]).slice(0, n));
  let s = '';
  for (let i = 0; i < 100; i++) s += R(x0 + (i % 10) * cell, y0 + Math.floor(i / 10) * cell, cell, cell, idx.has(i) ? '#60a5fa' : '#fff', INK, 1);
  const path = img(key, svg(x0 * 2 + 10 * cell, y0 * 2 + 10 * cell, s));
  const mode = pick(['to', 'chua', 'ts']);
  if (mode === 'to') { const o = mk(n, [100 - n, n + 10, n - 10, n + 1], v => `${v}%`); return { sec: 'Tỉ số phần trăm', text: 'Lưới có 100 ô vuông bằng nhau, một số ô được tô màu. Số ô tô màu chiếm bao nhiêu phần trăm của lưới?', img: path, ...o, why: `Có ${n} ô tô màu trong 100 ô: ${n}/100 = ${n}%.` }; }
  if (mode === 'chua') { const o = mk(100 - n, [n, 100 - n + 10, 100 - n - 10, 100 - n + 1], v => `${v}%`); return { sec: 'Tỉ số phần trăm', text: 'Lưới có 100 ô vuông bằng nhau, một số ô được tô màu. Số ô CHƯA tô màu chiếm bao nhiêu phần trăm?', img: path, ...o, why: `Ô chưa tô: 100 − ${n} = ${100 - n} ô → ${100 - n}%.` }; }
  const o = mk(`${n} : 100 = ${n}%`, [`${n} : ${100 - n}`, `${100 - n} : 100 = ${100 - n}%`, `100 : ${n}`], x => x);
  return { sec: 'Tỉ số phần trăm', text: 'Lưới có 100 ô vuông, một số ô được tô màu. Tỉ số phần trăm của số ô tô màu và tổng số ô là?', img: path, ...o, why: `Tỉ số của số ô tô màu (${n}) và tổng số ô (100) là ${n} : 100 = ${n}/100 = ${n}%.` };
}

/* ── Biểu đồ cột → tỉ số phần trăm ────────────────────────────────────────── */
function bieudoPt(key) {
  const cats = ['Tổ 1', 'Tổ 2', 'Tổ 3', 'Tổ 4'];
  const total = pick([20, 25, 40, 50]);
  let vals; do { vals = [ri(2, total / 2), ri(2, total / 2), ri(2, total / 2), 0]; vals[3] = total - vals[0] - vals[1] - vals[2]; } while (vals[3] < 2 || new Set(vals).size < 4 || vals.some(v => (v * 100) % total));
  const path = img(key, barChartSVG(cats, vals, { title: `Số bạn đạt điểm 10 của lớp 5A (cả lớp ${total} bạn)` }));
  const i = ri(0, 3), p = vals[i] * 100 / total;
  const o = mk(p, [vals[i], 100 - p, Math.round(vals[i] * 100 / sum(vals) * 10) / 10 === p ? p + 5 : p - 5, p * 2], v => `${fmtDec(v)}%`);
  return { sec: 'Tỉ số phần trăm', text: `Biểu đồ cho biết số bạn đạt điểm 10 của từng tổ; lớp 5A có ${total} bạn. Số bạn đạt điểm 10 của ${cats[i]} chiếm bao nhiêu phần trăm số học sinh cả lớp?`, img: path, ...o,
    why: `${cats[i]} có ${vals[i]} bạn: ${vals[i]} : ${total} = ${fmtDec(vals[i] / total)} = ${fmtDec(p)}%.` };
}

/* ── Số thập phân trên tia số ─────────────────────────────────────────────── */
function tpTiaso(key) {
  const fine = rnd() < 0.4;
  const base = fine ? ri(0, 9) + ri(0, 9) / 10 : ri(0, 9);
  const step = fine ? 0.01 : 0.1;
  const k = ri(1, 9), v = Math.round((base + k * step) * 100) / 100;
  const labels = Array.from({ length: 11 }, (_, i) => i === 0 ? fmtDec(base) : i === 10 ? fmtDec(base + 10 * step) : i === 5 && !fine ? fmtDec(base + 0.5) : null);
  const path = img(key, numberLineSVG(labels, { u: 32, points: [{ i: k, label: 'M' }] }));
  const o = mk(v, [Math.round((v + step) * 100) / 100, Math.round((v - step) * 100) / 100, Math.round((base + k) * 100) / 100, Math.round((base + k * step * 10) * 100) / 100, Math.round((v + 10 * step) * 100) / 100], fmtDec);
  return { sec: 'Số thập phân trên tia số', text: `Đoạn từ ${fmtDec(base)} đến ${fmtDec(base + 10 * step)} trên tia số được chia thành 10 phần bằng nhau. Điểm M biểu diễn số thập phân nào?`, img: path, ...o,
    why: `Mỗi phần là ${fmtDec(step)}. M cách ${fmtDec(base)} đúng ${k} phần: ${fmtDec(base)} + ${k} × ${fmtDec(step)} = ${fmtDec(v)}.` };
}

/* ── Vận tốc – quãng đường – thời gian ────────────────────────────────────── */
function vantoc(key) {
  const v = pick([30, 36, 40, 45, 48, 50, 54, 60, 12, 15]);
  const tH = pick([1, 1.5, 2, 2.5, 3, 4]);
  const sKm = v * tH; if (!Number.isInteger(sKm)) return vantoc(key);
  const h0 = ri(6, 9), m0 = pick([0, 30]);
  const endMin = h0 * 60 + m0 + tH * 60, h1 = Math.floor(endMin / 60), m1 = endMin % 60;
  const fmtT = (h, m) => `${h} giờ${m ? ` ${m} phút` : ''}`;
  const veh = v <= 15 ? ['🚴', 'người đi xe đạp'] : ['🚗', 'ô tô'];
  const mode = pick(['v', 's', 't']);
  let s = L(40, 90, 320, 90, INK, 3) + C(40, 90, 7, '#1d4ed8', INK, 1.5) + C(320, 90, 7, '#e05b7e', INK, 1.5) + T(40, 116, 'A', 15) + T(320, 116, 'B', 15) + EM(110, 78, veh[0], 30);
  s += T(40, 134, `xuất phát ${fmtT(h0, m0)}`, 12, 'middle', '#1d4ed8');
  if (mode !== 't') s += T(320, 134, `đến ${fmtT(h1, m1)}`, 12, 'middle', '#be123c');
  if (mode !== 's') s += T(180, 60, `${sKm} km`, 15, 'middle', '#15803d');
  if (mode !== 'v') s += T(230, 60, `v = ${v} km/giờ`, 14, 'middle', '#b45309');
  const path = img(key, svg(360, 150, s));
  if (mode === 'v') { const o = mk(v, [sKm, Math.round(sKm / tH * 2), Math.round(sKm * tH), v + 5], x => `${x} km/giờ`); return { sec: 'Vận tốc', text: `Một ${veh[1]} đi từ A đến B như hình (quãng đường và giờ xuất phát, giờ đến ghi trên hình). Vận tốc của ${veh[1]} là bao nhiêu?`, img: path, ...o, why: `Thời gian đi: ${fmtT(h1, m1)} − ${fmtT(h0, m0)} = ${fmtDec(tH)} giờ. Vận tốc = quãng đường : thời gian = ${sKm} : ${fmtDec(tH)} = ${v} (km/giờ).` }; }
  if (mode === 's') { const o = mk(sKm, [v + tH, v * (tH + 1), Math.round(v / tH), sKm + 10], x => `${x} km`); return { sec: 'Quãng đường', text: `Một ${veh[1]} đi từ A lúc ${fmtT(h0, m0)} và đến B lúc ${fmtT(h1, m1)} với vận tốc ghi trên hình. Quãng đường AB dài bao nhiêu?`, img: path, ...o, why: `Thời gian đi: ${fmtT(h1, m1)} − ${fmtT(h0, m0)} = ${fmtDec(tH)} giờ. Quãng đường = vận tốc × thời gian = ${v} × ${fmtDec(tH)} = ${sKm} (km).` }; }
  const o = mk(fmtT(h1, m1), [fmtT(h1 + 1, m1), fmtT(h1, m1 === 30 ? 0 : 30), fmtT(h1 - 1, m1)], x => x);
  return { sec: 'Thời gian', text: `Một ${veh[1]} xuất phát từ A lúc ${fmtT(h0, m0)}, đi quãng đường ${sKm} km với vận tốc ${v} km/giờ. ${veh[1].charAt(0).toUpperCase() + veh[1].slice(1)} đến B lúc mấy giờ?`, img: path, ...o, why: `Thời gian đi = ${sKm} : ${v} = ${fmtDec(tH)} giờ${tH % 1 ? ` = ${Math.floor(tH)} giờ ${(tH % 1) * 60} phút` : ''}. Đến B lúc ${fmtT(h0, m0)} + ${fmtDec(tH)} giờ = ${fmtT(h1, m1)}.` };
}

/* ── Hình tròn trong hình chữ nhật ────────────────────────────────────────── */
function tronhcn(key) {
  const r = pick([2, 3, 4, 5, 10]), u = Math.min(20, 130 / r);
  const W = 4 * r, H = 2 * r, x0 = 40, y0 = 30;
  let s = R(x0, y0, W * u, H * u, '#fff3d6', INK, 2.5) + C(x0 + r * u, y0 + r * u, r * u, '#dbeafe', INK, 2) + C(x0 + 3 * r * u, y0 + r * u, r * u, '#dbeafe', INK, 2);
  s += C(x0 + r * u, y0 + r * u, 3, INK, INK) + L(x0 + r * u, y0 + r * u, x0 + 2 * r * u, y0 + r * u, '#1d4ed8', 2) + T(x0 + 1.5 * r * u, y0 + r * u - 8, `r = ${r} cm`, 13, 'middle', '#1d4ed8');
  const path = img(key, svg(x0 * 2 + W * u, y0 * 2 + H * u, s));
  const mode = pick(['dt', 'cv', 'con']);
  if (mode === 'dt') { const o = mk(W * H, [W + H, (W + H) * 2, 2 * r * r, W * H / 2], cm2); return { sec: 'Hình tròn trong hình chữ nhật', text: 'Hai hình tròn bằng nhau bán kính r nằm khít trong hình chữ nhật như hình. Diện tích hình chữ nhật là bao nhiêu?', img: path, ...o, why: `Chiều rộng = 2 × r = ${H} cm, chiều dài = 4 × r = ${W} cm. Diện tích = ${W} × ${H} = ${W * H} (cm²).` }; }
  if (mode === 'cv') { const o = mk((W + H) * 2, [W * H, W + H, 12 * r + r, 8 * r], cm); return { sec: 'Hình tròn trong hình chữ nhật', text: 'Hai hình tròn bằng nhau bán kính r nằm khít trong hình chữ nhật như hình. Chu vi hình chữ nhật là bao nhiêu?', img: path, ...o, why: `Chiều dài ${W} cm, chiều rộng ${H} cm. Chu vi = (${W} + ${H}) × 2 = ${(W + H) * 2} (cm).` }; }
  const St = Math.round(2 * r * r * 3.14 * 100) / 100, rest = Math.round((W * H - St) * 100) / 100;
  const o = mk(rest, [W * H, St, Math.round((W * H - St / 2) * 100) / 100, Math.round((W * H + St) * 100) / 100], cm2);
  return { sec: 'Hình tròn trong hình chữ nhật', text: 'Hai hình tròn bằng nhau bán kính r nằm khít trong hình chữ nhật như hình. Diện tích phần hình chữ nhật KHÔNG bị hai hình tròn che (phần màu vàng) là bao nhiêu? (π = 3,14)', img: path, ...o,
    why: `Diện tích hình chữ nhật: ${W} × ${H} = ${W * H} cm². Hai hình tròn: ${r} × ${r} × 3,14 × 2 = ${fmtDec(St)} cm². Phần còn lại: ${W * H} − ${fmtDec(St)} = ${fmtDec(rest)} (cm²).` };
}

/* ── Chọn hình (4 phương án là hình) ──────────────────────────────────────── */
function chonhinh(key, kind) {
  const flatCard = k => optCard((cx, cy, s) => flatBody(k, cx, cy, s * 0.9, '#e8f0ff'));
  const solidCard = k => optCard((cx, cy, s) => solidBody(k, cx, cy, s * 1.1));
  if (kind === 'thang') { const o = mkImg(G, key, flatCard(pick(['thang', 'thangV'])), shuffle([flatCard('bh'), flatCard('thoi'), flatCard('tugiac')])); return { sec: 'Hình thang', text: 'Hình nào là hình thang?', ...o, why: 'Hình thang là tứ giác có đúng một cặp cạnh đối diện song song (hai đáy). Hình bình hành, hình thoi có hai cặp cạnh song song; tứ giác thường không có cặp cạnh nào song song.' }; }
  const k = kind.split(':')[1];
  const o = mkImg(G, key, solidCard(k), shuffle(['tru', 'cau', 'hop', 'lapphuong'].filter(x => x !== k).map(solidCard)));
  const nm = { tru: 'hình trụ', cau: 'hình cầu', hop: 'hình hộp chữ nhật', lapphuong: 'hình lập phương' }[k];
  return { sec: 'Hình khối', text: `Hình nào là ${nm}?`, ...o, why: { tru: 'Hình trụ có hai mặt đáy là hai hình tròn bằng nhau và một mặt xung quanh cong.', cau: 'Hình cầu tròn đều, không có mặt phẳng.', hop: 'Hình hộp chữ nhật có 6 mặt là hình chữ nhật, 8 đỉnh, 12 cạnh.', lapphuong: 'Hình lập phương có 6 mặt là hình vuông bằng nhau.' }[k] };
}

/* ── KẾ HOẠCH 10 ĐỀ ───────────────────────────────────────────────────────── */
const rep = (f, n, arg) => Array.from({ length: n }, () => [f, arg]);
export const PLAN = [
  { title: 'Đề 1 · Hình thang — diện tích', q: [...rep(thang, 7), ...rep(chonhinh, 3, 'thang')] },
  { title: 'Đề 2 · Hình tròn — chu vi & diện tích', q: [...rep(tron, 10)] },
  { title: 'Đề 3 · Tam giác vuông — hình ghép', q: [...rep(tgvuong, 5), ...rep(ghep, 5)] },
  { title: 'Đề 4 · Hình hộp chữ nhật — thể tích & diện tích', q: [...rep(hop, 7), ...rep(demkhoi, 3)] },
  { title: 'Đề 5 · Hình lập phương — hình khai triển', q: [...rep(lapphuong, 4), ...rep(khaitrien, 4), ...rep(chonhinh, 1, 'khoi:tru'), ...rep(chonhinh, 1, 'khoi:lapphuong')] },
  { title: 'Đề 6 · Biểu đồ hình quạt tròn', q: [...rep(quat, 7), ...rep(bieudoPt, 3)] },
  { title: 'Đề 7 · Tỉ lệ bản đồ', q: [...rep(tile, 10)] },
  { title: 'Đề 8 · Tỉ số phần trăm qua hình', q: [...rep(phantram, 6), ...rep(bieudoPt, 4)] },
  { title: 'Đề 9 · Số thập phân trên tia số', q: [...rep(tpTiaso, 10)] },
  { title: 'Đề 10 · Toán chuyển động — hình tròn trong hình chữ nhật', q: [...rep(vantoc, 6), ...rep(tronhcn, 4)] },
];
export const HERO = {
  title: 'Toán lớp 5 qua hình — bài học: hình thang, hình tròn, hình hộp – lập phương, khai triển, biểu đồ quạt, tỉ lệ bản đồ, %, số thập phân, chuyển động',
  intro: 'Bài 10–14 · 25–28 · 36–39 · 44 · 50–55 · 60 · 63 (SGK Kết nối tri thức)',
};
