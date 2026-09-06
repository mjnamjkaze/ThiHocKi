// TIẾNG VIỆT — LỚP 1 (GDPT 2018)
// 30 đề × 10 câu = 300 câu. Mỗi câu 1 điểm — thang 10 — 15 phút mỗi đề.
//
// Bám chương trình lớp 1: nhận biết âm – vần – thanh; quy tắc chính tả (c/k, g/gh, ng/ngh,
// l/n, ch/tr, s/x); mở rộng vốn từ (từ chỉ sự vật, hoạt động, đặc điểm); đọc hiểu câu và
// đoạn ngắn; câu và dấu câu (dấu chấm, chấm hỏi, chấm than; viết hoa đầu câu).

const TV1_R1 = 'Nhà Nam có một con mèo. Mèo lông vàng, mắt tròn. Mèo rất thích bắt chuột. Nam yêu mèo lắm.';
const TV1_R2 = 'Trời mưa to. Lan lấy ô che cho bà. Hai bà cháu cùng về nhà. Bà khen Lan ngoan.';
const TV1_R3 = 'Vườn nhà em có nhiều cây. Cây bưởi ra hoa trắng. Cây cam có quả chín vàng. Chim hót líu lo trên cành.';
const TV1_R4 = 'Sáng nay, em dậy sớm. Em đánh răng, rửa mặt. Em ăn sáng rồi đi học. Em chào bố mẹ trước khi đi.';
const TV1_R5 = 'Bé Bi có con chó nhỏ. Chó tên là Đốm. Đốm hay chạy theo bé. Bé và Đốm chơi rất vui.';
const TV1_R6 = 'Mùa hè đến rồi. Nắng vàng trên sân. Ve kêu ra rả. Chúng em được nghỉ hè.';
const TV1_R7 = 'Bà em có vườn rau. Rau cải xanh mướt. Bà tưới rau mỗi sáng. Em giúp bà nhổ cỏ.';
const TV1_R8 = 'Lớp em có cô giáo hiền. Cô dạy em tập đọc. Cô dạy em tập viết. Em rất yêu cô.';

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

/* ═══════════ ĐỀ 11 — NHẬN BIẾT ÂM & VẦN ═══════════ */
{
  id: 8721, title: 'Đề 11 · Nhận biết âm và vần', time: 15,
  questions: [
    { sec: 'Âm đầu', name: 'Câu 1', pts: 1, text: 'Tiếng "trâu" bắt đầu bằng âm nào?', opts: o4('ch', 'tr', 't', 'r'), ans: 'B', why: 'Tiếng "trâu" bắt đầu bằng âm "tr".' },
    { sec: 'Âm đầu', name: 'Câu 2', pts: 1, text: 'Tiếng "nhà" bắt đầu bằng âm nào?', opts: o4('n', 'h', 'nh', 'a'), ans: 'C', why: 'Tiếng "nhà" bắt đầu bằng âm "nh".' },
    { sec: 'Vần', name: 'Câu 3', pts: 1, text: 'Tiếng "con" có vần gì?', opts: o4('on', 'om', 'ong', 'oi'), ans: 'A', why: 'Tiếng "con" có vần "on".' },
    { sec: 'Vần', name: 'Câu 4', pts: 1, text: 'Tiếng "núi" có vần gì?', opts: o4('ui', 'uy', 'ôi', 'oi'), ans: 'A', why: 'Tiếng "núi" có vần "ui".' },
    { sec: 'Âm đầu', name: 'Câu 5', pts: 1, text: 'Tiếng "khế" bắt đầu bằng âm nào?', opts: o4('k', 'h', 'kh', 'ê'), ans: 'C', why: 'Tiếng "khế" bắt đầu bằng âm "kh".' },
    { sec: 'Vần', name: 'Câu 6', pts: 1, text: 'Vần "inh" có trong tiếng nào?', opts: o4('kính', 'kem', 'cam', 'to'), ans: 'A', why: 'Tiếng "kính" chứa vần "inh".' },
    { sec: 'Âm đầu', name: 'Câu 7', pts: 1, text: 'Tiếng "thỏ" bắt đầu bằng âm nào?', opts: o4('t', 'h', 'th', 'ho'), ans: 'C', why: 'Tiếng "thỏ" bắt đầu bằng âm "th".' },
    { sec: 'Vần', name: 'Câu 8', pts: 1, text: 'Tiếng "voi" có vần gì?', opts: o4('oi', 'ơi', 'oa', 'ôi'), ans: 'A', why: 'Tiếng "voi" có vần "oi".' },
    { sec: 'Âm chung', name: 'Câu 9', pts: 1, text: 'Hai tiếng "chó" và "chim" có chung âm đầu nào?', opts: o4('c', 'ch', 'h', 'tr'), ans: 'B', why: 'Cả "chó" và "chim" đều bắt đầu bằng âm "ch".' },
    { sec: 'Vần', name: 'Câu 10', pts: 1, text: 'Vần "ươn" có trong tiếng nào?', opts: o4('vườn', 'vòng', 'vàng', 'vui'), ans: 'A', why: 'Tiếng "vườn" chứa vần "ươn".' },
  ],
},

/* ═══════════ ĐỀ 12 — ĐÁNH VẦN & GHÉP TIẾNG ═══════════ */
{
  id: 8722, title: 'Đề 12 · Đánh vần và ghép tiếng', time: 15,
  questions: [
    { sec: 'Ghép tiếng', name: 'Câu 1', pts: 1, text: 'Ghép âm "m" với vần "eo" được tiếng gì?', opts: o4('mèo', 'meo', 'may', 'moi'), ans: 'B', why: '"m" ghép với vần "eo" được tiếng "meo".' },
    { sec: 'Ghép tiếng', name: 'Câu 2', pts: 1, text: 'Ghép âm "l" với vần "a" và dấu sắc được tiếng gì?', opts: o4('la', 'là', 'lá', 'lả'), ans: 'C', why: '"l" + "a" + dấu sắc = "lá".' },
    { sec: 'Đánh vần', name: 'Câu 3', pts: 1, text: 'Đánh vần "bờ - a - ba" được tiếng gì?', opts: o4('ba', 'bo', 'be', 'bi'), ans: 'A', why: 'Đánh vần "bờ - a - ba" được tiếng "ba".' },
    { sec: 'Ghép tiếng', name: 'Câu 4', pts: 1, text: 'Ghép âm "c" với vần "ua" được tiếng gì?', opts: o4('cau', 'cua', 'cu', 'ca'), ans: 'B', why: '"c" ghép với vần "ua" được tiếng "cua".' },
    { sec: 'Đánh vần', name: 'Câu 5', pts: 1, text: 'Đánh vần "gờ - a - ga - huyền - gà" được tiếng gì?', opts: o4('ga', 'gá', 'gà', 'gả'), ans: 'C', why: 'Kết quả đánh vần là tiếng "gà".' },
    { sec: 'Ghép tiếng', name: 'Câu 6', pts: 1, text: 'Ghép âm "s" với vần "ao" được tiếng gì?', opts: o4('sao', 'sau', 'sai', 'so'), ans: 'A', why: '"s" ghép với vần "ao" được tiếng "sao".' },
    { sec: 'Ghép tiếng', name: 'Câu 7', pts: 1, text: 'Ghép âm "h" với vần "oa" được tiếng gì?', opts: o4('hoa', 'hao', 'hô', 'ha'), ans: 'A', why: '"h" ghép với vần "oa" được tiếng "hoa".' },
    { sec: 'Đánh vần', name: 'Câu 8', pts: 1, text: 'Tiếng "bàn" gồm những phần nào?', opts: o4('âm "b" và vần "an"', 'âm "a" và vần "bn"', 'âm "n" và vần "ba"', 'chỉ có vần "an"'), ans: 'A', why: 'Tiếng "bàn" gồm âm đầu "b", vần "an" và dấu huyền.' },
    { sec: 'Ghép tiếng', name: 'Câu 9', pts: 1, text: 'Ghép âm "n" với vần "ụ" (dấu nặng) được tiếng gì?', opts: o4('nu', 'nú', 'nù', 'nụ'), ans: 'D', why: '"n" + "u" + dấu nặng = "nụ".' },
    { sec: 'Ghép tiếng', name: 'Câu 10', pts: 1, text: 'Ghép âm "ph" với vần "ở" được tiếng gì?', opts: o4('phò', 'phó', 'phở', 'pho'), ans: 'C', why: '"ph" + "ơ" + dấu hỏi = "phở".' },
  ],
},

/* ═══════════ ĐỀ 13 — THANH ĐIỆU ═══════════ */
{
  id: 8723, title: 'Đề 13 · Thanh điệu', time: 15,
  questions: [
    { sec: 'Dấu thanh', name: 'Câu 1', pts: 1, text: 'Tiếng "vở" mang dấu thanh gì?', opts: o4('sắc', 'hỏi', 'ngã', 'nặng'), ans: 'B', why: 'Tiếng "vở" mang dấu hỏi.' },
    { sec: 'Dấu thanh', name: 'Câu 2', pts: 1, text: 'Tiếng "gỗ" mang dấu thanh gì?', opts: o4('hỏi', 'ngã', 'sắc', 'huyền'), ans: 'B', why: 'Tiếng "gỗ" mang dấu ngã.' },
    { sec: 'Dấu thanh', name: 'Câu 3', pts: 1, text: 'Tiếng "lá" mang dấu thanh gì?', opts: o4('huyền', 'nặng', 'sắc', 'hỏi'), ans: 'C', why: 'Tiếng "lá" mang dấu sắc.' },
    { sec: 'Dấu thanh', name: 'Câu 4', pts: 1, text: 'Tiếng "gà" mang dấu thanh gì?', opts: o4('huyền', 'sắc', 'ngã', 'nặng'), ans: 'A', why: 'Tiếng "gà" mang dấu huyền.' },
    { sec: 'Dấu thanh', name: 'Câu 5', pts: 1, text: 'Tiếng "cỏ" mang dấu thanh gì?', opts: o4('ngã', 'hỏi', 'sắc', 'nặng'), ans: 'B', why: 'Tiếng "cỏ" mang dấu hỏi.' },
    { sec: 'Thêm dấu', name: 'Câu 6', pts: 1, text: 'Thêm dấu nặng vào tiếng "ca" được tiếng gì?', opts: o4('cà', 'cá', 'cạ', 'cả'), ans: 'C', why: 'Thêm dấu nặng vào "ca" được "cạ".' },
    { sec: 'Thêm dấu', name: 'Câu 7', pts: 1, text: 'Thêm dấu ngã vào tiếng "co" được tiếng gì?', opts: o4('cò', 'cõ', 'có', 'cỏ'), ans: 'B', why: 'Thêm dấu ngã vào "co" được "cõ".' },
    { sec: 'Dấu thanh', name: 'Câu 8', pts: 1, text: 'Tiếng nào không có dấu (thanh ngang)?', opts: o4('bàn', 'bà', 'ba', 'bá'), ans: 'C', why: 'Tiếng "ba" không mang dấu, gọi là thanh ngang.' },
    { sec: 'Dấu thanh', name: 'Câu 9', pts: 1, text: 'Hai tiếng "cạ" và "mẹ" cùng mang dấu thanh nào?', opts: o4('hỏi', 'ngã', 'nặng', 'sắc'), ans: 'C', why: 'Cả "cạ" và "mẹ" đều mang dấu nặng.' },
    { sec: 'Dấu thanh', name: 'Câu 10', pts: 1, text: 'Tiếng nào mang dấu huyền?', opts: o4('mèo', 'mẹ', 'mé', 'mẻ'), ans: 'A', why: 'Tiếng "mèo" mang dấu huyền.' },
  ],
},

/* ═══════════ ĐỀ 14 — CHÍNH TẢ C/K, G/GH, NG/NGH ═══════════ */
{
  id: 8724, title: 'Đề 14 · Chính tả: c/k, g/gh, ng/ngh', time: 15,
  questions: [
    { sec: 'c/k', name: 'Câu 1', pts: 1, text: 'Điền chữ đúng: "con ___á" (dưới nước).', opts: o4('q', 'k', 'c', 'g'), ans: 'C', why: 'Trước "a" viết "c": con cá.' },
    { sec: 'c/k', name: 'Câu 2', pts: 1, text: 'Điền chữ đúng: "cái ___ẹo" (ngọt).', opts: o4('c', 'k', 'g', 'q'), ans: 'B', why: 'Trước "e" viết "k": cái kẹo.' },
    { sec: 'g/gh', name: 'Câu 3', pts: 1, text: 'Điền chữ đúng: "cái ___ế" (để ngồi).', opts: o4('gh', 'g', 'ng', 'k'), ans: 'A', why: 'Trước "ê" viết "gh": cái ghế.' },
    { sec: 'g/gh', name: 'Câu 4', pts: 1, text: 'Điền chữ đúng: "con ___à" (biết gáy).', opts: o4('gh', 'ngh', 'k', 'g'), ans: 'D', why: 'Trước "a" viết "g": con gà.' },
    { sec: 'ng/ngh', name: 'Câu 5', pts: 1, text: 'Điền chữ đúng: "lắng ___e".', opts: o4('ng', 'ngh', 'nh', 'g'), ans: 'B', why: 'Trước "e" viết "ngh": lắng nghe.' },
    { sec: 'ng/ngh', name: 'Câu 6', pts: 1, text: 'Điền chữ đúng: "___ôi sao" (bầu trời).', opts: o4('ngh', 'nh', 'ng', 's'), ans: 'C', why: 'Từ đúng là "ngôi sao", viết "ng" trước "ô".' },
    { sec: 'g/gh', name: 'Câu 7', pts: 1, text: 'Từ nào viết đúng?', opts: o4('gi bài', 'ghi bài', 'gy bài', 'kghi bài'), ans: 'B', why: 'Trước "i" viết "gh": ghi bài.' },
    { sec: 'c/k', name: 'Câu 8', pts: 1, text: 'Từ nào viết đúng?', opts: o4('cể chuyện', 'qể chuyện', 'gể chuyện', 'kể chuyện'), ans: 'D', why: 'Trước "ê" viết "k": kể chuyện.' },
    { sec: 'ng/ngh', name: 'Câu 9', pts: 1, text: 'Từ nào viết đúng?', opts: o4('suy nghĩ', 'suy ngĩ', 'suy nghỉ', 'suy ngỉ'), ans: 'A', why: 'Trước "i" viết "ngh": suy nghĩ.' },
    { sec: 'c/k', name: 'Câu 10', pts: 1, text: 'Từ nào viết đúng?', opts: o4('cây kầu', 'cây cầu', 'cây qầu', 'cây gầu'), ans: 'B', why: 'Trước "â" viết "c": cây cầu.' },
  ],
},

/* ═══════════ ĐỀ 15 — PHÂN BIỆT L / N ═══════════ */
{
  id: 8725, title: 'Đề 15 · Phân biệt l / n', time: 15,
  questions: [
    { sec: 'l/n', name: 'Câu 1', pts: 1, text: 'Từ nào viết đúng?', opts: o4('cái lồi', 'cái nồi', 'cái nlồi', 'cái lnồi'), ans: 'B', why: 'Viết đúng là "cái nồi".' },
    { sec: 'l/n', name: 'Câu 2', pts: 1, text: 'Từ nào viết đúng?', opts: o4('nửa cháy', 'lnửa cháy', 'lửa cháy', 'nlửa cháy'), ans: 'C', why: 'Viết đúng là "lửa cháy".' },
    { sec: 'l/n', name: 'Câu 3', pts: 1, text: 'Điền chữ đúng: "quả ___a" (loại quả).', opts: o4('l', 'n', 'nl', 'ln'), ans: 'B', why: 'Từ đúng là "quả na".' },
    { sec: 'l/n', name: 'Câu 4', pts: 1, text: 'Điền chữ đúng: "___á cây" (trên cành).', opts: o4('n', 'nl', 'ln', 'l'), ans: 'D', why: 'Từ đúng là "lá cây".' },
    { sec: 'l/n', name: 'Câu 5', pts: 1, text: 'Từ nào viết đúng?', opts: o4('nói chuyện', 'lói chuyện', 'nlói chuyện', 'lnói chuyện'), ans: 'A', why: 'Viết đúng là "nói chuyện".' },
    { sec: 'l/n', name: 'Câu 6', pts: 1, text: 'Từ nào viết đúng?', opts: o4('nạnh nẽo', 'lạnh lẽo', 'lạnh nẽo', 'nạnh lẽo'), ans: 'B', why: 'Viết đúng là "lạnh lẽo".' },
    { sec: 'l/n', name: 'Câu 7', pts: 1, text: 'Từ nào viết đúng?', opts: o4('lắng ấm', 'nlắng ấm', 'nắng ấm', 'lnắng ấm'), ans: 'C', why: 'Viết đúng là "nắng ấm".' },
    { sec: 'l/n', name: 'Câu 8', pts: 1, text: 'Điền chữ đúng: "cái ___ón" (đội che nắng).', opts: o4('l', 'n', 'nl', 'ln'), ans: 'B', why: 'Từ đúng là "cái nón".' },
    { sec: 'l/n', name: 'Câu 9', pts: 1, text: 'Điền chữ đúng: "___àng xóm" (nhà ở gần nhau).', opts: o4('n', 'nl', 'ln', 'l'), ans: 'D', why: 'Từ đúng là "làng xóm", viết bằng "l".' },
    { sec: 'l/n', name: 'Câu 10', pts: 1, text: 'Từ nào viết đúng?', opts: o4('con la', 'con na', 'con nla', 'con lna'), ans: 'A', why: '"con la" là một con vật; viết bằng "l".' },
  ],
},

/* ═══════════ ĐỀ 16 — ĐIỀN VẦN, ĐIỀN CHỮ ═══════════ */
{
  id: 8726, title: 'Đề 16 · Điền vần, điền chữ', time: 15,
  questions: [
    { sec: 'Điền vần', name: 'Câu 1', pts: 1, text: 'Điền vần đúng: "b___" để được tiếng "bàn".', opts: o4('am', 'ai', 'an', 'ang'), ans: 'C', why: '"b" + "an" + dấu huyền = "bàn".' },
    { sec: 'Điền vần', name: 'Câu 2', pts: 1, text: 'Điền vần đúng: "s___" để được tiếng "sông".', opts: o4('ong', 'ông', 'on', 'om'), ans: 'B', why: '"s" + "ông" = "sông".' },
    { sec: 'Điền vần', name: 'Câu 3', pts: 1, text: 'Điền vần đúng: "c___" để được tiếng "cây".', opts: o4('ay', 'ây', 'ai', 'ơi'), ans: 'B', why: '"c" + "ây" = "cây".' },
    { sec: 'Điền vần', name: 'Câu 4', pts: 1, text: 'Điền vần đúng: "m___" để được tiếng "mưa".', opts: o4('ua', 'ưa', 'ơa', 'ưu'), ans: 'B', why: '"m" + "ưa" = "mưa".' },
    { sec: 'Điền chữ', name: 'Câu 5', pts: 1, text: 'Điền chữ đúng: "___à" (người sinh ra mẹ).', opts: o4('m', 'n', 'l', 'b'), ans: 'D', why: '"b" + "à" = "bà".' },
    { sec: 'Điền vần', name: 'Câu 6', pts: 1, text: 'Điền vần đúng: "ch___" để được tiếng "chim".', opts: o4('in', 'inh', 'im', 'iêm'), ans: 'C', why: '"ch" + "im" = "chim".' },
    { sec: 'Điền chữ', name: 'Câu 7', pts: 1, text: 'Điền chữ đúng: "___á" (bơi dưới nước).', opts: o4('k', 'c', 'g', 'q'), ans: 'B', why: '"c" + "á" = "cá".' },
    { sec: 'Điền vần', name: 'Câu 8', pts: 1, text: 'Điền vần đúng: "h___" để được tiếng "hoa".', opts: o4('oa', 'ao', 'ua', 'oi'), ans: 'A', why: '"h" + "oa" = "hoa".' },
    { sec: 'Điền chữ', name: 'Câu 9', pts: 1, text: 'Điền chữ đúng: "cái ___út" (để viết).', opts: o4('p', 'd', 'v', 'b'), ans: 'D', why: '"b" + "út" = "bút".' },
    { sec: 'Điền vần', name: 'Câu 10', pts: 1, text: 'Điền vần đúng: "v___" để được tiếng "vườn".', opts: o4('ương', 'uôn', 'ườn', 'ơn'), ans: 'C', why: '"v" + "ườn" = "vườn".' },
  ],
},

/* ═══════════ ĐỀ 17 — TỪ CHỈ NGƯỜI, VẬT, CON VẬT, HOẠT ĐỘNG ═══════════ */
{
  id: 8727, title: 'Đề 17 · Từ chỉ người, vật, con vật, hoạt động', time: 15,
  questions: [
    { sec: 'Từ chỉ người', name: 'Câu 1', pts: 1, text: 'Từ nào chỉ người?', opts: o4('bàn', 'cô giáo', 'mèo', 'chạy'), ans: 'B', why: '"cô giáo" là từ chỉ người.' },
    { sec: 'Từ chỉ con vật', name: 'Câu 2', pts: 1, text: 'Từ nào chỉ con vật?', opts: o4('cái ghế', 'quả cam', 'con vịt', 'màu đỏ'), ans: 'C', why: '"con vịt" là từ chỉ con vật.' },
    { sec: 'Từ chỉ vật', name: 'Câu 3', pts: 1, text: 'Từ nào chỉ đồ vật?', opts: o4('nhảy', 'cái bảng', 'con gà', 'xanh'), ans: 'B', why: '"cái bảng" là từ chỉ đồ vật.' },
    { sec: 'Từ chỉ hoạt động', name: 'Câu 4', pts: 1, text: 'Từ nào chỉ hoạt động?', opts: o4('hát', 'bàn', 'đỏ', 'cá'), ans: 'A', why: '"hát" là từ chỉ hoạt động.' },
    { sec: 'Từ chỉ hoạt động', name: 'Câu 5', pts: 1, text: 'Từ nào chỉ hoạt động?', opts: o4('ghế', 'đọc', 'vàng', 'gà'), ans: 'B', why: '"đọc" là từ chỉ hoạt động.' },
    { sec: 'Từ chỉ người', name: 'Câu 6', pts: 1, text: 'Từ nào chỉ người trong gia đình?', opts: o4('con chó', 'bố', 'cái bàn', 'quả na'), ans: 'B', why: '"bố" là từ chỉ người trong gia đình.' },
    { sec: 'Từ chỉ con vật', name: 'Câu 7', pts: 1, text: 'Từ nào chỉ con vật biết bay?', opts: o4('cá', 'chim', 'chó', 'trâu'), ans: 'B', why: '"chim" là con vật biết bay.' },
    { sec: 'Từ chỉ vật', name: 'Câu 8', pts: 1, text: 'Từ nào chỉ đồ dùng học tập?', opts: o4('quyển vở', 'con mèo', 'chạy nhảy', 'màu tím'), ans: 'A', why: '"quyển vở" là đồ dùng học tập.' },
    { sec: 'Từ chỉ hoạt động', name: 'Câu 9', pts: 1, text: 'Trong câu "Em quét nhà", từ nào chỉ hoạt động?', opts: o4('Em', 'quét', 'nhà', 'Em quét'), ans: 'B', why: '"quét" là từ chỉ hoạt động.' },
    { sec: 'Phân loại', name: 'Câu 10', pts: 1, text: 'Từ "chạy, nhảy, hát" là những từ chỉ gì?', opts: o4('con vật', 'hoạt động', 'màu sắc', 'đồ vật'), ans: 'B', why: '"chạy, nhảy, hát" đều là từ chỉ hoạt động.' },
  ],
},

/* ═══════════ ĐỀ 18 — SỐ TIẾNG TRONG CÂU & DẤU CÂU ═══════════ */
{
  id: 8728, title: 'Đề 18 · Số tiếng trong câu và dấu câu', time: 15,
  questions: [
    { sec: 'Đếm tiếng', name: 'Câu 1', pts: 1, text: 'Câu "Em đi học" có mấy tiếng?', opts: o4('2 tiếng', '3 tiếng', '4 tiếng', '5 tiếng'), ans: 'B', why: 'Câu "Em / đi / học" có 3 tiếng.' },
    { sec: 'Đếm tiếng', name: 'Câu 2', pts: 1, text: 'Câu "Bé rất ngoan" có mấy tiếng?', opts: o4('3 tiếng', '2 tiếng', '4 tiếng', '5 tiếng'), ans: 'A', why: 'Câu "Bé / rất / ngoan" có 3 tiếng.' },
    { sec: 'Đếm tiếng', name: 'Câu 3', pts: 1, text: 'Câu "Con mèo bắt chuột" có mấy tiếng?', opts: o4('3 tiếng', '4 tiếng', '5 tiếng', '2 tiếng'), ans: 'B', why: 'Câu "Con / mèo / bắt / chuột" có 4 tiếng.' },
    { sec: 'Đếm tiếng', name: 'Câu 4', pts: 1, text: 'Từ "hoa" có mấy tiếng?', opts: o4('1 tiếng', '2 tiếng', '3 tiếng', '4 tiếng'), ans: 'A', why: '"hoa" là 1 tiếng.' },
    { sec: 'Dấu câu', name: 'Câu 5', pts: 1, text: 'Cuối câu kể "Trời nắng ___" dùng dấu gì?', opts: o4('dấu chấm', 'dấu chấm hỏi', 'dấu phẩy', 'dấu chấm than'), ans: 'A', why: 'Câu kể kết thúc bằng dấu chấm.' },
    { sec: 'Dấu câu', name: 'Câu 6', pts: 1, text: 'Cuối câu hỏi "Bạn học lớp mấy ___" dùng dấu gì?', opts: o4('dấu chấm', 'dấu chấm hỏi', 'dấu chấm than', 'dấu phẩy'), ans: 'B', why: 'Câu hỏi kết thúc bằng dấu chấm hỏi.' },
    { sec: 'Đếm tiếng', name: 'Câu 7', pts: 1, text: 'Câu "Mẹ nấu cơm" có mấy tiếng?', opts: o4('2 tiếng', '3 tiếng', '4 tiếng', '5 tiếng'), ans: 'B', why: 'Câu "Mẹ / nấu / cơm" có 3 tiếng.' },
    { sec: 'Dấu câu', name: 'Câu 8', pts: 1, text: 'Câu nào dùng dấu chấm hỏi?', opts: o4('Em yêu mẹ.', 'Ai gọi em đấy?', 'Trời mưa rồi.', 'Con mèo ngủ.'), ans: 'B', why: '"Ai gọi em đấy?" là câu hỏi nên dùng dấu chấm hỏi.' },
    { sec: 'Dấu câu', name: 'Câu 9', pts: 1, text: 'Cuối câu "Ôi, đẹp quá ___" dùng dấu gì?', opts: o4('dấu chấm than', 'dấu chấm', 'dấu chấm hỏi', 'dấu phẩy'), ans: 'A', why: 'Câu bộc lộ cảm xúc mạnh dùng dấu chấm than.' },
    { sec: 'Đếm tiếng', name: 'Câu 10', pts: 1, text: 'Câu "Bà kể chuyện cổ tích" có mấy tiếng?', opts: o4('4 tiếng', '5 tiếng', '3 tiếng', '6 tiếng'), ans: 'B', why: 'Câu "Bà / kể / chuyện / cổ / tích" có 5 tiếng.' },
  ],
},

/* ═══════════ ĐỀ 19 — ĐỌC HIỂU (3) ═══════════ */
{
  id: 8729, title: 'Đề 19 · Đọc hiểu: Bé Bi và con chó', time: 15,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV1_R5, text: 'Bé Bi có con gì?', opts: o4('con mèo', 'con chó', 'con gà', 'con cá'), ans: 'B', why: 'Bài đọc: "Bé Bi có con chó nhỏ."' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV1_R5, text: 'Con chó tên là gì?', opts: o4('Vàng', 'Mực', 'Đốm', 'Vện'), ans: 'C', why: 'Bài đọc: "Chó tên là Đốm."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV1_R5, text: 'Con chó nhỏ hay to?', opts: o4('to', 'nhỏ', 'rất to', 'khổng lồ'), ans: 'B', why: 'Bài đọc: "Bé Bi có con chó nhỏ."' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV1_R5, text: 'Đốm hay làm gì?', opts: o4('bắt chuột', 'gáy sáng', 'chạy theo bé', 'bơi lội'), ans: 'C', why: 'Bài đọc: "Đốm hay chạy theo bé."' },
    { sec: 'Đọc hiểu', name: 'Câu 5', pts: 1, read: TV1_R5, text: 'Bé và Đốm chơi thế nào?', opts: o4('buồn chán', 'khóc nhè', 'giận nhau', 'rất vui'), ans: 'D', why: 'Bài đọc: "Bé và Đốm chơi rất vui."' },
    { sec: 'Đọc hiểu', name: 'Câu 6', pts: 1, read: TV1_R6, text: 'Mùa nào đã đến?', opts: o4('mùa hè', 'mùa đông', 'mùa thu', 'mùa xuân'), ans: 'A', why: 'Bài đọc: "Mùa hè đến rồi."' },
    { sec: 'Đọc hiểu', name: 'Câu 7', pts: 1, read: TV1_R6, text: 'Nắng có màu gì?', opts: o4('xanh', 'vàng', 'đỏ', 'trắng'), ans: 'B', why: 'Bài đọc: "Nắng vàng trên sân."' },
    { sec: 'Đọc hiểu', name: 'Câu 8', pts: 1, read: TV1_R6, text: 'Con gì kêu ra rả?', opts: o4('gà', 'chim', 've', 'mèo'), ans: 'C', why: 'Bài đọc: "Ve kêu ra rả."' },
    { sec: 'Đọc hiểu', name: 'Câu 9', pts: 1, read: TV1_R6, text: 'Mùa hè các bạn nhỏ được gì?', opts: o4('đi học', 'thi cử', 'ở trong lớp', 'nghỉ hè'), ans: 'D', why: 'Bài đọc: "Chúng em được nghỉ hè."' },
    { sec: 'Đọc hiểu', name: 'Câu 10', pts: 1, read: TV1_R6, text: 'Tiếng ve kêu thường báo hiệu mùa nào?', opts: o4('mùa đông', 'mùa hè', 'mùa xuân', 'mùa thu'), ans: 'B', why: 'Tiếng ve kêu trong bài gắn với mùa hè.' },
  ],
},

/* ═══════════ ĐỀ 20 — ĐỌC HIỂU (4) ═══════════ */
{
  id: 8730, title: 'Đề 20 · Đọc hiểu: Vườn rau của bà', time: 15,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV1_R7, text: 'Bà em có gì?', opts: o4('vườn hoa', 'vườn rau', 'ao cá', 'chuồng gà'), ans: 'B', why: 'Bài đọc: "Bà em có vườn rau."' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV1_R7, text: 'Rau cải có màu gì?', opts: o4('vàng úa', 'đỏ tươi', 'xanh mướt', 'trắng'), ans: 'C', why: 'Bài đọc: "Rau cải xanh mướt."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV1_R7, text: 'Bà tưới rau khi nào?', opts: o4('mỗi tối', 'mỗi trưa', 'không tưới', 'mỗi sáng'), ans: 'D', why: 'Bài đọc: "Bà tưới rau mỗi sáng."' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV1_R7, text: 'Em giúp bà làm gì?', opts: o4('nhổ cỏ', 'nấu cơm', 'quét nhà', 'rửa bát'), ans: 'A', why: 'Bài đọc: "Em giúp bà nhổ cỏ."' },
    { sec: 'Đọc hiểu', name: 'Câu 5', pts: 1, read: TV1_R7, text: 'Bạn nhỏ trong bài là người thế nào?', opts: o4('lười biếng', 'chăm chỉ, biết giúp bà', 'ham chơi', 'hay khóc'), ans: 'B', why: 'Bạn giúp bà nhổ cỏ nên rất chăm chỉ và biết giúp đỡ.' },
    { sec: 'Đọc hiểu', name: 'Câu 6', pts: 1, read: TV1_R8, text: 'Lớp em có ai?', opts: o4('bác bảo vệ', 'chú công nhân', 'cô giáo hiền', 'bà bán hàng'), ans: 'C', why: 'Bài đọc: "Lớp em có cô giáo hiền."' },
    { sec: 'Đọc hiểu', name: 'Câu 7', pts: 1, read: TV1_R8, text: 'Cô dạy em điều gì đầu tiên trong bài?', opts: o4('tập hát', 'tập vẽ', 'tập bơi', 'tập đọc'), ans: 'D', why: 'Bài đọc: "Cô dạy em tập đọc."' },
    { sec: 'Đọc hiểu', name: 'Câu 8', pts: 1, read: TV1_R8, text: 'Cô còn dạy em làm gì nữa?', opts: o4('tập viết', 'nấu ăn', 'chăn trâu', 'trồng cây'), ans: 'A', why: 'Bài đọc: "Cô dạy em tập viết."' },
    { sec: 'Đọc hiểu', name: 'Câu 9', pts: 1, read: TV1_R8, text: 'Cô giáo là người thế nào?', opts: o4('dữ', 'hiền', 'lười', 'buồn'), ans: 'B', why: 'Bài đọc: "Lớp em có cô giáo hiền."' },
    { sec: 'Đọc hiểu', name: 'Câu 10', pts: 1, read: TV1_R8, text: 'Tình cảm của em với cô thế nào?', opts: o4('sợ cô', 'ghét cô', 'rất yêu cô', 'không thích'), ans: 'C', why: 'Bài đọc: "Em rất yêu cô."' },
  ],
},

/* ═══════════ ĐỀ 21 — SẮP XẾP THÀNH CÂU ═══════════ */
{
  id: 8731, title: 'Đề 21 · Sắp xếp thành câu', time: 15,
  questions: [
    { sec: 'Sắp xếp câu', name: 'Câu 1', pts: 1, text: 'Sắp xếp "mẹ / cơm / nấu" thành câu đúng:', opts: o4('Cơm nấu mẹ.', 'Mẹ nấu cơm.', 'Nấu mẹ cơm.', 'Mẹ cơm nấu.'), ans: 'B', why: 'Câu đúng, có nghĩa là "Mẹ nấu cơm."' },
    { sec: 'Sắp xếp câu', name: 'Câu 2', pts: 1, text: 'Sắp xếp "học / em / chăm" thành câu đúng:', opts: o4('Học chăm em.', 'Chăm em học.', 'Em chăm học.', 'Em học chăm.'), ans: 'C', why: 'Câu đúng là "Em chăm học."' },
    { sec: 'Sắp xếp câu', name: 'Câu 3', pts: 1, text: 'Sắp xếp "hót / chim / hay" thành câu đúng:', opts: o4('Hót chim hay.', 'Hay hót chim.', 'Chim hay hót.', 'Chim hót hay.'), ans: 'D', why: 'Câu đúng là "Chim hót hay."' },
    { sec: 'Sắp xếp câu', name: 'Câu 4', pts: 1, text: 'Sắp xếp "bà / yêu / em" thành câu đúng:', opts: o4('Em yêu bà.', 'Bà em yêu.', 'Yêu em bà.', 'Bà yêu em.'), ans: 'A', why: '"Em yêu bà." là câu đúng, có nghĩa.' },
    { sec: 'Sắp xếp câu', name: 'Câu 5', pts: 1, text: 'Sắp xếp "sân / chơi / bé" thành câu đúng:', opts: o4('Bé chơi sân.', 'Bé chơi ở sân.', 'Sân chơi bé.', 'Chơi bé sân.'), ans: 'B', why: 'Câu đủ nghĩa nhất là "Bé chơi ở sân."' },
    { sec: 'Sắp xếp câu', name: 'Câu 6', pts: 1, text: 'Sắp xếp "hoa / đẹp / rất" thành câu đúng:', opts: o4('Đẹp hoa rất.', 'Rất hoa đẹp.', 'Hoa rất đẹp.', 'Hoa đẹp rất.'), ans: 'C', why: 'Câu đúng là "Hoa rất đẹp."' },
    { sec: 'Sắp xếp câu', name: 'Câu 7', pts: 1, text: 'Sắp xếp "quét / em / nhà" thành câu đúng:', opts: o4('Nhà quét em.', 'Quét em nhà.', 'Em nhà quét.', 'Em quét nhà.'), ans: 'D', why: 'Câu đúng là "Em quét nhà."' },
    { sec: 'Sắp xếp câu', name: 'Câu 8', pts: 1, text: 'Sắp xếp "cá / bơi / con" thành câu đúng:', opts: o4('Con cá bơi.', 'Bơi con cá.', 'Cá con bơi.', 'Con bơi cá.'), ans: 'A', why: 'Câu đúng là "Con cá bơi."' },
    { sec: 'Sắp xếp câu', name: 'Câu 9', pts: 1, text: 'Sắp xếp "trời / xanh / rất" thành câu đúng:', opts: o4('Xanh trời rất.', 'Trời rất xanh.', 'Rất trời xanh.', 'Trời xanh rất.'), ans: 'B', why: 'Câu đúng là "Trời rất xanh."' },
    { sec: 'Sắp xếp câu', name: 'Câu 10', pts: 1, text: 'Câu nào đã được sắp xếp và viết đúng?', opts: o4('bé đọc sách', 'Đọc bé sách.', 'Bé đọc sách.', 'Sách đọc bé.'), ans: 'C', why: '"Bé đọc sách." đúng nghĩa, viết hoa đầu câu và có dấu chấm.' },
  ],
},

/* ═══════════ ĐỀ 22 — DẤU CHẤM & DẤU CHẤM HỎI ═══════════ */
{
  id: 8732, title: 'Đề 22 · Dấu chấm và dấu chấm hỏi', time: 15,
  questions: [
    { sec: 'Dấu câu', name: 'Câu 1', pts: 1, text: 'Câu "Em tên là Lan ___" điền dấu gì?', opts: o4('dấu chấm', 'dấu chấm hỏi', 'dấu phẩy', 'dấu chấm than'), ans: 'A', why: 'Đây là câu kể nên dùng dấu chấm.' },
    { sec: 'Dấu câu', name: 'Câu 2', pts: 1, text: 'Câu "Bạn tên là gì ___" điền dấu gì?', opts: o4('dấu chấm', 'dấu chấm hỏi', 'dấu phẩy', 'dấu chấm than'), ans: 'B', why: 'Đây là câu hỏi nên dùng dấu chấm hỏi.' },
    { sec: 'Nhận biết câu', name: 'Câu 3', pts: 1, text: 'Câu nào là câu hỏi?', opts: o4('Trời mưa to.', 'Bây giờ là mấy giờ?', 'Em đi ngủ.', 'Con mèo kêu.'), ans: 'B', why: '"Bây giờ là mấy giờ?" là câu hỏi.' },
    { sec: 'Nhận biết câu', name: 'Câu 4', pts: 1, text: 'Câu nào là câu kể?', opts: o4('Ai đang gọi em?', 'Em ăn cơm.', 'Bạn đi đâu đấy?', 'Cái gì thế?'), ans: 'B', why: '"Em ăn cơm." là câu kể.' },
    { sec: 'Dấu câu', name: 'Câu 5', pts: 1, text: 'Câu "Con có thích đi học không ___" điền dấu gì?', opts: o4('dấu chấm hỏi', 'dấu chấm', 'dấu phẩy', 'dấu chấm than'), ans: 'A', why: 'Câu hỏi có từ "không" ở cuối nên dùng dấu chấm hỏi.' },
    { sec: 'Dấu câu', name: 'Câu 6', pts: 1, text: 'Câu "Hôm nay trời nắng đẹp ___" điền dấu gì?', opts: o4('dấu chấm', 'dấu chấm hỏi', 'dấu hai chấm', 'dấu phẩy'), ans: 'A', why: 'Đây là câu kể nên dùng dấu chấm.' },
    { sec: 'Nhận biết câu', name: 'Câu 7', pts: 1, text: 'Từ nào thường xuất hiện trong câu hỏi?', opts: o4('gì, nào, đâu', 'và, với', 'rất, quá', 'này, kia'), ans: 'A', why: 'Các từ "gì, nào, đâu" thường dùng để hỏi.' },
    { sec: 'Dấu câu', name: 'Câu 8', pts: 1, text: 'Câu "Mẹ ơi, mẹ về rồi ___" (reo mừng) điền dấu gì?', opts: o4('dấu chấm than', 'dấu chấm', 'dấu chấm hỏi', 'dấu phẩy'), ans: 'A', why: 'Câu reo mừng, cảm xúc mạnh dùng dấu chấm than.' },
    { sec: 'Nhận biết câu', name: 'Câu 9', pts: 1, text: 'Câu nào viết đúng dấu?', opts: o4('Bạn học lớp mấy?', 'Bạn học lớp mấy.', 'bạn học lớp mấy?', 'Bạn học lớp mấy'), ans: 'A', why: 'Câu hỏi viết hoa đầu câu và có dấu chấm hỏi.' },
    { sec: 'Dấu câu', name: 'Câu 10', pts: 1, text: 'Câu "Em rất yêu ông bà ___" điền dấu gì?', opts: o4('dấu chấm', 'dấu chấm hỏi', 'dấu phẩy', 'dấu hai chấm'), ans: 'A', why: 'Đây là câu kể nên dùng dấu chấm.' },
  ],
},

/* ═══════════ ĐỀ 23 — MỞ RỘNG VỐN TỪ (2) ═══════════ */
{
  id: 8733, title: 'Đề 23 · Mở rộng vốn từ', time: 15,
  questions: [
    { sec: 'Từ chỉ đặc điểm', name: 'Câu 1', pts: 1, text: 'Từ nào chỉ đặc điểm (tính chất)?', opts: o4('bàn', 'cao', 'chạy', 'gà'), ans: 'B', why: '"cao" là từ chỉ đặc điểm.' },
    { sec: 'Từ trái nghĩa', name: 'Câu 2', pts: 1, text: 'Từ trái nghĩa với "cao" là gì?', opts: o4('to', 'dài', 'thấp', 'rộng'), ans: 'C', why: '"thấp" trái nghĩa với "cao".' },
    { sec: 'Từ trái nghĩa', name: 'Câu 3', pts: 1, text: 'Từ trái nghĩa với "nóng" là gì?', opts: o4('ấm', 'khô', 'ướt', 'lạnh'), ans: 'D', why: '"lạnh" trái nghĩa với "nóng".' },
    { sec: 'Từ chỉ màu sắc', name: 'Câu 4', pts: 1, text: 'Từ nào chỉ màu sắc?', opts: o4('đỏ', 'hát', 'bàn', 'gà'), ans: 'A', why: '"đỏ" là từ chỉ màu sắc.' },
    { sec: 'Từ trái nghĩa', name: 'Câu 5', pts: 1, text: 'Từ trái nghĩa với "to" là gì?', opts: o4('dài', 'nhỏ', 'cao', 'rộng'), ans: 'B', why: '"nhỏ" trái nghĩa với "to".' },
    { sec: 'Nhóm từ', name: 'Câu 6', pts: 1, text: 'Từ nào KHÔNG cùng nhóm với các từ còn lại?', opts: o4('chó', 'mèo', 'gà', 'bàn'), ans: 'D', why: '"chó, mèo, gà" là con vật; "bàn" là đồ vật nên khác nhóm.' },
    { sec: 'Nhóm từ', name: 'Câu 7', pts: 1, text: 'Từ nào KHÔNG cùng nhóm với các từ còn lại?', opts: o4('đỏ', 'xanh', 'chạy', 'vàng'), ans: 'C', why: '"đỏ, xanh, vàng" là màu sắc; "chạy" là hoạt động nên khác nhóm.' },
    { sec: 'Từ chỉ quả', name: 'Câu 8', pts: 1, text: 'Từ nào chỉ một loại quả?', opts: o4('cái ghế', 'con gà', 'chạy nhảy', 'quả chuối'), ans: 'D', why: '"quả chuối" chỉ một loại quả.' },
    { sec: 'Từ chỉ thời tiết', name: 'Câu 9', pts: 1, text: 'Từ nào chỉ thời tiết?', opts: o4('nắng', 'bàn', 'chó', 'bút'), ans: 'A', why: '"nắng" là từ chỉ thời tiết.' },
    { sec: 'Từ trái nghĩa', name: 'Câu 10', pts: 1, text: 'Từ trái nghĩa với "sạch" là gì?', opts: o4('đẹp', 'bẩn', 'mới', 'khô'), ans: 'B', why: '"bẩn" trái nghĩa với "sạch".' },
  ],
},

/* ═══════════ ĐỀ 24 — CHÍNH TẢ TỔNG HỢP ═══════════ */
{
  id: 8734, title: 'Đề 24 · Chính tả tổng hợp', time: 15,
  questions: [
    { sec: 'Chính tả', name: 'Câu 1', pts: 1, text: 'Từ nào viết đúng?', opts: o4('cây kầu', 'cây cầu', 'cây qầu', 'cây gầu'), ans: 'B', why: 'Trước "â" viết "c": cây cầu.' },
    { sec: 'Chính tả', name: 'Câu 2', pts: 1, text: 'Từ nào viết đúng?', opts: o4('gế gỗ', 'ghế gổ', 'ghế gỗ', 'kế gỗ'), ans: 'C', why: 'Trước "ê" viết "gh": ghế gỗ.' },
    { sec: 'Chính tả', name: 'Câu 3', pts: 1, text: 'Từ nào viết đúng?', opts: o4('ngỉ ngơi', 'nghỉ ngơỉ', 'ngĩ ngơi', 'nghỉ ngơi'), ans: 'D', why: 'Trước "i" viết "ngh": nghỉ ngơi.' },
    { sec: 'Chính tả', name: 'Câu 4', pts: 1, text: 'Từ nào viết đúng?', opts: o4('con trâu', 'con châu', 'con chrâu', 'con trchâu'), ans: 'A', why: 'Viết đúng là "con trâu".' },
    { sec: 'Chính tả', name: 'Câu 5', pts: 1, text: 'Từ nào viết đúng?', opts: o4('quyển xách', 'quyển sách', 'quyển sxách', 'quyển xsách'), ans: 'B', why: 'Viết đúng là "quyển sách".' },
    { sec: 'Chính tả', name: 'Câu 6', pts: 1, text: 'Từ nào viết đúng?', opts: o4('ná cờ', 'nlá cờ', 'lá cờ', 'lná cờ'), ans: 'C', why: 'Viết đúng là "lá cờ".' },
    { sec: 'Chính tả', name: 'Câu 7', pts: 1, text: 'Từ nào viết đúng?', opts: o4('cái céo', 'cái qéo', 'cái géo', 'cái kéo'), ans: 'D', why: 'Trước "e" viết "k": cái kéo.' },
    { sec: 'Chính tả', name: 'Câu 8', pts: 1, text: 'Từ nào viết đúng?', opts: o4('chú gà', 'chú ghà', 'chú kà', 'chú ngà'), ans: 'A', why: 'Trước "a" viết "g": chú gà.' },
    { sec: 'Chính tả', name: 'Câu 9', pts: 1, text: 'Từ nào viết đúng?', opts: o4('cây che', 'cây tre', 'cây chre', 'cây trche'), ans: 'B', why: 'Viết đúng là "cây tre".' },
    { sec: 'Chính tả', name: 'Câu 10', pts: 1, text: 'Từ nào viết đúng?', opts: o4('se buýt', 'sxe buýt', 'xe buýt', 'xse buýt'), ans: 'C', why: 'Viết đúng là "xe buýt".' },
  ],
},

/* ═══════════ ĐỀ 25 — VẦN (NÂNG CAO) ═══════════ */
{
  id: 8735, title: 'Đề 25 · Nhận biết vần', time: 15,
  questions: [
    { sec: 'Vần', name: 'Câu 1', pts: 1, text: 'Tiếng "kênh" có vần gì?', opts: o4('ên', 'ênh', 'êm', 'êng'), ans: 'B', why: 'Tiếng "kênh" có vần "ênh".' },
    { sec: 'Vần', name: 'Câu 2', pts: 1, text: 'Tiếng "uống" có vần gì?', opts: o4('uôn', 'uôm', 'uông', 'ương'), ans: 'C', why: 'Tiếng "uống" có vần "uông".' },
    { sec: 'Vần', name: 'Câu 3', pts: 1, text: 'Tiếng "cười" có vần gì?', opts: o4('uôi', 'ươi', 'ơi', 'ưi'), ans: 'B', why: 'Tiếng "cười" có vần "ươi".' },
    { sec: 'Vần', name: 'Câu 4', pts: 1, text: 'Tiếng "xoài" có vần gì?', opts: o4('oi', 'ai', 'oay', 'oai'), ans: 'D', why: 'Tiếng "xoài" có vần "oai".' },
    { sec: 'Vần', name: 'Câu 5', pts: 1, text: 'Tiếng "quạt" có vần gì?', opts: o4('at', 'ac', 'an', 'ap'), ans: 'A', why: 'Tiếng "quạt" có vần "at".' },
    { sec: 'Vần', name: 'Câu 6', pts: 1, text: 'Vần "iêu" có trong tiếng nào?', opts: o4('dê', 'da', 'diều', 'do'), ans: 'C', why: 'Tiếng "diều" chứa vần "iêu".' },
    { sec: 'Vần', name: 'Câu 7', pts: 1, text: 'Vần "ay" có trong tiếng nào?', opts: o4('mưa rơi', 'máy bay', 'con cá', 'quả na'), ans: 'B', why: 'Tiếng "máy" và "bay" chứa vần "ay".' },
    { sec: 'Vần', name: 'Câu 8', pts: 1, text: 'Tiếng "buồn" có vần gì?', opts: o4('uông', 'uôn', 'uôm', 'ôn'), ans: 'B', why: 'Tiếng "buồn" có vần "uôn".' },
    { sec: 'Vần', name: 'Câu 9', pts: 1, text: 'Tiếng "khoai" có vần gì?', opts: o4('oi', 'ai', 'oay', 'oai'), ans: 'D', why: 'Tiếng "khoai" có vần "oai".' },
    { sec: 'Vần', name: 'Câu 10', pts: 1, text: 'Hai tiếng "bàn" và "bàng" khác nhau ở vần nào?', opts: o4('"an" và "ang"', '"am" và "an"', '"ang" và "am"', 'giống nhau'), ans: 'A', why: '"bàn" có vần "an", "bàng" có vần "ang".' },
  ],
},

/* ═══════════ ĐỀ 26 — ĐỌC HIỂU (5) ═══════════ */
{
  id: 8736, title: 'Đề 26 · Đọc hiểu: Con mèo nhà Nam', time: 15,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV1_R1, text: 'Bài đọc nói về con vật nào?', opts: o4('con chó', 'con mèo', 'con gà', 'con trâu'), ans: 'B', why: 'Bài đọc nói về con mèo nhà Nam.' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV1_R1, text: 'Nhà Nam có mấy con mèo?', opts: o4('hai con', 'ba con', 'một con', 'nhiều con'), ans: 'C', why: 'Bài đọc: "Nhà Nam có một con mèo."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV1_R1, text: 'Lông mèo màu vàng, đúng hay sai?', opts: o4('sai', 'màu đen', 'màu trắng', 'đúng'), ans: 'D', why: 'Bài đọc: "Mèo lông vàng, mắt tròn." nên câu này đúng.' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV1_R1, text: 'Con mèo giúp ích gì?', opts: o4('bắt chuột', 'trông nhà', 'gáy sáng', 'kéo cày'), ans: 'A', why: 'Bài đọc: "Mèo rất thích bắt chuột."' },
    { sec: 'Đọc hiểu', name: 'Câu 5', pts: 1, read: TV1_R1, text: 'Từ nào trong bài chỉ tình cảm của Nam?', opts: o4('ghét', 'yêu', 'sợ', 'giận'), ans: 'B', why: 'Bài đọc: "Nam yêu mèo lắm."' },
    { sec: 'Đọc hiểu', name: 'Câu 6', pts: 1, read: TV1_R3, text: 'Vườn nhà bạn nhỏ trồng nhiều gì?', opts: o4('hoa hồng', 'rau', 'cây', 'lúa'), ans: 'C', why: 'Bài đọc: "Vườn nhà em có nhiều cây."' },
    { sec: 'Đọc hiểu', name: 'Câu 7', pts: 1, read: TV1_R3, text: 'Cây nào ra hoa trắng?', opts: o4('cây cam', 'cây chuối', 'cây na', 'cây bưởi'), ans: 'D', why: 'Bài đọc: "Cây bưởi ra hoa trắng."' },
    { sec: 'Đọc hiểu', name: 'Câu 8', pts: 1, read: TV1_R3, text: 'Quả cam chín màu gì?', opts: o4('vàng', 'xanh', 'đỏ', 'tím'), ans: 'A', why: 'Bài đọc: "Cây cam có quả chín vàng."' },
    { sec: 'Đọc hiểu', name: 'Câu 9', pts: 1, read: TV1_R3, text: 'Chim đậu ở đâu?', opts: o4('dưới đất', 'trên cành', 'trong nhà', 'trên mái'), ans: 'B', why: 'Bài đọc: "Chim hót líu lo trên cành."' },
    { sec: 'Đọc hiểu', name: 'Câu 10', pts: 1, read: TV1_R3, text: 'Khu vườn trong bài như thế nào?', opts: o4('buồn tẻ, trơ trụi', 'khô cằn', 'vui tươi, có nhiều cây và chim', 'không có cây'), ans: 'C', why: 'Vườn có nhiều cây, hoa, quả và chim hót nên rất vui tươi.' },
  ],
},

/* ═══════════ ĐỀ 27 — ĐỌC HIỂU (6) ═══════════ */
{
  id: 8737, title: 'Đề 27 · Đọc hiểu: Buổi sáng của em', time: 15,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV1_R4, text: 'Buổi sáng em dậy khi nào?', opts: o4('dậy muộn', 'dậy sớm', 'ngủ tiếp', 'không dậy'), ans: 'B', why: 'Bài đọc: "Sáng nay, em dậy sớm."' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV1_R4, text: 'Em làm gì để giữ vệ sinh?', opts: o4('ăn kẹo', 'xem ti vi', 'đánh răng, rửa mặt', 'chơi game'), ans: 'C', why: 'Bài đọc: "Em đánh răng, rửa mặt."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV1_R4, text: 'Em ăn gì trước khi đi học?', opts: o4('ăn tối', 'ăn trưa', 'không ăn', 'ăn sáng'), ans: 'D', why: 'Bài đọc: "Em ăn sáng rồi đi học."' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV1_R4, text: 'Em đi đâu?', opts: o4('đi học', 'đi chơi', 'đi chợ', 'về quê'), ans: 'A', why: 'Bài đọc: "Em ăn sáng rồi đi học."' },
    { sec: 'Đọc hiểu', name: 'Câu 5', pts: 1, read: TV1_R4, text: 'Trước khi đi, em chào ai?', opts: o4('hàng xóm', 'bố mẹ', 'cô giáo', 'bạn bè'), ans: 'B', why: 'Bài đọc: "Em chào bố mẹ trước khi đi."' },
    { sec: 'Đọc hiểu', name: 'Câu 6', pts: 1, read: TV1_R2, text: 'Vì sao Lan lấy ô?', opts: o4('vì trời nắng', 'vì trời lạnh', 'vì trời mưa to', 'vì đi chơi'), ans: 'C', why: 'Bài đọc: "Trời mưa to. Lan lấy ô che cho bà."' },
    { sec: 'Đọc hiểu', name: 'Câu 7', pts: 1, read: TV1_R2, text: 'Lan che ô cho ai?', opts: o4('cho mẹ', 'cho em', 'cho bạn', 'cho bà'), ans: 'D', why: 'Bài đọc: "Lan lấy ô che cho bà."' },
    { sec: 'Đọc hiểu', name: 'Câu 8', pts: 1, read: TV1_R2, text: 'Hai bà cháu cùng đi đâu?', opts: o4('cùng về nhà', 'cùng ra đồng', 'cùng đi chợ', 'cùng đi học'), ans: 'A', why: 'Bài đọc: "Hai bà cháu cùng về nhà."' },
    { sec: 'Đọc hiểu', name: 'Câu 9', pts: 1, read: TV1_R2, text: 'Bà khen Lan thế nào?', opts: o4('giỏi', 'ngoan', 'nhanh', 'khỏe'), ans: 'B', why: 'Bài đọc: "Bà khen Lan ngoan."' },
    { sec: 'Đọc hiểu', name: 'Câu 10', pts: 1, read: TV1_R2, text: 'Qua bài, em học được điều gì?', opts: o4('ham chơi', 'lười biếng', 'biết yêu thương, giúp đỡ bà', 'hay giận dỗi'), ans: 'C', why: 'Lan che ô cho bà, thể hiện sự yêu thương và giúp đỡ người thân.' },
  ],
},

/* ═══════════ ĐỀ 28 — THANH ĐIỆU & THÊM DẤU ═══════════ */
{
  id: 8738, title: 'Đề 28 · Thanh điệu và thêm dấu', time: 15,
  questions: [
    { sec: 'Thêm dấu', name: 'Câu 1', pts: 1, text: 'Thêm dấu hỏi vào tiếng "ca" được tiếng gì?', opts: o4('cà', 'cá', 'cả', 'cạ'), ans: 'C', why: 'Thêm dấu hỏi vào "ca" được "cả".' },
    { sec: 'Thêm dấu', name: 'Câu 2', pts: 1, text: 'Thêm dấu sắc vào tiếng "me" được tiếng gì?', opts: o4('mè', 'mé', 'mẻ', 'mẹ'), ans: 'B', why: 'Thêm dấu sắc vào "me" được "mé".' },
    { sec: 'Thêm dấu', name: 'Câu 3', pts: 1, text: 'Thêm dấu huyền vào tiếng "ga" được tiếng gì?', opts: o4('gà', 'gá', 'gả', 'gạ'), ans: 'A', why: 'Thêm dấu huyền vào "ga" được "gà".' },
    { sec: 'Thêm dấu', name: 'Câu 4', pts: 1, text: 'Thêm dấu nặng vào tiếng "me" được tiếng gì?', opts: o4('mè', 'mé', 'mẻ', 'mẹ'), ans: 'D', why: 'Thêm dấu nặng vào "me" được "mẹ".' },
    { sec: 'Dấu thanh', name: 'Câu 5', pts: 1, text: 'Tiếng "bút" mang dấu thanh gì?', opts: o4('huyền', 'sắc', 'hỏi', 'nặng'), ans: 'B', why: 'Tiếng "bút" mang dấu sắc.' },
    { sec: 'Dấu thanh', name: 'Câu 6', pts: 1, text: 'Tiếng "vịt" mang dấu thanh gì?', opts: o4('hỏi', 'ngã', 'nặng', 'sắc'), ans: 'C', why: 'Tiếng "vịt" mang dấu nặng.' },
    { sec: 'Dấu thanh', name: 'Câu 7', pts: 1, text: 'Tiếng "cửa" mang dấu thanh gì?', opts: o4('hỏi', 'ngã', 'sắc', 'huyền'), ans: 'A', why: 'Tiếng "cửa" mang dấu hỏi.' },
    { sec: 'Dấu thanh', name: 'Câu 8', pts: 1, text: 'Tiếng "dừa" mang dấu thanh gì?', opts: o4('huyền', 'sắc', 'hỏi', 'ngã'), ans: 'A', why: 'Tiếng "dừa" mang dấu huyền.' },
    { sec: 'Thêm dấu', name: 'Câu 9', pts: 1, text: 'Thêm dấu ngã vào tiếng "ma" được tiếng gì?', opts: o4('mà', 'má', 'mã', 'mạ'), ans: 'C', why: 'Thêm dấu ngã vào "ma" được "mã".' },
    { sec: 'Dấu thanh', name: 'Câu 10', pts: 1, text: 'Tiếng nào mang thanh ngang (không dấu)?', opts: o4('hoa', 'hòa', 'hóa', 'hỏa'), ans: 'A', why: 'Tiếng "hoa" không mang dấu, là thanh ngang.' },
  ],
},

/* ═══════════ ĐỀ 29 — TỪ LOẠI & CÂU ═══════════ */
{
  id: 8739, title: 'Đề 29 · Từ loại và câu', time: 15,
  questions: [
    { sec: 'Từ loại', name: 'Câu 1', pts: 1, text: 'Trong câu "Con gà gáy", từ nào chỉ con vật?', opts: o4('con gà', 'gáy', 'con', 'gà gáy'), ans: 'A', why: '"con gà" là từ chỉ con vật.' },
    { sec: 'Từ loại', name: 'Câu 2', pts: 1, text: 'Trong câu "Bé hát rất hay", từ nào chỉ hoạt động?', opts: o4('bé', 'hát', 'rất', 'hay'), ans: 'B', why: '"hát" là từ chỉ hoạt động.' },
    { sec: 'Từ loại', name: 'Câu 3', pts: 1, text: 'Trong câu "Bông hoa đỏ thắm", từ nào chỉ màu sắc?', opts: o4('bông', 'hoa', 'đỏ', 'thắm'), ans: 'C', why: '"đỏ" là từ chỉ màu sắc.' },
    { sec: 'Từ loại', name: 'Câu 4', pts: 1, text: 'Trong câu "Mẹ đi chợ", từ nào chỉ người?', opts: o4('mẹ', 'đi', 'chợ', 'đi chợ'), ans: 'A', why: '"mẹ" là từ chỉ người.' },
    { sec: 'Đặt câu', name: 'Câu 5', pts: 1, text: 'Câu nào nói về hoạt động của em?', opts: o4('Em đọc sách.', 'Con mèo nhỏ.', 'Trời rất xanh.', 'Hoa màu đỏ.'), ans: 'A', why: '"Em đọc sách." nói về hoạt động "đọc" của em.' },
    { sec: 'Từ loại', name: 'Câu 6', pts: 1, text: 'Trong câu "Cái bàn màu nâu", từ nào chỉ đồ vật?', opts: o4('cái bàn', 'màu', 'nâu', 'màu nâu'), ans: 'A', why: '"cái bàn" là từ chỉ đồ vật.' },
    { sec: 'Đặt câu', name: 'Câu 7', pts: 1, text: 'Câu nào tả đặc điểm con vật?', opts: o4('Con voi rất to.', 'Em đi học.', 'Mẹ nấu cơm.', 'Bé quét nhà.'), ans: 'A', why: '"Con voi rất to." tả đặc điểm (to) của con voi.' },
    { sec: 'Từ loại', name: 'Câu 8', pts: 1, text: 'Từ nào chỉ đặc điểm?', opts: o4('nhanh', 'gà', 'bàn', 'chạy'), ans: 'A', why: '"nhanh" là từ chỉ đặc điểm.' },
    { sec: 'Đặt câu', name: 'Câu 9', pts: 1, text: 'Chọn câu hoàn chỉnh và đúng:', opts: o4('Chim hót líu lo.', 'chim hót líu lo', 'Hót chim líu lo.', 'Líu lo chim hót'), ans: 'A', why: 'Câu đúng: viết hoa đầu câu, đủ nghĩa, có dấu chấm.' },
    { sec: 'Từ loại', name: 'Câu 10', pts: 1, text: 'Trong câu "Quả bóng tròn", từ nào chỉ đặc điểm?', opts: o4('quả', 'bóng', 'tròn', 'quả bóng'), ans: 'C', why: '"tròn" là từ chỉ đặc điểm của quả bóng.' },
  ],
},

/* ═══════════ ĐỀ 30 — ÔN TẬP TỔNG HỢP (2) ═══════════ */
{
  id: 8740, title: 'Đề 30 · Ôn tập tổng hợp', time: 15,
  questions: [
    { sec: 'Âm đầu', name: 'Câu 1', pts: 1, text: 'Tiếng "nghé" bắt đầu bằng âm nào?', opts: o4('ng', 'ngh', 'nh', 'n'), ans: 'B', why: 'Tiếng "nghé" bắt đầu bằng âm "ngh".' },
    { sec: 'Vần', name: 'Câu 2', pts: 1, text: 'Tiếng "biển" có vần gì?', opts: o4('iên', 'in', 'iêm', 'iêng'), ans: 'A', why: 'Tiếng "biển" có vần "iên".' },
    { sec: 'Dấu thanh', name: 'Câu 3', pts: 1, text: 'Tiếng "vở" mang dấu thanh gì?', opts: o4('sắc', 'hỏi', 'ngã', 'nặng'), ans: 'B', why: 'Tiếng "vở" mang dấu hỏi.' },
    { sec: 'Chính tả', name: 'Câu 4', pts: 1, text: 'Từ nào viết đúng?', opts: o4('cái kẹo', 'cái cẹo', 'cái qẹo', 'cái gẹo'), ans: 'A', why: 'Trước "e" viết "k": cái kẹo.' },
    { sec: 'Vốn từ', name: 'Câu 5', pts: 1, text: 'Từ nào chỉ hoạt động?', opts: o4('bàn', 'nhảy', 'đỏ', 'gà'), ans: 'B', why: '"nhảy" là từ chỉ hoạt động.' },
    { sec: 'Dấu câu', name: 'Câu 6', pts: 1, text: 'Cuối câu hỏi dùng dấu gì?', opts: o4('dấu chấm', 'dấu chấm hỏi', 'dấu phẩy', 'dấu chấm than'), ans: 'B', why: 'Cuối câu hỏi dùng dấu chấm hỏi.' },
    { sec: 'Chính tả', name: 'Câu 7', pts: 1, text: 'Từ nào viết đúng?', opts: o4('lá cây', 'ná cây', 'nlá cây', 'lná cây'), ans: 'A', why: 'Viết đúng là "lá cây".' },
    { sec: 'Sắp xếp câu', name: 'Câu 8', pts: 1, text: 'Sắp xếp "em / mẹ / yêu" thành câu đúng:', opts: o4('Em yêu mẹ.', 'Mẹ em yêu.', 'Yêu em mẹ.', 'Em mẹ yêu.'), ans: 'A', why: 'Câu đúng là "Em yêu mẹ."' },
    { sec: 'Viết hoa', name: 'Câu 9', pts: 1, text: 'Câu nào viết đúng?', opts: o4('Bé đi chơi.', 'bé đi chơi.', 'Bé đi chơi', 'bé đi chơi'), ans: 'A', why: 'Câu đúng: viết hoa chữ đầu và có dấu chấm cuối câu.' },
    { sec: 'Vần', name: 'Câu 10', pts: 1, text: 'Tiếng "mưa" có vần gì?', opts: o4('ua', 'ưa', 'ưu', 'ơa'), ans: 'B', why: 'Tiếng "mưa" có vần "ưa".' },
  ],
},

];

SUBJECTS.push({
  id: 'tviet1', name: 'Tiếng Việt', short: 'Tiếng Việt 1', icon: '📖', grade: 1,
  exams: TV1_EXAMS, ready: true,
  heroTitle: 'Tiếng Việt lớp 1 — âm, vần, thanh, chính tả, vốn từ và đọc hiểu câu ngắn',
  heroMeta: '📚 30 đề &nbsp;•&nbsp; 300 câu &nbsp;•&nbsp; ⏱ 15 phút mỗi đề &nbsp;•&nbsp; bám chương trình GDPT 2018',
});
