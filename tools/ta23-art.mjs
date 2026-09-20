/* ============================================================================
   ta23-art.mjs — bộ vẽ hình SVG cho "TIẾNG ANH LỚP 2" và "TIẾNG ANH LỚP 3".
   Dùng bởi tools/gen-tienganh23-art.mjs.

   Nguyên tắc vẽ (học sinh 7–9 tuổi, đề hoàn toàn bằng tiếng Anh):
    · nền trắng, nét mực #2b2b2b, bố cục tối giản — nhìn là hiểu, không cần dịch;
    · MỖI HÌNH CHỨA ĐỦ THÔNG TIN để trả lời câu hỏi kèm nó: đếm được số vật,
      đọc được nhãn trên hình, thấy rõ vị trí trên/dưới/sau/giữa…;
    · không câu nào có đáp án phụ thuộc vào màu sắc;
    · hình chỉ MINH HOẠ, không bao giờ lộ sẵn đáp án chữ của câu hỏi.
   ========================================================================== */
'use strict';

const INK = '#2b2b2b';
const FONT = "system-ui, 'Segoe UI', 'Segoe UI Emoji', 'Noto Color Emoji', Arial, sans-serif";
const r1 = (v) => Math.round(v * 10) / 10;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function svg(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${r1(w)} ${r1(h)}" font-family="${FONT}">
<rect width="${r1(w)}" height="${r1(h)}" fill="#fff"/>
${body}
</svg>
`;
}

/* khung thẻ bo tròn dùng chung cho mọi hình */
function frame(w, h, fill = '#fdfbf6') {
  return `<rect x="6" y="6" width="${r1(w - 12)}" height="${r1(h - 12)}" rx="16"
    fill="${fill}" stroke="${INK}" stroke-width="3"/>`;
}

function caption(cx, y, text, fs = 22) {
  return `<text x="${r1(cx)}" y="${r1(y)}" font-size="${r1(fs)}" font-weight="700"
    text-anchor="middle" fill="${INK}">${esc(text)}</text>`;
}

/* ═══════════════ 1. THẺ TRANH — một vật / một hành động ═══════════════════
   picSVG('🍎')            → thẻ tranh quả táo
   picSVG('🍎', 'apple')   → thêm chữ dưới tranh (chỉ khi chữ KHÔNG phải đáp án) */
export function picSVG(glyph, label) {
  const w = 260, h = label ? 240 : 200;
  let b = frame(w, h);
  b += `<text x="${w / 2}" y="${label ? 150 : 138}" font-size="110" text-anchor="middle">${glyph}</text>`;
  if (label) b += caption(w / 2, 205, label, 26);
  return svg(w, h, b);
}

/* ═══════════════ 2. ĐẾM — n vật xếp thành hàng, đếm được ═════════════════ */
export function countSVG(glyph, n) {
  const per = Math.min(n, 5), rows = Math.ceil(n / 5);
  const cell = 76, w = Math.max(240, per * cell + 48), h = rows * cell + 56;
  let b = frame(w, h);
  for (let i = 0; i < n; i++) {
    const r = Math.floor(i / 5), c = i % 5;
    const inRow = Math.min(n - r * 5, 5);
    const x0 = w / 2 - (inRow * cell) / 2 + cell / 2;
    b += `<text x="${r1(x0 + c * cell)}" y="${r1(44 + r * cell + 18)}" font-size="52" text-anchor="middle">${glyph}</text>`;
  }
  return svg(w, h, b);
}

/* ═══════════════ 3. TỪ KHUYẾT — "c __ t" kèm tranh gợi ý ═════════════════
   blankSVG('c __ t', '🐱')  — học sinh nhìn tranh để điền chữ còn thiếu.    */
export function blankSVG(pattern, glyph) {
  const w = 340, h = 210;
  let b = frame(w, h);
  b += `<text x="${w / 2}" y="86" font-size="62" text-anchor="middle">${glyph}</text>`;
  b += `<rect x="46" y="118" width="${w - 92}" height="58" rx="12" fill="#fff8e1" stroke="${INK}" stroke-width="2.5"/>`;
  b += `<text x="${w / 2}" y="159" font-size="40" font-weight="800" letter-spacing="3"
    text-anchor="middle" fill="${INK}">${esc(pattern)}</text>`;
  return svg(w, h, b);
}

/* ═══════════════ 4. VỊ TRÍ — hộp + quả bóng, thấy rõ giới từ ══════════════
   placeSVG('under') → quả bóng nằm DƯỚI cái bàn.                           */
export function placeSVG(where) {
  const w = 340, h = 230;
  let b = frame(w, h);
  const tx = 90, ty = 96, tw = 160, th = 14;      // mặt bàn
  const ball = (x, y) => `<circle cx="${r1(x)}" cy="${r1(y)}" r="22" fill="#fff" stroke="${INK}" stroke-width="3"/>
<path d="M${r1(x - 22)} ${r1(y)} h44 M${r1(x)} ${r1(y - 22)} v44" stroke="${INK}" stroke-width="2.5" fill="none"/>`;
  // cái bàn
  const table = `<rect x="${tx}" y="${ty}" width="${tw}" height="${th}" rx="4" fill="#f0e6d6" stroke="${INK}" stroke-width="3"/>
<path d="M${tx + 14} ${ty + th} V186 M${tx + tw - 14} ${ty + th} V186" stroke="${INK}" stroke-width="3" fill="none"/>`;
  const box = `<rect x="${tx}" y="${ty}" width="${tw}" height="76" rx="8" fill="#f0e6d6" stroke="${INK}" stroke-width="3"/>`;
  const pos = {
    on:       () => table + ball(tx + tw / 2, ty - 24),
    above:    () => table + ball(tx + tw / 2, 54),
    under:    () => table + ball(tx + tw / 2, 152),
    in:       () => box + ball(tx + tw / 2, ty + 38),
    behind:   () => ball(tx + tw / 2, ty + 34) + box,
    nextto:   () => box + ball(tx + tw + 40, ty + 38),
    between:  () => box
      + `<rect x="30" y="${ty}" width="44" height="76" rx="8" fill="#f0e6d6" stroke="${INK}" stroke-width="3"/>`
      + `<rect x="${w - 74}" y="${ty}" width="44" height="76" rx="8" fill="#f0e6d6" stroke="${INK}" stroke-width="3"/>`,
  };
  b += (pos[where] || pos.on)();
  b += `<path d="M18 186 H${w - 18}" stroke="${INK}" stroke-width="3"/>`;
  return svg(w, h, b);
}

/* ═══════════════ 5. SO SÁNH — hai vật cạnh nhau, to/nhỏ rõ rệt ═══════════ */
export function compareSVG(a, b2, sizeA = 104, sizeB = 54) {
  const w = 340, h = 190;
  let b = frame(w, h);
  b += `<text x="92" y="128" font-size="${sizeA}" text-anchor="middle">${a}</text>`;
  b += `<text x="248" y="128" font-size="${sizeB}" text-anchor="middle">${b2}</text>`;
  b += `<path d="M170 44 V150" stroke="${INK}" stroke-width="2.5" stroke-dasharray="7 6"/>`;
  return svg(w, h, b);
}

/* ═══════════════ 6. BẢNG — thời khoá biểu, lịch, bảng dữ liệu ════════════
   tableSVG([['Monday','Maths'],['Tuesday','Art']], ['Day','Lesson'])        */
export function tableSVG(rows, head) {
  const cols = head ? head.length : rows[0].length;
  const cw = 150, ch = 40;
  const w = cols * cw + 40, h = (rows.length + (head ? 1 : 0)) * ch + 40;
  let b = frame(w, h, '#fff');
  let y = 20;
  const cell = (x, yy, t, bold, fill) =>
    `<rect x="${r1(x)}" y="${r1(yy)}" width="${cw}" height="${ch}" fill="${fill}" stroke="${INK}" stroke-width="2"/>
<text x="${r1(x + cw / 2)}" y="${r1(yy + ch * 0.66)}" font-size="20" ${bold ? 'font-weight="700"' : ''}
  text-anchor="middle" fill="${INK}">${esc(t)}</text>`;
  if (head) {
    head.forEach((t, i) => { b += cell(20 + i * cw, y, t, true, '#f0e6d6'); });
    y += ch;
  }
  rows.forEach((r) => {
    r.forEach((t, i) => { b += cell(20 + i * cw, y, t, false, '#fff'); });
    y += ch;
  });
  return svg(w, h, b);
}

/* ═══════════════ 7. CÁC PHẦN CỦA QUYỂN SÁCH — bìa có nhãn ════════════════
   Nhãn ghi title / author / illustrator để học sinh chỉ ra từng phần.      */
export function bookSVG() {
  const w = 320, h = 260;
  let b = frame(w, h);
  b += `<rect x="70" y="30" width="180" height="200" rx="10" fill="#e8f0ff" stroke="${INK}" stroke-width="3"/>`;
  b += `<path d="M70 30 V230" stroke="${INK}" stroke-width="7"/>`;
  b += `<rect x="92" y="58" width="136" height="34" rx="6" fill="#fff" stroke="${INK}" stroke-width="2.5"/>`;
  b += caption(160, 82, 'The Blue Boat', 19);
  b += `<text x="160" y="146" font-size="46" text-anchor="middle">⛵</text>`;
  b += caption(160, 186, 'by Mai Anh', 17);
  b += caption(160, 210, 'pictures by Duc Minh', 15);
  b += `<text x="262" y="78" font-size="14" fill="${INK}">①</text>`;
  b += `<text x="262" y="182" font-size="14" fill="${INK}">②</text>`;
  b += `<text x="262" y="206" font-size="14" fill="${INK}">③</text>`;
  return svg(w, h, b);
}

/* ═══════════════ 8. SƠ ĐỒ CON ONG — đếm chân và cánh được ════════════════ */
export function beeSVG() {
  const w = 340, h = 230;
  let b = frame(w, h);
  const cx = 170, cy = 120;
  // thân
  b += `<ellipse cx="${cx}" cy="${cy}" rx="62" ry="36" fill="#ffe9a8" stroke="${INK}" stroke-width="3"/>`;
  b += `<path d="M${cx - 18} ${cy - 33} V${cy + 33} M${cx + 14} ${cy - 35} V${cy + 35}" stroke="${INK}" stroke-width="3"/>`;
  b += `<circle cx="${cx - 74}" cy="${cy}" r="24" fill="#fff" stroke="${INK}" stroke-width="3"/>`;
  b += `<circle cx="${cx - 80}" cy="${cy - 7}" r="4" fill="${INK}"/>`;
  // 2 đôi cánh
  b += `<ellipse cx="${cx - 12}" cy="${cy - 52}" rx="34" ry="17" fill="#eaf4ff" stroke="${INK}" stroke-width="2.5"/>`;
  b += `<ellipse cx="${cx + 30}" cy="${cy - 50}" rx="30" ry="15" fill="#eaf4ff" stroke="${INK}" stroke-width="2.5"/>`;
  // 6 chân
  for (let i = 0; i < 6; i++) {
    const x = cx - 44 + i * 18;
    b += `<path d="M${x} ${cy + 32} l${i < 3 ? -12 : 12} 26" stroke="${INK}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  }
  b += caption(cx, 206, 'a bee', 20);
  return svg(w, h, b);
}

/* ═══════════════ 9. DÃY THẺ TỪ — dùng cho xếp thứ tự ABC ═════════════════ */
export function wordsSVG(words) {
  const cw = 132, w = words.length * cw + 40, h = 110;
  let b = frame(w, h, '#fff');
  words.forEach((t, i) => {
    const x = 20 + i * cw + 8;
    b += `<rect x="${r1(x)}" y="26" width="${cw - 16}" height="58" rx="12" fill="#fff8e1" stroke="${INK}" stroke-width="2.5"/>`;
    b += caption(x + (cw - 16) / 2, 64, t, 22);
  });
  return svg(w, h, b);
}

/* ═══════════════ 10. ĐỒNG HỒ — giờ đúng / giờ rưỡi ═══════════════════════ */
export function clockSVG(hh, mm = 0) {
  const w = 220, h = 220, cx = 110, cy = 110, R = 84;
  let b = frame(w, h);
  b += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="#fff" stroke="${INK}" stroke-width="4"/>`;
  for (let i = 1; i <= 12; i++) {
    const a = (i / 12) * 2 * Math.PI - Math.PI / 2;
    b += `<text x="${r1(cx + Math.cos(a) * (R - 18))}" y="${r1(cy + Math.sin(a) * (R - 18) + 7)}"
      font-size="19" font-weight="700" text-anchor="middle" fill="${INK}">${i}</text>`;
  }
  const ah = ((hh % 12) + mm / 60) / 12 * 2 * Math.PI - Math.PI / 2;
  const am = (mm / 60) * 2 * Math.PI - Math.PI / 2;
  b += `<path d="M${cx} ${cy} L${r1(cx + Math.cos(ah) * 42)} ${r1(cy + Math.sin(ah) * 42)}" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>`;
  b += `<path d="M${cx} ${cy} L${r1(cx + Math.cos(am) * 62)} ${r1(cy + Math.sin(am) * 62)}" stroke="${INK}" stroke-width="4.5" stroke-linecap="round"/>`;
  b += `<circle cx="${cx}" cy="${cy}" r="5.5" fill="${INK}"/>`;
  return svg(w, h, b);
}

/* ═══════════════ 11. THỜI TIẾT — biểu tượng lớn trên khung trời ══════════ */
export function weatherSVG(glyph, extra) {
  const w = 260, h = 200;
  let b = frame(w, h, '#eaf4ff');
  b += `<text x="${w / 2}" y="132" font-size="96" text-anchor="middle">${glyph}</text>`;
  if (extra) b += `<text x="${w / 2}" y="178" font-size="40" text-anchor="middle">${extra}</text>`;
  return svg(w, h, b);
}

/* ═══════════════ 12. HAI CẢNH CẠNH NHAU — trước / sau, nay / xưa ═════════ */
export function twoSVG(a, b2, la, lb) {
  const w = 360, h = 210;
  let b = frame(w, h);
  b += `<path d="M180 22 V188" stroke="${INK}" stroke-width="2.5" stroke-dasharray="7 6"/>`;
  b += `<text x="94" y="126" font-size="74" text-anchor="middle">${a}</text>`;
  b += `<text x="266" y="126" font-size="74" text-anchor="middle">${b2}</text>`;
  if (la) b += caption(94, 172, la, 20);
  if (lb) b += caption(266, 172, lb, 20);
  return svg(w, h, b);
}
