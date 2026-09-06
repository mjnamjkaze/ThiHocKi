// TIẾNG VIỆT — LỚP 5 (GDPT 2018)
// 10 đề × 10 câu = 100 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// Bám chương trình: đọc hiểu (truyện, thơ, văn bản thông tin); từ đồng nghĩa – trái nghĩa;
// từ đồng âm – từ nhiều nghĩa; đại từ – quan hệ từ; câu ghép (các vế và cách nối);
// liên kết câu (lặp – thế – nối); biện pháp so sánh, nhân hoá; dấu câu.

const TV5_R1 = '<b>Những hạt thóc giống</b> <i>(kể lại)</i><br>Nhà vua muốn chọn người nối ngôi. Ngài phát cho mỗi đứa trẻ một hạt thóc giống và hẹn: một năm sau, ai trồng được cây tốt nhất sẽ được chọn. Cậu bé Chôm chăm chỉ gieo hạt, ngày ngày tưới nước, nhưng hạt không nảy mầm. Đến hẹn, mọi người mang những chậu cây tươi tốt đến, chỉ riêng Chôm mang chậu đất trống và thành thật kể mọi chuyện. Nhà vua mỉm cười: “Ta đã luộc chín tất cả hạt giống. Chỉ Chôm là người trung thực.” Và Chôm được chọn nối ngôi.';
const TV5_R2 = '<b>Người gác rừng tí hon</b> <i>(rút gọn)</i><br>Ba của bạn nhỏ làm nghề gác rừng. Một hôm đi tuần, bạn phát hiện dấu chân người lạ và tiếng bàn bạc của mấy kẻ trộm gỗ. Bạn lặng lẽ chạy về, gọi điện báo cho các chú công an. Nhờ vậy, bọn trộm gỗ bị bắt, cánh rừng được giữ bình yên.';
const TV5_R3 = '<b>Hạt gạo làng ta</b> <i>(trích — Trần Đăng Khoa)</i><br>Hạt gạo làng ta<br>Có vị phù sa<br>Của sông Kinh Thầy<br>Có hương sen thơm<br>Trong hồ nước đầy<br>Có lời mẹ hát<br>Ngọt bùi đắng cay...';
const TV5_R4 = '<b>Rừng ngập mặn</b><br>Rừng ngập mặn mọc ở vùng ven biển, nơi có nước mặn và bùn lầy. Cây đước, cây mắm có bộ rễ chằng chịt giúp giữ đất, chắn sóng, chống xói lở bờ biển. Rừng ngập mặn còn là nơi sinh sống của nhiều loài tôm, cua, cá và chim.';

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

];

SUBJECTS.push({
  id: 'tviet5', name: 'Tiếng Việt', short: 'Tiếng Việt 5', icon: '📖', grade: 5,
  exams: TV5_EXAMS, ready: true,
  heroTitle: 'Tiếng Việt lớp 5 — đọc hiểu, từ đồng nghĩa – trái nghĩa – nhiều nghĩa, câu ghép và liên kết câu',
  heroMeta: '📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; bám chương trình GDPT 2018',
});
