/* ============================================================================
   vio-art.mjs — bộ vẽ hình SVG cho các đề VioEdu "Đồng hồ · Ngày tháng · Sudoku"
   Dùng bởi tools/gen-vioedu-time.mjs. Cùng ngôn ngữ hình với assets/vioedu có sẵn:
   nền trắng, nét mực #2b2b2b, kim giờ đỏ #b3261e, kim phút xanh #1a56db, font Arial.
   ========================================================================== */
'use strict';

const INK = '#2b2b2b', HOUR = '#b3261e', MIN = '#1a56db';
const r1 = (v) => Math.round(v * 10) / 10;
const P = (cx, cy, len, deg) => {
  const a = (deg - 90) * Math.PI / 180;
  return [r1(cx + len * Math.cos(a)), r1(cy + len * Math.sin(a))];
};

/* ------------------------------------------------------------ ĐỒNG HỒ KIM --
   Mặt số 1–12, vạch phút nhỏ (để đọc chính xác đến 5 phút), kim giờ chạy dần
   theo số phút — đúng như đồng hồ thật, đây chính là chỗ học sinh hay đọc sai. */
export function clock(h, m, opt = {}) {
  const S = opt.scale || 1, ox = opt.ox || 0, oy = opt.oy || 0;
  const C = 110, R = 96;
  const X = (v) => r1(ox + v * S), Y = (v) => r1(oy + v * S);

  let ticks = '';
  for (let i = 0; i < 60; i++) {
    const big = i % 5 === 0;
    const [x1, y1] = P(C, C, big ? 84 : 88, i * 6);
    const [x2, y2] = P(C, C, 93, i * 6);
    ticks += `<line x1="${X(x1)}" y1="${Y(y1)}" x2="${X(x2)}" y2="${Y(y2)}" stroke="${big ? INK : '#9aa3ad'}" stroke-width="${r1((big ? 3.4 : 1.8) * S)}" stroke-linecap="round"/>`;
  }
  let nums = '';
  for (let n = 1; n <= 12; n++) {
    const [x, y] = P(C, C, 70, n * 30);
    nums += `<text x="${X(x)}" y="${Y(y + 7)}">${n}</text>`;
  }
  const [hx, hy] = P(C, C, 52, (h % 12) * 30 + m * 0.5);
  const [mx, my] = P(C, C, 78, m * 6);
  const cap = opt.label
    ? `<text x="${X(C)}" y="${Y(240)}" font-size="${r1(22 * S)}" font-weight="bold" fill="${INK}" text-anchor="middle">${opt.label}</text>` : '';

  return `<g>
    <circle cx="${X(C)}" cy="${Y(C)}" r="${r1(R * S)}" fill="#fff" stroke="${INK}" stroke-width="${r1(5 * S)}"/>
    ${ticks}
    <g font-size="${r1(20 * S)}" font-weight="bold" fill="${INK}" text-anchor="middle">${nums}</g>
    <line x1="${X(C)}" y1="${Y(C)}" x2="${X(hx)}" y2="${Y(hy)}" stroke="${HOUR}" stroke-width="${r1(8 * S)}" stroke-linecap="round"/>
    <line x1="${X(C)}" y1="${Y(C)}" x2="${X(mx)}" y2="${Y(my)}" stroke="${MIN}" stroke-width="${r1(5 * S)}" stroke-linecap="round"/>
    <circle cx="${X(C)}" cy="${Y(C)}" r="${r1(7 * S)}" fill="${INK}"/>
    ${cap}
  </g>`;
}

const svg = (w, h, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="Arial, Helvetica, sans-serif">
  <rect width="${w}" height="${h}" fill="#fff"/>
${body}
</svg>
`;

/* một mặt đồng hồ */
export function clockSVG(h, m) {
  return svg(220, 220, clock(h, m));
}

/* hai (hoặc ba) mặt đồng hồ kèm nhãn — dùng cho bài "đã trôi qua bao lâu" */
export function clocksSVG(list) {
  const n = list.length, S = 0.86, w = 220 * S, gap = 34;
  const W = n * w + (n - 1) * gap, H = 220 * S + 40;
  let body = '';
  list.forEach((c, i) => {
    body += clock(c[0], c[1], { scale: S, ox: i * (w + gap), oy: 0, label: c[2] || '' });
  });
  list.slice(0, -1).forEach((_, i) => {
    const x = (i + 1) * w + i * gap + gap / 2;
    body += `<text x="${r1(x)}" y="${r1(110 * S + 8)}" font-size="30" fill="#9aa3ad" text-anchor="middle">➜</text>`;
  });
  return svg(r1(W), r1(H), body);
}

/* ------------------------------------------------------- ĐỒNG HỒ ĐIỆN TỬ -- */
export function digitalSVG(h, m, opt = {}) {
  const txt = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  return svg(300, 150, `
  <rect x="14" y="20" width="272" height="110" rx="18" fill="#0f172a" stroke="${INK}" stroke-width="5"/>
  <text x="150" y="98" font-size="62" font-weight="bold" fill="#6ee7b7" text-anchor="middle" letter-spacing="4">${txt}</text>
  ${opt.note ? `<text x="150" y="145" font-size="18" fill="${INK}" text-anchor="middle">${opt.note}</text>` : ''}`);
}

/* --------------------------------------------------------- TỜ LỊCH THÁNG --
   Bố cục như lịch treo tường Việt Nam: cột đầu là Thứ Hai, cột cuối Chủ nhật
   (in đỏ). Ngày tháng lấy từ Date nên thứ trong hình luôn đúng với thực tế. */
const WD = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
const WD_SHORT = ['Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'CN'];

export const weekdayOf = (y, mo, d) => WD[new Date(y, mo - 1, d).getDay()];
export const colOf = (y, mo, d) => (new Date(y, mo - 1, d).getDay() + 6) % 7;   // Hai = 0
export const daysInMonth = (y, mo) => new Date(y, mo, 0).getDate();

export function calendarSVG(y, mo, opt = {}) {
  const hide = new Set(opt.hide || []);
  const ring = new Set(opt.ring || []);
  const CW = 76, CH = 58, X0 = 20, Y0 = 96;
  const nd = daysInMonth(y, mo);
  const rows = Math.ceil((colOf(y, mo, 1) + nd) / 7);
  const W = X0 * 2 + CW * 7, H = Y0 + CH * rows + 18;

  let head = `<text x="${W / 2}" y="44" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">THÁNG ${mo}${opt.noYear ? '' : ' · ' + y}</text>`;
  head += WD_SHORT.map((s, i) =>
    `<text x="${X0 + CW * i + CW / 2}" y="82" font-size="20" font-weight="bold" fill="${i === 6 ? '#b3261e' : '#475569'}" text-anchor="middle">${s}</text>`).join('');

  let cells = '';
  for (let d = 1; d <= nd; d++) {
    const c = colOf(y, mo, d), rIdx = Math.floor((colOf(y, mo, 1) + d - 1) / 7);
    const x = X0 + CW * c, yy = Y0 + CH * rIdx;
    cells += `<rect x="${x}" y="${yy}" width="${CW}" height="${CH}" fill="${c === 6 ? '#fff1f0' : '#fff'}" stroke="#cbd5e1" stroke-width="1.6"/>`;
    if (ring.has(d)) cells += `<circle cx="${x + CW / 2}" cy="${yy + CH / 2}" r="21" fill="none" stroke="#f59e0b" stroke-width="4"/>`;
    cells += hide.has(d)
      ? `<text x="${x + CW / 2}" y="${yy + CH / 2 + 10}" font-size="27" font-weight="bold" fill="#94a3b8" text-anchor="middle">?</text>`
      : `<text x="${x + CW / 2}" y="${yy + CH / 2 + 10}" font-size="25" font-weight="bold" fill="${c === 6 ? '#b3261e' : INK}" text-anchor="middle">${d}</text>`;
  }
  const box = `<rect x="${X0}" y="${Y0}" width="${CW * 7}" height="${CH * rows}" fill="none" stroke="${INK}" stroke-width="3.4"/>`;
  return svg(W, H, head + cells + box);
}

/* ------------------------------------------------------------- SUDOKU ô --
   grid: mảng phẳng, phần tử là số (đã cho), 0 (ô trống) hoặc '?' (ô hỏi).
   n = 3 → điền 1..3 mỗi hàng/cột; n = 4 → thêm 4 ô vuông 2×2 in đậm.
   sym: bảng ký hiệu để vẽ hình thay cho số (sudoku hình cho lớp 2).          */
export function sudokuSVG(grid, n, opt = {}) {
  const CS = 84, PAD = 18;
  const W = PAD * 2 + CS * n, H = W;
  let body = '';
  for (let i = 0; i < n * n; i++) {
    const r = Math.floor(i / n), c = i % n;
    const x = PAD + c * CS, y = PAD + r * CS;
    const v = grid[i];
    const isQ = v === '?';
    body += `<rect x="${x}" y="${y}" width="${CS}" height="${CS}" fill="${isQ ? '#fff7cc' : '#fff'}" stroke="#94a3b8" stroke-width="2"/>`;
    if (isQ) body += `<text x="${x + CS / 2}" y="${y + CS / 2 + 17}" font-size="48" font-weight="bold" fill="#b45309" text-anchor="middle">?</text>`;
    else if (v) body += opt.sym
      ? symbol(opt.sym[v], x + CS / 2, y + CS / 2)
      : `<text x="${x + CS / 2}" y="${y + CS / 2 + 16}" font-size="46" font-weight="bold" fill="${INK}" text-anchor="middle">${v}</text>`;
  }
  /* viền ngoài + viền ô vuông 2×2 khi n = 4 */
  body += `<rect x="${PAD}" y="${PAD}" width="${CS * n}" height="${CS * n}" fill="none" stroke="${INK}" stroke-width="4.5"/>`;
  if (n === 4) {
    body += `<line x1="${PAD + CS * 2}" y1="${PAD}" x2="${PAD + CS * 2}" y2="${PAD + CS * 4}" stroke="${INK}" stroke-width="4.5"/>`;
    body += `<line x1="${PAD}" y1="${PAD + CS * 2}" x2="${PAD + CS * 4}" y2="${PAD + CS * 2}" stroke="${INK}" stroke-width="4.5"/>`;
  }
  return svg(W, H, body);
}

/* hình thay cho số trong sudoku hình: ● ▲ ■ ★ */
function symbol(kind, cx, cy) {
  if (kind === 'circle') return `<circle cx="${cx}" cy="${cy}" r="23" fill="#60a5fa" stroke="${INK}" stroke-width="3"/>`;
  if (kind === 'tri') return `<path d="M${cx} ${cy - 25}L${cx + 24} ${cy + 20}H${cx - 24}Z" fill="#34d399" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`;
  if (kind === 'square') return `<rect x="${cx - 21}" y="${cy - 21}" width="42" height="42" rx="5" fill="#fbbf24" stroke="${INK}" stroke-width="3"/>`;
  return `<path d="M${cx} ${cy - 26}l7.6 15.4 17 2.5-12.3 12 2.9 17-15.2-8-15.2 8 2.9-17-12.3-12 17-2.5z" fill="#f472b6" stroke="${INK}" stroke-width="2.6" stroke-linejoin="round"/>`;
}

export { WD, WD_SHORT, INK };
