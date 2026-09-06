/* ============================================================================
   gen-tuduy3-plus.mjs — sinh bộ "TOÁN TƯ DUY TỔNG HỢP LỚP 3" (phiếu hàng tuần).

   Chạy:  node tools/gen-tuduy3-plus.mjs
   Xuất:  web/assets/ttw3/*.svg   (hình vẽ bằng code)
          web/data-ttw3.js        (15 phiếu × 8 câu = 120 câu, môn mới cho lớp 3)

   BIÊN SOẠN THEO PHONG CÁCH MathX + các DẠNG TOÁN NƯỚC NGOÀI (Trung Quốc, Nga,
   Úc) đã được hạ độ khó về mức HSG cấp trường/huyện lớp 3 Việt Nam. Đây là đề
   BIÊN SOẠN LẠI (đổi số liệu, tình huống) — KHÔNG phải bản chép nguyên văn phiếu
   mathx.vn, nên không gắn nhãn thương hiệu "MathX".

   Nguồn tham khảo DẠNG BÀI:
     • Trung Quốc (奥数 — Hua Luogeng Cup / Hope Cup tiểu học): 数阵图 (số trận đồ),
       巧算 (tính nhanh), 找规律 (tìm quy luật), 鸡兔同笼 (gà–thỏ), 植树问题 (trồng
       cây / cưa gỗ), 年龄问题 (tuổi), 还原问题 (suy ngược), 抽屉原理 (ngăn kéo),
       和差 (tổng–hiệu), 归一 (quy về đơn vị).
     • Nga (Кенгуру / логические задачи): suy luận xếp hạng, bài toán mẹo.
     • Úc (APSMO / Math Kangaroo): non-routine mua bán, đổi tiền ít đồng nhất,
       đếm hình – đếm khối, phép tính ẩn bằng hình, cân so sánh biểu tượng.

   Mọi câu có hình đều lấy ĐÁP ÁN TỪ CHÍNH DỮ LIỆU vẽ ra hình.
   ========================================================================== */
'use strict';

import fs from 'fs';
import path from 'path';
import { triFanSVG } from './hinh-art.mjs';
import { balanceSVG, treeRowSVG } from './nc2-art.mjs';
import { clockSVG } from './vio-art.mjs';
import { stripSVG, numGridSVG, colStacksSVG, triangleArraySVG, arrowChainSVG } from './tt-art.mjs';

const ASSETS = 'web/assets/ttw3';
fs.rmSync(ASSETS, { recursive: true, force: true });
fs.mkdirSync(ASSETS, { recursive: true });
let assetCount = 0;
function save(name, content) {
  fs.writeFileSync(path.join(ASSETS, name + '.svg'), content);
  assetCount++;
  return `assets/ttw3/${name}.svg`;
}

function rng(seed) {
  let a = seed >>> 0;
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const R = rng(70240303);
const ri = (min, max) => min + Math.floor(R() * (max - min + 1));
const pick = (arr) => arr[Math.floor(R() * arr.length)];

let ansSeed = 11;
function mk(correct, distractors) {
  const seen = new Set([String(correct)]);
  const ds = [];
  const push = (d) => { const s = String(d); if (!seen.has(s) && s !== 'undefined' && s !== 'NaN') { seen.add(s); ds.push(s); } };
  for (const d of distractors) if (ds.length < 3) push(d);
  const num = Number(correct);
  if (ds.length < 3 && String(correct).trim() !== '' && Number.isFinite(num) && String(num) === String(correct).trim()) {
    for (const delta of [1, -1, 2, -2, 10, -10, 3, -3, 5, -5]) { if (ds.length >= 3) break; if (num + delta >= 0) push(num + delta); }
  }
  if (ds.length < 3) throw new Error('Thiếu nhiễu: ' + correct + ' | ' + JSON.stringify(distractors));
  const pos = ansSeed % 4; ansSeed = (ansSeed * 7 + 5) % 101;
  const arr = ds.slice(); arr.splice(pos, 0, String(correct));
  return { opts: arr, ans: 'ABCD'[pos] };
}

let idc = 0;
const NM = () => `q${++idc}`;

/* ══════════════════════════ CÁC BỘ SINH CÂU (builders) ══════════════════════ */
const B = {};

/* 巧算 — tính nhanh ghép cặp */
B.tinhNhanh = () => {
  const kind = ri(0, 2);
  if (kind === 0) {
    const n = pick([9, 10, 12, 15, 20]);
    const s = n * (n + 1) / 2;
    return { sec: 'Tính nhanh', text: `Tính nhanh: <b>1 + 2 + 3 + … + ${n}</b> (cộng các số tự nhiên liên tiếp từ 1 đến ${n}).`,
      ...mk(s, [s + n, s - n, n * n]),
      why: `Ghép cặp hai đầu: mỗi cặp có tổng ${n + 1}, có ${n % 2 === 0 ? n / 2 + ' cặp' : (n - 1) / 2 + ' cặp và số giữa'}. Kết quả = ${n} × ${n + 1} : 2 = ${s}.` };
  }
  if (kind === 1) {
    const k = pick([4, 5, 6, 7]);
    const nums = Array.from({ length: k }, (_, i) => 2 * (i + 1));
    const s = nums.reduce((a, b) => a + b, 0);
    return { sec: 'Tính nhanh', text: `Tính nhanh: <b>${nums.join(' + ')}</b>`,
      ...mk(s, [s + 2, s - 2, s + 4]),
      why: `Ghép cặp hai đầu, mỗi cặp bằng ${nums[0] + nums[k - 1]}: kết quả = ${s}.` };
  }
  const base = pick([100, 200, 100]);
  const a = ri(1, 4), b = a + 1, c = a + 2, d = a + 3;
  const s = base - (a + b + c + d);
  return { sec: 'Tính nhanh', text: `Tính nhanh: <b>${base} − ${a} − ${b} − ${c} − ${d}</b>`,
    ...mk(s, [s - 4, s + 4, base - a]),
    why: `Trừ liên tiếp = trừ tổng: ${base} − (${a} + ${b} + ${c} + ${d}) = ${base} − ${a + b + c + d} = ${s}.` };
};

/* 鸡兔同笼 — gà & thỏ (hoặc xe đạp & xe ba bánh) */
B.gaTho = () => {
  const useXe = R() < 0.5;
  const c = ri(3, 8), r = ri(2, 7);
  const heads = c + r, legs = useXe ? c * 2 + r * 3 : c * 2 + r * 4;
  const perR = useXe ? 3 : 4;
  const askR = R() < 0.5;
  const ans = askR ? r : c;
  if (useXe) {
    return { sec: 'Gà và thỏ', text: `Bãi xe có ${heads} chiếc xe gồm xe đạp (2 bánh) và xe ba bánh (3 bánh), đếm được tất cả ${legs} bánh xe. Hỏi có bao nhiêu <b>${askR ? 'xe ba bánh' : 'xe đạp'}</b>?`,
      ...mk(ans, [askR ? c : r, ans + 1, ans - 1, heads]),
      why: `Giả sử tất cả là xe đạp: ${heads} × 2 = ${heads * 2} bánh, thiếu ${legs - heads * 2} bánh. Mỗi xe ba bánh hơn 1 bánh nên số xe ba bánh = ${legs - heads * 2}, số xe đạp = ${heads - (legs - heads * 2)}. Vậy ${askR ? 'xe ba bánh' : 'xe đạp'} có ${ans} chiếc.` };
  }
  return { sec: 'Gà và thỏ', text: `Vừa gà vừa thỏ có tất cả ${heads} con, đếm được ${legs} chân. Hỏi có bao nhiêu con <b>${askR ? 'thỏ' : 'gà'}</b>?`,
    ...mk(ans, [askR ? c : r, ans + 1, ans - 1, heads]),
    why: `Giả sử tất cả là gà: ${heads} × 2 = ${heads * 2} chân, thiếu ${legs - heads * 2} chân. Mỗi con thỏ hơn gà 2 chân nên số thỏ = ${legs - heads * 2} : 2 = ${r}, số gà = ${c}. Vậy có ${ans} con ${askR ? 'thỏ' : 'gà'}.` };
};

/* 植树问题 — trồng cây / cưa gỗ */
B.trongCay = () => {
  const kind = ri(0, 2);
  if (kind === 0) {
    const gap = pick([2, 3, 4, 5]), k = ri(3, 6), seg = gap * k, trees = k + 1;
    return { sec: 'Trồng cây', img: save(NM(), treeRowSVG(seg, gap)),
      text: `Trồng cây dọc một đoạn đường dài ${seg} m, hai cây cạnh nhau cách ${gap} m, trồng cả ở <b>hai đầu</b> đường. Cần bao nhiêu cây?`,
      ...mk(trees, [k, trees + 1, k - 1]),
      why: `Số khoảng = ${seg} : ${gap} = ${k}. Trồng cả hai đầu nên số cây = số khoảng + 1 = ${trees} cây.` };
  }
  if (kind === 1) {
    const gap = pick([2, 4, 5]), k = ri(4, 8), perim = gap * k, posts = k;
    return { sec: 'Trồng cây', text: `Đóng cọc quanh một cái ao hình tròn có chu vi ${perim} m, hai cọc cạnh nhau cách ${gap} m. Cần bao nhiêu cọc?`,
      ...mk(posts, [posts + 1, posts - 1, perim]),
      why: `Vì trồng theo <b>vòng khép kín</b> nên số cọc = số khoảng = ${perim} : ${gap} = ${posts} cọc.` };
  }
  const parts = ri(4, 8);
  return { sec: 'Trồng cây', text: `Một bác thợ cưa một khúc gỗ dài thành ${parts} đoạn bằng nhau. Bác phải cưa bao nhiêu <b>nhát</b>?`,
    ...mk(parts - 1, [parts, parts + 1, parts - 2]),
    why: `Cưa thành ${parts} đoạn thì chỉ cần ${parts} − 1 = ${parts - 1} nhát (nhát cuối đã tách đủ đoạn).` };
};

/* 年龄问题 — tuổi (hiệu không đổi) */
B.tuoi = () => {
  const k = pick([2, 3, 4, 5]), con = ri(5, 10), diff = con * (k - 1), me = con * k;
  const askCon = R() < 0.5;
  return { sec: 'Bài toán tuổi', text: `Mẹ hơn con ${diff} tuổi. Năm nay tuổi mẹ gấp ${k} lần tuổi con. Hỏi <b>${askCon ? 'con' : 'mẹ'}</b> năm nay bao nhiêu tuổi?`,
    ...mk(askCon ? con : me, [askCon ? me : con, diff, (askCon ? con : me) + 2]),
    why: `Tuổi mẹ gấp ${k} lần tuổi con nên hiệu ${diff} tuổi ứng với ${k} − 1 = ${k - 1} lần tuổi con. Tuổi con = ${diff} : ${k - 1} = ${con}, tuổi mẹ = ${con} × ${k} = ${me}.` };
};

/* 还原问题 — suy ngược */
B.suyNguoc = () => {
  const x = ri(4, 12), a = ri(3, 9), b = pick([2, 3]), c = ri(2, 9);
  const res = (x + a) * b - c;
  return { sec: 'Suy ngược', img: save(NM(), arrowChainSVG([x === 0 ? 0 : '?', '', '', res], '', { rules: [`+${a}`, `×${b}`, `−${c}`] })),
    text: `Một bạn nghĩ ra một số, <b>cộng ${a}</b>, rồi <b>nhân ${b}</b>, rồi <b>bớt ${c}</b> thì được ${res}. Hỏi bạn đã nghĩ ra số nào?`,
    ...mk(x, [res, x + a, x + 1]),
    why: `Đi lùi từ kết quả: (${res} + ${c}) : ${b} − ${a} = ${res + c} : ${b} − ${a} = ${(res + c) / b} − ${a} = ${x}.` };
};

/* 抽屉原理 — nguyên lý ngăn kéo (bản đơn giản) */
B.nganKeo = () => {
  const colors = ri(2, 4);
  const CN = ['đỏ', 'xanh', 'vàng', 'tím'].slice(0, colors).join(', ');
  return { sec: 'Nguyên lý ngăn kéo', text: `Trong một chiếc hộp kín có rất nhiều viên bi thuộc ${colors} màu (${CN}). Không nhìn vào hộp, phải lấy ra ít nhất bao nhiêu viên để <b>chắc chắn</b> có 2 viên cùng màu?`,
    ...mk(colors + 1, [colors, colors + 2, colors * 2]),
    why: `Xấu nhất mỗi màu lấy được 1 viên (${colors} viên khác màu). Lấy thêm 1 viên nữa thì chắc chắn trùng màu: ${colors} + 1 = ${colors + 1} viên.` };
};

/* 和差 — tổng và hiệu */
B.tongHieu = () => {
  const big = ri(20, 60), small = ri(5, big - 4), S = big + small, D = big - small;
  const askBig = R() < 0.5;
  return { sec: 'Tổng và hiệu', text: `Hai số có tổng bằng ${S} và hiệu bằng ${D}. Tìm <b>số ${askBig ? 'lớn' : 'bé'}</b>.`,
    ...mk(askBig ? big : small, [askBig ? small : big, (askBig ? big : small) + D, S]),
    why: `Số lớn = (tổng + hiệu) : 2 = (${S} + ${D}) : 2 = ${big}. Số bé = ${small}.` };
};

/* 归一 — quy về đơn vị */
B.quyVeDonVi = () => {
  const a = ri(2, 5), u = ri(3, 9), b = ri(a + 1, 9), c = a * u, ans = b * u;
  return { sec: 'Quy về đơn vị', text: `Mua ${a} quyển vở giống nhau hết ${c} nghìn đồng. Hỏi mua ${b} quyển vở như thế hết bao nhiêu nghìn đồng?`,
    ...mk(ans, [ans + u, ans - u, c + b]),
    why: `Giá một quyển: ${c} : ${a} = ${u} nghìn. Mua ${b} quyển hết: ${u} × ${b} = ${ans} nghìn đồng.` };
};

/* 找规律 — dãy số quy luật (hình) */
B.quyLuat = () => {
  const kind = ri(0, 1);
  if (kind === 0) {
    const start = ri(2, 9), d = pick([3, 4, 6, 7, 9]);
    const seq = [start, start + d, start + 2 * d, start + 3 * d, start + 4 * d];
    const cells = seq.map((v, k) => (k === 4 ? '?' : v)), ans = seq[4];
    return { sec: 'Tìm quy luật', img: save(NM(), stripSVG(cells)),
      text: 'Tìm số thích hợp điền vào ô có dấu <b>?</b>.',
      ...mk(ans, [ans + d, ans - d, ans + 1]),
      why: `Mỗi số hơn số trước ${d} đơn vị nên số cần tìm = ${seq[3]} + ${d} = ${ans}.` };
  }
  const start = ri(1, 4), seq = [start]; for (let i = 1; i < 5; i++) seq.push(seq[i - 1] + (i + 1));
  const cells = seq.map((v, k) => (k === 4 ? '?' : v)), ans = seq[4];
  return { sec: 'Tìm quy luật', img: save(NM(), stripSVG(cells)),
    text: 'Quan sát khoảng cách tăng dần rồi tìm số ở ô <b>?</b>.',
    ...mk(ans, [ans + 1, ans - 1, seq[3] + 4]),
    why: `Khoảng cách tăng dần 2, 3, 4, 5. Số cuối = ${seq[3]} + 5 = ${ans}.` };
};

/* 数阵图 — ma phương 3×3 (hình) */
B.maPhuong = () => {
  const BASEM = [[2, 7, 6], [9, 5, 1], [4, 3, 8]];
  const add = ri(0, 20), M = BASEM.map((row) => row.map((v) => v + add));
  const sum = M[0].reduce((a, b) => a + b, 0);
  const qr = ri(0, 2), qc = ri(0, 2), ans = M[qr][qc];
  const shown = M.map((row, r) => row.map((v, c) => (r === qr && c === qc ? '?' : v)));
  return { sec: 'Số trận đồ', img: save(NM(), numGridSVG(shown, { title: 'Tổng mỗi hàng, mỗi cột, mỗi đường chéo đều bằng nhau' })),
    text: 'Trong bảng, tổng ba số ở mỗi hàng và mỗi cột đều bằng nhau. Tìm số ở ô <b>?</b>.',
    ...mk(ans, [ans + 1, ans - 1, sum]),
    why: `Tổng mỗi hàng là ${sum}. Lấy ${sum} trừ hai số đã biết cùng hàng (hoặc cùng cột) với ô trống được ${ans}.` };
};

/* 数阵图 — số trận đồ tam giác (hình) */
B.soTranDo = () => {
  const t = ri(0, 8);
  const A = 1 + t, Bv = 2 + t, C = 3 + t, ab = 6 + t, bc = 4 + t, ca = 5 + t; // mỗi cạnh = 9 + 3t
  const S = A + ab + Bv;
  const nodes = { A, B: Bv, C, ab, bc, ca };
  const keys = ['A', 'B', 'C', 'ab', 'bc', 'ca'], qk = pick(keys);
  const ans = nodes[qk];
  const shown = Object.assign({}, nodes); shown[qk] = '?';
  return { sec: 'Số trận đồ', img: save(NM(), triangleArraySVG(shown, { title: `Tổng ba số trên mỗi cạnh đều bằng ${S}` })),
    text: `Tổng ba số trên <b>mỗi cạnh</b> của tam giác đều bằng nhau. Tìm số ở ô có dấu <b>?</b>.`,
    ...mk(ans, [ans + 1, ans - 1, S]),
    why: `Tổng mỗi cạnh là ${S}. Ở cạnh chứa ô trống, lấy ${S} trừ hai số đã biết được ${ans}.` };
};

/* Cân so sánh biểu tượng (Nga/Úc) */
B.canBieuTuong = () => {
  const m = ri(2, 3), p = ri(2, 4), ans = m * p;
  return { sec: 'Cân so sánh', text: `Biết 1 quả táo 🍎 nặng bằng ${m} quả mận 🟣, và 1 quả mận 🟣 nặng bằng ${p} hạt dẻ 🌰. Hỏi 1 quả táo 🍎 nặng bằng bao nhiêu <b>hạt dẻ</b>?`,
    ...mk(ans, [m + p, ans + 1, ans - 1]),
    why: `1 táo = ${m} mận, mỗi mận = ${p} hạt dẻ nên 1 táo = ${m} × ${p} = ${ans} hạt dẻ.` };
};

/* Phép tính ẩn bằng hình trái cây (Úc) */
B.fruitEq = () => {
  const apple = ri(3, 8);
  let banana = ri(2, 9); if (banana === apple) banana = apple + 1;
  const A = apple * 2, sumAB = apple + banana;
  return { sec: 'Phép tính ẩn', text: `Biết: 🍎 + 🍎 = ${A} và 🍎 + 🍌 = ${sumAB}. Hỏi <b>🍌</b> bằng bao nhiêu?`,
    ...mk(banana, [apple, sumAB, banana + 1]),
    why: `Từ 🍎 + 🍎 = ${A} suy ra 🍎 = ${apple}. Thay vào 🍎 + 🍌 = ${sumAB}: 🍌 = ${sumAB} − ${apple} = ${banana}.` };
};

/* Đếm hình tam giác (Úc) */
B.demTamGiac = () => {
  const k = ri(2, 4), total = k * (k + 1) / 2;
  return { sec: 'Đếm hình', img: save(NM(), triFanSVG(k)),
    text: 'Đếm xem trong hình có tất cả bao nhiêu <b>hình tam giác</b> (kể cả tam giác lớn ghép từ nhiều tam giác nhỏ).',
    ...mk(total, [k, total + 1, total - 1]),
    why: `Có ${k} tam giác nhỏ, cộng thêm các tam giác lớn ghép lại; tổng cộng ${k} × (${k} + 1) : 2 = ${total} tam giác.` };
};

/* Đếm khối lập phương bậc thang (Úc) */
B.demKhoi = () => {
  const n = ri(3, 5), hs = Array.from({ length: n }, (_, i) => i + 1);
  const total = hs.reduce((a, b) => a + b, 0);
  return { sec: 'Đếm khối', img: save(NM(), colStacksSVG(hs)),
    text: 'Các khối lập phương giống nhau xếp thành hình bậc thang. Có tất cả bao nhiêu <b>khối</b>?',
    ...mk(total, [total + 1, total - 1, n * n]),
    why: `Đếm theo từng cột: ${hs.join(' + ')} = ${total} khối.` };
};

/* Non-routine: mua nhiều tặng (Úc) */
B.muaTang = () => {
  const p = pick([4, 5, 6]), buy = 3, groups = ri(4, 7), budget = p * groups;
  const canPay = Math.floor(budget / p), free = Math.floor(canPay / buy), total = canPay + free;
  return { sec: 'Non-routine', text: `Một cửa hàng bán bút ${p} nghìn đồng một chiếc, có khuyến mãi <b>mua ${buy} tặng 1</b>. Bạn Nam có ${budget} nghìn đồng. Nam mua được <b>nhiều nhất</b> bao nhiêu chiếc bút?`,
    ...mk(total, [canPay, total + 1, total - 1]),
    why: `Với ${budget} nghìn mua được ${canPay} chiếc (${canPay} × ${p} = ${budget}). Cứ mua ${buy} tặng 1 nên được tặng thêm ${free} chiếc. Tổng: ${canPay} + ${free} = ${total} chiếc.` };
};

/* Non-routine: đổi tiền ít đồng nhất (Úc) */
B.doiTien = () => {
  const a = ri(6, 19);
  const fives = Math.floor(a / 5), rem = a % 5, twos = Math.floor(rem / 2), ones = rem % 2;
  const total = fives + twos + ones;
  return { sec: 'Non-routine', text: `Cần trả đúng ${a} nghìn đồng bằng các tờ tiền loại 1 nghìn, 2 nghìn và 5 nghìn. Dùng <b>ít tờ tiền nhất</b> thì cần bao nhiêu tờ?`,
    ...mk(total, [total + 1, total + 2, a]),
    why: `Ưu tiên tờ lớn: ${fives} tờ 5 nghìn${twos ? `, ${twos} tờ 2 nghìn` : ''}${ones ? `, ${ones} tờ 1 nghìn` : ''} = ${a} nghìn, dùng ${total} tờ.` };
};

/* Bài toán mẹo (Nga) */
B.bayTuDuy = () => {
  const kind = ri(0, 1);
  if (kind === 0) {
    const t = pick([30, 40, 60]);
    return { sec: 'Bài toán mẹo', text: `Một cây nến cháy hết trong ${t} phút. Nếu thắp ${ri(3, 5)} cây nến giống hệt nhau <b>cùng một lúc</b> thì tất cả cháy hết trong bao lâu?`,
      ...mk(`${t} phút`, [`${t * 2} phút`, `${t * 3} phút`, `${Math.round(t / 2)} phút`]),
      why: `Các cây nến cháy song song, độc lập nhau nên vẫn cháy hết cùng lúc sau ${t} phút.` };
  }
  const birds = ri(6, 10), fly = ri(2, 4);
  return { sec: 'Bài toán mẹo', text: `Trên cành cây có ${birds} con chim. Có ${fly} con bay đi nơi khác. Hỏi trên cành còn lại mấy con chim?`,
    ...mk(birds - fly, [birds, fly, birds + fly]),
    why: `Còn lại = ${birds} − ${fly} = ${birds - fly} con chim.` };
};

/* Suy luận xếp hạng (Nga) */
B.xepHang = () => {
  const names = ['Lan', 'Mai', 'Hoa', 'Tú', 'An', 'Bình'];
  const i = ri(0, 2), a = names[i], b = names[i + 1], c = names[i + 2];
  return { sec: 'Suy luận', text: `Trong một cuộc thi chạy: ${a} về trước ${b}, ${b} về trước ${c}. Hỏi bạn nào về <b>đích đầu tiên</b>?`,
    ...mk(a, [c, b, 'Không xác định được']),
    why: `Thứ tự về đích: ${a} → ${b} → ${c}. Vậy ${a} về đầu tiên.` };
};

/* Đồng hồ — thời gian (hình) */
B.dongHo = () => {
  const h = ri(1, 9), plus = ri(2, 5), nh = ((h + plus - 1) % 12) + 1;
  return { sec: 'Thời gian', img: save(NM(), clockSVG(h, 0)),
    text: `Đồng hồ đang chỉ ${h} giờ đúng. Hỏi <b>sau ${plus} giờ nữa</b> đồng hồ chỉ mấy giờ?`,
    ...mk(`${nh} giờ`, [`${((h + plus) % 12) + 1} giờ`, `${plus} giờ`, `${h} giờ`]),
    why: `Sau ${plus} giờ nữa là ${h} + ${plus} = ${h + plus} giờ, tức ${nh} giờ.` };
};

/* Chu vi hình chữ nhật (chương trình lớp 3) */
B.chuVi = () => {
  const a = ri(4, 15), b = ri(3, a - 1), p = 2 * (a + b);
  return { sec: 'Hình học', text: `Một hình chữ nhật có chiều dài ${a} cm, chiều rộng ${b} cm. Tính <b>chu vi</b> hình chữ nhật đó.`,
    ...mk(`${p} cm`, [`${a + b} cm`, `${a * b} cm`, `${p + 2} cm`, `${p - 2} cm`, `${p + 4} cm`, `${p + 10} cm`]),
    why: `Chu vi = (dài + rộng) × 2 = (${a} + ${b}) × 2 = ${p} cm.` };
};

/* ══════════════════════════════ GHÉP THÀNH PHIẾU ═══════════════════════════ */
const ORDER = [
  'tinhNhanh', 'gaTho', 'trongCay', 'tuoi', 'suyNguoc', 'nganKeo', 'tongHieu', 'quyVeDonVi',
  'quyLuat', 'maPhuong', 'soTranDo', 'canBieuTuong', 'fruitEq', 'demTamGiac', 'demKhoi',
  'muaTang', 'doiTien', 'bayTuDuy', 'xepHang', 'dongHo', 'chuVi',
];
const N_PHIEU = 15, PER = 8, TOTAL = N_PHIEU * PER;

const pool = [];
let oi = 0;
while (pool.length < TOTAL) { pool.push(B[ORDER[oi % ORDER.length]]()); oi++; }

const EX = [];
for (let p = 0; p < N_PHIEU; p++) {
  const qs = pool.slice(p * PER, (p + 1) * PER).map((q, k) => ({ ...q, name: `Câu ${k + 1}`, pts: 1.25 }));
  qs.forEach((q) => { if (new Set(q.opts).size !== 4) throw new Error('trùng phương án: ' + JSON.stringify(q.opts)); });
  EX.push({ id: 3401 + p, title: `Phiếu ${String(p + 1).padStart(2, '0')}`, time: 20, questions: qs });
}

/* ── xuất file ──────────────────────────────────────────────────────────── */
const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const fmtQ = (q) => `    { sec: '${esc(q.sec)}', name: '${esc(q.name)}', pts: ${q.pts},\n`
  + `      text: '${esc(q.text)}'${q.img ? `, img: '${q.img}'` : ''},\n`
  + `      opts: o4('${q.opts.map(esc).join("', '")}'), ans: '${q.ans}',\n`
  + `      why: '${esc(q.why)}' },`;
const fmtExam = (e) => `{\n  id: ${e.id}, title: '${esc(e.title)}', time: ${e.time},\n  questions: [\n${e.questions.map(fmtQ).join('\n')}\n  ],\n},`;

const nQ = EX.reduce((t, e) => t + e.questions.length, 0);
const nImg = EX.reduce((t, e) => t + e.questions.filter((q) => q.img).length, 0);
const pct = Math.round(nImg / nQ * 100);

const HEAD = `// TOÁN TƯ DUY TỔNG HỢP LỚP 3 — ${EX.length} phiếu × ${PER} câu = ${nQ} câu (${nImg} câu có hình, ${pct}%).
// SINH TỰ ĐỘNG bởi tools/gen-tuduy3-plus.mjs — sửa nội dung trong script rồi chạy lại:
//     node tools/gen-tuduy3-plus.mjs
//
// BIÊN SOẠN THEO PHONG CÁCH MathX + các dạng toán tư duy nước ngoài đã hạ độ khó
// về mức HSG cấp trường/huyện lớp 3 Việt Nam (KHÔNG chép nguyên văn phiếu mathx.vn):
//   • Trung Quốc (奥数): số trận đồ · tính nhanh · tìm quy luật · gà–thỏ · trồng
//     cây/cưa gỗ · tuổi · suy ngược · nguyên lý ngăn kéo · tổng–hiệu · quy về đơn vị.
//   • Nga (Кенгуру): suy luận xếp hạng · bài toán mẹo.
//   • Úc (APSMO / Kangaroo): mua bán non-routine · đổi tiền ít đồng nhất · đếm
//     hình – đếm khối · phép tính ẩn bằng hình · cân so sánh biểu tượng.
// Hình vẽ bằng code (tools/tt-art.mjs + nc2-art.mjs + hinh-art.mjs + vio-art.mjs).
`;

const body = `${HEAD}
const TTW3 = [
${EX.map(fmtExam).join('\n')}
];

// Chèn môn "Tư duy tổng hợp lớp 3"
SUBJECTS.push({
  id: 'ttw3', name: 'Tư duy tổng hợp', short: 'Tư duy tuần 3', icon: '🌟', grade: 3,
  exams: TTW3, ready: true,
  heroTitle: 'Toán tư duy tổng hợp lớp 3 — ${EX.length} phiếu hàng tuần',
  heroMeta: '📚 ${EX.length} phiếu &nbsp;•&nbsp; ${nQ} câu &nbsp;•&nbsp; ⏱ 20 phút mỗi phiếu &nbsp;•&nbsp; ${nImg} câu có hình (${pct}%) &nbsp;•&nbsp; dạng Trung Quốc · Nga · Úc, lời giải chi tiết',
});
`;
fs.writeFileSync('web/data-ttw3.js', body);
console.log(`web/data-ttw3.js: ${EX.length} phiếu · ${nQ} câu · ${nImg} câu có hình (${pct}%) · ${assetCount} hình SVG`);
