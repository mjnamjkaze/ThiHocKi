// TIẾNG VIỆT — LỚP 4 (GDPT 2018)
// 10 đề × 10 câu = 100 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// Bám chương trình: đọc hiểu (truyện, thơ, văn bản thông tin); danh từ (chung – riêng),
// động từ, tính từ; từ đơn – từ ghép – từ láy; câu kể (Ai làm gì? / Ai thế nào? / Ai là gì?),
// câu hỏi – câu khiến – câu cảm; chủ ngữ – vị ngữ; dấu câu (hai chấm, ngoặc kép, gạch ngang);
// thành ngữ – tục ngữ.

const TV4_R1 = '<b>Giọt nước và biển cả</b><br>Một giọt nước nhỏ tự hào vì mình trong veo. Nó chê biển cả mặn chát, đục ngầu. Một hôm, trời nắng gắt, giọt nước bốc hơi rồi biến mất. Còn biển cả mênh mông vẫn ngày đêm cuộn sóng, nuôi sống bao loài tôm cá. Giọt nước nhỏ đâu biết rằng chính những giọt nước như nó, khi hoà vào nhau, mới làm nên biển cả bao la.';
const TV4_R2 = '<b>Chú sẻ và bông hoa bằng lăng</b><br>Bé Thơ bị ốm, phải nằm viện. Ở nhà, cây bằng lăng để dành một bông hoa cuối cùng tặng bé. Nhưng bông hoa nở cao quá, bé nằm trong phòng không nhìn thấy. Chú sẻ non thương bé, đã dồn hết sức đậu cho cành cong xuống, để bông hoa chúc thấp lọt vào đúng khung cửa sổ. Sáng ra, bé Thơ nhìn thấy bông hoa, reo lên sung sướng.';
const TV4_R3 = '<b>Tre Việt Nam</b> <i>(trích — Nguyễn Duy)</i><br>Tre xanh<br>Xanh tự bao giờ?<br>Chuyện ngày xưa... đã có bờ tre xanh.<br>Thân gầy guộc, lá mong manh<br>Mà sao nên luỹ nên thành tre ơi?<br>Ở đâu tre cũng xanh tươi<br>Cho dù đất sỏi đất vôi bạc màu.';
const TV4_R4 = '<b>Chim bồ câu</b><br>Bồ câu là loài chim hiền lành, thường sống thành đàn. Chúng nhớ đường rất tốt nên ngày xưa được dùng để đưa thư. Bồ câu ăn thóc, ngô và các loại hạt. Ở nhiều nơi, bồ câu trắng còn là biểu tượng của hoà bình.';

const TV4_EXAMS = [

/* ═══════════ ĐỀ 1 — ĐỌC HIỂU TRUYỆN ═══════════ */
{
  id: 6501, title: 'Đề 1 · Đọc hiểu truyện', time: 20,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV4_R1, text: 'Giọt nước nhỏ tự hào về điều gì?', opts: o4('Vì mình trong veo', 'Vì mình mặn chát', 'Vì mình to lớn', 'Vì mình nuôi cá'), ans: 'A', why: 'Bài đọc: "Một giọt nước nhỏ tự hào vì mình trong veo."' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV4_R1, text: 'Giọt nước chê biển cả như thế nào?', opts: o4('Mặn chát, đục ngầu', 'Trong veo', 'Nhỏ bé', 'Khô cạn'), ans: 'A', why: 'Bài đọc: "Nó chê biển cả mặn chát, đục ngầu."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV4_R1, text: 'Khi trời nắng gắt, điều gì xảy ra với giọt nước?', opts: o4('Bốc hơi rồi biến mất', 'Chảy ra biển', 'To lên', 'Đông thành đá'), ans: 'A', why: 'Bài đọc: "giọt nước bốc hơi rồi biến mất."' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV4_R1, text: 'Biển cả nuôi sống loài nào?', opts: o4('Bao loài tôm cá', 'Chim trời', 'Cây rừng', 'Trâu bò'), ans: 'A', why: 'Bài đọc: "nuôi sống bao loài tôm cá."' },
    { sec: 'Ý nghĩa', name: 'Câu 5', pts: 1, read: TV4_R1, text: 'Câu chuyện muốn khuyên ta điều gì?', opts: o4('Không nên kiêu căng; nhiều cái nhỏ hợp lại làm nên cái lớn', 'Nên sống một mình', 'Nước biển là vô ích', 'Giọt nước quan trọng nhất'), ans: 'A', why: 'Giọt nước kiêu căng rồi biến mất; chính các giọt nước hoà vào nhau mới nên biển cả.' },
    { sec: 'Đọc hiểu', name: 'Câu 6', pts: 1, read: TV4_R2, text: 'Vì sao bé Thơ phải nằm viện?', opts: o4('Vì bị ốm', 'Vì đi du lịch', 'Vì thăm bạn', 'Vì học bài'), ans: 'A', why: 'Bài đọc: "Bé Thơ bị ốm, phải nằm viện."' },
    { sec: 'Đọc hiểu', name: 'Câu 7', pts: 1, read: TV4_R2, text: 'Cây bằng lăng để dành bông hoa cuối cùng cho ai?', opts: o4('Cho bé Thơ', 'Cho chú sẻ', 'Cho bác sĩ', 'Cho mẹ bé'), ans: 'A', why: 'Bài đọc: cây bằng lăng "để dành một bông hoa cuối cùng tặng bé".' },
    { sec: 'Đọc hiểu', name: 'Câu 8', pts: 1, read: TV4_R2, text: 'Vì sao ban đầu bé không nhìn thấy bông hoa?', opts: o4('Vì hoa nở cao quá', 'Vì hoa nhỏ quá', 'Vì trời tối', 'Vì bé ngủ'), ans: 'A', why: 'Bài đọc: "bông hoa nở cao quá, bé... không nhìn thấy."' },
    { sec: 'Đọc hiểu', name: 'Câu 9', pts: 1, read: TV4_R2, text: 'Chú sẻ non đã làm gì để giúp bé?', opts: o4('Đậu cho cành cong xuống để hoa lọt vào cửa sổ', 'Hái hoa mang vào', 'Gọi bác sĩ', 'Hót cho bé vui'), ans: 'A', why: 'Chú sẻ dồn sức đậu cho cành cong xuống, để bông hoa chúc thấp vào khung cửa sổ.' },
    { sec: 'Ý nghĩa', name: 'Câu 10', pts: 1, read: TV4_R2, text: 'Chú sẻ non là người bạn như thế nào?', opts: o4('Tốt bụng, biết thương bạn', 'Ích kỉ', 'Lười biếng', 'Vô tâm'), ans: 'A', why: 'Chú sẻ dồn hết sức giúp bé nhìn thấy hoa — một người bạn tốt bụng, giàu tình thương.' },
  ],
},

/* ═══════════ ĐỀ 2 — ĐỌC HIỂU THƠ VÀ VĂN BẢN ═══════════ */
{
  id: 6502, title: 'Đề 2 · Đọc hiểu thơ và văn bản', time: 20,
  questions: [
    { sec: 'Đọc thơ', name: 'Câu 1', pts: 1, read: TV4_R3, text: 'Bài thơ nói về loài cây nào?', opts: o4('Cây tre', 'Cây chuối', 'Cây bàng', 'Cây dừa'), ans: 'A', why: 'Bài thơ có tên "Tre Việt Nam" và nói về cây tre.' },
    { sec: 'Đọc thơ', name: 'Câu 2', pts: 1, read: TV4_R3, text: 'Thân tre được miêu tả như thế nào?', opts: o4('Gầy guộc', 'To lớn', 'Mập mạp', 'Ngắn ngủn'), ans: 'A', why: 'Bài thơ: "Thân gầy guộc, lá mong manh".' },
    { sec: 'Đọc thơ', name: 'Câu 3', pts: 1, read: TV4_R3, text: 'Lá tre được miêu tả như thế nào?', opts: o4('Mong manh', 'Dày cứng', 'To bản', 'Sắc nhọn'), ans: 'A', why: 'Bài thơ: "Thân gầy guộc, lá mong manh".' },
    { sec: 'Đọc thơ', name: 'Câu 4', pts: 1, read: TV4_R3, text: 'Dù đất sỏi, đất vôi bạc màu, cây tre vẫn thế nào?', opts: o4('Xanh tươi', 'Héo úa', 'Chết khô', 'Vàng lá'), ans: 'A', why: 'Bài thơ: "Ở đâu tre cũng xanh tươi / Cho dù đất sỏi đất vôi bạc màu."' },
    { sec: 'Ý nghĩa', name: 'Câu 5', pts: 1, read: TV4_R3, text: 'Qua hình ảnh cây tre, tác giả ca ngợi phẩm chất gì của con người Việt Nam?', opts: o4('Sức sống bền bỉ, kiên cường, đoàn kết', 'Sự yếu đuối', 'Tính lười biếng', 'Sự ích kỉ'), ans: 'A', why: 'Tre gầy guộc mà "nên luỹ nên thành", xanh tươi trên đất cằn — tượng trưng cho sức sống bền bỉ, kiên cường của người Việt.' },
    { sec: 'Đọc văn bản', name: 'Câu 6', pts: 1, read: TV4_R4, text: 'Bồ câu là loài chim như thế nào?', opts: o4('Hiền lành, sống thành đàn', 'Hung dữ', 'Sống đơn độc', 'Chỉ sống một mình'), ans: 'A', why: 'Bài đọc: "Bồ câu là loài chim hiền lành, thường sống thành đàn."' },
    { sec: 'Đọc văn bản', name: 'Câu 7', pts: 1, read: TV4_R4, text: 'Ngày xưa, bồ câu được dùng để làm gì?', opts: o4('Đưa thư', 'Kéo xe', 'Giữ nhà', 'Bắt chuột'), ans: 'A', why: 'Bài đọc: "nhớ đường rất tốt nên ngày xưa được dùng để đưa thư."' },
    { sec: 'Đọc văn bản', name: 'Câu 8', pts: 1, read: TV4_R4, text: 'Bồ câu ăn thức ăn gì?', opts: o4('Thóc, ngô và các loại hạt', 'Thịt cá', 'Cỏ tươi', 'Sâu bọ'), ans: 'A', why: 'Bài đọc: "Bồ câu ăn thóc, ngô và các loại hạt."' },
    { sec: 'Đọc văn bản', name: 'Câu 9', pts: 1, read: TV4_R4, text: 'Bồ câu trắng là biểu tượng của điều gì?', opts: o4('Hoà bình', 'Chiến tranh', 'Giàu sang', 'May mắn'), ans: 'A', why: 'Bài đọc: "bồ câu trắng còn là biểu tượng của hoà bình."' },
    { sec: 'Đọc văn bản', name: 'Câu 10', pts: 1, read: TV4_R4, text: 'Nhờ đâu bồ câu có thể đưa thư?', opts: o4('Nhờ nhớ đường rất tốt', 'Nhờ bay nhanh nhất', 'Nhờ biết đọc chữ', 'Nhờ mắt tinh'), ans: 'A', why: 'Bài đọc nêu bồ câu "nhớ đường rất tốt" nên đưa thư được.' },
  ],
},

/* ═══════════ ĐỀ 3 — DANH TỪ ═══════════ */
{
  id: 6503, title: 'Đề 3 · Danh từ (chung và riêng)', time: 20,
  questions: [
    { sec: 'Danh từ', name: 'Câu 1', pts: 1, text: 'Danh từ là những từ chỉ gì?', opts: o4('Chỉ sự vật (người, vật, hiện tượng, khái niệm)', 'Chỉ hoạt động', 'Chỉ đặc điểm', 'Chỉ số lượng'), ans: 'A', why: 'Danh từ là từ chỉ người, vật, hiện tượng, khái niệm...' },
    { sec: 'Nhận biết', name: 'Câu 2', pts: 1, text: 'Từ nào là danh từ?', opts: o4('bàn', 'chạy', 'đẹp', 'nhanh'), ans: 'A', why: '"bàn" chỉ sự vật nên là danh từ; "chạy" là động từ, "đẹp/nhanh" là tính từ.' },
    { sec: 'Danh từ riêng', name: 'Câu 3', pts: 1, text: 'Danh từ riêng là gì?', opts: o4('Tên riêng của một sự vật (người, địa danh...)', 'Tên gọi chung của sự vật', 'Từ chỉ hoạt động', 'Từ chỉ màu sắc'), ans: 'A', why: 'Danh từ riêng là tên riêng của một người, một địa danh cụ thể.' },
    { sec: 'Danh từ riêng', name: 'Câu 4', pts: 1, text: 'Từ nào là danh từ riêng?', opts: o4('Hà Nội', 'sông', 'thành phố', 'núi'), ans: 'A', why: '"Hà Nội" là tên riêng của một thành phố nên là danh từ riêng.' },
    { sec: 'Quy tắc', name: 'Câu 5', pts: 1, text: 'Danh từ riêng phải được viết thế nào?', opts: o4('Viết hoa', 'Viết thường', 'Viết tắt', 'Viết nghiêng'), ans: 'A', why: 'Danh từ riêng phải viết hoa chữ cái đầu mỗi tiếng.' },
    { sec: 'Danh từ chung', name: 'Câu 6', pts: 1, text: 'Từ nào là danh từ chung?', opts: o4('học sinh', 'Lan', 'Việt Nam', 'Hồ Gươm'), ans: 'A', why: '"học sinh" gọi chung một loại người nên là danh từ chung.' },
    { sec: 'Nhận biết', name: 'Câu 7', pts: 1, text: 'Trong câu "Bạn Nam học rất giỏi.", danh từ riêng là từ nào?', opts: o4('Nam', 'Bạn', 'học', 'giỏi'), ans: 'A', why: '"Nam" là tên riêng của người nên là danh từ riêng.' },
    { sec: 'Loại danh từ', name: 'Câu 8', pts: 1, text: 'Các từ "tình yêu", "lòng biết ơn" là danh từ chỉ gì?', opts: o4('Khái niệm', 'Con vật', 'Đồ vật', 'Địa danh'), ans: 'A', why: 'Đó là danh từ chỉ khái niệm (cái không nhìn thấy, sờ được).' },
    { sec: 'Loại danh từ', name: 'Câu 9', pts: 1, text: 'Từ nào là danh từ chỉ hiện tượng tự nhiên?', opts: o4('mưa', 'bàn', 'chạy', 'đẹp'), ans: 'A', why: '"mưa" chỉ một hiện tượng tự nhiên.' },
    { sec: 'Viết đúng', name: 'Câu 10', pts: 1, text: 'Câu nào viết đúng danh từ riêng?', opts: o4('Em đi thăm Hồ Gươm.', 'Em đi thăm hồ gươm.', 'em đi thăm Hồ Gươm.', 'Em đi thăm hồ Gươm.'), ans: 'A', why: 'Tên riêng "Hồ Gươm" phải viết hoa cả hai tiếng, và chữ đầu câu cũng viết hoa.' },
  ],
},

/* ═══════════ ĐỀ 4 — ĐỘNG TỪ, TÍNH TỪ ═══════════ */
{
  id: 6504, title: 'Đề 4 · Động từ và tính từ', time: 20,
  questions: [
    { sec: 'Động từ', name: 'Câu 1', pts: 1, text: 'Động từ là những từ chỉ gì?', opts: o4('Hoạt động, trạng thái', 'Đặc điểm, tính chất', 'Sự vật', 'Số lượng'), ans: 'A', why: 'Động từ là từ chỉ hoạt động hoặc trạng thái của sự vật.' },
    { sec: 'Nhận biết', name: 'Câu 2', pts: 1, text: 'Từ nào là động từ?', opts: o4('chạy', 'bàn', 'xanh', 'đẹp'), ans: 'A', why: '"chạy" chỉ hoạt động nên là động từ.' },
    { sec: 'Tính từ', name: 'Câu 3', pts: 1, text: 'Tính từ là những từ chỉ gì?', opts: o4('Đặc điểm, tính chất', 'Hoạt động', 'Sự vật', 'Địa danh'), ans: 'A', why: 'Tính từ là từ chỉ đặc điểm, tính chất của sự vật, hoạt động.' },
    { sec: 'Nhận biết', name: 'Câu 4', pts: 1, text: 'Từ nào là tính từ?', opts: o4('đỏ', 'chạy', 'bàn', 'ăn'), ans: 'A', why: '"đỏ" chỉ đặc điểm (màu sắc) nên là tính từ.' },
    { sec: 'Trong câu', name: 'Câu 5', pts: 1, text: 'Trong câu "Bé cười tươi.", từ "cười" là từ loại gì?', opts: o4('Động từ', 'Tính từ', 'Danh từ', 'Số từ'), ans: 'A', why: '"cười" chỉ hoạt động nên là động từ.' },
    { sec: 'Trong câu', name: 'Câu 6', pts: 1, text: 'Trong cụm "bầu trời xanh", từ "xanh" là từ loại gì?', opts: o4('Tính từ', 'Động từ', 'Danh từ', 'Đại từ'), ans: 'A', why: '"xanh" chỉ đặc điểm màu sắc nên là tính từ.' },
    { sec: 'Trạng thái', name: 'Câu 7', pts: 1, text: 'Từ nào là động từ chỉ trạng thái?', opts: o4('yêu', 'bàn', 'đỏ', 'ba'), ans: 'A', why: '"yêu" chỉ trạng thái tình cảm nên là động từ chỉ trạng thái.' },
    { sec: 'Tìm từ', name: 'Câu 8', pts: 1, text: 'Động từ trong câu "Gió thổi mạnh." là từ nào?', opts: o4('thổi', 'Gió', 'mạnh', 'rất'), ans: 'A', why: '"thổi" chỉ hoạt động của gió nên là động từ.' },
    { sec: 'Tìm từ', name: 'Câu 9', pts: 1, text: 'Các tính từ trong câu "Con đường dài và rộng." là:', opts: o4('dài, rộng', 'con đường', 'và', 'con'), ans: 'A', why: '"dài" và "rộng" chỉ đặc điểm của con đường nên là tính từ.' },
    { sec: 'Nhận biết', name: 'Câu 10', pts: 1, text: 'Từ "nhanh nhẹn" là từ loại gì?', opts: o4('Tính từ', 'Động từ', 'Danh từ', 'Số từ'), ans: 'A', why: '"nhanh nhẹn" chỉ đặc điểm nên là tính từ.' },
  ],
},

/* ═══════════ ĐỀ 5 — TỪ ĐƠN, TỪ GHÉP, TỪ LÁY ═══════════ */
{
  id: 6505, title: 'Đề 5 · Từ đơn, từ ghép, từ láy', time: 20,
  questions: [
    { sec: 'Khái niệm', name: 'Câu 1', pts: 1, text: 'Từ phức là từ gồm mấy tiếng?', opts: o4('Hai tiếng trở lên', 'Chỉ một tiếng', 'Ba tiếng', 'Bốn tiếng'), ans: 'A', why: 'Từ phức gồm hai tiếng trở lên (gồm từ ghép và từ láy).' },
    { sec: 'Từ ghép', name: 'Câu 2', pts: 1, text: 'Từ ghép được tạo thành bằng cách nào?', opts: o4('Ghép các tiếng có nghĩa với nhau', 'Lặp lại âm của tiếng', 'Chỉ dùng một tiếng', 'Đảo ngược tiếng'), ans: 'A', why: 'Từ ghép do các tiếng có nghĩa ghép lại (ví dụ: xe đạp, nhà cửa).' },
    { sec: 'Từ láy', name: 'Câu 3', pts: 1, text: 'Từ láy là từ có đặc điểm gì?', opts: o4('Các tiếng lặp âm đầu, vần hoặc cả tiếng', 'Các tiếng đều có nghĩa riêng', 'Chỉ có một tiếng', 'Không có quy luật'), ans: 'A', why: 'Từ láy có sự lặp lại về âm đầu, vần hoặc cả tiếng (ví dụ: long lanh, xinh xắn).' },
    { sec: 'Nhận biết', name: 'Câu 4', pts: 1, text: 'Từ nào là từ ghép?', opts: o4('xe đạp', 'lấp lánh', 'xanh xao', 'ríu rít'), ans: 'A', why: '"xe đạp" gồm hai tiếng đều có nghĩa nên là từ ghép.' },
    { sec: 'Nhận biết', name: 'Câu 5', pts: 1, text: 'Từ nào là từ láy?', opts: o4('long lanh', 'hoa hồng', 'bàn ghế', 'sách vở'), ans: 'A', why: '"long lanh" lặp âm đầu "l" nên là từ láy.' },
    { sec: 'Phân loại', name: 'Câu 6', pts: 1, text: '"Nhà cửa" là từ ghép hay từ láy?', opts: o4('Từ ghép', 'Từ láy', 'Từ đơn', 'Không phải từ'), ans: 'A', why: '"nhà" và "cửa" đều có nghĩa nên "nhà cửa" là từ ghép.' },
    { sec: 'Phân loại', name: 'Câu 7', pts: 1, text: '"Xinh xắn" là từ ghép hay từ láy?', opts: o4('Từ láy', 'Từ ghép', 'Từ đơn', 'Danh từ riêng'), ans: 'A', why: '"xinh xắn" lặp âm đầu "x" nên là từ láy.' },
    { sec: 'Từ đơn', name: 'Câu 8', pts: 1, text: 'Từ nào là từ đơn?', opts: o4('nhà', 'bàn ghế', 'long lanh', 'quần áo'), ans: 'A', why: '"nhà" chỉ có một tiếng nên là từ đơn.' },
    { sec: 'Nghĩa từ láy', name: 'Câu 9', pts: 1, text: 'Từ láy "rì rào" gợi tả điều gì?', opts: o4('Âm thanh', 'Màu sắc', 'Mùi vị', 'Hình dáng'), ans: 'A', why: '"rì rào" gợi tả âm thanh (của gió, sóng, lá cây...).' },
    { sec: 'Loại trừ', name: 'Câu 10', pts: 1, text: 'Từ nào KHÔNG phải là từ láy?', opts: o4('cây cối', 'mênh mông', 'ríu rít', 'lung linh'), ans: 'A', why: '"cây cối" gồm hai tiếng đều có nghĩa nên là từ ghép, không phải từ láy.' },
  ],
},

/* ═══════════ ĐỀ 6 — CÂU KỂ ═══════════ */
{
  id: 6506, title: 'Đề 6 · Câu kể Ai làm gì? / Ai thế nào? / Ai là gì?', time: 20,
  questions: [
    { sec: 'Ai làm gì?', name: 'Câu 1', pts: 1, text: 'Câu "Bạn Lan đang quét nhà." thuộc kiểu câu kể nào?', opts: o4('Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Câu hỏi'), ans: 'A', why: 'Vị ngữ "đang quét nhà" chỉ hoạt động nên là câu kể "Ai làm gì?".' },
    { sec: 'Ai thế nào?', name: 'Câu 2', pts: 1, text: 'Câu "Bầu trời rất trong xanh." thuộc kiểu câu kể nào?', opts: o4('Ai thế nào?', 'Ai làm gì?', 'Ai là gì?', 'Câu khiến'), ans: 'A', why: 'Vị ngữ "rất trong xanh" chỉ đặc điểm nên là câu kể "Ai thế nào?".' },
    { sec: 'Ai là gì?', name: 'Câu 3', pts: 1, text: 'Câu "Hà Nội là thủ đô của nước ta." thuộc kiểu câu kể nào?', opts: o4('Ai là gì?', 'Ai làm gì?', 'Ai thế nào?', 'Câu cảm'), ans: 'A', why: 'Vị ngữ có từ "là" giới thiệu nên là câu kể "Ai là gì?".' },
    { sec: 'Vị ngữ', name: 'Câu 4', pts: 1, text: 'Trong câu kể "Ai làm gì?", vị ngữ chỉ điều gì?', opts: o4('Hoạt động', 'Đặc điểm', 'Sự giới thiệu', 'Số lượng'), ans: 'A', why: 'Câu kể "Ai làm gì?" có vị ngữ chỉ hoạt động.' },
    { sec: 'Vị ngữ', name: 'Câu 5', pts: 1, text: 'Trong câu kể "Ai thế nào?", vị ngữ chỉ điều gì?', opts: o4('Đặc điểm, trạng thái', 'Hoạt động', 'Tên gọi', 'Nơi chốn'), ans: 'A', why: 'Câu kể "Ai thế nào?" có vị ngữ chỉ đặc điểm, trạng thái.' },
    { sec: 'Ai là gì?', name: 'Câu 6', pts: 1, text: 'Câu kể "Ai là gì?" thường dùng từ nào để nối chủ ngữ với vị ngữ?', opts: o4('là', 'và', 'nhưng', 'nếu'), ans: 'A', why: 'Câu kể "Ai là gì?" thường có từ "là".' },
    { sec: 'Nhận biết', name: 'Câu 7', pts: 1, text: 'Câu "Đàn cò trắng bay lượn trên cánh đồng." thuộc kiểu nào?', opts: o4('Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Câu hỏi'), ans: 'A', why: 'Vị ngữ "bay lượn trên cánh đồng" chỉ hoạt động nên là "Ai làm gì?".' },
    { sec: 'Nhận biết', name: 'Câu 8', pts: 1, text: 'Câu "Mẹ em là bác sĩ." thuộc kiểu nào?', opts: o4('Ai là gì?', 'Ai làm gì?', 'Ai thế nào?', 'Câu cảm'), ans: 'A', why: 'Có từ "là" giới thiệu nghề nghiệp nên là câu kể "Ai là gì?".' },
    { sec: 'Nhận biết', name: 'Câu 9', pts: 1, text: 'Câu nào là câu kể "Ai thế nào?"?', opts: o4('Cây cối tươi tốt.', 'Em học bài.', 'Nam là học sinh.', 'Bạn quét nhà.'), ans: 'A', why: '"tươi tốt" chỉ đặc điểm nên "Cây cối tươi tốt." là câu kể "Ai thế nào?".' },
    { sec: 'Công dụng', name: 'Câu 10', pts: 1, text: 'Câu kể dùng để làm gì?', opts: o4('Kể, tả hoặc giới thiệu về sự vật', 'Chỉ để hỏi', 'Chỉ để ra lệnh', 'Chỉ bộc lộ cảm xúc'), ans: 'A', why: 'Câu kể dùng để kể, tả hoặc giới thiệu về sự vật, sự việc.' },
  ],
},

/* ═══════════ ĐỀ 7 — CÂU HỎI, CÂU KHIẾN, CÂU CẢM ═══════════ */
{
  id: 6507, title: 'Đề 7 · Câu hỏi, câu khiến, câu cảm', time: 20,
  questions: [
    { sec: 'Câu hỏi', name: 'Câu 1', pts: 1, text: 'Câu hỏi dùng để làm gì?', opts: o4('Hỏi về điều chưa biết', 'Ra lệnh', 'Bộc lộ cảm xúc', 'Kể chuyện'), ans: 'A', why: 'Câu hỏi (câu nghi vấn) dùng để hỏi về điều chưa biết.' },
    { sec: 'Dấu câu', name: 'Câu 2', pts: 1, text: 'Cuối câu hỏi dùng dấu gì?', opts: o4('Dấu chấm hỏi', 'Dấu chấm', 'Dấu chấm than', 'Dấu phẩy'), ans: 'A', why: 'Cuối câu hỏi dùng dấu chấm hỏi (?).' },
    { sec: 'Câu khiến', name: 'Câu 3', pts: 1, text: 'Câu khiến (cầu khiến) dùng để làm gì?', opts: o4('Nêu yêu cầu, đề nghị, mệnh lệnh', 'Hỏi điều chưa biết', 'Kể lại sự việc', 'Giới thiệu'), ans: 'A', why: 'Câu khiến dùng để nêu yêu cầu, đề nghị, mong muốn, mệnh lệnh.' },
    { sec: 'Nhận biết', name: 'Câu 4', pts: 1, text: 'Câu nào là câu khiến?', opts: o4('Cả lớp hãy trật tự!', 'Trời đẹp quá!', 'Bạn tên là gì?', 'Em đi học.'), ans: 'A', why: '"Cả lớp hãy trật tự!" nêu mệnh lệnh nên là câu khiến.' },
    { sec: 'Câu cảm', name: 'Câu 5', pts: 1, text: 'Câu cảm dùng để làm gì?', opts: o4('Bộc lộ cảm xúc', 'Hỏi điều chưa biết', 'Ra lệnh', 'Giới thiệu'), ans: 'A', why: 'Câu cảm dùng để bộc lộ cảm xúc (vui, buồn, ngạc nhiên...).' },
    { sec: 'Dấu câu', name: 'Câu 6', pts: 1, text: 'Cuối câu cảm thường dùng dấu gì?', opts: o4('Dấu chấm than', 'Dấu chấm hỏi', 'Dấu chấm', 'Dấu hai chấm'), ans: 'A', why: 'Cuối câu cảm thường dùng dấu chấm than (!).' },
    { sec: 'Nhận biết', name: 'Câu 7', pts: 1, text: 'Câu nào là câu cảm?', opts: o4('Ôi, đẹp quá!', 'Bạn đi đâu?', 'Em ăn cơm.', 'Hãy im lặng.'), ans: 'A', why: '"Ôi, đẹp quá!" bộc lộ cảm xúc nên là câu cảm.' },
    { sec: 'Từ ngữ', name: 'Câu 8', pts: 1, text: 'Từ ngữ nào thường mở đầu câu cảm?', opts: o4('Ôi, Chao ôi', 'là, và', 'nếu, thì', 'hãy, đừng'), ans: 'A', why: 'Câu cảm thường mở đầu bằng "Ôi", "Chao ôi", "Trời ơi"...' },
    { sec: 'Nhận biết', name: 'Câu 9', pts: 1, text: 'Câu "Bạn làm ơn cho tôi mượn bút." là kiểu câu gì?', opts: o4('Câu khiến', 'Câu hỏi', 'Câu cảm', 'Câu kể'), ans: 'A', why: 'Câu nêu lời đề nghị nhẹ nhàng nên là câu khiến.' },
    { sec: 'Nhận biết', name: 'Câu 10', pts: 1, text: 'Câu "Hôm nay là thứ mấy?" là kiểu câu gì?', opts: o4('Câu hỏi', 'Câu khiến', 'Câu cảm', 'Câu kể'), ans: 'A', why: 'Câu này hỏi điều chưa biết nên là câu hỏi.' },
  ],
},

/* ═══════════ ĐỀ 8 — CHỦ NGỮ, VỊ NGỮ ═══════════ */
{
  id: 6508, title: 'Đề 8 · Chủ ngữ và vị ngữ', time: 20,
  questions: [
    { sec: 'Khái niệm', name: 'Câu 1', pts: 1, text: 'Chủ ngữ thường trả lời cho câu hỏi nào?', opts: o4('Ai? (con gì, cái gì)', 'Làm gì?', 'Thế nào?', 'Ở đâu?'), ans: 'A', why: 'Chủ ngữ nêu sự vật, trả lời câu hỏi Ai? Con gì? Cái gì?' },
    { sec: 'Khái niệm', name: 'Câu 2', pts: 1, text: 'Vị ngữ thường trả lời cho câu hỏi nào?', opts: o4('Làm gì? Thế nào? Là gì?', 'Ai?', 'Ở đâu?', 'Khi nào?'), ans: 'A', why: 'Vị ngữ trả lời câu hỏi Làm gì? Thế nào? Là gì?' },
    { sec: 'Tìm chủ ngữ', name: 'Câu 3', pts: 1, text: 'Trong câu "Chim hót líu lo.", chủ ngữ là từ nào?', opts: o4('Chim', 'hót', 'líu lo', 'hót líu lo'), ans: 'A', why: '"Chim" là sự vật được nói đến nên là chủ ngữ.' },
    { sec: 'Tìm vị ngữ', name: 'Câu 4', pts: 1, text: 'Trong câu "Chim hót líu lo.", vị ngữ là bộ phận nào?', opts: o4('hót líu lo', 'Chim', 'líu', 'Chim hót'), ans: 'A', why: '"hót líu lo" nêu hoạt động của chim nên là vị ngữ.' },
    { sec: 'Tìm chủ ngữ', name: 'Câu 5', pts: 1, text: 'Trong câu "Bạn Lan rất chăm học.", chủ ngữ là:', opts: o4('Bạn Lan', 'rất chăm học', 'chăm', 'học'), ans: 'A', why: '"Bạn Lan" là người được nói đến nên là chủ ngữ.' },
    { sec: 'Tìm vị ngữ', name: 'Câu 6', pts: 1, text: 'Trong câu "Bạn Lan rất chăm học.", vị ngữ là:', opts: o4('rất chăm học', 'Bạn Lan', 'Lan', 'rất'), ans: 'A', why: '"rất chăm học" nêu đặc điểm của Lan nên là vị ngữ.' },
    { sec: 'Cấu tạo', name: 'Câu 7', pts: 1, text: 'Chủ ngữ thường do từ loại nào tạo thành?', opts: o4('Danh từ (cụm danh từ)', 'Động từ', 'Tính từ', 'Số từ'), ans: 'A', why: 'Chủ ngữ thường là danh từ hoặc cụm danh từ.' },
    { sec: 'Tìm vị ngữ', name: 'Câu 8', pts: 1, text: 'Trong câu "Mặt trời mọc.", vị ngữ là từ nào?', opts: o4('mọc', 'Mặt trời', 'Mặt', 'trời'), ans: 'A', why: '"mọc" nêu hoạt động nên là vị ngữ.' },
    { sec: 'Tìm chủ ngữ', name: 'Câu 9', pts: 1, text: 'Trong câu "Những bông hoa đang khoe sắc.", chủ ngữ là:', opts: o4('Những bông hoa', 'đang khoe sắc', 'khoe sắc', 'hoa'), ans: 'A', why: '"Những bông hoa" là sự vật được nói đến nên là chủ ngữ.' },
    { sec: 'Cấu tạo câu', name: 'Câu 10', pts: 1, text: 'Một câu thường có mấy bộ phận chính?', opts: o4('Hai (chủ ngữ và vị ngữ)', 'Một', 'Ba', 'Bốn'), ans: 'A', why: 'Câu thường có hai bộ phận chính: chủ ngữ và vị ngữ.' },
  ],
},

/* ═══════════ ĐỀ 9 — DẤU CÂU VÀ THÀNH NGỮ ═══════════ */
{
  id: 6509, title: 'Đề 9 · Dấu câu và thành ngữ', time: 20,
  questions: [
    { sec: 'Dấu hai chấm', name: 'Câu 1', pts: 1, text: 'Dấu hai chấm thường dùng để làm gì?', opts: o4('Báo hiệu lời nói hoặc liệt kê theo sau', 'Kết thúc câu hỏi', 'Bộc lộ cảm xúc', 'Ngăn cách các câu'), ans: 'A', why: 'Dấu hai chấm báo hiệu bộ phận đứng sau là lời nói hoặc là phần liệt kê, giải thích.' },
    { sec: 'Dấu ngoặc kép', name: 'Câu 2', pts: 1, text: 'Dấu ngoặc kép thường dùng để làm gì?', opts: o4('Dẫn lời nói trực tiếp hoặc từ ngữ đặc biệt', 'Kết thúc câu', 'Ngăn cách chủ ngữ, vị ngữ', 'Đánh số thứ tự'), ans: 'A', why: 'Dấu ngoặc kép dùng để đánh dấu lời nói trực tiếp hay từ ngữ được dùng với ý đặc biệt.' },
    { sec: 'Dấu gạch ngang', name: 'Câu 3', pts: 1, text: 'Dấu gạch ngang ở đầu dòng thường dùng để làm gì?', opts: o4('Đánh dấu chỗ bắt đầu lời nói của nhân vật trong đối thoại', 'Kết thúc câu', 'Thay cho dấu chấm', 'Nối hai số'), ans: 'A', why: 'Dấu gạch ngang đầu dòng đánh dấu chỗ bắt đầu lời nói của nhân vật khi đối thoại.' },
    { sec: 'Dấu câu', name: 'Câu 4', pts: 1, text: 'Trong câu: Mẹ bảo: “Con hãy ngoan nhé.” — dấu nào dùng để dẫn lời nói của mẹ?', opts: o4('Dấu ngoặc kép', 'Dấu phẩy', 'Dấu chấm hỏi', 'Dấu gạch ngang'), ans: 'A', why: 'Lời nói trực tiếp của mẹ được đặt trong dấu ngoặc kép.' },
    { sec: 'Thành ngữ', name: 'Câu 5', pts: 1, text: 'Thành ngữ "Chậm như rùa" ý nói điều gì?', opts: o4('Rất chậm', 'Rất nhanh', 'Rất khoẻ', 'Rất thông minh'), ans: 'A', why: '"Chậm như rùa" ý nói làm việc rất chậm chạp.' },
    { sec: 'Thành ngữ', name: 'Câu 6', pts: 1, text: 'Thành ngữ "Nhanh như cắt" ý nói điều gì?', opts: o4('Rất nhanh', 'Rất chậm', 'Rất chăm', 'Rất khoẻ'), ans: 'A', why: '"Nhanh như cắt" ý nói động tác rất nhanh, dứt khoát.' },
    { sec: 'Trái nghĩa', name: 'Câu 7', pts: 1, text: 'Từ "đoàn kết" trái nghĩa với từ nào?', opts: o4('chia rẽ', 'yêu thương', 'giúp đỡ', 'gắn bó'), ans: 'A', why: '"đoàn kết" trái nghĩa với "chia rẽ".' },
    { sec: 'Tục ngữ', name: 'Câu 8', pts: 1, text: 'Câu tục ngữ "Uống nước nhớ nguồn" khuyên ta điều gì?', opts: o4('Biết ơn người đã giúp mình, nhớ ơn tổ tiên', 'Uống nhiều nước', 'Đi tìm nguồn nước', 'Tiết kiệm nước'), ans: 'A', why: '"Uống nước nhớ nguồn" nhắc nhở lòng biết ơn với người đi trước, với tổ tiên.' },
    { sec: 'Dấu phẩy', name: 'Câu 9', pts: 1, text: 'Dấu phẩy trong câu dùng để làm gì?', opts: o4('Ngăn cách các bộ phận cùng chức vụ trong câu', 'Kết thúc câu', 'Dẫn lời nói', 'Bộc lộ cảm xúc'), ans: 'A', why: 'Dấu phẩy ngăn cách các bộ phận cùng loại hoặc các vế trong câu.' },
    { sec: 'Dùng đúng', name: 'Câu 10', pts: 1, text: 'Câu nào dùng dấu ngoặc kép đúng để dẫn lời nói?', opts: o4('Bác dặn: “Các cháu hãy học tốt.”', 'Bác dặn các cháu hãy học tốt?', 'Bác dặn — các cháu hãy học tốt.', 'Bác dặn (các cháu hãy học tốt).'), ans: 'A', why: 'Lời nói trực tiếp được đặt sau dấu hai chấm và trong dấu ngoặc kép.' },
  ],
},

/* ═══════════ ĐỀ 10 — ÔN TẬP TỔNG HỢP ═══════════ */
{
  id: 6510, title: 'Đề 10 · Ôn tập tổng hợp', time: 20,
  questions: [
    { sec: 'Danh từ', name: 'Câu 1', pts: 1, text: 'Từ nào là danh từ?', opts: o4('bàn', 'chạy', 'đẹp', 'nhanh'), ans: 'A', why: '"bàn" chỉ sự vật nên là danh từ.' },
    { sec: 'Động từ', name: 'Câu 2', pts: 1, text: 'Từ nào là động từ?', opts: o4('đọc', 'xanh', 'bàn', 'cái'), ans: 'A', why: '"đọc" chỉ hoạt động nên là động từ.' },
    { sec: 'Tính từ', name: 'Câu 3', pts: 1, text: 'Từ nào là tính từ?', opts: o4('cao', 'chạy', 'bàn', 'ăn'), ans: 'A', why: '"cao" chỉ đặc điểm nên là tính từ.' },
    { sec: 'Từ láy', name: 'Câu 4', pts: 1, text: 'Từ nào là từ láy?', opts: o4('lung linh', 'bàn ghế', 'xe đạp', 'nhà cửa'), ans: 'A', why: '"lung linh" lặp âm đầu "l" nên là từ láy.' },
    { sec: 'Câu kể', name: 'Câu 5', pts: 1, text: 'Câu "Em là học sinh." thuộc kiểu câu kể nào?', opts: o4('Ai là gì?', 'Ai làm gì?', 'Ai thế nào?', 'Câu hỏi'), ans: 'A', why: 'Có từ "là" giới thiệu nên là câu kể "Ai là gì?".' },
    { sec: 'Dấu câu', name: 'Câu 6', pts: 1, text: 'Cuối câu hỏi dùng dấu gì?', opts: o4('Dấu chấm hỏi', 'Dấu chấm', 'Dấu chấm than', 'Dấu phẩy'), ans: 'A', why: 'Cuối câu hỏi dùng dấu chấm hỏi.' },
    { sec: 'Quy tắc', name: 'Câu 7', pts: 1, text: 'Danh từ riêng phải viết thế nào?', opts: o4('Viết hoa', 'Viết thường', 'Viết tắt', 'Viết nghiêng'), ans: 'A', why: 'Danh từ riêng phải viết hoa.' },
    { sec: 'Vị ngữ', name: 'Câu 8', pts: 1, text: 'Trong câu "Gió thổi.", vị ngữ là từ nào?', opts: o4('thổi', 'Gió', 'Gió thổi', 'không có'), ans: 'A', why: '"thổi" nêu hoạt động nên là vị ngữ.' },
    { sec: 'Thành ngữ', name: 'Câu 9', pts: 1, text: 'Thành ngữ "Nhanh như chớp" ý nói điều gì?', opts: o4('Rất nhanh', 'Rất chậm', 'Rất sáng', 'Rất to'), ans: 'A', why: '"Nhanh như chớp" ý nói rất nhanh.' },
    { sec: 'Kiểu câu', name: 'Câu 10', pts: 1, text: 'Câu cảm dùng để làm gì?', opts: o4('Bộc lộ cảm xúc', 'Hỏi điều chưa biết', 'Ra lệnh', 'Giới thiệu'), ans: 'A', why: 'Câu cảm dùng để bộc lộ cảm xúc.' },
  ],
},

];

SUBJECTS.push({
  id: 'tviet4', name: 'Tiếng Việt', short: 'Tiếng Việt 4', icon: '📖', grade: 4,
  exams: TV4_EXAMS, ready: true,
  heroTitle: 'Tiếng Việt lớp 4 — đọc hiểu, từ loại, từ ghép – từ láy, các kiểu câu và dấu câu',
  heroMeta: '📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; bám chương trình GDPT 2018',
});
