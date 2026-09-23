// TIẾNG VIỆT 3 — ĐỀ KIỂM TRA CUỐI HỌC KÌ II (CUỐI NĂM) — BỘ CHÂN TRỜI SÁNG TẠO & CÁNH DIỀU — TRỌN ĐỀ
// 5 đề thật của 5 trường tiểu học ở 5 tỉnh/thành khác nhau. Không tìm được bản chữ công khai của trường
// CLC nào cho TV3 CK2 hai bộ sách này, nên dùng đề thật của trường công lập — ghi đúng tên trường:
//   3916 · TH Quang Trung (thị xã Buôn Hồ, Đắk Lắk) 2022–2023 — Chân trời sáng tạo, có đáp án + HD chấm
//        https://tailieu.vn/doc/de-thi-hoc-ki-2-mon-tieng-viet-lop-3-co-dap-an-2712549.html
//        (bản mẫu PDF: cdn.tailieu.vn/files/samples/… — phiếu đọc có “Vời vợi Ba Vì” = bài nghe – viết
//         trang 122 SGK TV3 tập 2 CTST → xếp bộ CTST)
//   3917 · TH Hà Huy Giáp (Quận 12, TP.HCM) 2022–2023 — Chân trời sáng tạo, có HD chấm
//        https://dethilop3.com/de-kiem-tra-cuoi-hoc-ki-ii-mon-tieng-viet-lop-3-nam-hoc-2022-2023-truong-tieu-hoc-ha-huy-giap-co-dap-an-1575/
//        (cùng tệp được trang này đăng lại với tên “Kiểm tra cuối học kì 2 Tiếng Việt Lớp 3 (Sách Chân trời
//         sáng tạo) - Năm học 2022-2023”: https://dethilop3.com/kiem-tra-cuoi-hoc-ki-2-tieng-viet-lop-3-sach-chan-troi-sang-tao-nam-hoc-2022-2023-co-huong-dan-cham-942/)
//   3918 · TH Tứ Minh (TP Hải Dương, Hải Dương) 2022–2023 — Cánh diều, có ma trận + HD chấm
//        https://tailieu.vn/doc/de-thi-hoc-ki-2-tieng-viet-lop-3-co-dap-an-2746884.html
//        (phiếu đọc: Chợ nổi Cà Mau tr.10, Bên ô cửa đá tr.49, Hai Bà Trưng tr.70, Em nghĩ về Trái Đất tr.88
//         — TV3 tập hai Cánh diều)
//   3919 · TH Lê Văn Tám (TP Kon Tum, Kon Tum) 2023–2024 — Cánh diều, có HD chấm đọc thành tiếng
//        https://tailieu.vn/doc/de-thi-hoc-ki-2-tieng-viet-lop-3-co-dap-an-2824377.html
//        (phiếu đọc: Chú hải quân tr.67, Trận đánh trên không tr.72, Cu-ba tươi đẹp tr.95, Gặp gỡ ở
//         Lúc-xăm-bua tr.99… — TV3 tập 2 Cánh diều; bản mẫu không kèm đáp án đọc hiểu → tự giải)
//   3920 · TH 1 Thị trấn Mỏ Cày (huyện Mỏ Cày Nam, Bến Tre) 2023–2024 — Cánh diều (đề ghi rõ “Sách Cánh
//        diều, tập 2”), Đề 1, có đáp án + HD chấm
//        https://dethilop3.com/de-kiem-tra-cuoi-hoc-ki-ii-mon-tieng-viet-lop-3-nam-hoc-2023-2024-truong-tieu-hoc-1-thi-tran-mo-cay-co-dap-an-1867/
//
// Thang điểm: đề gốc Đọc 10 + Viết 10 → mọi điểm CHIA ĐÔI để tổng = 10.
// (3917: trường chấm Chính tả 5 đ + Tập làm văn 5 đ → 2,5 + 2,5.)
// Đọc thành tiếng: đề gốc cho HS bốc thăm phiếu đọc; ở đây lấy một phiếu của chính trường (bài trong phiếu)
// để bố mẹ nghe con đọc và hỏi một câu; danh sách phiếu gốc ghi trong `model`.
//
// Đáp án đã soát lại (xem thêm `why`):
//   3917: HD chấm của trường ghi câu 4 = B (“màu đỏ chót”) — sai, bài viết “đỏ au au của chùm chôm chôm” → C
//         (một trường khác dùng cùng bài đọc cũng chấm C). Câu 9 HD chấm ghi nhầm “đặt câu có hình ảnh so
//         sánh” — đề hỏi đặt câu khiến để mượn sách → chấm theo đúng đề. Câu 7b HD chấm bỏ trống → tự giải.
//   3918: đề gốc gõ nhầm “không một phượng mây”, “im đậm”, “thưa thớt phải căn nhà” → sửa “gợn mây”,
//         “in đậm”, “vài căn nhà”; chính tả “ngọt mào mật ong” → “ngọt màu mật ong”.
//   3916, 3919, 3920: đáp án trắc nghiệm của trường đúng; câu tự luận viết lại gợi ý trả lời.
//
// Kiểm định lần 2 (2026-09, đối chiếu lại cả 5 nguồn, gồm bản PDF mẫu cdn.tailieu.vn của 3916/3918/3919):
//   3917 bộ sách: giữ CTST — đề Viết đoạn “nêu tình cảm, cảm xúc trước một cảnh đẹp ở quê hương hoặc nơi em ở”
//        (7–9 câu) trùng bài Viết trang 84 SGK TV3 tập 2 CTST; các phiếu đọc thành tiếng là văn bản của KNTT tập 1
//        (Ngày gặp lại, Mùa hè lấp lánh, Thư viện, Bạn nhỏ trong nhà) được trường đổi tên, dùng như văn bản ngoài SGK.
//   3917 Câu 5: giữ C theo HD chấm, `why` ghi rõ B “trên sông” cũng gần đúng (cần người quyết). Câu 7a: thêm alts
//        có “già” (cáo già). Câu 7b: đáp án đủ “trông (thấy), buông, chạy” + cách chấm; bỏ câu “theo một trường khác”
//        (không kiểm chứng được).
//   3918: bản PDF mẫu có HD chấm đọc hiểu của trường: 1A 2C 3D 4B, 5a lời nói trực tiếp, 5b phần giải thích,
//        7 “Tàu (cau) – vươn, xòe rộng – như – tay”, 8 “…bằng gì?”, 9C — khớp hết đáp án trong file; ghi thêm cách
//        chấp nhận ở câu 7.
//   3919: bản mẫu không có đáp án đọc hiểu; đã giải lại độc lập, khớp. Điểm câu 7 (0,5 gốc) / 8, 9 (1 gốc) đúng ma trận.

/* ── Bài đọc dùng chung ─────────────────────────────────────────────────── */

/* 3916 — Quang Trung (Buôn Hồ) */
const TV3CK4_A_R0 = '<b>Vời vợi Ba Vì</b><br>Từ Tam Đảo nhìn về phía tây, vẻ đẹp của Ba Vì biến ảo lạ lùng từng mùa trong năm, từng giờ trong ngày. Thời tiết thanh tịnh, trời trong trẻo, ngồi phóng tầm mắt qua thung lũng xanh biếc, Ba Vì hiện lên như hòn ngọc bích. Về chiều, sương mù toả trắng, Ba Vì nổi bồng bềnh như vị thần bất tử ngự trên sóng. Những đám mây nhuộm màu biến hoá muôn hình, nghìn dạng tựa như nhà ảo thuật có phép tạo ra một chân trời rực rỡ.<br><i>(Võ Văn Trực)</i>';

const TV3CK4_A_R1 = '<b>Người bạn mới</b><br>Cả lớp đang giải bài tập toán, bỗng một phụ nữ lạ bước vào, khẽ nói với thầy giáo:<br>- Thưa thầy, tôi đưa con gái tôi đến lớp. Nhà trường đã nhận cháu vào học…<br>- Mời bác đưa em vào – Thầy Kốt-ski nói.<br>Bà mẹ bước ra hành lang và trở lại ngay với một bé gái. Ba mươi cặp mắt ngạc nhiên hướng cả về phía cô bé nhỏ xíu - em bị gù.<br>Thầy giáo nhìn nhanh cả lớp, ánh mắt thầy nói lời cầu khẩn: “Các con đừng để người bạn mới cảm thấy bị chế nhạo”. Các trò ngoan của thầy đã hiểu, các em vui vẻ, tươi cười nhìn người bạn mới. Thầy giáo giới thiệu:<br>- Tên bạn mới của các em là Ô-li-a. - Thầy liếc nhìn tập hồ sơ bà mẹ đưa. - Bạn ấy từ tỉnh Tôm-ski của nước Nga chuyển đến trường chúng ta. Ai nhường chỗ cho bạn ngồi bàn đầu nào? Các em đều thấy bạn bé nhỏ nhất lớp mà.<br>Tất cả sáu em học sinh trai và gái ngồi bàn đầu đều giơ tay:<br>- Em nhường chỗ cho bạn…<br>Cô bé Ô-li-a ngồi vào bàn và nhìn các bạn với ánh mắt dịu dàng, tin cậy.<br><i>(Theo Xu-khôm-lin-xki, Mạnh Hường dịch)</i>';

/* 3917 — Hà Huy Giáp (Q.12, TP.HCM) */
const TV3CK4_B_R0 = '<b>Ngày gặp lại</b><br>Có tiếng gọi ngoài cổng. Chi nhìn ra, thấy Sơn giơ chiếc diều rất xinh, vẫy rối rít:<br>- Cho cậu này.<br>Chi mừng rỡ chạy ra. Sơn về quê từ đầu hè, giờ gặp lại, hai bạn có bao nhiêu chuyện. Sơn kể ở quê, cậu được theo ông bà đi trồng rau, câu cá. Chiều chiều, cậu thường cùng bạn thả diều. Khi diều lên cao, cậu nằm lăn ra bãi cỏ ngắm trời. Cánh diều đứng im như ngủ thiếp đi trên bầu trời xanh.<br><i>(Minh Dương)</i>';

const TV3CK4_B_R1 = '<b>Chợ nổi Cà Mau</b><br>Đứng trên chiếc cầu đoạn cuối sông Gành Hào, nhìn về phía mặt trời mọc, có thể thấy một dãy ghe dập dờn xao động cả mặt sông, những cái chân vịt gác chổng lên loang loáng dưới ánh mặt trời. Đó là chợ nổi Cà Mau quê tôi.<br>Chợ họp lúc bình minh lên đẹp đẽ, tinh khiết, trong ngần. Sương đọng trên chiếc mùng giăng trên mui ghe của đám trẻ con ngủ vùi, ngủ nướng rồi lảng bảng tan cho một ngày buôn bán bận rộn bắt đầu. Người bán, người mua trùng trình trên sóng nước. Chủ ghe tất bật bày biện hàng hóa gọn ghẽ, tươi tắn và tinh tươm.<br>Chợ nổi Cà Mau chỉ tập trung bán buôn rau, trái miệt vườn. Không cần ghé vào từng ghe để xem mà chỉ cần nhìn cái nhánh cây thon, dài buộc ở đầu ghe, trên cây treo gì thì ghe bán thức ấy. Lúc la lúc lỉu trông lạ vậy, nhưng đó là tiếng chào mời không lời. Nhìn cái nhánh cây thon, dài ấy, ta khó cầm lòng được với cái màu đỏ thanh tao của đu đủ chín cây, đỏ au au của chùm chôm chôm, vàng ươm của dứa, xoài, nâu đất của me chín, xanh non của mướp, tím lịm của cà…<br>Giữa chợ nổi Cà Mau, ngập tràn hồn tôi cái cảm giác như gặp được những khu vườn của miệt sông Tiền, sông Hậu, như nhìn thấy những rẫy khóm, rẫy mía miên man dọc triền sông Trẹm quê mình.<br><i>(Theo Nguyễn Ngọc Tư)</i>';

/* 3918 — Tứ Minh (Hải Dương) */
const TV3CK4_C_R0 = '<b>Chợ nổi Cà Mau</b> (đoạn 1, đoạn 2 — Tiếng Việt 3, tập hai, trang 10)<br>Chợ họp lúc bình minh lên. Hàng trăm chiếc ghe to, nhỏ đậu sát vào nhau thành một dãy dài, người bán, người mua trùng trình trên sóng nước. Chủ ghe tất bật bày biện hàng hóa gọn ghẽ, tươi tắn và tinh tươm.<br>Chợ nổi Cà Mau chỉ tập trung bán buôn rau, trái miệt vườn. Bạn không cần ghé vào từng ghe để xem hàng có những gì. Bạn cứ nhìn cái nhánh cây thon, dài buộc ở đầu ghe kia, trên cây treo gì thì ghe bán thức ấy. Đó là tiếng chào mời không lời. Chẳng cần rao bán, chèo kéo nhưng khách cầm lòng sao được với cái màu đỏ au au của chùm chôm chôm; vàng ươm của khóm, xoài; xanh riết của cóc, ổi; tím của cà,...<br><i>(Theo Nguyễn Ngọc Tư)</i>';

const TV3CK4_C_R1 = '<b>Quê hương</b><br>… Tôi ngước nhìn lên bầu trời xanh thẳm không một gợn mây, chi chít những vì sao. Trăng treo lơ lửng trên đầu ngọn tre in đậm lên nền trời. Ánh trăng trùm mấy mái nhà và khu vườn rau xanh tốt của bà. Lúc ấy, tôi bỗng nắm chặt lấy tay bà và thốt lên: “Bà ơi! Trăng ở quê đẹp thật bà ạ!...”. Sau mùa hè năm ấy, bà nội tôi ra đi mãi mãi. Hè nào tôi cũng xin bố cho về thăm quê. Quê nội tôi bây giờ cũng khác hẳn, chẳng còn một tí dấu vết nào của ngày xưa nữa. Những dãy nhà hai tầng, ba tầng san sát nhau mọc lên như nấm. Không còn ai nhớ nổi bóng dáng lũy tre xanh…. Tôi cầm bút viết, dồn tất cả tình cảm nhớ thương sâu đậm với bà vào bài tập làm văn tả phong cảnh quê hương hôm ấy…. Tôi viết về quê hương tôi với lũy tre xanh mát rượi và ánh trăng rằm dịu ngọt. Phải rồi, tôi bỗng hiểu ra rằng: chính bà đã làm xanh mãi ước mơ của tôi.<br><i>(Đào Quốc Thịnh)</i>';

/* 3919 — Lê Văn Tám (Kon Tum) */
const TV3CK4_D_R0 = '<b>Chú hải quân</b> (Tiếng Việt 3, tập 2, trang 67)<br>Vững vàng trên đảo nhỏ<br>Bồng súng gác biển trời<br>Áo bạc nhàu nắng gió<br>Chú mỉm cười rất tươi.<br><br>Giữa trập trùng xa khơi<br>Hải âu vờn quanh chú<br>Bên đảo đá chơi vơi<br>Dạt dào ngàn sóng vỗ.<br><br>Dù nắng mưa, bão tố<br>Các chú vẫn hiên ngang<br>Bao tàu thuyền qua đó<br>Kéo còi chào ngân vang.<br><br>Lá cờ đỏ sao vàng<br>Phấp phới bay trong gió<br>Ước mai này như chú<br>Giữ yên biển quê hương.<br><i>(Hoài Khánh)</i>';

const TV3CK4_D_R1 = '<b>Người hồi sinh di tích</b><br>Giữa những ngôi nhà nhỏ, mái ngói nhấp nhô của đô thị cổ Hội An, có một bức tượng được người dân và du khách thường xuyên đến dâng hoa và hương. Đó là tượng kiến trúc sư Ka-dích. Từ đất nước Ba Lan xa xôi, ông đã đến Việt Nam và cống hiến hết mình cho việc hồi sinh nhiều di sản văn hóa suốt 17 năm trời, cho đến những ngày cuối đời. Ông là người có công lớn trong việc phát triển đô thị cổ Hội An thành một địa điểm du lịch hấp dẫn.<br>Nhiều người còn nhớ những ngày Ka-dích tham gia trùng tu khu Thánh Địa Mỹ Sơn. Ông làm việc say mê, bất chấp mùa hè nóng nực, côn trùng rất nhiều, bom mìn còn sót lại trong chiến tranh có thể nổ bất cứ lúc nào. Ông đã cùng mọi người ăn nước suối, tắm nước suối, ngủ trong lán trại, ăn mắm dưa như một nông dân thực thụ.<br>Ngoài Mỹ Sơn, Hội An, Ka-dích còn có những đóng góp lớn trong việc trùng tu di tích Hoàng thành Huế. Ông cũng là người giới thiệu các di sản văn hóa này với thế giới. Cả Hoàng thành Huế, thánh địa Mỹ Sơn và đô thị cổ Hội An đều được công nhận là Di sản văn hóa thế giới.<br><i>(Theo Duy Hiền và An Nhi)</i>';

/* 3920 — TH 1 Thị trấn Mỏ Cày (Bến Tre) */
const TV3CK4_E_R0 = '<b>Sông Hương</b> (phiếu đọc số 1 — Sách Cánh diều, tập 2, trang 7)<br>Người ta kể rằng, xưa kia, dòng nước ở đây thường thoảng lên một mùi hương dìu dịu bởi nguồn sông chảy qua một cánh rừng mọc dày một loại cỏ có tên là thạch xương bồ.<br>Sông Hương là một bức tranh phong cảnh khổ dài mà mỗi đoạn, mỗi khúc đều có vẻ đẹp riêng của nó. Bao trùm lên cả bức tranh đó là một màu xanh có nhiều sắc độ, đậm nhạt khác nhau: màu xanh da trời, màu xanh của nước biếc, màu xanh non của những bãi ngô, thảm cỏ,...<br><i>(Theo Cửu Thọ)</i>';

const TV3CK4_E_R1 = '<b>Câu chuyện về ngỗng mẹ</b><br>Một ngày xuân ấm áp, ngỗng mẹ dẫn đàn con vàng ươm của mình đi dạo chơi. Đàn ngỗng con quên ngỗng mẹ và bắt đầu tản ra khắp đồng cỏ mênh mông, xanh rờn. Ngỗng mẹ bắt đầu lo lắng cất tiếng gọi con. Bỗng những đám mây đen kịt ùn ùn kéo đến. Lúc đó, các chú ngỗng con mới nhớ đến mẹ.<br>Những hạt mưa đá to từ trên trời rào rào đổ xuống. Bầy ngỗng con vừa kịp chạy đến chui vào đôi cánh mẹ. Dưới cánh mẹ đàn ngỗng cảm thấy thật yên ổn và ấm áp. Ngỗng con thấy đâu đó có tiếng nổ ùng oàng, tiếng gió gào thét và tiếng mưa đá rơi lộp độp.<br>Rồi tất cả trở lại yên lặng. Ngỗng mẹ khẽ nâng đôi cánh lên. Đàn ngỗng con chạy ùa ra bãi cỏ. Chúng nhìn đôi cánh mẹ rách nát, lông rụng tả tơi. Một chú ngỗng bé bỏng và yếu ớt nhất chạy đến bên mẹ và hỏi: “Sao cánh mẹ lại rách như thế này?”. Ngỗng mẹ cố nén đau đớn, trả lời khe khẽ: “Mọi việc đều tốt đẹp con ạ”. Đàn ngỗng con lại tản ra nô đùa trên bãi cỏ và ngỗng mẹ cảm thấy hạnh phúc.<br><i>(Theo V. A. Xu-khôm-lin-xki)</i>';

/* Tên phần dùng chung */
const TV3CK4_S1 = 'A. Kiểm tra đọc — I. Đọc thành tiếng';
const TV3CK4_S2 = 'A. Kiểm tra đọc — II. Đọc hiểu và luyện từ và câu';
const TV3CK4_S3 = 'B. Kiểm tra viết — I. Chính tả';
const TV3CK4_S4 = 'B. Kiểm tra viết — II. Tập làm văn';

/* Tiêu chí đọc thành tiếng (4 điểm gốc → 2 điểm) */
const TV3CK4_DOC = '<br><b>Chấm (2 điểm, mỗi ý 0,5 điểm):</b> đọc vừa đủ nghe, rõ ràng, tốc độ khoảng 70–80 tiếng/phút · đọc đúng tiếng, từ (không sai quá 5 tiếng) · ngắt nghỉ hơi đúng ở dấu câu và các cụm từ rõ nghĩa · trả lời đúng câu hỏi về nội dung đoạn đọc.';

/* Tiêu chí chính tả (4 điểm gốc → 2 điểm) */
const TV3CK4_CT = '<br><b>Chấm (2 điểm, mỗi ý 0,5 điểm):</b> tốc độ viết đạt yêu cầu (khoảng 65–70 chữ/15 phút) · chữ viết rõ ràng, đúng kiểu và cỡ chữ · viết đúng chính tả (không mắc quá 5 lỗi) · trình bày đúng quy định, sạch đẹp. Lỗi sai phụ âm đầu, vần, dấu thanh, không viết hoa đúng: tuỳ mức trừ điểm (lỗi giống nhau chỉ trừ một lần).';

/* Tiêu chí tập làm văn (6 điểm gốc → 3 điểm) */
const TV3CK4_TLV = '<br><b>Chấm (3 điểm):</b> nội dung đúng đề, đủ các ý theo gợi ý, đủ số câu (1,5 điểm) · viết chữ đúng chính tả (0,5 điểm) · dùng từ, đặt câu đúng, ý sắp xếp hợp lí (0,5 điểm) · có sáng tạo: có cảm xúc, có hình ảnh so sánh, dùng từ hay (0,5 điểm).';

TV3CK.push(

/* ═══════════ 3916 — TH QUANG TRUNG (TX BUÔN HỒ, ĐẮK LẮK) 2022–2023 · CTST ═══════════ */
{
  id: 3916, title: 'CK2 · TH Quang Trung (Đắk Lắk) 2022–2023', time: 70,
  sem: 2, book: 'Chân trời sáng tạo',
  src: 'https://tailieu.vn/doc/de-thi-hoc-ki-2-mon-tieng-viet-lop-3-co-dap-an-2712549.html',
  questions: [
    { sec: TV3CK4_S1, name: 'Đọc thành tiếng', pts: 2, type: 'write', lines: 0, read: TV3CK4_A_R0,
      text: 'Con đọc to bài “Vời vợi Ba Vì”, sau đó trả lời câu hỏi: <b>Về chiều, Ba Vì hiện lên như thế nào?</b>',
      model: '<b>Gợi ý trả lời:</b> Về chiều, sương mù toả trắng, Ba Vì nổi bồng bềnh như vị thần bất tử ngự trên sóng.<br><b>Phiếu bốc thăm của trường:</b> đọc một đoạn trong bài “Vời vợi Ba Vì”, “Chiếc áo mới ngày xuân”, “Đôi cánh của ngựa trắng” và trả lời 1 câu hỏi do giáo viên nêu.' + TV3CK4_DOC },

    { sec: TV3CK4_S2, name: 'Câu 1', pts: 0.25, read: TV3CK4_A_R1,
      text: 'Người bạn mới đến lớp có tên là gì?',
      opts: o4('Va-li-a', 'Ô-li-a', 'Cô-li-a', 'Tôm-ski'), ans: 'B',
      why: 'Thầy giáo giới thiệu: “Tên bạn mới của các em là Ô-li-a.” (Tôm-ski là tên tỉnh của nước Nga).' },
    { sec: TV3CK4_S2, name: 'Câu 2', pts: 0.25, read: TV3CK4_A_R1,
      text: 'Ngoại hình của người bạn mới đến lớp như thế nào?',
      opts: o4('Cao lớn và khỏe mạnh.', 'Nhỏ xíu và bị gù.', 'Nhỏ bé và xinh xắn.', 'Nhỏ bé và gầy yếu.'), ans: 'B',
      why: 'Bài viết: “…hướng cả về phía cô bé nhỏ xíu - em bị gù.”' },
    { sec: TV3CK4_S2, name: 'Câu 3', pts: 0.25, read: TV3CK4_A_R1,
      text: 'Các bạn học sinh trong lớp đã đối xử với người bạn mới như thế nào?',
      opts: o4('Chê bai, chế giễu ngoại hình của bạn.', 'Cười đùa, không thân thiện với bạn.', 'Thân thiện, chủ động nhường chỗ ngồi cho bạn.', 'Thường nói xấu bạn sau khi ra khỏi lớp.'), ans: 'C',
      why: 'Các em vui vẻ, tươi cười nhìn bạn mới; cả sáu bạn ngồi bàn đầu đều giơ tay xin nhường chỗ.' },
    { sec: TV3CK4_S2, name: 'Câu 4', pts: 0.25, read: TV3CK4_A_R1,
      text: 'Em thấy các bạn học sinh trong câu chuyện trên là người như thế nào?',
      opts: o4('Không biết lẽ phải, luôn cho bản thân mình đúng.', 'Ích kỉ, nhỏ nhen, không quan tâm đến bất cứ ai.', 'Thờ ơ, không thông cảm với hoàn cảnh của bạn.', 'Hiểu chuyện, cảm thông trước hoàn cảnh của bạn.'), ans: 'D',
      why: 'Các bạn hiểu ngay ánh mắt cầu khẩn của thầy, không chế nhạo mà còn nhường chỗ — các bạn hiểu chuyện và biết cảm thông.' },
    { sec: TV3CK4_S2, name: 'Câu 5', pts: 0.5, type: 'write', lines: 2, read: TV3CK4_A_R1,
      text: 'Qua câu chuyện trên, em rút ra được bài học gì?',
      model: 'Ví dụ: <i>Trong cuộc sống, có nhiều người không may mắn có được ngoại hình như mong muốn, chúng ta không nên phân biệt đối xử, chê bai hay chế giễu họ mà cần cảm thông, giúp đỡ.</i>' },
    { sec: TV3CK4_S2, name: 'Câu 6', pts: 0.5, type: 'write', lines: 2, read: TV3CK4_A_R1,
      text: 'Nếu em có một người bạn có ngoại hình đặc biệt như bạn Ô-li-a, em sẽ làm gì để bạn không cảm thấy tự ti về bản thân?',
      model: 'HS liên hệ bản thân. Ví dụ: <i>Em sẽ quan tâm, giúp đỡ bạn, rủ bạn cùng chơi, cùng học để bạn luôn vui vẻ; em không bao giờ trêu chọc bạn.</i>' },
    { sec: TV3CK4_S2, name: 'Câu 7', pts: 0.25,
      text: 'Từ so sánh được sử dụng trong câu sau là từ ngữ nào?<br><i>Những chiếc lá sen to như cái sàng màu xanh sẫm đã quăn mép, khô dần.</i>',
      opts: o4('như', 'như cái sàng', 'xanh sẫm', 'to như'), ans: 'A',
      why: 'Lá sen (sự vật 1) được so sánh với cái sàng (sự vật 2); từ nối để so sánh là <b>như</b>.' },
    { sec: TV3CK4_S2, name: 'Câu 8', pts: 0.25, type: 'type',
      text: 'Viết lại bộ phận trả lời cho câu hỏi <b>“Để làm gì?”</b> trong câu sau (đề gốc: gạch chân):<br><i>Chúng ta cần đọc sách để có thêm nhiều kiến thức bổ ích.</i>',
      ans: 'để có thêm nhiều kiến thức bổ ích', alts: ['có thêm nhiều kiến thức bổ ích'],
      why: 'Hỏi: Chúng ta cần đọc sách <b>để làm gì</b>? → <u>để có thêm nhiều kiến thức bổ ích</u>.' },
    { sec: TV3CK4_S2, name: 'Câu 9', pts: 0.5, type: 'write', lines: 3,
      text: 'Viết 2 – 3 câu nói về một con vật, trong đó có sử dụng hình ảnh so sánh.',
      model: 'Ví dụ: <i>Nhà em nuôi một chú mèo tam thể. Em thường gọi nó là Miu. Đôi mắt của Miu xanh như hai hòn bi ve trông rất đẹp.</i><br>Viết đủ 2–3 câu, có câu dùng hình ảnh so sánh: đủ điểm; không có câu so sánh: được một nửa số điểm.' },

    { sec: TV3CK4_S3, name: 'Nghe – viết', pts: 2, type: 'write', lines: 7,
      text: 'Nghe – viết: <b>Cảnh làng Dạ</b> (cả đoạn, khoảng 15 phút). Bố mẹ đọc chậm từng cụm từ cho con viết cả tên bài.',
      model: '<b>Cảnh làng Dạ</b><br>Những hàng cau làng Dạ thì bất chấp tất cả sức mạnh tàn bạo của mùa đông, chúng vẫn còn y nguyên những tàu lá mềm mại như cái đuôi én. Trên nền đất rắn lại vì giá lạnh, những đọt lá non vẫn đang xoè, vàng nhạt và những cây cau vẫn duyên dáng, rung rinh thân mình, tưởng như chúng sinh ra là để trang điểm cho làng Dạ thêm vẻ thanh tú, nhẹ nhàng.<br><i>(Ma Văn Kháng)</i>' + TV3CK4_CT },

    { sec: TV3CK4_S4, name: 'Luyện viết đoạn', pts: 3, type: 'write', lines: 9,
      text: 'Viết đoạn văn (khoảng 5 – 7 câu) về một nhân vật em yêu thích trong câu chuyện đã đọc, đã nghe.<br>Gợi ý: – Tên nhân vật. – Tên câu chuyện kể về nhân vật. – Những điều em thích ở nhân vật. – Lí do em yêu thích nhân vật.',
      model: '<b>Bài mẫu:</b> Em đã đọc rất nhiều truyện cổ tích, nhưng em thích nhất nhân vật cô Tấm trong truyện “Tấm Cám”. Tấm là một cô gái xinh đẹp, hiền lành và chăm chỉ. Dù bị dì ghẻ và Cám bắt làm lụng vất vả, Tấm vẫn không một lời oán trách. Em thích nhất lúc Tấm nhặt thóc, được đàn chim sẻ bay xuống giúp. Cuối cùng, Tấm được sống hạnh phúc bên nhà vua. Em yêu quý Tấm vì Tấm hiền lành và tốt bụng. Em mong mình cũng sẽ luôn chăm chỉ, hiền hậu như cô Tấm.<br><b>Các ý cần có:</b> tên nhân vật và câu chuyện · đặc điểm, việc làm đáng nhớ của nhân vật · điều em thích và lí do · tình cảm của em.' + TV3CK4_TLV },
  ],
},

/* ═══════════ 3917 — TH HÀ HUY GIÁP (QUẬN 12, TP.HCM) 2022–2023 · CTST ═══════════ */
{
  id: 3917, title: 'CK2 · TH Hà Huy Giáp (TP.HCM) 2022–2023', time: 80,
  sem: 2, book: 'Chân trời sáng tạo',
  src: 'https://dethilop3.com/de-kiem-tra-cuoi-hoc-ki-ii-mon-tieng-viet-lop-3-nam-hoc-2022-2023-truong-tieu-hoc-ha-huy-giap-co-dap-an-1575/',
  questions: [
    { sec: TV3CK4_S1, name: 'Đọc thành tiếng', pts: 2, type: 'write', lines: 0, read: TV3CK4_B_R0,
      text: 'Con đọc to bài “Ngày gặp lại” (phiếu Đề 1 của trường), sau đó trả lời câu hỏi:<br>– <b>Tìm những chi tiết thể hiện niềm vui khi gặp lại nhau của Chi và Sơn.</b><br>– <b>Sơn đã có những trải nghiệm gì trong mùa hè?</b>',
      model: '<b>Đáp án của trường:</b> Niềm vui khi gặp lại: Sơn giơ chiếc diều rất xinh, vẫy rối rít; Chi mừng rỡ chạy ra. · Trải nghiệm mùa hè của Sơn: theo ông bà đi trồng rau, câu cá; cùng bạn thả diều, nằm trên bãi cỏ ngắm trời…<br><b>Các phiếu khác của trường:</b> Đề 2 “Mùa hè bất tận” · Đề 3 “Trường em” · Đề 4 “Thư viện” · Đề 5 “Người bạn trong nhà”.' + TV3CK4_DOC },

    { sec: TV3CK4_S2, name: 'Câu 1', pts: 0.25, read: TV3CK4_B_R1,
      text: 'Chợ nổi Cà Mau họp trong khoảng thời gian nào?',
      opts: o3('Hoàng hôn buông xuống.', 'Bình minh lên.', 'Buổi tối.'), ans: 'B',
      why: 'Bài viết: “Chợ họp lúc bình minh lên đẹp đẽ, tinh khiết, trong ngần.”' },
    { sec: TV3CK4_S2, name: 'Câu 2', pts: 0.25, read: TV3CK4_B_R1,
      text: 'Chủ ghe làm gì vào sáng sớm?',
      opts: o3('Ăn sáng để chuẩn bị đi bán hàng.', 'Tất bật bày biện hàng hóa tươi tắn và tinh tươm.', 'Tất bật bày biện hàng hóa gọn ghẽ, tươi tắn và tinh tươm.'), ans: 'C',
      why: 'Chép đúng câu trong bài: “Chủ ghe tất bật bày biện hàng hóa gọn ghẽ, tươi tắn và tinh tươm.” Ý B thiếu “gọn ghẽ”.' },
    { sec: TV3CK4_S2, name: 'Câu 3', pts: 0.25, read: TV3CK4_B_R1,
      text: 'Chợ nổi Cà Mau tập trung bán gì?',
      opts: o3('Buôn bán rau, trái miệt vườn.', 'Quần áo, đồ gia dụng.', 'Hoa, trái miệt vườn.'), ans: 'A',
      why: 'Bài viết: “Chợ nổi Cà Mau chỉ tập trung bán buôn rau, trái miệt vườn.”' },
    { sec: TV3CK4_S2, name: 'Câu 4', pts: 0.25, read: TV3CK4_B_R1,
      text: 'Chùm chôm chôm được tác giả miêu tả như thế nào?',
      opts: o3('Rất ngon.', 'Màu đỏ chót.', 'Màu đỏ au au.'), ans: 'C',
      why: 'Bài viết: “…đỏ au au của chùm chôm chôm”. (Hướng dẫn chấm của trường in nhầm đáp án B — đã sửa thành C.)' },
    { sec: TV3CK4_S2, name: 'Câu 5', pts: 0.25, read: TV3CK4_B_R1,
      text: 'Chợ nổi được họp ở đâu?',
      opts: o3('Trên đất liền.', 'Trên sông.', 'Trên thuyền.'), ans: 'C', also: ['B'],
      why: 'Chợ nổi là chợ họp ngay trên những chiếc ghe (thuyền) đậu dập dờn giữa sông: người bán, người mua “trùng trình trên sóng nước”, hàng hoá bày bán trên ghe. Đáp án của trường là C (trên thuyền). Ý B “Trên sông” cũng đúng (chợ nổi họp trên mặt sông, hàng bày bán trên thuyền) nên chọn B cũng được tính điểm.' },
    { sec: TV3CK4_S2, name: 'Câu 6', pts: 0.5, type: 'write', lines: 2, read: TV3CK4_B_R1,
      text: 'Chợ nổi gợi cho tác giả cảm giác điều gì?',
      model: 'Chợ nổi gợi cho tác giả cảm giác như gặp được những khu vườn của miệt sông Tiền, sông Hậu, như nhìn thấy những rẫy khóm, rẫy mía miên man dọc triền sông Trẹm quê mình.' },
    { sec: TV3CK4_S2, name: 'Câu 7a', pts: 0.25, type: 'type',
      text: 'Tìm và viết lại <b>từ chỉ đặc điểm</b> trong câu văn sau:<br><i>Cáo già trông thấy hoảng quá, buông ngay Gà con để chạy thoát thân.</i>',
      ans: 'hoảng', alts: ['hoảng quá', 'già, hoảng', 'hoảng, già', 'già hoảng', 'hoảng già', 'già và hoảng', 'hoảng và già'],
      why: '“Hoảng” cho biết cáo già <i>như thế nào</i> (trạng thái, đặc điểm) → từ chỉ đặc điểm (đáp án của trường). Nếu con ghi thêm “già” (cáo <i>già</i> — tả tuổi của cáo) cũng chấp nhận.' },
    { sec: TV3CK4_S2, name: 'Câu 7b', pts: 0.25, type: 'write', lines: 1,
      text: 'Tìm và viết lại các <b>từ chỉ hoạt động</b> trong câu văn: <i>Cáo già trông thấy hoảng quá, buông ngay Gà con để chạy thoát thân.</i>',
      model: 'Từ chỉ hoạt động: <b>trông (thấy), buông, chạy</b> (ghi “chạy thoát” cũng được).<br>Viết đúng từ 2 từ trở lên trong số này và không lẫn từ chỉ sự vật (cáo, Gà con) hay từ chỉ đặc điểm (hoảng): đủ điểm. (Hướng dẫn chấm của trường bỏ trống ý này — đáp án tự giải.)' },
    { sec: TV3CK4_S2, name: 'Câu 8', pts: 0.25, type: 'type',
      text: 'Viết lại những từ ngữ chỉ <b>sự vật được so sánh</b> trong câu thơ dưới đây (đề gốc: gạch dưới):<br><i>Trẻ em như búp trên cành<br>Biết ăn, biết ngủ, biết học hành là ngoan.</i> (Hồ Chí Minh)',
      ans: 'trẻ em, búp trên cành', alts: ['trẻ em búp trên cành', 'trẻ em và búp trên cành', 'trẻ em, búp', 'trẻ em và búp', 'trẻ em - búp trên cành'],
      why: '<b>Trẻ em</b> được so sánh với <b>búp trên cành</b>, từ so sánh là “như”.' },
    { sec: TV3CK4_S2, name: 'Câu 9', pts: 0.5, type: 'write', lines: 2,
      text: 'Đặt một câu cầu khiến để mượn bạn một quyển sách.',
      model: 'Ví dụ: <i>Lan ơi, cậu cho mình mượn quyển sách Toán nhé!</i> / <i>Bạn cho tớ mượn quyển truyện này đi!</i><br>Thiếu dấu câu cuối câu hoặc không viết hoa chữ cái đầu câu: mỗi lỗi trừ một nửa số điểm của câu. (HD chấm của trường ghi nhầm thành “đặt câu có hình ảnh so sánh” — chấm theo đúng yêu cầu của đề.)' },

    { sec: TV3CK4_S3, name: 'Nghe – viết', pts: 2.5, type: 'write', lines: 7,
      text: 'Nghe – viết: <b>Sông nước Cà Mau</b> (viết tựa bài và đoạn từ “Càng đổ dần…” đến “…hơi gió muối.”, khoảng 15 phút).',
      model: '<b>Sông nước Cà Mau</b><br>Càng đổ dần về hướng mũi Cà Mau thì sông ngòi, kênh rạch chi chít như mạng nhện. Trên thì trời xanh, dưới thì nước xanh, chung quanh mình cũng chỉ toàn một sắc xanh cây lá. Tiếng rì rào bất tận của những khu rừng xanh bốn mùa, cùng tiếng sóng rì rào từ biển Đông và vịnh Thái Lan ngày đêm không ngớt vọng về trong hơi gió muối.<br><i>(Theo Đoàn Giỏi)</i><br><b>Chấm (2,5 điểm — đề gốc 5 điểm):</b> bài không mắc lỗi, chữ rõ ràng, trình bày đúng: đủ điểm · mỗi lỗi chính tả (sai phụ âm đầu, vần, thanh, viết hoa) trừ 0,25 điểm, lỗi lặp lại không trừ · chữ không rõ ràng, sai độ cao, khoảng cách, bài bẩn: trừ 0,5 điểm toàn bài.' },

    { sec: TV3CK4_S4, name: 'Viết đoạn văn', pts: 2.5, type: 'write', lines: 10,
      text: 'Viết đoạn văn từ 7 đến 9 câu nêu tình cảm, cảm xúc trước một cảnh đẹp ở quê hương hoặc nơi em ở.<br>Gợi ý: – Quê hương/nơi em sinh sống ở đâu? – Em yêu nhất cảnh đẹp gì ở quê hương/nơi em sinh sống? – Cảnh đẹp đó có gì đáng nhớ? – Tình cảm của em với cảnh đẹp đó như thế nào?',
      model: '<b>Bài mẫu:</b> Quê ngoại em ở Bến Tre, một vùng quê có nhiều kênh rạch và vườn dừa xanh mát. Cảnh đẹp mà em yêu nhất là con sông nhỏ chảy ngang trước nhà ngoại. Buổi sáng, mặt sông lấp lánh như dát bạc dưới ánh nắng. Hai bên bờ, những hàng dừa nghiêng nghiêng soi bóng xuống dòng nước. Thỉnh thoảng, những chiếc xuồng chở đầy trái cây chậm rãi lướt qua. Chiều chiều, em cùng các anh chị ngồi trên cầu gỗ hóng gió và ngắm hoàng hôn. Mỗi lần ngắm dòng sông, lòng em thấy thật bình yên. Em rất yêu con sông quê ngoại và mong hè nào cũng được về thăm.<br><b>Các ý cần có:</b> giới thiệu cảnh đẹp ở đâu · đặc điểm nổi bật, điều đáng nhớ · tình cảm, cảm xúc của em.<br><b>Chấm (2,5 điểm — đề gốc 5 điểm):</b> đủ nội dung, diễn đạt rõ ràng, mạch lạc, câu đúng ngữ pháp, không mắc lỗi chính tả, trình bày sạch: 2,25–2,5 · đủ ý nhưng còn 1–2 chỗ chưa hợp lí: 1,75–2 · mức trung bình: 1,25–1,5 · nhiều thiếu sót: 0,75–1 · dở dang, lạc đề: 0,25–0,5.' },
  ],
},

/* ═══════════ 3918 — TH TỨ MINH (TP HẢI DƯƠNG, HẢI DƯƠNG) 2022–2023 · CÁNH DIỀU ═══════════ */
{
  id: 3918, title: 'CK2 · TH Tứ Minh (Hải Dương) 2022–2023', time: 70,
  sem: 2, book: 'Cánh diều',
  src: 'https://tailieu.vn/doc/de-thi-hoc-ki-2-tieng-viet-lop-3-co-dap-an-2746884.html',
  questions: [
    { sec: TV3CK4_S1, name: 'Đọc thành tiếng', pts: 2, type: 'write', lines: 0, read: TV3CK4_C_R0,
      text: 'Con đọc to đoạn 1, đoạn 2 bài “Chợ nổi Cà Mau” (phiếu 1 của trường), sau đó trả lời câu hỏi: <b>Chợ nổi Cà Mau họp vào lúc nào, ở đâu?</b>',
      model: '<b>Đáp án của trường:</b> Chợ nổi Cà Mau họp vào lúc bình minh lên, ở trên ghe, trên sông nước.<br><b>Các phiếu khác của trường:</b> Bên ô cửa đá — khổ 1, 2, 3 (tr.49) · Hai Bà Trưng — đoạn 3, 4 (tr.70) · Em nghĩ về Trái Đất — khổ 2, 3, 4 (tr.88), TV3 tập hai.' + TV3CK4_DOC },

    { sec: TV3CK4_S2, name: 'Câu 1', pts: 0.25, read: TV3CK4_C_R1,
      text: 'Khi ngước nhìn lên trời, tác giả thấy bầu trời như thế nào?',
      opts: o4('Xanh thẳm không gợn mây, chi chít sao.', 'Xanh thẳm và phủ đầy mây mù.', 'Đen kịt và không một bóng sao.', 'Đen kịt, chi chít những vì sao.'), ans: 'A',
      why: 'Câu đầu bài: “bầu trời xanh thẳm không một gợn mây, chi chít những vì sao”.' },
    { sec: TV3CK4_S2, name: 'Câu 2', pts: 0.25, read: TV3CK4_C_R1,
      text: 'Quê nội của tác giả khác xưa như thế nào?',
      opts: o4('Mọc lên thưa thớt vài căn nhà hai tầng, ba tầng.', 'Vẫn còn dấu vết ngày xưa, lũy tre xanh vẫn còn nguyên đó.', 'Những dãy nhà hai tầng, ba tầng san sát nhau mọc lên như nấm.', 'Quê nội của tác giả không hề thay đổi, vẫn y như xưa.'), ans: 'C',
      why: 'Bài viết: “Những dãy nhà hai tầng, ba tầng san sát nhau mọc lên như nấm.”' },
    { sec: TV3CK4_S2, name: 'Câu 3', pts: 0.25, read: TV3CK4_C_R1,
      text: 'Bài tập làm văn của bạn nhỏ xuất hiện những sự vật nào?',
      opts: o4('Trăng treo lơ lửng trên đầu ngọn tre in đậm lên nền trời.', 'Những dãy nhà hai tầng, ba tầng san sát nhau mọc lên như nấm.', 'Mái nhà và khu vườn rau xanh tốt của bà.', 'Lũy tre xanh mát rượi và ánh trăng rằm dịu ngọt.'), ans: 'D',
      why: 'Bài viết: “Tôi viết về quê hương tôi với lũy tre xanh mát rượi và ánh trăng rằm dịu ngọt.”' },
    { sec: TV3CK4_S2, name: 'Câu 4', pts: 0.25, read: TV3CK4_C_R1,
      text: 'Câu: “Trăng ở quê đẹp thật bà ạ!” thuộc kiểu câu nào?',
      opts: o4('Câu kể.', 'Câu cảm.', 'Câu khiến.', 'Câu hỏi.'), ans: 'B',
      why: 'Câu bộc lộ cảm xúc (khen trăng đẹp) với từ “thật”, cuối câu có dấu chấm than → câu cảm.' },
    { sec: TV3CK4_S2, name: 'Câu 5a', pts: 0.25, type: 'write', lines: 1, read: TV3CK4_C_R1,
      text: 'Nêu tác dụng của dấu hai chấm trong câu: <i>Lúc ấy, tôi bỗng nắm chặt tay bà và thốt lên: “Bà ơi! Trăng ở quê đẹp thật bà ạ!”</i>',
      model: 'Dấu hai chấm dùng để <b>báo hiệu (đánh dấu) lời nói trực tiếp của nhân vật</b>.' },
    { sec: TV3CK4_S2, name: 'Câu 5b', pts: 0.25, type: 'write', lines: 1, read: TV3CK4_C_R1,
      text: 'Nêu tác dụng của dấu hai chấm trong câu: <i>Phải rồi, tôi bỗng hiểu ra rằng: chính bà đã làm xanh mãi ước mơ của tôi.</i>',
      model: 'Dấu hai chấm dùng để <b>báo hiệu phần giải thích</b> (điều bạn nhỏ hiểu ra) ở phía sau.' },
    { sec: TV3CK4_S2, name: 'Câu 6', pts: 0.5, type: 'write', lines: 2, read: TV3CK4_C_R1,
      text: 'Câu cuối cùng của bài đọc muốn nói lên điều gì?<br><i>Phải rồi, tôi bỗng hiểu ra rằng: chính bà đã làm xanh mãi ước mơ của tôi.</i>',
      model: 'Gợi ý: Câu văn nói lên tình cảm sâu nặng của bạn nhỏ dành cho bà: kí ức về bà và quê hương luôn in đậm trong tâm trí bạn, chính tình yêu thương của bà đã nuôi dưỡng ước mơ, giúp bạn viết nên bài văn cảm động.' },
    { sec: TV3CK4_S2, name: 'Câu 7', pts: 0.25, type: 'write', lines: 2,
      text: 'Cho đoạn thơ sau, em hãy điền từ thích hợp vào bảng:<br><i>Cây cau cao mãi<br>Tàu vươn giữa trời<br>Như tay xòe rộng<br>Hứng làn mưa rơi.</i><br><table><tr><th>Sự vật 1</th><th>Đặc điểm</th><th>Từ so sánh</th><th>Sự vật 2</th></tr><tr><td>…………</td><td>…………</td><td>…………</td><td>…………</td></tr></table>',
      model: '<table><tr><th>Sự vật 1</th><th>Đặc điểm</th><th>Từ so sánh</th><th>Sự vật 2</th></tr><tr><td>tàu (lá) cau</td><td>vươn, xòe rộng</td><td>như</td><td>tay</td></tr></table>(Theo HD chấm của trường: Tàu (cau) – vươn, xòe rộng – như – tay. Chấp nhận ghi “vươn giữa trời” ở cột đặc điểm, “tay xòe rộng” ở cột sự vật 2.) Mỗi ô đúng được 1/4 số điểm của câu.' },
    { sec: TV3CK4_S2, name: 'Câu 8', pts: 0.25, type: 'write', lines: 2,
      text: 'Đặt câu hỏi cho bộ phận in đậm trong câu sau:<br><i><b>Bằng tình cảm với quê hương</b>, bạn nhỏ đã viết bài tập làm văn tả phong cảnh quê hương vô cùng xúc động.</i>',
      model: '<i>Bạn nhỏ đã viết bài tập làm văn tả phong cảnh quê hương vô cùng xúc động bằng gì?</i> (hoặc: <i>Bằng gì, bạn nhỏ đã viết bài tập làm văn tả phong cảnh quê hương vô cùng xúc động?</i>) — cuối câu phải có dấu chấm hỏi.' },
    { sec: TV3CK4_S2, name: 'Câu 9', pts: 0.25,
      text: 'Theo em, những từ ngữ nào chỉ sự vật có ở nông thôn?',
      opts: o3('lũy tre, con đò, đường phố, đàn trâu, cánh đồng.', 'nhà hát, lũy tre, con đò, đàn trâu, cánh đồng.', 'lũy tre, con đò, đàn trâu, cánh đồng.'), ans: 'C',
      why: '“Đường phố” (ý A) và “nhà hát” (ý B) là sự vật ở thành phố; chỉ ý C toàn sự vật ở nông thôn.' },
    { sec: TV3CK4_S2, name: 'Câu 10', pts: 0.25, type: 'write', lines: 2,
      text: 'Em hãy đặt một câu kể, sau đó chuyển câu đó thành câu khiến.<br>Câu kể: …………… → Câu khiến: ……………',
      model: 'Ví dụ: Câu kể: <i>Lan quét dọn nhà cửa.</i> → Câu khiến: <i>Lan hãy quét dọn nhà cửa đi!</i><br>Đặt đúng câu kể: 1/2 số điểm; chuyển đúng thành câu khiến (có từ hãy/đi/nào…, cuối câu có dấu chấm than hoặc dấu chấm): 1/2 số điểm.' },

    { sec: TV3CK4_S3, name: 'Nghe – viết', pts: 2, type: 'write', lines: 7,
      text: 'Nghe – viết: <b>Bầu trời ngoài cửa sổ</b> (cả đoạn, khoảng 15 phút). Bố mẹ đọc chậm từng cụm từ cho con viết cả tên bài.',
      model: '<b>Bầu trời ngoài cửa sổ</b><br>Buổi sáng, ánh nắng dịu dàng, ngọt màu mật ong từ bầu trời ngoài cửa sổ rọi vào nhà, in hình hoa lá trên nền gạch. Còn về đêm, trăng khi thì như chiếc thuyền vàng trôi trong mây, khi thì như chiếc đèn lồng thả ánh sáng xuống đầy sân. Hà thích ngồi bên cửa sổ nghe bà kể chuyện cổ tích: “Ngày xửa ngày xưa…”.<br><i>(Theo Nguyễn Quỳnh)</i>' + TV3CK4_CT },

    { sec: TV3CK4_S4, name: 'Tập làm văn', pts: 3, type: 'write', lines: 10,
      text: 'HS chọn một trong hai đề sau:<br><b>Đề 1:</b> Viết một đoạn văn (khoảng 8 – 10 câu) nêu suy nghĩ của em về việc giữ sạch nguồn nước (ao hoặc hồ, sông, suối, biển,…).<br>Gợi ý: – Hằng ngày, em dùng nước làm gì? – Vì sao phải giữ sạch nguồn nước? – Em cần làm gì để giữ sạch nguồn nước?<br><b>Đề 2:</b> Viết một đoạn văn (khoảng 8 – 10 câu) nêu suy nghĩ của em về việc tiết kiệm nước.<br>Gợi ý: – Hằng ngày, em dùng nước làm gì? – Vì sao phải tiết kiệm nước? – Em cần làm gì để tiết kiệm nước?',
      model: '<b>Bài mẫu (Đề 1):</b> Nước rất cần thiết cho cuộc sống của con người. Hằng ngày, em dùng nước để uống, đánh răng, rửa mặt, tắm giặt và tưới cây. Gần nhà em có một cái ao nhỏ, trước kia nước trong xanh, cá bơi lội tung tăng. Nhưng có người vứt rác và túi ni lông xuống ao nên nước bị bẩn, bốc mùi khó chịu. Em nghĩ nguồn nước bị ô nhiễm sẽ làm cá chết, con người dễ mắc bệnh. Vì vậy, chúng ta phải giữ sạch nguồn nước. Em luôn bỏ rác đúng nơi quy định và nhắc mọi người không xả rác xuống ao hồ, sông suối. Em sẽ cùng các bạn tham gia nhặt rác ở bờ ao vào mỗi dịp cuối tuần. Giữ sạch nguồn nước là bảo vệ sức khoẻ của chính chúng ta.<br><b>Gợi ý Đề 2:</b> nêu các việc dùng nước hằng ngày · nước sạch không phải vô tận, nhiều nơi thiếu nước · khoá vòi khi đánh răng, dùng nước vo gạo tưới cây, báo người lớn sửa vòi rò rỉ… · lời nhắn mọi người cùng tiết kiệm.' + TV3CK4_TLV },
  ],
},

/* ═══════════ 3919 — TH LÊ VĂN TÁM (TP KON TUM, KON TUM) 2023–2024 · CÁNH DIỀU ═══════════ */
{
  id: 3919, title: 'CK2 · TH Lê Văn Tám (Kon Tum) 2023–2024', time: 85,
  sem: 2, book: 'Cánh diều',
  src: 'https://tailieu.vn/doc/de-thi-hoc-ki-2-tieng-viet-lop-3-co-dap-an-2824377.html',
  questions: [
    { sec: TV3CK4_S1, name: 'Đọc thành tiếng', pts: 2, type: 'write', lines: 0, read: TV3CK4_D_R0,
      text: 'Con đọc thuộc hoặc đọc to cả bài thơ “Chú hải quân” (phiếu Đề 1 của trường), sau đó trả lời câu hỏi: <b>Tìm những hình ảnh đẹp của chú hải quân đứng gác.</b>',
      model: '<b>Đáp án của trường:</b> Chú hải quân vững vàng trên đảo, bồng súng gác biển trời, chú mỉm cười rất tươi, hải âu vờn quanh chú, các chú vẫn hiên ngang (dù nắng mưa, bão tố).<br><b>Các phiếu khác của trường</b> (TV3 tập 2): Hai Bà Trưng (tr.69) · Trận đánh trên không (tr.72) · Ở lại với chiến khu (tr.76) · Một mái nhà chung (tr.82) · Chuyện của ông Biển (tr.85) · Em nghĩ về Trái Đất (tr.88) · Những bậc đá chạm mây (tr.91) · Cu-ba tươi đẹp (tr.95) · Gặp gỡ ở Lúc-xăm-bua (tr.99).' + TV3CK4_DOC },

    { sec: TV3CK4_S2, name: 'Câu 1', pts: 0.25, read: TV3CK4_D_R1,
      text: 'Bài văn trên có mấy đoạn?',
      opts: o3('Một đoạn', 'Hai đoạn', 'Ba đoạn'), ans: 'C',
      why: 'Bài có 3 đoạn: đoạn 1 “Giữa những ngôi nhà nhỏ…”, đoạn 2 “Nhiều người còn nhớ…”, đoạn 3 “Ngoài Mỹ Sơn, Hội An…”. Mỗi đoạn bắt đầu bằng chữ viết hoa lùi vào đầu dòng.' },
    { sec: TV3CK4_S2, name: 'Câu 2', pts: 0.25, read: TV3CK4_D_R1,
      text: 'Ông Ka-dích là người nước nào?',
      opts: o3('Pháp', 'Hà Lan', 'Ba Lan'), ans: 'C',
      why: 'Bài viết: “Từ đất nước Ba Lan xa xôi, ông đã đến Việt Nam…”.' },
    { sec: TV3CK4_S2, name: 'Câu 3', pts: 0.25, read: TV3CK4_D_R1,
      text: 'Bức tượng ông Ka-dích thường được những ai dâng hoa và thắp hương?',
      opts: o3('Người nhập cư', 'Người dân và du khách', 'Những người tu hành'), ans: 'B',
      why: 'Bài viết: “…có một bức tượng được người dân và du khách thường xuyên đến dâng hoa và hương.”' },
    { sec: TV3CK4_S2, name: 'Câu 4', pts: 0.25, read: TV3CK4_D_R1,
      text: 'Tinh thần làm việc của ông Ka-dích khi tham gia trùng tu khu Thánh Địa Mỹ Sơn như thế nào?',
      opts: o3('Ông làm việc say mê, bất chấp mùa hè nóng nực.', 'Ông ngại khó khăn, gian khổ.', 'Ông mộc mạc, giản dị.'), ans: 'A',
      why: 'Bài viết: “Ông làm việc say mê, bất chấp mùa hè nóng nực, côn trùng rất nhiều, bom mìn…”. Ý C nói về cách sống chứ không phải tinh thần làm việc.' },
    { sec: TV3CK4_S2, name: 'Câu 5', pts: 0.25, read: TV3CK4_D_R1,
      text: 'Ngoài Mỹ Sơn, Hội An, ông còn đóng góp lớn cho việc trùng tu di tích nào?',
      opts: o3('Hoàng thành Thăng Long', 'Di tích Hoàng thành Huế', 'Nhà tù Hỏa Lò'), ans: 'B',
      why: 'Bài viết: “Ngoài Mỹ Sơn, Hội An, Ka-dích còn có những đóng góp lớn trong việc trùng tu di tích Hoàng thành Huế.”' },
    { sec: TV3CK4_S2, name: 'Câu 6', pts: 0.5, type: 'write', lines: 2, read: TV3CK4_D_R1,
      text: 'Em nêu nội dung chính của bài “Người hồi sinh di tích”.',
      model: 'Gợi ý: Bài đọc ca ngợi kiến trúc sư người Ba Lan Ka-dích đã say mê, cống hiến hết mình (suốt 17 năm) để trùng tu, hồi sinh các di sản văn hoá Việt Nam như Hội An, Mỹ Sơn, Hoàng thành Huế và giới thiệu chúng với thế giới; ông được người Việt Nam biết ơn, kính trọng.' },
    { sec: TV3CK4_S2, name: 'Câu 7a', pts: 0.125, type: 'type',
      text: 'Điền từ có nghĩa trái ngược với từ in đậm để hoàn thành câu: <i><b>Trên</b> kính ………… nhường.</i>',
      ans: 'dưới', alts: ['trên kính dưới nhường'],
      why: 'Trái nghĩa với “trên” là “dưới”: <i>Trên kính dưới nhường</i> (người trên kính trọng, người dưới nhường nhịn).' },
    { sec: TV3CK4_S2, name: 'Câu 7b', pts: 0.125, type: 'type',
      text: 'Điền từ có nghĩa trái ngược với từ in đậm để hoàn thành câu: <i>Tuổi ………… chí <b>lớn</b>.</i>',
      ans: 'nhỏ', alts: ['bé', 'tuổi nhỏ chí lớn'],
      why: 'Trái nghĩa với “lớn” là “nhỏ”: <i>Tuổi nhỏ chí lớn</i>.' },
    { sec: TV3CK4_S2, name: 'Câu 8', pts: 0.5, type: 'write', lines: 2,
      text: 'Chuyển câu “Các bạn đến thăm phố cổ Hội An.” thành một câu khiến.',
      model: 'Ví dụ: <i>Các bạn hãy đến thăm phố cổ Hội An đi!</i> / <i>Các bạn đến thăm phố cổ Hội An đi!</i> / <i>Mời các bạn đến thăm phố cổ Hội An!</i><br>Có từ ngữ cầu khiến (hãy, đi, mời, nào…) và dấu câu cuối câu đúng: đủ điểm.' },
    { sec: TV3CK4_S2, name: 'Câu 9', pts: 0.5, type: 'write', lines: 2,
      text: 'Đặt một câu có hình ảnh so sánh để tả một sự vật.',
      model: 'Ví dụ: <i>Mặt trăng tròn vành vạnh như chiếc mâm bạc.</i> / <i>Cây bàng xoè tán rộng như chiếc ô khổng lồ.</i><br>Câu có đủ sự vật 1 – từ so sánh – sự vật 2, viết hoa đầu câu, có dấu chấm cuối câu.' },

    { sec: TV3CK4_S3, name: 'Nghe – viết', pts: 2, type: 'write', lines: 7,
      text: 'Nghe – viết: <b>Rừng xuân</b> (cả đoạn, khoảng 15 – 20 phút). Bố mẹ viết đầu bài cho con, rồi đọc chậm từng cụm từ.',
      model: '<b>Rừng xuân</b><br>Trời xuân chỉ hơi lạnh, vừa đủ để giữ một vệt sương mỏng như chiếc khăn voan vắt trên sườn đồi. Rừng hôm nay như một ngày hội của màu xanh với nhiều sắc độ khác nhau. Nhưng giữa đám lá xanh vẫn rớt lại những đốm lá già đỏ như hồng ngọc. Ở phía xa, những chùm hoa chói chang như những ngọn lửa thắp sáng một vùng.<br><i>(Theo Ngô Quân Miện)</i>' + TV3CK4_CT },

    { sec: TV3CK4_S4, name: 'Tập làm văn', pts: 3, type: 'write', lines: 10,
      text: 'Viết đoạn văn ngắn (8 – 10 câu) nêu suy nghĩ của em về việc tiết kiệm nước sạch.<br>Gợi ý: – Hằng ngày, em dùng nước để làm gì? – Trung bình, mỗi người cần bao nhiêu nước mỗi ngày? – Vì sao phải tiết kiệm nước? – Em cần làm gì để tiết kiệm nước?',
      model: '<b>Bài mẫu:</b> Nước sạch vô cùng cần thiết đối với cuộc sống của mỗi người. Hằng ngày, em dùng nước để uống, nấu ăn, đánh răng, rửa mặt và tắm giặt. Mỗi người cần rất nhiều nước sạch mỗi ngày, trong đó riêng nước uống cũng phải khoảng hai lít. Thế nhưng nước sạch không phải vô tận, ở nhiều nơi người dân vẫn đang thiếu nước để dùng. Vì vậy, chúng ta phải biết tiết kiệm nước. Khi đánh răng, em luôn khoá vòi và dùng cốc để hứng nước. Em lấy nước vo gạo để tưới cây và nhắc bố mẹ sửa ngay vòi nước bị rò rỉ. Em cũng nhắc các bạn khoá vòi sau khi rửa tay ở trường. Tiết kiệm nước sạch là góp phần bảo vệ cuộc sống của chúng ta.<br><b>Các ý cần có:</b> việc dùng nước hằng ngày · nước sạch quý, có hạn · lí do phải tiết kiệm · việc làm cụ thể của em · lời nhắn nhủ.' + TV3CK4_TLV },
  ],
},

/* ═══════════ 3920 — TH 1 THỊ TRẤN MỎ CÀY (MỎ CÀY NAM, BẾN TRE) 2023–2024 · CÁNH DIỀU ═══════════ */
{
  id: 3920, title: 'CK2 · TH 1 Thị trấn Mỏ Cày (Bến Tre) 2023–2024', time: 80,
  sem: 2, book: 'Cánh diều',
  src: 'https://dethilop3.com/de-kiem-tra-cuoi-hoc-ki-ii-mon-tieng-viet-lop-3-nam-hoc-2023-2024-truong-tieu-hoc-1-thi-tran-mo-cay-co-dap-an-1867/',
  questions: [
    { sec: TV3CK4_S1, name: 'Đọc thành tiếng', pts: 2, type: 'write', lines: 0, read: TV3CK4_E_R0,
      text: 'Con đọc to đoạn văn “Sông Hương” (phiếu số 1 của trường), sau đó trả lời câu hỏi:<br>– <b>Vì sao dòng sông được đặt tên là sông Hương?</b><br>– <b>Tìm những hình ảnh minh họa về vẻ đẹp của sông Hương.</b>',
      model: '<b>Đáp án của trường:</b> Dòng sông được đặt tên là sông Hương vì dòng nước ở đây thường thoảng lên một mùi hương dìu dịu bởi nguồn sông chảy qua một cánh rừng mọc dày một loại cỏ có tên là thạch xương bồ. · Vẻ đẹp: bao trùm lên cả bức tranh là một màu xanh có nhiều sắc độ, đậm nhạt khác nhau: màu xanh da trời, màu xanh của nước biếc, màu xanh non của những bãi ngô, thảm cỏ…<br><b>Các phiếu khác của trường</b> (Sách Cánh diều, tập 2): Chợ nổi Cà Mau (tr.10) · Sự tích thành Cổ Loa (tr.14) · Hương làng (tr.20) · Những tấm chân tình (tr.35) · Hội đua ghe ngo (tr.51); và Cây gạo, Người đi săn và con vượn. Đọc khoảng 75 – 80 tiếng/phút.' + TV3CK4_DOC },

    { sec: TV3CK4_S2, name: 'Câu 1', pts: 0.25, read: TV3CK4_E_R1,
      text: 'Ngỗng mẹ dẫn đàn ngỗng con đi đâu?',
      opts: o4('Đi kiếm mồi', 'Đi dạo chơi', 'Đi tránh mưa', 'Đi về chuồng'), ans: 'B',
      why: 'Câu đầu bài: “ngỗng mẹ dẫn đàn con vàng ươm của mình đi dạo chơi.”' },
    { sec: TV3CK4_S2, name: 'Câu 2', pts: 0.25, read: TV3CK4_E_R1,
      text: 'Trên cánh đồng cỏ, đàn ngỗng gặp chuyện gì?',
      opts: o4('Một cơn lũ ập đến.', 'Bị kẻ thù tấn công.', 'Gặp một trận mưa đá.', 'Một trận lốc xoáy ập tới.'), ans: 'C',
      why: 'Bài viết: “Những hạt mưa đá to từ trên trời rào rào đổ xuống.”' },
    { sec: TV3CK4_S2, name: 'Câu 3', pts: 0.25, read: TV3CK4_E_R1,
      text: 'Dưới đôi cánh mẹ, đàn ngỗng con cảm thấy thế nào?',
      opts: o4('Yên ổn, ấm áp.', 'Lo lắng.', 'Sợ hãi.', 'Hồi hộp.'), ans: 'A',
      why: 'Bài viết: “Dưới cánh mẹ đàn ngỗng cảm thấy thật yên ổn và ấm áp.”' },
    { sec: TV3CK4_S2, name: 'Câu 4', pts: 0.25, read: TV3CK4_E_R1,
      text: 'Vì sao ngỗng mẹ rất đau đớn nhưng vẫn cảm thấy hạnh phúc?',
      opts: o4('Vì trời đã tạnh mưa, cảnh vật trở lại yên lặng.', 'Vì ngỗng mẹ đã bảo vệ an toàn đàn con của mình.', 'Vì đàn ngỗng con chạy ùa ra bãi cỏ.', 'Tất cả các ý trên đều đúng.'), ans: 'B',
      why: 'Ngỗng mẹ lấy đôi cánh che mưa đá cho con đến rách nát, lông rụng tả tơi; mẹ hạnh phúc vì các con đều an toàn, vui vẻ.' },
    { sec: TV3CK4_S2, name: 'Câu 5', pts: 0.5, type: 'write', lines: 3, read: TV3CK4_E_R1,
      text: 'Khi nhìn thấy đôi cánh mẹ rách nát, nếu em là ngỗng con em sẽ nói gì? Việc làm đó thể hiện điều gì?',
      model: 'Ví dụ: <i>Mẹ ơi, con yêu mẹ lắm! Cảm ơn mẹ đã che chở cho chúng con. Nhìn đôi cánh của mẹ con rất đau lòng.</i> (1/2 số điểm)<br>Việc làm đó thể hiện ngỗng con biết hiếu thảo, biết thương mẹ, quan tâm khi mẹ bị nạn. (1/2 số điểm)' },
    { sec: TV3CK4_S2, name: 'Câu 6', pts: 0.5, type: 'write', lines: 2, read: TV3CK4_E_R1,
      text: 'Câu chuyện trên muốn gửi đến các em thông điệp gì?',
      model: 'Tình mẫu tử có sức mạnh to lớn (1/2 số điểm). Tình cảm ấy thiêng liêng, có thể vượt lên trên mọi thứ; vì vậy chúng ta phải biết yêu quý, kính trọng và vâng lời mẹ (1/2 số điểm).' },
    { sec: TV3CK4_S2, name: 'Câu 7', pts: 0.25, read: TV3CK4_E_R1,
      text: 'Trong các câu sau đây, câu nào là câu khiến?',
      opts: o4('Đàn ngỗng con chạy ùa ra bãi cỏ.', 'Sao cánh mẹ lại rách như thế này?', 'Hãy chạy vào đôi cánh của mẹ đi!', 'Mẹ ơi, con yêu mẹ lắm!'), ans: 'C',
      why: 'Câu C có từ “hãy… đi” dùng để yêu cầu, đề nghị → câu khiến. A là câu kể, B là câu hỏi, D là câu cảm.' },
    { sec: TV3CK4_S2, name: 'Câu 8', pts: 0.25, read: TV3CK4_E_R1,
      text: 'Trong câu: “Một ngày xuân ấm áp, ngỗng mẹ dẫn đàn con vàng ươm của mình đi dạo chơi.”, từ “vàng ươm” là từ:',
      opts: o4('Chỉ đặc điểm.', 'Chỉ hoạt động.', 'Dùng để so sánh.', 'Chỉ trạng thái.'), ans: 'A',
      why: '“Vàng ươm” tả màu sắc của đàn ngỗng con → từ chỉ đặc điểm.' },
    { sec: TV3CK4_S2, name: 'Câu 9', pts: 0.5, type: 'write', lines: 2,
      text: 'Em hãy đặt một câu nói về ngỗng mẹ, trong đó có dùng từ chỉ hoạt động.',
      model: 'Ví dụ: <i>Ngỗng mẹ nâng đôi cánh để đàn con ùa ra bãi cỏ.</i> / <i>Ngỗng mẹ dẫn đàn con đi chơi trên đồng cỏ.</i><br>Câu đúng nhân vật ngỗng mẹ, có từ chỉ hoạt động, đầu câu viết hoa, cuối câu có dấu chấm: đủ điểm. Câu không nói về ngỗng mẹ: không ghi điểm.' },

    { sec: TV3CK4_S3, name: 'Nghe – viết', pts: 2, type: 'write', lines: 7,
      text: 'Nghe – viết: <b>Những đám mây ngũ sắc</b> (cả đoạn, khoảng 65 – 70 chữ, 15 phút).',
      model: '<b>Những đám mây ngũ sắc</b><br>Thời điểm hoàng hôn có những đám mây được nhuộm sắc xà cừ óng ánh điệu đà. Có những đám mây quay quanh mặt trời và tạo ra lỗ hổng để lọt ánh nắng xuống nhìn như một cái “giếng trời” giữa thiên nhiên. Lại có những đám mây màu sẫm có viền ánh sáng chói lọi xung quanh khiến chúng càng nổi bật và sắc nét trên nền trời.' + TV3CK4_CT },

    { sec: TV3CK4_S4, name: 'Viết sáng tạo', pts: 3, type: 'write', lines: 10,
      text: 'Em hãy viết một đoạn văn ngắn (từ 8 đến 10 câu) thuật lại buổi sinh hoạt dưới cờ ở trường em.',
      model: '<b>Bài mẫu:</b> Sáng thứ Hai tuần trước, trường em tổ chức buổi sinh hoạt dưới cờ ở sân trường. Từ sớm, học sinh các lớp đã mặc đồng phục chỉnh tề, xếp hàng ngay ngắn. Đúng bảy giờ, lễ chào cờ bắt đầu, cả trường nghiêm trang hát Quốc ca và Đội ca. Tiếp theo, cô Tổng phụ trách nhận xét tuần qua, tuyên dương những lớp đạt thành tích cao và nhắc nhở các bạn còn đi học muộn. Lớp 3A của em được khen vì giữ lớp học sạch đẹp, cả lớp vỗ tay thật to. Cô cũng phổ biến công việc của tuần mới. Sau đó, trường tổ chức sinh hoạt theo chủ đề “An toàn giao thông” với tiểu phẩm vui nhộn của các anh chị lớp 5. Em rất thích buổi sinh hoạt vì vừa được học thêm nhiều điều bổ ích, vừa thấy tự hào về lớp mình. Em tự nhủ sẽ cố gắng học tốt để lớp tiếp tục được tuyên dương.<br><b>Các ý cần có (theo HD chấm của trường):</b> giới thiệu buổi sinh hoạt, thời gian, địa điểm · các việc diễn ra: chào cờ, hát Quốc ca, Đội ca; tổng kết thi đua, tuyên dương, nhắc nhở, nêu công việc tuần tới; sinh hoạt theo chủ đề · cảm nghĩ của em.' + TV3CK4_TLV },
  ],
},

);
