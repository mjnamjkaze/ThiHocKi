// ĐỀ CUỐI KÌ LỚP 2 — TRỌN ĐỀ, ĐÚNG CẤU TRÚC ĐỀ GIẤY CỦA TRƯỜNG
// Khai báo hai mảng rỗng; các file data-ck2clc-toan.js và data-tv2ck-*.js nạp sau sẽ push đề vào.
//
// `full: true` = không cắt phần (split-exams.js), không bớt câu theo ô "số câu mỗi đề", in ra
// PDF đủ mọi câu. Câu tự luận chấm tay (chính tả, tập làm văn, đọc thành tiếng, trình bày bài
// giải) có `type: 'write'`: làm ra giấy, bố mẹ chấm theo bài mẫu `model` rồi bấm mức đạt trên app.
// Dòng heroMeta (số đề · số câu) do split-exams.js điền sau khi mọi file đã nạp.

const TOAN2CK = [];   // Toán 2 — đề cuối kì 1 thật của các trường, lấy từ website trường (id 3601…)
const TV2CK = [];     // Tiếng Việt 2 — đề cuối kì 1 & 2 (id 3701…)

SUBJECTS.push({
  id: 'toan2-clc', name: 'Toán CK1 — đề các trường', short: 'Đề trường CK1', icon: '∑', grade: 2,
  sem: 1, full: true, exams: TOAN2CK, ready: true,
  heroTitle: 'Đề kiểm tra cuối kì 1 — đề thật các trường tiểu học',
});

/* Tiếng Việt cuối kì đứng ngay sau bộ Tiếng Việt đọc hiểu cho dễ tìm. */
{
  const tv = {
    id: 'tv2-ck', name: 'Tiếng Việt cuối kì', short: 'Tiếng Việt 2 CK', icon: '📖', grade: 2,
    full: true, exams: TV2CK, ready: true,
    heroTitle: 'Đề kiểm tra cuối kì Tiếng Việt 2 — đọc thành tiếng, đọc hiểu, chính tả, tập làm văn',
  };
  const at = SUBJECTS.findIndex(s => s.id === 'tviet2');
  if (at >= 0) SUBJECTS.splice(at + 1, 0, tv); else SUBJECTS.push(tv);
}
