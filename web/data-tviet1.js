// TIẾNG VIỆT — LỚP 1 (GDPT 2018)
// 10 đề × 10 câu = 100 câu. Mỗi câu 1 điểm — thang 10 — 15 phút mỗi đề.
//
// Bám chương trình lớp 1: nhận biết âm – vần – thanh; quy tắc chính tả (c/k, g/gh, ng/ngh,
// l/n, ch/tr, s/x); mở rộng vốn từ (từ chỉ sự vật, hoạt động, đặc điểm); đọc hiểu câu và
// đoạn ngắn; câu và dấu câu (dấu chấm, chấm hỏi, chấm than; viết hoa đầu câu).

const TV1_R1 = 'Nhà Nam có một con mèo. Mèo lông vàng, mắt tròn. Mèo rất thích bắt chuột. Nam yêu mèo lắm.';
const TV1_R2 = 'Trời mưa to. Lan lấy ô che cho bà. Hai bà cháu cùng về nhà. Bà khen Lan ngoan.';
const TV1_R3 = 'Vườn nhà em có nhiều cây. Cây bưởi ra hoa trắng. Cây cam có quả chín vàng. Chim hót líu lo trên cành.';
const TV1_R4 = 'Sáng nay, em dậy sớm. Em đánh răng, rửa mặt. Em ăn sáng rồi đi học. Em chào bố mẹ trước khi đi.';

const TV1_EXAMS = [

/* ═══════════ ĐỀ 1 — NHẬN BIẾT ÂM ĐẦU ═══════════ */
{
  id: 6201, title: 'Đề 1 · Nhận biết âm đầu của tiếng', time: 15,
  questions: [
    { sec: 'Âm đầu', name: 'Câu 1', pts: 1, text: 'Tiếng "bà" bắt đầu bằng âm nào?', opts: o4('b', 'a', 'm', 'g'), ans: 'A', why: 'Tiếng "bà" bắt đầu bằng âm "b".' },
    { sec: 'Âm đầu', name: 'Câu 2', pts: 1, text: 'Tiếng "mẹ" bắt đầu bằng âm nào?', opts: o4('e', 'm', 'b', 'n'), ans: 'B', why: 'Tiếng "mẹ" bắt đầu bằng âm "m".' },
    { sec: 'Âm đầu', name: 'Câu 3', pts: 1, text: 'Tiếng "cá" bắt đầu bằng âm nào?', opts: o4('a', 'k', 'c', 'g'), ans: 'C', why: 'Tiếng "cá" bắt đầu bằng âm "c".' },
    { sec: 'Âm đầu', name: 'Câu 4', pts: 1, text: 'Tiếng nào bắt đầu bằng âm "l"?', opts: o4('lá', 'ba', 'cá', 'gà'), ans: 'A', why: 'Tiếng "lá" bắt đầu bằng âm "l".' },
    { sec: 'Âm đầu', name: 'Câu 5', pts: 1, text: 'Tiếng nào bắt đầu bằng âm "n"?', opts: o4('nụ', 'bò', 'cò', 'dê'), ans: 'A', why: 'Tiếng "nụ" bắt đầu bằng âm "n".' },
    { sec: 'Ghép âm', name: 'Câu 6', pts: 1, text: 'Ghép âm "b" với vần "a" được tiếng gì?', opts: o4('ba', 'bo', 'be', 'bi'), ans: 'A', why: '"b" ghép với "a" được tiếng "ba".' },
    { sec: 'Ghép âm', name: 'Câu 7', pts: 1, text: 'Ghép âm "h" với vần "oa" được tiếng gì?', opts: o4('hoa', 'hao', 'ha', 'ho'), ans: 'A', why: '"h" ghép với vần "oa" được tiếng "hoa".' },
    { sec: 'Âm chung', name: 'Câu 8', pts: 1, text: 'Hai tiếng "gà" và "gò" có chung âm đầu nào?', opts: o4('a', 'g', 'o', 'k'), ans: 'B', why: 'Cả "gà" và "gò" đều bắt đầu bằng âm "g".' },
    { sec: 'Bảng chữ cái', name: 'Câu 9', pts: 1, text: 'Chữ cái đầu tiên trong bảng chữ cái tiếng Việt là chữ nào?', opts: o4('a', 'b', 'c', 'e'), ans: 'A', why: 'Chữ cái đầu tiên là chữ "a".' },
    { sec: 'Âm đầu', name: 'Câu 10', pts: 1, text: 'Tiếng "dê" bắt đầu bằng âm nào?', opts: o4('e', 'd', 'b', 'đ'), ans: 'B', why: 'Tiếng "dê" bắt đầu bằng âm "d".' },
  ],
},

/* ═══════════ ĐỀ 2 — VẦN ═══════════ */
{
  id: 6202, title: 'Đề 2 · Nhận biết vần', time: 15,
  questions: [
    { sec: 'Vần', name: 'Câu 1', pts: 1, text: 'Tiếng "an" có vần gì?', opts: o4('an', 'am', 'ang', 'ai'), ans: 'A', why: 'Tiếng "an" có vần "an".' },
    { sec: 'Vần', name: 'Câu 2', pts: 1, text: 'Vần "ao" có trong tiếng nào?', opts: o4('sao', 'si', 'cua', 'me'), ans: 'A', why: 'Tiếng "sao" chứa vần "ao".' },
    { sec: 'Vần', name: 'Câu 3', pts: 1, text: 'Tiếng "bàn" có vần gì?', opts: o4('ba', 'an', 'am', 'ang'), ans: 'B', why: 'Tiếng "bàn" gồm âm "b" và vần "an".' },
    { sec: 'Vần', name: 'Câu 4', pts: 1, text: 'Tiếng "cây" có vần gì?', opts: o4('ay', 'ây', 'ai', 'ê'), ans: 'B', why: 'Tiếng "cây" có vần "ây".' },
    { sec: 'Vần', name: 'Câu 5', pts: 1, text: 'Tiếng "mưa" có vần gì?', opts: o4('ua', 'ưa', 'ưu', 'ơa'), ans: 'B', why: 'Tiếng "mưa" có vần "ưa".' },
    { sec: 'Vần', name: 'Câu 6', pts: 1, text: 'Vần "ông" có trong tiếng nào?', opts: o4('sông', 'sao', 'cá', 'me'), ans: 'A', why: 'Tiếng "sông" chứa vần "ông".' },
    { sec: 'Vần', name: 'Câu 7', pts: 1, text: 'Tiếng "biển" có vần gì?', opts: o4('iên', 'in', 'iêm', 'ich'), ans: 'A', why: 'Tiếng "biển" có vần "iên".' },
    { sec: 'Vần', name: 'Câu 8', pts: 1, text: 'Tiếng "cơm" có vần gì?', opts: o4('ơn', 'ơm', 'om', 'ơng'), ans: 'B', why: 'Tiếng "cơm" có vần "ơm".' },
    { sec: 'Vần', name: 'Câu 9', pts: 1, text: 'Vần "anh" có trong tiếng nào?', opts: o4('anh', 'em', 'ông', 'cá'), ans: 'A', why: 'Tiếng "anh" chứa vần "anh".' },
    { sec: 'Vần', name: 'Câu 10', pts: 1, text: 'Vần "ang" có trong tiếng nào?', opts: o4('bàng', 'bi', 'cua', 'me'), ans: 'A', why: 'Tiếng "bàng" chứa vần "ang".' },
  ],
},

/* ═══════════ ĐỀ 3 — QUY TẮC C/K, G/GH, NG/NGH ═══════════ */
{
  id: 6203, title: 'Đề 3 · Chính tả: c/k, g/gh, ng/ngh', time: 15,
  questions: [
    { sec: 'c/k', name: 'Câu 1', pts: 1, text: 'Âm "cờ" đứng trước e, ê, i thì viết bằng chữ nào?', opts: o4('c', 'k', 'q', 'g'), ans: 'B', why: 'Trước e, ê, i thì âm "cờ" viết bằng chữ "k" (kẹo, kể, kim).' },
    { sec: 'c/k', name: 'Câu 2', pts: 1, text: 'Từ nào viết đúng?', opts: o4('cái kẹo', 'cái cẹo', 'cái qẹo', 'cái gẹo'), ans: 'A', why: 'Trước "e" phải viết "k": cái kẹo.' },
    { sec: 'g/gh', name: 'Câu 3', pts: 1, text: 'Âm "gờ" đứng trước e, ê, i thì viết bằng chữ nào?', opts: o4('g', 'gh', 'ng', 'k'), ans: 'B', why: 'Trước e, ê, i thì âm "gờ" viết bằng "gh" (ghế, ghi).' },
    { sec: 'g/gh', name: 'Câu 4', pts: 1, text: 'Từ nào viết đúng?', opts: o4('ghế', 'gế', 'kế', 'nghế'), ans: 'A', why: 'Trước "ê" phải viết "gh": cái ghế.' },
    { sec: 'ng/ngh', name: 'Câu 5', pts: 1, text: 'Âm "ngờ" đứng trước e, ê, i thì viết bằng chữ nào?', opts: o4('ng', 'ngh', 'nh', 'g'), ans: 'B', why: 'Trước e, ê, i thì âm "ngờ" viết bằng "ngh" (nghe, nghĩ).' },
    { sec: 'ng/ngh', name: 'Câu 6', pts: 1, text: 'Từ nào viết đúng cho tiếng "lắng ______" (chú ý âm)?', opts: o4('nghe', 'nge', 'nghê', 'ngêh'), ans: 'A', why: 'Trước "e" phải viết "ngh": lắng nghe.' },
    { sec: 'g/gh', name: 'Câu 7', pts: 1, text: 'Từ nào viết đúng?', opts: o4('con gà', 'con ghà', 'con kà', 'con ngà'), ans: 'A', why: 'Trước "a" viết "g": con gà.' },
    { sec: 'c/k', name: 'Câu 8', pts: 1, text: 'Từ nào viết đúng?', opts: o4('cá', 'ká', 'quá', 'gá'), ans: 'A', why: 'Trước "a" viết "c": con cá.' },
    { sec: 'ng/ngh', name: 'Câu 9', pts: 1, text: 'Từ nào viết đúng?', opts: o4('củ nghệ', 'củ ngệ', 'củ nghẹ', 'củ gệ'), ans: 'A', why: 'Trước "ệ" (ê) viết "ngh": củ nghệ.' },
    { sec: 'c/k', name: 'Câu 10', pts: 1, text: 'Từ nào viết đúng?', opts: o4('kim', 'cim', 'qim', 'gim'), ans: 'A', why: 'Trước "i" viết "k": cái kim.' },
  ],
},

/* ═══════════ ĐỀ 4 — PHÂN BIỆT L/N, CH/TR, S/X ═══════════ */
{
  id: 6204, title: 'Đề 4 · Chính tả: l/n, ch/tr, s/x', time: 15,
  questions: [
    { sec: 'l/n', name: 'Câu 1', pts: 1, text: 'Từ nào viết đúng?', opts: o4('quả na', 'quả la', 'quả nla', 'quả lna'), ans: 'A', why: 'Viết đúng là "quả na".' },
    { sec: 'l/n', name: 'Câu 2', pts: 1, text: 'Từ nào viết đúng?', opts: o4('lá cây', 'ná cây', 'nlá cây', 'lná cây'), ans: 'A', why: 'Viết đúng là "lá cây".' },
    { sec: 'ch/tr', name: 'Câu 3', pts: 1, text: 'Từ nào viết đúng?', opts: o4('con trâu', 'con châu', 'con trchâu', 'con chrâu'), ans: 'A', why: 'Viết đúng là "con trâu".' },
    { sec: 'ch/tr', name: 'Câu 4', pts: 1, text: 'Từ nào viết đúng?', opts: o4('quả chuối', 'quả truối', 'quả chruối', 'quả trchuối'), ans: 'A', why: 'Viết đúng là "quả chuối".' },
    { sec: 's/x', name: 'Câu 5', pts: 1, text: 'Từ nào viết đúng?', opts: o4('ngôi sao', 'ngôi xao', 'ngôi sxao', 'ngôi xsao'), ans: 'A', why: 'Viết đúng là "ngôi sao".' },
    { sec: 's/x', name: 'Câu 6', pts: 1, text: 'Từ nào viết đúng?', opts: o4('xe đạp', 'se đạp', 'sxe đạp', 'xse đạp'), ans: 'A', why: 'Viết đúng là "xe đạp".' },
    { sec: 'l/n', name: 'Câu 7', pts: 1, text: 'Từ nào viết đúng?', opts: o4('cái nón', 'cái lón', 'cái nlón', 'cái lnón'), ans: 'A', why: 'Viết đúng là "cái nón".' },
    { sec: 'ch/tr', name: 'Câu 8', pts: 1, text: 'Từ nào viết đúng?', opts: o4('cây tre', 'cây che', 'cây trche', 'cây chre'), ans: 'A', why: 'Viết đúng là "cây tre".' },
    { sec: 's/x', name: 'Câu 9', pts: 1, text: 'Từ nào viết đúng?', opts: o4('con sư tử', 'con xư tử', 'con sxư tử', 'con xsư tử'), ans: 'A', why: 'Viết đúng là "con sư tử".' },
    { sec: 'l/n', name: 'Câu 10', pts: 1, text: 'Từ nào viết đúng?', opts: o4('nước', 'lước', 'nlước', 'lnước'), ans: 'A', why: 'Viết đúng là "nước".' },
  ],
},

/* ═══════════ ĐỀ 5 — DẤU THANH ═══════════ */
{
  id: 6205, title: 'Đề 5 · Dấu thanh', time: 15,
  questions: [
    { sec: 'Dấu thanh', name: 'Câu 1', pts: 1, text: 'Tiếng "mẹ" mang dấu thanh gì?', opts: o4('sắc', 'huyền', 'nặng', 'hỏi'), ans: 'C', why: 'Tiếng "mẹ" mang dấu nặng.' },
    { sec: 'Dấu thanh', name: 'Câu 2', pts: 1, text: 'Tiếng "bà" mang dấu thanh gì?', opts: o4('huyền', 'sắc', 'ngã', 'nặng'), ans: 'A', why: 'Tiếng "bà" mang dấu huyền.' },
    { sec: 'Dấu thanh', name: 'Câu 3', pts: 1, text: 'Tiếng "cá" mang dấu thanh gì?', opts: o4('huyền', 'sắc', 'hỏi', 'nặng'), ans: 'B', why: 'Tiếng "cá" mang dấu sắc.' },
    { sec: 'Dấu thanh', name: 'Câu 4', pts: 1, text: 'Tiếng "cổ" mang dấu thanh gì?', opts: o4('ngã', 'hỏi', 'sắc', 'huyền'), ans: 'B', why: 'Tiếng "cổ" mang dấu hỏi.' },
    { sec: 'Dấu thanh', name: 'Câu 5', pts: 1, text: 'Tiếng "mũ" mang dấu thanh gì?', opts: o4('hỏi', 'ngã', 'nặng', 'sắc'), ans: 'B', why: 'Tiếng "mũ" mang dấu ngã.' },
    { sec: 'Dấu thanh', name: 'Câu 6', pts: 1, text: 'Tiếng "ba" mang dấu thanh gì?', opts: o4('không dấu (thanh ngang)', 'huyền', 'sắc', 'nặng'), ans: 'A', why: 'Tiếng "ba" không có dấu, gọi là thanh ngang.' },
    { sec: 'Thêm dấu', name: 'Câu 7', pts: 1, text: 'Thêm dấu sắc vào tiếng "be" được tiếng gì?', opts: o4('bé', 'bè', 'bẻ', 'bẹ'), ans: 'A', why: 'Thêm dấu sắc vào "be" được "bé".' },
    { sec: 'Thêm dấu', name: 'Câu 8', pts: 1, text: 'Thêm dấu huyền vào tiếng "co" được tiếng gì?', opts: o4('có', 'cò', 'cỏ', 'cọ'), ans: 'B', why: 'Thêm dấu huyền vào "co" được "cò".' },
    { sec: 'Dấu thanh', name: 'Câu 9', pts: 1, text: 'Hai tiếng "ngã" và "mũ" cùng mang dấu thanh nào?', opts: o4('hỏi', 'ngã', 'sắc', 'nặng'), ans: 'B', why: 'Cả "ngã" và "mũ" đều mang dấu ngã.' },
    { sec: 'Dấu thanh', name: 'Câu 10', pts: 1, text: 'Tiếng nào mang dấu hỏi?', opts: o4('quả', 'cà', 'cá', 'mạ'), ans: 'A', why: 'Tiếng "quả" mang dấu hỏi.' },
  ],
},

/* ═══════════ ĐỀ 6 — MỞ RỘNG VỐN TỪ ═══════════ */
{
  id: 6206, title: 'Đề 6 · Mở rộng vốn từ', time: 15,
  questions: [
    { sec: 'Từ chỉ con vật', name: 'Câu 1', pts: 1, text: 'Từ nào chỉ con vật?', opts: o4('bàn', 'mèo', 'đỏ', 'chạy'), ans: 'B', why: '"mèo" là từ chỉ con vật.' },
    { sec: 'Từ chỉ đồ vật', name: 'Câu 2', pts: 1, text: 'Từ nào chỉ đồ dùng học tập?', opts: o4('bút', 'gà', 'cây', 'mưa'), ans: 'A', why: '"bút" là đồ dùng học tập.' },
    { sec: 'Từ chỉ cây', name: 'Câu 3', pts: 1, text: 'Từ nào chỉ cây cối?', opts: o4('cây chuối', 'ô tô', 'con cá', 'cái ghế'), ans: 'A', why: '"cây chuối" chỉ một loài cây.' },
    { sec: 'Từ chỉ người', name: 'Câu 4', pts: 1, text: 'Từ nào chỉ người trong gia đình?', opts: o4('ông', 'mèo', 'bàn', 'hoa'), ans: 'A', why: '"ông" chỉ người trong gia đình.' },
    { sec: 'Từ chỉ màu sắc', name: 'Câu 5', pts: 1, text: 'Từ nào chỉ màu sắc?', opts: o4('xanh', 'chạy', 'bàn', 'cá'), ans: 'A', why: '"xanh" là từ chỉ màu sắc.' },
    { sec: 'Từ chỉ hoạt động', name: 'Câu 6', pts: 1, text: 'Từ nào chỉ hoạt động?', opts: o4('chạy', 'bàn', 'đỏ', 'mèo'), ans: 'A', why: '"chạy" là từ chỉ hoạt động.' },
    { sec: 'Nhóm từ', name: 'Câu 7', pts: 1, text: '"Trường học, lớp học, cái bảng" là những từ chỉ gì?', opts: o4('vật và nơi ở trường', 'con vật', 'màu sắc', 'đồ ăn'), ans: 'A', why: 'Đó là những từ chỉ sự vật, nơi chốn ở trường học.' },
    { sec: 'Từ chỉ con vật', name: 'Câu 8', pts: 1, text: 'Từ nào chỉ con vật sống dưới nước?', opts: o4('cá', 'gà', 'chó', 'mèo'), ans: 'A', why: '"cá" là con vật sống dưới nước.' },
    { sec: 'Từ chỉ quả', name: 'Câu 9', pts: 1, text: 'Từ nào chỉ một loại quả?', opts: o4('quả cam', 'cái bàn', 'con chó', 'chạy nhảy'), ans: 'A', why: '"quả cam" chỉ một loại quả.' },
    { sec: 'Từ chỉ đồ chơi', name: 'Câu 10', pts: 1, text: 'Từ nào chỉ một thứ đồ chơi?', opts: o4('quả bóng', 'quyển vở', 'cái bút', 'cái cặp'), ans: 'A', why: '"quả bóng" là đồ chơi; các từ kia là đồ dùng học tập.' },
  ],
},

/* ═══════════ ĐỀ 7 — ĐỌC HIỂU (1) ═══════════ */
{
  id: 6207, title: 'Đề 7 · Đọc hiểu câu ngắn', time: 15,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV1_R1, text: 'Nhà Nam nuôi con gì?', opts: o4('con chó', 'con mèo', 'con gà', 'con cá'), ans: 'B', why: 'Bài đọc: "Nhà Nam có một con mèo."' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV1_R1, text: 'Con mèo có lông màu gì?', opts: o4('vàng', 'đen', 'trắng', 'nâu'), ans: 'A', why: 'Bài đọc: "Mèo lông vàng, mắt tròn."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV1_R1, text: 'Con mèo thích làm gì?', opts: o4('bắt chuột', 'bơi lội', 'gáy sáng', 'kéo xe'), ans: 'A', why: 'Bài đọc: "Mèo rất thích bắt chuột."' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV1_R1, text: 'Ai rất yêu con mèo?', opts: o4('Lan', 'Nam', 'bà', 'mẹ'), ans: 'B', why: 'Bài đọc: "Nam yêu mèo lắm."' },
    { sec: 'Đọc hiểu', name: 'Câu 5', pts: 1, read: TV1_R1, text: 'Mắt con mèo như thế nào?', opts: o4('tròn', 'dài', 'nhỏ xíu', 'vuông'), ans: 'A', why: 'Bài đọc: "Mèo lông vàng, mắt tròn."' },
    { sec: 'Đọc hiểu', name: 'Câu 6', pts: 1, read: TV1_R2, text: 'Trời hôm đó như thế nào?', opts: o4('mưa to', 'nắng to', 'có tuyết', 'nhiều gió'), ans: 'A', why: 'Bài đọc: "Trời mưa to."' },
    { sec: 'Đọc hiểu', name: 'Câu 7', pts: 1, read: TV1_R2, text: 'Lan lấy gì để che cho bà?', opts: o4('cái ô (dù)', 'cái nón', 'chiếc khăn', 'cái áo'), ans: 'A', why: 'Bài đọc: "Lan lấy ô che cho bà."' },
    { sec: 'Đọc hiểu', name: 'Câu 8', pts: 1, read: TV1_R2, text: 'Lan che ô cho ai?', opts: o4('cho bà', 'cho mẹ', 'cho bạn', 'cho em'), ans: 'A', why: 'Bài đọc: "Lan lấy ô che cho bà."' },
    { sec: 'Đọc hiểu', name: 'Câu 9', pts: 1, read: TV1_R2, text: 'Ai được bà khen ngoan?', opts: o4('Lan', 'Nam', 'em bé', 'bố'), ans: 'A', why: 'Bài đọc: "Bà khen Lan ngoan."' },
    { sec: 'Đọc hiểu', name: 'Câu 10', pts: 1, read: TV1_R2, text: 'Việc làm của Lan cho thấy Lan là người thế nào?', opts: o4('ngoan, biết thương bà', 'lười biếng', 'ham chơi', 'hay khóc'), ans: 'A', why: 'Lan che ô cho bà, được bà khen ngoan — Lan biết thương bà.' },
  ],
},

/* ═══════════ ĐỀ 8 — ĐỌC HIỂU (2) ═══════════ */
{
  id: 6208, title: 'Đề 8 · Đọc hiểu đoạn ngắn', time: 15,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV1_R3, text: 'Vườn nhà em có nhiều gì?', opts: o4('cây', 'cá', 'gà', 'xe'), ans: 'A', why: 'Bài đọc: "Vườn nhà em có nhiều cây."' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV1_R3, text: 'Cây bưởi ra hoa màu gì?', opts: o4('trắng', 'vàng', 'đỏ', 'tím'), ans: 'A', why: 'Bài đọc: "Cây bưởi ra hoa trắng."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV1_R3, text: 'Quả cam chín có màu gì?', opts: o4('vàng', 'xanh', 'trắng', 'đen'), ans: 'A', why: 'Bài đọc: "Cây cam có quả chín vàng."' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV1_R3, text: 'Con gì hót trên cành cây?', opts: o4('chim', 'gà', 'mèo', 'cá'), ans: 'A', why: 'Bài đọc: "Chim hót líu lo trên cành."' },
    { sec: 'Đọc hiểu', name: 'Câu 5', pts: 1, read: TV1_R3, text: 'Chim hót như thế nào?', opts: o4('líu lo', 'ồm ồm', 'khàn khàn', 'the thé'), ans: 'A', why: 'Bài đọc: "Chim hót líu lo trên cành."' },
    { sec: 'Đọc hiểu', name: 'Câu 6', pts: 1, read: TV1_R4, text: 'Sáng nay bạn nhỏ dậy thế nào?', opts: o4('dậy sớm', 'dậy muộn', 'không dậy', 'ngủ tiếp'), ans: 'A', why: 'Bài đọc: "Sáng nay, em dậy sớm."' },
    { sec: 'Đọc hiểu', name: 'Câu 7', pts: 1, read: TV1_R4, text: 'Sau khi dậy, bạn nhỏ làm gì?', opts: o4('đánh răng, rửa mặt', 'đi ngủ tiếp', 'xem ti vi', 'chạy ra đường'), ans: 'A', why: 'Bài đọc: "Em đánh răng, rửa mặt."' },
    { sec: 'Đọc hiểu', name: 'Câu 8', pts: 1, read: TV1_R4, text: 'Ăn sáng xong bạn nhỏ đi đâu?', opts: o4('đi học', 'đi chơi', 'đi chợ', 'về quê'), ans: 'A', why: 'Bài đọc: "Em ăn sáng rồi đi học."' },
    { sec: 'Đọc hiểu', name: 'Câu 9', pts: 1, read: TV1_R4, text: 'Trước khi đi, bạn nhỏ làm gì?', opts: o4('chào bố mẹ', 'quên chào', 'khóc nhè', 'ngủ tiếp'), ans: 'A', why: 'Bài đọc: "Em chào bố mẹ trước khi đi."' },
    { sec: 'Đọc hiểu', name: 'Câu 10', pts: 1, read: TV1_R4, text: 'Bạn nhỏ trong bài là người thế nào?', opts: o4('ngoan, tự giác', 'lười biếng', 'ham chơi', 'hay ngủ nướng'), ans: 'A', why: 'Bạn tự dậy sớm, vệ sinh, ăn sáng và chào bố mẹ — rất ngoan và tự giác.' },
  ],
},

/* ═══════════ ĐỀ 9 — CÂU VÀ DẤU CÂU ═══════════ */
{
  id: 6209, title: 'Đề 9 · Câu và dấu câu', time: 15,
  questions: [
    { sec: 'Dấu câu', name: 'Câu 1', pts: 1, text: 'Cuối câu kể thường dùng dấu gì?', opts: o4('dấu chấm', 'dấu chấm hỏi', 'dấu phẩy', 'dấu hai chấm'), ans: 'A', why: 'Cuối câu kể dùng dấu chấm.' },
    { sec: 'Dấu câu', name: 'Câu 2', pts: 1, text: 'Cuối câu hỏi dùng dấu gì?', opts: o4('dấu chấm', 'dấu chấm hỏi', 'dấu chấm than', 'dấu phẩy'), ans: 'B', why: 'Cuối câu hỏi dùng dấu chấm hỏi.' },
    { sec: 'Nhận biết câu', name: 'Câu 3', pts: 1, text: 'Câu nào là câu hỏi?', opts: o4('Bạn tên là gì?', 'Em đi học.', 'Trời nắng.', 'Mèo kêu meo meo.'), ans: 'A', why: '"Bạn tên là gì?" là câu hỏi, có từ để hỏi và dấu chấm hỏi.' },
    { sec: 'Dấu câu', name: 'Câu 4', pts: 1, text: 'Điền dấu thích hợp vào cuối: "Con mèo đang ngủ ___"', opts: o4('dấu chấm', 'dấu chấm hỏi', 'dấu phẩy', 'dấu hai chấm'), ans: 'A', why: 'Đây là câu kể nên kết thúc bằng dấu chấm.' },
    { sec: 'Viết hoa', name: 'Câu 5', pts: 1, text: 'Chữ cái đầu câu phải viết thế nào?', opts: o4('viết hoa', 'viết thường', 'viết nhỏ lại', 'viết nghiêng'), ans: 'A', why: 'Chữ cái đầu câu phải viết hoa.' },
    { sec: 'Viết câu', name: 'Câu 6', pts: 1, text: 'Cách viết nào đúng?', opts: o4('Hôm nay trời đẹp.', 'hôm nay trời đẹp.', 'Hôm nay trời đẹp', 'hôm nay trời đẹp'), ans: 'A', why: 'Câu đúng: viết hoa chữ đầu và có dấu chấm cuối câu.' },
    { sec: 'Sắp xếp câu', name: 'Câu 7', pts: 1, text: 'Sắp xếp các từ "đi / em / học" thành câu đúng:', opts: o4('Em đi học.', 'Đi học em.', 'Học em đi.', 'Em học đi.'), ans: 'A', why: 'Câu đúng, có nghĩa là "Em đi học."' },
    { sec: 'Viết hoa', name: 'Câu 8', pts: 1, text: 'Tên riêng của người phải viết thế nào?', opts: o4('viết hoa', 'viết thường', 'viết tắt', 'viết nghiêng'), ans: 'A', why: 'Tên riêng của người phải viết hoa (ví dụ: Nam, Lan).' },
    { sec: 'Dấu câu', name: 'Câu 9', pts: 1, text: 'Cuối câu "Ôi, đẹp quá ___" (bộc lộ cảm xúc) dùng dấu gì?', opts: o4('dấu chấm than', 'dấu chấm hỏi', 'dấu phẩy', 'dấu chấm'), ans: 'A', why: 'Câu bộc lộ cảm xúc mạnh dùng dấu chấm than.' },
    { sec: 'Viết câu', name: 'Câu 10', pts: 1, text: 'Câu nào viết đúng?', opts: o4('Em yêu mẹ.', 'em yêu mẹ.', 'Em yêu mẹ', 'em yêu mẹ'), ans: 'A', why: 'Câu đúng: viết hoa "Em" và có dấu chấm cuối câu.' },
  ],
},

/* ═══════════ ĐỀ 10 — ÔN TẬP TỔNG HỢP ═══════════ */
{
  id: 6210, title: 'Đề 10 · Ôn tập tổng hợp', time: 15,
  questions: [
    { sec: 'Âm đầu', name: 'Câu 1', pts: 1, text: 'Tiếng "phở" bắt đầu bằng âm nào?', opts: o4('ph', 'p', 'h', 'b'), ans: 'A', why: 'Tiếng "phở" bắt đầu bằng âm "ph".' },
    { sec: 'Chính tả', name: 'Câu 2', pts: 1, text: 'Cách viết nào đúng?', opts: o4('nghe nhạc', 'nge nhạc', 'nge nhac', 'nghe nhac'), ans: 'A', why: 'Trước "e" viết "ngh": nghe nhạc.' },
    { sec: 'Dấu thanh', name: 'Câu 3', pts: 1, text: 'Tiếng "mẹ" mang dấu gì?', opts: o4('sắc', 'huyền', 'nặng', 'hỏi'), ans: 'C', why: 'Tiếng "mẹ" mang dấu nặng.' },
    { sec: 'Vốn từ', name: 'Câu 4', pts: 1, text: 'Từ nào chỉ con vật?', opts: o4('bàn', 'chó', 'đỏ', 'chạy'), ans: 'B', why: '"chó" là từ chỉ con vật.' },
    { sec: 'Dấu câu', name: 'Câu 5', pts: 1, text: 'Cuối câu hỏi dùng dấu gì?', opts: o4('dấu chấm', 'dấu chấm hỏi', 'dấu phẩy', 'dấu chấm than'), ans: 'B', why: 'Cuối câu hỏi dùng dấu chấm hỏi.' },
    { sec: 'Chính tả', name: 'Câu 6', pts: 1, text: 'Cách viết nào đúng?', opts: o4('con trâu', 'con châu', 'con trchâu', 'con chrâu'), ans: 'A', why: 'Viết đúng là "con trâu".' },
    { sec: 'Vần', name: 'Câu 7', pts: 1, text: 'Tiếng "hoa" có vần gì?', opts: o4('oa', 'ao', 'oi', 'ua'), ans: 'A', why: 'Tiếng "hoa" có vần "oa".' },
    { sec: 'Viết hoa', name: 'Câu 8', pts: 1, text: 'Chữ cái đầu câu viết thế nào?', opts: o4('viết hoa', 'viết thường', 'viết nhỏ', 'viết nghiêng'), ans: 'A', why: 'Chữ đầu câu phải viết hoa.' },
    { sec: 'Vần', name: 'Câu 9', pts: 1, text: 'Vần "ang" có trong tiếng nào?', opts: o4('bàng', 'bi', 'cua', 'me'), ans: 'A', why: 'Tiếng "bàng" chứa vần "ang".' },
    { sec: 'Vốn từ', name: 'Câu 10', pts: 1, text: 'Từ nào chỉ màu sắc?', opts: o4('xanh', 'chạy', 'bàn', 'gà'), ans: 'A', why: '"xanh" là từ chỉ màu sắc.' },
  ],
},

];

SUBJECTS.push({
  id: 'tviet1', name: 'Tiếng Việt', short: 'Tiếng Việt 1', icon: '📖', grade: 1,
  exams: TV1_EXAMS, ready: true,
  heroTitle: 'Tiếng Việt lớp 1 — âm, vần, thanh, chính tả, vốn từ và đọc hiểu câu ngắn',
  heroMeta: '📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 15 phút mỗi đề &nbsp;•&nbsp; bám chương trình GDPT 2018',
});
