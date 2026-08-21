/* ============================================================================
   hinh-art.mjs — bộ vẽ hình SVG cho bộ đề "Toán lớp 2 qua hình ảnh".
   Dùng bởi tools/gen-toan2-hinh.mjs.

   Nguyên tắc vẽ (cho học sinh 7–8 tuổi):
    · nền trắng, nét mực #2b2b2b, không có chi tiết trang trí gây nhiễu;
    · vật thể xếp thành hàng/cột đều nhau, KHÔNG chồng lấp — đếm được rõ ràng;
    · mỗi hình chứa đủ thông tin để giải bài, không bắt suy luận ngoài hình;
    · không câu nào có đáp án phụ thuộc màu sắc (màu chỉ để phân biệt vật).
   ========================================================================== */
'use strict';

const INK = '#2b2b2b';
const FONT = "system-ui, 'Segoe UI', 'Segoe UI Emoji', 'Noto Color Emoji', Arial, sans-serif";
const r1 = (v) => Math.round(v * 10) / 10;

export function svg(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${r1(w)} ${r1(h)}" font-family="${FONT}">
<rect width="${r1(w)}" height="${r1(h)}" fill="#fff"/>
${body}
</svg>
`;
}

/* ─────────────────────────── xếp vật thể thành lưới ────────────────────────
   Hàng cuối canh giữa cho cân đối. cross = danh sách chỉ số bị gạch bỏ (dạng
   "bớt đi"): vẽ dấu × đỏ đè lên vật, vật vẫn nhìn thấy rõ để đếm được.     */
function itemsBody(emoji, n, x0, y0, cols, size, cross) {
  const cw = size * 1.30, ch = size * 1.36;
  const rows = Math.ceil(n / cols);
  const set = new Set(cross || []);
  let s = '', i = 0;
  for (let r = 0; r < rows; r++) {
    const inRow = Math.min(cols, n - r * cols);
    const off = (cols * cw - inRow * cw) / 2;
    for (let c = 0; c < inRow; c++, i++) {
      const cx = x0 + off + c * cw + cw / 2, cy = y0 + r * ch + ch / 2;
      s += `<text x="${r1(cx)}" y="${r1(cy + size * 0.36)}" font-size="${r1(size)}" text-anchor="middle">${emoji}</text>`;
      if (set.has(i)) {
        const d = size * 0.44;
        s += `<line x1="${r1(cx - d)}" y1="${r1(cy - d)}" x2="${r1(cx + d)}" y2="${r1(cy + d)}" stroke="#e11d48" stroke-width="4.5" stroke-linecap="round"/>`
           + `<line x1="${r1(cx + d)}" y1="${r1(cy - d)}" x2="${r1(cx - d)}" y2="${r1(cy + d)}" stroke="#e11d48" stroke-width="4.5" stroke-linecap="round"/>`;
      }
    }
  }
  return s;
}

/* ───────────────────────────── KHUNG CẢNH NHIỀU NHÓM ───────────────────────
   sceneSVG([{emoji, n, label, cols, cross}, {op:'+'}, …])
   → các rổ/nhóm vật xếp ngang, xen giữa là dấu phép tính hoặc mũi tên.
   Hình dùng chung cho: đếm đồ vật · thêm – bớt · so sánh · chia đều · 2 bước. */
export function sceneSVG(parts, opt = {}) {
  const PAD = 16, GAP = opt.gap == null ? 22 : opt.gap;
  const boxes = parts.map((p) => {
    if (p.op !== undefined) return { op: p.op, w: 40, h: 44 };
    const size = p.size || opt.size || 36;
    const cols = p.cols || Math.min(p.n, opt.cols || 5);
    const rows = Math.ceil(p.n / cols);
    const cw = size * 1.30, ch = size * 1.36;
    const labelH = p.label ? 28 : 0;
    const w = Math.max(cols * cw + 22, p.label ? p.label.length * 10.5 + 24 : 0);
    const h = labelH + rows * ch + 20;
    return Object.assign({}, p, { size, cols, rows, cw, ch, labelH, w, h });
  });
  const W = PAD * 2 + boxes.reduce((t, b) => t + b.w, 0) + GAP * (boxes.length - 1);
  const H = PAD * 2 + Math.max.apply(null, boxes.map((b) => b.h));
  let x = PAD, body = '';
  for (const b of boxes) {
    if (b.op !== undefined) {
      body += `<text x="${r1(x + b.w / 2)}" y="${r1(H / 2 + 15)}" font-size="42" font-weight="bold" fill="#475569" text-anchor="middle">${b.op}</text>`;
    } else {
      const y = (H - b.h) / 2;
      if (b.box !== false) {
        body += `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(b.w)}" height="${r1(b.h)}" rx="16" fill="#f8fafc" stroke="#94a3b8" stroke-width="2.6"/>`;
      }
      if (b.label) body += `<text x="${r1(x + b.w / 2)}" y="${r1(y + 21)}" font-size="17" font-weight="bold" fill="${INK}" text-anchor="middle">${b.label}</text>`;
      body += itemsBody(b.emoji, b.n, x + (b.w - b.cols * b.cw) / 2, y + b.labelH + 8, b.cols, b.size, b.cross);
    }
    x += b.w + GAP;
  }
  return svg(W, H, body);
}

/* ───────────────────────────────── HÌNH HỌC ────────────────────────────────
   Hình vuông · chữ nhật · tam giác · tứ giác · tròn · đoạn thẳng.          */
const FILL = { vuong: '#93c5fd', cn: '#fca5a5', tg: '#fcd34d', tron: '#86efac', tugiac: '#d8b4fe', doanthang: 'none' };

function shapeBody(kind, cx, cy, s) {
  const st = `fill="${FILL[kind] || '#e2e8f0'}" stroke="${INK}" stroke-width="3"`;
  switch (kind) {
    case 'vuong':
      return `<rect x="${r1(cx - s * 0.5)}" y="${r1(cy - s * 0.5)}" width="${r1(s)}" height="${r1(s)}" ${st}/>`;
    case 'cn':
      return `<rect x="${r1(cx - s * 0.72)}" y="${r1(cy - s * 0.38)}" width="${r1(s * 1.44)}" height="${r1(s * 0.76)}" ${st}/>`;
    case 'tg':
      return `<polygon points="${r1(cx)},${r1(cy - s * 0.58)} ${r1(cx + s * 0.62)},${r1(cy + s * 0.46)} ${r1(cx - s * 0.62)},${r1(cy + s * 0.46)}" ${st}/>`;
    case 'tron':
      return `<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${r1(s * 0.54)}" ${st}/>`;
    case 'tugiac':
      return `<polygon points="${r1(cx - s * 0.62)},${r1(cy - s * 0.28)} ${r1(cx + s * 0.5)},${r1(cy - s * 0.52)} ${r1(cx + s * 0.64)},${r1(cy + s * 0.42)} ${r1(cx - s * 0.44)},${r1(cy + s * 0.52)}" ${st}/>`;
    case 'doanthang':
      return `<line x1="${r1(cx - s * 0.7)}" y1="${r1(cy)}" x2="${r1(cx + s * 0.7)}" y2="${r1(cy)}" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>`
           + `<circle cx="${r1(cx - s * 0.7)}" cy="${r1(cy)}" r="5" fill="${INK}"/><circle cx="${r1(cx + s * 0.7)}" cy="${r1(cy)}" r="5" fill="${INK}"/>`;
    default:
      return '';
  }
}

/* một dãy hình có gắn nhãn A · B · C · D (dạng "hình nào là …") */
export function shapesRowSVG(list, opt = {}) {
  const s = opt.size || 66, cw = s * 1.9, PAD = 20;
  const W = PAD * 2 + list.length * cw, H = 150;
  let body = '';
  list.forEach((k, i) => {
    const cx = PAD + i * cw + cw / 2;
    body += shapeBody(k, cx, 66, s);
    if (opt.letters !== false) {
      body += `<text x="${r1(cx)}" y="132" font-size="22" font-weight="bold" fill="${INK}" text-anchor="middle">${'ABCDEFGH'[i]}</text>`;
    }
  });
  return svg(W, H, body);
}

/* nhiều hình trong một khung — dạng "đếm xem có mấy hình tam giác" */
export function shapeMixSVG(list, opt = {}) {
  const s = opt.size || 56, cols = opt.cols || 5;
  const cw = s * 1.75, ch = s * 1.7, rows = Math.ceil(list.length / cols);
  const W = 24 + cols * cw, H = 24 + rows * ch;
  let body = `<rect x="6" y="6" width="${r1(W - 12)}" height="${r1(H - 12)}" rx="14" fill="#fff" stroke="#94a3b8" stroke-width="2.6"/>`;
  list.forEach((k, i) => {
    const c = i % cols, r = Math.floor(i / cols);
    const cx = 12 + c * cw + cw / 2, cy = 12 + r * ch + ch / 2;
    body += shapeBody(k, cx, cy, s);
  });
  return svg(W, H, body);
}

/* hình chữ nhật chia thành các ô vuông nhỏ — "có mấy hình vuông / chữ nhật" */
export function gridFigSVG(cols, rows, opt = {}) {
  const u = opt.unit || 56, PAD = 22;
  const W = PAD * 2 + cols * u, H = PAD * 2 + rows * u;
  let body = `<rect x="${PAD}" y="${PAD}" width="${cols * u}" height="${rows * u}" fill="#e0f2fe" stroke="${INK}" stroke-width="4"/>`;
  for (let c = 1; c < cols; c++) body += `<line x1="${PAD + c * u}" y1="${PAD}" x2="${PAD + c * u}" y2="${PAD + rows * u}" stroke="${INK}" stroke-width="3"/>`;
  for (let r = 1; r < rows; r++) body += `<line x1="${PAD}" y1="${PAD + r * u}" x2="${PAD + cols * u}" y2="${PAD + r * u}" stroke="${INK}" stroke-width="3"/>`;
  return svg(W, H, body);
}

/* tam giác lớn chia bởi các đoạn thẳng kẻ từ đỉnh — "đếm hình tam giác" */
export function triFanSVG(k, opt = {}) {
  const W = opt.w || 340, H = 220, PAD = 22;
  const ax = W / 2, ay = 20, by = H - 24, x0 = PAD, x1 = W - PAD;
  let body = `<polygon points="${ax},${ay} ${x1},${by} ${x0},${by}" fill="#fef3c7" stroke="${INK}" stroke-width="4"/>`;
  for (let i = 1; i < k; i++) {
    const x = x0 + (x1 - x0) * i / k;
    body += `<line x1="${ax}" y1="${ay}" x2="${r1(x)}" y2="${by}" stroke="${INK}" stroke-width="3"/>`;
  }
  return svg(W, H, body);
}

/* ───────────────────────────────── ĐO ĐỘ DÀI ───────────────────────────────
   Thước kẻ 0–14 cm cùng một vật đặt sát thước; hai đầu vật có vạch dóng
   xuống thước nên đọc được ngay số đo. from/to tính bằng cm.              */
export function rulerSVG(from, to, opt = {}) {
  const U = 30, X0 = 34, MAXCM = opt.maxCm || 14;
  const RY = 116, RH = 56;
  const W = X0 * 2 + MAXCM * U, H = RY + RH + 34;
  const x1 = X0 + from * U, x2 = X0 + to * U;

  let body = `<rect x="${X0}" y="${RY}" width="${MAXCM * U}" height="${RH}" rx="6" fill="#fef9c3" stroke="${INK}" stroke-width="3"/>`;
  for (let i = 0; i <= MAXCM * 2; i++) {
    const x = X0 + i * U / 2, big = i % 2 === 0;
    body += `<line x1="${r1(x)}" y1="${RY}" x2="${r1(x)}" y2="${r1(RY + (big ? 17 : 10))}" stroke="${INK}" stroke-width="${big ? 2.4 : 1.5}"/>`;
    if (big) body += `<text x="${r1(x)}" y="${RY + 38}" font-size="17" font-weight="bold" fill="${INK}" text-anchor="middle">${i / 2}</text>`;
  }
  body += `<text x="${r1(X0 + MAXCM * U - 6)}" y="${RY + RH - 8}" font-size="15" fill="#64748b" text-anchor="end">cm</text>`;

  const oy = 66;
  if (opt.kind === 'ribbon') {
    body += `<rect x="${r1(x1)}" y="${oy - 13}" width="${r1(x2 - x1)}" height="26" rx="7" fill="#fda4af" stroke="${INK}" stroke-width="2.6"/>`;
  } else if (opt.kind === 'bar') {
    body += `<rect x="${r1(x1)}" y="${oy - 15}" width="${r1(x2 - x1)}" height="30" rx="5" fill="#a5b4fc" stroke="${INK}" stroke-width="2.6"/>`;
  } else if (opt.kind === 'doanthang') {
    body += `<line x1="${r1(x1)}" y1="${oy}" x2="${r1(x2)}" y2="${oy}" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>`
         + `<circle cx="${r1(x1)}" cy="${oy}" r="6" fill="${INK}"/><circle cx="${r1(x2)}" cy="${oy}" r="6" fill="${INK}"/>`;
  } else { /* bút chì */
    const tip = 20;
    body += `<rect x="${r1(x1)}" y="${oy - 13}" width="${r1(Math.max(6, x2 - x1 - tip))}" height="26" rx="4" fill="#fbbf24" stroke="${INK}" stroke-width="2.6"/>`
         + `<polygon points="${r1(x2 - tip)},${oy - 13} ${r1(x2)},${oy} ${r1(x2 - tip)},${oy + 13}" fill="#fde68a" stroke="${INK}" stroke-width="2.6"/>`
         + `<rect x="${r1(x1)}" y="${oy - 13}" width="10" height="26" rx="4" fill="#f472b6" stroke="${INK}" stroke-width="2.6"/>`;
  }
  for (const x of [x1, x2]) {
    body += `<line x1="${r1(x)}" y1="${oy + 18}" x2="${r1(x)}" y2="${RY}" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="6 5"/>`;
  }
  if (opt.label) body += `<text x="${r1(W / 2)}" y="26" font-size="19" font-weight="bold" fill="${INK}" text-anchor="middle">${opt.label}</text>`;
  return svg(W, H, body);
}

/* ─────────────────────────────── TIỀN VIỆT NAM ─────────────────────────────
   Vẽ các tờ tiền có mệnh giá ghi to, rõ; tối đa 3 tờ mỗi hàng.            */
const MONEY_FILL = {
  100: '#e2e8f0', 200: '#fde68a', 500: '#fbcfe8', 1000: '#cbd5e1', 2000: '#e7c8a0',
  5000: '#a7f3d0', 10000: '#fca5a5', 20000: '#bfdbfe', 50000: '#f9a8d4', 100000: '#86efac',
};
export function moneySVG(notes, opt = {}) {
  const NW = 146, NH = 78, GAP = 16, PAD = 16, per = opt.per || 3;
  const rows = Math.ceil(notes.length / per);
  const cols = Math.min(notes.length, per);
  const capH = opt.label ? 30 : 0, noteH = opt.note ? 28 : 0;
  const W = PAD * 2 + cols * NW + (cols - 1) * GAP;
  const H = PAD * 2 + capH + rows * NH + (rows - 1) * GAP + noteH;
  let body = '';
  if (opt.label) body += `<text x="${r1(W / 2)}" y="${PAD + 20}" font-size="19" font-weight="bold" fill="${INK}" text-anchor="middle">${opt.label}</text>`;
  notes.forEach((v, i) => {
    const c = i % per, r = Math.floor(i / per);
    const inRow = Math.min(per, notes.length - r * per);
    const off = ((cols - inRow) * (NW + GAP)) / 2;
    const x = PAD + off + c * (NW + GAP), y = PAD + capH + r * (NH + GAP);
    body += `<rect x="${r1(x)}" y="${r1(y)}" width="${NW}" height="${NH}" rx="9" fill="${MONEY_FILL[v] || '#e2e8f0'}" stroke="${INK}" stroke-width="2.8"/>`
         + `<rect x="${r1(x + 7)}" y="${r1(y + 7)}" width="${NW - 14}" height="${NH - 14}" rx="6" fill="none" stroke="#ffffff" stroke-width="2"/>`
         + `<text x="${r1(x + NW / 2)}" y="${r1(y + NH / 2 + 2)}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">${v}</text>`
         + `<text x="${r1(x + NW / 2)}" y="${r1(y + NH / 2 + 24)}" font-size="16" font-weight="bold" fill="#475569" text-anchor="middle">đồng</text>`;
  });
  if (opt.note) body += `<text x="${r1(W / 2)}" y="${r1(H - 10)}" font-size="17" fill="#475569" text-anchor="middle">${opt.note}</text>`;
  return svg(W, H, body);
}

/* ─────────────────────────────── BIỂU ĐỒ TRANH ─────────────────────────────
   Mỗi biểu tượng ứng với `per` đơn vị — chú thích ghi rõ ngay dưới biểu đồ. */
export function pictoSVG(rows, opt = {}) {
  const unit = opt.unit || '⭐', per = opt.per || 1;
  const LW = opt.labelW || 132, IW = 40, RH = 52, PAD = 14;
  const maxN = Math.max.apply(null, rows.map((r) => r.n));
  const titleH = opt.title ? 34 : 0;
  const W = PAD * 2 + LW + maxN * IW + 16;
  const H = PAD * 2 + titleH + rows.length * RH + 32;
  let body = '';
  if (opt.title) body += `<text x="${r1(W / 2)}" y="${PAD + 24}" font-size="20" font-weight="bold" fill="${INK}" text-anchor="middle">${opt.title}</text>`;
  const y0 = PAD + titleH;
  rows.forEach((row, i) => {
    const y = y0 + i * RH;
    body += `<rect x="${PAD}" y="${r1(y)}" width="${r1(W - PAD * 2)}" height="${RH}" fill="${i % 2 ? '#f8fafc' : '#fff'}" stroke="#cbd5e1" stroke-width="1.8"/>`
         + `<text x="${PAD + 12}" y="${r1(y + RH / 2 + 7)}" font-size="19" font-weight="bold" fill="${INK}">${row.label}</text>`
         + `<line x1="${PAD + LW}" y1="${r1(y)}" x2="${PAD + LW}" y2="${r1(y + RH)}" stroke="#94a3b8" stroke-width="2"/>`;
    for (let k = 0; k < row.n; k++) {
      body += `<text x="${r1(PAD + LW + 10 + k * IW + IW / 2)}" y="${r1(y + RH / 2 + 10)}" font-size="27" text-anchor="middle">${unit}</text>`;
    }
  });
  body += `<rect x="${PAD}" y="${r1(y0)}" width="${r1(W - PAD * 2)}" height="${r1(rows.length * RH)}" fill="none" stroke="${INK}" stroke-width="3"/>`;
  body += `<text x="${r1(W / 2)}" y="${r1(H - 10)}" font-size="17" font-weight="bold" fill="#475569" text-anchor="middle">Mỗi ${unit} ứng với ${per} ${opt.unitName || 'bạn'}.</text>`;
  return svg(W, H, body);
}

/* ────────────────────────── DÃY Ô SỐ CÓ Ô CÒN THIẾU ────────────────────────
   cells: mảng số hoặc '?' — ô '?' tô cam để học sinh nhận ra ngay.        */
export function seqSVG(cells, opt = {}) {
  const BW = opt.bw || 74, BH = 62, GAP = 14, PAD = 16;
  const W = PAD * 2 + cells.length * BW + (cells.length - 1) * GAP;
  const H = PAD * 2 + BH + (opt.note ? 26 : 0);
  let body = '';
  cells.forEach((c, i) => {
    const x = PAD + i * (BW + GAP), q = String(c) === '?';
    body += `<rect x="${r1(x)}" y="${PAD}" width="${BW}" height="${BH}" rx="12" fill="${q ? '#ffedd5' : '#eff6ff'}" stroke="${q ? '#f97316' : INK}" stroke-width="${q ? 3.6 : 2.8}"/>`
         + `<text x="${r1(x + BW / 2)}" y="${r1(PAD + BH / 2 + 11)}" font-size="30" font-weight="bold" fill="${q ? '#c2410c' : INK}" text-anchor="middle">${c}</text>`;
  });
  if (opt.note) body += `<text x="${r1(W / 2)}" y="${r1(H - 6)}" font-size="16" fill="#475569" text-anchor="middle">${opt.note}</text>`;
  return svg(W, H, body);
}

/* bảng hai dòng có một ô trống — dạng "tìm số qua bảng" */
export function tableSVG(head, vals, opt = {}) {
  const CW = opt.cw || 96, CH = 54, PAD = 16;
  const n = head.length, W = PAD * 2 + n * CW, H = PAD * 2 + CH * 2;
  let body = `<rect x="${PAD}" y="${PAD}" width="${r1(n * CW)}" height="${CH * 2}" fill="#fff" stroke="${INK}" stroke-width="3"/>`;
  for (let i = 0; i < n; i++) {
    const x = PAD + i * CW;
    const q = String(vals[i]) === '?';
    body += `<rect x="${r1(x)}" y="${PAD}" width="${CW}" height="${CH}" fill="#e0e7ff" stroke="#94a3b8" stroke-width="1.8"/>`
         + `<text x="${r1(x + CW / 2)}" y="${r1(PAD + CH / 2 + 7)}" font-size="19" font-weight="bold" fill="${INK}" text-anchor="middle">${head[i]}</text>`
         + `<rect x="${r1(x)}" y="${r1(PAD + CH)}" width="${CW}" height="${CH}" fill="${q ? '#ffedd5' : '#fff'}" stroke="#94a3b8" stroke-width="1.8"/>`
         + `<text x="${r1(x + CW / 2)}" y="${r1(PAD + CH + CH / 2 + 9)}" font-size="25" font-weight="bold" fill="${q ? '#c2410c' : INK}" text-anchor="middle">${vals[i]}</text>`;
  }
  return svg(W, H, body);
}
