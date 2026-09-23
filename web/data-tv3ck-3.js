// TIẾNG VIỆT 3 — ĐỀ KIỂM TRA CUỐI HỌC KÌ II (CUỐI NĂM) — BỘ KẾT NỐI TRI THỨC — TRỌN ĐỀ
// 5 đề thật của 5 trường tiểu học ở 5 địa phương khác nhau (không tìm được bản chữ công khai của
// trường CLC nào cho TV3 CK2 KNTT, nên dùng đề thật của trường công lập — ghi đúng tên trường):
//   3911 · TH Đồng Cẩm (huyện Kim Thành, Hải Dương) 2023–2024 — "Đề giới thiệu", có đáp án
//        https://dethi.violet.vn/present/de-thi-cuoi-hoc-ki-ii-13764772.html
//        (bộ phiếu đọc thành tiếng ghi rõ SGK Tiếng Việt 3 tập 2: Đất nước là gì?, Nhà rông, Hai Bà Trưng… → KNTT)
//   3912 · TH Liên Hồng (huyện Đan Phượng, Hà Nội) 2022–2023 — Đề 1, có hướng dẫn chấm
//        https://dethilop3.com/de-kiem-tra-cuoi-hoc-ki-ii-mon-tieng-viet-lop-3-nam-hoc-2022-2023-truong-tieu-hoc-lien-hong-de-1-co-dap-an-1865/
//        (chính tả “Nhà rông” – SGK Tiếng Việt 3 tập 2 trang 96 → KNTT)
//   3913 · TH Thạnh Hưng 2 (huyện Giồng Riềng, Kiên Giang) 2023–2024 — đề chính thức, có đáp án
//        https://dethi.violet.vn/present/de-thi-cuoi-ki-ii-13750487.html
//        (bài đọc “Rô-bốt ở quanh ta”, chính tả “Hai Bà Trưng” SGK trang 103, phiếu đọc Cây gạo, Nhà rông… → KNTT)
//   3914 · TH&THCS Khánh Thiện (xã Lâm Thượng, Lào Cai — trước 2025 thuộc Lục Yên, Yên Bái) 2025–2026, có HD chấm
//        https://dethi.violet.vn/present/tieng-viet-3-cuoi-ki-2-15102603.html
//        (chính tả “Hai Bà Trưng” — bài 23 KNTT tập 2; đăng trong mục KNTT › Tiếng Việt 3)
//   3915 · TH Bình Xuyên (huyện Bình Giang, Hải Dương) 2024–2025, có đáp án
//        https://dethi.violet.vn/present/tieng-viet-3-cuoi-hoc-ki-ii-14565744.html
//        (phiếu đọc Mưa, Bầy voi rừng Trường Sơn, A lô tớ đây… và chính tả “Nhà rông” trang 95 → KNTT)
//
// Thang điểm: đề gốc Đọc 10 + Viết 10 → mọi điểm CHIA ĐÔI để tổng = 10.
// Đọc thành tiếng: đề gốc cho HS bốc thăm phiếu đọc (bài trong SGK hoặc ngoài SGK); ở đây dùng chính bài
// đọc của đề để bố mẹ nghe con đọc một đoạn và hỏi một câu; danh sách phiếu gốc của trường ghi trong `model`.
// Chính tả “Nhà rông”, “Hai Bà Trưng”: đề gốc chỉ ghi tên bài/trang SGK — đoạn đọc chép theo SGK TV3 KNTT tập 2.
//
// Đáp án đã soát lại (xem thêm `why`):
//   3912: câu 3 & câu 5 đề gốc không ghi điểm riêng lẻ khác đáp án — giữ nguyên biểu điểm HD chấm.
//   3914: câu 5 — đáp án trường là “biết ơn”; từ chỉ hoạt động thật sự trong câu là “nhắc (đến)” nhưng không có
//         trong các lựa chọn, nên giữ C (từ duy nhất trong các lựa chọn không phải từ chỉ sự vật/thời gian) và ghi chú.
//         Câu 8 đề gốc không ghi điểm — lấy 0,5 điểm theo ma trận của trường (tổng đọc hiểu = 6).
//   3915: đề gốc ghi Chính tả 5 đ + Viết đoạn 5 đ, nhưng hướng dẫn chấm của trường cho 3 đ + 7 đ (đọc thành
//         tiếng 3 đ + đọc hiểu 7 đ) — theo hướng dẫn chấm; câu 9 (gạch dưới từ chỉ đặc điểm) đáp án gốc mất định
//         dạng gạch chân — đáp án: xanh lơ, xanh lục.

/* ── Tên phần ────────────────────────────────────────────────────────────── */
const TV3CK3_S1 = 'A. Kiểm tra đọc — I. Đọc thành tiếng';
const TV3CK3_S2 = 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu';
const TV3CK3_S3 = 'B. Kiểm tra viết — I. Chính tả';
const TV3CK3_S4 = 'B. Kiểm tra viết — II. Viết đoạn văn';

/* Tiêu chí đọc thành tiếng thường dùng (4 điểm gốc → 2 điểm) */
const TV3CK3_DOC = '<br><b>Chấm (2 điểm, mỗi ý 0,5 điểm):</b> đọc vừa đủ nghe, rõ ràng, tốc độ khoảng 70–80 tiếng/phút · đọc đúng tiếng, từ (không sai quá 5 tiếng) · ngắt nghỉ hơi đúng ở dấu câu, các cụm từ rõ nghĩa · trả lời đúng câu hỏi về nội dung đoạn đọc.';

/* Tiêu chí chính tả thường dùng (4 điểm gốc → 2 điểm) */
const TV3CK3_CT = '<br><b>Chấm (2 điểm, mỗi ý 0,5 điểm):</b> tốc độ viết đạt yêu cầu · chữ viết rõ ràng, đúng kiểu chữ, cỡ chữ · viết đúng chính tả (không mắc quá 5 lỗi) · trình bày đúng quy định, viết sạch, đẹp.';

/* ── Bài đọc ─────────────────────────────────────────────────────────────── */
const TV3CK3_R1 = '<b>Chuyện trong vườn</b><br>Có một cây hoa giấy và một cây táo con cùng chung sống trong một khu vườn. Mùa xuân đến, cây hoa giấy đâm chồi nảy lộc. Hàng trăm bông hoa giấy thắm đỏ nở đồng loạt, trông như một tấm thảm đỏ rực rỡ. Còn cây táo vẫn đứng lặng lẽ một góc vườn, thân cành trơ trụi, nứt nẻ. Cây hoa giấy nói:<br>- Táo ơi! Cậu đã làm xấu khu vườn này. Cậu nên đi khỏi khu vườn để lấy chỗ cho tớ trổ hoa!<br>Cây táo con nép mình im lặng. Ít lâu sau, cây táo mọc ra những chiếc lá tròn tròn, bóng láng. Rồi cây táo nở hoa. Chẳng bao lâu, hoa tàn và kết thành những quả táo nhỏ màu xanh. Đến mùa thu, những quả táo đã to và chín vàng. Một hôm, hai ông cháu chủ vườn ra thăm cây. Ông với tay trẩy cho cháu mấy quả táo. Cô bé ăn và luôn miệng khen táo thơm ngon. Thấy hai ông cháu không để ý đến mình, cây hoa giấy buồn lắm. Cây táo nghiêng tán lá xanh, thầm thì an ủi bạn:<br>- Bạn đừng buồn! Hai chúng ta mỗi người một việc. Tôi dâng trái ngon cho mọi người, còn bạn thì cho sắc hoa và bóng mát.<br>Giờ thì cây hoa giấy đã hiểu ra nhiều điều. Nó yêu mảnh vườn này, yêu cả cái dáng trơ trụi của cây táo sau mùa cho quả.<br><i>(Theo Thành Tuấn)</i>';

const TV3CK3_R2 = '<b>Câu chuyện về mùa đông và chiếc áo khoác</b><br>Mùa đông đã tới, những cơn gió rét buốt rít ngoài cửa sổ. Ngoài đường, ai cũng bước vội vàng để tránh cái lạnh đang làm cứng đờ đôi bàn tay. Những khuôn mặt vui tươi, hớn hở biến đi đâu mất, thay vào đó là tái đi vì lạnh.<br>Mùa rét năm nay, mẹ mua cho An một chiếc áo khoác mới, vì áo của cậu đã bị rách do sự hiếu động của An. Khi nhận chiếc áo từ mẹ, An vùng vằng vì kiểu dáng và màu sắc của chiếc áo không đúng ý thích của cậu. Về phòng, cậu ném chiếc áo xuống đất, cả ngày lầm lì không nói gì.<br>Chiều tối hôm đó, bố rủ An ra phố. Mặc dù trời rất lạnh nhưng An háo hức đi ngay. Sau khi mua đồ xong, bố chở An ra khu chợ, nơi các gian hàng bắt đầu thu dọn. Bố chỉ cho An thấy những cậu bé không có nhà cửa, không có người thân, trên người chỉ có một tấm áo mỏng manh đang co ro, tím tái. Trong khi mọi người đều về nhà quây quần bên bữa tối ngon lành, bên ánh đèn ấm áp thì các cậu vẫn phải lang thang ở ngõ chợ, nhặt nhạnh những thứ người ta đã bỏ đi.<br>Bất giác, An cảm thấy hối hận vô cùng. An nhớ lại ánh mắt buồn của mẹ khi cậu ném chiếc áo khoác xuống đất. Bố chỉ nhẹ nhàng:<br>- Con có hiểu không? Cuộc đời này còn nhiều người thiệt thòi lắm. Hãy biết trân trọng thứ mà mình đang có con nhé!<br><i>(BTV Big School)</i>';

const TV3CK3_R3 = '<b>Rô-bốt ở quanh ta</b><br>Năm 1920, rô-bốt xuất hiện lần đầu tiên trong vai nhân vật của một vở kịch viễn tưởng. Đó là nhân vật người máy, biết làm theo mệnh lệnh của con người. “Tuyệt quá! Nếu giao hết việc nặng nhọc, nguy hiểm cho rô-bốt thì chúng ta nhàn nhã bao nhiêu!”. Ai xem kịch cũng nghĩ thế. Rồi người ta bắt đầu nghiên cứu, chế tạo rô-bốt thật, thường có hình dạng như người, làm việc chẳng biết mệt mỏi, chẳng sợ nguy hiểm. Giờ đây, rô-bốt đã có thể di chuyển vật nặng, có thể chữa cháy, cứu nạn, thăm dò vũ trụ, khám phá đại dương,…<br>Rô-bốt còn được tạo ra để giúp chúng ta những việc thường ngày: rửa bát, quét nhà, bán hàng,… Dự báo, không bao lâu nữa, rô-bốt sẽ được sử dụng rộng rãi trong đời sống.<br><i>(Theo Ngọc Thủy)</i>';

const TV3CK3_R4 = '<b>Chú dế sau lò sưởi</b><br>Buổi tối ấy, nhà Mô-da thật yên tĩnh. Cậu bé thiu thiu ngủ trên ghế bành. Bỗng dưng, hình như có một cái gì đó đã xảy ra? Có một âm thanh kéo dài lạ lùng làm sao. Mô-da nghĩ: “Chắc hẳn ánh trăng mảnh dẻ bị giá lạnh, tan vỡ ra, đập vào cửa sổ…” Cậu bé đứng dậy tìm kiếm. Đây đúng là có một chú dế sau lò sưởi với “cây vĩ cầm” của mình. Dế kéo đàn hay đến nỗi cậu bé không nén nổi phải kêu lên:<br>- Chao ôi, hay quá! Ước gì tôi trở thành nhạc sĩ nhỉ?<br>Rồi chỉ ít lâu sau, chú bé chinh phục được cả công chúng thủ đô nước Áo. Bản nhạc kết thúc mà giây phút im lặng vẫn còn kéo dài. Phải chăng tiếng vọng của âm thanh đang lịm dần trong mỗi trái tim? Nhưng kìa, gian phòng bỗng sống lại: “Thật là tuyệt diệu! Thật là tuyệt diệu!”. Sau này, nhạc sĩ Mô-da thường nhắc đến chú dế với tấm lòng biết ơn.';

const TV3CK3_R5 = '<b>Người bạn nhỏ, tác động lớn</b><br>Vào một ngày trời nóng nực, sư tử mệt mỏi sau một ngày dài kiếm ăn, nó nằm ngủ dưới một gốc cây. Một chú chuột nhắt đi ngang qua, trông thấy sư tử ngủ say liền nhảy múa đùa nghịch trên lưng sư tử.<br>Sư tử tỉnh giấc, nó khá giận dữ và túm lấy chuột nhắt mắng:<br>- Con vật bé nhỏ kia, sao ngươi dám đánh thức chúa tể rừng xanh? Ta sẽ nghiền nát ngươi bằng móng vuốt của ta.<br>Chuột nhắt sợ hãi van xin:<br>- Xin ngài tha cho tôi, tôi sẽ không bao giờ quên ơn, tôi hứa sẽ trả ơn ngài vào một ngày nào đó.<br>Sư tử thấy buồn cười với lời van xin đó của chuột nhắt, nhưng nó cũng thấy tội nghiệp và thả cho chuột nhắt đi. Chuột nhắt mừng quá vội vã chạy đi.<br>Ít lâu sau, khi đang săn mồi trong rừng, sư tử vướng vào lưới của thợ săn. Nó không thể nào thoát được. Sư tử gầm lên kêu cứu vang động khắp khu rừng.<br>Bỗng chú chuột lần trước được sư tử tha mạng nghe thấy, nó vội chạy đến xem sao. Thấy sư tử mắc trong lưới, nó bảo: “Ông đừng lo, tôi sẽ giúp!”. Chuột lấy hết sức gặm đứt các dây lưới để sư tử chạy thoát. Lúc này, sư tử mới thấy rằng làm điều tốt cho người khác sẽ luôn được nhớ công ơn.<br><i>(Sưu tầm)</i>';

/* Đoạn chính tả lấy từ SGK Tiếng Việt 3 tập 2 (KNTT) */
const TV3CK3_NHA_RONG = '<b>Nhà rông</b><br>Đến Tây Nguyên, từ xa nhìn vào các buôn làng, ta dễ nhận ra ngôi nhà rông có đôi mái dựng đứng, vươn cao lên trời như một cái lưỡi rìu lật ngược. Nước mưa đổ xuống chảy xuôi tuồn tuột. Buôn làng nào có mái nhà rông càng cao, nhà càng to, hẳn là nơi đó dân đông, làm ăn được mùa, cuộc sống no ấm.';

TV3CK.push(

/* ═══════════ 3911 — TH ĐỒNG CẨM (KIM THÀNH, HẢI DƯƠNG) 2023–2024 ═══════════ */
{
  id: 3911, title: 'CK2 · TH Đồng Cẩm (Hải Dương) 2023–2024', time: 70,
  sem: 2, book: 'Kết nối tri thức',
  src: 'https://dethi.violet.vn/present/de-thi-cuoi-hoc-ki-ii-13764772.html',
  questions: [
    { sec: TV3CK3_S1, name: 'Đọc thành tiếng', pts: 2, type: 'write', lines: 0, read: TV3CK3_R1,
      text: 'Con đọc to đoạn từ đầu bài “Chuyện trong vườn” đến “…để lấy chỗ cho tớ trổ hoa!”, sau đó trả lời câu hỏi: <b>Mùa xuân đến, cây hoa giấy và cây táo khác nhau thế nào?</b>',
      model: '<b>Gợi ý trả lời:</b> Cây hoa giấy đâm chồi nảy lộc, hàng trăm bông hoa đỏ thắm nở đồng loạt như tấm thảm đỏ rực rỡ; còn cây táo đứng lặng lẽ một góc vườn, thân cành trơ trụi, nứt nẻ.<br><i>Đề gốc: HS bốc thăm 1 trong 10 phiếu đọc SGK Tiếng Việt 3 tập 2 (Đất nước là gì?, Núi quê tôi, Sông Hương, Nhà rông, Sự tích ông Đùng bà Đùng, Hai Bà Trưng, Cùng Bác qua suối, Ngọn lửa Ô-lim-pích, Thư của ông Trái Đất gửi các bạn nhỏ, Bác sĩ Y-éc-xanh), trả lời 1 câu hỏi (1 điểm gốc).</i>' + TV3CK3_DOC },

    { sec: TV3CK3_S2, name: 'Câu 1', pts: 0.25, read: TV3CK3_R1,
      text: 'Mùa xuân, cây táo như thế nào?',
      opts: o3('Đâm chồi, nảy những chiếc lá hiếm hoi.', 'Nở ra những bông hoa có mùi thơm nhẹ.', 'Thân cành trơ trụi, nứt nẻ.'), ans: 'C',
      why: 'Bài đọc: “Còn cây táo vẫn đứng lặng lẽ một góc vườn, thân cành trơ trụi, nứt nẻ.”.' },
    { sec: TV3CK3_S2, name: 'Câu 2', pts: 0.25, read: TV3CK3_R1,
      text: 'Câu văn nào miêu tả đúng nhất vẻ đẹp của cây hoa giấy?',
      opts: o3('Mưa phùn làm cho lá cây xanh mướt, tốt tươi.', 'Hàng trăm bông hoa giấy thắm đỏ nở đồng loạt, trông như một tấm thảm đỏ rực.', 'Mùa xuân đến, cây hoa giấy đâm chồi nảy lộc.'), ans: 'B',
      why: 'Câu B tả rõ vẻ đẹp của hoa giấy: hàng trăm bông đỏ thắm nở cùng lúc, đẹp như tấm thảm đỏ. Câu C chỉ nói cây ra lộc, câu A không có trong bài.' },
    { sec: TV3CK3_S2, name: 'Câu 3', pts: 0.25, read: TV3CK3_R1,
      text: 'Cây táo ra quả to và chín vàng vào mùa nào?',
      opts: o4('Mùa xuân', 'Mùa hè', 'Mùa thu', 'Mùa đông'), ans: 'C',
      why: 'Bài đọc: “Đến mùa thu, những quả táo đã to và chín vàng.”.' },
    { sec: TV3CK3_S2, name: 'Câu 4', pts: 0.25, read: TV3CK3_R1,
      text: 'Vì sao cây hoa giấy cảm thấy buồn khi hai ông cháu chủ vườn không để ý đến nó?',
      opts: o3('Vì nó nghĩ ông cháu chủ vườn sắp chặt nó đi.', 'Vì nó thấy hai ông cháu không để ý đến mình.', 'Vì nó nghĩ hoa giấy nở chẳng có ích gì.'), ans: 'B',
      why: 'Bài đọc: “Thấy hai ông cháu không để ý đến mình, cây hoa giấy buồn lắm.”.' },
    { sec: TV3CK3_S2, name: 'Câu 5', pts: 0.5, type: 'write', lines: 2, read: TV3CK3_R1,
      text: 'Qua câu chuyện, em rút ra bài học gì cho bản thân?',
      model: 'Ví dụ: <i>Chúng ta không nên chê bai người khác, cần tôn trọng lẫn nhau vì mỗi người đều có ích theo cách riêng.</i> (Có thể thêm: biết yêu quý, trân trọng cây cối trong vườn.)<br>Nêu được bài học hợp lí, viết thành câu trọn vẹn thì được đủ điểm.' },
    { sec: TV3CK3_S2, name: 'Câu 6', pts: 0.25, read: TV3CK3_R1,
      text: 'Trong câu “Ông với tay trẩy cho cháu mấy quả táo.”, từ <b>trẩy</b> có thể thay thế bằng từ nào dưới đây?',
      opts: o3('hái', 'ăn', 'giữ gìn'), ans: 'A',
      why: '“Trẩy” quả nghĩa là hái quả trên cây xuống: “Ông với tay hái cho cháu mấy quả táo.”.' },
    { sec: TV3CK3_S2, name: 'Câu 7', pts: 0.25, read: TV3CK3_R1,
      text: 'Câu nào dưới đây có hình ảnh so sánh?',
      opts: o3('Một tấm thảm đỏ rực rỡ.', 'Hàng trăm bông hoa giấy thắm đỏ nở đồng loạt, trông như một tấm thảm đỏ rực rỡ.', 'Hàng trăm bông hoa giấy thắm đỏ nở đồng loạt, đỏ rực rỡ.'), ans: 'B',
      why: 'Câu B có từ so sánh “như”: hoa giấy (sự vật 1) được so sánh với tấm thảm đỏ (sự vật 2).' },
    { sec: TV3CK3_S2, name: 'Câu 8', pts: 0.25, read: TV3CK3_R1,
      text: 'Câu “Cậu nên đi khỏi khu vườn để lấy chỗ cho tớ trổ hoa!” thuộc kiểu câu nào?',
      opts: o4('Câu hỏi', 'Câu cảm', 'Câu khiến', 'Câu kể'), ans: 'C',
      why: 'Cây hoa giấy yêu cầu, đòi cây táo phải làm một việc (đi khỏi khu vườn) nên đây là câu khiến.' },
    { sec: TV3CK3_S2, name: 'Câu 9', pts: 0.25, type: 'write', lines: 1,
      text: 'Hãy điền dấu ngoặc kép vào vị trí phù hợp trong câu sau:<br><i>Dứt tiếng hô: Phóng! của mẹ, cá chuồn con bay vút lên như một mũi tên.</i>',
      model: 'Dứt tiếng hô: <b>“Phóng!”</b> của mẹ, cá chuồn con bay vút lên như một mũi tên.<br>(Dấu ngoặc kép đánh dấu lời nói của mẹ cá chuồn.)' },
    { sec: TV3CK3_S2, name: 'Câu 10', pts: 0.5, type: 'write', lines: 2,
      text: 'Đặt một câu có sử dụng hình ảnh so sánh để nói về một sự vật mà em thích.',
      model: 'Ví dụ: <i>Mặt trăng đêm rằm tròn như chiếc mâm con dát bạc.</i> · <i>Đôi mắt chú mèo tròn như hòn bi ve.</i> · <i>Tán bàng xòe ra tựa như cái ô khổng lồ.</i> · <i>Dòng sông uốn lượn mềm mại như dải lụa bao quanh thôn xóm.</i><br>Câu có hai sự vật được so sánh và từ so sánh (như, tựa như, là…), đầu câu viết hoa, cuối câu có dấu chấm.' },

    { sec: TV3CK3_S3, name: 'Nghe – viết', pts: 2, type: 'write', lines: 8,
      text: 'Nghe – viết: <b>Việt Nam quê hương ta</b> (Nguyễn Đình Thi) — 12 dòng thơ lục bát, khoảng 15 phút. Bố mẹ đọc từng dòng thơ cho con viết cả tên bài.',
      model: '<b>Việt Nam quê hương ta</b><br>Việt Nam đất nước ta ơi<br>Mênh mông biển lúa đâu trời đẹp hơn<br>Cánh cò bay lả rập rờn<br>Mây mờ che đỉnh Trường Sơn sớm chiều<br>Quê hương biết mấy thân yêu<br>Bao nhiêu đời đã chịu nhiều thương đau<br>Mặt người vất vả in sâu<br>Gái trai cũng một áo nâu nhuộm bùn.<br>Đất nghèo nuôi những anh hùng<br>Chìm trong máu lửa lại vùng đứng lên<br>Đạp quân thù xuống đất đen<br>Súng gươm vứt bỏ lại hiền như xưa<br><i>Nguyễn Đình Thi</i><br>Lưu ý: dòng 6 chữ viết lùi vào một ô so với dòng 8 chữ; chữ đầu mỗi dòng thơ viết hoa.' + TV3CK3_CT },

    { sec: TV3CK3_S4, name: 'Viết đoạn văn', pts: 3, type: 'write', lines: 10,
      text: 'HS chọn <b>một trong hai</b> đề sau:<br><b>Đề 1:</b> Em hãy viết một đoạn văn ngắn (khoảng từ 6 đến 8 câu) để nói về một nhân vật em yêu thích trong câu chuyện đã đọc, đã nghe.<br><i>Gợi ý:</i> Câu chuyện em đã đọc (đã nghe) là gì? · Em thích nhất nhân vật nào trong câu chuyện đó? · Em thích nhất điều gì ở nhân vật đó? · Em có suy nghĩ, cảm xúc gì về nhân vật đó?<br><b>Đề 2:</b> Em hãy viết một đoạn văn ngắn (khoảng từ 6 đến 8 câu) để kể về một ước mơ của em.<br><i>Gợi ý:</i> Em ước mơ điều gì? · Nếu ước mơ đó trở thành sự thật, em sẽ cảm thấy thế nào? · Em sẽ làm gì để thực hiện ước mơ đó?',
      model: '<b>Bài mẫu Đề 1:</b> Em đã đọc câu chuyện “Cóc kiện Trời” trong sách Tiếng Việt 3. Nhân vật em yêu thích nhất là chú Cóc. Cóc bé nhỏ, da sần sùi nhưng rất gan dạ. Khi trời hạn hán, ruộng đồng nứt nẻ, Cóc dám lên tận thiên đình để kiện Trời. Cóc còn thông minh, biết sắp xếp cho Cua, Gấu, Cọp, Ong và Cáo mỗi con một việc nên đã thắng đội quân nhà Trời. Nhờ Cóc, mưa lại rơi xuống, muôn loài được cứu sống. Em rất khâm phục chú Cóc dũng cảm và tốt bụng. Em sẽ học tập Cóc, không sợ khó khăn khi làm việc tốt.<br><b>Bài mẫu Đề 2:</b> Ước mơ của em là trở thành một bác sĩ. Em mong được khoác chiếc áo blu trắng, cầm ống nghe khám bệnh cho mọi người. Nếu ước mơ thành sự thật, em sẽ chữa bệnh cho ông bà và các bạn nhỏ ở quê em. Khi đó, em sẽ cảm thấy rất vui và tự hào. Để thực hiện ước mơ, em sẽ chăm chỉ học tập, nhất là môn Toán và Khoa học. Em cũng luyện tập thể dục để có sức khỏe tốt. Em tin rằng nếu cố gắng, ước mơ của em sẽ thành hiện thực.<br><b>Chấm (3 điểm):</b> đúng đề, đủ các ý theo gợi ý, viết 6–8 câu có câu mở đầu, câu kết (1,5 điểm) · câu đúng ngữ pháp, dùng từ hay, có cảm xúc (1 điểm) · đúng chính tả, chữ viết rõ ràng, sạch đẹp (0,5 điểm).' },
  ],
},

/* ═══════════ 3912 — TH LIÊN HỒNG (ĐAN PHƯỢNG, HÀ NỘI) 2022–2023 — ĐỀ 1 ═══════════ */
{
  id: 3912, title: 'CK2 · TH Liên Hồng (Hà Nội) 2022–2023', time: 70,
  sem: 2, book: 'Kết nối tri thức',
  src: 'https://dethilop3.com/de-kiem-tra-cuoi-hoc-ki-ii-mon-tieng-viet-lop-3-nam-hoc-2022-2023-truong-tieu-hoc-lien-hong-de-1-co-dap-an-1865/',
  questions: [
    { sec: TV3CK3_S1, name: 'Đọc thành tiếng', pts: 2, type: 'write', lines: 0, read: TV3CK3_R2,
      text: 'Con đọc to đoạn 1 và đoạn 2 của bài “Câu chuyện về mùa đông và chiếc áo khoác” (từ đầu đến “…cả ngày lầm lì không nói gì.”), sau đó trả lời câu hỏi: <b>Vì sao An vùng vằng khi nhận chiếc áo mới từ mẹ?</b>',
      model: '<b>Gợi ý trả lời:</b> Vì kiểu dáng và màu sắc của chiếc áo không đúng ý thích của An.<br><i>Đề gốc: HS bắt thăm phiếu (GV chuẩn bị), đọc một đoạn văn hoặc đoạn thơ khoảng 60 tiếng rồi trả lời 1–2 câu hỏi.</i>' + TV3CK3_DOC },

    { sec: TV3CK3_S2, name: 'Câu 1', pts: 0.25, read: TV3CK3_R2,
      text: 'Mùa đông năm nay, An được mẹ mua cho cái gì?',
      opts: o3('Một chiếc mũ len mới.', 'Một chiếc áo khoác mới.', 'Một đôi giày mới.'), ans: 'B',
      why: 'Bài đọc: “Mùa rét năm nay, mẹ mua cho An một chiếc áo khoác mới”.' },
    { sec: TV3CK3_S2, name: 'Câu 2', pts: 0.25, read: TV3CK3_R2,
      text: 'An có thái độ và hành động như thế nào khi nhận chiếc áo mới?',
      opts: o3('Cậu ném chiếc áo xuống đất, cả ngày lầm lì không nói.', 'Cậu bảo mẹ trả lại chiếc áo cho cửa hàng.', 'Cậu không nhận chiếc áo cũng không nói gì với mẹ.'), ans: 'A',
      why: 'Bài đọc: “Về phòng, cậu ném chiếc áo xuống đất, cả ngày lầm lì không nói gì.”.' },
    { sec: TV3CK3_S2, name: 'Câu 3', pts: 0.25, read: TV3CK3_R2,
      text: 'Vì sao bố muốn An cùng đi ra phố?',
      opts: o3('Bố muốn An hiểu được giá trị của đồng tiền.', 'Bố muốn An chứng kiến cảnh nhiều bạn nhỏ còn không có áo để mặc.', 'Bố muốn An quên đi chuyện chiếc áo để tập trung học tập.'), ans: 'B',
      why: 'Bố đưa An ra khu chợ và “chỉ cho An thấy những cậu bé… trên người chỉ có một tấm áo mỏng manh đang co ro, tím tái”.' },
    { sec: TV3CK3_S2, name: 'Câu 4', pts: 0.25, read: TV3CK3_R2,
      text: 'An có thái độ như thế nào sau khi ra phố cùng bố?',
      opts: o3('An cảm thấy hối hận vô cùng.', 'An cảm thấy buồn.', 'An lầm lì, không nói gì.'), ans: 'A',
      why: 'Bài đọc: “Bất giác, An cảm thấy hối hận vô cùng.”.' },
    { sec: TV3CK3_S2, name: 'Câu 5', pts: 0.25, type: 'write', lines: 2, read: TV3CK3_R2,
      text: 'Bố đã nhẹ nhàng nói gì với An?',
      model: 'Bố nói: <i>“Con có hiểu không? Cuộc đời này còn nhiều người thiệt thòi lắm. Hãy biết trân trọng thứ mà mình đang có con nhé!”</i>' },
    { sec: TV3CK3_S2, name: 'Câu 6', pts: 0.5, type: 'write', lines: 2, read: TV3CK3_R2,
      text: 'Câu chuyện khuyên ta điều gì?',
      model: 'Nêu được một trong các ý (được đủ điểm): <i>Phải biết trân trọng những gì mình đang có.</i> · <i>Biết cảm thông, giúp đỡ những người có hoàn cảnh khó khăn hơn mình.</i>' },
    { sec: TV3CK3_S2, name: 'Câu 7', pts: 0.25,
      text: 'Các từ ngữ “xinh đẹp, nồng nàn, cao lớn” là từ chỉ gì?',
      opts: o3('Chỉ sự vật.', 'Chỉ đặc điểm.', 'Chỉ hoạt động.'), ans: 'B',
      why: 'Cả ba từ đều cho biết người, vật <i>như thế nào</i> (vẻ ngoài, mùi hương, dáng người) nên là từ chỉ đặc điểm.' },
    { sec: TV3CK3_S2, name: 'Câu 8', pts: 0.25, read: TV3CK3_R2,
      text: 'Trong các câu sau đây, câu nào là câu kể?',
      opts: o3('Hãy biết trân trọng thứ mà mình đang có con nhé!', 'Con có hiểu không?', 'Chiều tối hôm đó, bố rủ An ra phố.'), ans: 'C',
      why: 'Câu C kể lại một sự việc, kết thúc bằng dấu chấm → câu kể. Câu A là câu khiến (có “hãy”), câu B là câu hỏi.' },
    { sec: TV3CK3_S2, name: 'Câu 9', pts: 0.5, type: 'write', lines: 2,
      text: 'Đặt 1 câu có sử dụng biện pháp so sánh.',
      model: 'Ví dụ: <i>Mùa đông, gió rét buốt như kim châm vào da thịt.</i> · <i>Chiếc áo khoác mới ấm áp như vòng tay của mẹ.</i><br>Câu có hai sự vật được so sánh và từ so sánh (như, tựa như, giống như…), viết hoa đầu câu, có dấu chấm cuối câu.' },
    { sec: TV3CK3_S2, name: 'Câu 10', pts: 0.25, type: 'write', lines: 1,
      text: 'Trả lời câu hỏi sau: “Cái thước kẻ của em được làm bằng gì?”',
      model: 'Ví dụ: <i>Cái thước kẻ của em được làm bằng nhựa.</i> (hoặc bằng gỗ, bằng sắt…)<br>Trả lời thành câu đủ ý, có bộ phận trả lời câu hỏi <b>Bằng gì?</b>' },

    { sec: TV3CK3_S3, name: 'Nghe – viết', pts: 2, type: 'write', lines: 6,
      text: 'Nghe – viết: <b>Nhà rông</b> (SGK Tiếng Việt 3 tập 2 – Kết nối tri thức, từ “Đến Tây Nguyên…” đến “…cuộc sống no ấm.”), khoảng 15 phút.',
      model: TV3CK3_NHA_RONG + '<br><b>Chấm (2 điểm, theo HD của trường):</b> bài viết không mắc lỗi chính tả, chữ viết rõ ràng, đúng mẫu chữ, trình bày đúng đoạn văn được 2 điểm · mỗi lỗi chính tả (sai lẫn phụ âm đầu, vần, thanh; không viết hoa đúng quy định) trừ 0,25 điểm · chữ viết không rõ ràng, không đúng mẫu, sai về độ cao trừ 0,5 điểm toàn bài.' },

    { sec: TV3CK3_S4, name: 'Viết đoạn văn', pts: 3, type: 'write', lines: 10,
      text: 'Viết một đoạn văn nói về ước mơ của em.',
      model: '<b>Bài mẫu:</b> Từ khi còn nhỏ, em đã ước mơ sau này trở thành một cô giáo. Em thích hình ảnh cô giáo đứng trên bục giảng, giọng nói ấm áp, dịu dàng. Cô giáo của em ngày ngày dạy chúng em biết đọc, biết viết và dạy cả cách làm người tốt. Nếu trở thành cô giáo, em sẽ dạy các bạn nhỏ ở quê em thật chăm chỉ và yêu thương các em như cô đã yêu thương em. Được đứng trên bục giảng, chắc chắn em sẽ rất hạnh phúc. Để thực hiện ước mơ, bây giờ em phải chăm ngoan, học thật giỏi và đọc thật nhiều sách. Em mong ước mơ của mình sẽ sớm thành hiện thực.<br><b>Các ý cần có:</b> ước mơ là gì · vì sao em có ước mơ đó · nếu ước mơ thành sự thật em sẽ làm gì, cảm thấy thế nào · em sẽ làm gì để thực hiện ước mơ.<br><b>Chấm (3 điểm, theo HD của trường):</b> nội dung đủ, đúng yêu cầu 2 điểm · đúng ngữ pháp, dùng từ đúng, không mắc lỗi chính tả, câu văn hay có hình ảnh 0,75 điểm · chữ viết rõ ràng, trình bày sạch 0,25 điểm; tuỳ mức độ sai sót hạ dần từng 0,25 điểm.' },
  ],
},

/* ═══════════ 3913 — TH THẠNH HƯNG 2 (GIỒNG RIỀNG, KIÊN GIANG) 2023–2024 ═══════════ */
{
  id: 3913, title: 'CK2 · TH Thạnh Hưng 2 (Kiên Giang) 2023–2024', time: 90,
  sem: 2, book: 'Kết nối tri thức',
  src: 'https://dethi.violet.vn/present/de-thi-cuoi-ki-ii-13750487.html',
  questions: [
    { sec: TV3CK3_S1, name: 'Đọc thành tiếng', pts: 2, type: 'write', lines: 0, read: TV3CK3_R3,
      text: 'Con đọc to đoạn 1 của bài “Rô-bốt ở quanh ta” (từ đầu đến “…khám phá đại dương,…”), sau đó trả lời câu hỏi: <b>Rô-bốt thật do con người chế tạo có hình dạng và đặc điểm gì?</b>',
      model: '<b>Gợi ý trả lời:</b> Rô-bốt thường có hình dạng như người, làm việc chẳng biết mệt mỏi, chẳng sợ nguy hiểm.<br><i>Đề gốc: HS bốc thăm đọc một đoạn trong SGK Tiếng Việt 3 tập 2 (Cây gạo, Bầy voi rừng Trường Sơn, Lời kêu gọi toàn dân tập thể dục, Tay trái và tay phải, Sông Hương, Nhà rông, Hai Bà Trưng, Cùng Bác qua suối) rồi trả lời câu hỏi.</i><br><b>Chấm (2 điểm, theo HD của trường):</b> đọc vừa đủ nghe, rõ ràng, tốc độ đạt yêu cầu 1 điểm · ngắt nghỉ đúng ở các dấu câu, các cụm từ rõ nghĩa 0,5 điểm · trả lời đúng câu hỏi 0,5 điểm.' },

    { sec: TV3CK3_S2, name: 'Câu 1', pts: 0.25, read: TV3CK3_R3,
      text: 'Rô-bốt do ai tạo ra?',
      opts: o3('Người ngoài hành tinh', 'Thiên nhiên', 'Con người'), ans: 'C',
      why: 'Bài đọc: “người ta bắt đầu nghiên cứu, chế tạo rô-bốt thật” — rô-bốt do con người tạo ra.' },
    { sec: TV3CK3_S2, name: 'Câu 2', pts: 0.25, read: TV3CK3_R3,
      text: 'Rô-bốt xuất hiện lần đầu ở đâu?',
      opts: o3('Một bộ phim', 'Một vở kịch viễn tưởng', 'Một vở chèo'), ans: 'B',
      why: 'Bài đọc: “rô-bốt xuất hiện lần đầu tiên trong vai nhân vật của một vở kịch viễn tưởng”.' },
    { sec: TV3CK3_S2, name: 'Câu 3', pts: 0.25, read: TV3CK3_R3,
      text: 'Đâu <b>không</b> phải việc rô-bốt có thể làm?',
      opts: o3('Nấu cơm', 'Khám phá đại dương', 'Khóc'), ans: 'C',
      why: 'Rô-bốt là máy móc, làm được việc nặng nhọc và việc nhà (khám phá đại dương, rửa bát, quét nhà…) nhưng không có cảm xúc nên không biết khóc.' },
    { sec: TV3CK3_S2, name: 'Câu 4', pts: 0.25,
      text: 'Bộ phận in đậm trong câu “Rô-bốt được tạo ra <b>để giúp con người làm việc</b>.” trả lời cho câu hỏi nào?',
      opts: o3('Để làm gì?', 'Bằng gì?', 'Ở đâu?'), ans: 'A',
      why: 'Bộ phận bắt đầu bằng “để…” nêu mục đích → trả lời câu hỏi <b>Để làm gì?</b> (Rô-bốt được tạo ra để làm gì?).' },
    { sec: TV3CK3_S2, name: 'Câu 5', pts: 0.25, read: TV3CK3_R3,
      text: 'Rô-bốt xuất hiện lần đầu năm bao nhiêu?',
      opts: o3('Năm 1921', 'Năm 1920', 'Năm 1922'), ans: 'B',
      why: 'Câu đầu bài: “Năm 1920, rô-bốt xuất hiện lần đầu tiên…”.' },
    { sec: TV3CK3_S2, name: 'Câu 6', pts: 0.25,
      text: 'Câu “Rô-bốt thông minh quá!” thuộc kiểu câu nào?',
      opts: o3('Câu cảm', 'Câu kể', 'Câu khiến'), ans: 'A',
      why: 'Câu bộc lộ cảm xúc thán phục (có từ “quá” và dấu chấm than) nên là câu cảm.' },
    { sec: TV3CK3_S2, name: 'Câu 7', pts: 0.5, type: 'write', lines: 2, read: TV3CK3_R3,
      text: 'Vì sao rô-bốt được sử dụng rộng rãi trong đời sống?',
      model: 'Ví dụ: <i>Vì rô-bốt làm việc chẳng biết mệt mỏi, chẳng sợ nguy hiểm, có thể thay con người làm những việc nặng nhọc, nguy hiểm và cả những việc thường ngày như rửa bát, quét nhà, bán hàng.</i><br>(Đáp án trường: Vì rô-bốt có khả năng thay thế con người trong nhiều việc, nhất là những việc thường ngày.)' },
    { sec: TV3CK3_S2, name: 'Câu 8', pts: 0.5, type: 'write', lines: 2, read: TV3CK3_R3,
      text: 'Sau khi xem về rô-bốt con người đã nghĩ gì?',
      model: 'Ai xem kịch cũng nghĩ: <i>“Tuyệt quá! Nếu giao hết việc nặng nhọc, nguy hiểm cho rô-bốt thì chúng ta nhàn nhã bao nhiêu!”</i>' },
    { sec: TV3CK3_S2, name: 'Câu 9a', pts: 0.25, type: 'write', lines: 1,
      text: 'Xếp các từ sau đây vào nhóm thích hợp: <i>người máy, chữa cháy, con người, quét nhà, rô-bốt, bán hàng</i>.<br>a) Từ chỉ sự vật: ………',
      model: 'Từ chỉ sự vật: <b>người máy, con người, rô-bốt</b>.' },
    { sec: TV3CK3_S2, name: 'Câu 9b', pts: 0.25, type: 'write', lines: 1,
      text: 'Xếp các từ <i>(người máy, chữa cháy, con người, quét nhà, rô-bốt, bán hàng)</i> vào nhóm thích hợp:<br>b) Từ chỉ hoạt động: ………',
      model: 'Từ chỉ hoạt động: <b>chữa cháy, quét nhà, bán hàng</b>.' },

    { sec: TV3CK3_S3, name: 'Nghe – viết', pts: 2, type: 'write', lines: 7,
      text: 'Nghe – viết: <b>Hai Bà Trưng</b> (SGK Tiếng Việt 3 tập 2 – Kết nối tri thức, trang 103; từ “Hai Bà Trưng bước lên bành voi…” đến “…lịch sử nước nhà.”), khoảng 15 phút.',
      model: '<b>Hai Bà Trưng</b><br>Hai Bà Trưng bước lên bành voi. Đoàn quân rùng rùng lên đường; giáo lao, cung nỏ, rìu búa, khiên mộc cuồn cuộn tràn theo bóng voi ẩn hiện của Hai Bà. Tiếng trống đồng dội lên vòm cây, đập vào sườn đồi, theo suốt đường hành quân.<br>Thành trì quân giặc lần lượt sụp đổ dưới chân của đoàn quân khởi nghĩa. Tô Định ôm đầu chạy về nước. Đất nước ta sạch bóng quân thù. Hai Bà Trưng trở thành hai vị anh hùng chống giặc ngoại xâm đầu tiên trong lịch sử nước nhà.<br><b>Chấm (2 điểm, theo HD của trường):</b> tốc độ đạt 0,5 · chữ viết rõ ràng, đúng chữ, cỡ chữ 0,5 · viết đúng chính tả (không mắc quá 5 lỗi) 0,5 · trình bày đúng quy định, viết đẹp, sạch 0,5. Sai 3 lỗi chính tả trừ 0,25 điểm; sai 6 dấu thanh hoặc không viết hoa trừ 0,25 điểm.' },

    { sec: TV3CK3_S4, name: 'Viết đoạn văn', pts: 3, type: 'write', lines: 10,
      text: 'Viết đoạn văn về một nhân vật em yêu thích trong câu chuyện đã đọc, đã nghe.<br><i>Gợi ý:</i><br>- Tên nhân vật là gì?<br>- Nhân vật trong câu chuyện nào?<br>- Những điều em yêu thích ở nhân vật?<br>- Lí do em yêu thích nhân vật?',
      model: '<b>Bài mẫu:</b> Nhân vật em yêu thích nhất là Thánh Gióng trong truyện cổ tích “Thánh Gióng”. Lên ba tuổi, Gióng vẫn chưa biết nói, biết cười. Thế nhưng khi nghe sứ giả tìm người đánh giặc Ân, Gióng bỗng cất tiếng xin đi giết giặc. Gióng vươn vai thành một tráng sĩ, cưỡi ngựa sắt, cầm roi sắt xông thẳng vào quân thù. Khi roi sắt gãy, Gióng nhổ những cụm tre bên đường quật vào giặc. Đánh tan giặc, Gióng một mình một ngựa bay về trời. Em yêu thích Thánh Gióng vì Gióng rất dũng cảm và yêu nước. Em sẽ cố gắng học giỏi để sau này góp sức xây dựng quê hương.<br><b>Các ý cần có:</b> tên nhân vật, câu chuyện · điều em yêu thích (ngoại hình, hành động, phẩm chất) · lí do em yêu thích, em học được gì.<br><b>Chấm (3 điểm, theo HD của trường):</b> nội dung (ý) đúng yêu cầu 1,5 điểm · kĩ năng 1,5 điểm (viết chữ, chính tả 0,5 · dùng từ, đặt câu 0,5 · sáng tạo 0,5).' },
  ],
},

/* ═══════════ 3914 — TH&THCS KHÁNH THIỆN (LÂM THƯỢNG, LÀO CAI) 2025–2026 ═══════════ */
{
  id: 3914, title: 'CK2 · TH&THCS Khánh Thiện (Lào Cai) 2025–2026', time: 70,
  sem: 2, book: 'Kết nối tri thức',
  src: 'https://dethi.violet.vn/present/tieng-viet-3-cuoi-ki-2-15102603.html',
  questions: [
    { sec: TV3CK3_S1, name: 'Đọc thành tiếng', pts: 2, type: 'write', lines: 0, read: TV3CK3_R4,
      text: 'Con đọc to đoạn đầu bài “Chú dế sau lò sưởi” (từ đầu đến “…Ước gì tôi trở thành nhạc sĩ nhỉ?”), sau đó trả lời câu hỏi: <b>Mô-da tìm thấy gì khi đứng dậy tìm kiếm âm thanh lạ?</b>',
      model: '<b>Gợi ý trả lời:</b> Mô-da tìm thấy một chú dế ở sau lò sưởi đang kéo “cây vĩ cầm” của mình.<br><i>Đề gốc: HS bắt thăm đọc một đoạn văn trong các phiếu đọc (3–5 phút/HS), trả lời câu hỏi GV nêu.</i><br><b>Chấm (2 điểm, theo HD của trường):</b> đọc đúng tiếng, tốc độ tối thiểu 70–75 tiếng/phút, trả lời đúng ý câu hỏi được 2 điểm; đọc sai từ 2 tiếng trở lên hoặc ngắt nghỉ chưa đúng ở dấu câu trừ 0,125 điểm; trả lời sai ý câu hỏi trừ 0,25 điểm.' },

    { sec: TV3CK3_S2, name: 'Câu 1', pts: 0.25, read: TV3CK3_R4,
      text: 'Buổi tối ấy, trong căn nhà yên tĩnh, Mô-da được chứng kiến sự việc gì?',
      opts: o4('Âm thanh của ánh trăng bị giá lạnh, tan vỡ ra, đập vào cửa sổ.', 'Âm thanh kéo dài từ cây đàn vĩ cầm của nhà bên cạnh.', 'Âm thanh kéo dài lạ lùng của chú dế kéo đàn sau lò sưởi.', 'Tiếng kèn vang vọng bên tai cậu.'), ans: 'C',
      why: 'Mô-da chỉ <i>tưởng</i> là ánh trăng vỡ; khi tìm thì “đúng là có một chú dế sau lò sưởi với ‘cây vĩ cầm’ của mình”.' },
    { sec: TV3CK3_S2, name: 'Câu 2', pts: 0.25, read: TV3CK3_R4,
      text: 'Sau khi nghe được âm thanh hấp dẫn, Mô-da mong muốn điều gì?',
      opts: o4('Trở thành người ca sĩ.', 'Trở thành người nhạc sĩ.', 'Trở thành người nhạc công.', 'Trở thành họa sĩ.'), ans: 'B',
      why: 'Mô-da kêu lên: “Ước gì tôi trở thành nhạc sĩ nhỉ?”.' },
    { sec: TV3CK3_S2, name: 'Câu 3', pts: 0.25, read: TV3CK3_R4,
      text: 'Dấu hai chấm trong câu sau có tác dụng gì?<br><i>Dế kéo đàn hay đến nỗi cậu bé không nén nổi phải kêu lên:<br>- Chao ôi, hay quá! Ước gì tôi trở thành nhạc sĩ nhỉ?</i>',
      opts: o4('Dẫn lời nói trực tiếp.', 'Dẫn lời đối thoại.', 'Dùng để liệt kê.', 'Dùng để bộc lộ cảm xúc.'), ans: 'A',
      why: 'Sau dấu hai chấm là lời nói của cậu bé Mô-da (chỉ một người nói, không phải hai người đối đáp) → dấu hai chấm báo hiệu lời nói trực tiếp của nhân vật.' },
    { sec: TV3CK3_S2, name: 'Câu 4', pts: 0.25, read: TV3CK3_R4,
      text: 'Chi tiết nào cho thấy tài năng chơi đàn tuyệt diệu của Mô-da trước công chúng thủ đô nước Áo?',
      opts: o4('Bản nhạc kết thúc mà giây phút im lặng vẫn còn kéo dài.', 'Sau này, nhạc sĩ Mô-da thường nhắc đến chú dế với tấm lòng biết ơn.', 'Chú bé chinh phục được cả công chúng thủ đô nước Áo.', 'Dế kéo đàn hay đến nỗi cậu bé không nén nổi phải kêu lên.'), ans: 'A',
      why: 'Nhạc đã dứt mà khán giả vẫn lặng im vì còn say mê — chi tiết cụ thể cho thấy Mô-da chơi đàn tuyệt diệu (đáp án của trường). Ý C chỉ là lời nhận xét chung; ý D nói về tiếng đàn của chú dế.' },
    { sec: TV3CK3_S2, name: 'Câu 5', pts: 0.25,
      text: 'Tìm trong câu sau từ chỉ hoạt động:<br><i>Sau này, nhạc sĩ Mô-da thường nhắc đến chú dế với tấm lòng biết ơn.</i>',
      opts: o4('Chú dế', 'Nhạc sĩ', 'Biết ơn', 'Sau này'), ans: 'C',
      why: '“Chú dế”, “nhạc sĩ” là từ chỉ sự vật; “sau này” chỉ thời gian. Trong các lựa chọn, chỉ “biết ơn” là từ chỉ hoạt động, trạng thái (đáp án của trường). <i>Lưu ý:</i> trong câu còn một từ chỉ hoạt động nữa là “nhắc (đến)”, nhưng từ này không có trong các lựa chọn.' },
    { sec: TV3CK3_S2, name: 'Câu 6', pts: 0.25, type: 'write', lines: 2,
      text: 'Tìm từ có nghĩa giống với từ <b>biết ơn</b>, đặt câu với từ em vừa tìm được.',
      model: 'Từ có nghĩa giống: <b>nhớ ơn, ghi ơn, tri ân</b>… (0,125 điểm)<br>Đặt câu, ví dụ: <i>Chúng em luôn nhớ ơn thầy cô đã dạy dỗ mình.</i> (0,125 điểm)' },
    { sec: TV3CK3_S2, name: 'Câu 7', pts: 0.25, type: 'write', lines: 2, read: TV3CK3_R4,
      text: 'Qua câu chuyện “Chú dế sau lò sưởi”, em có ước mơ gì? Ghi lại ước mơ của em.',
      model: 'Ví dụ: <i>Em ước mơ sau này trở thành một nhạc sĩ sáng tác những bài hát hay cho thiếu nhi.</i><br>HS ghi được ước mơ của mình thành câu trọn vẹn là đạt.' },
    { sec: TV3CK3_S2, name: 'Câu 8', pts: 0.25, type: 'write', lines: 1, read: TV3CK3_R4,
      text: 'Em hãy đặt một câu cảm bộc lộ cảm xúc đối với Mô-da.',
      model: 'Ví dụ: <i>Mô-da ơi, bạn chơi đàn hay quá!</i> · <i>Ôi, Mô-da thật tài giỏi!</i><br>Câu bộc lộ cảm xúc, có từ cảm thán (ôi, quá, thật…) và dấu chấm than cuối câu.' },
    { sec: TV3CK3_S2, name: 'Câu 9', pts: 0.5, type: 'write', lines: 3,
      text: 'Đặt dấu chấm, dấu gạch ngang vào ( ) trong mẩu chuyện sau:<br><b>Trái Đất và Mặt Trời</b><br>Tuấn lên bảy tuổi, em rất hay hỏi ( ) Một lần, em hỏi bố:<br>( ) Bố ơi, con nghe nói trái đất quay xung quanh mặt trời. Có đúng thế không, bố?<br>( ) Đúng đấy con ạ! Bố Tuấn đáp ( )',
      model: 'Tuấn lên bảy tuổi, em rất hay hỏi <b>(.)</b> Một lần, em hỏi bố:<br><b>(–)</b> Bố ơi, con nghe nói trái đất quay xung quanh mặt trời. Có đúng thế không, bố?<br><b>(–)</b> Đúng đấy con ạ! Bố Tuấn đáp <b>(.)</b><br>Mỗi chỗ đúng được 0,125 điểm. (Dấu chấm kết thúc câu kể; dấu gạch ngang đánh dấu lời nói của nhân vật ở đầu dòng.)' },
    { sec: TV3CK3_S2, name: 'Câu 10', pts: 0.5, type: 'write', lines: 3,
      text: 'Giả sử em ước mơ thành bác sĩ, em sẽ làm gì để thực hiện ước mơ đó? Viết 2 câu nói về điều đó.',
      model: 'Ví dụ: <i>Em sẽ chăm chỉ học tập thật giỏi, nhất là môn Toán và Khoa học. Em sẽ rèn luyện thân thể khỏe mạnh và luôn quan tâm, giúp đỡ mọi người.</i><br>Viết được mỗi câu đúng được 0,25 điểm.' },

    { sec: TV3CK3_S3, name: 'Nghe – viết', pts: 2, type: 'write', lines: 7,
      text: 'Nghe – viết: <b>Hai Bà Trưng</b> (đoạn từ “Hai Bà Trưng bước lên bành voi…” đến “…Đất nước ta sạch bóng quân thù.”), khoảng 15 phút.',
      model: '<b>Hai Bà Trưng</b><br>Hai Bà Trưng bước lên bành voi. Đoàn quân rùng rùng lên đường. Giáo lao, cung nỏ, rìu búa, khiên mộc cuồn cuộn tràn theo bóng voi ẩn hiện của Hai Bà. Tiếng trống đồng dội lên vòm cây, đập vào sườn đồi, theo suốt đường hành quân.<br>Thành trì quân giặc lần lượt sụp đổ dưới chân của đoàn quân khởi nghĩa. Tô Định ôm đầu chạy về nước. Đất nước ta sạch bóng quân thù.' + TV3CK3_CT },

    { sec: TV3CK3_S4, name: 'Viết đoạn văn', pts: 3, type: 'write', lines: 10,
      text: 'Viết đoạn văn nêu tình cảm, cảm xúc của em về cảnh vật quê hương em.<br><i>Gợi ý:</i><br>- Tên cảnh đẹp ở quê hương em.<br>- Đặc điểm bao quát của cảnh đẹp.<br>- Điều em thích nhất (ấn tượng nhất) về cảnh đẹp.<br>- Cảm nghĩ của em khi ngắm nhìn cảnh đẹp.',
      model: '<b>Bài mẫu:</b> Quê em có một cánh đồng lúa rộng mênh mông nằm ven chân núi. Mỗi mùa lúa chín, cả cánh đồng như tấm thảm vàng trải dài tới tận chân trời. Em thích nhất là buổi sáng sớm, khi sương còn đọng long lanh trên những bông lúa trĩu hạt. Gió thổi qua, sóng lúa nhấp nhô, hương lúa chín thơm ngào ngạt. Trên bờ ruộng, đàn cò trắng chấp chới bay lượn trông thật đẹp mắt. Mỗi lần đứng ngắm cánh đồng, lòng em lại thấy vui và bình yên lạ thường. Em rất yêu cánh đồng lúa quê em. Em sẽ học thật giỏi để sau này góp phần làm cho quê hương thêm giàu đẹp.<br><b>Các ý cần có:</b> tên cảnh đẹp · đặc điểm bao quát · điều em thích nhất · cảm nghĩ, tình cảm của em.<br><b>Chấm (3 điểm):</b> nội dung đúng đề, đủ ý theo gợi ý 1,5 điểm · kĩ năng 1,5 điểm (viết chữ, chính tả 0,5 · dùng từ, đặt câu 0,5 · có cảm xúc, sáng tạo 0,5).' },
  ],
},

/* ═══════════ 3915 — TH BÌNH XUYÊN (BÌNH GIANG, HẢI DƯƠNG) 2024–2025 ═══════════ */
// Cơ cấu điểm theo hướng dẫn chấm của trường: Đọc thành tiếng 3 + Đọc hiểu 7; Chính tả 3 + Viết đoạn 7.
{
  id: 3915, title: 'CK2 · TH Bình Xuyên (Hải Dương) 2024–2025', time: 70,
  sem: 2, book: 'Kết nối tri thức',
  src: 'https://dethi.violet.vn/present/tieng-viet-3-cuoi-hoc-ki-ii-14565744.html',
  questions: [
    { sec: TV3CK3_S1, name: 'Đọc thành tiếng', pts: 1.5, type: 'write', lines: 0, read: TV3CK3_R5,
      text: 'Con đọc to 3 đoạn đầu của bài “Người bạn nhỏ, tác động lớn” (từ đầu đến “…trả ơn ngài vào một ngày nào đó.”), sau đó trả lời câu hỏi: <b>Vì sao sư tử tỉnh giấc và giận dữ?</b>',
      model: '<b>Gợi ý trả lời:</b> Vì chú chuột nhắt nhảy múa, đùa nghịch trên lưng sư tử khi sư tử đang ngủ say.<br><i>Đề gốc: HS bốc thăm đọc một đoạn khoảng 70 tiếng/phút và trả lời một câu hỏi trong các bài: Mưa (trang 11), Bầy voi rừng Trường Sơn (trang 35), A lô, tớ đây (trang 66), Sông Hương (trang 87), Thư của ông Trái Đất gửi các bạn nhỏ (trang 118) — SGK Tiếng Việt 3 tập 2.</i><br><b>Chấm (1,5 điểm, theo HD của trường):</b> điểm đọc (đọc đúng, rõ ràng, đủ tốc độ, ngắt nghỉ đúng) 1 điểm · trả lời đúng câu hỏi 0,5 điểm.' },

    { sec: TV3CK3_S2, name: 'Câu 1', pts: 0.25, read: TV3CK3_R5,
      text: 'Sư tử đã có thái độ như thế nào khi bị một chú chuột nhắt nhảy múa, đùa nghịch trên lưng nó?',
      opts: o3('Sư tử vui vẻ, đùa giỡn cùng chú chuột.', 'Sư tử giận dữ, túm lấy chuột nhắt mắng.', 'Sư tử buồn bã, kể chuyện với chuột.'), ans: 'B',
      why: 'Bài đọc: “Sư tử tỉnh giấc, nó khá giận dữ và túm lấy chuột nhắt mắng”.' },
    { sec: TV3CK3_S2, name: 'Câu 2', pts: 0.25, read: TV3CK3_R5,
      text: 'Vì sao chú chuột nhắt lại sợ hãi van xin sư tử?',
      opts: o3('Vì bị dọa sẽ nghiền nát bằng móng vuốt của sư tử.', 'Vì không cho chú về nhà với mẹ.', 'Vì sẽ bị sư tử nhai nghiền nát.'), ans: 'A',
      why: 'Sư tử dọa: “Ta sẽ nghiền nát ngươi bằng móng vuốt của ta.” — đúng chi tiết là móng vuốt, không phải nhai.' },
    { sec: TV3CK3_S2, name: 'Câu 3', pts: 0.25, read: TV3CK3_R5,
      text: 'Chuột nhắt đã van xin điều gì khiến sư tử thấy buồn cười và tội nghiệp mà thả nó đi?',
      opts: o3('Chuột nhắt sẽ làm nô lệ cho sư tử.', 'Chuột nhắt sẽ dâng hết thức ăn cho sư tử.', 'Chuột hứa sẽ trả ơn sư tử vào một ngày nào đó.'), ans: 'C',
      why: 'Chuột van xin: “tôi hứa sẽ trả ơn ngài vào một ngày nào đó.”.' },
    { sec: TV3CK3_S2, name: 'Câu 4', pts: 0.25, read: TV3CK3_R5,
      text: 'Chú chuột đã có hành động nào để giúp sư tử chạy thoát?',
      opts: o3('Chuột kêu cứu và được các bạn chuột khác đến giúp đỡ.', 'Chuột nhờ bác gấu đến hù dọa thợ săn.', 'Chuột gặm đứt các dây lưới.'), ans: 'C',
      why: 'Bài đọc: “Chuột lấy hết sức gặm đứt các dây lưới để sư tử chạy thoát.”.' },
    { sec: TV3CK3_S2, name: 'Câu 5', pts: 0.25, type: 'write', lines: 2, read: TV3CK3_R5,
      text: 'Em rút ra bài học gì cho mình từ câu chuyện trên?',
      model: 'Ví dụ: <i>Khi làm việc tốt, giúp đỡ người khác, ta sẽ được ghi nhớ công ơn và được đền đáp.</i> · <i>Không nên coi thường người nhỏ bé, ai cũng có thể giúp được mình.</i>' },
    { sec: TV3CK3_S2, name: 'Câu 6', pts: 0.25,
      text: 'Bộ phận gạch chân trong câu: “<u>Buổi sáng sớm</u>, em tập thể dục.” trả lời cho câu hỏi nào?',
      opts: o3('Ở đâu?', 'Khi nào?', 'Để làm gì?'), ans: 'B',
      why: '“Buổi sáng sớm” chỉ thời gian → trả lời câu hỏi <b>Khi nào?</b> (Khi nào em tập thể dục?).' },
    { sec: TV3CK3_S2, name: 'Câu 7', pts: 0.5,
      text: 'Từ nào dưới đây có nghĩa giống với từ “chăm chỉ”?',
      opts: o4('siêng năng', 'học tập', 'lười biếng', 'làm bài'), ans: 'A',
      why: '“Siêng năng” cùng nghĩa với “chăm chỉ” (chịu khó làm việc, học tập). “Lười biếng” là từ trái nghĩa.' },
    { sec: TV3CK3_S2, name: 'Câu 8a', pts: 0.125,
      text: 'Điền dấu thích hợp vào ô trống:<br><i>Én sợ hãi kêu lên <b>[1]</b><br>- Chao ôi <b>[2]</b> Nước sông chảy siết quá <b>[3]</b><br>- Con không dám bay qua à <b>[4]</b></i><br>Ô <b>[1]</b> điền dấu gì?',
      opts: o4('Dấu hai chấm (:)', 'Dấu chấm than (!)', 'Dấu chấm hỏi (?)', 'Dấu chấm (.)'), ans: 'A',
      why: 'Sau “kêu lên” là lời nói của Én ở dòng dưới (có gạch đầu dòng) → dùng dấu hai chấm.' },
    { sec: TV3CK3_S2, name: 'Câu 8b', pts: 0.125,
      text: 'Điền dấu thích hợp: <i>- Chao ôi <b>[2]</b> Nước sông chảy siết quá…</i><br>Ô <b>[2]</b> điền dấu gì?',
      opts: o4('Dấu hai chấm (:)', 'Dấu chấm than (!)', 'Dấu chấm hỏi (?)', 'Dấu chấm (.)'), ans: 'B',
      why: '“Chao ôi” là lời than, bộc lộ cảm xúc sợ hãi → dấu chấm than.' },
    { sec: TV3CK3_S2, name: 'Câu 8c', pts: 0.125,
      text: 'Điền dấu thích hợp: <i>- Chao ôi! Nước sông chảy siết quá <b>[3]</b></i><br>Ô <b>[3]</b> điền dấu gì?',
      opts: o4('Dấu hai chấm (:)', 'Dấu chấm than (!)', 'Dấu chấm hỏi (?)', 'Dấu chấm (.)'), ans: 'B',
      why: 'Câu có từ “quá”, bộc lộ cảm xúc (câu cảm) → dấu chấm than.' },
    { sec: TV3CK3_S2, name: 'Câu 8d', pts: 0.125,
      text: 'Điền dấu thích hợp: <i>- Con không dám bay qua à <b>[4]</b></i><br>Ô <b>[4]</b> điền dấu gì?',
      opts: o4('Dấu hai chấm (:)', 'Dấu chấm than (!)', 'Dấu chấm hỏi (?)', 'Dấu chấm (.)'), ans: 'C',
      why: 'Câu có từ để hỏi “à”, là lời hỏi → dấu chấm hỏi.' },
    { sec: TV3CK3_S2, name: 'Câu 9', pts: 0.5, type: 'type',
      text: 'Gạch dưới (viết lại) các từ chỉ đặc điểm trong câu sau:<br><i>Trưa nước biển xanh lơ và khi chiều tà thì đổi sang màu xanh lục.</i>',
      ans: 'xanh lơ, xanh lục', alts: ['xanh lơ xanh lục', 'xanh lơ và xanh lục', 'xanh lục, xanh lơ', 'xanh lục xanh lơ', 'xanh lục và xanh lơ'],
      why: '“Xanh lơ”, “xanh lục” chỉ màu sắc của nước biển → từ chỉ đặc điểm. “Nước biển” là từ chỉ sự vật; “đổi” là từ chỉ hoạt động. Mỗi từ đúng 0,25 điểm.' },
    { sec: TV3CK3_S2, name: 'Câu 10', pts: 0.5, type: 'write', lines: 2,
      text: 'Đặt một câu cảm thể hiện cảm xúc của em khi mùa hè đến.',
      model: 'Ví dụ: <i>A, hè đến rồi!</i> · <i>Ôi, mùa hè đến vui quá!</i> · <i>Tiếng ve kêu rộn ràng thích quá!</i><br>Câu bộc lộ cảm xúc, có từ cảm thán (a, ôi, quá…) và dấu chấm than cuối câu.' },

    { sec: TV3CK3_S3, name: 'Nghe – viết', pts: 1.5, type: 'write', lines: 6,
      text: 'Nghe – viết: <b>Nhà rông</b> (SGK Tiếng Việt 3 tập 2 – Kết nối tri thức, trang 95; từ đầu đến “…cuộc sống no ấm.”), khoảng 15 phút.',
      model: TV3CK3_NHA_RONG + '<br><b>Chấm (1,5 điểm, theo HD của trường):</b> bài viết đúng chính tả, trình bày sạch sẽ được 1,5 điểm · mỗi lỗi (sai phụ âm, vần, không viết hoa…) trừ 0,1 điểm (lỗi trùng nhau chỉ trừ một lần) · chữ viết không rõ ràng, sai độ cao, khoảng cách, kiểu chữ hoặc trình bày bẩn trừ 0,25 điểm toàn bài.' },

    { sec: TV3CK3_S4, name: 'Viết đoạn văn', pts: 3.5, type: 'write', lines: 10,
      text: 'Viết đoạn văn nêu tình cảm, cảm xúc của em về một cảnh đẹp của đất nước.',
      model: '<b>Bài mẫu:</b> Đất nước Việt Nam có rất nhiều cảnh đẹp, nhưng em yêu nhất là vịnh Hạ Long. Mùa hè năm ngoái, em được bố mẹ cho đi thăm vịnh. Mặt nước biển xanh biếc, phẳng lặng như một tấm gương khổng lồ. Hàng nghìn hòn đảo lớn nhỏ nhô lên với đủ hình dáng lạ mắt, hòn thì giống con gà, hòn lại như chiếc đỉnh hương. Ngồi trên tàu ngắm cảnh, em thấy lòng mình thật vui sướng và tự hào. Em rất yêu vịnh Hạ Long, một kì quan thiên nhiên của đất nước. Em mong sẽ được trở lại thăm vịnh thêm nhiều lần nữa.<br><b>Các ý cần có:</b> giới thiệu cảnh đẹp · đặc điểm nổi bật · cảm xúc, tình cảm của em.<br><b>Chấm (3,5 điểm, theo HD của trường):</b> nội dung đủ, đúng đề 2 điểm · kĩ năng 1,5 điểm (viết chữ đúng chính tả 0,5 · dùng từ, đặt câu 0,5 · sáng tạo 0,5); tuỳ mức độ sai sót hạ dần từng 0,25 điểm.' },
  ],
},

);
