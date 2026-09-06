// TIẾNG VIỆT — LỚP 5 (GDPT 2018)
// 30 đề × 10 câu = 300 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// Bám chương trình: đọc hiểu (truyện, thơ, văn bản thông tin); từ đồng nghĩa – trái nghĩa;
// từ đồng âm – từ nhiều nghĩa; đại từ – quan hệ từ; câu ghép (các vế và cách nối);
// liên kết câu (lặp – thế – nối); biện pháp so sánh, nhân hoá; dấu câu.

const TV5_R1 = '<b>Những hạt thóc giống</b> <i>(kể lại)</i><br>Nhà vua muốn chọn người nối ngôi. Ngài phát cho mỗi đứa trẻ một hạt thóc giống và hẹn: một năm sau, ai trồng được cây tốt nhất sẽ được chọn. Cậu bé Chôm chăm chỉ gieo hạt, ngày ngày tưới nước, nhưng hạt không nảy mầm. Đến hẹn, mọi người mang những chậu cây tươi tốt đến, chỉ riêng Chôm mang chậu đất trống và thành thật kể mọi chuyện. Nhà vua mỉm cười: “Ta đã luộc chín tất cả hạt giống. Chỉ Chôm là người trung thực.” Và Chôm được chọn nối ngôi.';
const TV5_R2 = '<b>Người gác rừng tí hon</b> <i>(rút gọn)</i><br>Ba của bạn nhỏ làm nghề gác rừng. Một hôm đi tuần, bạn phát hiện dấu chân người lạ và tiếng bàn bạc của mấy kẻ trộm gỗ. Bạn lặng lẽ chạy về, gọi điện báo cho các chú công an. Nhờ vậy, bọn trộm gỗ bị bắt, cánh rừng được giữ bình yên.';
const TV5_R3 = '<b>Hạt gạo làng ta</b> <i>(trích — Trần Đăng Khoa)</i><br>Hạt gạo làng ta<br>Có vị phù sa<br>Của sông Kinh Thầy<br>Có hương sen thơm<br>Trong hồ nước đầy<br>Có lời mẹ hát<br>Ngọt bùi đắng cay...';
const TV5_R4 = '<b>Rừng ngập mặn</b><br>Rừng ngập mặn mọc ở vùng ven biển, nơi có nước mặn và bùn lầy. Cây đước, cây mắm có bộ rễ chằng chịt giúp giữ đất, chắn sóng, chống xói lở bờ biển. Rừng ngập mặn còn là nơi sinh sống của nhiều loài tôm, cua, cá và chim.';
const TV5_R5 = '<b>Người ăn xin</b> <i>(theo Tuốc-ghê-nhép — rút gọn)</i><br>Một người ăn xin già lụ khụ chìa bàn tay gầy guộc ra trước mặt tôi. Tôi lục hết túi nọ đến túi kia nhưng chẳng có lấy một xu. Tôi bèn nắm chặt lấy bàn tay run rẩy của ông và nói: “Xin ông đừng giận cháu, cháu không có gì để cho ông cả.” Ông lão nhìn tôi, đôi môi nở nụ cười: “Cháu ơi, cảm ơn cháu! Như vậy là cháu đã cho lão rồi.” Khi ấy tôi chợt hiểu: cả tôi nữa, tôi cũng vừa nhận được một chút gì đó từ ông.';
const TV5_R6 = '<b>Vịnh Hạ Long</b><br>Vịnh Hạ Long nằm ở tỉnh Quảng Ninh, thuộc vùng Đông Bắc nước ta. Vịnh có hàng nghìn hòn đảo đá lớn nhỏ nhô lên giữa mặt nước xanh biếc, mang những hình dáng kì lạ như hòn Trống Mái, hòn Gà Chọi. Trong lòng các đảo còn có nhiều hang động đẹp với măng đá, nhũ đá lấp lánh. Vịnh Hạ Long đã hai lần được UNESCO công nhận là Di sản thiên nhiên thế giới và là niềm tự hào của người dân Việt Nam.';
const TV5_R7 = '<b>Trăng ơi... từ đâu đến?</b> <i>(trích — Trần Đăng Khoa)</i><br>Trăng ơi... từ đâu đến?<br>Hay từ cánh rừng xa<br>Trăng hồng như quả chín<br>Lửng lơ lên trước nhà.<br>Trăng ơi... từ đâu đến?<br>Hay biển xanh diệu kì<br>Trăng tròn như mắt cá<br>Chẳng bao giờ chớp mi.';
const TV5_R8 = '<b>Chú bé chăn cừu</b> <i>(ngụ ngôn — kể lại)</i><br>Một chú bé chăn cừu thường ra đồng cỏ trông đàn cừu cho làng. Buồn chán, chú nghĩ ra trò đùa: chú kêu toáng lên “Sói! Sói! Cứu tôi với!”. Dân làng bỏ cả việc, vác gậy chạy tới, nhưng chẳng thấy sói đâu, còn chú thì ôm bụng cười. Chú đùa như thế mấy lần. Rồi một hôm, sói đến thật, xông vào cắn đàn cừu. Chú bé sợ hãi kêu cứu, nhưng lần này chẳng còn ai tin nữa. Đàn cừu vì thế bị sói ăn thịt gần hết.';
const TV5_R9 = '<b>Ong mật</b><br>Ong mật là loài côn trùng sống thành đàn rất đông trong tổ. Mỗi đàn có một ong chúa, nhiều ong thợ và ong đực. Ong thợ chăm chỉ bay đi hút mật hoa, lấy phấn về nuôi cả đàn và làm nên những giọt mật ngọt thơm. Khi bay từ hoa này sang hoa khác, ong còn giúp cây thụ phấn, kết trái. Nhờ có ong, nhiều loài cây mới cho nhiều hoa thơm, quả ngọt.';
const TV5_R10 = '<b>Sắc màu em yêu</b> <i>(trích — Phạm Đình Ân)</i><br>Em yêu màu đỏ:<br>Như máu con tim,<br>Lá cờ Tổ quốc,<br>Khăn quàng đội viên.<br>Em yêu màu xanh:<br>Đồng bằng, rừng núi,<br>Biển đầy cá tôm,<br>Bầu trời cao vợi.';
const TV5_R11 = '<b>Sự tích cây vú sữa</b> <i>(rút gọn)</i><br>Ngày xưa có một cậu bé ham chơi, bị mẹ mắng liền bỏ nhà ra đi. Cậu la cà khắp nơi, đói khát mới nhớ đến mẹ và tìm đường về. Về đến nhà, cậu chẳng thấy mẹ đâu, chỉ thấy trong vườn có một cây lạ. Cậu ôm lấy cây mà khóc. Bỗng cây xoà cành ôm cậu, một quả to rơi vào tay, nứt ra dòng sữa trắng ngọt thơm như sữa mẹ. Cậu hiểu ra: cây chính là mẹ hiền đã hoá thành. Người ta gọi cây ấy là cây vú sữa.';

const TV5_EXAMS = [

/* ═══════════ ĐỀ 1 — ĐỌC HIỂU TRUYỆN ═══════════ */
{
  id: 6801, title: 'Đề 1 · Đọc hiểu truyện', time: 20,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV5_R1, text: 'Nhà vua phát cho mỗi đứa trẻ cái gì?', opts: o4('Một hạt thóc giống', 'Một túi vàng', 'Một chậu cây', 'Một cuốn sách'), ans: 'A', why: 'Bài đọc: "Ngài phát cho mỗi đứa trẻ một hạt thóc giống."' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV5_R1, text: 'Điều kiện để được chọn nối ngôi là gì?', opts: o4('Trồng được cây tốt nhất', 'Giàu có nhất', 'Khoẻ mạnh nhất', 'Học giỏi nhất'), ans: 'A', why: 'Bài đọc: "ai trồng được cây tốt nhất sẽ được chọn."' },
    { sec: 'Suy luận', name: 'Câu 3', pts: 1, read: TV5_R1, text: 'Vì sao hạt thóc của Chôm không nảy mầm?', opts: o4('Vì tất cả hạt giống đã bị luộc chín', 'Vì Chôm lười tưới nước', 'Vì đất xấu', 'Vì trời không mưa'), ans: 'A', why: 'Nhà vua nói: "Ta đã luộc chín tất cả hạt giống." nên không hạt nào mọc được.' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV5_R1, text: 'Khi hạt không nảy mầm, Chôm đã làm gì?', opts: o4('Mang chậu đất trống đến và thành thật kể mọi chuyện', 'Mua một cây khác thay vào', 'Trốn không đến', 'Nói dối là cây đã chết'), ans: 'A', why: 'Bài đọc: Chôm "mang chậu đất trống và thành thật kể mọi chuyện".' },
    { sec: 'Ý nghĩa', name: 'Câu 5', pts: 1, read: TV5_R1, text: 'Vì sao nhà vua chọn Chôm nối ngôi?', opts: o4('Vì Chôm trung thực', 'Vì Chôm giàu nhất', 'Vì Chôm khoẻ nhất', 'Vì Chôm là con vua'), ans: 'A', why: 'Nhà vua khen: "Chỉ Chôm là người trung thực." — trung thực là điều đáng quý nhất.' },
    { sec: 'Đọc hiểu', name: 'Câu 6', pts: 1, read: TV5_R2, text: 'Ba của bạn nhỏ làm nghề gì?', opts: o4('Gác rừng', 'Đánh cá', 'Dạy học', 'Lái xe'), ans: 'A', why: 'Bài đọc: "Ba của bạn nhỏ làm nghề gác rừng."' },
    { sec: 'Đọc hiểu', name: 'Câu 7', pts: 1, read: TV5_R2, text: 'Bạn nhỏ đã phát hiện điều gì trong rừng?', opts: o4('Dấu chân lạ và bọn trộm gỗ', 'Một con hổ', 'Một kho báu', 'Một đám cháy'), ans: 'A', why: 'Bài đọc: bạn "phát hiện dấu chân người lạ và tiếng bàn bạc của mấy kẻ trộm gỗ".' },
    { sec: 'Đọc hiểu', name: 'Câu 8', pts: 1, read: TV5_R2, text: 'Bạn nhỏ đã làm gì sau khi phát hiện?', opts: o4('Chạy về gọi điện báo công an', 'Tự mình bắt bọn trộm', 'Bỏ chạy về nhà trốn', 'Mặc kệ, không làm gì'), ans: 'A', why: 'Bài đọc: bạn "lặng lẽ chạy về, gọi điện báo cho các chú công an".' },
    { sec: 'Đọc hiểu', name: 'Câu 9', pts: 1, read: TV5_R2, text: 'Kết quả của việc bạn nhỏ báo tin là gì?', opts: o4('Bọn trộm bị bắt, rừng được bình yên', 'Bọn trộm chạy thoát', 'Rừng bị chặt hết', 'Không có gì xảy ra'), ans: 'A', why: 'Bài đọc: "bọn trộm gỗ bị bắt, cánh rừng được giữ bình yên."' },
    { sec: 'Ý nghĩa', name: 'Câu 10', pts: 1, read: TV5_R2, text: 'Bạn nhỏ trong bài là người như thế nào?', opts: o4('Dũng cảm, thông minh, yêu rừng', 'Nhút nhát, sợ hãi', 'Lười biếng', 'Ích kỉ'), ans: 'A', why: 'Bạn bình tĩnh báo công an, góp phần giữ rừng — dũng cảm, thông minh và yêu rừng.' },
  ],
},

/* ═══════════ ĐỀ 2 — ĐỌC HIỂU THƠ VÀ VĂN BẢN ═══════════ */
{
  id: 6802, title: 'Đề 2 · Đọc hiểu thơ và văn bản', time: 20,
  questions: [
    { sec: 'Đọc thơ', name: 'Câu 1', pts: 1, read: TV5_R3, text: 'Bài thơ nói về sự vật gì?', opts: o4('Hạt gạo', 'Dòng sông', 'Bông sen', 'Cơn mưa'), ans: 'A', why: 'Bài thơ tên "Hạt gạo làng ta", nói về hạt gạo.' },
    { sec: 'Đọc thơ', name: 'Câu 2', pts: 1, read: TV5_R3, text: 'Theo bài thơ, hạt gạo có vị của gì?', opts: o4('Vị phù sa', 'Vị muối', 'Vị chua', 'Vị cay'), ans: 'A', why: 'Bài thơ: "Có vị phù sa / Của sông Kinh Thầy".' },
    { sec: 'Đọc thơ', name: 'Câu 3', pts: 1, read: TV5_R3, text: 'Phù sa trong bài thơ là của con sông nào?', opts: o4('Sông Kinh Thầy', 'Sông Hồng', 'Sông Hương', 'Sông Cửu Long'), ans: 'A', why: 'Bài thơ: "Của sông Kinh Thầy".' },
    { sec: 'Đọc thơ', name: 'Câu 4', pts: 1, read: TV5_R3, text: 'Hạt gạo còn mang hương thơm của loài hoa nào?', opts: o4('Hương sen', 'Hương hồng', 'Hương nhài', 'Hương bưởi'), ans: 'A', why: 'Bài thơ: "Có hương sen thơm / Trong hồ nước đầy".' },
    { sec: 'Ý nghĩa', name: 'Câu 5', pts: 1, read: TV5_R3, text: 'Qua bài thơ, hạt gạo được làm nên từ những gì?', opts: o4('Từ thiên nhiên và công sức, tình cảm của con người', 'Chỉ từ máy móc', 'Từ hoá chất', 'Tự nhiên mà có'), ans: 'A', why: 'Hạt gạo có phù sa, hương sen (thiên nhiên) và "lời mẹ hát", công cấy cày (con người).' },
    { sec: 'Đọc văn bản', name: 'Câu 6', pts: 1, read: TV5_R4, text: 'Rừng ngập mặn mọc ở đâu?', opts: o4('Vùng ven biển', 'Trên núi cao', 'Giữa sa mạc', 'Trong thành phố'), ans: 'A', why: 'Bài đọc: "Rừng ngập mặn mọc ở vùng ven biển".' },
    { sec: 'Đọc văn bản', name: 'Câu 7', pts: 1, read: TV5_R4, text: 'Cây tiêu biểu của rừng ngập mặn là:', opts: o4('Cây đước, cây mắm', 'Cây thông', 'Cây bàng', 'Cây phượng'), ans: 'A', why: 'Bài đọc: "Cây đước, cây mắm có bộ rễ chằng chịt".' },
    { sec: 'Đọc văn bản', name: 'Câu 8', pts: 1, read: TV5_R4, text: 'Bộ rễ chằng chịt của cây rừng ngập mặn có tác dụng gì?', opts: o4('Giữ đất, chắn sóng, chống xói lở', 'Làm cây cao hơn', 'Cho quả ngọt', 'Toả bóng mát'), ans: 'A', why: 'Bài đọc: bộ rễ "giúp giữ đất, chắn sóng, chống xói lở bờ biển".' },
    { sec: 'Đọc văn bản', name: 'Câu 9', pts: 1, read: TV5_R4, text: 'Rừng ngập mặn là nơi sinh sống của loài nào?', opts: o4('Tôm, cua, cá và chim', 'Hổ, báo, voi', 'Lạc đà', 'Gấu trắng'), ans: 'A', why: 'Bài đọc: "nơi sinh sống của nhiều loài tôm, cua, cá và chim".' },
    { sec: 'Suy luận', name: 'Câu 10', pts: 1, read: TV5_R4, text: 'Vì sao cần bảo vệ rừng ngập mặn?', opts: o4('Vì rừng chắn sóng, giữ đất và là nơi ở của nhiều loài', 'Vì rừng vô ích', 'Vì rừng gây hại', 'Vì rừng làm bẩn biển'), ans: 'A', why: 'Rừng ngập mặn chắn sóng, giữ đất và nuôi dưỡng nhiều loài nên rất cần được bảo vệ.' },
  ],
},

/* ═══════════ ĐỀ 3 — TỪ ĐỒNG NGHĨA, TRÁI NGHĨA ═══════════ */
{
  id: 6803, title: 'Đề 3 · Từ đồng nghĩa và trái nghĩa', time: 20,
  questions: [
    { sec: 'Đồng nghĩa', name: 'Câu 1', pts: 1, text: 'Từ đồng nghĩa là những từ như thế nào?', opts: o4('Có nghĩa giống nhau hoặc gần giống nhau', 'Có nghĩa trái ngược nhau', 'Đọc giống nhau, nghĩa khác nhau', 'Không liên quan'), ans: 'A', why: 'Từ đồng nghĩa là những từ có nghĩa giống hoặc gần giống nhau.' },
    { sec: 'Đồng nghĩa', name: 'Câu 2', pts: 1, text: 'Từ đồng nghĩa với "to" là:', opts: o4('lớn', 'nhỏ', 'cao', 'xa'), ans: 'A', why: '"to" và "lớn" có nghĩa gần giống nhau.' },
    { sec: 'Đồng nghĩa', name: 'Câu 3', pts: 1, text: 'Từ đồng nghĩa với "siêng năng" là:', opts: o4('chăm chỉ', 'lười biếng', 'thông minh', 'khoẻ mạnh'), ans: 'A', why: '"siêng năng" đồng nghĩa với "chăm chỉ".' },
    { sec: 'Trái nghĩa', name: 'Câu 4', pts: 1, text: 'Từ trái nghĩa là những từ như thế nào?', opts: o4('Có nghĩa trái ngược nhau', 'Có nghĩa giống nhau', 'Đọc giống nhau', 'Cùng loại từ'), ans: 'A', why: 'Từ trái nghĩa là những từ có nghĩa trái ngược nhau.' },
    { sec: 'Trái nghĩa', name: 'Câu 5', pts: 1, text: 'Từ trái nghĩa với "cao" là:', opts: o4('thấp', 'lớn', 'to', 'rộng'), ans: 'A', why: '"cao" trái nghĩa với "thấp".' },
    { sec: 'Trái nghĩa', name: 'Câu 6', pts: 1, text: 'Từ trái nghĩa với "vui" là:', opts: o4('buồn', 'cười', 'thích', 'khoẻ'), ans: 'A', why: '"vui" trái nghĩa với "buồn".' },
    { sec: 'Nhận biết', name: 'Câu 7', pts: 1, text: 'Cặp nào là cặp từ trái nghĩa?', opts: o4('nhanh – chậm', 'to – lớn', 'đẹp – xinh', 'hiền – lành'), ans: 'A', why: '"nhanh" và "chậm" có nghĩa trái ngược nên là cặp từ trái nghĩa.' },
    { sec: 'Nhận biết', name: 'Câu 8', pts: 1, text: 'Cặp nào là cặp từ đồng nghĩa?', opts: o4('chăm chỉ – siêng năng', 'trắng – đen', 'thắng – thua', 'ngày – đêm'), ans: 'A', why: '"chăm chỉ" và "siêng năng" nghĩa gần giống nhau nên là từ đồng nghĩa.' },
    { sec: 'Đồng nghĩa', name: 'Câu 9', pts: 1, text: 'Từ đồng nghĩa với "Tổ quốc" là:', opts: o4('đất nước', 'thành phố', 'làng xóm', 'gia đình'), ans: 'A', why: '"Tổ quốc" đồng nghĩa với "đất nước".' },
    { sec: 'Trái nghĩa', name: 'Câu 10', pts: 1, text: 'Từ trái nghĩa với "chiến tranh" là:', opts: o4('hoà bình', 'xung đột', 'bom đạn', 'quân đội'), ans: 'A', why: '"chiến tranh" trái nghĩa với "hoà bình".' },
  ],
},

/* ═══════════ ĐỀ 4 — TỪ ĐỒNG ÂM, TỪ NHIỀU NGHĨA ═══════════ */
{
  id: 6804, title: 'Đề 4 · Từ đồng âm và từ nhiều nghĩa', time: 20,
  questions: [
    { sec: 'Đồng âm', name: 'Câu 1', pts: 1, text: 'Từ đồng âm là những từ như thế nào?', opts: o4('Phát âm giống nhau nhưng nghĩa khác hẳn nhau', 'Nghĩa giống nhau', 'Nghĩa trái ngược', 'Cùng một nghĩa gốc'), ans: 'A', why: 'Từ đồng âm phát âm (viết) giống nhau nhưng nghĩa khác hẳn nhau.' },
    { sec: 'Đồng âm', name: 'Câu 2', pts: 1, text: '"Đá" trong "hòn đá" và "đá bóng" là hiện tượng gì?', opts: o4('Từ đồng âm', 'Từ nhiều nghĩa', 'Từ đồng nghĩa', 'Từ trái nghĩa'), ans: 'A', why: 'Hai từ "đá" nghĩa khác hẳn nhau (vật cứng / hành động) nên là từ đồng âm.' },
    { sec: 'Nhiều nghĩa', name: 'Câu 3', pts: 1, text: 'Từ nhiều nghĩa là gì?', opts: o4('Một từ có nhiều nghĩa liên quan với nhau', 'Nhiều từ khác nhau', 'Từ có nghĩa trái ngược', 'Từ không có nghĩa'), ans: 'A', why: 'Từ nhiều nghĩa là một từ có nhiều nghĩa có liên quan với nhau.' },
    { sec: 'Nhiều nghĩa', name: 'Câu 4', pts: 1, text: '"Chân" trong "chân bàn", "chân núi", "chân người" là:', opts: o4('Từ nhiều nghĩa', 'Từ đồng âm', 'Từ trái nghĩa', 'Từ đồng nghĩa'), ans: 'A', why: 'Các nghĩa của "chân" đều chỉ phần dưới cùng, có liên quan nhau → từ nhiều nghĩa.' },
    { sec: 'Nhiều nghĩa', name: 'Câu 5', pts: 1, text: '"Mắt" trong "mắt người" và "mắt na, mắt dứa" là:', opts: o4('Từ nhiều nghĩa', 'Từ đồng âm', 'Từ đồng nghĩa', 'Từ trái nghĩa'), ans: 'A', why: '"Mắt" na, mắt dứa giống hình con mắt — nghĩa chuyển có liên quan → từ nhiều nghĩa.' },
    { sec: 'Đồng âm', name: 'Câu 6', pts: 1, text: '"Bàn" trong "cái bàn" và "bàn bạc" là:', opts: o4('Từ đồng âm', 'Từ nhiều nghĩa', 'Từ đồng nghĩa', 'Từ trái nghĩa'), ans: 'A', why: 'Hai từ "bàn" nghĩa khác hẳn nhau (đồ vật / trao đổi) nên là từ đồng âm.' },
    { sec: 'Nhiều nghĩa', name: 'Câu 7', pts: 1, text: '"Mũi" trong "mũi thuyền", "mũi kim", "mũi người" là:', opts: o4('Từ nhiều nghĩa', 'Từ đồng âm', 'Từ đồng nghĩa', 'Từ trái nghĩa'), ans: 'A', why: 'Đều chỉ phần nhọn nhô ra phía trước — nghĩa liên quan nhau → từ nhiều nghĩa.' },
    { sec: 'Đồng âm', name: 'Câu 8', pts: 1, text: '"Cờ" trong "lá cờ" và "chơi cờ" là:', opts: o4('Từ đồng âm', 'Từ nhiều nghĩa', 'Từ đồng nghĩa', 'Từ trái nghĩa'), ans: 'A', why: 'Hai từ "cờ" nghĩa khác hẳn (mảnh vải / trò chơi) nên là từ đồng âm.' },
    { sec: 'Nghĩa gốc', name: 'Câu 9', pts: 1, text: 'Nghĩa gốc của từ "chân" là gì?', opts: o4('Bộ phận cơ thể dùng để đi, đứng', 'Phần dưới của bàn', 'Phần dưới của núi', 'Chân trời'), ans: 'A', why: 'Nghĩa gốc của "chân" là bộ phận cơ thể để đi, đứng; các nghĩa khác là nghĩa chuyển.' },
    { sec: 'Nghĩa chuyển', name: 'Câu 10', pts: 1, text: 'Ví dụ nào dùng từ "ăn" theo nghĩa chuyển?', opts: o4('Xe ăn xăng', 'Ăn cơm', 'Ăn cá', 'Ăn bánh'), ans: 'A', why: '"Xe ăn xăng" dùng "ăn" theo nghĩa chuyển (tiêu hao); các câu kia là nghĩa gốc.' },
  ],
},

/* ═══════════ ĐỀ 5 — ĐẠI TỪ, QUAN HỆ TỪ ═══════════ */
{
  id: 6805, title: 'Đề 5 · Đại từ và quan hệ từ', time: 20,
  questions: [
    { sec: 'Đại từ', name: 'Câu 1', pts: 1, text: 'Đại từ là gì?', opts: o4('Từ dùng để xưng hô hoặc thay thế cho danh từ', 'Từ chỉ hoạt động', 'Từ chỉ đặc điểm', 'Từ chỉ số lượng'), ans: 'A', why: 'Đại từ dùng để xưng hô hoặc thay thế cho danh từ, tránh lặp lại.' },
    { sec: 'Đại từ', name: 'Câu 2', pts: 1, text: 'Từ nào là đại từ xưng hô?', opts: o4('tôi', 'bàn', 'chạy', 'đẹp'), ans: 'A', why: '"tôi" là đại từ dùng để xưng hô.' },
    { sec: 'Đại từ', name: 'Câu 3', pts: 1, text: 'Trong câu "Nam học giỏi, cậu ấy được cô khen.", "cậu ấy" thay cho ai?', opts: o4('Nam', 'cô', 'người khác', 'không thay ai'), ans: 'A', why: '"cậu ấy" thay thế cho "Nam" để tránh lặp lại.' },
    { sec: 'Quan hệ từ', name: 'Câu 4', pts: 1, text: 'Quan hệ từ là gì?', opts: o4('Từ dùng để nối các từ ngữ hoặc các câu', 'Từ chỉ sự vật', 'Từ chỉ hoạt động', 'Từ xưng hô'), ans: 'A', why: 'Quan hệ từ dùng để nối các từ ngữ hoặc các câu với nhau.' },
    { sec: 'Quan hệ từ', name: 'Câu 5', pts: 1, text: 'Từ nào là quan hệ từ?', opts: o4('và', 'bàn', 'chạy', 'đẹp'), ans: 'A', why: '"và" là quan hệ từ dùng để nối.' },
    { sec: 'Cặp quan hệ từ', name: 'Câu 6', pts: 1, text: 'Cặp quan hệ từ "Vì... nên..." biểu thị quan hệ gì?', opts: o4('Nguyên nhân – kết quả', 'Điều kiện – kết quả', 'Tương phản', 'Tăng tiến'), ans: 'A', why: '"Vì... nên..." biểu thị quan hệ nguyên nhân – kết quả.' },
    { sec: 'Cặp quan hệ từ', name: 'Câu 7', pts: 1, text: 'Cặp "Nếu... thì..." biểu thị quan hệ gì?', opts: o4('Điều kiện – kết quả', 'Nguyên nhân – kết quả', 'Tương phản', 'Đồng thời'), ans: 'A', why: '"Nếu... thì..." biểu thị quan hệ điều kiện (giả thiết) – kết quả.' },
    { sec: 'Cặp quan hệ từ', name: 'Câu 8', pts: 1, text: 'Cặp "Tuy... nhưng..." biểu thị quan hệ gì?', opts: o4('Tương phản', 'Nguyên nhân – kết quả', 'Điều kiện', 'Nối tiếp'), ans: 'A', why: '"Tuy... nhưng..." biểu thị quan hệ tương phản (nhượng bộ).' },
    { sec: 'Điền từ', name: 'Câu 9', pts: 1, text: 'Điền quan hệ từ thích hợp: "Trời mưa ______ em vẫn đi học đúng giờ."', opts: o4('nhưng', 'nên', 'vì', 'và'), ans: 'A', why: 'Ý sau trái với ý trước nên dùng quan hệ từ tương phản "nhưng".' },
    { sec: 'Đại từ', name: 'Câu 10', pts: 1, text: 'Đại từ "chúng ta", "chúng tôi" dùng để làm gì?', opts: o4('Xưng hô, chỉ nhiều người', 'Chỉ đồ vật', 'Chỉ con vật', 'Chỉ nơi chốn'), ans: 'A', why: '"chúng ta", "chúng tôi" là đại từ xưng hô chỉ nhiều người.' },
  ],
},

/* ═══════════ ĐỀ 6 — CÂU GHÉP ═══════════ */
{
  id: 6806, title: 'Đề 6 · Câu ghép', time: 20,
  questions: [
    { sec: 'Khái niệm', name: 'Câu 1', pts: 1, text: 'Câu ghép là gì?', opts: o4('Câu do nhiều vế câu ghép lại, mỗi vế có đủ chủ ngữ – vị ngữ', 'Câu chỉ có một vế', 'Câu không có chủ ngữ', 'Câu hỏi'), ans: 'A', why: 'Câu ghép gồm nhiều vế, mỗi vế thường có đủ chủ ngữ và vị ngữ.' },
    { sec: 'Nhận biết', name: 'Câu 2', pts: 1, text: 'Câu nào là câu ghép?', opts: o4('Trời mưa nên đường trơn.', 'Em đi học.', 'Cây cối tươi tốt.', 'Bạn Lan chăm học.'), ans: 'A', why: '"Trời mưa nên đường trơn." gồm hai vế, mỗi vế có chủ – vị nên là câu ghép.' },
    { sec: 'Cách nối', name: 'Câu 3', pts: 1, text: 'Các vế của câu ghép được nối với nhau bằng cách nào?', opts: o4('Dùng quan hệ từ hoặc dấu câu', 'Chỉ dùng dấu chấm', 'Không cần nối', 'Dùng số thứ tự'), ans: 'A', why: 'Các vế câu ghép nối bằng quan hệ từ (và, nhưng, vì...) hoặc bằng dấu câu (dấu phẩy).' },
    { sec: 'Số vế', name: 'Câu 4', pts: 1, text: 'Câu "Gió thổi mạnh và mưa rơi." có mấy vế câu?', opts: o4('2 vế', '1 vế', '3 vế', '4 vế'), ans: 'A', why: 'Hai vế: "Gió thổi mạnh" và "mưa rơi".' },
    { sec: 'Cách nối', name: 'Câu 5', pts: 1, text: 'Trong câu ghép, từ "và" có tác dụng gì?', opts: o4('Nối hai vế câu', 'Kết thúc câu', 'Làm chủ ngữ', 'Làm vị ngữ'), ans: 'A', why: '"và" là quan hệ từ nối hai vế câu ghép.' },
    { sec: 'Quan hệ', name: 'Câu 6', pts: 1, text: 'Câu "Vì trời mưa nên em nghỉ học." có quan hệ gì giữa các vế?', opts: o4('Nguyên nhân – kết quả', 'Điều kiện – kết quả', 'Tương phản', 'Tăng tiến'), ans: 'A', why: 'Cặp "Vì... nên..." biểu thị quan hệ nguyên nhân – kết quả.' },
    { sec: 'Loại trừ', name: 'Câu 7', pts: 1, text: 'Câu nào KHÔNG phải câu ghép?', opts: o4('Em học bài.', 'Nắng lên, hoa nở.', 'Bố đi làm, mẹ nấu cơm.', 'Trời tối nên đèn bật sáng.'), ans: 'A', why: '"Em học bài." chỉ có một vế (một cụm chủ – vị) nên là câu đơn.' },
    { sec: 'Phân tích', name: 'Câu 8', pts: 1, text: 'Trong câu "Nếu chăm học thì em sẽ giỏi.", vế nêu điều kiện là:', opts: o4('Nếu chăm học', 'thì em sẽ giỏi', 'em sẽ giỏi', 'chăm học giỏi'), ans: 'A', why: 'Vế "Nếu chăm học" nêu điều kiện; vế "thì em sẽ giỏi" nêu kết quả.' },
    { sec: 'Dấu câu', name: 'Câu 9', pts: 1, text: 'Dấu câu nào thường dùng để nối các vế trong câu ghép?', opts: o4('Dấu phẩy', 'Dấu chấm hỏi', 'Dấu chấm than', 'Dấu ngoặc kép'), ans: 'A', why: 'Các vế câu ghép thường được nối bằng dấu phẩy (hoặc dấu chấm phẩy).' },
    { sec: 'Cặp hô ứng', name: 'Câu 10', pts: 1, text: 'Câu "Trời càng về khuya, trăng càng sáng." dùng cặp từ hô ứng nào?', opts: o4('càng... càng...', 'vì... nên...', 'tuy... nhưng...', 'nếu... thì...'), ans: 'A', why: 'Cặp từ hô ứng "càng... càng..." biểu thị sự tăng tiến song song.' },
  ],
},

/* ═══════════ ĐỀ 7 — LIÊN KẾT CÂU ═══════════ */
{
  id: 6807, title: 'Đề 7 · Liên kết các câu trong đoạn', time: 20,
  questions: [
    { sec: 'Khái niệm', name: 'Câu 1', pts: 1, text: 'Để liên kết các câu trong đoạn, ta có thể dùng cách nào?', opts: o4('Lặp từ ngữ, thay thế từ ngữ, dùng từ nối', 'Chỉ viết thật dài', 'Không cần liên kết', 'Xuống dòng liên tục'), ans: 'A', why: 'Các phép liên kết câu: phép lặp, phép thế và dùng từ ngữ nối.' },
    { sec: 'Phép lặp', name: 'Câu 2', pts: 1, text: 'Phép lặp là gì?', opts: o4('Lặp lại từ ngữ đã dùng ở câu trước', 'Dùng đại từ thay thế', 'Dùng từ nối', 'Đảo trật tự câu'), ans: 'A', why: 'Phép lặp là lặp lại từ ngữ ở câu trước để liên kết các câu.' },
    { sec: 'Phép thế', name: 'Câu 3', pts: 1, text: 'Phép thế là gì?', opts: o4('Dùng đại từ hoặc từ ngữ khác thay cho từ đã dùng', 'Lặp lại nguyên từ', 'Thêm dấu câu', 'Viết hoa từ'), ans: 'A', why: 'Phép thế dùng đại từ hay từ ngữ khác thay thế từ đã dùng để tránh lặp.' },
    { sec: 'Nhận biết', name: 'Câu 4', pts: 1, text: '"Nam rất chăm. Cậu ấy luôn làm bài đầy đủ." — dùng phép liên kết nào?', opts: o4('Phép thế ("cậu ấy" thay "Nam")', 'Phép lặp', 'Từ nối', 'Không liên kết'), ans: 'A', why: '"cậu ấy" thay thế cho "Nam" nên đây là phép thế.' },
    { sec: 'Nhận biết', name: 'Câu 5', pts: 1, text: '"Làng tôi có luỹ tre. Tre gắn bó với người dân quê tôi." — dùng phép nào?', opts: o4('Phép lặp (lặp từ "tre")', 'Phép thế', 'Từ nối', 'Không liên kết'), ans: 'A', why: 'Từ "tre" được lặp lại ở câu sau nên là phép lặp.' },
    { sec: 'Từ nối', name: 'Câu 6', pts: 1, text: 'Từ nối nào chỉ quan hệ thời gian (nối tiếp)?', opts: o4('sau đó', 'và', 'hoặc', 'vì'), ans: 'A', why: '"sau đó" nối các câu theo trình tự thời gian.' },
    { sec: 'Từ nối', name: 'Câu 7', pts: 1, text: 'Các từ "tuy nhiên", "nhưng" là từ nối chỉ quan hệ gì?', opts: o4('Tương phản', 'Nguyên nhân', 'Thời gian', 'Liệt kê'), ans: 'A', why: '"tuy nhiên", "nhưng" nối hai ý trái ngược nhau (tương phản).' },
    { sec: 'Tác dụng', name: 'Câu 8', pts: 1, text: 'Liên kết câu giúp đoạn văn như thế nào?', opts: o4('Mạch lạc, chặt chẽ, dễ hiểu', 'Rời rạc', 'Khó hiểu', 'Dài hơn'), ans: 'A', why: 'Liên kết câu tốt giúp đoạn văn mạch lạc, chặt chẽ và dễ hiểu.' },
    { sec: 'Từ nối', name: 'Câu 9', pts: 1, text: '"Vì vậy", "do đó" là từ nối chỉ quan hệ gì?', opts: o4('Kết quả (nguyên nhân – kết quả)', 'Điều kiện', 'Thời gian', 'Tương phản'), ans: 'A', why: '"vì vậy", "do đó" nối câu nêu kết quả của điều đã nói trước.' },
    { sec: 'Phép thế', name: 'Câu 10', pts: 1, text: 'Trong đoạn văn, đại từ "họ" thường dùng để thay cho:', opts: o4('Một nhóm người đã nhắc đến trước đó', 'Một đồ vật', 'Một con vật', 'Một nơi chốn'), ans: 'A', why: '"họ" thay thế cho một nhóm người đã được nhắc đến, tránh lặp lại.' },
  ],
},

/* ═══════════ ĐỀ 8 — SO SÁNH, NHÂN HOÁ ═══════════ */
{
  id: 6808, title: 'Đề 8 · Biện pháp so sánh và nhân hoá', time: 20,
  questions: [
    { sec: 'So sánh', name: 'Câu 1', pts: 1, text: 'So sánh là biện pháp như thế nào?', opts: o4('Đối chiếu sự vật này với sự vật khác có nét giống nhau', 'Gọi vật như người', 'Nói quá lên', 'Lặp lại từ'), ans: 'A', why: 'So sánh là đối chiếu hai sự vật, sự việc có nét giống nhau.' },
    { sec: 'So sánh', name: 'Câu 2', pts: 1, text: 'Từ nào thường dùng trong phép so sánh?', opts: o4('như', 'và', 'nhưng', 'vì'), ans: 'A', why: 'Các từ so sánh thường gặp: như, tựa, là, giống...' },
    { sec: 'Nhận biết', name: 'Câu 3', pts: 1, text: 'Câu "Trẻ em như búp trên cành." dùng biện pháp gì?', opts: o4('So sánh', 'Nhân hoá', 'Điệp từ', 'Không có biện pháp'), ans: 'A', why: 'Câu so sánh "trẻ em" với "búp trên cành" qua từ "như".' },
    { sec: 'Nhân hoá', name: 'Câu 4', pts: 1, text: 'Nhân hoá là biện pháp như thế nào?', opts: o4('Gọi hoặc tả vật bằng những từ ngữ vốn dùng cho con người', 'Đối chiếu hai sự vật', 'Nói giảm', 'Lặp lại từ'), ans: 'A', why: 'Nhân hoá là gọi, tả con vật, cây cối, đồ vật... như con người.' },
    { sec: 'Nhận biết', name: 'Câu 5', pts: 1, text: 'Câu "Ông mặt trời thức dậy." dùng biện pháp gì?', opts: o4('Nhân hoá', 'So sánh', 'Điệp ngữ', 'Không có'), ans: 'A', why: 'Gọi mặt trời là "ông" và tả "thức dậy" như người nên là nhân hoá.' },
    { sec: 'Nhận biết', name: 'Câu 6', pts: 1, text: 'Câu "Mặt trời như một quả cầu lửa." dùng biện pháp gì?', opts: o4('So sánh', 'Nhân hoá', 'Nói quá', 'Điệp từ'), ans: 'A', why: 'So sánh "mặt trời" với "quả cầu lửa" qua từ "như".' },
    { sec: 'Nhận biết', name: 'Câu 7', pts: 1, text: 'Câu "Chị gió đùa nghịch trên cành cây." dùng biện pháp gì?', opts: o4('Nhân hoá', 'So sánh', 'Nói giảm', 'Không có'), ans: 'A', why: 'Gọi gió là "chị" và tả "đùa nghịch" như người nên là nhân hoá.' },
    { sec: 'Tác dụng', name: 'Câu 8', pts: 1, text: 'So sánh và nhân hoá có tác dụng gì?', opts: o4('Làm câu văn sinh động, gợi hình, gợi cảm', 'Làm câu văn khô khan', 'Làm câu dài hơn', 'Không có tác dụng'), ans: 'A', why: 'So sánh, nhân hoá giúp câu văn sinh động, giàu hình ảnh và cảm xúc.' },
    { sec: 'Nhận biết', name: 'Câu 9', pts: 1, text: 'Câu nào dùng biện pháp nhân hoá?', opts: o4('Cây bàng đứng lặng nghe chim hót.', 'Cây bàng rất to.', 'Bàng có nhiều lá.', 'Lá bàng màu đỏ.'), ans: 'A', why: 'Tả cây bàng "đứng lặng nghe" như người nên là nhân hoá.' },
    { sec: 'Nhận biết', name: 'Câu 10', pts: 1, text: 'Câu nào dùng biện pháp so sánh?', opts: o4('Mặt hồ phẳng như gương.', 'Hồ rất rộng.', 'Nước hồ trong.', 'Hồ có nhiều cá.'), ans: 'A', why: 'So sánh "mặt hồ" với "gương" qua từ "như".' },
  ],
},

/* ═══════════ ĐỀ 9 — DẤU CÂU ═══════════ */
{
  id: 6809, title: 'Đề 9 · Dấu câu', time: 20,
  questions: [
    { sec: 'Dấu phẩy', name: 'Câu 1', pts: 1, text: 'Dấu phẩy dùng để làm gì?', opts: o4('Ngăn cách các bộ phận cùng chức vụ hoặc các vế câu', 'Kết thúc câu', 'Dẫn lời nói', 'Hỏi'), ans: 'A', why: 'Dấu phẩy ngăn cách các bộ phận cùng loại hoặc các vế trong câu.' },
    { sec: 'Dấu hai chấm', name: 'Câu 2', pts: 1, text: 'Dấu hai chấm dùng để làm gì?', opts: o4('Báo hiệu lời nói hoặc phần liệt kê theo sau', 'Kết thúc câu hỏi', 'Bộc lộ cảm xúc', 'Nối hai số'), ans: 'A', why: 'Dấu hai chấm báo hiệu lời nói trực tiếp hoặc phần liệt kê, giải thích.' },
    { sec: 'Dấu ngoặc kép', name: 'Câu 3', pts: 1, text: 'Dấu ngoặc kép dùng để làm gì?', opts: o4('Dẫn lời nói trực tiếp hoặc đánh dấu từ ngữ đặc biệt', 'Kết thúc câu', 'Ngăn cách các vế', 'Đánh số'), ans: 'A', why: 'Dấu ngoặc kép dùng để dẫn lời nói trực tiếp hoặc đánh dấu từ ngữ đặc biệt.' },
    { sec: 'Dấu gạch ngang', name: 'Câu 4', pts: 1, text: 'Dấu gạch ngang ở đầu dòng dùng để làm gì?', opts: o4('Đánh dấu lời nói của nhân vật trong đối thoại', 'Kết thúc câu', 'Thay dấu chấm', 'Nối các số'), ans: 'A', why: 'Dấu gạch ngang đầu dòng đánh dấu chỗ bắt đầu lời nói của nhân vật.' },
    { sec: 'Dấu chấm', name: 'Câu 5', pts: 1, text: 'Dấu chấm dùng để làm gì?', opts: o4('Kết thúc câu kể', 'Kết thúc câu hỏi', 'Kết thúc câu cảm', 'Liệt kê'), ans: 'A', why: 'Dấu chấm dùng để kết thúc một câu kể.' },
    { sec: 'Dấu chấm hỏi', name: 'Câu 6', pts: 1, text: 'Dấu chấm hỏi dùng để làm gì?', opts: o4('Kết thúc câu hỏi', 'Kết thúc câu kể', 'Bộc lộ cảm xúc', 'Liệt kê'), ans: 'A', why: 'Dấu chấm hỏi đặt ở cuối câu hỏi.' },
    { sec: 'Dấu chấm than', name: 'Câu 7', pts: 1, text: 'Dấu chấm than dùng để làm gì?', opts: o4('Kết thúc câu cảm hoặc câu khiến', 'Kết thúc câu kể', 'Kết thúc câu hỏi', 'Ngăn cách'), ans: 'A', why: 'Dấu chấm than đặt ở cuối câu cảm hoặc câu khiến.' },
    { sec: 'Công dụng', name: 'Câu 8', pts: 1, text: 'Câu "Trong vườn có: hoa hồng, hoa cúc, hoa lan." dùng dấu hai chấm để:', opts: o4('Báo hiệu phần liệt kê', 'Kết thúc câu', 'Dẫn lời nói', 'Hỏi'), ans: 'A', why: 'Dấu hai chấm báo hiệu phần liệt kê các loại hoa theo sau.' },
    { sec: 'Dùng đúng', name: 'Câu 9', pts: 1, text: 'Câu nào đặt dấu phẩy đúng?', opts: o4('Em thích đọc sách, nghe nhạc và vẽ tranh.', 'Em thích đọc sách nghe nhạc, và vẽ tranh.', 'Em, thích đọc sách nghe nhạc và vẽ tranh.', 'Em thích, đọc sách nghe nhạc và vẽ tranh.'), ans: 'A', why: 'Dấu phẩy ngăn cách các hoạt động cùng loại: đọc sách, nghe nhạc và vẽ tranh.' },
    { sec: 'Dấu chấm phẩy', name: 'Câu 10', pts: 1, text: 'Dấu chấm phẩy (;) thường dùng để làm gì?', opts: o4('Ngăn cách các vế của câu ghép hoặc các bộ phận liệt kê phức tạp', 'Kết thúc câu hỏi', 'Bộc lộ cảm xúc', 'Dẫn lời nói'), ans: 'A', why: 'Dấu chấm phẩy ngăn cách các vế câu ghép hoặc các phần liệt kê dài, phức tạp.' },
  ],
},

/* ═══════════ ĐỀ 10 — ÔN TẬP TỔNG HỢP ═══════════ */
{
  id: 6810, title: 'Đề 10 · Ôn tập tổng hợp', time: 20,
  questions: [
    { sec: 'Đồng nghĩa', name: 'Câu 1', pts: 1, text: 'Từ đồng nghĩa với "chăm chỉ" là:', opts: o4('siêng năng', 'lười biếng', 'thông minh', 'khoẻ mạnh'), ans: 'A', why: '"chăm chỉ" đồng nghĩa với "siêng năng".' },
    { sec: 'Trái nghĩa', name: 'Câu 2', pts: 1, text: 'Từ trái nghĩa với "hoà bình" là:', opts: o4('chiến tranh', 'yên vui', 'thịnh vượng', 'đoàn kết'), ans: 'A', why: '"hoà bình" trái nghĩa với "chiến tranh".' },
    { sec: 'Nhiều nghĩa', name: 'Câu 3', pts: 1, text: '"Chân" trong "chân núi", "chân bàn", "chân người" là:', opts: o4('Từ nhiều nghĩa', 'Từ đồng âm', 'Từ đồng nghĩa', 'Từ trái nghĩa'), ans: 'A', why: 'Các nghĩa của "chân" có liên quan nhau nên là từ nhiều nghĩa.' },
    { sec: 'Quan hệ từ', name: 'Câu 4', pts: 1, text: 'Từ nào là quan hệ từ?', opts: o4('và', 'bàn', 'chạy', 'đẹp'), ans: 'A', why: '"và" là quan hệ từ dùng để nối.' },
    { sec: 'Câu ghép', name: 'Câu 5', pts: 1, text: 'Câu ghép do mấy vế câu trở lên tạo thành?', opts: o4('Hai vế trở lên', 'Một vế', 'Không có vế nào', 'Ba vế cố định'), ans: 'A', why: 'Câu ghép do hai vế câu trở lên tạo thành.' },
    { sec: 'So sánh', name: 'Câu 6', pts: 1, text: 'Câu "Trẻ em như búp trên cành." dùng biện pháp gì?', opts: o4('So sánh', 'Nhân hoá', 'Điệp từ', 'Nói quá'), ans: 'A', why: 'So sánh "trẻ em" với "búp trên cành" qua từ "như".' },
    { sec: 'Nhân hoá', name: 'Câu 7', pts: 1, text: 'Cụm "ông mặt trời", "chị gió" dùng biện pháp gì?', opts: o4('Nhân hoá', 'So sánh', 'Điệp ngữ', 'Không có'), ans: 'A', why: 'Gọi sự vật bằng "ông", "chị" như người nên là nhân hoá.' },
    { sec: 'Dấu câu', name: 'Câu 8', pts: 1, text: 'Cuối câu cảm dùng dấu gì?', opts: o4('Dấu chấm than', 'Dấu chấm', 'Dấu chấm hỏi', 'Dấu phẩy'), ans: 'A', why: 'Cuối câu cảm dùng dấu chấm than.' },
    { sec: 'Đại từ', name: 'Câu 9', pts: 1, text: 'Đại từ "tôi" dùng để làm gì?', opts: o4('Xưng hô', 'Chỉ đồ vật', 'Nối câu', 'Chỉ đặc điểm'), ans: 'A', why: '"tôi" là đại từ dùng để xưng hô.' },
    { sec: 'Liên kết câu', name: 'Câu 10', pts: 1, text: 'Phép lặp trong liên kết câu là gì?', opts: o4('Lặp lại từ ngữ để nối các câu', 'Thay bằng đại từ', 'Dùng từ nối', 'Đảo câu'), ans: 'A', why: 'Phép lặp là lặp lại từ ngữ ở câu trước để liên kết các câu.' },
  ],
},

/* ═══════════ ĐỀ 11 — ĐỌC HIỂU TRUYỆN "NGƯỜI ĂN XIN" ═══════════ */
{
  id: 8101, title: 'Đề 11 · Đọc hiểu truyện', time: 20,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV5_R5, text: 'Người ăn xin trong bài là một ông lão như thế nào?', opts: o4('Trẻ trung, khoẻ mạnh', 'Già lụ khụ, bàn tay gầy guộc, run rẩy', 'Giàu có, sang trọng', 'Vui tươi, nhanh nhẹn'), ans: 'B', why: 'Bài đọc tả ông "già lụ khụ", "bàn tay gầy guộc", "bàn tay run rẩy".' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV5_R5, text: 'Khi lục túi, nhân vật "tôi" tìm thấy gì để cho ông lão?', opts: o4('Một đồng tiền vàng', 'Một ổ bánh mì', 'Một chiếc áo ấm', 'Không có gì cả'), ans: 'D', why: 'Bài đọc: "Tôi lục hết túi nọ đến túi kia nhưng chẳng có lấy một xu."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV5_R5, text: 'Nhân vật "tôi" đã làm gì với ông lão?', opts: o4('Nắm chặt bàn tay ông và nói lời xin lỗi', 'Quay mặt bỏ đi', 'Mắng ông lão', 'Cho ông thật nhiều tiền'), ans: 'A', why: 'Bài đọc: "tôi bèn nắm chặt lấy bàn tay run rẩy của ông và nói..."' },
    { sec: 'Suy luận', name: 'Câu 4', pts: 1, read: TV5_R5, text: 'Vì sao ông lão lại cảm ơn cậu bé dù không nhận được tiền?', opts: o4('Vì ông thích được xin lỗi', 'Vì ông sắp có tiền', 'Vì ông đã nhận được tình thương và sự tôn trọng', 'Vì ông muốn đùa cho vui'), ans: 'C', why: 'Cái nắm tay ấm áp và lời nói chân thành đã cho ông tình thương, sự tôn trọng.' },
    { sec: 'Ý nghĩa', name: 'Câu 5', pts: 1, read: TV5_R5, text: 'Câu chuyện muốn nói với chúng ta điều gì?', opts: o4('Phải luôn có nhiều tiền', 'Không nên giúp người ăn xin', 'Sự cảm thông, chân thành là món quà quý giá', 'Đùa giỡn là điều tốt'), ans: 'C', why: 'Truyện đề cao tình người: sự cảm thông, chân thành cũng là một món quà quý.' },
    { sec: 'Từ ngữ', name: 'Câu 6', pts: 1, read: TV5_R5, text: 'Từ "run rẩy" trong bài gợi tả điều gì?', opts: o4('Bàn tay run lên vì già yếu', 'Bàn tay khoẻ mạnh', 'Bàn tay sạch sẽ', 'Bàn tay to lớn'), ans: 'A', why: '"run rẩy" gợi tả bàn tay run lên vì tuổi già, yếu ớt.' },
    { sec: 'Luyện từ', name: 'Câu 7', pts: 1, read: TV5_R5, text: 'Từ trái nghĩa với "già" (trong "ông lão già") là:', opts: o4('yếu', 'gầy', 'chậm', 'trẻ'), ans: 'D', why: '"già" trái nghĩa với "trẻ".' },
    { sec: 'Luyện từ', name: 'Câu 8', pts: 1, read: TV5_R5, text: 'Trong câu "Cháu ơi, cảm ơn cháu!", từ "cháu" là:', opts: o4('Quan hệ từ', 'Đại từ xưng hô', 'Động từ', 'Tính từ'), ans: 'B', why: '"cháu" dùng để xưng hô nên là đại từ xưng hô.' },
    { sec: 'Luyện từ', name: 'Câu 9', pts: 1, read: TV5_R5, text: 'Câu "Tôi lục túi nhưng chẳng có gì cả." dùng quan hệ từ nào?', opts: o4('vì', 'nên', 'và', 'nhưng'), ans: 'D', why: '"nhưng" là quan hệ từ nối hai ý trái ngược nhau.' },
    { sec: 'Suy luận', name: 'Câu 10', pts: 1, read: TV5_R5, text: '"Tôi cũng vừa nhận được một chút gì đó từ ông" — cái "tôi" nhận được là gì?', opts: o4('Một món tiền', 'Bài học về tình người và lòng biết ơn', 'Một chiếc túi', 'Một lời chê trách'), ans: 'B', why: 'Cậu bé nhận được bài học về tình người, sự trân trọng và lòng biết ơn.' },
  ],
},

/* ═══════════ ĐỀ 12 — ĐỌC HIỂU VĂN BẢN "VỊNH HẠ LONG" ═══════════ */
{
  id: 8102, title: 'Đề 12 · Đọc hiểu văn bản thông tin', time: 20,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV5_R6, text: 'Vịnh Hạ Long nằm ở tỉnh nào?', opts: o4('Quảng Nam', 'Khánh Hoà', 'Quảng Ninh', 'Kiên Giang'), ans: 'C', why: 'Bài đọc: "Vịnh Hạ Long nằm ở tỉnh Quảng Ninh".' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV5_R6, text: 'Trên vịnh có gì nổi bật?', opts: o4('Hàng nghìn hòn đảo đá lớn nhỏ', 'Những cánh đồng lúa', 'Nhiều nhà cao tầng', 'Rừng thông bạt ngàn'), ans: 'A', why: 'Bài đọc: vịnh có "hàng nghìn hòn đảo đá lớn nhỏ nhô lên giữa mặt nước".' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV5_R6, text: 'Bài đọc nhắc đến những hòn đảo có tên gì?', opts: o4('Hòn Trống Mái, hòn Gà Chọi', 'Hòn Vọng Phu', 'Hòn Yến, hòn Én', 'Hòn Dấu, hòn Rều'), ans: 'A', why: 'Bài đọc: "như hòn Trống Mái, hòn Gà Chọi".' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV5_R6, text: 'Trong lòng các đảo có gì đẹp?', opts: o4('Nhiều mỏ vàng', 'Nhiều ruộng bậc thang', 'Nhiều hang động với măng đá, nhũ đá', 'Nhiều thác nước'), ans: 'C', why: 'Bài đọc: "có nhiều hang động đẹp với măng đá, nhũ đá lấp lánh".' },
    { sec: 'Đọc hiểu', name: 'Câu 5', pts: 1, read: TV5_R6, text: 'Vịnh Hạ Long được UNESCO công nhận là gì?', opts: o4('Kì quan xây dựng', 'Di sản thiên nhiên thế giới', 'Khu bảo tồn chim', 'Công viên quốc gia'), ans: 'B', why: 'Bài đọc: "được UNESCO công nhận là Di sản thiên nhiên thế giới".' },
    { sec: 'Suy luận', name: 'Câu 6', pts: 1, read: TV5_R6, text: 'Vì sao Vịnh Hạ Long là niềm tự hào của người Việt Nam?', opts: o4('Vì ở đó có nhiều nhà máy', 'Vì đó là nơi trồng lúa', 'Vì ở đó rất ít người', 'Vì đó là cảnh đẹp nổi tiếng, được thế giới công nhận'), ans: 'D', why: 'Vịnh có vẻ đẹp kì thú, hai lần được UNESCO công nhận nên là niềm tự hào của dân tộc.' },
    { sec: 'Luyện từ', name: 'Câu 7', pts: 1, read: TV5_R6, text: 'Từ "xanh biếc" trong bài thuộc loại từ nào?', opts: o4('Danh từ', 'Tính từ', 'Động từ', 'Quan hệ từ'), ans: 'B', why: '"xanh biếc" chỉ đặc điểm màu sắc của mặt nước nên là tính từ.' },
    { sec: 'Luyện từ', name: 'Câu 8', pts: 1, read: TV5_R6, text: 'Từ đồng nghĩa với "kì lạ" là:', opts: o4('bình thường', 'quen thuộc', 'nhỏ bé', 'kì dị'), ans: 'D', why: '"kì lạ" đồng nghĩa với "kì dị" (khác thường, lạ lùng).' },
    { sec: 'Luyện từ', name: 'Câu 9', pts: 1, read: TV5_R6, text: 'Bộ phận in đậm trong câu "Vịnh Hạ Long / là niềm tự hào của người dân Việt Nam." — bộ phận đứng trước "là" giữ chức vụ gì?', opts: o4('Chủ ngữ', 'Vị ngữ', 'Trạng ngữ', 'Quan hệ từ'), ans: 'A', why: '"Vịnh Hạ Long" là chủ ngữ của câu; "là niềm tự hào..." là vị ngữ.' },
    { sec: 'Vận dụng', name: 'Câu 10', pts: 1, read: TV5_R6, text: 'Là học sinh, em cần làm gì với những di sản như Vịnh Hạ Long?', opts: o4('Chặt cây, phá đá', 'Vẽ bậy lên hang động', 'Giữ gìn, bảo vệ, không xả rác', 'Mặc kệ không quan tâm'), ans: 'C', why: 'Cần yêu quý, giữ gìn và bảo vệ di sản, giữ môi trường sạch đẹp.' },
  ],
},

/* ═══════════ ĐỀ 13 — ĐỌC HIỂU THƠ "TRĂNG ƠI" ═══════════ */
{
  id: 8103, title: 'Đề 13 · Đọc hiểu thơ', time: 20,
  questions: [
    { sec: 'Đọc thơ', name: 'Câu 1', pts: 1, read: TV5_R7, text: 'Bài thơ nói về sự vật nào trên bầu trời?', opts: o4('Mặt trời', 'Ngôi sao', 'Trăng', 'Đám mây'), ans: 'C', why: 'Bài thơ nhiều lần gọi "Trăng ơi..." nên nói về trăng.' },
    { sec: 'Đọc thơ', name: 'Câu 2', pts: 1, read: TV5_R7, text: 'Ở khổ thơ đầu, trăng được so sánh với gì?', opts: o4('Quả chín', 'Mắt cá', 'Chiếc đĩa', 'Con thuyền'), ans: 'A', why: 'Bài thơ: "Trăng hồng như quả chín".' },
    { sec: 'Đọc thơ', name: 'Câu 3', pts: 1, read: TV5_R7, text: 'Ở khổ thơ thứ hai, trăng tròn được so sánh với gì?', opts: o4('Quả chín', 'Quả bóng', 'Chiếc gương', 'Mắt cá'), ans: 'D', why: 'Bài thơ: "Trăng tròn như mắt cá / Chẳng bao giờ chớp mi".' },
    { sec: 'Biện pháp', name: 'Câu 4', pts: 1, read: TV5_R7, text: 'Hai câu "Trăng hồng như quả chín", "Trăng tròn như mắt cá" dùng biện pháp gì?', opts: o4('Nhân hoá', 'So sánh', 'Điệp từ', 'Nói quá'), ans: 'B', why: 'Trăng được đối chiếu với "quả chín", "mắt cá" qua từ "như" nên là so sánh.' },
    { sec: 'Biện pháp', name: 'Câu 5', pts: 1, read: TV5_R7, text: 'Câu thơ "Trăng ơi... từ đâu đến?" cho thấy tác giả coi trăng như:', opts: o4('Một hòn đá', 'Một món đồ chơi', 'Một cái đèn', 'Một người bạn để trò chuyện'), ans: 'D', why: 'Gọi và hỏi trăng như trò chuyện với bạn — đó là cách nhân hoá, gần gũi.' },
    { sec: 'Đọc thơ', name: 'Câu 6', pts: 1, read: TV5_R7, text: 'Cụm từ nào được lặp lại ở đầu hai khổ thơ?', opts: o4('Trăng hồng như quả chín', 'Trăng ơi... từ đâu đến?', 'Chẳng bao giờ chớp mi', 'Hay biển xanh diệu kì'), ans: 'B', why: '"Trăng ơi... từ đâu đến?" được lặp lại ở đầu hai khổ (phép điệp).' },
    { sec: 'Biện pháp', name: 'Câu 7', pts: 1, read: TV5_R7, text: 'Việc lặp lại câu "Trăng ơi... từ đâu đến?" là biện pháp gì?', opts: o4('So sánh', 'Nhân hoá', 'Điệp ngữ (điệp từ)', 'Nói giảm'), ans: 'C', why: 'Lặp lại nguyên một cụm từ để nhấn mạnh là biện pháp điệp ngữ.' },
    { sec: 'Luyện từ', name: 'Câu 8', pts: 1, read: TV5_R7, text: 'Từ "lửng lơ" trong "Lửng lơ lên trước nhà" gợi tả điều gì?', opts: o4('Trăng treo nhẹ, như bồng bềnh trên không', 'Trăng rơi xuống đất', 'Trăng chạy thật nhanh', 'Trăng đứng yên một chỗ'), ans: 'A', why: '"lửng lơ" gợi hình ảnh trăng treo nhẹ nhàng, bồng bềnh giữa không trung.' },
    { sec: 'Luyện từ', name: 'Câu 9', pts: 1, read: TV5_R7, text: 'Từ đồng nghĩa với "diệu kì" là:', opts: o4('kì diệu', 'bình thường', 'nhỏ bé', 'buồn bã'), ans: 'A', why: '"diệu kì" đồng nghĩa với "kì diệu".' },
    { sec: 'Cảm thụ', name: 'Câu 10', pts: 1, read: TV5_R7, text: 'Bài thơ thể hiện tình cảm gì của tác giả?', opts: o4('Sợ hãi bóng đêm', 'Ghét ánh trăng', 'Yêu mến, gắn bó với thiên nhiên, với trăng', 'Buồn chán, thờ ơ'), ans: 'C', why: 'Cách trò chuyện, so sánh trăng thật đẹp cho thấy tình yêu thiên nhiên của tác giả.' },
  ],
},

/* ═══════════ ĐỀ 14 — TỪ ĐỒNG NGHĨA, TRÁI NGHĨA (NÂNG CAO) ═══════════ */
{
  id: 8104, title: 'Đề 14 · Đồng nghĩa – trái nghĩa (nâng cao)', time: 20,
  questions: [
    { sec: 'Đồng nghĩa', name: 'Câu 1', pts: 1, text: 'Nhóm nào gồm toàn từ đồng nghĩa?', opts: o4('to, nhỏ, vừa', 'bao la, mênh mông, bát ngát', 'cao, thấp, dài', 'trắng, đen, vàng'), ans: 'B', why: '"bao la, mênh mông, bát ngát" đều chỉ sự rộng lớn → đồng nghĩa.' },
    { sec: 'Đồng nghĩa', name: 'Câu 2', pts: 1, text: 'Từ đồng nghĩa với "dũng cảm" là:', opts: o4('hèn nhát', 'thông minh', 'chăm chỉ', 'gan dạ'), ans: 'D', why: '"dũng cảm" đồng nghĩa với "gan dạ".' },
    { sec: 'Trái nghĩa', name: 'Câu 3', pts: 1, text: 'Từ trái nghĩa với "siêng năng" là:', opts: o4('chăm chỉ', 'lười biếng', 'cần cù', 'chịu khó'), ans: 'B', why: '"siêng năng" trái nghĩa với "lười biếng"; các từ còn lại đều đồng nghĩa với nó.' },
    { sec: 'Trái nghĩa', name: 'Câu 4', pts: 1, text: 'Cặp nào KHÔNG phải cặp từ trái nghĩa?', opts: o4('sáng – tối', 'nóng – lạnh', 'thắng – thua', 'vui vẻ – tươi cười'), ans: 'D', why: '"vui vẻ" và "tươi cười" gần nghĩa nhau (đồng nghĩa), không phải trái nghĩa.' },
    { sec: 'Điền từ', name: 'Câu 5', pts: 1, text: 'Điền từ trái nghĩa: "Gần mực thì đen, gần đèn thì ______."', opts: o4('sáng', 'tối', 'mờ', 'xa'), ans: 'A', why: 'Câu tục ngữ có cặp trái nghĩa "đen – sáng": "gần đèn thì sáng".' },
    { sec: 'Điền từ', name: 'Câu 6', pts: 1, text: 'Điền từ trái nghĩa: "Chết ______ còn hơn sống đục."', opts: o4('sạch', 'vinh', 'trong', 'thẳng'), ans: 'C', why: 'Thành ngữ "Chết trong còn hơn sống đục" có cặp trái nghĩa "trong – đục".' },
    { sec: 'Đồng nghĩa', name: 'Câu 7', pts: 1, text: 'Từ đồng nghĩa với "chăm sóc" là:', opts: o4('bỏ mặc', 'lãng quên', 'trông nom', 'ghét bỏ'), ans: 'C', why: '"chăm sóc" đồng nghĩa với "trông nom".' },
    { sec: 'Sắc thái', name: 'Câu 8', pts: 1, text: 'Trong các từ "hi sinh, bỏ mạng, mất", từ nào mang sắc thái kính trọng?', opts: o4('hi sinh', 'bỏ mạng', 'mất', 'toi'), ans: 'A', why: '"hi sinh" mang sắc thái trang trọng, kính trọng khi nói về người ngã xuống vì nghĩa lớn.' },
    { sec: 'Trái nghĩa', name: 'Câu 9', pts: 1, text: 'Từ trái nghĩa với "đoàn kết" là:', opts: o4('thương yêu', 'gắn bó', 'hoà thuận', 'chia rẽ'), ans: 'D', why: '"đoàn kết" trái nghĩa với "chia rẽ".' },
    { sec: 'Đồng nghĩa', name: 'Câu 10', pts: 1, text: 'Từ nào đồng nghĩa với "yên tĩnh"?', opts: o4('ồn ào', 'vắng lặng', 'náo nhiệt', 'huyên náo'), ans: 'B', why: '"yên tĩnh" đồng nghĩa với "vắng lặng"; các từ kia trái nghĩa.' },
  ],
},

/* ═══════════ ĐỀ 15 — TỪ NHIỀU NGHĨA, TỪ ĐỒNG ÂM (NÂNG CAO) ═══════════ */
{
  id: 8105, title: 'Đề 15 · Nhiều nghĩa – đồng âm (nâng cao)', time: 20,
  questions: [
    { sec: 'Đồng âm', name: 'Câu 1', pts: 1, text: '"Bò" trong "con bò" và "bò trên cỏ" là hiện tượng gì?', opts: o4('Từ nhiều nghĩa', 'Từ đồng nghĩa', 'Từ trái nghĩa', 'Từ đồng âm'), ans: 'D', why: '"bò" (con vật) và "bò" (di chuyển) nghĩa khác hẳn nhau → từ đồng âm.' },
    { sec: 'Nhiều nghĩa', name: 'Câu 2', pts: 1, text: '"Đầu" trong "đầu người", "đầu sông", "đầu bàn" là:', opts: o4('Từ đồng âm', 'Từ nhiều nghĩa', 'Từ đồng nghĩa', 'Từ trái nghĩa'), ans: 'B', why: 'Các nghĩa đều chỉ phần trên/trước, có liên quan nhau → từ nhiều nghĩa.' },
    { sec: 'Phân biệt', name: 'Câu 3', pts: 1, text: '"Đường" trong "đường phố" và "đường ăn (đường cát)" là:', opts: o4('Từ nhiều nghĩa', 'Từ đồng nghĩa', 'Từ đồng âm', 'Từ trái nghĩa'), ans: 'C', why: '"đường" đi và "đường" ăn nghĩa khác hẳn nhau → từ đồng âm.' },
    { sec: 'Nhiều nghĩa', name: 'Câu 4', pts: 1, text: 'Trong "lưỡi dao", "lưỡi cày", "lưỡi liềm", từ "lưỡi" mang nghĩa:', opts: o4('Nghĩa chuyển (phần sắc, mỏng của vật)', 'Nghĩa gốc (bộ phận trong miệng)', 'Nghĩa trái ngược', 'Không có nghĩa'), ans: 'A', why: '"lưỡi" ở đây chỉ phần sắc mỏng của vật — là nghĩa chuyển từ "lưỡi" trong miệng.' },
    { sec: 'Nghĩa gốc', name: 'Câu 5', pts: 1, text: 'Câu nào dùng từ "đi" theo nghĩa gốc?', opts: o4('Em bé tập đi.', 'Đồng hồ đi đúng giờ.', 'Nước sơn đã đi đều.', 'Ông đi guốc trong bụng.'), ans: 'A', why: '"Em bé tập đi" dùng "đi" nghĩa gốc (di chuyển bằng chân); các câu kia là nghĩa chuyển.' },
    { sec: 'Nghĩa chuyển', name: 'Câu 6', pts: 1, text: 'Câu nào dùng từ "ngọt" theo nghĩa chuyển?', opts: o4('Quả cam rất ngọt.', 'Ly chè ngọt lịm.', 'Cô ấy nói ngọt quá.', 'Nước mía ngọt.'), ans: 'C', why: '"nói ngọt" chỉ lời nói dễ nghe — nghĩa chuyển; các câu kia chỉ vị ngọt (nghĩa gốc).' },
    { sec: 'Đồng âm', name: 'Câu 7', pts: 1, text: '"Kho" trong "kho cá" và "nhà kho" là:', opts: o4('Từ nhiều nghĩa', 'Từ đồng âm', 'Từ đồng nghĩa', 'Từ trái nghĩa'), ans: 'B', why: '"kho" (nấu) và "kho" (nơi chứa) nghĩa khác hẳn → từ đồng âm.' },
    { sec: 'Nhiều nghĩa', name: 'Câu 8', pts: 1, text: '"Cứng" trong "tay nghề cứng" mang nghĩa gì?', opts: o4('Rắn chắc, khó bẻ (nghĩa gốc)', 'Cứng nhắc, khó chịu', 'Không có nghĩa', 'Giỏi, vững vàng (nghĩa chuyển)'), ans: 'D', why: '"tay nghề cứng" nghĩa là giỏi, vững — nghĩa chuyển của "cứng".' },
    { sec: 'Phân biệt', name: 'Câu 9', pts: 1, text: 'Cách nào giúp phân biệt từ đồng âm và từ nhiều nghĩa?', opts: o4('Xem từ dài hay ngắn', 'Xét các nghĩa có liên quan với nhau hay không', 'Đếm số chữ cái', 'Xem viết hoa hay không'), ans: 'B', why: 'Từ nhiều nghĩa: các nghĩa có liên quan; từ đồng âm: nghĩa khác hẳn, không liên quan.' },
    { sec: 'Vận dụng', name: 'Câu 10', pts: 1, text: 'Câu "Ruồi đậu mâm xôi đậu." — hai từ "đậu" là:', opts: o4('Từ nhiều nghĩa', 'Từ đồng nghĩa', 'Từ trái nghĩa', 'Từ đồng âm'), ans: 'D', why: '"đậu" (đứng lại) và "đậu" (hạt đậu) nghĩa khác hẳn → từ đồng âm.' },
  ],
},

/* ═══════════ ĐỀ 16 — ĐẠI TỪ ═══════════ */
{
  id: 8106, title: 'Đề 16 · Đại từ', time: 20,
  questions: [
    { sec: 'Khái niệm', name: 'Câu 1', pts: 1, text: 'Đại từ dùng để làm gì?', opts: o4('Xưng hô hoặc thay thế cho danh từ, động từ, tính từ', 'Chỉ nối các vế câu', 'Chỉ đặc điểm của vật', 'Chỉ số lượng'), ans: 'A', why: 'Đại từ dùng để xưng hô hoặc thay thế cho danh từ, động từ, tính từ, tránh lặp.' },
    { sec: 'Nhận biết', name: 'Câu 2', pts: 1, text: 'Từ nào KHÔNG phải đại từ?', opts: o4('tôi', 'chúng ta', 'bàn ghế', 'nó'), ans: 'C', why: '"bàn ghế" là danh từ; "tôi, chúng ta, nó" là đại từ.' },
    { sec: 'Đại từ thay thế', name: 'Câu 3', pts: 1, text: 'Trong câu "Lan chăm học nên ai cũng quý em.", từ "em" thay cho:', opts: o4('ai', 'người khác', 'Lan', 'không thay ai'), ans: 'C', why: '"em" thay thế cho "Lan" để tránh lặp lại tên.' },
    { sec: 'Đại từ thay thế', name: 'Câu 4', pts: 1, text: 'Trong câu "Bố em rất hiền. Ai cũng quý ông ấy.", từ "ông ấy" thay cho:', opts: o4('bố em', 'ai', 'người lạ', 'em'), ans: 'A', why: '"ông ấy" thay thế cho "bố em" để tránh lặp lại, đó là đại từ thay thế.' },
    { sec: 'Đại từ nghi vấn', name: 'Câu 5', pts: 1, text: 'Từ nào là đại từ dùng để hỏi?', opts: o4('và', 'nên', 'rất', 'ai'), ans: 'D', why: '"ai" là đại từ dùng để hỏi (đại từ nghi vấn).' },
    { sec: 'Nhận biết', name: 'Câu 6', pts: 1, text: 'Nhóm nào gồm toàn đại từ xưng hô?', opts: o4('bàn, ghế, sách', 'tôi, chúng tôi, nó, họ', 'chạy, nhảy, hát', 'xanh, đỏ, tím'), ans: 'B', why: '"tôi, chúng tôi, nó, họ" đều là đại từ xưng hô.' },
    { sec: 'Sử dụng', name: 'Câu 7', pts: 1, text: 'Đại từ giúp câu văn, đoạn văn tránh được điều gì?', opts: o4('Ngắn gọn quá mức', 'Sai chính tả', 'Thiếu dấu câu', 'Lặp lại từ ngữ nhiều lần'), ans: 'D', why: 'Dùng đại từ để thay thế giúp tránh lặp lại một từ ngữ nhiều lần.' },
    { sec: 'Đại từ nghi vấn', name: 'Câu 8', pts: 1, text: 'Từ "bao nhiêu" trong "Lớp em có bao nhiêu bạn?" là:', opts: o4('Quan hệ từ', 'Đại từ dùng để hỏi', 'Danh từ', 'Động từ'), ans: 'B', why: '"bao nhiêu" dùng để hỏi về số lượng nên là đại từ nghi vấn.' },
    { sec: 'Vận dụng', name: 'Câu 9', pts: 1, text: 'Chọn đại từ thay thế thích hợp: "Cây đa đầu làng đã già. ______ đứng đó từ bao đời nay."', opts: o4('Tôi', 'Họ', 'Nó', 'Chúng ta'), ans: 'C', why: '"Nó" thay cho "cây đa" (vật), giúp câu sau không lặp lại.' },
    { sec: 'Nhận biết', name: 'Câu 10', pts: 1, text: 'Trong câu "Chúng ta cùng nhau bảo vệ môi trường.", "chúng ta" chỉ:', opts: o4('Cả người nói và người nghe', 'Chỉ người nói', 'Chỉ người nghe', 'Người vắng mặt'), ans: 'A', why: '"chúng ta" là đại từ xưng hô ngôi thứ nhất số nhiều, gồm cả người nói và người nghe.' },
  ],
},

/* ═══════════ ĐỀ 17 — QUAN HỆ TỪ VÀ CẶP QUAN HỆ TỪ ═══════════ */
{
  id: 8107, title: 'Đề 17 · Quan hệ từ và cặp quan hệ từ', time: 20,
  questions: [
    { sec: 'Nhận biết', name: 'Câu 1', pts: 1, text: 'Nhóm nào gồm toàn quan hệ từ?', opts: o4('và, với, nhưng, của', 'bàn, ghế, nhà', 'chạy, nhảy, hát', 'xanh, đỏ, vàng'), ans: 'A', why: '"và, với, nhưng, của" đều là quan hệ từ.' },
    { sec: 'Tác dụng', name: 'Câu 2', pts: 1, text: 'Quan hệ từ "của" trong "quyển sách của em" biểu thị quan hệ gì?', opts: o4('Nguyên nhân', 'Tương phản', 'Sở hữu', 'Thời gian'), ans: 'C', why: '"của" biểu thị quan hệ sở hữu (sách thuộc về em).' },
    { sec: 'Điền từ', name: 'Câu 3', pts: 1, text: 'Điền quan hệ từ: "Em học giỏi ______ em rất chăm chỉ."', opts: o4('nhưng', 'vì', 'nếu', 'hoặc'), ans: 'B', why: 'Vế sau nêu nguyên nhân nên dùng "vì".' },
    { sec: 'Cặp QHT', name: 'Câu 4', pts: 1, text: 'Cặp "Chẳng những... mà còn..." biểu thị quan hệ gì?', opts: o4('Tương phản', 'Nguyên nhân – kết quả', 'Điều kiện', 'Tăng tiến'), ans: 'D', why: '"Chẳng những... mà còn..." biểu thị quan hệ tăng tiến.' },
    { sec: 'Điền cặp QHT', name: 'Câu 5', pts: 1, text: 'Điền cặp quan hệ từ: "______ trời mưa to ______ em vẫn đến lớp đúng giờ."', opts: o4('Vì... nên...', 'Tuy... nhưng...', 'Nếu... thì...', 'Càng... càng...'), ans: 'B', why: 'Hai vế trái ngược nhau nên dùng cặp tương phản "Tuy... nhưng...".' },
    { sec: 'Điền cặp QHT', name: 'Câu 6', pts: 1, text: 'Điền cặp quan hệ từ: "______ em chăm học ______ em sẽ đạt kết quả tốt."', opts: o4('Tuy... nhưng...', 'Vì... nên...', 'Chẳng những... mà còn...', 'Nếu... thì...'), ans: 'D', why: 'Vế đầu nêu điều kiện, vế sau nêu kết quả nên dùng "Nếu... thì...".' },
    { sec: 'Xác định quan hệ', name: 'Câu 7', pts: 1, text: 'Câu "Vì chủ quan nên Rùa đã thua Thỏ." có quan hệ gì? (giả sử đảo lại chuyện) — cặp "Vì... nên..." chỉ:', opts: o4('Nguyên nhân – kết quả', 'Điều kiện – kết quả', 'Tương phản', 'Tăng tiến'), ans: 'A', why: '"Vì... nên..." luôn biểu thị quan hệ nguyên nhân – kết quả.' },
    { sec: 'Sửa lỗi', name: 'Câu 8', pts: 1, text: 'Câu nào dùng cặp quan hệ từ đúng?', opts: o4('Vì trời mưa nhưng đường ngập.', 'Nếu trời mưa nên đường ngập.', 'Vì trời mưa nên đường ngập.', 'Tuy trời mưa thì đường ngập.'), ans: 'C', why: 'Quan hệ nguyên nhân – kết quả phải dùng đúng cặp "Vì... nên...".' },
    { sec: 'Tác dụng', name: 'Câu 9', pts: 1, text: 'Trong câu "Nhà em ở gần trường nên em thường đi bộ.", quan hệ từ "nên" nối:', opts: o4('Hai danh từ', 'Hai tính từ', 'Hai vế câu chỉ nguyên nhân và kết quả', 'Chủ ngữ với vị ngữ'), ans: 'C', why: '"nên" nối vế nguyên nhân với vế kết quả trong câu ghép.' },
    { sec: 'Điền từ', name: 'Câu 10', pts: 1, text: 'Điền quan hệ từ: "Em thích đọc truyện ______ vẽ tranh."', opts: o4('và', 'nhưng', 'nên', 'vì'), ans: 'A', why: 'Hai hoạt động cùng được yêu thích, liệt kê ngang hàng nên dùng "và".' },
  ],
},

/* ═══════════ ĐỀ 18 — CÂU GHÉP VÀ CÁCH NỐI CÁC VẾ ═══════════ */
{
  id: 8108, title: 'Đề 18 · Câu ghép và cách nối các vế', time: 20,
  questions: [
    { sec: 'Nhận biết', name: 'Câu 1', pts: 1, text: 'Câu nào là câu ghép?', opts: o4('Bầu trời trong xanh.', 'Đàn cò trắng bay.', 'Em rất thích hoa.', 'Mây tan, mưa tạnh.'), ans: 'D', why: '"Mây tan, mưa tạnh." có hai vế, mỗi vế đủ chủ – vị nên là câu ghép.' },
    { sec: 'Nối trực tiếp', name: 'Câu 2', pts: 1, text: 'Câu "Gió thổi, lá rơi." nối các vế bằng cách nào?', opts: o4('Nối bằng quan hệ từ', 'Nối trực tiếp bằng dấu phẩy', 'Nối bằng cặp quan hệ từ', 'Không có cách nối'), ans: 'B', why: 'Hai vế nối trực tiếp với nhau bằng dấu phẩy, không dùng từ nối.' },
    { sec: 'Nối bằng QHT', name: 'Câu 3', pts: 1, text: 'Câu "Trời nắng gắt nhưng gió vẫn mát." nối các vế bằng:', opts: o4('Dấu phẩy', 'Cặp quan hệ từ', 'Dấu hai chấm', 'Quan hệ từ "nhưng"'), ans: 'D', why: 'Hai vế nối bằng quan hệ từ "nhưng".' },
    { sec: 'Số vế', name: 'Câu 4', pts: 1, text: 'Câu "Bố đọc báo, mẹ nấu cơm, em học bài." có mấy vế?', opts: o4('2 vế', '3 vế', '1 vế', '4 vế'), ans: 'B', why: 'Ba vế: "Bố đọc báo", "mẹ nấu cơm", "em học bài".' },
    { sec: 'Phân biệt', name: 'Câu 5', pts: 1, text: 'Câu nào là câu đơn (KHÔNG phải câu ghép)?', opts: o4('Trời tối, đèn đường bật sáng.', 'Nắng lên, sương tan.', 'Những bông hoa hồng trong vườn đua nhau khoe sắc.', 'Bố về, cả nhà vui.'), ans: 'C', why: 'Câu đầu chỉ có một cụm chủ – vị nên là câu đơn dù có nhiều từ ngữ mở rộng.' },
    { sec: 'Xác định vế', name: 'Câu 6', pts: 1, text: 'Trong câu "Mặt trời lên, sương tan dần.", chủ ngữ của vế thứ hai là:', opts: o4('sương', 'mặt trời', 'tan dần', 'lên'), ans: 'A', why: 'Vế hai "sương tan dần" có chủ ngữ là "sương".' },
    { sec: 'Cách nối', name: 'Câu 7', pts: 1, text: 'Có mấy cách chính để nối các vế của câu ghép?', opts: o4('Hai cách: dùng từ nối và nối trực tiếp bằng dấu câu', 'Chỉ một cách', 'Bốn cách', 'Không có cách nào'), ans: 'A', why: 'Hai cách: nối bằng từ (quan hệ từ, cặp quan hệ từ) và nối trực tiếp bằng dấu câu.' },
    { sec: 'Điền vế', name: 'Câu 8', pts: 1, text: 'Điền vế thích hợp: "Trời càng về chiều, ______."', opts: o4('em thích đọc sách', 'con mèo màu đen', 'gió càng lạnh', 'rất là đẹp'), ans: 'C', why: 'Cặp hô ứng "càng... càng..." đòi vế sau "gió càng lạnh" để tạo câu ghép hợp lí.' },
    { sec: 'Sửa câu', name: 'Câu 9', pts: 1, text: 'Câu nào đặt dấu phẩy nối vế đúng?', opts: o4('Mưa ngớt bầu trời, sáng dần.', 'Mưa ngớt, bầu trời sáng dần.', 'Mưa, ngớt bầu trời sáng dần.', 'Mưa ngớt bầu, trời sáng dần.'), ans: 'B', why: 'Dấu phẩy phải đặt giữa hai vế: "Mưa ngớt" và "bầu trời sáng dần".' },
    { sec: 'Vận dụng', name: 'Câu 10', pts: 1, text: 'Ghép hai câu "Trời mưa. Em mang áo mưa." thành câu ghép hợp lí:', opts: o4('Trời mưa và áo mưa em.', 'Trời mưa nhưng em không mưa.', 'Em mang trời mưa áo.', 'Trời mưa nên em mang áo mưa.'), ans: 'D', why: 'Dùng quan hệ từ "nên" nối nguyên nhân "trời mưa" với kết quả "em mang áo mưa".' },
  ],
},

/* ═══════════ ĐỀ 19 — CÂU GHÉP: CÁC CẶP QUAN HỆ TỪ ═══════════ */
{
  id: 8109, title: 'Đề 19 · Câu ghép — cặp quan hệ từ', time: 20,
  questions: [
    { sec: 'Nguyên nhân – kết quả', name: 'Câu 1', pts: 1, text: 'Câu "Vì em dậy muộn nên em đi học trễ." biểu thị quan hệ gì?', opts: o4('Điều kiện – kết quả', 'Nguyên nhân – kết quả', 'Tương phản', 'Tăng tiến'), ans: 'B', why: 'Cặp "Vì... nên..." nối nguyên nhân với kết quả.' },
    { sec: 'Điều kiện – kết quả', name: 'Câu 2', pts: 1, text: 'Câu "Nếu trời đẹp thì chúng ta đi cắm trại." biểu thị quan hệ gì?', opts: o4('Nguyên nhân – kết quả', 'Tương phản', 'Đồng thời', 'Điều kiện (giả thiết) – kết quả'), ans: 'D', why: 'Cặp "Nếu... thì..." nối điều kiện (giả thiết) với kết quả.' },
    { sec: 'Tương phản', name: 'Câu 3', pts: 1, text: 'Câu "Tuy nhà nghèo nhưng bạn ấy học rất giỏi." biểu thị quan hệ gì?', opts: o4('Tương phản', 'Nguyên nhân – kết quả', 'Điều kiện', 'Liệt kê'), ans: 'A', why: 'Cặp "Tuy... nhưng..." nối hai ý trái ngược nhau (tương phản).' },
    { sec: 'Điền cặp QHT', name: 'Câu 4', pts: 1, text: 'Điền cặp quan hệ từ chỉ nguyên nhân – kết quả: "______ chăm luyện tập ______ đội bóng lớp em đã thắng."', opts: o4('Nếu... thì...', 'Tuy... nhưng...', 'Nhờ... mà...', 'Chẳng những... mà...'), ans: 'C', why: '"Nhờ... mà..." biểu thị nguyên nhân tốt dẫn đến kết quả tốt.' },
    { sec: 'Xác định quan hệ', name: 'Câu 5', pts: 1, text: 'Câu "Hễ trời trở gió thì bà lại đau lưng." biểu thị quan hệ gì?', opts: o4('Tương phản', 'Nguyên nhân – kết quả', 'Điều kiện – kết quả', 'Tăng tiến'), ans: 'C', why: 'Cặp "Hễ... thì..." biểu thị quan hệ điều kiện – kết quả.' },
    { sec: 'Chọn cặp đúng', name: 'Câu 6', pts: 1, text: 'Câu nào dùng cặp quan hệ từ chỉ tương phản?', opts: o4('Mặc dù mệt nhưng bố vẫn làm xong việc.', 'Vì mệt nên bố nghỉ.', 'Nếu mệt thì bố nghỉ.', 'Nhờ khoẻ mà bố làm nhanh.'), ans: 'A', why: '"Mặc dù... nhưng..." là cặp quan hệ từ chỉ tương phản.' },
    { sec: 'Sửa lỗi', name: 'Câu 7', pts: 1, text: 'Câu nào dùng cặp quan hệ từ SAI?', opts: o4('Vì em cố gắng nên em tiến bộ.', 'Tuy em cố gắng nhưng chưa giỏi.', 'Nếu em cố gắng thì em sẽ giỏi.', 'Vì em cố gắng nhưng em tiến bộ.'), ans: 'D', why: 'Quan hệ nguyên nhân – kết quả phải là "Vì... nên...", không dùng "Vì... nhưng...".' },
    { sec: 'Điền cặp QHT', name: 'Câu 8', pts: 1, text: 'Điền cặp quan hệ từ tương phản: "______ đã cố gắng ______ Nam vẫn chưa đạt điểm cao."', opts: o4('Vì... nên...', 'Tuy... nhưng...', 'Nếu... thì...', 'Hễ... thì...'), ans: 'B', why: 'Hai vế trái ngược (cố gắng >< chưa đạt) nên dùng "Tuy... nhưng...".' },
    { sec: 'Xác định vế', name: 'Câu 9', pts: 1, text: 'Trong câu "Vì chăm chỉ nên Lan được khen.", vế chỉ kết quả là:', opts: o4('Vì chăm chỉ', 'chăm chỉ', 'được khen chăm', 'nên Lan được khen'), ans: 'D', why: 'Vế "nên Lan được khen" nêu kết quả; "Vì chăm chỉ" nêu nguyên nhân.' },
    { sec: 'Vận dụng', name: 'Câu 10', pts: 1, text: 'Ghép thành câu ghép chỉ điều kiện – kết quả từ ý "chăm học" và "đạt điểm cao":', opts: o4('Tuy chăm học nhưng điểm cao.', 'Nếu chăm học thì em sẽ đạt điểm cao.', 'Vì điểm cao nên chăm học.', 'Chăm học điểm cao em.'), ans: 'B', why: 'Dùng cặp "Nếu... thì..." nối điều kiện "chăm học" với kết quả "đạt điểm cao".' },
  ],
},

/* ═══════════ ĐỀ 20 — LIÊN KẾT CÂU (LẶP – THẾ – NỐI) ═══════════ */
{
  id: 8110, title: 'Đề 20 · Liên kết câu trong đoạn văn', time: 20,
  questions: [
    { sec: 'Phép thế', name: 'Câu 1', pts: 1, text: '"Hoa mai nở vàng rực. Loài hoa ấy báo hiệu mùa xuân." — dùng phép liên kết nào?', opts: o4('Phép lặp', 'Từ nối', 'Phép thế ("loài hoa ấy" thay "hoa mai")', 'Không liên kết'), ans: 'C', why: '"loài hoa ấy" thay thế cho "hoa mai" nên là phép thế.' },
    { sec: 'Phép lặp', name: 'Câu 2', pts: 1, text: '"Biển rất đẹp. Biển xanh trong nắng sớm." — dùng phép liên kết nào?', opts: o4('Phép lặp (lặp từ "biển")', 'Phép thế', 'Từ nối', 'Không liên kết'), ans: 'A', why: 'Từ "biển" được lặp lại ở câu sau nên là phép lặp.' },
    { sec: 'Từ nối', name: 'Câu 3', pts: 1, text: '"Trời đã tối. Vì vậy, chúng em ra về." — từ "vì vậy" là:', opts: o4('Từ nối chỉ quan hệ kết quả', 'Đại từ thay thế', 'Từ lặp lại', 'Danh từ'), ans: 'A', why: '"vì vậy" là từ ngữ nối, nêu kết quả của điều đã nói trước.' },
    { sec: 'Chọn từ nối', name: 'Câu 4', pts: 1, text: 'Điền từ nối chỉ thời gian: "Em thức dậy, đánh răng rửa mặt. ______, em ăn sáng."', opts: o4('Tuy nhiên', 'Vì vậy', 'Sau đó', 'Nhưng'), ans: 'C', why: '"Sau đó" nối các câu theo trình tự thời gian.' },
    { sec: 'Chọn từ nối', name: 'Câu 5', pts: 1, text: 'Điền từ nối chỉ tương phản: "Trời rất lạnh. ______, mọi người vẫn ra đồng làm việc."', opts: o4('Sau đó', 'Tuy nhiên', 'Vì thế', 'Đầu tiên'), ans: 'B', why: 'Hai câu trái ý nhau nên dùng từ nối tương phản "Tuy nhiên".' },
    { sec: 'Phép thế', name: 'Câu 6', pts: 1, text: 'Trong đoạn văn, để không lặp lại tên "Bác Hồ", ta có thể thay bằng:', opts: o4('nó, chúng', 'cái đó', 'ở đây', 'Người, Bác'), ans: 'D', why: 'Có thể thay bằng "Người", "Bác" — vừa liên kết vừa thể hiện sự kính trọng.' },
    { sec: 'Nhận biết', name: 'Câu 7', pts: 1, text: '"Cây gạo già mỗi năm lại nở hoa đỏ rực. Cây gạo ấy như ngọn đuốc giữa trời." — phép liên kết là:', opts: o4('Chỉ từ nối', 'Phép lặp và phép thế cùng dùng', 'Không liên kết', 'Đảo trật tự'), ans: 'B', why: 'Câu sau vừa lặp "cây gạo" vừa thêm "ấy" (thế) để liên kết với câu trước.' },
    { sec: 'Tác dụng', name: 'Câu 8', pts: 1, text: 'Nếu một đoạn văn thiếu liên kết thì sẽ thế nào?', opts: o4('Mạch lạc, hay hơn', 'Ngắn gọn hơn', 'Đúng chính tả hơn', 'Rời rạc, khó hiểu'), ans: 'D', why: 'Thiếu liên kết khiến các câu rời rạc, ý lộn xộn, khó hiểu.' },
    { sec: 'Từ nối', name: 'Câu 9', pts: 1, text: 'Từ nối nào dùng để liệt kê, thêm ý?', opts: o4('Ngoài ra', 'Tuy nhiên', 'Vì vậy', 'Trái lại'), ans: 'A', why: '"Ngoài ra" dùng để bổ sung, thêm ý (liệt kê).' },
    { sec: 'Vận dụng', name: 'Câu 10', pts: 1, text: 'Câu nào dùng phép thế để liên kết với câu "Lan là học sinh giỏi."?', opts: o4('Lan là học sinh giỏi thật.', 'Hôm nay trời đẹp.', 'Bạn ấy luôn giúp đỡ các bạn khác.', 'Con mèo đang ngủ.'), ans: 'C', why: '"Bạn ấy" thay thế cho "Lan", vừa liên kết vừa tránh lặp tên.' },
  ],
},

/* ═══════════ ĐỀ 21 — BIỆN PHÁP TU TỪ (SO SÁNH – NHÂN HOÁ – ĐIỆP TỪ) ═══════════ */
{
  id: 8111, title: 'Đề 21 · Biện pháp tu từ', time: 20,
  questions: [
    { sec: 'Điệp từ', name: 'Câu 1', pts: 1, text: 'Điệp từ (điệp ngữ) là biện pháp gì?', opts: o4('Đối chiếu hai sự vật', 'Gọi vật như người', 'Lặp lại một từ ngữ để nhấn mạnh, gợi cảm xúc', 'Nói giảm đi'), ans: 'C', why: 'Điệp từ là lặp lại có chủ ý một từ ngữ nhằm nhấn mạnh, tạo nhịp điệu, cảm xúc.' },
    { sec: 'Nhận biết', name: 'Câu 2', pts: 1, text: 'Câu "Trời xanh, cây xanh, đồng ruộng xanh." dùng biện pháp gì?', opts: o4('Điệp từ (lặp "xanh")', 'So sánh', 'Nhân hoá', 'Nói quá'), ans: 'A', why: 'Từ "xanh" được lặp lại nhiều lần để nhấn mạnh → điệp từ.' },
    { sec: 'Nhận biết', name: 'Câu 3', pts: 1, text: 'Câu "Cánh đồng rộng như tấm thảm khổng lồ." dùng biện pháp gì?', opts: o4('Nhân hoá', 'Điệp từ', 'Nói giảm', 'So sánh'), ans: 'D', why: 'So sánh "cánh đồng" với "tấm thảm khổng lồ" qua từ "như".' },
    { sec: 'Nhận biết', name: 'Câu 4', pts: 1, text: 'Câu "Bác kim giờ thận trọng nhích từng li." dùng biện pháp gì?', opts: o4('So sánh', 'Nhân hoá', 'Điệp từ', 'Nói quá'), ans: 'B', why: 'Gọi kim đồng hồ là "bác" và tả "thận trọng nhích" như người → nhân hoá.' },
    { sec: 'Phân biệt', name: 'Câu 5', pts: 1, text: 'Câu nào dùng biện pháp nhân hoá?', opts: o4('Giọt sương long lanh.', 'Có nhiều giọt sương.', 'Sương rơi nhiều.', 'Giọt sương nằm ngủ trên lá.'), ans: 'D', why: 'Tả giọt sương "nằm ngủ" như người → nhân hoá.' },
    { sec: 'Phân biệt', name: 'Câu 6', pts: 1, text: 'Câu nào dùng biện pháp so sánh?', opts: o4('Bé rất đáng yêu.', 'Da bé mịn như nhung.', 'Bé cười tươi.', 'Bé chạy nhanh.'), ans: 'B', why: 'So sánh "da bé" với "nhung" qua từ "như".' },
    { sec: 'Tác dụng', name: 'Câu 7', pts: 1, text: 'Biện pháp điệp từ có tác dụng gì?', opts: o4('Làm câu ngắn đi', 'Làm câu khó hiểu', 'Nhấn mạnh, tạo nhịp điệu cho câu văn, câu thơ', 'Không có tác dụng'), ans: 'C', why: 'Điệp từ nhấn mạnh ý, tạo nhịp điệu và tăng sức gợi cảm.' },
    { sec: 'Xác định', name: 'Câu 8', pts: 1, text: 'Trong câu "Đoàn kết, đoàn kết, đại đoàn kết.", từ được điệp lại là:', opts: o4('đoàn kết', 'đại', 'chúng ta', 'thành công'), ans: 'A', why: 'Cụm "đoàn kết" được lặp lại nhiều lần để nhấn mạnh.' },
    { sec: 'Nhân hoá', name: 'Câu 9', pts: 1, text: 'Cách nhân hoá nào được dùng trong "Chị ong nâu nâu nâu nâu"?', opts: o4('Gọi con vật bằng từ ngữ chỉ người ("chị")', 'So sánh với người', 'Nói quá kích thước', 'Lặp câu hỏi'), ans: 'A', why: 'Gọi ong bằng "chị" — dùng từ vốn để gọi người → nhân hoá.' },
    { sec: 'Cảm thụ', name: 'Câu 10', pts: 1, text: 'Các biện pháp so sánh, nhân hoá, điệp từ đều nhằm mục đích chung gì?', opts: o4('Làm bài văn dài hơn', 'Làm cho khó đọc', 'Làm câu văn, câu thơ sinh động, gợi hình, gợi cảm', 'Để đếm số từ'), ans: 'C', why: 'Các biện pháp tu từ giúp lời văn sinh động, giàu hình ảnh và cảm xúc.' },
  ],
},

/* ═══════════ ĐỀ 22 — CHÍNH TẢ ═══════════ */
{
  id: 8112, title: 'Đề 22 · Chính tả', time: 20,
  questions: [
    { sec: 'l / n', name: 'Câu 1', pts: 1, text: 'Chọn từ viết đúng chính tả:', opts: o4('nong nanh', 'long lanh', 'long nanh', 'nong lanh'), ans: 'B', why: 'Viết đúng là "long lanh".' },
    { sec: 'ch / tr', name: 'Câu 2', pts: 1, text: 'Chọn từ viết đúng chính tả:', opts: o4('chung thực', 'trung thựt', 'chun thực', 'trung thực'), ans: 'D', why: 'Viết đúng là "trung thực".' },
    { sec: 's / x', name: 'Câu 3', pts: 1, text: 'Chọn từ viết đúng chính tả:', opts: o4('xạch xẽ', 'sạch sẽ', 'sạch xẽ', 'xạch sẽ'), ans: 'B', why: 'Viết đúng là "sạch sẽ".' },
    { sec: 'r / d / gi', name: 'Câu 4', pts: 1, text: 'Chọn từ viết đúng chính tả:', opts: o4('dản dị', 'giản gị', 'rản dị', 'giản dị'), ans: 'D', why: 'Viết đúng là "giản dị".' },
    { sec: 'dấu hỏi / ngã', name: 'Câu 5', pts: 1, text: 'Chọn từ viết đúng chính tả:', opts: o4('suy nghĩ', 'suy nghỉ', 'suy nghị', 'suy ngĩ'), ans: 'A', why: 'Viết đúng là "suy nghĩ" (dấu ngã).' },
    { sec: 'dấu hỏi / ngã', name: 'Câu 6', pts: 1, text: 'Chọn từ viết đúng chính tả:', opts: o4('sạch sẻ, khoẻ mạnh', 'sạch sẽ, khỏe mạnh', 'sạch sẽ, khoẻ mạnh', 'sạch sẻ, khoẽ mạnh'), ans: 'C', why: 'Viết đúng: "sạch sẽ" (ngã), "khoẻ mạnh" (hỏi).' },
    { sec: 'c / k / q', name: 'Câu 7', pts: 1, text: 'Chọn từ viết đúng chính tả:', opts: o4('cả cuyết', 'koả kuyết', 'quả quyết', 'quả kuyết'), ans: 'C', why: 'Viết đúng là "quả quyết" (âm "cờ" đứng trước bán âm u viết là "qu").' },
    { sec: 'ng / ngh', name: 'Câu 8', pts: 1, text: 'Chọn từ viết đúng chính tả:', opts: o4('nghe nhạc', 'nge nhạc', 'nghe nhặc', 'nge nhặc'), ans: 'A', why: 'Trước e, ê, i viết "ngh"; viết đúng là "nghe nhạc".' },
    { sec: 'g / gh', name: 'Câu 9', pts: 1, text: 'Chọn từ viết đúng chính tả:', opts: o4('gi nhớ', 'gì nhớ', 'ghì nhớ', 'ghi nhớ'), ans: 'D', why: 'Trước e, ê, i viết "gh"; viết đúng là "ghi nhớ".' },
    { sec: 'iê / yê', name: 'Câu 10', pts: 1, text: 'Chọn từ viết đúng chính tả:', opts: o4('iêu thương', 'yêu thương', 'yiêu thương', 'yêu thươn'), ans: 'B', why: 'Viết đúng là "yêu thương".' },
  ],
},

/* ═══════════ ĐỀ 23 — MỞ RỘNG VỐN TỪ THEO CHỦ ĐIỂM ═══════════ */
{
  id: 8113, title: 'Đề 23 · Mở rộng vốn từ', time: 20,
  questions: [
    { sec: 'Tổ quốc', name: 'Câu 1', pts: 1, text: 'Từ nào thuộc chủ điểm "Tổ quốc"?', opts: o4('bàn ghế', 'nồi niêu', 'quần áo', 'non sông'), ans: 'D', why: '"non sông" gợi hình ảnh đất nước, thuộc chủ điểm Tổ quốc.' },
    { sec: 'Hoà bình', name: 'Câu 2', pts: 1, text: 'Từ nào cùng nghĩa với "hoà bình"?', opts: o4('chiến tranh', 'thái bình', 'loạn lạc', 'xung đột'), ans: 'B', why: '"thái bình" đồng nghĩa với "hoà bình".' },
    { sec: 'Thiên nhiên', name: 'Câu 3', pts: 1, text: 'Nhóm nào gồm toàn từ chỉ sự vật của thiên nhiên?', opts: o4('bút, thước, sách, vở', 'nồi, chảo, bát, đũa', 'sông, núi, biển, rừng', 'bàn, ghế, tủ, giường'), ans: 'C', why: '"sông, núi, biển, rừng" đều là sự vật của thiên nhiên.' },
    { sec: 'Hữu nghị', name: 'Câu 4', pts: 1, text: 'Tiếng "hữu" trong "hữu nghị" có nghĩa là:', opts: o4('bạn bè', 'có', 'phải', 'sông'), ans: 'A', why: '"hữu" trong "hữu nghị", "bằng hữu", "chiến hữu" nghĩa là bạn bè.' },
    { sec: 'Bảo vệ môi trường', name: 'Câu 5', pts: 1, text: 'Hành động nào bảo vệ môi trường?', opts: o4('Trồng cây, gom rác đúng nơi', 'Vứt rác xuống sông', 'Chặt phá rừng', 'Săn bắt chim thú'), ans: 'A', why: 'Trồng cây và bỏ rác đúng nơi quy định là hành động bảo vệ môi trường.' },
    { sec: 'Công dân', name: 'Câu 6', pts: 1, text: 'Từ "công dân" có nghĩa là:', opts: o4('Người đi làm công', 'Người sống ở nông thôn', 'Người dân của một nước, có quyền lợi và nghĩa vụ với đất nước', 'Người buôn bán'), ans: 'C', why: '"công dân" là người dân của một nước, có quyền và nghĩa vụ theo pháp luật.' },
    { sec: 'Truyền thống', name: 'Câu 7', pts: 1, text: 'Câu tục ngữ "Uống nước nhớ nguồn" nói về truyền thống gì?', opts: o4('Dũng cảm', 'Biết ơn', 'Cần cù', 'Đoàn kết'), ans: 'B', why: '"Uống nước nhớ nguồn" khuyên phải biết ơn người đã tạo ra thành quả cho mình.' },
    { sec: 'Nam và nữ', name: 'Câu 8', pts: 1, text: 'Từ nào chỉ phẩm chất đáng quý ở con người?', opts: o4('lười nhác', 'ích kỉ', 'gian dối', 'dũng cảm'), ans: 'D', why: '"dũng cảm" là phẩm chất tốt đẹp; các từ còn lại là thói xấu.' },
    { sec: 'Trẻ em', name: 'Câu 9', pts: 1, text: 'Thành ngữ "Trẻ người non dạ" nói về điều gì ở trẻ em?', opts: o4('Rất thông thái', 'Còn nhỏ, suy nghĩ chưa chín chắn', 'Đã trưởng thành', 'Rất khoẻ mạnh'), ans: 'B', why: '"Trẻ người non dạ" ý nói còn nhỏ, non nớt, suy nghĩ chưa chín chắn.' },
    { sec: 'Quyền và bổn phận', name: 'Câu 10', pts: 1, text: 'Bổn phận của học sinh với cha mẹ là:', opts: o4('Đòi hỏi và không nghe lời', 'Mặc kệ cha mẹ', 'Cãi lại cha mẹ', 'Kính trọng, vâng lời, giúp đỡ cha mẹ'), ans: 'D', why: 'Con cái có bổn phận kính trọng, vâng lời và giúp đỡ cha mẹ.' },
  ],
},

/* ═══════════ ĐỀ 24 — ĐỌC HIỂU NGỤ NGÔN "CHÚ BÉ CHĂN CỪU" ═══════════ */
{
  id: 8114, title: 'Đề 24 · Đọc hiểu truyện ngụ ngôn', time: 20,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV5_R8, text: 'Chú bé trong bài làm công việc gì?', opts: o4('Chăn cừu cho làng', 'Trồng lúa', 'Bắt cá', 'Đốn củi'), ans: 'A', why: 'Bài đọc: "Một chú bé chăn cừu thường ra đồng cỏ trông đàn cừu cho làng."' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV5_R8, text: 'Trò đùa của chú bé là gì?', opts: o4('Giấu đàn cừu đi', 'Trốn về nhà ngủ', 'Kêu toáng lên là có sói để lừa dân làng', 'Ném đá vào cừu'), ans: 'C', why: 'Bài đọc: chú "kêu toáng lên: Sói! Sói! Cứu tôi với!" để lừa mọi người.' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV5_R8, text: 'Lần đầu nghe kêu cứu, dân làng đã làm gì?', opts: o4('Không quan tâm', 'Cười chê chú bé', 'Vác gậy chạy tới cứu', 'Đuổi chú bé đi'), ans: 'C', why: 'Bài đọc: "Dân làng bỏ cả việc, vác gậy chạy tới".' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV5_R8, text: 'Khi sói đến thật, chuyện gì đã xảy ra?', opts: o4('Không ai tin, đàn cừu bị sói ăn thịt gần hết', 'Dân làng lại chạy đến cứu', 'Chú bé tự đuổi được sói', 'Sói bỏ đi ngay'), ans: 'A', why: 'Bài đọc: "lần này chẳng còn ai tin nữa. Đàn cừu... bị sói ăn thịt gần hết."' },
    { sec: 'Suy luận', name: 'Câu 5', pts: 1, read: TV5_R8, text: 'Vì sao lần cuối không ai tin lời chú bé?', opts: o4('Vì dân làng bận việc', 'Vì trời đã tối', 'Vì đường quá xa', 'Vì chú đã nói dối nhiều lần trước đó'), ans: 'D', why: 'Chú bé nhiều lần nói dối nên mất lòng tin, đến khi nói thật cũng không ai tin.' },
    { sec: 'Ý nghĩa', name: 'Câu 6', pts: 1, read: TV5_R8, text: 'Câu chuyện khuyên chúng ta điều gì?', opts: o4('Nên đùa giỡn thật nhiều', 'Không nên nói dối, phải trung thực', 'Không nên chăn cừu', 'Nên sống một mình'), ans: 'B', why: 'Truyện ngụ ngôn khuyên phải trung thực, nói dối nhiều sẽ mất lòng tin.' },
    { sec: 'Luyện từ', name: 'Câu 7', pts: 1, read: TV5_R8, text: 'Từ trái nghĩa với "nói dối" là:', opts: o4('nói to', 'nói nhỏ', 'nói nhiều', 'nói thật'), ans: 'D', why: '"nói dối" trái nghĩa với "nói thật".' },
    { sec: 'Luyện từ', name: 'Câu 8', pts: 1, read: TV5_R8, text: 'Câu "Sói đến thật, nó xông vào cắn đàn cừu." — từ "nó" thay cho:', opts: o4('chú bé', 'sói', 'dân làng', 'đàn cừu'), ans: 'B', why: '"nó" thay thế cho "sói" ở câu trước (phép thế).' },
    { sec: 'Luyện từ', name: 'Câu 9', pts: 1, read: TV5_R8, text: 'Câu "Chú bé kêu cứu nhưng chẳng ai tin." là câu:', opts: o4('Câu đơn', 'Câu hỏi', 'Câu ghép nối bằng quan hệ từ "nhưng"', 'Câu cảm'), ans: 'C', why: 'Hai vế "Chú bé kêu cứu" và "chẳng ai tin" nối bằng "nhưng" → câu ghép.' },
    { sec: 'Vận dụng', name: 'Câu 10', pts: 1, read: TV5_R8, text: 'Bài học rút ra cho bản thân em là gì?', opts: o4('Luôn trung thực để mọi người tin yêu', 'Cứ nói dối cho vui', 'Không cần giữ lời hứa', 'Thích trêu chọc người khác'), ans: 'A', why: 'Cần sống trung thực, giữ chữ tín thì mới được mọi người tin yêu, giúp đỡ.' },
  ],
},

/* ═══════════ ĐỀ 25 — ĐỌC HIỂU VĂN BẢN "ONG MẬT" ═══════════ */
{
  id: 8115, title: 'Đề 25 · Đọc hiểu văn bản thông tin', time: 20,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV5_R9, text: 'Ong mật sống như thế nào?', opts: o4('Sống thành đàn rất đông trong tổ', 'Sống đơn độc một mình', 'Sống dưới nước', 'Sống trong hang đá'), ans: 'A', why: 'Bài đọc: "Ong mật là loài côn trùng sống thành đàn rất đông trong tổ."' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV5_R9, text: 'Mỗi đàn ong có những loại ong nào?', opts: o4('Chỉ có ong chúa', 'Chỉ có ong thợ', 'Ong chúa, ong thợ và ong đực', 'Ong chúa và bướm'), ans: 'C', why: 'Bài đọc: "Mỗi đàn có một ong chúa, nhiều ong thợ và ong đực."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV5_R9, text: 'Ong thợ làm những công việc gì?', opts: o4('Chỉ nằm trong tổ', 'Hút mật hoa, lấy phấn, làm mật nuôi cả đàn', 'Chỉ đẻ trứng', 'Chỉ canh gác'), ans: 'B', why: 'Bài đọc: ong thợ "bay đi hút mật hoa, lấy phấn về nuôi cả đàn và làm nên những giọt mật".' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV5_R9, text: 'Khi bay từ hoa này sang hoa khác, ong còn giúp cây làm gì?', opts: o4('Rụng lá', 'Khô héo', 'Đổ ngã', 'Thụ phấn, kết trái'), ans: 'D', why: 'Bài đọc: "ong còn giúp cây thụ phấn, kết trái".' },
    { sec: 'Suy luận', name: 'Câu 5', pts: 1, read: TV5_R9, text: 'Vì sao nói ong mật có ích cho con người và cây cối?', opts: o4('Vì ong ăn hết sâu bọ có hại', 'Vì ong cho mật ngọt và giúp cây thụ phấn, kết nhiều quả', 'Vì ong biết hót hay', 'Vì ong làm tổ đẹp'), ans: 'B', why: 'Ong cho mật ngọt, lại giúp cây thụ phấn để có nhiều hoa thơm, quả ngọt.' },
    { sec: 'Luyện từ', name: 'Câu 6', pts: 1, read: TV5_R9, text: 'Từ "chăm chỉ" trong bài đồng nghĩa với từ nào?', opts: o4('lười biếng', 'chậm chạp', 'ồn ào', 'siêng năng'), ans: 'D', why: '"chăm chỉ" đồng nghĩa với "siêng năng".' },
    { sec: 'Luyện từ', name: 'Câu 7', pts: 1, read: TV5_R9, text: 'Trong câu "Ong thợ chăm chỉ bay đi hút mật.", chủ ngữ là:', opts: o4('Ong thợ', 'chăm chỉ', 'bay đi', 'hút mật'), ans: 'A', why: 'Chủ ngữ của câu là "Ong thợ".' },
    { sec: 'Luyện từ', name: 'Câu 8', pts: 1, read: TV5_R9, text: 'Từ "mật" trong "giọt mật" và "mật thư (thư bí mật)" là:', opts: o4('Từ nhiều nghĩa', 'Từ đồng nghĩa', 'Từ đồng âm', 'Từ trái nghĩa'), ans: 'C', why: '"mật" (chất ngọt) và "mật" (bí mật) nghĩa khác hẳn nhau → từ đồng âm.' },
    { sec: 'Luyện từ', name: 'Câu 9', pts: 1, read: TV5_R9, text: 'Câu "Nhờ có ong mà nhiều loài cây cho nhiều quả ngọt." dùng cặp quan hệ từ chỉ:', opts: o4('Tương phản', 'Điều kiện – kết quả', 'Nguyên nhân – kết quả', 'Tăng tiến'), ans: 'C', why: '"Nhờ... mà..." biểu thị nguyên nhân tốt dẫn đến kết quả tốt.' },
    { sec: 'Vận dụng', name: 'Câu 10', pts: 1, read: TV5_R9, text: 'Đức tính đáng học của ong thợ là gì?', opts: o4('Chăm chỉ, cần cù làm việc vì cả đàn', 'Lười biếng, ham chơi', 'Ích kỉ, chỉ lo mình', 'Cẩu thả'), ans: 'A', why: 'Ong thợ chăm chỉ, cần cù làm việc vì cả đàn — đức tính rất đáng học.' },
  ],
},

/* ═══════════ ĐỀ 26 — ĐỌC HIỂU THƠ "SẮC MÀU EM YÊU" ═══════════ */
{
  id: 8116, title: 'Đề 26 · Đọc hiểu thơ', time: 20,
  questions: [
    { sec: 'Đọc thơ', name: 'Câu 1', pts: 1, read: TV5_R10, text: 'Bài thơ nói về điều gì?', opts: o4('Các con vật trong rừng', 'Một chuyến đi chơi', 'Bữa cơm gia đình', 'Tình yêu của bạn nhỏ với những sắc màu'), ans: 'D', why: 'Bài thơ tên "Sắc màu em yêu", nói về tình yêu với các màu sắc.' },
    { sec: 'Đọc thơ', name: 'Câu 2', pts: 1, read: TV5_R10, text: 'Màu đỏ trong bài gắn với hình ảnh nào?', opts: o4('Đồng bằng, rừng núi', 'Máu con tim, lá cờ Tổ quốc, khăn quàng', 'Biển cả, bầu trời', 'Cánh đồng lúa chín'), ans: 'B', why: 'Bài thơ: "Em yêu màu đỏ: Như máu con tim, Lá cờ Tổ quốc, Khăn quàng đội viên".' },
    { sec: 'Đọc thơ', name: 'Câu 3', pts: 1, read: TV5_R10, text: 'Màu xanh trong bài gắn với hình ảnh nào?', opts: o4('Lá cờ, khăn quàng', 'Máu con tim', 'Ngọn lửa', 'Đồng bằng, rừng núi, biển, bầu trời'), ans: 'D', why: 'Bài thơ: "Em yêu màu xanh: Đồng bằng, rừng núi, Biển đầy cá tôm, Bầu trời cao vợi".' },
    { sec: 'Biện pháp', name: 'Câu 4', pts: 1, read: TV5_R10, text: 'Câu thơ nào dùng biện pháp so sánh?', opts: o4('Lá cờ Tổ quốc', 'Như máu con tim', 'Đồng bằng, rừng núi', 'Bầu trời cao vợi'), ans: 'B', why: '"Như máu con tim" dùng từ "như" để so sánh màu đỏ với máu con tim.' },
    { sec: 'Biện pháp', name: 'Câu 5', pts: 1, read: TV5_R10, text: 'Cụm từ "Em yêu màu..." được lặp lại nhằm mục đích gì?', opts: o4('Cho bài thơ dài ra', 'Gây khó hiểu', 'Nhấn mạnh tình yêu của bạn nhỏ (điệp ngữ)', 'Không có mục đích'), ans: 'C', why: 'Điệp ngữ "Em yêu màu..." nhấn mạnh tình yêu tha thiết của bạn nhỏ với sắc màu.' },
    { sec: 'Luyện từ', name: 'Câu 6', pts: 1, read: TV5_R10, text: 'Từ "cao vợi" trong "Bầu trời cao vợi" gợi tả điều gì?', opts: o4('Bầu trời rất cao, xa tít', 'Bầu trời thấp', 'Bầu trời nhỏ hẹp', 'Bầu trời gần'), ans: 'A', why: '"cao vợi" gợi tả bầu trời cao thăm thẳm, xa tít tắp.' },
    { sec: 'Luyện từ', name: 'Câu 7', pts: 1, read: TV5_R10, text: 'Từ "Tổ quốc" trong bài đồng nghĩa với:', opts: o4('đất nước', 'thành phố', 'ngôi trường', 'khu phố'), ans: 'A', why: '"Tổ quốc" đồng nghĩa với "đất nước".' },
    { sec: 'Luyện từ', name: 'Câu 8', pts: 1, read: TV5_R10, text: 'Nhóm từ "đồng bằng, rừng núi, biển, bầu trời" đều chỉ:', opts: o4('Đồ dùng học tập', 'Con vật nuôi', 'Cảnh vật thiên nhiên của đất nước', 'Món ăn'), ans: 'C', why: 'Đó đều là những cảnh vật thiên nhiên rộng lớn của đất nước.' },
    { sec: 'Cảm thụ', name: 'Câu 9', pts: 1, read: TV5_R10, text: 'Qua các sắc màu, bạn nhỏ thể hiện tình cảm gì?', opts: o4('Sự chán nản', 'Tình yêu quê hương, đất nước', 'Nỗi buồn cô đơn', 'Sự sợ hãi'), ans: 'B', why: 'Yêu từng sắc màu gắn với Tổ quốc, thiên nhiên chính là yêu quê hương, đất nước.' },
    { sec: 'Vận dụng', name: 'Câu 10', pts: 1, read: TV5_R10, text: 'Khăn quàng đỏ của đội viên tượng trưng cho điều gì?', opts: o4('Một chiếc khăn thường', 'Một món đồ chơi', 'Một tấm vải cũ', 'Một phần lá cờ Tổ quốc'), ans: 'D', why: 'Khăn quàng đỏ tượng trưng cho một phần lá cờ Tổ quốc, niềm tự hào của đội viên.' },
  ],
},

/* ═══════════ ĐỀ 27 — ÔN TẬP TỔNG HỢP (1) ═══════════ */
{
  id: 8117, title: 'Đề 27 · Ôn tập tổng hợp (1)', time: 20,
  questions: [
    { sec: 'Đồng nghĩa', name: 'Câu 1', pts: 1, text: 'Từ đồng nghĩa với "bao la" là:', opts: o4('chật hẹp', 'mênh mông', 'nhỏ bé', 'gần gũi'), ans: 'B', why: '"bao la" đồng nghĩa với "mênh mông".' },
    { sec: 'Trái nghĩa', name: 'Câu 2', pts: 1, text: 'Từ trái nghĩa với "dũng cảm" là:', opts: o4('gan dạ', 'anh hùng', 'kiên cường', 'hèn nhát'), ans: 'D', why: '"dũng cảm" trái nghĩa với "hèn nhát"; các từ kia đồng nghĩa với nó.' },
    { sec: 'Nhiều nghĩa', name: 'Câu 3', pts: 1, text: '"Mũi" trong "mũi thuyền" là nghĩa gì?', opts: o4('Nghĩa chuyển (phần nhô ra phía trước)', 'Nghĩa gốc (bộ phận trên mặt)', 'Nghĩa trái ngược', 'Không có nghĩa'), ans: 'A', why: '"mũi thuyền" là nghĩa chuyển, chỉ phần nhô ra phía trước của thuyền.' },
    { sec: 'Đồng âm', name: 'Câu 4', pts: 1, text: '"Chín" trong "quả chín" và "chín điểm" là:', opts: o4('Từ nhiều nghĩa', 'Từ đồng nghĩa', 'Từ đồng âm', 'Từ trái nghĩa'), ans: 'C', why: '"chín" (trái đã già) và "chín" (số 9) nghĩa khác hẳn nhau → từ đồng âm.' },
    { sec: 'Đại từ', name: 'Câu 5', pts: 1, text: 'Trong câu "Hoa rất chăm học nên cô giáo khen bạn ấy.", "bạn ấy" thay cho:', opts: o4('cô giáo', 'người khác', 'Hoa', 'lớp học'), ans: 'C', why: '"bạn ấy" thay thế cho "Hoa" để tránh lặp tên.' },
    { sec: 'Quan hệ từ', name: 'Câu 6', pts: 1, text: 'Điền quan hệ từ: "Trời đã khuya ______ em vẫn ngồi học bài."', opts: o4('nhưng', 'nên', 'vì', 'và'), ans: 'A', why: 'Hai ý trái ngược nhau nên dùng quan hệ từ tương phản "nhưng".' },
    { sec: 'Câu ghép', name: 'Câu 7', pts: 1, text: 'Câu nào là câu ghép?', opts: o4('Chú gà trống gáy vang.', 'Bầu trời cao và trong.', 'Em yêu quê hương mình.', 'Mặt trời mọc, chim chóc hót vang.'), ans: 'D', why: '"Mặt trời mọc, chim chóc hót vang." có hai vế đủ chủ – vị nên là câu ghép.' },
    { sec: 'Biện pháp', name: 'Câu 8', pts: 1, text: 'Câu "Dòng sông mặc áo lụa đào." dùng biện pháp gì?', opts: o4('So sánh', 'Nhân hoá', 'Điệp từ', 'Nói giảm'), ans: 'B', why: 'Tả dòng sông "mặc áo" như người → nhân hoá.' },
    { sec: 'Liên kết câu', name: 'Câu 9', pts: 1, text: '"Sếu là loài chim quý. Chúng thường bay thành đàn." — dùng phép:', opts: o4('Phép lặp', 'Từ nối', 'Không liên kết', 'Phép thế ("chúng" thay "sếu")'), ans: 'D', why: '"chúng" thay thế cho "sếu" nên là phép thế.' },
    { sec: 'Dấu câu', name: 'Câu 10', pts: 1, text: 'Câu "Ôi, cảnh biển đẹp quá!" kết thúc bằng dấu gì và là câu gì?', opts: o4('Dấu chấm — câu kể', 'Dấu chấm than — câu cảm', 'Dấu chấm hỏi — câu hỏi', 'Dấu phẩy — câu ghép'), ans: 'B', why: 'Câu bộc lộ cảm xúc (câu cảm) kết thúc bằng dấu chấm than.' },
  ],
},

/* ═══════════ ĐỀ 28 — ÔN TẬP TỔNG HỢP (2) ═══════════ */
{
  id: 8118, title: 'Đề 28 · Ôn tập tổng hợp (2)', time: 20,
  questions: [
    { sec: 'Đồng nghĩa', name: 'Câu 1', pts: 1, text: 'Nhóm nào gồm toàn từ đồng nghĩa với "đẹp"?', opts: o4('xấu, tệ, dở', 'to, nhỏ, vừa', 'xinh, xinh đẹp, xinh xắn', 'cao, thấp, dài'), ans: 'C', why: '"xinh, xinh đẹp, xinh xắn" đều gần nghĩa với "đẹp".' },
    { sec: 'Trái nghĩa', name: 'Câu 2', pts: 1, text: 'Điền từ trái nghĩa: "Lá lành đùm lá ______."', opts: o4('rách', 'xanh', 'to', 'non'), ans: 'A', why: 'Thành ngữ "Lá lành đùm lá rách" có cặp trái nghĩa "lành – rách".' },
    { sec: 'Từ loại', name: 'Câu 3', pts: 1, text: 'Từ "học tập" thuộc từ loại nào?', opts: o4('Động từ', 'Danh từ', 'Tính từ', 'Quan hệ từ'), ans: 'A', why: '"học tập" chỉ hoạt động nên là động từ.' },
    { sec: 'Đại từ', name: 'Câu 4', pts: 1, text: 'Từ nào là đại từ trong câu "Mọi người đều yêu quý nó."?', opts: o4('mọi người', 'yêu quý', 'nó', 'đều'), ans: 'C', why: '"nó" là đại từ (thay cho một sự vật đã nhắc đến).' },
    { sec: 'Cặp QHT', name: 'Câu 5', pts: 1, text: 'Cặp "Không những... mà còn..." biểu thị quan hệ gì?', opts: o4('Tương phản', 'Tăng tiến', 'Nguyên nhân – kết quả', 'Điều kiện'), ans: 'B', why: '"Không những... mà còn..." biểu thị quan hệ tăng tiến.' },
    { sec: 'Câu ghép', name: 'Câu 6', pts: 1, text: 'Câu "Nếu em cố gắng thì em sẽ thành công." có quan hệ gì giữa các vế?', opts: o4('Nguyên nhân – kết quả', 'Tương phản', 'Liệt kê', 'Điều kiện – kết quả'), ans: 'D', why: 'Cặp "Nếu... thì..." biểu thị quan hệ điều kiện – kết quả.' },
    { sec: 'Biện pháp', name: 'Câu 7', pts: 1, text: 'Câu "Cánh diều mềm mại như cánh bướm." dùng biện pháp gì?', opts: o4('Nhân hoá', 'So sánh', 'Điệp từ', 'Nói quá'), ans: 'B', why: 'So sánh "cánh diều" với "cánh bướm" qua từ "như".' },
    { sec: 'Biện pháp', name: 'Câu 8', pts: 1, text: 'Câu "Vườn cây lại đầy tiếng chim và bóng chim bay nhảy." — từ "chim" lặp lại là biện pháp:', opts: o4('So sánh', 'Nhân hoá', 'Nói giảm', 'Điệp từ'), ans: 'D', why: 'Việc lặp lại từ "chim" để nhấn mạnh là biện pháp điệp từ.' },
    { sec: 'Chính tả', name: 'Câu 9', pts: 1, text: 'Chọn từ viết đúng chính tả:', opts: o4('rực rỡ', 'dực dỡ', 'rực dỡ', 'giực rỡ'), ans: 'A', why: 'Viết đúng là "rực rỡ".' },
    { sec: 'Dấu câu', name: 'Câu 10', pts: 1, text: 'Câu "Mẹ hỏi: Con đã làm bài xong chưa?" — dấu hai chấm dùng để:', opts: o4('Kết thúc câu', 'Liệt kê', 'Báo hiệu lời nói trực tiếp', 'Ngăn cách các vế'), ans: 'C', why: 'Dấu hai chấm báo hiệu lời nói trực tiếp của mẹ theo sau.' },
  ],
},

/* ═══════════ ĐỀ 29 — ĐỌC HIỂU TRUYỆN "SỰ TÍCH CÂY VÚ SỮA" ═══════════ */
{
  id: 8119, title: 'Đề 29 · Đọc hiểu truyện', time: 20,
  questions: [
    { sec: 'Đọc hiểu', name: 'Câu 1', pts: 1, read: TV5_R11, text: 'Vì sao cậu bé bỏ nhà ra đi?', opts: o4('Vì đi tìm kho báu', 'Vì đi học xa', 'Vì ham chơi, bị mẹ mắng', 'Vì đi thăm bà'), ans: 'C', why: 'Bài đọc: cậu bé "ham chơi, bị mẹ mắng liền bỏ nhà ra đi".' },
    { sec: 'Đọc hiểu', name: 'Câu 2', pts: 1, read: TV5_R11, text: 'Khi nào cậu bé mới nhớ đến mẹ?', opts: o4('Khi đói khát, la cà khắp nơi', 'Khi được nhiều tiền', 'Khi gặp bạn cũ', 'Khi trời mưa'), ans: 'A', why: 'Bài đọc: "Cậu la cà khắp nơi, đói khát mới nhớ đến mẹ và tìm đường về."' },
    { sec: 'Đọc hiểu', name: 'Câu 3', pts: 1, read: TV5_R11, text: 'Về đến nhà, cậu bé thấy gì trong vườn?', opts: o4('Mẹ đang chờ', 'Một hũ vàng', 'Đàn gà con', 'Một cây lạ'), ans: 'D', why: 'Bài đọc: cậu "chẳng thấy mẹ đâu, chỉ thấy trong vườn có một cây lạ".' },
    { sec: 'Đọc hiểu', name: 'Câu 4', pts: 1, read: TV5_R11, text: 'Điều kì lạ gì đã xảy ra khi cậu ôm cây khóc?', opts: o4('Cây biến mất', 'Cây xoà cành ôm cậu, quả nứt ra dòng sữa thơm như sữa mẹ', 'Cây ra đầy tiền vàng', 'Cây bốc cháy'), ans: 'B', why: 'Bài đọc: "cây xoà cành ôm cậu, một quả... nứt ra dòng sữa trắng ngọt thơm như sữa mẹ".' },
    { sec: 'Suy luận', name: 'Câu 5', pts: 1, read: TV5_R11, text: 'Cây lạ trong vườn chính là ai hoá thành?', opts: o4('Người cha', 'Bà ngoại', 'Một ông tiên', 'Người mẹ hiền'), ans: 'D', why: 'Bài đọc: "Cậu hiểu ra: cây chính là mẹ hiền đã hoá thành."' },
    { sec: 'Ý nghĩa', name: 'Câu 6', pts: 1, read: TV5_R11, text: 'Câu chuyện khuyên chúng ta điều gì?', opts: o4('Nên bỏ nhà đi chơi', 'Phải biết yêu thương, vâng lời cha mẹ', 'Không cần nghe lời mẹ', 'Thích đi la cà'), ans: 'B', why: 'Truyện nhắc nhở phải yêu thương, vâng lời cha mẹ, đừng để hối hận muộn màng.' },
    { sec: 'Luyện từ', name: 'Câu 7', pts: 1, read: TV5_R11, text: 'Từ "hiền" trong "mẹ hiền" đồng nghĩa với:', opts: o4('dữ tợn', 'nóng nảy', 'hiền từ', 'độc ác'), ans: 'C', why: '"hiền" đồng nghĩa với "hiền từ"; các từ kia trái nghĩa.' },
    { sec: 'Luyện từ', name: 'Câu 8', pts: 1, read: TV5_R11, text: 'Trong câu "Cậu ôm lấy cây mà khóc.", từ "cậu" là:', opts: o4('Đại từ (thay cho cậu bé)', 'Quan hệ từ', 'Động từ', 'Tính từ'), ans: 'A', why: '"cậu" thay cho "cậu bé" đã nhắc đến trước đó, là đại từ.' },
    { sec: 'Luyện từ', name: 'Câu 9', pts: 1, read: TV5_R11, text: 'Câu "Cây xoà cành và một quả rơi vào tay cậu." là câu:', opts: o4('Câu ghép nối bằng quan hệ từ "và"', 'Câu đơn', 'Câu hỏi', 'Câu khiến'), ans: 'A', why: 'Hai vế "Cây xoà cành" và "một quả rơi vào tay cậu" nối bằng "và" → câu ghép.' },
    { sec: 'Vận dụng', name: 'Câu 10', pts: 1, read: TV5_R11, text: 'Chi tiết "dòng sữa thơm như sữa mẹ" gợi cho em cảm nhận gì?', opts: o4('Cây rất cao lớn', 'Vườn rất rộng', 'Tình mẹ bao la, ngọt ngào, luôn dành cho con', 'Trời sắp mưa'), ans: 'C', why: 'Dòng sữa ngọt thơm như sữa mẹ tượng trưng cho tình mẹ ấm áp, bao la.' },
  ],
},

/* ═══════════ ĐỀ 30 — ÔN TẬP TỔNG HỢP (3) ═══════════ */
{
  id: 8120, title: 'Đề 30 · Ôn tập tổng hợp (3)', time: 20,
  questions: [
    { sec: 'Đồng nghĩa', name: 'Câu 1', pts: 1, text: 'Từ đồng nghĩa với "cần cù" là:', opts: o4('lười nhác', 'chăm chỉ', 'chậm chạp', 'ham chơi'), ans: 'B', why: '"cần cù" đồng nghĩa với "chăm chỉ".' },
    { sec: 'Trái nghĩa', name: 'Câu 2', pts: 1, text: 'Từ trái nghĩa với "rộng" là:', opts: o4('to', 'dài', 'lớn', 'hẹp'), ans: 'D', why: '"rộng" trái nghĩa với "hẹp".' },
    { sec: 'Nhiều nghĩa', name: 'Câu 3', pts: 1, text: '"Lá" trong "lá cây", "lá phổi", "lá cờ" là:', opts: o4('Từ đồng âm', 'Từ nhiều nghĩa', 'Từ đồng nghĩa', 'Từ trái nghĩa'), ans: 'B', why: 'Các nghĩa của "lá" đều chỉ vật mỏng, dẹt — có liên quan → từ nhiều nghĩa.' },
    { sec: 'Đại từ', name: 'Câu 4', pts: 1, text: 'Câu nào dùng đại từ để thay thế, tránh lặp?', opts: o4('Nam học giỏi. Nam hát rất hay.', 'Trời đẹp. Nắng vàng.', 'Em thích hoa hồng.', 'Nam học giỏi. Cậu ấy còn hát rất hay.'), ans: 'D', why: '"Cậu ấy" thay cho "Nam" giúp câu sau không lặp lại tên.' },
    { sec: 'Câu ghép', name: 'Câu 5', pts: 1, text: 'Câu "Tuy còn nhỏ nhưng em đã biết giúp mẹ." biểu thị quan hệ:', opts: o4('Tương phản', 'Nguyên nhân – kết quả', 'Điều kiện – kết quả', 'Tăng tiến'), ans: 'A', why: 'Cặp "Tuy... nhưng..." biểu thị quan hệ tương phản.' },
    { sec: 'Liên kết câu', name: 'Câu 6', pts: 1, text: 'Từ nối "Vì thế" dùng để chỉ quan hệ gì giữa các câu?', opts: o4('Thời gian', 'Tương phản', 'Kết quả', 'Liệt kê'), ans: 'C', why: '"Vì thế" nối câu nêu kết quả của điều đã nói trước đó.' },
    { sec: 'Biện pháp', name: 'Câu 7', pts: 1, text: 'Câu "Những ngôi sao thức ngoài kia." dùng biện pháp gì?', opts: o4('So sánh', 'Điệp từ', 'Nhân hoá', 'Nói quá'), ans: 'C', why: 'Tả ngôi sao "thức" như con người → nhân hoá.' },
    { sec: 'Biện pháp', name: 'Câu 8', pts: 1, text: 'Câu "Quê hương là chùm khế ngọt." dùng biện pháp gì?', opts: o4('So sánh', 'Nhân hoá', 'Điệp từ', 'Nói giảm'), ans: 'A', why: 'So sánh "quê hương" với "chùm khế ngọt" qua từ "là".' },
    { sec: 'Chính tả', name: 'Câu 9', pts: 1, text: 'Chọn từ viết đúng chính tả:', opts: o4('ngiêng ngả', 'nghiêng ngã', 'ngiêng ngã', 'nghiêng ngả'), ans: 'D', why: 'Viết đúng là "nghiêng ngả" (ngh trước iê; dấu hỏi ở "ngả").' },
    { sec: 'Dấu câu', name: 'Câu 10', pts: 1, text: 'Câu "Chao ôi, bức tranh mới đẹp làm sao!" là câu gì?', opts: o4('Câu kể', 'Câu cảm', 'Câu hỏi', 'Câu khiến'), ans: 'B', why: 'Câu bộc lộ cảm xúc, kết thúc bằng dấu chấm than nên là câu cảm.' },
  ],
},

];

SUBJECTS.push({
  id: 'tviet5', name: 'Tiếng Việt', short: 'Tiếng Việt 5', icon: '📖', grade: 5,
  exams: TV5_EXAMS, ready: true,
  heroTitle: 'Tiếng Việt lớp 5 — đọc hiểu, từ đồng nghĩa – trái nghĩa – nhiều nghĩa, câu ghép và liên kết câu',
  heroMeta: '📚 30 đề &nbsp;•&nbsp; 300 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; bám chương trình GDPT 2018',
});
