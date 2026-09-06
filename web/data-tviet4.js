// TIẾNG VIỆT — LỚP 4 (GDPT 2018)
// 30 đề × 10 câu = 300 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// Bám chương trình: đọc hiểu (truyện, thơ, văn bản thông tin); danh từ (chung – riêng),
// động từ, tính từ; từ đơn – từ ghép – từ láy; câu kể (Ai làm gì? / Ai thế nào? / Ai là gì?),
// câu hỏi – câu khiến – câu cảm; chủ ngữ – vị ngữ; dấu câu (hai chấm, ngoặc kép, gạch ngang);
// thành ngữ – tục ngữ.

const TV4_R1 = '<b>Giọt nước và biển cả</b><br>Một giọt nước nhỏ tự hào vì mình trong veo. Nó chê biển cả mặn chát, đục ngầu. Một hôm, trời nắng gắt, giọt nước bốc hơi rồi biến mất. Còn biển cả mênh mông vẫn ngày đêm cuộn sóng, nuôi sống bao loài tôm cá. Giọt nước nhỏ đâu biết rằng chính những giọt nước như nó, khi hoà vào nhau, mới làm nên biển cả bao la.';
const TV4_R2 = '<b>Chú sẻ và bông hoa bằng lăng</b><br>Bé Thơ bị ốm, phải nằm viện. Ở nhà, cây bằng lăng để dành một bông hoa cuối cùng tặng bé. Nhưng bông hoa nở cao quá, bé nằm trong phòng không nhìn thấy. Chú sẻ non thương bé, đã dồn hết sức đậu cho cành cong xuống, để bông hoa chúc thấp lọt vào đúng khung cửa sổ. Sáng ra, bé Thơ nhìn thấy bông hoa, reo lên sung sướng.';
const TV4_R3 = '<b>Tre Việt Nam</b> <i>(trích — Nguyễn Duy)</i><br>Tre xanh<br>Xanh tự bao giờ?<br>Chuyện ngày xưa... đã có bờ tre xanh.<br>Thân gầy guộc, lá mong manh<br>Mà sao nên luỹ nên thành tre ơi?<br>Ở đâu tre cũng xanh tươi<br>Cho dù đất sỏi đất vôi bạc màu.';
const TV4_R4 = '<b>Chim bồ câu</b><br>Bồ câu là loài chim hiền lành, thường sống thành đàn. Chúng nhớ đường rất tốt nên ngày xưa được dùng để đưa thư. Bồ câu ăn thóc, ngô và các loại hạt. Ở nhiều nơi, bồ câu trắng còn là biểu tượng của hoà bình.';

const TV4_R5 = '<b>Những hạt thóc giống</b><br>Ngày xưa, có ông vua muốn tìm người trung thực để truyền ngôi. Vua phát cho mỗi người dân một thúng thóc giống đã luộc chín và hẹn: ai thu được nhiều thóc nhất sẽ được nối ngôi. Chú bé Chôm ra sức gieo trồng, chăm sóc mà thóc chẳng nảy mầm. Đến ngày hẹn, mọi người nô nức chở thóc về, riêng Chôm tay không, thành thật tâu vua rằng thóc của mình không mọc được. Vua cười, nói rằng thóc giống đã luộc chín thì làm sao mọc; chỉ có Chôm là người trung thực, dám nói thật, và vua đã truyền ngôi cho cậu.';
const TV4_R6 = '<b>Cây tre</b><br>Tre là loài cây quen thuộc ở làng quê Việt Nam. Thân tre thẳng, rỗng ruột và chia thành nhiều đốt. Tre mọc thành bụi, thành luỹ, rễ bám chặt vào đất. Từ tre, người ta làm ra rổ rá, đũa, nôi và cả những chiếc diều tuổi thơ. Trong kháng chiến, tre còn cùng người dân đánh giặc, giữ làng.';
const TV4_R7 = '<b>Truyện cổ nước mình</b> <i>(trích — Lâm Thị Mỹ Dạ)</i><br>Tôi yêu truyện cổ nước tôi<br>Vừa nhân hậu lại tuyệt vời sâu xa<br>Thương người rồi mới thương ta<br>Yêu nhau dù mấy cách xa cũng tìm<br>Ở hiền thì lại gặp hiền<br>Người ngay thì gặp người tiên độ trì.';
const TV4_R8 = '<b>Người ăn xin</b><br>Một người ăn xin già lọm khọm đứng trước mặt cậu bé. Đôi mắt ông đỏ hoe, giàn giụa nước mắt. Cậu bé lục hết túi nọ đến túi kia mà chẳng có gì. Cậu nắm chặt lấy bàn tay run rẩy của ông lão và nói: “Ông đừng giận cháu, cháu không có gì để cho ông cả.” Ông lão mỉm cười: “Cháu ơi, cảm ơn cháu! Như vậy là cháu đã cho lão rồi.” Cậu bé chợt hiểu rằng chính mình cũng vừa nhận được một điều gì đó từ ông lão.';
const TV4_R9 = '<b>Chim én</b><br>Chim én là loài chim báo hiệu mùa xuân. Mỗi khi tiết trời ấm áp, từng đàn én lại bay về, chao liệng trên bầu trời. Én có thân hình nhỏ, cánh dài và nhọn, đuôi xẻ như chiếc kéo. Chúng bắt côn trùng ngay khi đang bay nên giúp nhà nông diệt sâu bọ hại mùa màng.';

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

/* ═══════════ ĐỀ 11 — ĐỌC HIỂU "NHỮNG HẠT THÓC GIỐNG" ═══════════ */
{
  id: 7501, title: 'Đề 11 · Đọc hiểu — Những hạt thóc giống', time: 20,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV4_R5, text: 'Nhà vua muốn tìm người như thế nào để truyền ngôi?', opts: o4('Người giàu nhất', 'Người trung thực', 'Người khoẻ nhất', 'Người đẹp nhất'), ans: 'B', why: 'Bài đọc: "có ông vua muốn tìm người trung thực để truyền ngôi."' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV4_R5, text: 'Vua phát cho mỗi người dân thứ gì?', opts: o4('Thúng thóc giống đã luộc chín', 'Một túi vàng', 'Một thúng gạo trắng', 'Một bó lúa non'), ans: 'A', why: 'Bài đọc: "Vua phát cho mỗi người dân một thúng thóc giống đã luộc chín."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV4_R5, text: 'Vì sao thóc của chú bé Chôm không nảy mầm?', opts: o4('Vì Chôm lười biếng', 'Vì đất quá xấu', 'Vì thóc giống đã bị luộc chín', 'Vì trời hạn hán'), ans: 'C', why: 'Vua giải thích: "thóc giống đã luộc chín thì làm sao mọc".' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV4_R5, text: 'Đến ngày hẹn, chú bé Chôm đã làm gì?', opts: o4('Mua thóc nơi khác nộp vua', 'Trốn không đến gặp vua', 'Đổ lỗi cho người khác', 'Thành thật tâu vua rằng thóc không mọc'), ans: 'D', why: 'Bài đọc: "Chôm tay không, thành thật tâu vua rằng thóc của mình không mọc được."' },
    { sec: 'Ý nghĩa', name: 'Câu 5', pts: 1, read: TV4_R5, text: 'Vì sao vua truyền ngôi cho Chôm?', opts: o4('Vì Chôm nộp nhiều thóc nhất', 'Vì Chôm trung thực, dám nói thật', 'Vì Chôm khoẻ mạnh', 'Vì Chôm là con quan'), ans: 'B', why: 'Chỉ mình Chôm dám nói thật; vua khen Chôm trung thực và truyền ngôi.' },
    { sec: 'Ý nghĩa', name: 'Câu 6', pts: 1, read: TV4_R5, text: 'Câu chuyện ca ngợi đức tính gì?', opts: o4('Tính trung thực', 'Tính tham lam', 'Tính lười biếng', 'Tính kiêu căng'), ans: 'A', why: 'Câu chuyện đề cao lòng trung thực, dũng cảm nói lên sự thật.' },
    { sec: 'Từ ngữ', name: 'Câu 7', pts: 1, read: TV4_R5, text: 'Từ nào gần nghĩa với "trung thực"?', opts: o4('gian dối', 'độc ác', 'thật thà', 'lười nhác'), ans: 'C', why: '"trung thực" gần nghĩa với "thật thà", "ngay thẳng".' },
    { sec: 'Từ ngữ', name: 'Câu 8', pts: 1, read: TV4_R5, text: 'Từ nào trái nghĩa với "trung thực"?', opts: o4('ngay thẳng', 'gian dối', 'thẳng thắn', 'chân thật'), ans: 'B', why: '"trung thực" trái nghĩa với "gian dối".' },
    { sec: 'Ngữ pháp', name: 'Câu 9', pts: 1, read: TV4_R5, text: 'Câu "Chú bé Chôm gieo trồng, chăm sóc." thuộc kiểu câu kể nào?', opts: o4('Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Câu hỏi'), ans: 'A', why: 'Vị ngữ "gieo trồng, chăm sóc" chỉ hoạt động nên là câu kể "Ai làm gì?".' },
    { sec: 'Thành ngữ', name: 'Câu 10', pts: 1, read: TV4_R5, text: 'Thành ngữ nào nói về người ngay thẳng, trung thực?', opts: o4('Ăn vóc học hay', 'Chậm như rùa', 'Đứng núi này trông núi nọ', 'Cây ngay không sợ chết đứng'), ans: 'D', why: '"Cây ngay không sợ chết đứng" nói về người ngay thẳng, trung thực thì không sợ điều gì.' },
  ],
},

/* ═══════════ ĐỀ 12 — ĐỌC HIỂU "CÂY TRE" ═══════════ */
{
  id: 7502, title: 'Đề 12 · Đọc hiểu — Cây tre', time: 20,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV4_R6, text: 'Với làng quê Việt Nam, cây tre là loài cây như thế nào?', opts: o4('Xa lạ', 'Quen thuộc', 'Hiếm gặp', 'Mới trồng'), ans: 'B', why: 'Bài đọc: "Tre là loài cây quen thuộc ở làng quê Việt Nam."' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV4_R6, text: 'Thân tre có đặc điểm gì?', opts: o4('Thẳng, rỗng ruột, chia nhiều đốt', 'To và đặc ruột', 'Cong queo', 'Mềm nhũn'), ans: 'A', why: 'Bài đọc: "Thân tre thẳng, rỗng ruột và chia thành nhiều đốt."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV4_R6, text: 'Tre thường mọc thành gì?', opts: o4('Từng cây riêng lẻ', 'Thành hàng thẳng tắp', 'Thành bụi, thành luỹ', 'Thành rừng rậm'), ans: 'C', why: 'Bài đọc: "Tre mọc thành bụi, thành luỹ."' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV4_R6, text: 'Từ tre, người ta làm ra những vật gì?', opts: o4('Rổ rá, đũa, nôi, diều', 'Bàn ghế sắt', 'Nồi niêu', 'Áo quần'), ans: 'A', why: 'Bài đọc: "làm ra rổ rá, đũa, nôi và cả những chiếc diều tuổi thơ."' },
    { sec: 'Đọc hiểu', name: 'Câu 5', pts: 1, read: TV4_R6, text: 'Trong kháng chiến, tre đã làm gì?', opts: o4('Làm nhà cao', 'Nấu ăn', 'Trang trí', 'Cùng người dân đánh giặc, giữ làng'), ans: 'D', why: 'Bài đọc: "tre còn cùng người dân đánh giặc, giữ làng."' },
    { sec: 'Ngữ pháp', name: 'Câu 6', pts: 1, read: TV4_R6, text: 'Trong câu "rễ bám chặt vào đất", từ "bám" là từ loại gì?', opts: o4('Danh từ', 'Động từ', 'Tính từ', 'Số từ'), ans: 'B', why: '"bám" chỉ hoạt động của rễ nên là động từ.' },
    { sec: 'Ngữ pháp', name: 'Câu 7', pts: 1, read: TV4_R6, text: 'Câu "Thân tre thẳng." thuộc kiểu câu kể nào?', opts: o4('Ai thế nào?', 'Ai làm gì?', 'Ai là gì?', 'Câu khiến'), ans: 'A', why: '"thẳng" chỉ đặc điểm nên là câu kể "Ai thế nào?".' },
    { sec: 'Từ ngữ', name: 'Câu 8', pts: 1, read: TV4_R6, text: 'Từ "làng quê" là từ ghép hay từ láy?', opts: o4('Từ đơn', 'Từ láy', 'Từ ghép', 'Không phải từ'), ans: 'C', why: '"làng" và "quê" đều có nghĩa nên "làng quê" là từ ghép.' },
    { sec: 'Đọc hiểu', name: 'Câu 9', pts: 1, read: TV4_R6, text: 'Bài văn trên thuộc loại văn bản nào?', opts: o4('Truyện cổ tích', 'Văn bản giới thiệu (thông tin)', 'Bài thơ', 'Bức thư'), ans: 'B', why: 'Bài giới thiệu đặc điểm và ích lợi của cây tre nên là văn bản thông tin.' },
    { sec: 'Ý nghĩa', name: 'Câu 10', pts: 1, read: TV4_R6, text: 'Ý chính của bài là gì?', opts: o4('Tre rất khó trồng', 'Tre chỉ để làm diều', 'Tre là cây cảnh trong nhà', 'Tre gắn bó, hữu ích với người dân Việt Nam'), ans: 'D', why: 'Bài cho thấy tre quen thuộc, có nhiều ích lợi và gắn bó với người dân Việt Nam.' },
  ],
},

/* ═══════════ ĐỀ 13 — BIỆN PHÁP SO SÁNH ═══════════ */
{
  id: 7503, title: 'Đề 13 · Biện pháp so sánh', time: 20,
  questions: [
    { sec: 'Khái niệm', name: 'Câu 1', pts: 1, text: 'So sánh là biện pháp như thế nào?', opts: o4('Đối chiếu sự vật này với sự vật khác có nét giống nhau', 'Gọi vật như gọi người', 'Nói quá sự thật', 'Lặp lại từ ngữ'), ans: 'A', why: 'So sánh là đối chiếu sự vật, sự việc này với sự vật, sự việc khác có nét giống nhau.' },
    { sec: 'Nhận biết', name: 'Câu 2', pts: 1, text: 'Từ nào thường dùng trong câu so sánh?', opts: o4('và', 'như', 'nhưng', 'thì'), ans: 'B', why: 'Từ so sánh thường gặp là "như", "tựa", "giống"...' },
    { sec: 'Phân tích', name: 'Câu 3', pts: 1, text: 'Câu "Mặt trời đỏ như hòn lửa." so sánh sự vật nào với hòn lửa?', opts: o4('Bầu trời', 'Đám mây', 'Mặt trời', 'Ngọn núi'), ans: 'C', why: 'Câu so sánh "mặt trời" với "hòn lửa".' },
    { sec: 'Nhận biết', name: 'Câu 4', pts: 1, text: 'Câu nào có hình ảnh so sánh?', opts: o4('Cô giáo hiền như cô Tấm.', 'Em quét nhà.', 'Trời mưa rất to.', 'Chim hót.'), ans: 'A', why: 'Câu "Cô giáo hiền như cô Tấm." dùng từ "như" để so sánh.' },
    { sec: 'Phân tích', name: 'Câu 5', pts: 1, text: 'Trong câu "Trẻ em như búp trên cành.", sự vật được so sánh là gì?', opts: o4('Cành cây', 'Bông hoa', 'Ngọn cỏ', 'Trẻ em'), ans: 'D', why: '"Trẻ em" là sự vật được đem ra so sánh với "búp trên cành".' },
    { sec: 'Cấu tạo', name: 'Câu 6', pts: 1, text: 'Trong câu so sánh "A như B", B được gọi là gì?', opts: o4('Sự vật được so sánh', 'Sự vật dùng để so sánh', 'Chủ ngữ', 'Vị ngữ'), ans: 'B', why: 'A là sự vật được so sánh, B là sự vật dùng để so sánh.' },
    { sec: 'Phân tích', name: 'Câu 7', pts: 1, text: 'Câu "Tiếng suối trong như tiếng hát xa." so sánh cái gì với cái gì?', opts: o4('Tiếng suối với tiếng hát', 'Dòng suối với dòng sông', 'Rừng với biển', 'Trăng với đèn'), ans: 'A', why: 'Câu so sánh "tiếng suối" với "tiếng hát xa".' },
    { sec: 'Loại trừ', name: 'Câu 8', pts: 1, text: 'Từ nào KHÔNG phải là từ so sánh?', opts: o4('như', 'tựa', 'chạy', 'giống'), ans: 'C', why: '"chạy" là động từ, không phải từ dùng để so sánh.' },
    { sec: 'Tác dụng', name: 'Câu 9', pts: 1, text: 'Biện pháp so sánh có tác dụng gì?', opts: o4('Làm câu ngắn hơn', 'Làm câu khó hiểu', 'Để đặt câu hỏi', 'Làm câu văn sinh động, gợi hình gợi cảm'), ans: 'D', why: 'So sánh giúp câu văn giàu hình ảnh, sinh động và gợi cảm hơn.' },
    { sec: 'Phân tích', name: 'Câu 10', pts: 1, text: 'Trong câu "Đôi mắt bé tròn như hai hạt nhãn.", sự vật dùng để so sánh là gì?', opts: o4('Đôi mắt', 'Hai hạt nhãn', 'Khuôn mặt', 'Bàn tay'), ans: 'B', why: '"Đôi mắt" được so sánh với "hai hạt nhãn" — hạt nhãn là sự vật dùng để so sánh.' },
  ],
},

/* ═══════════ ĐỀ 14 — BIỆN PHÁP NHÂN HOÁ ═══════════ */
{
  id: 7504, title: 'Đề 14 · Biện pháp nhân hoá', time: 20,
  questions: [
    { sec: 'Khái niệm', name: 'Câu 1', pts: 1, text: 'Nhân hoá là biện pháp như thế nào?', opts: o4('Gọi hoặc tả vật bằng những từ ngữ vốn dùng cho người', 'So sánh hai sự vật', 'Lặp lại từ ngữ', 'Nói giảm nói tránh'), ans: 'A', why: 'Nhân hoá là gọi hoặc tả con vật, cây cối, đồ vật... bằng từ ngữ vốn dùng để gọi, tả con người.' },
    { sec: 'Nhận biết', name: 'Câu 2', pts: 1, text: 'Câu nào có hình ảnh nhân hoá?', opts: o4('Bông hoa màu đỏ.', 'Trời mưa rất to.', 'Ông mặt trời thức dậy từ sớm.', 'Em đi học.'), ans: 'C', why: 'Mặt trời được gọi là "Ông" và biết "thức dậy" như người — đó là nhân hoá.' },
    { sec: 'Phân tích', name: 'Câu 3', pts: 1, text: 'Trong câu "Chị gió đùa nghịch ngoài vườn.", từ ngữ nào cho thấy gió được nhân hoá?', opts: o4('ngoài vườn', 'Chị, đùa nghịch', 'gió', 'một'), ans: 'B', why: 'Gió được gọi là "Chị" và biết "đùa nghịch" như con người.' },
    { sec: 'Phân tích', name: 'Câu 4', pts: 1, text: 'Cách nhân hoá trong "Bác gấu đang ngủ đông." là gì?', opts: o4('Dùng từ so sánh', 'Lặp từ ngữ', 'Gọi vật là bạn thân', 'Dùng từ gọi người (Bác) để gọi con vật'), ans: 'D', why: 'Con gấu được gọi bằng "Bác" — từ vốn dùng để gọi người.' },
    { sec: 'Phân tích', name: 'Câu 5', pts: 1, text: 'Trong câu "Đàn kiến hành quân về tổ.", từ "hành quân" vốn dùng cho ai?', opts: o4('Con người (bộ đội)', 'Loài kiến', 'Cây cối', 'Đồ vật'), ans: 'A', why: '"hành quân" là hoạt động của con người (bộ đội), được dùng cho đàn kiến nên là nhân hoá.' },
    { sec: 'Tác dụng', name: 'Câu 6', pts: 1, text: 'Biện pháp nhân hoá có tác dụng gì?', opts: o4('Làm câu ngắn gọn', 'Làm sự vật trở nên gần gũi, sinh động như con người', 'Để đặt câu hỏi', 'Để ra lệnh'), ans: 'B', why: 'Nhân hoá làm sự vật hiện lên gần gũi, sinh động, có hồn như con người.' },
    { sec: 'Loại trừ', name: 'Câu 7', pts: 1, text: 'Câu nào KHÔNG dùng biện pháp nhân hoá?', opts: o4('Ông trăng tròn nhô lên.', 'Hàng cây vẫy tay chào.', 'Con mèo đang nằm ngủ.', 'Chú chim trò chuyện ríu rít.'), ans: 'C', why: '"Con mèo đang nằm ngủ." chỉ tả hoạt động bình thường của mèo, không nhân hoá.' },
    { sec: 'Phân tích', name: 'Câu 8', pts: 1, text: 'Trong câu "Cây bàng khoác áo mới.", vật được nhân hoá là gì?', opts: o4('Chiếc áo', 'Mùa xuân', 'Con người', 'Cây bàng'), ans: 'D', why: 'Cây bàng được tả biết "khoác áo mới" như con người.' },
    { sec: 'Phân tích', name: 'Câu 9', pts: 1, text: 'Trong câu "Đàn chim trò chuyện ríu rít.", "trò chuyện" là hoạt động của ai?', opts: o4('Của con người', 'Của cây', 'Của gió', 'Của mưa'), ans: 'A', why: '"trò chuyện" vốn là hoạt động của con người, được gán cho đàn chim.' },
    { sec: 'So sánh', name: 'Câu 10', pts: 1, text: 'Nhân hoá và so sánh giống nhau ở mục đích nào?', opts: o4('Rút ngắn câu', 'Làm câu văn sinh động, gợi cảm hơn', 'Đặt câu hỏi', 'Liệt kê sự vật'), ans: 'B', why: 'Cả hai biện pháp đều làm câu văn sinh động, giàu hình ảnh và gợi cảm.' },
  ],
},

/* ═══════════ ĐỀ 15 — TRẠNG NGỮ ═══════════ */
{
  id: 7505, title: 'Đề 15 · Trạng ngữ', time: 20,
  questions: [
    { sec: 'Khái niệm', name: 'Câu 1', pts: 1, text: 'Trạng ngữ là bộ phận thế nào của câu?', opts: o4('Bộ phận phụ, bổ sung ý nghĩa về thời gian, nơi chốn, nguyên nhân...', 'Bộ phận chính bắt buộc', 'Chính là chủ ngữ', 'Chính là vị ngữ'), ans: 'A', why: 'Trạng ngữ là thành phần phụ, bổ sung ý nghĩa về thời gian, nơi chốn, nguyên nhân, mục đích... cho câu.' },
    { sec: 'Khái niệm', name: 'Câu 2', pts: 1, text: 'Trạng ngữ trả lời cho những câu hỏi nào?', opts: o4('Ai? Con gì?', 'Khi nào? Ở đâu? Vì sao? Để làm gì?', 'Là gì?', 'Cái gì?'), ans: 'B', why: 'Trạng ngữ trả lời cho các câu hỏi: Khi nào? Ở đâu? Vì sao? Để làm gì?' },
    { sec: 'Tìm trạng ngữ', name: 'Câu 3', pts: 1, text: 'Trong câu "Sáng nay, em đi học.", trạng ngữ là bộ phận nào?', opts: o4('em', 'đi học', 'Sáng nay', 'em đi học'), ans: 'C', why: '"Sáng nay" chỉ thời gian nên là trạng ngữ.' },
    { sec: 'Phân loại', name: 'Câu 4', pts: 1, text: 'Trạng ngữ "Trên cành cây" chỉ điều gì?', opts: o4('Nơi chốn', 'Thời gian', 'Nguyên nhân', 'Mục đích'), ans: 'A', why: '"Trên cành cây" chỉ nơi chốn.' },
    { sec: 'Phân loại', name: 'Câu 5', pts: 1, text: 'Trong câu "Vì trời mưa, em nghỉ học.", trạng ngữ chỉ gì?', opts: o4('Nơi chốn', 'Thời gian', 'Mục đích', 'Nguyên nhân'), ans: 'D', why: '"Vì trời mưa" chỉ nguyên nhân.' },
    { sec: 'Dấu câu', name: 'Câu 6', pts: 1, text: 'Trạng ngữ đứng đầu câu thường được ngăn cách với nòng cốt câu bằng dấu gì?', opts: o4('Dấu chấm', 'Dấu phẩy', 'Dấu hai chấm', 'Dấu ngoặc kép'), ans: 'B', why: 'Trạng ngữ đứng đầu câu thường được ngăn cách bằng dấu phẩy.' },
    { sec: 'Phân loại', name: 'Câu 7', pts: 1, text: 'Trong câu "Để đạt điểm cao, Lan chăm chỉ ôn bài.", trạng ngữ chỉ gì?', opts: o4('Nơi chốn', 'Thời gian', 'Mục đích', 'Nguyên nhân'), ans: 'C', why: '"Để đạt điểm cao" chỉ mục đích.' },
    { sec: 'Nhận biết', name: 'Câu 8', pts: 1, text: 'Câu nào có trạng ngữ chỉ thời gian?', opts: o4('Mùa xuân, hoa đào nở rộ.', 'Em học bài.', 'Ngoài sân, gà mổ thóc.', 'Vì lười, nó bị điểm kém.'), ans: 'A', why: '"Mùa xuân" chỉ thời gian nên là trạng ngữ chỉ thời gian.' },
    { sec: 'Vị trí', name: 'Câu 9', pts: 1, text: 'Trạng ngữ có thể đứng ở vị trí nào trong câu?', opts: o4('Chỉ đứng cuối câu', 'Chỉ đứng giữa câu', 'Chỉ thay cho chủ ngữ', 'Có thể đứng đầu, giữa hoặc cuối câu'), ans: 'D', why: 'Trạng ngữ có thể đứng ở đầu, giữa hoặc cuối câu.' },
    { sec: 'Phân tích', name: 'Câu 10', pts: 1, text: 'Trong câu "Ngoài đồng, bà con đang gặt lúa.", bộ phận "bà con" là gì?', opts: o4('Trạng ngữ', 'Chủ ngữ', 'Vị ngữ', 'Dấu câu'), ans: 'B', why: '"bà con" là sự vật được nói đến nên là chủ ngữ (còn "Ngoài đồng" là trạng ngữ).' },
  ],
},

/* ═══════════ ĐỀ 16 — CHÍNH TẢ l/n ═══════════ */
{
  id: 7506, title: 'Đề 16 · Chính tả l / n', time: 20,
  questions: [
    { sec: 'Chọn đúng', name: 'Câu 1', pts: 1, text: 'Từ nào viết đúng chính tả?', opts: o4('long lanh', 'nong nanh', 'long nanh', 'nong lanh'), ans: 'A', why: 'Viết đúng là "long lanh".' },
    { sec: 'Điền từ', name: 'Câu 2', pts: 1, text: 'Điền l/n cho đúng: "quả ...a" (một loại quả).', opts: o4('la', 'na', 'nả', 'lả'), ans: 'B', why: 'Viết đúng là "quả na".' },
    { sec: 'Chọn đúng', name: 'Câu 3', pts: 1, text: 'Từ nào viết đúng chính tả?', opts: o4('nàm việc', 'nàm ơn', 'làm việc', 'nàm bài'), ans: 'C', why: 'Viết đúng là "làm việc" (với âm "l").' },
    { sec: 'Điền từ', name: 'Câu 4', pts: 1, text: 'Điền l/n cho đúng: "...o ấm" (đủ ăn, ấm áp).', opts: o4('no ấm', 'lo ấm', 'nô ấm', 'lô ấm'), ans: 'A', why: 'Viết đúng là "no ấm" (no đủ, ấm áp).' },
    { sec: 'Chọn câu', name: 'Câu 5', pts: 1, text: 'Câu nào viết đúng chính tả?', opts: o4('Con nợn ăn cám.', 'Bé nê la hét.', 'Trời đã tối nem.', 'Con lợn ăn cám.'), ans: 'D', why: 'Viết đúng là "Con lợn ăn cám." (lợn với âm "l").' },
    { sec: 'Điền từ', name: 'Câu 6', pts: 1, text: 'Điền l/n cho đúng: "...ước sạch" (thứ để uống).', opts: o4('lước', 'nước', 'nướ', 'lướ'), ans: 'B', why: 'Viết đúng là "nước sạch".' },
    { sec: 'Loại trừ', name: 'Câu 7', pts: 1, text: 'Từ nào viết SAI chính tả?', opts: o4('nàng xóm', 'làng xóm', 'lúa nếp', 'nóng nực'), ans: 'A', why: '"nàng xóm" sai, phải viết là "làng xóm".' },
    { sec: 'Điền từ', name: 'Câu 8', pts: 1, text: 'Điền l/n cho đúng: "...ắng nghe" (chú ý nghe).', opts: o4('nắng', 'năng', 'lắng', 'láng'), ans: 'C', why: 'Viết đúng là "lắng nghe".' },
    { sec: 'Điền từ', name: 'Câu 9', pts: 1, text: 'Điền l/n cho đúng: "...ăn nỉ" (nài xin).', opts: o4('lăn', 'năn', 'lăng', 'nằn'), ans: 'B', why: 'Viết đúng là "năn nỉ".' },
    { sec: 'Chọn câu', name: 'Câu 10', pts: 1, text: 'Câu nào tất cả các từ đều viết đúng chính tả?', opts: o4('Nàng gió nào về.', 'Lo nắng cho na.', 'Nê nết ngoan.', 'Nắng lên, làng xóm rộn ràng.'), ans: 'D', why: 'Câu "Nắng lên, làng xóm rộn ràng." viết đúng cả "nắng" và "làng".' },
  ],
},

/* ═══════════ ĐỀ 17 — CHÍNH TẢ ch/tr, s/x ═══════════ */
{
  id: 7507, title: 'Đề 17 · Chính tả ch/tr, s/x', time: 20,
  questions: [
    { sec: 'ch / tr', name: 'Câu 1', pts: 1, text: 'Từ nào viết đúng chính tả?', opts: o4('cây tre', 'cây che', 'cây chre', 'cây trche'), ans: 'A', why: 'Viết đúng là "cây tre".' },
    { sec: 'ch / tr', name: 'Câu 2', pts: 1, text: 'Điền ch/tr cho đúng: "con ...âu" (con vật kéo cày).', opts: o4('châu', 'trâu', 'chrâu', 'trâ'), ans: 'B', why: 'Viết đúng là "con trâu".' },
    { sec: 'ch / tr', name: 'Câu 3', pts: 1, text: 'Từ nào viết đúng chính tả?', opts: o4('chời mưa', 'chống cây', 'trời mưa', 'chời nắng'), ans: 'C', why: 'Viết đúng là "trời mưa".' },
    { sec: 's / x', name: 'Câu 4', pts: 1, text: 'Từ nào viết đúng chính tả?', opts: o4('sạch sẽ', 'xạch xẽ', 'sạch xẽ', 'xạch sẽ'), ans: 'A', why: 'Viết đúng là "sạch sẽ".' },
    { sec: 's / x', name: 'Câu 5', pts: 1, text: 'Điền s/x cho đúng: "...âu bọ" (loài vật nhỏ hại cây).', opts: o4('xâu', 'sâu', 'xu', 'su'), ans: 'B', why: 'Viết đúng là "sâu bọ".' },
    { sec: 's / x', name: 'Câu 6', pts: 1, text: 'Từ nào viết đúng chính tả?', opts: o4('xuất xắc', 'suất sắc', 'xuất sắc', 'suất xắc'), ans: 'C', why: 'Viết đúng là "xuất sắc".' },
    { sec: 'Loại trừ', name: 'Câu 7', pts: 1, text: 'Từ nào viết SAI chính tả?', opts: o4('sông sâu', 'xa xôi', 'xinh xắn', 'chăm trỉ'), ans: 'D', why: '"chăm trỉ" sai, phải viết là "chăm chỉ".' },
    { sec: 'ch / tr', name: 'Câu 8', pts: 1, text: 'Điền ch/tr cho đúng: "...e chở" (bảo vệ, đùm bọc).', opts: o4('che', 'tre', 'chre', 'tra'), ans: 'A', why: 'Viết đúng là "che chở".' },
    { sec: 's / x', name: 'Câu 9', pts: 1, text: 'Điền s/x cho đúng: "...ung quanh" (bao quanh).', opts: o4('sung', 'xung', 'xuong', 'suong'), ans: 'B', why: 'Viết đúng là "xung quanh".' },
    { sec: 'Chọn câu', name: 'Câu 10', pts: 1, text: 'Câu nào viết đúng chính tả?', opts: o4('Con châu ăn cỏ.', 'Bầu chời xanh.', 'Con trâu cày ruộng.', 'Chời đã sáng.'), ans: 'C', why: 'Viết đúng là "Con trâu cày ruộng." (trâu, không phải châu).' },
  ],
},

/* ═══════════ ĐỀ 18 — CHÍNH TẢ DẤU HỎI / NGÃ ═══════════ */
{
  id: 7508, title: 'Đề 18 · Chính tả dấu hỏi / ngã', time: 20,
  questions: [
    { sec: 'Chọn đúng', name: 'Câu 1', pts: 1, text: 'Từ nào viết đúng dấu thanh?', opts: o4('suy nghĩ', 'suy nghỉ', 'suy ngĩ', 'sui nghĩ'), ans: 'A', why: 'Viết đúng là "suy nghĩ" (dấu ngã).' },
    { sec: 'Chọn đúng', name: 'Câu 2', pts: 1, text: 'Từ nào viết đúng dấu thanh?', opts: o4('dạy dổ', 'dạy dỗ', 'dại dỗ', 'dạy đỗ'), ans: 'B', why: 'Viết đúng là "dạy dỗ" (dấu ngã ở "dỗ").' },
    { sec: 'Chọn đúng', name: 'Câu 3', pts: 1, text: 'Từ nào viết đúng dấu thanh?', opts: o4('sửa chửa', 'sữa chữa', 'sửa chữa', 'sữa chửa'), ans: 'C', why: 'Viết đúng là "sửa chữa" (sửa dấu hỏi, chữa dấu ngã).' },
    { sec: 'Chọn đúng', name: 'Câu 4', pts: 1, text: 'Từ nào viết đúng dấu thanh?', opts: o4('mạnh mẻ', 'mạnh mẹ', 'manh mẽ', 'mạnh mẽ'), ans: 'D', why: 'Viết đúng là "mạnh mẽ" (dấu ngã ở "mẽ").' },
    { sec: 'Chọn đúng', name: 'Câu 5', pts: 1, text: 'Từ nào viết đúng dấu thanh?', opts: o4('nghỉ ngơi', 'nghĩ ngơi', 'nghỉ ngời', 'nghị ngơi'), ans: 'A', why: 'Viết đúng là "nghỉ ngơi" (dấu hỏi ở "nghỉ").' },
    { sec: 'Chọn đúng', name: 'Câu 6', pts: 1, text: 'Từ nào viết đúng dấu thanh?', opts: o4('vui vẽ', 'vui vẻ', 'vui vẹ', 'vui vẻo'), ans: 'B', why: 'Viết đúng là "vui vẻ" (dấu hỏi ở "vẻ").' },
    { sec: 'Chọn đúng', name: 'Câu 7', pts: 1, text: 'Từ nào viết đúng dấu thanh?', opts: o4('cũ kỉ', 'củ kỉ', 'cũ kĩ', 'củ kĩ'), ans: 'C', why: 'Viết đúng là "cũ kĩ" (cả hai tiếng đều dấu ngã).' },
    { sec: 'Loại trừ', name: 'Câu 8', pts: 1, text: 'Từ nào viết SAI dấu thanh?', opts: o4('dũng cảm', 'mãi mãi', 'sẻ chia', 'ngẩm nghĩ'), ans: 'D', why: '"ngẩm nghĩ" sai, phải viết là "ngẫm nghĩ" (dấu ngã).' },
    { sec: 'Chọn đúng', name: 'Câu 9', pts: 1, text: 'Từ nào viết đúng dấu thanh?', opts: o4('bảo vệ', 'bão vệ', 'bảo vẹ', 'bão vẹ'), ans: 'A', why: 'Viết đúng là "bảo vệ" (dấu hỏi ở "bảo").' },
    { sec: 'Chọn câu', name: 'Câu 10', pts: 1, text: 'Câu nào viết đúng dấu hỏi/ngã?', opts: o4('Bé ngũ ngon.', 'Bé ngủ ngon.', 'Bé ngụ ngon.', 'Bé ngũ ngoan.'), ans: 'B', why: 'Viết đúng là "Bé ngủ ngon." (ngủ mang dấu hỏi).' },
  ],
},

/* ═══════════ ĐỀ 19 — ĐỌC HIỂU THƠ "TRUYỆN CỔ NƯỚC MÌNH" ═══════════ */
{
  id: 7509, title: 'Đề 19 · Đọc hiểu thơ — Truyện cổ nước mình', time: 20,
  questions: [
    { sec: 'Đọc thơ', name: 'Câu 1', pts: 1, read: TV4_R7, text: 'Tác giả bày tỏ tình cảm yêu quý điều gì?', opts: o4('Truyện cổ nước mình', 'Cảnh biển', 'Dòng sông', 'Cánh đồng'), ans: 'A', why: 'Bài thơ: "Tôi yêu truyện cổ nước tôi".' },
    { sec: 'Đọc thơ', name: 'Câu 2', pts: 1, read: TV4_R7, text: 'Theo tác giả, truyện cổ nước mình có đặc điểm gì?', opts: o4('Buồn bã', 'Nhân hậu, sâu xa', 'Khô khan', 'Ngắn ngủn'), ans: 'B', why: 'Bài thơ: "Vừa nhân hậu lại tuyệt vời sâu xa".' },
    { sec: 'Đọc thơ', name: 'Câu 3', pts: 1, read: TV4_R7, text: 'Điền từ còn thiếu: "Ở hiền thì lại gặp ...".', opts: o4('ác', 'dữ', 'hiền', 'xa'), ans: 'C', why: 'Câu thơ đầy đủ là "Ở hiền thì lại gặp hiền".' },
    { sec: 'Ý nghĩa', name: 'Câu 4', pts: 1, read: TV4_R7, text: 'Câu thơ "Người ngay thì gặp người tiên độ trì" khuyên ta điều gì?', opts: o4('Sống ngay thẳng sẽ được giúp đỡ', 'Nên sống gian dối', 'Không cần giúp ai', 'Nên sống một mình'), ans: 'A', why: 'Câu thơ nhắn nhủ: sống ngay thẳng, tốt bụng sẽ được che chở, giúp đỡ.' },
    { sec: 'Ý nghĩa', name: 'Câu 5', pts: 1, read: TV4_R7, text: 'Qua bài thơ, tác giả muốn nhắn nhủ điều gì?', opts: o4('Ghét bỏ truyện cổ', 'Quên đi quá khứ', 'Không cần học hỏi', 'Yêu quý, trân trọng truyện cổ và sống nhân hậu'), ans: 'D', why: 'Tác giả yêu truyện cổ vì nó dạy con người sống nhân hậu, ngay thẳng.' },
    { sec: 'Từ ngữ', name: 'Câu 6', pts: 1, read: TV4_R7, text: 'Từ "nhân hậu" có nghĩa gần với từ nào?', opts: o4('độc ác', 'hiền lành, thương người', 'lười biếng', 'keo kiệt'), ans: 'B', why: '"nhân hậu" nghĩa là hiền lành, giàu lòng thương người.' },
    { sec: 'Thể loại', name: 'Câu 7', pts: 1, read: TV4_R7, text: 'Đoạn văn bản trên được viết theo thể loại nào?', opts: o4('Văn xuôi', 'Kịch', 'Thơ', 'Thư'), ans: 'C', why: 'Đoạn được viết thành các dòng có vần, nhịp nên là thơ.' },
    { sec: 'Ngữ pháp', name: 'Câu 8', pts: 1, read: TV4_R7, text: 'Từ "thương" trong "Thương người rồi mới thương ta" là từ loại gì?', opts: o4('Động từ', 'Danh từ', 'Số từ', 'Tính từ'), ans: 'A', why: '"thương" chỉ trạng thái tình cảm nên là động từ.' },
    { sec: 'Từ ngữ', name: 'Câu 9', pts: 1, read: TV4_R7, text: 'Từ "sâu xa" là từ ghép hay từ láy?', opts: o4('Từ đơn', 'Từ láy', 'Không phải từ', 'Từ ghép'), ans: 'D', why: '"sâu" và "xa" đều có nghĩa nên "sâu xa" là từ ghép.' },
    { sec: 'Tục ngữ', name: 'Câu 10', pts: 1, read: TV4_R7, text: 'Dòng thơ "Ở hiền thì lại gặp hiền" gần với câu tục ngữ nào?', opts: o4('Ăn quả nhớ kẻ trồng cây', 'Ở hiền gặp lành', 'Gần mực thì đen', 'Có công mài sắt có ngày nên kim'), ans: 'B', why: 'Ý thơ trùng với câu tục ngữ "Ở hiền gặp lành".' },
  ],
},

/* ═══════════ ĐỀ 20 — MRVT NHÂN HẬU – ĐOÀN KẾT ═══════════ */
{
  id: 7510, title: 'Đề 20 · Mở rộng vốn từ: Nhân hậu – Đoàn kết', time: 20,
  questions: [
    { sec: 'Từ ngữ', name: 'Câu 1', pts: 1, text: 'Từ nào nói về lòng nhân hậu?', opts: o4('nhân ái', 'độc ác', 'gian dối', 'lười biếng'), ans: 'A', why: '"nhân ái" chỉ tấm lòng yêu thương con người, thuộc chủ điểm nhân hậu.' },
    { sec: 'Trái nghĩa', name: 'Câu 2', pts: 1, text: 'Từ nào trái nghĩa với "nhân hậu"?', opts: o4('hiền từ', 'độc ác', 'bao dung', 'thương yêu'), ans: 'B', why: '"nhân hậu" trái nghĩa với "độc ác".' },
    { sec: 'Nghĩa từ', name: 'Câu 3', pts: 1, text: '"Đoàn kết" có nghĩa là gì?', opts: o4('Chia rẽ nhau', 'Ganh ghét nhau', 'Gắn bó, hợp sức với nhau', 'Sống riêng lẻ'), ans: 'C', why: '"Đoàn kết" là kết thành một khối, gắn bó, hợp sức với nhau.' },
    { sec: 'Thành ngữ', name: 'Câu 4', pts: 1, text: 'Thành ngữ, tục ngữ nào nói về sức mạnh đoàn kết?', opts: o4('Chậm như rùa', 'Đơn thương độc mã', 'Ăn cháo đá bát', 'Đoàn kết là sức mạnh'), ans: 'D', why: '"Đoàn kết là sức mạnh" nói về sức mạnh của sự đoàn kết.' },
    { sec: 'Cùng nghĩa', name: 'Câu 5', pts: 1, text: 'Từ nào cùng nghĩa với "thương người"?', opts: o4('nhân ái', 'tàn nhẫn', 'ích kỉ', 'vô tình'), ans: 'A', why: '"nhân ái" cùng nghĩa với "thương người".' },
    { sec: 'Tục ngữ', name: 'Câu 6', pts: 1, text: 'Câu tục ngữ "Lá lành đùm lá rách" khuyên ta điều gì?', opts: o4('Nên tiết kiệm lá', 'Đùm bọc, giúp đỡ người gặp khó khăn', 'Ăn ở sạch sẽ', 'Trồng nhiều cây'), ans: 'B', why: '"Lá lành đùm lá rách" khuyên người sung túc giúp đỡ người khó khăn hơn.' },
    { sec: 'Loại trừ', name: 'Câu 7', pts: 1, text: 'Từ nào KHÔNG thuộc chủ điểm nhân hậu?', opts: o4('yêu thương', 'đùm bọc', 'độc ác', 'che chở'), ans: 'C', why: '"độc ác" trái với lòng nhân hậu nên không thuộc chủ điểm này.' },
    { sec: 'Tục ngữ', name: 'Câu 8', pts: 1, text: 'Câu "Một cây làm chẳng nên non / Ba cây chụm lại nên hòn núi cao" nói về điều gì?', opts: o4('Sức mạnh của đoàn kết', 'Sự lười biếng', 'Lòng tham', 'Tính kiêu căng'), ans: 'A', why: 'Câu ca dao đề cao sức mạnh của sự đoàn kết, chung sức.' },
    { sec: 'Từ ngữ', name: 'Câu 9', pts: 1, text: 'Từ nào chỉ người có lòng thương người?', opts: o4('kẻ gian', 'người ác', 'kẻ trộm', 'người nhân đức'), ans: 'D', why: '"người nhân đức" là người có lòng thương người, giàu lòng nhân.' },
    { sec: 'Nghĩa từ', name: 'Câu 10', pts: 1, text: '"Bao dung" có nghĩa là gì?', opts: o4('Hẹp hòi', 'Rộng lòng tha thứ', 'Nhỏ nhen', 'Ích kỉ'), ans: 'B', why: '"bao dung" là rộng lòng tha thứ cho người khác.' },
  ],
},

/* ═══════════ ĐỀ 21 — MRVT TRUNG THỰC – TỰ TRỌNG ═══════════ */
{
  id: 7511, title: 'Đề 21 · Mở rộng vốn từ: Trung thực – Tự trọng', time: 20,
  questions: [
    { sec: 'Nghĩa từ', name: 'Câu 1', pts: 1, text: '"Trung thực" có nghĩa là gì?', opts: o4('Thật thà, ngay thẳng', 'Gian dối', 'Lười biếng', 'Kiêu căng'), ans: 'A', why: '"trung thực" là thật thà, ngay thẳng, tôn trọng sự thật.' },
    { sec: 'Trái nghĩa', name: 'Câu 2', pts: 1, text: 'Từ nào trái nghĩa với "trung thực"?', opts: o4('thật thà', 'dối trá', 'ngay thẳng', 'chân thành'), ans: 'B', why: '"trung thực" trái nghĩa với "dối trá".' },
    { sec: 'Nghĩa từ', name: 'Câu 3', pts: 1, text: '"Tự trọng" có nghĩa là gì?', opts: o4('Coi thường mình', 'Thích khoe khoang', 'Coi trọng và giữ gìn phẩm giá của mình', 'Ỷ lại người khác'), ans: 'C', why: '"tự trọng" là coi trọng và giữ gìn phẩm giá, danh dự của bản thân.' },
    { sec: 'Thành ngữ', name: 'Câu 4', pts: 1, text: 'Thành ngữ nào nói về tính ngay thẳng, trung thực?', opts: o4('Đứng núi này trông núi nọ', 'Nước đổ lá khoai', 'Gió chiều nào che chiều ấy', 'Cây ngay không sợ chết đứng'), ans: 'D', why: '"Cây ngay không sợ chết đứng" ca ngợi người ngay thẳng, trung thực.' },
    { sec: 'Cùng nghĩa', name: 'Câu 5', pts: 1, text: 'Từ nào cùng nghĩa với "trung thực"?', opts: o4('thành thật', 'dối gạt', 'lừa lọc', 'gian manh'), ans: 'A', why: '"thành thật" cùng nghĩa với "trung thực".' },
    { sec: 'Nghĩa từ', name: 'Câu 6', pts: 1, text: 'Người "thẳng thắn" là người như thế nào?', opts: o4('Hay nói dối', 'Nói đúng sự thật, không quanh co', 'Hay giấu giếm', 'Sợ nói thật'), ans: 'B', why: '"thẳng thắn" là nói đúng sự thật, không vòng vo, giấu giếm.' },
    { sec: 'Loại trừ', name: 'Câu 7', pts: 1, text: 'Từ nào KHÔNG nói về tính trung thực?', opts: o4('thật thà', 'ngay thẳng', 'gian xảo', 'chân thật'), ans: 'C', why: '"gian xảo" trái với trung thực nên không thuộc nhóm này.' },
    { sec: 'Thành ngữ', name: 'Câu 8', pts: 1, text: 'Câu "Ăn ngay nói thẳng" ca ngợi đức tính gì?', opts: o4('Trung thực, thẳng thắn', 'Chăm chỉ', 'Dũng cảm', 'Tiết kiệm'), ans: 'A', why: '"Ăn ngay nói thẳng" ca ngợi người trung thực, thẳng thắn.' },
    { sec: 'Vận dụng', name: 'Câu 9', pts: 1, text: 'Người có lòng tự trọng sẽ KHÔNG làm điều gì?', opts: o4('Giữ đúng lời hứa', 'Nhận lỗi khi làm sai', 'Sống trung thực', 'Gian lận trong thi cử'), ans: 'D', why: 'Người tự trọng giữ gìn danh dự nên không gian lận, dối trá.' },
    { sec: 'Nghĩa từ', name: 'Câu 10', pts: 1, text: 'Thái độ nào trái với lòng "tự trọng"?', opts: o4('Giữ gìn phẩm giá', 'Tự hạ thấp mình, luồn cúi', 'Sống ngay thẳng', 'Sống đàng hoàng'), ans: 'B', why: 'Tự hạ thấp mình, luồn cúi là trái với lòng tự trọng.' },
  ],
},

/* ═══════════ ĐỀ 22 — MRVT Ý CHÍ – NGHỊ LỰC ═══════════ */
{
  id: 7512, title: 'Đề 22 · Mở rộng vốn từ: Ý chí – Nghị lực', time: 20,
  questions: [
    { sec: 'Nghĩa từ', name: 'Câu 1', pts: 1, text: '"Nghị lực" là gì?', opts: o4('Sức mạnh tinh thần giúp vượt qua khó khăn', 'Sức khoẻ của cơ thể', 'Tiền bạc', 'Sự may mắn'), ans: 'A', why: '"nghị lực" là sức mạnh tinh thần giúp con người kiên trì vượt khó.' },
    { sec: 'Tục ngữ', name: 'Câu 2', pts: 1, text: 'Câu "Có công mài sắt, có ngày nên kim" khuyên ta điều gì?', opts: o4('Nên đi rèn sắt', 'Kiên trì, nhẫn nại thì sẽ thành công', 'Nên mua kim mới', 'Làm nhanh cho xong'), ans: 'B', why: 'Câu tục ngữ khuyên kiên trì, bền bỉ thì việc khó cũng thành công.' },
    { sec: 'Từ ngữ', name: 'Câu 3', pts: 1, text: 'Từ nào nói về người có ý chí?', opts: o4('lười biếng', 'nản lòng', 'kiên cường', 'bỏ cuộc'), ans: 'C', why: '"kiên cường" chỉ người vững vàng, quyết tâm, có ý chí.' },
    { sec: 'Trái nghĩa', name: 'Câu 4', pts: 1, text: 'Từ nào trái nghĩa với "quyết tâm"?', opts: o4('bền chí', 'kiên trì', 'vững vàng', 'nản chí'), ans: 'D', why: '"quyết tâm" trái nghĩa với "nản chí".' },
    { sec: 'Nghĩa từ', name: 'Câu 5', pts: 1, text: '"Vượt khó" có nghĩa là gì?', opts: o4('Cố gắng vượt qua khó khăn', 'Tránh né khó khăn', 'Bỏ cuộc giữa chừng', 'Ngồi chờ may mắn'), ans: 'A', why: '"vượt khó" là nỗ lực để vượt qua hoàn cảnh khó khăn.' },
    { sec: 'Tục ngữ', name: 'Câu 6', pts: 1, text: 'Câu tục ngữ nào nói về ý chí, nghị lực?', opts: o4('Ăn quả nhớ kẻ trồng cây', 'Chớ thấy sóng cả mà ngã tay chèo', 'Gần mực thì đen', 'Lá lành đùm lá rách'), ans: 'B', why: '"Chớ thấy sóng cả mà ngã tay chèo" khuyên giữ vững ý chí trước khó khăn.' },
    { sec: 'Loại trừ', name: 'Câu 7', pts: 1, text: 'Từ nào KHÔNG nói về ý chí, nghị lực?', opts: o4('bền bỉ', 'kiên trì', 'chán nản', 'quyết chí'), ans: 'C', why: '"chán nản" trái với ý chí, nghị lực nên không thuộc nhóm này.' },
    { sec: 'Nghĩa từ', name: 'Câu 8', pts: 1, text: 'Người "kiên trì" là người như thế nào?', opts: o4('Bền lòng, không bỏ dở công việc', 'Hay bỏ cuộc', 'Lười biếng', 'Nóng vội'), ans: 'A', why: '"kiên trì" là bền lòng, theo đuổi công việc đến cùng.' },
    { sec: 'Tục ngữ', name: 'Câu 9', pts: 1, text: 'Điền từ còn thiếu: "Thất bại là mẹ ...".', opts: o4('của sự lười', 'của khó khăn', 'của nỗi buồn', 'thành công'), ans: 'D', why: 'Câu đầy đủ là "Thất bại là mẹ thành công".' },
    { sec: 'Ngữ pháp', name: 'Câu 10', pts: 1, text: 'Từ "nghị lực" thuộc từ loại gì?', opts: o4('Động từ', 'Danh từ', 'Tính từ', 'Số từ'), ans: 'B', why: '"nghị lực" là danh từ chỉ khái niệm.' },
  ],
},

/* ═══════════ ĐỀ 23 — MRVT TÀI NĂNG ═══════════ */
{
  id: 7513, title: 'Đề 23 · Mở rộng vốn từ: Tài năng', time: 20,
  questions: [
    { sec: 'Nghĩa từ', name: 'Câu 1', pts: 1, text: '"Tài năng" là gì?', opts: o4('Khả năng đặc biệt làm giỏi một việc gì đó', 'Sức khoẻ tốt', 'Tiền của nhiều', 'Nhà cửa đẹp'), ans: 'A', why: '"tài năng" là khả năng đặc biệt, làm giỏi hơn người ở một lĩnh vực.' },
    { sec: 'Từ ngữ', name: 'Câu 2', pts: 1, text: 'Từ nào chỉ người có tài?', opts: o4('kẻ ngốc', 'tài hoa', 'vụng về', 'lười nhác'), ans: 'B', why: '"tài hoa" chỉ người có tài, khéo léo.' },
    { sec: 'Thành ngữ', name: 'Câu 3', pts: 1, text: 'Câu nào ca ngợi tài năng, giá trị của con người?', opts: o4('Chân lấm tay bùn', 'Ăn no ngủ kĩ', 'Người ta là hoa đất', 'Đứng núi này trông núi nọ'), ans: 'C', why: '"Người ta là hoa đất" ca ngợi con người là vốn quý, tinh hoa của đất trời.' },
    { sec: 'Loại trừ', name: 'Câu 4', pts: 1, text: 'Từ nào KHÔNG nói về người tài giỏi?', opts: o4('tài ba', 'xuất chúng', 'lỗi lạc', 'tầm thường'), ans: 'D', why: '"tầm thường" trái với tài giỏi nên không thuộc nhóm này.' },
    { sec: 'Cùng nghĩa', name: 'Câu 5', pts: 1, text: '"Tài giỏi" cùng nghĩa với từ nào?', opts: o4('tài ba', 'ngu dốt', 'vụng về', 'kém cỏi'), ans: 'A', why: '"tài ba" cùng nghĩa với "tài giỏi".' },
    { sec: 'Nghĩa tiếng', name: 'Câu 6', pts: 1, text: 'Tiếng "tài" trong "tài năng, tài giỏi, tài ba" có nghĩa là gì?', opts: o4('Tiền của', 'Có khả năng hơn người', 'Yếu kém', 'Lười biếng'), ans: 'B', why: 'Ở các từ này, "tài" mang nghĩa "có khả năng hơn người".' },
    { sec: 'Nghĩa từ', name: 'Câu 7', pts: 1, text: 'Người "đa tài" là người như thế nào?', opts: o4('Không có tài gì', 'Chỉ giỏi một việc', 'Có tài về nhiều mặt', 'Lười học'), ans: 'C', why: '"đa tài" là có tài về nhiều lĩnh vực.' },
    { sec: 'Trái nghĩa', name: 'Câu 8', pts: 1, text: 'Từ nào trái nghĩa với "tài giỏi"?', opts: o4('kém cỏi', 'xuất sắc', 'lỗi lạc', 'tài hoa'), ans: 'A', why: '"tài giỏi" trái nghĩa với "kém cỏi".' },
    { sec: 'Thành ngữ', name: 'Câu 9', pts: 1, text: '"Công thành danh toại" ý nói điều gì?', opts: o4('Làm việc thất bại', 'Sống nghèo khó', 'Không có chí hướng', 'Thành công, có công danh sự nghiệp'), ans: 'D', why: '"Công thành danh toại" nghĩa là sự nghiệp thành đạt, có công danh.' },
    { sec: 'Ngữ pháp', name: 'Câu 10', pts: 1, text: 'Từ "tài năng" là danh từ chỉ gì?', opts: o4('Sự vật cụ thể', 'Khái niệm (điều trừu tượng)', 'Con vật', 'Địa danh'), ans: 'B', why: '"tài năng" là danh từ chỉ khái niệm.' },
  ],
},

/* ═══════════ ĐỀ 24 — MRVT CÁI ĐẸP ═══════════ */
{
  id: 7514, title: 'Đề 24 · Mở rộng vốn từ: Cái đẹp', time: 20,
  questions: [
    { sec: 'Từ ngữ', name: 'Câu 1', pts: 1, text: 'Từ nào chỉ cái đẹp?', opts: o4('xinh đẹp', 'xấu xí', 'thô kệch', 'bẩn thỉu'), ans: 'A', why: '"xinh đẹp" chỉ vẻ đẹp.' },
    { sec: 'Trái nghĩa', name: 'Câu 2', pts: 1, text: 'Từ nào trái nghĩa với "đẹp"?', opts: o4('xinh', 'xấu', 'duyên', 'tươi'), ans: 'B', why: '"đẹp" trái nghĩa với "xấu".' },
    { sec: 'Thành ngữ', name: 'Câu 3', pts: 1, text: '"Đẹp người đẹp nết" ca ngợi điều gì?', opts: o4('Chỉ đẹp bề ngoài', 'Chỉ giàu có', 'Đẹp cả hình thức lẫn tính nết', 'Chỉ khoẻ mạnh'), ans: 'C', why: '"Đẹp người đẹp nết" khen người vừa đẹp bề ngoài vừa đẹp tính nết.' },
    { sec: 'Từ ngữ', name: 'Câu 4', pts: 1, text: 'Từ nào tả vẻ đẹp của thiên nhiên?', opts: o4('cần cù', 'thông minh', 'dũng cảm', 'hùng vĩ'), ans: 'D', why: '"hùng vĩ" tả vẻ đẹp to lớn, tráng lệ của thiên nhiên.' },
    { sec: 'Tục ngữ', name: 'Câu 5', pts: 1, text: 'Câu tục ngữ "Cái nết đánh chết cái đẹp" đề cao điều gì?', opts: o4('Nết na, phẩm chất tốt quý hơn vẻ đẹp bề ngoài', 'Vẻ đẹp bên ngoài', 'Sự giàu sang', 'Sức khoẻ'), ans: 'A', why: 'Câu tục ngữ đề cao tính nết, phẩm chất hơn vẻ đẹp hình thức.' },
    { sec: 'Loại trừ', name: 'Câu 6', pts: 1, text: 'Từ nào KHÔNG tả cái đẹp?', opts: o4('lộng lẫy', 'xấu xí', 'duyên dáng', 'xinh xắn'), ans: 'B', why: '"xấu xí" trái với cái đẹp nên không thuộc nhóm này.' },
    { sec: 'Nghĩa từ', name: 'Câu 7', pts: 1, text: 'Từ "tươi tắn" thường tả vẻ đẹp của gì?', opts: o4('Của đồ vật hỏng', 'Của cảnh buồn', 'Của khuôn mặt, nụ cười rạng rỡ', 'Của bóng tối'), ans: 'C', why: '"tươi tắn" tả khuôn mặt, nụ cười rạng rỡ, đầy sức sống.' },
    { sec: 'Nghĩa từ', name: 'Câu 8', pts: 1, text: 'Từ "rực rỡ" thường dùng để tả gì?', opts: o4('Màu sắc tươi sáng, đẹp mắt', 'Âm thanh', 'Mùi vị', 'Nhiệt độ'), ans: 'A', why: '"rực rỡ" tả màu sắc, ánh sáng tươi sáng, nổi bật.' },
    { sec: 'Cùng nghĩa', name: 'Câu 9', pts: 1, text: 'Từ nào cùng nghĩa với "xinh đẹp"?', opts: o4('xấu xí', 'già nua', 'tiều tuỵ', 'kiều diễm'), ans: 'D', why: '"kiều diễm" cùng nghĩa với "xinh đẹp".' },
    { sec: 'Nghĩa từ', name: 'Câu 10', pts: 1, text: 'Vẻ đẹp "thuỳ mị, nết na" nói về điều gì?', opts: o4('Vẻ đẹp bên ngoài', 'Vẻ đẹp về tính nết, tâm hồn', 'Sự giàu có', 'Sức mạnh'), ans: 'B', why: '"thuỳ mị, nết na" là vẻ đẹp của tính nết, tâm hồn.' },
  ],
},

/* ═══════════ ĐỀ 25 — ĐỌC HIỂU "NGƯỜI ĂN XIN" ═══════════ */
{
  id: 7515, title: 'Đề 25 · Đọc hiểu — Người ăn xin', time: 20,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV4_R8, text: 'Người ăn xin trong bài là ai?', opts: o4('Một ông lão già lọm khọm', 'Một cậu bé', 'Một cô gái', 'Một bác nông dân'), ans: 'A', why: 'Bài đọc: "Một người ăn xin già lọm khọm đứng trước mặt cậu bé."' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV4_R8, text: 'Đôi mắt ông lão như thế nào?', opts: o4('Sáng long lanh', 'Đỏ hoe, giàn giụa nước mắt', 'Nhắm nghiền', 'Mù loà'), ans: 'B', why: 'Bài đọc: "Đôi mắt ông đỏ hoe, giàn giụa nước mắt."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV4_R8, text: 'Cậu bé đã làm gì để tìm thứ cho ông lão?', opts: o4('Tìm sách vở', 'Tìm đồ chơi', 'Lục hết các túi nhưng chẳng có gì', 'Tìm bút'), ans: 'C', why: 'Bài đọc: "Cậu bé lục hết túi nọ đến túi kia mà chẳng có gì."' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV4_R8, text: 'Cậu bé đã làm gì với ông lão?', opts: o4('Nắm chặt bàn tay run rẩy của ông và xin lỗi', 'Bỏ đi ngay', 'Cười nhạo ông', 'Xua đuổi ông'), ans: 'A', why: 'Bài đọc: "Cậu nắm chặt lấy bàn tay run rẩy của ông lão và nói: Ông đừng giận cháu..."' },
    { sec: 'Đọc hiểu', name: 'Câu 5', pts: 1, read: TV4_R8, text: 'Ông lão đã nói gì với cậu bé?', opts: o4('Trách mắng cậu', 'Đòi tiền cậu', 'Im lặng bỏ đi', 'Cảm ơn vì cậu đã cho ông'), ans: 'D', why: 'Bài đọc: "Cháu ơi, cảm ơn cháu! Như vậy là cháu đã cho lão rồi."' },
    { sec: 'Ý nghĩa', name: 'Câu 6', pts: 1, read: TV4_R8, text: 'Vì sao ông lão nói "cháu đã cho lão rồi" dù cậu bé không có gì?', opts: o4('Vì cậu cho tiền', 'Vì cậu đã cho ông tình thương và sự tôn trọng', 'Vì cậu cho thức ăn', 'Vì cậu cho áo ấm'), ans: 'B', why: 'Cậu bé đã trao cho ông lão tình thương, sự cảm thông và tôn trọng — đó là món quà quý.' },
    { sec: 'Ý nghĩa', name: 'Câu 7', pts: 1, read: TV4_R8, text: 'Câu chuyện ca ngợi điều gì?', opts: o4('Sự giàu có', 'Sự khôn ngoan', 'Tình thương giữa con người với con người', 'Lòng dũng cảm'), ans: 'C', why: 'Câu chuyện đề cao tình thương, sự đồng cảm giữa con người với con người.' },
    { sec: 'Từ ngữ', name: 'Câu 8', pts: 1, read: TV4_R8, text: 'Từ "run rẩy" là từ ghép hay từ láy?', opts: o4('Từ láy', 'Từ ghép', 'Từ đơn', 'Danh từ riêng'), ans: 'A', why: '"run rẩy" lặp âm đầu "r" nên là từ láy.' },
    { sec: 'Ngữ pháp', name: 'Câu 9', pts: 1, read: TV4_R8, text: 'Trong câu "Ông lão mỉm cười.", vị ngữ là bộ phận nào?', opts: o4('Ông', 'lão', 'Ông lão', 'mỉm cười'), ans: 'D', why: '"mỉm cười" nêu hoạt động nên là vị ngữ.' },
    { sec: 'Dấu câu', name: 'Câu 10', pts: 1, read: TV4_R8, text: 'Lời nói trực tiếp của ông lão được đặt trong dấu gì?', opts: o4('Dấu ngoặc đơn', 'Dấu ngoặc kép', 'Dấu gạch ngang', 'Dấu phẩy'), ans: 'B', why: 'Lời nói trực tiếp trong bài được đặt trong dấu ngoặc kép.' },
  ],
},

/* ═══════════ ĐỀ 26 — TỪ GHÉP (TỔNG HỢP / PHÂN LOẠI) ═══════════ */
{
  id: 7516, title: 'Đề 26 · Từ ghép tổng hợp và phân loại', time: 20,
  questions: [
    { sec: 'Khái niệm', name: 'Câu 1', pts: 1, text: 'Từ ghép được chia thành mấy loại chính?', opts: o4('Hai: từ ghép tổng hợp và từ ghép phân loại', 'Một loại', 'Ba loại', 'Bốn loại'), ans: 'A', why: 'Từ ghép có hai loại: từ ghép tổng hợp và từ ghép phân loại.' },
    { sec: 'Khái niệm', name: 'Câu 2', pts: 1, text: 'Từ ghép tổng hợp có nghĩa như thế nào?', opts: o4('Chỉ một sự vật cụ thể', 'Mang nghĩa khái quát, chung', 'Là từ láy', 'Là từ đơn'), ans: 'B', why: 'Từ ghép tổng hợp mang nghĩa chung, khái quát (ví dụ: bàn ghế, quần áo).' },
    { sec: 'Phân loại', name: 'Câu 3', pts: 1, text: '"Xe đạp" là từ ghép loại nào?', opts: o4('Tổng hợp', 'Từ láy', 'Phân loại', 'Từ đơn'), ans: 'C', why: '"Xe đạp" chỉ một loại xe cụ thể nên là từ ghép phân loại.' },
    { sec: 'Phân loại', name: 'Câu 4', pts: 1, text: '"Bàn ghế" là từ ghép loại nào?', opts: o4('Từ láy', 'Phân loại', 'Từ đơn', 'Tổng hợp'), ans: 'D', why: '"Bàn ghế" mang nghĩa chung chỉ đồ đạc nên là từ ghép tổng hợp.' },
    { sec: 'Nhận biết', name: 'Câu 5', pts: 1, text: 'Từ nào là từ ghép phân loại?', opts: o4('hoa hồng', 'quần áo', 'nhà cửa', 'sách vở'), ans: 'A', why: '"hoa hồng" chỉ một loại hoa cụ thể nên là từ ghép phân loại.' },
    { sec: 'Nhận biết', name: 'Câu 6', pts: 1, text: 'Từ nào là từ ghép tổng hợp?', opts: o4('bút chì', 'cây cối', 'xe máy', 'áo len'), ans: 'B', why: '"cây cối" mang nghĩa chung nên là từ ghép tổng hợp.' },
    { sec: 'Loại trừ', name: 'Câu 7', pts: 1, text: 'Từ nào KHÔNG phải là từ ghép?', opts: o4('học hành', 'ăn uống', 'lấp lánh', 'ruộng vườn'), ans: 'C', why: '"lấp lánh" lặp âm đầu "l" nên là từ láy, không phải từ ghép.' },
    { sec: 'Vận dụng', name: 'Câu 8', pts: 1, text: 'Các từ "ông bà, cha mẹ, anh em" là những từ ghép chỉ gì?', opts: o4('Người thân trong gia đình', 'Đồ vật', 'Con vật', 'Cây cối'), ans: 'A', why: 'Đó là những từ ghép chỉ người thân trong gia đình.' },
    { sec: 'Cấu tạo', name: 'Câu 9', pts: 1, text: 'Từ ghép "học sinh" gồm mấy tiếng có nghĩa?', opts: o4('Không tiếng nào', 'Một tiếng', 'Ba tiếng', 'Hai tiếng'), ans: 'D', why: '"học sinh" gồm hai tiếng "học" và "sinh", đều có nghĩa.' },
    { sec: 'Nhận biết', name: 'Câu 10', pts: 1, text: 'Từ nào sau đây là từ ghép?', opts: o4('long lanh', 'bánh chưng', 'rì rào', 'xanh xao'), ans: 'B', why: '"bánh chưng" gồm hai tiếng có nghĩa nên là từ ghép (các từ còn lại là từ láy).' },
  ],
},

/* ═══════════ ĐỀ 27 — TỪ LÁY ═══════════ */
{
  id: 7517, title: 'Đề 27 · Từ láy (âm đầu, vần, cả tiếng)', time: 20,
  questions: [
    { sec: 'Khái niệm', name: 'Câu 1', pts: 1, text: 'Từ láy thường được chia thành mấy kiểu chính?', opts: o4('Láy âm đầu, láy vần, láy cả tiếng', 'Chỉ một kiểu', 'Bốn kiểu', 'Không phân kiểu'), ans: 'A', why: 'Từ láy gồm ba kiểu chính: láy âm đầu, láy vần và láy cả tiếng.' },
    { sec: 'Phân loại', name: 'Câu 2', pts: 1, text: '"Long lanh" là từ láy kiểu gì?', opts: o4('Láy vần', 'Láy âm đầu', 'Láy cả tiếng', 'Không phải từ láy'), ans: 'B', why: '"long lanh" lặp lại âm đầu "l" nên là láy âm đầu.' },
    { sec: 'Phân loại', name: 'Câu 3', pts: 1, text: '"Lao xao" là từ láy kiểu gì?', opts: o4('Láy âm đầu', 'Láy cả tiếng', 'Láy vần', 'Từ ghép'), ans: 'C', why: '"lao xao" lặp lại vần "ao" nên là láy vần.' },
    { sec: 'Phân loại', name: 'Câu 4', pts: 1, text: '"Xanh xanh" là từ láy kiểu gì?', opts: o4('Láy âm đầu', 'Láy vần', 'Từ ghép', 'Láy cả tiếng'), ans: 'D', why: '"xanh xanh" lặp lại cả tiếng "xanh" nên là láy cả tiếng.' },
    { sec: 'Nhận biết', name: 'Câu 5', pts: 1, text: 'Từ nào là từ láy?', opts: o4('mềm mại', 'bàn ghế', 'quần áo', 'sách vở'), ans: 'A', why: '"mềm mại" lặp âm đầu "m" nên là từ láy.' },
    { sec: 'Nghĩa từ láy', name: 'Câu 6', pts: 1, text: 'Từ láy "khúc khích" gợi tả điều gì?', opts: o4('Màu sắc', 'Tiếng cười', 'Mùi vị', 'Hình dáng'), ans: 'B', why: '"khúc khích" gợi tả tiếng cười nhỏ, vui.' },
    { sec: 'Nghĩa từ láy', name: 'Câu 7', pts: 1, text: 'Từ láy "lấp lánh" gợi tả điều gì?', opts: o4('Âm thanh', 'Mùi hương', 'Ánh sáng', 'Nhiệt độ'), ans: 'C', why: '"lấp lánh" gợi tả ánh sáng lúc loé lên, lúc tắt.' },
    { sec: 'Loại trừ', name: 'Câu 8', pts: 1, text: 'Từ nào KHÔNG phải là từ láy?', opts: o4('tươi tốt', 'mênh mông', 'rì rào', 'thì thầm'), ans: 'A', why: '"tươi tốt" gồm hai tiếng đều có nghĩa nên là từ ghép, không phải từ láy.' },
    { sec: 'Phân loại', name: 'Câu 9', pts: 1, text: '"Nhỏ nhắn" là từ láy kiểu gì?', opts: o4('Láy vần', 'Láy cả tiếng', 'Từ ghép', 'Láy âm đầu'), ans: 'D', why: '"nhỏ nhắn" lặp lại âm đầu "nh" nên là láy âm đầu.' },
    { sec: 'Tác dụng', name: 'Câu 10', pts: 1, text: 'Từ láy thường dùng để làm gì trong văn miêu tả?', opts: o4('Đếm số lượng', 'Gợi tả hình dáng, âm thanh, màu sắc sinh động', 'Đặt câu hỏi', 'Ra lệnh'), ans: 'B', why: 'Từ láy giúp gợi tả hình dáng, âm thanh, màu sắc... một cách sinh động, gợi cảm.' },
  ],
},

/* ═══════════ ĐỀ 28 — DẤU CÂU TỔNG HỢP ═══════════ */
{
  id: 7518, title: 'Đề 28 · Dấu câu tổng hợp', time: 20,
  questions: [
    { sec: 'Dấu gạch ngang', name: 'Câu 1', pts: 1, text: 'Dấu gạch ngang có tác dụng nào sau đây?', opts: o4('Đánh dấu lời nói của nhân vật; đánh dấu phần chú thích; đánh dấu ý liệt kê', 'Kết thúc câu hỏi', 'Bộc lộ cảm xúc', 'Viết hoa từ ngữ'), ans: 'A', why: 'Dấu gạch ngang dùng để đánh dấu lời nói nhân vật, phần chú thích và các ý liệt kê.' },
    { sec: 'Dấu hai chấm', name: 'Câu 2', pts: 1, text: 'Dấu hai chấm trong câu "Trên bàn có nhiều thứ: sách, vở, bút." dùng để làm gì?', opts: o4('Dẫn lời nói', 'Báo hiệu phần liệt kê theo sau', 'Kết thúc câu', 'Để hỏi'), ans: 'B', why: 'Dấu hai chấm ở đây báo hiệu phần liệt kê (sách, vở, bút) đứng sau.' },
    { sec: 'Dấu ngoặc kép', name: 'Câu 3', pts: 1, text: 'Dấu ngoặc kép trong câu: Bạn Lan nói: “Mình rất vui.” dùng để làm gì?', opts: o4('Liệt kê', 'Chú thích', 'Dẫn lời nói trực tiếp', 'Ngăn cách vế câu'), ans: 'C', why: 'Dấu ngoặc kép đánh dấu lời nói trực tiếp của nhân vật.' },
    { sec: 'Dấu gạch ngang', name: 'Câu 4', pts: 1, text: 'Câu nào dùng dấu gạch ngang để đánh dấu lời nói của nhân vật?', opts: o4('Em có 3 cuốn sách: Toán, Văn, Anh.', 'Chuyến tàu Hà Nội — Huế.', 'Con mèo — vật nuôi hiền lành.', '— Mẹ ơi, con đói quá!'), ans: 'D', why: 'Dấu gạch ngang đầu dòng trong "— Mẹ ơi, con đói quá!" đánh dấu lời nói của nhân vật.' },
    { sec: 'Dấu hai chấm', name: 'Câu 5', pts: 1, text: 'Trước lời nói trực tiếp của nhân vật thường dùng những dấu gì?', opts: o4('Dấu hai chấm và dấu ngoặc kép', 'Dấu chấm than', 'Dấu phẩy', 'Không cần dấu'), ans: 'A', why: 'Lời nói trực tiếp thường được báo hiệu bằng dấu hai chấm và đặt trong dấu ngoặc kép.' },
    { sec: 'Dấu chấm than', name: 'Câu 6', pts: 1, text: 'Dấu chấm than thường đặt ở cuối loại câu nào?', opts: o4('Câu kể', 'Câu cảm và câu khiến', 'Câu hỏi', 'Mọi loại câu'), ans: 'B', why: 'Dấu chấm than thường đặt ở cuối câu cảm và câu khiến.' },
    { sec: 'Dấu câu', name: 'Câu 7', pts: 1, text: 'Câu "Ôi, cảnh đẹp quá!" kết thúc bằng dấu gì?', opts: o4('Dấu chấm', 'Dấu chấm hỏi', 'Dấu chấm than', 'Dấu phẩy'), ans: 'C', why: 'Đây là câu cảm nên kết thúc bằng dấu chấm than.' },
    { sec: 'Dấu phẩy', name: 'Câu 8', pts: 1, text: 'Dấu phẩy trong câu "Gà, vịt, ngan đều là gia cầm." dùng để làm gì?', opts: o4('Dẫn lời nói', 'Kết thúc câu', 'Bộc lộ cảm xúc', 'Ngăn cách các từ ngữ cùng loại (liệt kê)'), ans: 'D', why: 'Dấu phẩy ngăn cách các từ ngữ cùng giữ chức vụ trong câu (gà, vịt, ngan).' },
    { sec: 'Dùng đúng', name: 'Câu 9', pts: 1, text: 'Câu nào đặt dấu câu đúng?', opts: o4('Bạn tên là gì?', 'Bạn tên là gì.', 'Bạn tên là gì!', 'Bạn tên là gì,'), ans: 'A', why: 'Đây là câu hỏi nên cuối câu phải dùng dấu chấm hỏi.' },
    { sec: 'Đối thoại', name: 'Câu 10', pts: 1, text: 'Trong đoạn đối thoại, mỗi lời nói của nhân vật (đầu dòng) thường bắt đầu bằng dấu gì?', opts: o4('Dấu ngoặc kép', 'Dấu gạch ngang', 'Dấu hai chấm', 'Dấu phẩy'), ans: 'B', why: 'Khi trình bày đối thoại, mỗi lời nhân vật thường bắt đầu bằng dấu gạch ngang ở đầu dòng.' },
  ],
},

/* ═══════════ ĐỀ 29 — ĐỌC HIỂU "CHIM ÉN" ═══════════ */
{
  id: 7519, title: 'Đề 29 · Đọc hiểu — Chim én', time: 20,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV4_R9, text: 'Chim én báo hiệu mùa nào?', opts: o4('Mùa xuân', 'Mùa hạ', 'Mùa thu', 'Mùa đông'), ans: 'A', why: 'Bài đọc: "Chim én là loài chim báo hiệu mùa xuân."' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV4_R9, text: 'Khi nào đàn én lại bay về?', opts: o4('Khi trời rét đậm', 'Khi tiết trời ấm áp', 'Khi có bão', 'Khi trời tối'), ans: 'B', why: 'Bài đọc: "Mỗi khi tiết trời ấm áp, từng đàn én lại bay về."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV4_R9, text: 'Đuôi chim én được tả như thế nào?', opts: o4('Tròn như quả bóng', 'Ngắn ngủn', 'Xẻ như chiếc kéo', 'Cong như lưỡi liềm'), ans: 'C', why: 'Bài đọc: "đuôi xẻ như chiếc kéo."' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV4_R9, text: 'Chim én bắt côn trùng khi nào?', opts: o4('Khi đậu trên cành', 'Ban đêm', 'Dưới nước', 'Ngay khi đang bay'), ans: 'D', why: 'Bài đọc: "Chúng bắt côn trùng ngay khi đang bay."' },
    { sec: 'Đọc hiểu', name: 'Câu 5', pts: 1, read: TV4_R9, text: 'Chim én có ích cho nhà nông vì sao?', opts: o4('Giúp diệt sâu bọ hại mùa màng', 'Cho thịt ngon', 'Kéo cày', 'Giữ nhà'), ans: 'A', why: 'Bài đọc: "giúp nhà nông diệt sâu bọ hại mùa màng."' },
    { sec: 'Đọc hiểu', name: 'Câu 6', pts: 1, read: TV4_R9, text: 'Cánh chim én có đặc điểm gì?', opts: o4('Ngắn và tròn', 'Dài và nhọn', 'To và rộng', 'Cụt ngủn'), ans: 'B', why: 'Bài đọc: "cánh dài và nhọn."' },
    { sec: 'Thể loại', name: 'Câu 7', pts: 1, read: TV4_R9, text: 'Bài văn trên thuộc kiểu văn bản nào?', opts: o4('Truyện cổ tích', 'Bài thơ', 'Văn bản giới thiệu loài vật', 'Bức thư'), ans: 'C', why: 'Bài giới thiệu đặc điểm, ích lợi của chim én nên là văn bản thông tin.' },
    { sec: 'Ngữ pháp', name: 'Câu 8', pts: 1, read: TV4_R9, text: 'Trong câu "Chim én chao liệng trên bầu trời.", từ "chao liệng" là từ loại gì?', opts: o4('Động từ', 'Danh từ', 'Tính từ', 'Số từ'), ans: 'A', why: '"chao liệng" chỉ hoạt động bay của én nên là động từ.' },
    { sec: 'Ngữ pháp', name: 'Câu 9', pts: 1, read: TV4_R9, text: 'Câu "Én có thân hình nhỏ." thuộc kiểu câu kể nào?', opts: o4('Ai làm gì?', 'Ai là gì?', 'Câu hỏi', 'Ai thế nào?'), ans: 'D', why: 'Vị ngữ nêu đặc điểm "có thân hình nhỏ" nên là câu kể "Ai thế nào?".' },
    { sec: 'Biện pháp', name: 'Câu 10', pts: 1, read: TV4_R9, text: 'Hình ảnh "đuôi xẻ như chiếc kéo" sử dụng biện pháp gì?', opts: o4('Nhân hoá', 'So sánh', 'Điệp từ', 'Đảo ngữ'), ans: 'B', why: 'Đuôi én được so sánh với "chiếc kéo" qua từ "như" nên là biện pháp so sánh.' },
  ],
},

/* ═══════════ ĐỀ 30 — ÔN TẬP TỔNG HỢP NÂNG CAO ═══════════ */
{
  id: 7520, title: 'Đề 30 · Ôn tập tổng hợp nâng cao', time: 20,
  questions: [
    { sec: 'Danh từ', name: 'Câu 1', pts: 1, text: 'Từ nào là danh từ chỉ khái niệm?', opts: o4('lòng dũng cảm', 'bàn', 'chạy', 'xanh'), ans: 'A', why: '"lòng dũng cảm" chỉ một khái niệm trừu tượng nên là danh từ chỉ khái niệm.' },
    { sec: 'Trạng ngữ', name: 'Câu 2', pts: 1, text: 'Trong câu "Trên cây, chim hót líu lo.", bộ phận "Trên cây" là gì?', opts: o4('Chủ ngữ', 'Trạng ngữ', 'Vị ngữ', 'Danh từ riêng'), ans: 'B', why: '"Trên cây" chỉ nơi chốn nên là trạng ngữ.' },
    { sec: 'Từ láy', name: 'Câu 3', pts: 1, text: 'Từ nào là từ láy?', opts: o4('học hành', 'bạn bè', 'thấp thoáng', 'ăn uống'), ans: 'C', why: '"thấp thoáng" lặp âm đầu "th" nên là từ láy.' },
    { sec: 'So sánh', name: 'Câu 4', pts: 1, text: 'Câu "Mặt trời như quả cầu lửa." dùng biện pháp gì?', opts: o4('Nhân hoá', 'Điệp ngữ', 'Đảo ngữ', 'So sánh'), ans: 'D', why: 'Mặt trời được so sánh với "quả cầu lửa" qua từ "như".' },
    { sec: 'Câu kể', name: 'Câu 5', pts: 1, text: 'Câu "Bác nông dân đang cày ruộng." thuộc kiểu câu kể nào?', opts: o4('Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Câu cảm'), ans: 'A', why: 'Vị ngữ "đang cày ruộng" chỉ hoạt động nên là câu kể "Ai làm gì?".' },
    { sec: 'Chính tả', name: 'Câu 6', pts: 1, text: 'Từ nào viết đúng chính tả?', opts: o4('xuất xắc', 'xuất sắc', 'suất xắc', 'suất sắc'), ans: 'B', why: 'Viết đúng là "xuất sắc".' },
    { sec: 'Nhân hoá', name: 'Câu 7', pts: 1, text: 'Câu "Chị mây dạo chơi trên bầu trời." dùng biện pháp gì?', opts: o4('So sánh', 'Điệp từ', 'Nhân hoá', 'Đảo ngữ'), ans: 'C', why: 'Mây được gọi là "Chị" và biết "dạo chơi" như người nên là nhân hoá.' },
    { sec: 'Trạng ngữ', name: 'Câu 8', pts: 1, text: 'Trạng ngữ "Vì mưa to" chỉ điều gì?', opts: o4('Thời gian', 'Nơi chốn', 'Mục đích', 'Nguyên nhân'), ans: 'D', why: '"Vì mưa to" chỉ nguyên nhân.' },
    { sec: 'Từ ngữ', name: 'Câu 9', pts: 1, text: 'Từ nào trái nghĩa với "chăm chỉ"?', opts: o4('lười biếng', 'siêng năng', 'cần cù', 'chịu khó'), ans: 'A', why: '"chăm chỉ" trái nghĩa với "lười biếng".' },
    { sec: 'Kiểu câu', name: 'Câu 10', pts: 1, text: 'Câu "Ôi, quê hương đẹp quá!" là kiểu câu gì?', opts: o4('Câu kể', 'Câu cảm', 'Câu hỏi', 'Câu khiến'), ans: 'B', why: 'Câu bộc lộ cảm xúc, kết thúc bằng dấu chấm than nên là câu cảm.' },
  ],
},

];

SUBJECTS.push({
  id: 'tviet4', name: 'Tiếng Việt', short: 'Tiếng Việt 4', icon: '📖', grade: 4,
  exams: TV4_EXAMS, ready: true,
  heroTitle: 'Tiếng Việt lớp 4 — đọc hiểu, từ loại, từ ghép – từ láy, các kiểu câu và dấu câu',
  heroMeta: '📚 30 đề &nbsp;•&nbsp; 300 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; bám chương trình GDPT 2018',
});
