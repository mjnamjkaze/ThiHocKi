// Tiện ích dùng chung cho bộ sinh Vật lí 9 (RNG có hạt giống + định dạng số kiểu Việt).

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const rnd = mulberry32(20260916);
export const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
export const pick = arr => arr[Math.floor(rnd() * arr.length)];
export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// Định dạng số: dấu phẩy thập phân, cách hàng nghìn bằng dấu cách khi ≥ 5 chữ số.
export function fmt(x, dec = 2) {
  if (typeof x !== 'number' || !isFinite(x)) return String(x);
  const r = Math.round(x);
  let s = Math.abs(x - r) < 1e-9 ? String(r) : String(+x.toFixed(dec));
  let [ip, fp] = s.split('.');
  const neg = ip.startsWith('-');
  if (neg) ip = ip.slice(1);
  if (ip.length > 4) ip = ip.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return (neg ? '−' : '') + (fp ? ip + ',' + fp : ip);
}
export const isNice = (x, dec = 2) => Math.abs(x * 10 ** dec - Math.round(x * 10 ** dec)) < 1e-6;
export const J = x => (Math.abs(x) >= 100000 && isNice(x / 1000, 1)) ? fmt(x / 1000) + ' kJ' : fmt(x) + ' J';
export const W = x => (Math.abs(x) >= 10000 && isNice(x / 1000, 1)) ? fmt(x / 1000) + ' kW' : fmt(x) + ' W';
export const ohm = x => fmt(x) + ' Ω';
export const volt = x => fmt(x) + ' V';
export const amp = x => fmt(x) + ' A';
export const cm = x => fmt(x) + ' cm';
export const kwh = x => fmt(x) + ' kWh';
export const dong = x => fmt(Math.round(x)) + ' đồng';
export const ms = x => fmt(x) + ' m/s';
export const m = x => fmt(x) + ' m';
// Số dạng a×10^n m/s cho tốc độ ánh sáng
export const e8 = x => fmt(x / 1e8, 3) + '×10<sup>8</sup> m/s';

// ---------- Ngân hàng câu viết tay ----------
export const CHAP = {
  'cn-dong-the': 'I', 'cn-bao-toan': 'I', 'cn-cong': 'I',
  'as-khuc-xa': 'II', 'as-pxtp': 'II', 'as-lang-kinh': 'II', 'as-thau-kinh': 'II', 'as-kinh-lup': 'II',
  'di-ohm': 'III', 'di-mach': 'III', 'di-cong-suat': 'III',
  'dt-cam-ung': 'IV', 'dt-xoay-chieu': 'IV',
  'nl-vong': 'V', 'nl-tai-tao': 'V',
};
export const SEC = { I: 'Năng lượng cơ học', II: 'Ánh sáng', III: 'Điện', IV: 'Điện từ', V: 'Năng lượng với cuộc sống' };
export const BANK = [];
// q(topic, text, đáp án đúng, [3 phương án nhiễu], giải thích, hard?)
export function q(topic, text, correct, ds, why, hard = 0) {
  if (!CHAP[topic]) throw new Error('topic lạ: ' + topic);
  if (ds.length !== 3) throw new Error('Cần đúng 3 phương án nhiễu: ' + text);
  if (new Set([correct, ...ds]).size !== 4) throw new Error('Phương án trùng: ' + text);
  BANK.push({ topic, chap: CHAP[topic], text, correct, ds, why, hard, hand: 1 });
}
