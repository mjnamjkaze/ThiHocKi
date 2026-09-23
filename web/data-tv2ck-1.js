// TIẾNG VIỆT 2 — ĐỀ KIỂM TRA CUỐI HỌC KÌ 1 · SÁCH KẾT NỐI TRI THỨC (id 3701–3705)
// Chép trọn đề giấy của trường: A. Kiểm tra đọc (đọc thành tiếng + đọc hiểu, luyện từ và câu)
// và B. Kiểm tra viết (chính tả + tập làm văn). Điểm gốc (Đọc 10 + Viết 10) CHIA ĐÔI → thang 10.
//
// NGUỒN (đề thật, có tên trường ghi trên đầu đề):
//  3701 TH Đặng Cương — Phòng GD&ĐT quận An Dương, Hải Phòng — CK1 năm học 2024–2025
//       https://thuvienbaigiangdientu.com/de-kiem-tra-cuoi-hoc-ky-i-mon-tieng-viet-lop-2-nam-hoc-2024-2025-truong-tieu-hoc-dang-cuong-co-dap-an-ma-tran-8173/
//       Sách KNTT: nghe – viết “Tớ nhớ cậu” (SGK TV2 tập 1, tr. 83 — Bài 18 KNTT).
//  3702 TH Trần Thành Ngọ — UBND quận Kiến An, Hải Phòng — CK1 năm học 2023–2024 (đầu đề và
//       đáp án ghi 2023–2024; trang nguồn đặt tên file “2022-2023”)
//       https://lop2.vn/de-kiem-tra-cuoi-hoc-ki-i-mon-tieng-viet-lop-2-nam-hoc-2022-2023-truong-tieu-hoc-tran-thanh-ngo-co-dap-an-8750/
//       Sách KNTT: đề CK1 cùng trường năm trước cho nghe – viết “Nhím nâu kết bạn” (SGK TV2 tập 1,
//       tr. 91 — Bài 20 KNTT): https://lop2.vn/de-kiem-tra-cuoi-hoc-ki-i-tieng-viet-lop-2-nam-hoc-2022-2023-truong-tieu-hoc-tran-thanh-ngo-co-dap-an-8747/
//  3703 TH Phạm Công Bình — Phòng GD&ĐT Yên Lạc, Vĩnh Phúc — CK1 năm học 2023–2024
//       https://dethilop2.com/bai-kiem-tra-cuoi-hoc-ky-i-mon-tieng-viet-lop-2-nam-hoc-2023-2024-truong-tieu-hoc-pham-cong-binh-co-dap-an-1586/
//       Sách KNTT: nghe – viết “Đồ chơi yêu thích” (SGK TV2 tập 1, tr. 99 — Bài 22 KNTT).
//  3704 TH Nghĩa Thành — UBND huyện Châu Đức, Bà Rịa – Vũng Tàu — CK1 năm học 2023–2024
//       https://dethilop2.com/de-kiem-tra-cuoi-hoc-ky-i-mon-tieng-viet-lop-2-nam-hoc-2023-2024-truong-tieu-hoc-nghia-thanh-co-dap-an-1620/
//       Sách KNTT: nghe – viết “Tớ nhớ cậu” (đúng đoạn trong SGK KNTT tập 1, tr. 83).
//  3705 TH Chu Minh (xã Chu Minh, huyện Ba Vì, Hà Nội) — CK1 năm học 2022–2023
//       https://dethilop2.com/de-kiem-tra-dinh-ky-cuoi-hoc-ky-i-mon-tieng-viet-lop-2-nam-hoc-2022-2023-truong-tieu-hoc-chu-minh-co-dap-an-1408/
//       Sách KNTT: nghe – viết “Đồ chơi yêu thích” (SGK TV2 tập 1, tr. 99).
//  Không tìm được đề CK1 Tiếng Việt 2 KNTT của trường CLC nổi tiếng được công bố đủ chữ trên mạng
//  (trang trường CLC chỉ đăng file ảnh/PDF hoặc đề chương trình cũ), nên dùng đề thật của 5 trường
//  trên và ghi đúng tên trường, không gán nhãn CLC.
//
// ĐỌC THÀNH TIẾNG: đề gốc để GV cho HS bốc thăm một đoạn trong SGK TV2 tập 1 (riêng đề Trần Thành
// Ngọ: một đoạn ngoài SGK). Đoạn in trong `read` là bài SGK Kết nối tri thức tập 1, chép nguyên
// văn, để bố mẹ luyện cho con; có thể thay bằng đoạn khác dài tương đương.
// Chính tả nghe – viết: đề chỉ ghi tên bài SGK thì `model` chép nguyên văn đoạn trong SGK KNTT.
//
// SỬA SO VỚI NGUỒN: 3701 câu 2 đáp án nguồn ghi “A. Vui vẻ” nhưng “Vui vẻ” là phương án B → ans B.
// 3702: đáp án ô trống/gạch chân mất định dạng khi đăng — đã khôi phục theo hướng dẫn chấm.
// 3703 câu 8 phương án B in “song” → sửa “sông”. 3705: sửa viết hoa đầu câu trong bài đọc
// (“sẻ hốt hoảng”, “chuồn chuồn gọi”).

/* ── Bài đọc dùng chung ─────────────────────────────────────────────────────── */

// Đọc thành tiếng — bài SGK Tiếng Việt 2 tập 1, Kết nối tri thức (chép nguyên văn)
const TVCK1_TT1 = '<b>Thương ông</b> <i>(trích)</i><br>Ông bị đau chân<br>Nó sưng nó tấy<br>Đi phải chống gậy<br>Khập khiễng, khập khà,<br>Bước lên thềm nhà<br>Nhấc chân quá khó<br>Thấy ông nhăn nhó,<br>Việt chơi ngoài sân<br>Lon ton lại gần,<br>Âu yếm, nhanh nhảu:<br>- Ông vịn vai cháu,<br>Cháu đỡ ông lên.<br><i>(Tú Mỡ — SGK Tiếng Việt 2 tập 1, Kết nối tri thức, Bài 30)</i>';

const TVCK1_TT2 = '<b>Chơi chong chóng</b> <i>(đoạn 2)</i><br>An thường rủ bé Mai chơi chong chóng và thi xem ai thắng. Hai anh em chạy quanh sân cho chong chóng quay, rồi đột ngột dừng lại. Chong chóng của ai dừng quay trước thì người đó thua. An chạy nhanh hơn nên chong chóng quay lâu hơn. Thua mãi, Mai buồn thiu. An liền cho em giơ chong chóng ra trước quạt máy, còn mình thì phùng mỏ thổi phù phù cho chong chóng quay. Mai cười toe vì thắng.<br><i>(SGK Tiếng Việt 2 tập 1, Kết nối tri thức, Bài 32)</i>';

const TVCK1_TT3 = '<b>Cánh cửa nhớ bà</b><br>Ngày cháu còn thấp bé<br>Cánh cửa có hai then<br>Cháu chỉ cài then dưới<br>Nhờ bà cài then trên.<br><br>Mỗi năm cháu lớn lên<br>Bà lưng còng cắm cúi<br>Cháu cài được then trên<br>Bà chỉ cài then dưới...<br><br>Nay cháu về nhà mới<br>Bao cánh cửa - ô trời<br>Mỗi lần tay đẩy cửa<br>Lại nhớ bà khôn nguôi.<br><i>(Đoàn Thị Lam Luyến — SGK Tiếng Việt 2 tập 1, Kết nối tri thức, Bài 29)</i>';

const TVCK1_TT4 = '<b>Sự tích hoa tỉ muội</b> <i>(đoạn cuối)</i><br>Năm ấy, nước lũ dâng cao, Nết cõng em chạy theo dân làng đến nơi an toàn. Hai bàn chân Nết rớm máu. Thấy vậy, Bụt thương lắm. Bụt liền phẩy chiếc quạt thần. Kì lạ thay, bàn chân Nết bỗng lành hẳn. Nơi bàn chân Nết đi qua mọc lên những khóm hoa đỏ thắm. Hoa kết thành chùm, bông hoa lớn che chở cho nụ hoa bé nhỏ. Chúng cũng đẹp như tình chị em của Nết và Na.<br>Dân làng đặt tên cho loài hoa ấy là hoa tỉ muội.<br><i>(Theo Trần Mạnh Hùng — SGK Tiếng Việt 2 tập 1, Kết nối tri thức, Bài 25)</i>';

const TVCK1_TT5 = '<b>Trò chơi của bố</b> <i>(đoạn đầu)</i><br>Bố luôn dành cho Hường những điều ngạc nhiên. Lúc rảnh rỗi, hai bố con ngồi chơi với nhau như đôi bạn cùng tuổi.<br>Có lần, hai bố con chơi trò chơi “ăn cỗ”. Hường đưa cái bát nhựa cho bố:<br>- Mời bác xơi!<br>Bố đỡ bằng hai tay hẳn hoi và nói:<br>- Xin bác. Mời bác xơi!<br>- Bác xơi nữa không ạ?<br>- Cảm ơn bác! Tôi đủ rồi.<br>Hai bố con cùng phá lên cười.<br><i>(Theo Phong Thu — SGK Tiếng Việt 2 tập 1, Kết nối tri thức, Bài 28)</i>';

// Đọc hiểu — bài đọc của từng đề (chép nguyên văn đề gốc)
const TVCK1_R1 = '<b>Chim sẻ và cây lúa</b><br>Một hôm, trên cánh đồng xanh mướt, chim sẻ bay lượn tìm kiếm hạt lúa. Thấy lúa đã chín vàng, chim sẻ vui mừng: “Mình sẽ mang hạt lúa này về cho gia đình.” Cây lúa cười và nói: “Chim sẻ, cậu thật chăm chỉ! Tớ rất vui khi được giúp mọi người.” Chim sẻ đáp: “Cảm ơn cậu! Nhờ cậu mà chúng mình có thức ăn.” Từ đó, chim sẻ và cây lúa trở thành bạn tốt, luôn giúp đỡ nhau trong cuộc sống.<br><i>(Theo truyện cổ dân gian)</i>';

const TVCK1_R2 = '<b>Con búp bê vải</b><br>Ngày sinh nhật Thủy, mẹ đưa Thủy ra phố đồ chơi. Mẹ bảo Thủy chọn một thứ đồ chơi em thích nhất. Đi dọc gần hết phố bán đồ chơi, cô bé nhìn hoa cả mắt, vẫn không biết nên mua gì vì thứ nào em cũng thích. Đến cuối phố, thấy một bà cụ tóc bạc ngồi bán những con búp bê bằng vải giữa trời giá lạnh. Thủy kéo tay mẹ dừng lại. Bà cụ nhìn hai mẹ con Thủy, cười hiền hậu:<br>- Cháu mua búp bê cho cụ đi!<br>Thủy nhìn bà, rồi chỉ vào con búp bê được khâu bằng vụn vải xanh, mặt độn bông, hai mắt được chấm mực không đều nhau:<br>- Mẹ mua con búp bê này đi!<br>Trên đường về, mẹ hỏi Thủy:<br>- Sao con lại mua con búp bê này?<br>Thủy cười:<br>- Vì con thương bà. Bà già bằng bà nội mẹ nhỉ? Trời lạnh thế mà bà không được ở nhà.';

const TVCK1_R3 = '<b>Cô chủ không biết quý tình bạn</b><br>Một cô bé nuôi một con gà trống rất đẹp. Sáng sáng, gà trống gáy vang:<br>- Ò ó o! Xin chào cô chủ tí hon!<br>Một hôm nhìn thấy gà mái của bà hàng xóm có lớp lông tơ dày, ấm áp, cô bé liền đòi đổi gà trống lấy gà mái. Chẳng ngày nào gà mái quên đẻ một quả trứng hồng.<br>Hôm khác, bà hàng xóm mua về một con vịt. Cô bé nài nỉ bà đổi gà lấy vịt và thích thú ngắm vịt bơi lội trên sông.<br>Không lâu sau, người họ hàng đến chơi, dắt theo một chú chó nhỏ. Cô bé lại đòi đổi vịt lấy chó. Cô kể lể với chú chó:<br>- Ta có một con gà trống, ta đổi lấy gà mái. Rồi ta đổi gà mái lấy vịt. Còn lần này ta đổi vịt lấy chú mày đấy!<br>Đêm đến, chú chó cạy cửa trốn đi:<br>- Ta không muốn kết thân với một cô chủ không biết quý tình bạn.<br><i>(Theo Ô-xê-ê-va — Thuý Toàn dịch)</i>';

const TVCK1_R4 = '<b>Cò và Vạc</b><br>Cò và Vạc là hai anh em, nhưng tính nết rất khác nhau. Cò ngoan ngoãn, chăm chỉ học tập, được thầy yêu bạn mến. Còn Vạc thì lười biếng, không chịu học hành, suốt ngày chỉ rúc đầu trong cánh mà ngủ. Cò khuyên bảo em nhiều lần, nhưng Vạc chẳng nghe.<br>Nhờ siêng năng nên Cò học giỏi nhất lớp. Còn Vạc đành chịu dốt. Sợ chúng bạn chê cười, đêm đến Vạc mới dám bay đi kiếm ăn.<br>Ngày nay, lật cánh Cò lên, vẫn thấy một dúm lông màu vàng nhạt. Người ta bảo đấy là quyển sách của Cò. Cò chăm học nên lúc nào cũng mang sách bên mình. Sau những buổi mò tôm bắt ốc, Cò lại đậu trên ngọn tre giở sách ra đọc.<br><i>(Truyện cổ Việt Nam)</i>';

const TVCK1_R5 = '<b>Chim sẻ</b><br>Trong khu vườn nọ có các bạn kiến, ong, bướm, chuồn chuồn, chim sâu chơi với nhau rất thân. Chim sẻ cũng sống ở đó nhưng nó tự cho mình là thông minh, tài giỏi, hiểu biết hơn cả nên không muốn làm bạn với ai trong vườn mà chỉ kết bạn với quạ.<br>Một hôm, chim sẻ và quạ đang đứng ở cây đa đầu làng thì bỗng một viên đạn bay trúng sẻ. Sẻ hốt hoảng kêu la, đau đớn. Sợ quá, quạ vội bay đi mất. Cố gắng lắm sẻ mới bay về đến nhà. Chuồn chuồn bay qua nhìn thấy sẻ bị thương nằm bất tỉnh. Chuồn chuồn gọi ong, bướm đi tìm thuốc chữa vết thương còn kiến và chim sâu đi tìm thức ăn cho sẻ.<br>Khi tỉnh dậy, sẻ ngạc nhiên thấy bên cạnh mình không phải là quạ mà là các bạn quen thuộc trong vườn. Sẻ xấu hổ nói lời xin lỗi và cảm ơn các bạn.<br><i>(Theo Nguyễn Tấn Phát)</i>';

/* Tiêu chí chấm đọc thành tiếng (4 điểm gốc → 2 điểm) — dùng chung */
const TVCK1_TT_CHAM = '<b>Chấm (2 điểm — quy đổi từ 4 điểm của đề gốc):</b><br>• Đọc vừa đủ nghe, rõ ràng; tốc độ đạt yêu cầu (khoảng 50–70 tiếng/phút): 0,5 điểm.<br>• Đọc đúng tiếng, từ (không đọc sai quá 5 tiếng): 0,5 điểm.<br>• Ngắt nghỉ hơi đúng ở các dấu câu, các cụm từ rõ nghĩa: 0,5 điểm.<br>• Trả lời đúng câu hỏi về nội dung đoạn đọc: 0,5 điểm.';

/* Tiêu chí chấm chính tả / tập làm văn dùng chung (đã chia đôi) */
const TVCK1_TLV_CHAM = '<b>Chấm (3 điểm — quy đổi từ 6 điểm):</b> Nội dung đủ các ý theo gợi ý: 1,5 điểm. Kĩ năng: chữ viết, chính tả 0,5 điểm; dùng từ, đặt câu đúng 0,5 điểm; có sáng tạo, câu văn có cảm xúc 0,5 điểm. Viết lạc đề hoặc quá ít câu thì tuỳ mức độ trừ điểm.';

TV2CK.push(

/* ═══════════ 3701 — TH ĐẶNG CƯƠNG (AN DƯƠNG, HẢI PHÒNG) · CK1 2024–2025 ═══════════ */
{
  id: 3701, title: 'CK1 · TH Đặng Cương (Hải Phòng) 2024–2025', time: 80,
  sem: 1, book: 'Kết nối tri thức',
  src: 'https://thuvienbaigiangdientu.com/de-kiem-tra-cuoi-hoc-ky-i-mon-tieng-viet-lop-2-nam-hoc-2024-2025-truong-tieu-hoc-dang-cuong-co-dap-an-ma-tran-8173/',
  questions: [
    { sec: 'A. Kiểm tra đọc — I. Đọc thành tiếng', name: 'Câu 1', pts: 2, type: 'write', lines: 0, read: TVCK1_TT1,
      text: 'Đề gốc: giáo viên chỉ định mỗi học sinh đọc một đoạn khoảng 50–55 tiếng (tối đa 1 phút) trong các bài tập đọc đã học ở học kì I (Tiếng Việt 2 – Tập 1) và trả lời 1 câu hỏi về nội dung đoạn vừa đọc.<br>Con đọc to đoạn thơ bên rồi trả lời: <b>Khi thấy ông đau chân, Việt đã làm gì để giúp ông?</b>',
      model: 'Gợi ý trả lời: Việt chạy lại gần ông, bảo ông vịn vào vai mình để cháu đỡ ông bước lên thềm nhà.<br>' + TVCK1_TT_CHAM },

    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 1', pts: 0.5, read: TVCK1_R1,
      text: 'Chim sẻ bay lượn trên cánh đồng để làm gì?',
      opts: o3('Tìm chỗ ngủ', 'Tìm bạn', 'Tìm hạt lúa'), ans: 'C',
      why: 'Câu đầu bài: “chim sẻ bay lượn tìm kiếm hạt lúa”.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 2', pts: 0.5, read: TVCK1_R1,
      text: 'Cây lúa cảm thấy thế nào khi giúp mọi người?',
      opts: o3('Lo lắng', 'Vui vẻ', 'Buồn bực'), ans: 'B',
      why: 'Cây lúa nói: “Tớ rất vui khi được giúp mọi người.” → cây lúa thấy vui vẻ. (Đáp án trên trang nguồn ghi nhầm “A. Vui vẻ”; “Vui vẻ” là phương án B.)' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 3', pts: 0.5, type: 'write', lines: 1, read: TVCK1_R1,
      text: 'Em hãy điền dấu phẩy và dấu chấm vào câu sau cho phù hợp. Viết lại câu đó cho đúng.<br><i>Chim sẻ thật chăm chỉ lễ phép</i>',
      model: 'Chim sẻ thật chăm chỉ<b>,</b> lễ phép<b>.</b><br>Dấu phẩy ngăn cách hai từ chỉ đặc điểm “chăm chỉ” và “lễ phép”; dấu chấm đặt cuối câu.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 4', pts: 0.5, read: TVCK1_R1,
      text: 'Từ “chim sẻ” trong đoạn văn trên là từ chỉ gì?',
      opts: o3('Đặc điểm', 'Hoạt động', 'Sự vật'), ans: 'C',
      why: '“Chim sẻ” là tên một con vật — con vật thuộc nhóm từ chỉ sự vật.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 5', pts: 0.5, type: 'write', lines: 1, read: TVCK1_R1,
      text: 'Em hãy đặt một câu nêu hoạt động của chim sẻ.',
      model: 'Ví dụ: Chim sẻ bay lượn tìm kiếm hạt lúa. / Chim sẻ mang hạt lúa về cho gia đình.<br>Câu phải nói chim sẻ <b>làm gì</b>; viết hoa chữ đầu câu, cuối câu có dấu chấm.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 6', pts: 0.5, type: 'write', lines: 2, read: TVCK1_R1,
      text: 'Vì sao chim sẻ và cây lúa trở thành bạn tốt?',
      model: 'Chim sẻ và cây lúa trở thành bạn tốt vì cả hai đều biết giúp đỡ nhau trong cuộc sống (cây lúa cho chim sẻ thức ăn, chim sẻ biết ơn và quý cây lúa).' },

    { sec: 'B. Kiểm tra viết — I. Chính tả', name: 'Câu 1', pts: 1.5, type: 'write', lines: 6,
      text: 'Nghe – viết: <b>Tớ nhớ cậu</b> (Sách Tiếng Việt 2 tập 1, trang 83).',
      model: 'Bố mẹ đọc chậm từng cụm từ cho con viết (viết cả tên bài):<br><b>Tớ nhớ cậu</b><br>Kiến là bạn thân của sóc. Hằng ngày, hai bạn rủ nhau đi học. Một ngày nọ, nhà kiến chuyển sang cánh rừng khác. Sóc và kiến rất buồn. Hai bạn tìm cách gửi thư cho nhau để bày tỏ nỗi nhớ.<br><b>Chấm (1,5 điểm — quy đổi từ 3 điểm):</b> bài viết sạch, rõ ràng, đúng tốc độ, đúng cỡ chữ, không mắc quá 2 lỗi thì được điểm tối đa; mỗi lỗi chính tả trừ theo lỗi cụ thể (mắc cùng một lỗi nhiều lần chỉ trừ một lần).' },
    { sec: 'B. Kiểm tra viết — I. Chính tả', name: 'Câu 2a', pts: 0.125, type: 'type',
      text: 'Điền <b>n</b> hoặc <b>l</b> thích hợp vào chỗ chấm, rồi viết lại cả từ: <b>…ắn nót</b>',
      ans: 'nắn nót', alts: ['n'],
      why: '“Nắn nót” (viết cẩn thận từng nét) viết bằng <b>n</b>.' },
    { sec: 'B. Kiểm tra viết — I. Chính tả', name: 'Câu 2b', pts: 0.125, type: 'type',
      text: 'Điền <b>n</b> hoặc <b>l</b> thích hợp vào chỗ chấm, rồi viết lại cả từ: <b>lưỡi …iềm</b>',
      ans: 'lưỡi liềm', alts: ['l', 'liềm'],
      why: '“Lưỡi liềm” (dụng cụ gặt lúa) viết bằng <b>l</b>.' },
    { sec: 'B. Kiểm tra viết — I. Chính tả', name: 'Câu 2c', pts: 0.125, type: 'type',
      text: 'Điền <b>n</b> hoặc <b>l</b> thích hợp vào chỗ chấm, rồi viết lại cả từ: <b>reo …ên</b>',
      ans: 'reo lên', alts: ['l', 'lên'],
      why: '“Reo lên” viết bằng <b>l</b>.' },
    { sec: 'B. Kiểm tra viết — I. Chính tả', name: 'Câu 2d', pts: 0.125, type: 'type',
      text: 'Điền <b>n</b> hoặc <b>l</b> thích hợp vào chỗ chấm, rồi viết lại cả từ: <b>…úi …on</b>',
      ans: 'núi non', alts: ['n n', 'n, n'],
      why: '“Núi non” — cả hai tiếng đều viết bằng <b>n</b>.' },

    { sec: 'B. Kiểm tra viết — II. Tập làm văn', name: 'Câu 1', pts: 3, type: 'write', lines: 9,
      text: '<b>Đề bài:</b> Viết đoạn văn (khoảng 3 – 4 câu) giới thiệu một đồ vật.<br>Gợi ý:<br>– Em chọn tả đồ vật nào?<br>– Đồ vật có đặc điểm gì?<br>– Đồ vật đó dùng để làm gì?<br>– Em có nhận xét hay suy nghĩ gì về đồ vật đó?',
      model: '<b>Bài mẫu:</b> Đồ vật em muốn giới thiệu là chiếc đèn bàn học của em. Chiếc đèn có thân màu xanh da trời, cái cổ uốn cong được như cổ con cò. Mỗi tối, đèn chiếu ánh sáng trắng dịu xuống trang vở để em học bài không bị mỏi mắt. Chiếc đèn giống như một người bạn chăm chỉ luôn thức cùng em. Em rất quý chiếc đèn và luôn tắt đèn ngay khi học xong.<br>' + TVCK1_TLV_CHAM },
  ],
},

/* ═══════════ 3702 — TH TRẦN THÀNH NGỌ (KIẾN AN, HẢI PHÒNG) · CK1 2023–2024 ═══════════ */
{
  id: 3702, title: 'CK1 · TH Trần Thành Ngọ (Hải Phòng) 2023–2024', time: 85,
  sem: 1, book: 'Kết nối tri thức',
  src: 'https://lop2.vn/de-kiem-tra-cuoi-hoc-ki-i-mon-tieng-viet-lop-2-nam-hoc-2022-2023-truong-tieu-hoc-tran-thanh-ngo-co-dap-an-8750/',
  questions: [
    { sec: 'A. Kiểm tra đọc — I. Đọc thành tiếng', name: 'Câu 1', pts: 2, type: 'write', lines: 0, read: TVCK1_TT2,
      text: 'Đề gốc: kiểm tra học sinh đọc một đoạn văn (không có trong SGK) và trả lời 1 câu hỏi về nội dung. Đoạn bên là bài SGK để luyện; bố mẹ có thể thay bằng một đoạn văn khác dài tương đương mà con chưa đọc.<br>Con đọc to đoạn văn rồi trả lời: <b>Để bé Mai vui, An đã làm gì?</b>',
      model: 'Gợi ý trả lời: An cho em giơ chong chóng ra trước quạt máy, còn mình thì phùng mỏ thổi phù phù cho chong chóng quay, nên Mai thắng và cười toe.<br>' + TVCK1_TT_CHAM },

    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 1a', pts: 0.25, read: TVCK1_R2,
      text: 'Ngày sinh nhật Thủy, mẹ đưa Thủy đi đâu?',
      opts: o3('Mẹ đưa Thủy đi siêu thị.', 'Mẹ đưa Thủy đi công viên.', 'Mẹ đưa Thủy đi phố đồ chơi.'), ans: 'C',
      why: 'Câu đầu bài: “Ngày sinh nhật Thủy, mẹ đưa Thủy ra phố đồ chơi.”' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 1b', pts: 0.25, read: TVCK1_R2,
      text: 'Vì sao đi gần hết phố, Thủy vẫn chưa mua được quà gì?',
      opts: o3('Vì Thủy không biết nên mua gì.', 'Vì đồ chơi nhiều hoa mắt, thứ gì Thủy cũng thích.', 'Vì nhiều đồ chơi nhưng Thủy chưa thích thứ gì.'), ans: 'B',
      why: 'Bài viết: cô bé “nhìn hoa cả mắt, vẫn không biết nên mua gì <b>vì thứ nào em cũng thích</b>”. Phần “vì…” mới là lí do, nên chọn B.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 2a', pts: 0.25, read: TVCK1_R2,
      text: 'Thủy đã chọn mua món quà nào?',
      opts: o3('Là một con búp bê bằng vải rất đẹp.', 'Là một con búp bê bằng nhựa rất đẹp.', 'Là con búp bê được khâu bằng vụn vải xanh, mặt độn bông, hai mắt được chấm mực không đều nhau.'), ans: 'C',
      why: 'Thủy chỉ vào “con búp bê được khâu bằng vụn vải xanh, mặt độn bông, hai mắt được chấm mực không đều nhau” — con búp bê không hề đẹp.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 2b', pts: 0.25, read: TVCK1_R2,
      text: 'Vì sao Thủy chọn con búp bê vải?',
      opts: o3('Vì đó là món quà đẹp nhất.', 'Vì em thương bà cụ bán hàng dưới trời lạnh.', 'Vì em thấy con búp bê đó có vẻ đẹp khác lạ.'), ans: 'B',
      why: 'Thủy trả lời mẹ: “Vì con thương bà… Trời lạnh thế mà bà không được ở nhà.”' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 3', pts: 0.5, type: 'write', lines: 1, read: TVCK1_R2,
      text: 'Viết tiếp vào chỗ chấm để hoàn thành câu:<br>Qua câu chuyện em thấy, Thủy là một cô bé ……………………………',
      model: 'Qua câu chuyện em thấy, Thủy là một cô bé <b>ngoan ngoãn, giàu tình yêu thương</b> (tốt bụng, biết thương người già).' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 4a', pts: 0.25, type: 'type', read: TVCK1_R2,
      text: 'Gạch chân từ chỉ hoạt động trong câu: “Một bà cụ tóc bạc ngồi bán những con búp bê bằng vải giữa trời giá lạnh.”<br>Viết ra các từ chỉ hoạt động (cách nhau bằng dấu phẩy).',
      ans: 'ngồi, bán', alts: ['bán, ngồi', 'ngồi bán', 'ngồi và bán'],
      why: 'Từ chỉ hoạt động là từ chỉ việc làm: <b>ngồi</b>, <b>bán</b>. “Tóc bạc”, “giá lạnh” là đặc điểm; “bà cụ”, “búp bê” là sự vật.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 4b', pts: 0.25, read: TVCK1_R2,
      text: 'Câu: “Thủy kéo tay mẹ dừng lại.” thuộc mẫu câu nào?',
      opts: o3('Câu nêu hoạt động', 'Câu giới thiệu', 'Câu nêu đặc điểm'), ans: 'A',
      why: 'Câu cho biết Thủy <b>làm gì</b> (kéo tay mẹ dừng lại) → câu nêu hoạt động.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 5a', pts: 0.25, read: TVCK1_R2,
      text: 'Dấu cần điền vào ô trống trong câu: “Thủy là một cô bé ngoan ngoãn □ giàu tình yêu thương” là:',
      opts: o3('Dấu hỏi chấm', 'Dấu chấm', 'Dấu phẩy'), ans: 'C',
      why: 'Dấu phẩy ngăn cách hai đặc điểm “ngoan ngoãn” và “giàu tình yêu thương”: Thủy là một cô bé ngoan ngoãn, giàu tình yêu thương.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 5b', pts: 0.25, type: 'type', read: TVCK1_R2,
      text: 'Gạch bỏ một từ không thuộc nhóm với dãy từ sau: <b>kéo, nhìn, dừng lại, hiền hậu, khâu, mua</b>.<br>Viết ra từ cần gạch bỏ.',
      ans: 'hiền hậu',
      why: 'Kéo, nhìn, dừng lại, khâu, mua đều là từ chỉ hoạt động; <b>hiền hậu</b> là từ chỉ đặc điểm (tính nết) nên không cùng nhóm.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 6', pts: 0.5, type: 'write', lines: 2, read: TVCK1_R2,
      text: 'Đặt một câu nêu đặc điểm về bạn Thủy trong câu chuyện trên.',
      model: 'Ví dụ: Bạn Thủy rất tốt bụng. / Thủy là cô bé ngoan ngoãn, giàu tình thương.<br>Câu nói Thủy <b>thế nào</b>; đầu câu viết hoa, cuối câu có dấu chấm.' },

    { sec: 'B. Kiểm tra viết — I. Chính tả', name: 'Câu 1', pts: 2, type: 'write', lines: 7,
      text: 'Nghe – viết: <b>Con búp bê vải</b> (đoạn từ “Mẹ bảo Thủy” đến “trời giá lạnh”).',
      model: 'Bố mẹ đọc chậm từng cụm từ cho con viết (viết cả tên bài):<br><b>Con búp bê vải</b><br>Mẹ bảo Thủy chọn một thứ đồ chơi em thích nhất. Đi dọc gần hết phố bán đồ chơi, cô bé nhìn hoa cả mắt, vẫn không biết nên mua gì vì thứ nào em cũng thích. Đến cuối phố, thấy một bà cụ tóc bạc ngồi bán những con búp bê bằng vải giữa trời giá lạnh.<br><b>Chấm (2 điểm — quy đổi từ 4 điểm):</b> đảm bảo tốc độ 0,5; chữ rõ ràng, đúng độ cao, khoảng cách, cỡ chữ 0,5; viết đúng chính tả (không mắc quá 5 lỗi) 0,5; trình bày đúng quy định, sạch đẹp 0,5.' },

    { sec: 'B. Kiểm tra viết — II. Tập làm văn', name: 'Câu 1', pts: 3, type: 'write', lines: 9,
      text: '<b>Luyện viết đoạn:</b> Hãy viết một đoạn văn (từ 4 đến 5 câu) thể hiện tình cảm của em đối với người thân.<br>Gợi ý:<br>– Em muốn kể về ai trong gia đình?<br>– Em có tình cảm thế nào với người đó? Vì sao?',
      model: '<b>Bài mẫu:</b> Người thân mà em yêu quý nhất là bà nội. Bà năm nay đã ngoài bảy mươi tuổi, tóc bà bạc trắng như cước. Ngày nào bà cũng dậy sớm nấu cơm và đưa em đến trường. Tối đến, bà kể cho em nghe những câu chuyện cổ tích thật hay. Em rất yêu bà và mong bà luôn mạnh khoẻ để ở bên em thật lâu.<br>' + TVCK1_TLV_CHAM + ' (Đề gốc: toàn bài viết bẩn, chữ xấu, dập xoá trừ 1 điểm gốc = 0,5 điểm.)' },
  ],
},

/* ═══════════ 3703 — TH PHẠM CÔNG BÌNH (YÊN LẠC, VĨNH PHÚC) · CK1 2023–2024 ═══════════ */
{
  id: 3703, title: 'CK1 · TH Phạm Công Bình (Vĩnh Phúc) 2023–2024', time: 60,
  sem: 1, book: 'Kết nối tri thức',
  src: 'https://dethilop2.com/bai-kiem-tra-cuoi-hoc-ky-i-mon-tieng-viet-lop-2-nam-hoc-2023-2024-truong-tieu-hoc-pham-cong-binh-co-dap-an-1586/',
  questions: [
    { sec: 'A. Kiểm tra đọc — I. Đọc thành tiếng', name: 'Câu 1', pts: 2, type: 'write', lines: 0, read: TVCK1_TT3,
      text: 'Đề gốc: GV cho học sinh đọc một đoạn văn, bài thơ trong các bài tập đọc đã học trong sách Tiếng Việt 2 – Tập 1 (khoảng 60–70 tiếng), rồi đặt 1 câu hỏi về nội dung bài đọc để học sinh trả lời.<br>Con đọc to bài thơ rồi trả lời: <b>Vì sao khi cháu lớn, bà lại là người cài then dưới của cánh cửa?</b>',
      model: 'Gợi ý trả lời: Vì bà đã già, lưng còng nên bà chỉ với tới then dưới; còn cháu lớn lên đã cài được then trên.<br>' + TVCK1_TT_CHAM },

    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 1', pts: 0.25, read: TVCK1_R3,
      text: 'Lúc đầu cô bé nuôi con gì?',
      opts: o4('Con chó', 'Con gà trống', 'Con gà mái', 'Con vịt'), ans: 'B',
      why: 'Câu đầu bài: “Một cô bé nuôi một con gà trống rất đẹp.”' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 2', pts: 0.25, read: TVCK1_R3,
      text: 'Cô bé đã đổi các con vật theo thứ tự nào?',
      opts: o4('Gà mái → gà trống → vịt → chó', 'Vịt → chó → gà trống → gà mái', 'Gà trống → gà mái → vịt → chó', 'Gà trống → gà mái → chó → vịt'), ans: 'C',
      why: 'Chính cô bé kể: “Ta có một con gà trống, ta đổi lấy gà mái. Rồi ta đổi gà mái lấy vịt. Còn lần này ta đổi vịt lấy chú mày” → gà trống → gà mái → vịt → chó.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 3', pts: 0.25, read: TVCK1_R3,
      text: 'Vì sao chú chó nhỏ bỏ đi?',
      opts: o4('Vì chú chó thấy cô chủ của mình không biết quý tình bạn.', 'Vì chú chó nhớ nhà chủ cũ.', 'Vì chú chó muốn có cuộc sống tự do.', 'Vì chú chó thấy buồn, không được ai yêu thương, chăm sóc.'), ans: 'A',
      why: 'Chú chó nói: “Ta không muốn kết thân với một cô chủ không biết quý tình bạn.”' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 4', pts: 0.25, read: TVCK1_R3,
      text: 'Câu chuyện giúp em hiểu điều gì?',
      opts: o4('Phải thường xuyên trao đổi thú cưng.', 'Chỉ nên nuôi những con vật mang lại cho mình nhiều lợi ích.', 'Phải nuôi nhiều con vật trong nhà.', 'Các con vật nuôi cũng giống như bạn của mình, em cần biết quý trọng.'), ans: 'D',
      why: 'Cô bé cứ thấy con vật mới là đổi, không quý con vật nào nên chú chó bỏ đi. Bài học: vật nuôi là bạn, phải biết quý trọng.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 5', pts: 0.25, type: 'type', read: TVCK1_R3,
      text: 'Tìm từ chỉ đặc điểm trong câu: “Bạn Hiền có mái tóc dài và đen tuyền.”',
      ans: 'dài, đen tuyền', alts: ['dài và đen tuyền', 'đen tuyền, dài', 'dài đen tuyền'],
      why: 'Từ chỉ đặc điểm cho biết mái tóc <b>thế nào</b>: <b>dài</b>, <b>đen tuyền</b>.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 6', pts: 0.25, type: 'write', lines: 1, read: TVCK1_R3,
      text: 'Điền dấu phẩy hoặc dấu chấm vào câu dưới đây, rồi viết lại câu:<br><i>Tớ rất thích các đồ chơi truyền thống như diều □ chong chóng □ đèn ông sao □</i>',
      model: 'Tớ rất thích các đồ chơi truyền thống như diều<b>,</b> chong chóng<b>,</b> đèn ông sao<b>.</b><br>Dấu phẩy ngăn cách các đồ chơi được kể ra; dấu chấm kết thúc câu.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 7', pts: 0.25, read: TVCK1_R3,
      text: 'Câu nào dưới đây là câu giới thiệu?',
      opts: o4('Mẹ em là giáo viên dạy cấp 1.', 'Em Minh học bài rất tập trung.', 'Sân trường rộng rãi và có nhiều cây xanh.', 'Em rất thích học môn Thể dục.'), ans: 'A',
      why: 'Câu giới thiệu có dạng “Ai <b>là</b> gì?”: “Mẹ em <b>là</b> giáo viên dạy cấp 1.”' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 8', pts: 0.25, read: TVCK1_R3,
      text: 'Tìm từ chỉ hoạt động trong câu sau: “Cô bé nài nỉ bà đổi gà lấy vịt và thích thú ngắm vịt bơi lội trên sông.”',
      opts: o4('Nài nỉ, đổi, thích thú', 'Đổi, ngắm, sông', 'Nài nỉ, đổi, ngắm, bơi lội', 'Nài nỉ, đổi, ngắm, vịt'), ans: 'C',
      why: 'Các việc làm trong câu: nài nỉ, đổi, ngắm, bơi lội. “Sông”, “vịt” là sự vật; “thích thú” chỉ cảm xúc, nên chọn C.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 9', pts: 0.5, type: 'write', lines: 1, read: TVCK1_R3,
      text: 'Em hãy tìm 3 từ chỉ tình cảm người thân trong gia đình.',
      model: 'Ví dụ: quan tâm, chăm sóc, yêu thương (hoặc: thương yêu, kính yêu, quý mến, chiều chuộng, săn sóc…). Đúng 3 từ được điểm tối đa.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 10a', pts: 0.125, type: 'type', read: TVCK1_R3,
      text: 'Điền <b>d</b>, <b>r</b> hoặc <b>gi</b> vào chỗ chấm, rồi viết lại cả từ: <b>…ang tay</b>',
      ans: 'dang tay', alts: ['d'],
      why: '“Dang tay” (giơ rộng hai tay ra) viết bằng <b>d</b>.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 10b', pts: 0.125, type: 'type', read: TVCK1_R3,
      text: 'Điền <b>d</b>, <b>r</b> hoặc <b>gi</b> vào chỗ chấm, rồi viết lại cả từ: <b>…ó bão</b>',
      ans: 'gió bão', alts: ['gi'],
      why: '“Gió bão” viết bằng <b>gi</b>.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 10c', pts: 0.125, type: 'type', read: TVCK1_R3,
      text: 'Điền <b>d</b>, <b>r</b> hoặc <b>gi</b> vào chỗ chấm, rồi viết lại cả từ: <b>…uộng lúa</b>',
      ans: 'ruộng lúa', alts: ['r'],
      why: '“Ruộng lúa” viết bằng <b>r</b>.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 10d', pts: 0.125, type: 'type', read: TVCK1_R3,
      text: 'Điền <b>d</b>, <b>r</b> hoặc <b>gi</b> vào chỗ chấm, rồi viết lại cả từ: <b>cặp …a</b>',
      ans: 'cặp da', alts: ['d'],
      why: '“Cặp da” (cặp làm bằng da) viết bằng <b>d</b>.' },

    { sec: 'B. Kiểm tra viết — I. Chính tả', name: 'Câu 1', pts: 2, type: 'write', lines: 6,
      text: 'Nghe – viết: <b>Đồ chơi yêu thích</b> (Sách Tiếng Việt 2 tập 1, trang 99).',
      model: 'Bố mẹ đọc chậm từng cụm từ cho con viết (viết cả tên bài):<br><b>Đồ chơi yêu thích</b><br>Tớ rất thích các đồ chơi truyền thống như diều, chong chóng, đèn ông sao. Tớ cũng thích các đồ chơi hiện đại như lê-gô, ô tô điều khiển từ xa, siêu nhân. Đồ chơi nào tớ cũng giữ gìn cẩn thận.<br><b>Chấm (2 điểm — quy đổi từ 4 điểm):</b> viết đúng tốc độ, đúng chính tả, chữ rõ ràng, đúng độ cao được điểm tối đa. Trừ: sai 1–3 lỗi −0,25; 4–5 lỗi −0,5; 6–8 lỗi −0,75; 9–10 lỗi −1,25; trên 10 lỗi −1,75; chữ không đúng cỡ, độ cao −0,5.' },

    { sec: 'B. Kiểm tra viết — II. Tập làm văn', name: 'Câu 1', pts: 3, type: 'write', lines: 9,
      text: '<b>Đề bài:</b> Em hãy viết 3 – 5 câu kể về một công việc em đã làm cùng người thân.',
      model: '<b>Bài mẫu:</b> Chủ nhật vừa rồi, em cùng mẹ dọn dẹp nhà cửa. Mẹ lau bàn ghế, còn em quét nhà và xếp lại giá sách cho gọn gàng. Lúc đầu em thấy hơi mệt, nhưng mẹ vừa làm vừa kể chuyện nên em thấy rất vui. Dọn xong, căn nhà sạch sẽ và thơm tho hẳn lên. Em thấy mình đã lớn vì giúp được mẹ việc nhà.<br><b>Chấm (3 điểm — quy đổi từ 6 điểm):</b> viết được đoạn văn đúng yêu cầu 1,5; câu văn có sáng tạo 0,5; viết đúng chính tả 0,5; trình bày sạch đẹp 0,5. Tuỳ mức độ sai sót về ý, diễn đạt, chữ viết mà cho điểm thấp dần.' },
  ],
},

/* ═══════════ 3704 — TH NGHĨA THÀNH (CHÂU ĐỨC, BÀ RỊA – VŨNG TÀU) · CK1 2023–2024 ═══════════ */
{
  id: 3704, title: 'CK1 · TH Nghĩa Thành (Bà Rịa – Vũng Tàu) 2023–2024', time: 80,
  sem: 1, book: 'Kết nối tri thức',
  src: 'https://dethilop2.com/de-kiem-tra-cuoi-hoc-ky-i-mon-tieng-viet-lop-2-nam-hoc-2023-2024-truong-tieu-hoc-nghia-thanh-co-dap-an-1620/',
  questions: [
    { sec: 'A. Kiểm tra đọc — I. Đọc thành tiếng', name: 'Câu 1', pts: 2, type: 'write', lines: 0, read: TVCK1_TT4,
      text: 'Đề gốc: giáo viên tự chọn các bài tập đọc học kì I để học sinh đọc (tốc độ khoảng 40–50 tiếng/phút) và trả lời 1 câu hỏi theo nội dung đoạn đọc.<br>Con đọc to đoạn văn rồi trả lời: <b>Nước lũ dâng cao, chị Nết đưa Na đến nơi an toàn bằng cách nào?</b>',
      model: 'Gợi ý trả lời: Chị Nết cõng em chạy theo dân làng đến nơi an toàn.<br>' + TVCK1_TT_CHAM },

    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 1', pts: 0.25, read: TVCK1_R4,
      text: 'Cò là một học sinh như thế nào?',
      opts: o3('Yêu trường, yêu lớp', 'Chăm làm', 'Ngoan ngoãn, chăm chỉ'), ans: 'C',
      why: 'Bài đọc: “Cò ngoan ngoãn, chăm chỉ học tập, được thầy yêu bạn mến.”' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 2', pts: 0.25, read: TVCK1_R4,
      text: 'Vạc có điểm gì khác Cò?',
      opts: o3('Học kém nhất lớp', 'Không chịu học hành', 'Hay đi chơi'), ans: 'B',
      why: 'Bài đọc: “Còn Vạc thì lười biếng, không chịu học hành, suốt ngày chỉ rúc đầu trong cánh mà ngủ.” Bài không nói Vạc kém nhất lớp hay hay đi chơi.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 3', pts: 0.25, read: TVCK1_R4,
      text: 'Cò chăm học như thế nào?',
      opts: o3('Lúc nào cũng đi chơi', 'Lúc nào cũng đi bắt ốc', 'Sau những buổi mò tôm, bắt ốc lại giở sách ra học'), ans: 'C',
      why: 'Câu cuối bài: “Sau những buổi mò tôm bắt ốc, Cò lại đậu trên ngọn tre giở sách ra đọc.”' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 4', pts: 0.25, read: TVCK1_R4,
      text: 'Vì sao ban đêm Vạc mới bay đi kiếm ăn?',
      opts: o3('Vì sợ chúng bạn chê cười', 'Vì không muốn học', 'Vì bận học'), ans: 'A',
      why: 'Bài đọc: “Sợ chúng bạn chê cười, đêm đến Vạc mới dám bay đi kiếm ăn.”' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 5', pts: 0.25, read: TVCK1_R4,
      text: 'Câu “Cò học giỏi nhất lớp.” được cấu tạo theo mẫu câu nào dưới đây?',
      opts: o3('Ai (cái gì, con gì) là gì?', 'Ai (cái gì, con gì) làm gì?', 'Ai (cái gì, con gì) thế nào?'), ans: 'C',
      why: '“Học giỏi nhất lớp” cho biết Cò <b>thế nào</b> (nêu đặc điểm) → mẫu Ai thế nào? (câu nêu đặc điểm).' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 6', pts: 0.25, type: 'write', lines: 1, read: TVCK1_R4,
      text: 'Viết 3 từ chỉ hoạt động: <i>Hái hoa, ……………………………</i>',
      model: 'Ví dụ: hái hoa, tưới cây, nhặt rau, viết bài (hoặc: quét nhà, đọc sách, nhảy dây…). Viết đúng 3 từ chỉ hoạt động được điểm tối đa.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 7', pts: 0.5, type: 'write', lines: 2, read: TVCK1_R4,
      text: 'Câu chuyện muốn khuyên các em điều gì?',
      model: 'Câu chuyện khuyên các em phải ngoan ngoãn, chăm chỉ học tập (như Cò), không lười biếng như Vạc.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 8', pts: 0.5, type: 'type', read: TVCK1_R4,
      text: 'Đặt câu hỏi cho bộ phận được in đậm trong câu: Cò <b>đậu trên ngọn tre giở sách ra đọc</b>.',
      ans: 'Cò làm gì?', alts: ['Cò làm gì'],
      why: 'Bộ phận in đậm chỉ hoạt động của Cò, trả lời cho câu hỏi “làm gì?” → <b>Cò làm gì?</b>' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 9', pts: 0.5, type: 'write', lines: 4, read: TVCK1_R4,
      text: 'Điền dấu chấm, dấu phẩy hoặc dấu chấm hỏi thích hợp vào chỗ chấm trong đoạn văn sau:<br><i>Chị giảng giải cho em:<br>- Sông (…) hồ rất cần cho cuộc sống con người (…) Em có biết nếu không có sông (…) hồ thì cuộc sống của chúng ta sẽ ra sao không (…)<br>Em nhanh nhảu trả lời:<br>- Em biết rồi (…) Thì sẽ chẳng có ai biết bơi, đúng không chị (…)</i>',
      model: 'Chị giảng giải cho em:<br>- Sông<b>,</b> hồ rất cần cho cuộc sống con người<b>.</b> Em có biết nếu không có sông<b>,</b> hồ thì cuộc sống của chúng ta sẽ ra sao không<b>?</b><br>Em nhanh nhảu trả lời:<br>- Em biết rồi<b>.</b> Thì sẽ chẳng có ai biết bơi, đúng không chị<b>?</b><br>(Dấu phẩy ngăn “sông” với “hồ”; câu hỏi kết thúc bằng dấu chấm hỏi.)' },

    { sec: 'B. Kiểm tra viết — I. Chính tả', name: 'Câu 1', pts: 2, type: 'write', lines: 6,
      text: 'Nghe – viết: <b>Tớ nhớ cậu</b>.',
      model: 'Bố mẹ đọc chậm từng cụm từ cho con viết (viết cả tên bài):<br><b>Tớ nhớ cậu</b><br>Kiến là bạn thân của sóc. Hằng ngày, hai bạn rủ nhau đi học. Một ngày nọ, nhà kiến chuyển sang cánh rừng khác. Sóc và kiến rất buồn. Hai bạn tìm cách gửi thư cho nhau để bày tỏ nỗi nhớ.<br><b>Chấm (2 điểm — quy đổi từ 4 điểm):</b> tốc độ đạt yêu cầu, viết đúng chính tả 1 điểm — mỗi lỗi (thiếu chữ, sai phụ âm đầu, vần, thanh) trừ 0,125; lỗi giống nhau chỉ trừ một lần; không trừ quá 1 điểm ở tiêu chí này. Chữ rõ ràng, đúng chữ, cỡ chữ 0,5; trình bày đúng quy định, sạch đẹp 0,5.' },

    { sec: 'B. Kiểm tra viết — II. Tập làm văn', name: 'Câu 1', pts: 3, type: 'write', lines: 9,
      text: '<b>Tập làm văn:</b> Em hãy viết đoạn văn từ 3 – 4 câu tả về một đồ dùng học tập của em theo gợi ý sau:<br>* Nêu tên đồ dùng học tập.<br>* Nói về một vài đặc điểm nổi bật của đồ dùng học tập: hình dáng, kích thước, màu sắc, chất liệu…<br>* Tình cảm của em với đồ dùng học tập đó.',
      model: '<b>Bài mẫu:</b> Đồ dùng học tập em yêu thích nhất là chiếc hộp bút mẹ mua cho em khi vào năm học mới. Hộp bút hình chữ nhật, dài hơn một gang tay, làm bằng nhựa màu hồng. Nắp hộp in hình chú mèo đang cười rất ngộ nghĩnh. Bên trong có ngăn để bút chì, bút mực, thước kẻ và cục tẩy. Em rất quý chiếc hộp bút và luôn giữ nó sạch sẽ.<br><b>Chấm (3 điểm — quy đổi từ 6 điểm):</b> Nội dung 1,5: viết được đoạn văn đủ các ý theo đề (chưa đủ ý, sơ sài 0,75–1,25; lạc đề hoặc quá kém 0,5). Kĩ năng 1,5: đúng cỡ chữ, đúng chính tả, sạch đẹp 0,5; dùng từ chính xác, câu rõ ý, có liên kết 0,5; có sáng tạo 0,5. Sao chép văn mẫu bị trừ điểm.' },
  ],
},

/* ═══════════ 3705 — TH CHU MINH (BA VÌ, HÀ NỘI) · CK1 2022–2023 ═══════════ */
{
  id: 3705, title: 'CK1 · TH Chu Minh (Hà Nội) 2022–2023', time: 90,
  sem: 1, book: 'Kết nối tri thức',
  src: 'https://dethilop2.com/de-kiem-tra-dinh-ky-cuoi-hoc-ky-i-mon-tieng-viet-lop-2-nam-hoc-2022-2023-truong-tieu-hoc-chu-minh-co-dap-an-1408/',
  questions: [
    { sec: 'A. Kiểm tra đọc — I. Đọc thành tiếng', name: 'Câu 1', pts: 2, type: 'write', lines: 0, read: TVCK1_TT5,
      text: 'Đề gốc: học sinh đọc một đoạn văn thuộc các bài tập đọc – học thuộc lòng đã học trong SGK Tiếng Việt 2 – Tập I.<br>Con đọc to đoạn văn rồi trả lời: <b>Hai bố con Hường chơi trò gì cùng nhau? Khi chơi, hai bố con xưng hô với nhau thế nào?</b>',
      model: 'Gợi ý trả lời: Hai bố con chơi trò chơi “ăn cỗ”. Khi chơi, hai bố con gọi nhau là “bác” và xưng “tôi”, mời nhau rất lễ phép.<br>' + TVCK1_TT_CHAM },

    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 1', pts: 0.5, read: TVCK1_R5,
      text: 'Vì sao sẻ không muốn kết bạn với ai trong vườn mà chỉ làm bạn với quạ?',
      opts: o3('Vì sẻ có quá nhiều bạn.', 'Vì sẻ tự cho mình là thông minh, tài giỏi, hiểu biết nên không có ai trong vườn xứng đáng làm bạn với mình.', 'Vì sẻ thích sống một mình.'), ans: 'B',
      why: 'Bài đọc: chim sẻ “tự cho mình là thông minh, tài giỏi, hiểu biết hơn cả nên không muốn làm bạn với ai trong vườn”.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 2', pts: 0.5, read: TVCK1_R5,
      text: 'Khi sẻ bị thương ai đã giúp đỡ sẻ?',
      opts: o3('Quạ giúp đỡ sẻ.', 'Một mình chuồn chuồn giúp đỡ sẻ.', 'Các bạn quen thuộc trong vườn giúp đỡ sẻ.'), ans: 'C',
      why: 'Quạ đã bay mất. Chuồn chuồn gọi ong, bướm tìm thuốc; kiến và chim sâu tìm thức ăn — tức là cả các bạn trong vườn cùng giúp.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 3', pts: 0.5, read: TVCK1_R5,
      text: 'Theo em, vì sao sẻ thấy xấu hổ?',
      opts: o3('Vì sẻ không cẩn thận nên bị trúng đạn.', 'Vì sẻ đã kết bạn với quạ.', 'Vì sẻ đã coi thường, không chịu kết bạn với các bạn trong vườn, những người đã hết lòng giúp đỡ sẻ.'), ans: 'C',
      why: 'Sẻ từng chê các bạn trong vườn, vậy mà lúc hoạn nạn chính các bạn ấy lại chăm sóc sẻ — nên sẻ xấu hổ.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 4', pts: 0.5, read: TVCK1_R5,
      text: 'chim sẻ, chim sâu, quạ, ong, bướm, kiến, chuồn chuồn là các từ chỉ gì?',
      opts: o3('Sự vật', 'Hoạt động', 'Đặc điểm'), ans: 'A',
      why: 'Đây đều là tên các con vật — thuộc nhóm từ chỉ sự vật.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 5', pts: 0.5, read: TVCK1_R5,
      text: 'Câu “Sẻ nói lời xin lỗi và cảm ơn các bạn.” thuộc mẫu câu nào?',
      opts: o3('Câu giới thiệu', 'Câu nêu hoạt động', 'Câu nêu đặc điểm'), ans: 'B',
      why: 'Câu cho biết sẻ <b>làm gì</b> (nói lời xin lỗi và cảm ơn) → câu nêu hoạt động.' },
    { sec: 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu', name: 'Câu 6', pts: 0.5, type: 'write', lines: 2, read: TVCK1_R5,
      text: 'Em rút ra được bài học gì cho bản thân từ câu chuyện trên?',
      model: 'Ví dụ: Phải biết yêu quý bạn bè, không được kiêu căng coi thường người khác. / Phải biết chơi đoàn kết với bạn. / Phải giúp đỡ bạn khi bạn gặp khó khăn.' },

    { sec: 'B. Kiểm tra viết — I. Chính tả', name: 'Câu 1a', pts: 0.125, type: 'type',
      text: 'Điền vào chỗ trống <b>l</b> hay <b>n</b>, rồi viết lại cả từ: <b>…o lắng</b>',
      ans: 'lo lắng', alts: ['l'],
      why: '“Lo lắng” viết bằng <b>l</b>.' },
    { sec: 'B. Kiểm tra viết — I. Chính tả', name: 'Câu 1b', pts: 0.125, type: 'type',
      text: 'Điền vào chỗ trống <b>l</b> hay <b>n</b>, rồi viết lại cả từ: <b>ấm …o</b>',
      ans: 'ấm no', alts: ['n'],
      why: '“Ấm no” (đủ ăn đủ mặc) viết bằng <b>n</b>.' },
    { sec: 'B. Kiểm tra viết — I. Chính tả', name: 'Câu 1c', pts: 0.125, type: 'type',
      text: 'Điền vào chỗ trống <b>l</b> hay <b>n</b>, rồi viết lại cả từ: <b>…ên bảng</b>',
      ans: 'lên bảng', alts: ['l'],
      why: '“Lên bảng” viết bằng <b>l</b> (lên — đi từ thấp tới cao).' },
    { sec: 'B. Kiểm tra viết — I. Chính tả', name: 'Câu 1d', pts: 0.125, type: 'type',
      text: 'Điền vào chỗ trống <b>l</b> hay <b>n</b>, rồi viết lại cả từ: <b>…ên người</b>',
      ans: 'nên người', alts: ['n'],
      why: '“Nên người” (trở thành người tốt) viết bằng <b>n</b>.' },
    { sec: 'B. Kiểm tra viết — I. Chính tả', name: 'Câu 2', pts: 1.5, type: 'write', lines: 6,
      text: 'Viết chính tả (Nghe – viết): <b>Đồ chơi yêu thích</b> (SGK Tiếng Việt 2 tập 1, trang 99).',
      model: 'Bố mẹ đọc chậm từng cụm từ cho con viết (viết cả tên bài):<br><b>Đồ chơi yêu thích</b><br>Tớ rất thích các đồ chơi truyền thống như diều, chong chóng, đèn ông sao. Tớ cũng thích các đồ chơi hiện đại như lê-gô, ô tô điều khiển từ xa, siêu nhân. Đồ chơi nào tớ cũng giữ gìn cẩn thận.<br><b>Chấm (1,5 điểm — quy đổi từ 3 điểm):</b> viết đúng chính tả, trình bày sạch đẹp được 1,5 điểm; mỗi lỗi chính tả hoặc trình bày chưa sạch đẹp trừ 0,125 điểm.' },

    { sec: 'B. Kiểm tra viết — II. Tập làm văn', name: 'Câu 1', pts: 3, type: 'write', lines: 9,
      text: '<b>Đề bài:</b> Em hãy viết một đoạn văn ngắn (khoảng 5 câu) giới thiệu một đồ dùng học tập mà em yêu thích.',
      model: '<b>Bài mẫu:</b> Đồ dùng học tập em yêu thích nhất là chiếc cặp sách bố mua tặng em. Cặp có màu xanh dương, quai đeo êm và chắc chắn. Mặt trước cặp in hình một chú khủng long đang cười rất đáng yêu. Bên trong cặp có hai ngăn lớn đựng sách vở và một ngăn nhỏ để bút thước. Ngày nào chiếc cặp cũng cùng em đến trường, em luôn giữ gìn nó sạch sẽ, gọn gàng.<br><b>Chấm (3 điểm — quy đổi từ 6 điểm):</b> nêu được tên đồ dùng; giới thiệu vài đặc điểm nổi bật; nêu công dụng; nêu cảm nghĩ của em về đồ dùng đó. Tuỳ mức độ bài làm cho 3 – 2,75 – 2,5 – 2,25 điểm…' },
  ],
}

);
