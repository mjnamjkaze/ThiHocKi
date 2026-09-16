/* ============================================================================
   gen-thcs-hoahoc9.mjs — sinh ngân hàng HÓA HỌC LỚP 9 (phần Hoá trong KHTN 9,
   GDPT 2018, SGK Kết nối tri thức) — 100 đề × 10 câu, mức HSG cấp trường/huyện.

   Chạy:  node tools/gen-thcs-hoahoc9.mjs
   Xuất:  web/data-hoahoc9.js   (id 23201 → 23300)

   Cấu trúc:
     • BANK  — hơn 400 câu VIẾT TAY (lí thuyết, hiện tượng, thí nghiệm, tình huống)
               chia 12 chương; mỗi câu ghi phương án ĐÚNG ở vị trí đầu, vị trí
               A/B/C/D được rải đều bằng hàng đợi xáo trộn theo từng đề.
     • GEN   — hơn 30 họ câu THAM SỐ HOÁ: đáp án tính bằng code theo PTHH đã cân
               bằng trong dữ liệu; nhiễu mô phỏng lỗi hay gặp (dùng 22,4 thay
               24,79, quên hệ số, nhầm hoá trị, nhầm chất...).
   Khối lượng mol theo SGK: H 1, C 12, N 14, O 16, Na 23, Mg 24, Al 27, S 32,
   Cl 35,5, K 39, Ca 40, Fe 56, Cu 64, Zn 65, Br 80, Ag 108, Ba 137, Pb 207.
   Thể tích mol khí: 24,79 L/mol ở 25 °C, 1 bar.
   ========================================================================== */
'use strict';
import fs from 'fs';

/* ─────────── RNG có hạt giống (mulberry32) ─────────── */
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rng = mulberry32(20260916);
const pick = arr => arr[Math.floor(rng() * arr.length)];
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

/* ─────────── Định dạng số kiểu Việt Nam ─────────── */
const VM = 24.79;
const V = n => n * VM;
function f(x, d = 4) {
  const s = (Math.round(x * 10 ** d) / 10 ** d).toString();
  return s.replace('.', ',');
}
const g = x => f(x, 3) + ' g';
const kg = x => f(x, 3) + ' kg';
const tan = x => f(x, 3) + ' tấn';
const L = x => f(x, 4) + ' lít';
const mL = x => f(x, 2) + ' mL';
const pc = x => f(x, 2) + '%';

/* Chỉ số dưới tự động: Fe2O3 → Fe<sub>2</sub>O<sub>3</sub>; giữ nguyên E5, PM2,5 … */
const PROTECT = ['E5', 'E10', 'PM2,5', 'PM2.5', 'A95', 'A92', 'RON95'];
function sub(s) {
  if (typeof s !== 'string') return s;
  PROTECT.forEach((t, i) => { s = s.split(t).join(`@@P${i}@@`); });
  s = s.replace(/([A-Za-z\)\]])(\d+)/g, '$1<sub>$2</sub>');
  PROTECT.forEach((t, i) => { s = s.split(`@@P${i}@@`).join(t); });
  return s;
}

/* 4 phương án số: đúng + nhiễu (loại trùng chuỗi, thêm nhiễu dự phòng) */
function numOpts(correct, wrongs, fm) {
  const c = fm(correct);
  const out = [c];
  for (const w of wrongs) {
    if (!isFinite(w) || w <= 0) continue;
    const s = fm(w);
    if (!out.includes(s)) out.push(s);
    if (out.length === 4) break;
  }
  for (const k of [2, 0.5, 3, 1.5, 0.25, 4, 0.75, 1.25, 5, 0.2, 0.6, 1.2]) {
    if (out.length === 4) break;
    const s = fm(correct * k);
    if (!out.includes(s)) out.push(s);
  }
  return out;
}
/* 4 phương án chữ: đúng + 3 nhiễu lấy từ danh sách (loại trùng) */
function strOpts(correct, pool) {
  const out = [correct];
  for (const s of shuffle(pool)) { if (!out.includes(s)) out.push(s); if (out.length === 4) break; }
  if (out.length < 4) throw new Error('strOpts thiếu phương án: ' + correct);
  return out;
}

/* ═══════════════════════ BẢNG DỮ LIỆU HOÁ HỌC ═══════════════════════ */
const METAL = {
  Mg: { vn: 'magnesium', M: 24, val: 2, hcl: 'Mg + 2HCl → MgCl2 + H2', h2so4: 'Mg + H2SO4 → MgSO4 + H2',
        clSalt: 'MgCl2', Mcl: 95, so4Salt: 'MgSO4', Mso4: 120, so4Per: 1 },
  Zn: { vn: 'zinc', M: 65, val: 2, hcl: 'Zn + 2HCl → ZnCl2 + H2', h2so4: 'Zn + H2SO4 → ZnSO4 + H2',
        clSalt: 'ZnCl2', Mcl: 136, so4Salt: 'ZnSO4', Mso4: 161, so4Per: 1 },
  Fe: { vn: 'iron', M: 56, val: 2, hcl: 'Fe + 2HCl → FeCl2 + H2', h2so4: 'Fe + H2SO4 → FeSO4 + H2',
        clSalt: 'FeCl2', Mcl: 127, so4Salt: 'FeSO4', Mso4: 152, so4Per: 1 },
  Al: { vn: 'aluminium', M: 27, val: 3, hcl: '2Al + 6HCl → 2AlCl3 + 3H2', h2so4: '2Al + 3H2SO4 → Al2(SO4)3 + 3H2',
        clSalt: 'AlCl3', Mcl: 133.5, so4Salt: 'Al2(SO4)3', Mso4: 342, so4Per: 0.5 },
};
const OXID = {
  Mg: { eq: '2Mg + O2 → 2MgO', ox: 'MgO', Mox: 40, per: 1, o2: 0.5, ns: [0.1, 0.2, 0.5, 1] },
  Al: { eq: '4Al + 3O2 → 2Al2O3', ox: 'Al2O3', Mox: 102, per: 0.5, o2: 0.75, ns: [0.2, 0.4, 1, 2] },
  Fe: { eq: '3Fe + 2O2 → Fe3O4', ox: 'Fe3O4', Mox: 232, per: 1 / 3, o2: 2 / 3, ns: [0.3, 0.6, 1.5, 3] },
  Cu: { eq: '2Cu + O2 → 2CuO', ox: 'CuO', Mox: 80, per: 1, o2: 0.5, ns: [0.1, 0.2, 0.5, 1] },
  Zn: { eq: '2Zn + O2 → 2ZnO', ox: 'ZnO', Mox: 81, per: 1, o2: 0.5, ns: [0.1, 0.2, 0.5, 1] },
};
const HALO = {
  Fe: { M: 56, eq: '2Fe + 3Cl2 → 2FeCl3', salt: 'FeCl3', Msalt: 162.5, cl2: 1.5, name: 'iron(III) chloride' },
  Al: { M: 27, eq: '2Al + 3Cl2 → 2AlCl3', salt: 'AlCl3', Msalt: 133.5, cl2: 1.5, name: 'aluminium chloride' },
  Na: { M: 23, eq: '2Na + Cl2 → 2NaCl', salt: 'NaCl', Msalt: 58.5, cl2: 0.5, name: 'sodium chloride' },
  Cu: { M: 64, eq: 'Cu + Cl2 → CuCl2', salt: 'CuCl2', Msalt: 135, cl2: 1, name: 'copper(II) chloride' },
  Mg: { M: 24, eq: 'Mg + Cl2 → MgCl2', salt: 'MgCl2', Msalt: 95, cl2: 1, name: 'magnesium chloride' },
};
const ID_METALS = [
  { k: 'Mg', M: 24, vn: 'magnesium (Mg)' }, { k: 'Ca', M: 40, vn: 'calcium (Ca)' },
  { k: 'Fe', M: 56, vn: 'iron (Fe)' }, { k: 'Zn', M: 65, vn: 'zinc (Zn)' }, { k: 'Ba', M: 137, vn: 'barium (Ba)' },
];
const RODS = [
  { metal: 'Fe', salt: 'CuSO4', eq: 'Fe + CuSO4 → FeSO4 + Cu', dep: 'Cu', Mdep: 64, Mm: 56, ratio: 1 },
  { metal: 'Zn', salt: 'CuSO4', eq: 'Zn + CuSO4 → ZnSO4 + Cu', dep: 'Cu', Mdep: 64, Mm: 65, ratio: 1 },
  { metal: 'Cu', salt: 'AgNO3', eq: 'Cu + 2AgNO3 → Cu(NO3)2 + 2Ag', dep: 'Ag', Mdep: 108, Mm: 64, ratio: 2 },
  { metal: 'Mg', salt: 'CuSO4', eq: 'Mg + CuSO4 → MgSO4 + Cu', dep: 'Cu', Mdep: 64, Mm: 24, ratio: 1 },
  { metal: 'Fe', salt: 'AgNO3', eq: 'Fe + 2AgNO3 → Fe(NO3)2 + 2Ag', dep: 'Ag', Mdep: 108, Mm: 56, ratio: 2 },
  { metal: 'Zn', salt: 'FeSO4', eq: 'Zn + FeSO4 → ZnSO4 + Fe', dep: 'Fe', Mdep: 56, Mm: 65, ratio: 1 },
  { metal: 'Zn', salt: 'Pb(NO3)2', eq: 'Zn + Pb(NO3)2 → Zn(NO3)2 + Pb', dep: 'Pb', Mdep: 207, Mm: 65, ratio: 1 },
  { metal: 'Al', salt: 'CuSO4', eq: '2Al + 3CuSO4 → Al2(SO4)3 + 3Cu', dep: 'Cu', Mdep: 64, Mm: 27, ratio: 1.5 },
];
const RED = [
  { ox: 'Fe2O3', Mox: 160, eq: 'Fe2O3 + 3CO → 2Fe + 3CO2 (t°)', metal: 'Fe', Mm: 56, per: 2, gas: 'CO2', ngas: 3, redu: 'CO', nredu: 3 },
  { ox: 'Fe3O4', Mox: 232, eq: 'Fe3O4 + 4CO → 3Fe + 4CO2 (t°)', metal: 'Fe', Mm: 56, per: 3, gas: 'CO2', ngas: 4, redu: 'CO', nredu: 4 },
  { ox: 'CuO', Mox: 80, eq: 'CuO + H2 → Cu + H2O (t°)', metal: 'Cu', Mm: 64, per: 1, gas: null, ngas: 0, redu: 'H2', nredu: 1 },
  { ox: 'CuO', Mox: 80, eq: 'CuO + CO → Cu + CO2 (t°)', metal: 'Cu', Mm: 64, per: 1, gas: 'CO2', ngas: 1, redu: 'CO', nredu: 1 },
  { ox: 'ZnO', Mox: 81, eq: 'ZnO + C → Zn + CO (t°)', metal: 'Zn', Mm: 65, per: 1, gas: 'CO', ngas: 1, redu: 'C', nredu: 1 },
  { ox: 'Fe2O3', Mox: 160, eq: 'Fe2O3 + 3H2 → 2Fe + 3H2O (t°)', metal: 'Fe', Mm: 56, per: 2, gas: null, ngas: 0, redu: 'H2', nredu: 3 },
  { ox: 'CuO', Mox: 80, eq: '2CuO + C → 2Cu + CO2 (t°)', metal: 'Cu', Mm: 64, per: 1, gas: 'CO2', ngas: 0.5, redu: 'C', nredu: 0.5 },
  { ox: 'PbO', Mox: 223, eq: 'PbO + C → Pb + CO (t°)', metal: 'Pb', Mm: 207, per: 1, gas: 'CO', ngas: 1, redu: 'C', nredu: 1 },
];
const HC = [
  { fm: 'CH4', name: 'methane', M: 16, c: 1, h: 4, o2: 2, eq: 'CH4 + 2O2 → CO2 + 2H2O', cls: 'alkane' },
  { fm: 'C2H6', name: 'ethane', M: 30, c: 2, h: 6, o2: 3.5, eq: '2C2H6 + 7O2 → 4CO2 + 6H2O', cls: 'alkane' },
  { fm: 'C3H8', name: 'propane', M: 44, c: 3, h: 8, o2: 5, eq: 'C3H8 + 5O2 → 3CO2 + 4H2O', cls: 'alkane' },
  { fm: 'C4H10', name: 'butane', M: 58, c: 4, h: 10, o2: 6.5, eq: '2C4H10 + 13O2 → 8CO2 + 10H2O', cls: 'alkane' },
  { fm: 'C5H12', name: 'pentane', M: 72, c: 5, h: 12, o2: 8, eq: 'C5H12 + 8O2 → 5CO2 + 6H2O', cls: 'alkane' },
  { fm: 'C6H14', name: 'hexane', M: 86, c: 6, h: 14, o2: 9.5, eq: '2C6H14 + 19O2 → 12CO2 + 14H2O', cls: 'alkane' },
  { fm: 'C2H4', name: 'ethylene', M: 28, c: 2, h: 4, o2: 3, eq: 'C2H4 + 3O2 → 2CO2 + 2H2O', cls: 'alkene' },
  { fm: 'C3H6', name: 'propylene', M: 42, c: 3, h: 6, o2: 4.5, eq: '2C3H6 + 9O2 → 6CO2 + 6H2O', cls: 'alkene' },
  { fm: 'C4H8', name: 'butylene', M: 56, c: 4, h: 8, o2: 6, eq: 'C4H8 + 6O2 → 4CO2 + 4H2O', cls: 'alkene' },
  { fm: 'C5H10', name: 'pentene', M: 70, c: 5, h: 10, o2: 7.5, eq: '2C5H10 + 15O2 → 10CO2 + 10H2O', cls: 'alkene' },
];
const FATS = [
  { name: 'tristearin', fm: '(C17H35COO)3C3H5', M: 890, soap: 'C17H35COONa', soapName: 'sodium stearate', Msoap: 306,
    eq: '(C17H35COO)3C3H5 + 3NaOH → 3C17H35COONa + C3H5(OH)3 (t°)', ms: [8.9, 17.8, 44.5, 89, 178, 445] },
  { name: 'tripalmitin', fm: '(C15H31COO)3C3H5', M: 806, soap: 'C15H31COONa', soapName: 'sodium palmitate', Msoap: 278,
    eq: '(C15H31COO)3C3H5 + 3NaOH → 3C15H31COONa + C3H5(OH)3 (t°)', ms: [8.06, 16.12, 40.3, 80.6, 161.2, 403] },
  { name: 'triolein', fm: '(C17H33COO)3C3H5', M: 884, soap: 'C17H33COONa', soapName: 'sodium oleate', Msoap: 304,
    eq: '(C17H33COO)3C3H5 + 3NaOH → 3C17H33COONa + C3H5(OH)3 (t°)', ms: [8.84, 17.68, 44.2, 88.4, 176.8, 442] },
];
const POLY = [
  { name: 'polyethylene (PE)', unit: '–CH2–CH2–', Mu: 28, mono: 'ethylene (CH2=CH2)', Mmono: 28 },
  { name: 'poly(vinyl chloride) (PVC)', unit: '–CH2–CHCl–', Mu: 62.5, mono: 'vinyl chloride (CH2=CHCl)', Mmono: 62.5 },
  { name: 'polypropylene (PP)', unit: '–CH2–CH(CH3)–', Mu: 42, mono: 'propylene (CH2=CH–CH3)', Mmono: 42 },
  { name: 'polystyrene (PS)', unit: '–CH2–CH(C6H5)–', Mu: 104, mono: 'styrene (C6H5–CH=CH2)', Mmono: 104 },
  { name: 'polytetrafluoroethylene (PTFE, teflon)', unit: '–CF2–CF2–', Mu: 100, mono: 'tetrafluoroethylene (CF2=CF2)', Mmono: 100 },
];

//__GEN__
