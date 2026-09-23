// ĐỀ CUỐI KÌ LỚP 3 — TRỌN ĐỀ, ĐÚNG CẤU TRÚC ĐỀ GIẤY CỦA TRƯỜNG
// Cùng cách làm với data-ck2full.js: khai báo mảng rỗng, các file data-toan3ck-*.js và
// data-tv3ck-*.js nạp sau sẽ push đề vào. `full: true` = không cắt phần, không bớt câu, in đủ đề.

const TOAN3CK = [];   // Toán 3 — đề cuối kì 1 & 2 thật của các trường (id 3801…)
const TV3CK = [];     // Tiếng Việt 3 — đề cuối kì 1 & 2 (id 3901…)

SUBJECTS.push({
  id: 'toan3-ck', name: 'Toán CK — đề các trường', short: 'Đề trường', icon: '∑', grade: 3,
  full: true, exams: TOAN3CK, ready: true,
  heroTitle: 'Đề kiểm tra cuối kì — đề thật các trường tiểu học',
});

/* Tiếng Việt cuối kì đứng ngay sau bộ Tiếng Việt đọc hiểu cho dễ tìm. */
{
  const tv = {
    id: 'tv3-ck', name: 'Tiếng Việt cuối kì', short: 'Tiếng Việt 3 CK', icon: '📖', grade: 3,
    full: true, exams: TV3CK, ready: true,
    heroTitle: 'Đề kiểm tra cuối kì Tiếng Việt 3 — đọc thành tiếng, đọc hiểu, chính tả, tập làm văn',
  };
  const at = SUBJECTS.findIndex(s => s.id === 'tviet3');
  if (at >= 0) SUBJECTS.splice(at + 1, 0, tv); else SUBJECTS.push(tv);
}
