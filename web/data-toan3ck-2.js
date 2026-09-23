// ĐỀ KIỂM TRA CUỐI HỌC KÌ II (CUỐI NĂM) — TOÁN LỚP 3 (chương trình GDPT 2018) — TRỌN ĐỀ, id 3806–3810.
// Chép từ file đề gốc (Word/PDF) do chính các trường đăng trên cổng thông tin điện tử của trường:
//   3806  TH Long Biên (Q. Long Biên, Hà Nội) 2023–2024 — PDF
//         https://thlongbien.hanoi.edu.vn/de-kiem-tra-dinh-ki/de-kiem-tra-mon-toan-lop-3-cuoi-hoc-ki-2-nam-hoc-2023-2024/ctmb/17257/895744
//   3807  TH Đại Hà (xã Kiến Hưng, Hải Phòng) 2025–2026 — PDF có ma trận + đáp án
//         https://thdaiha.haiphong.edu.vn/toan-3/de-kiem-tra-toan-cuoi-hoc-ki-2-nam-hoc-2025-2026/ct/46494/637899
//   3808  TH Đồng Hòa (Hải Phòng) 2025–2026 — PDF, không kèm đáp án
//         https://thdonghoa.haiphong.edu.vn/de-kiem-tra/de-kiem-tra-cuoi-nam-mon-toan-lop-3-nam-hoc-2025-2026/ct/18909/681990
//   3809  TH Minh Đức (Tiên Lãng, Hải Phòng) 2025–2026 — Word có đáp án
//         https://thminhductienlang.haiphong.edu.vn/de-kiem-tra/de-kiem-tra-toan-3-hoc-ki-2-nam-hoc-2025-2026/ct/29112/676331
//   3810  TH Vinh Quang (huyện Vĩnh Bảo, Hải Phòng) 2024–2025 — Word (khảo sát chất lượng cuối năm) có ma trận + đáp án
//         https://thvinhquang.haiphong.edu.vn/nam-hoc-2024-2025/de-kscl-hkii-mon-toan-khoi-3-tieu-hoc-vinh-quang/ct/29870/399529
// Mọi đáp án đã được giải lại (khớp đáp án của trường ở 3807, 3809, 3810). 3806 và 3808: file của
// trường không kèm đáp án — tự giải từng câu.
// Chuyển thể:
//   3806 Bài 4: hình ảnh hộp màu / hộp bút / cái kéo → viết thành chữ trong bảng (giữ nguyên số liệu).
//   3808 Câu 3a: vẽ lại hai đồng hồ bằng SVG (3 giờ 20 phút; 7 giờ 55 phút — đo theo góc kim của ảnh gốc).
//   3808 Câu 5a: ảnh minh hoạ bị lỗi trong file gốc (khung trống) — bỏ, bảng số liệu đủ để trả lời.
//   3808 Câu 10b: vẽ lại ba cân thăng bằng bằng SVG, đúng số hình của đề gốc.
//   3810 Câu 7: phân số bị mất khi xuất file ("chiều rộng bằng … chiều dài"); đáp án của trường là 80 m
//         ⇒ chiều rộng = 10 m = 1/3 chiều dài — ghi lại "1/3".
// Kiểm định lần 2 (đối chiếu lại file gốc của trường; giải lại toàn bộ 86 câu):
//   3810 Câu 7: mở lại file Word gốc — phân số là công thức Word (OMML) <m:f> tử 1, mẫu 3 ⇒ đúng "1/3"
//         theo đề gốc (không phải suy ngược).
//   3806 Bài 4: đếm lại ảnh trong PDF gốc — dòng 1: 2 hộp màu + 1 kéo; dòng 2: 1 hộp bút + 2 kéo;
//         dòng 3: kéo + hộp màu + hộp bút ⇒ 20 000 / 30 000 / 15 000 đồng, khớp.
//   3808 Câu 3a: đo lại góc kim trên ảnh gốc — ĐH1: kim giờ ≈ 100°, kim phút ≈ 123° ⇒ 3 giờ 20 phút;
//         ĐH2: kim giờ ≈ 239°, kim phút ≈ 322° (ngay sát số 11) ⇒ 7 giờ 55 phút; SVG vẽ đúng 3:20 và 7:55.
//         Thêm alt "8 giờ kém 5".
//   3808 Câu 10b: đếm lại hình trên ảnh gốc (2 vuông + 2 tròn = 3 tam giác; 1 tam giác = 4 tròn) — khớp SVG.

(() => {
const I = 'assets/ck3/';
/* Đáp án số: thêm cách viết không có dấu cách phân lớp (51 610 → 51610). */
const N = (a, ...more) => {
  const plain = a.replace(/(\d) (?=\d)/g, '$1');
  return { ans: a, alts: [...new Set([plain, ...more].filter(x => x !== a))] };
};

TOAN3CK.push(
/* ===================== 3806 — TH LONG BIÊN (HÀ NỘI) 2023–2024 ===================== */
{
  id: 3806, title: 'CK2 · TH Long Biên (Hà Nội) 2023–2024', time: 35, sem: 2,
  src: 'https://thlongbien.hanoi.edu.vn/de-kiem-tra-dinh-ki/de-kiem-tra-mon-toan-lop-3-cuoi-hoc-ki-2-nam-hoc-2023-2024/ctmb/17257/895744',
  questions: [
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 1', pts: 0.5,
      text: 'Số gồm 7 vạn, 8 trăm và 3 đơn vị được viết là:',
      opts: o4('70 830', '78 003', '78 300', '70 803'), ans: 'D',
      why: '7 vạn = 7 chục nghìn. Số có 7 chục nghìn, 0 nghìn, 8 trăm, 0 chục, 3 đơn vị: 70 803.' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 2', pts: 0.5,
      text: 'Làm tròn số 5 490 đến hàng nghìn, ta được:',
      opts: o4('5 000', '5 500', '6 000', '5 400'), ans: 'A',
      why: 'Xét chữ số hàng trăm: 4 < 5 nên làm tròn xuống: 5 490 ≈ 5 000.' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 3', pts: 0.5,
      text: 'Kết quả của phép tính: XX + IX – XII = ? là:',
      opts: o4('XI', 'VII', 'XVII', 'XVI'), ans: 'C',
      why: 'XX = 20, IX = 9, XII = 12. 20 + 9 – 12 = 17 = XVII.' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 4', pts: 0.5,
      text: '5km 2m = …… m',
      opts: o4('52', '5020', '5002', '502'), ans: 'C',
      why: '5 km = 5 000 m; 5 000 m + 2 m = 5 002 m.' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 5', pts: 0.5,
      text: 'Diện tích hình chữ nhật có chiều dài 2dm, chiều rộng 8cm là:',
      opts: o4('16cm²', '160cm²', '160cm', '16dm'), ans: 'B',
      why: 'Đổi 2 dm = 20 cm. Diện tích = 20 × 8 = 160 (cm²). Diện tích phải có đơn vị cm², không phải cm.' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 6', pts: 0.5,
      text: 'Trong một tháng, chủ nhật đầu tháng là ngày 3 thì chủ nhật tuần thứ ba trong tháng đó là ngày bao nhiêu?',
      opts: o4('7', '17', '10', '24'), ans: 'B',
      why: 'Các chủ nhật cách nhau 7 ngày: chủ nhật thứ nhất ngày 3, thứ hai ngày 3 + 7 = 10, thứ ba ngày 10 + 7 = 17.' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 7a', pts: 0.25,
      text: 'Đúng hay sai?<br><i>Mẹ nhờ Minh mở cửa nhưng chùm chìa khoá mẹ đưa có 3 chìa giống nhau. Trong 3 chìa đó có 1 chìa mở được ổ khoá. Minh thử các chìa để mở khoá.</i><br>Khả năng xảy ra: <b>Minh có thể mở được cửa ở lần thử đầu tiên.</b>',
      opts: DS, ans: 'A',
      why: 'Đúng — nếu Minh cầm trúng chiếc chìa mở được khoá ngay lần đầu thì cửa mở, nên việc này CÓ THỂ xảy ra.' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 7b', pts: 0.25,
      text: 'Đúng hay sai?<br><i>Mẹ nhờ Minh mở cửa nhưng chùm chìa khoá mẹ đưa có 3 chìa giống nhau. Trong 3 chìa đó có 1 chìa mở được ổ khoá. Minh thử các chìa để mở khoá.</i><br>Khả năng xảy ra: <b>Minh chắc chắn mở được cửa ở lần thử đầu tiên.</b>',
      opts: DS, ans: 'B',
      why: 'Sai — 3 chìa giống nhau, Minh có thể cầm phải một trong 2 chìa không mở được, nên không CHẮC CHẮN mở được ngay lần đầu.' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 8', pts: 0.5,
      text: 'Mai bắt đầu đi từ nhà đến trường lúc 7 giờ 20 phút, Mai đến trường lúc 8 giờ kém 25 phút. Mai đi từ nhà đến trường hết số phút là:',
      opts: o4('10 phút', '45 phút', '15 phút', '5 phút'), ans: 'C',
      why: '8 giờ kém 25 phút = 7 giờ 35 phút. Từ 7 giờ 20 phút đến 7 giờ 35 phút là 35 – 20 = 15 phút.' },

    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Bài 1a', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>5678 + 45 932</b>', ...N('51 610'),
      why: 'Viết 45 932 ở trên, 5 678 ở dưới, các hàng thẳng cột. 2 + 8 = 10, viết 0 nhớ 1; 3 + 7 = 10, thêm 1 là 11, viết 1 nhớ 1; 9 + 6 = 15, thêm 1 là 16, viết 6 nhớ 1; 5 + 5 = 10, thêm 1 là 11, viết 1 nhớ 1; 4 thêm 1 là 5. Kết quả 51 610.' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Bài 1b', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>20 006 – 9 856</b>', ...N('10 150'),
      why: '6 – 6 = 0, viết 0; 0 không trừ được 5, lấy 10 – 5 = 5, viết 5 nhớ 1; 8 thêm 1 là 9, 0 không trừ được 9, lấy 10 – 9 = 1, viết 1 nhớ 1; 9 thêm 1 là 10, 0 không trừ được 10, lấy 10 – 10 = 0, viết 0 nhớ 1; 2 – 1 = 1. Kết quả 10 150. (Thử lại: 10 150 + 9 856 = 20 006.)' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Bài 1c', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>10 365 × 4</b>', ...N('41 460'),
      why: '4 × 5 = 20, viết 0 nhớ 2; 4 × 6 = 24, thêm 2 là 26, viết 6 nhớ 2; 4 × 3 = 12, thêm 2 là 14, viết 4 nhớ 1; 4 × 0 = 0, thêm 1 là 1, viết 1; 4 × 1 = 4, viết 4. Kết quả 41 460.' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Bài 1d', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>49 561 : 6</b><br><i>(Nếu có dư, ghi dạng: 123 dư 4)</i>', ...N('8 260 dư 1', '8260 (dư 1)', '8 260 (dư 1)'),
      why: '49 chia 6 được 8, 8 × 6 = 48, 49 – 48 = 1; hạ 5 được 15, 15 chia 6 được 2, 2 × 6 = 12, 15 – 12 = 3; hạ 6 được 36, 36 chia 6 được 6, dư 0; hạ 1, 1 chia 6 được 0, dư 1. Kết quả 8 260 dư 1. (Thử lại: 8 260 × 6 + 1 = 49 561.)' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Bài 2a', pts: 0.5, type: 'type', lines: 2,
      text: 'Tính giá trị của biểu thức: <b>72 708 – 6 132 × 7</b>', ...N('29 784'),
      why: 'Nhân trước, trừ sau: 6 132 × 7 = 42 924; 72 708 – 42 924 = 29 784.' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Bài 2b', pts: 0.5, type: 'type',
      text: 'Số? <b>…… : 6 = 3 051 (dư 3)</b>', ...N('18 309'),
      why: 'Số bị chia = thương × số chia + số dư = 3 051 × 6 + 3 = 18 306 + 3 = 18 309.' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Bài 3', pts: 2, type: 'type', lines: 4,
      text: 'Có 1460 quyển sách được xếp đều vào 5 ngăn. Hỏi 3 ngăn như thế xếp được bao nhiêu quyển sách?<br><i>(Trình bày bài giải; ô trả lời ghi đáp số.)</i>',
      ans: '876', alts: ['876 quyển', '876 quyển sách'],
      why: '<b>Bài giải</b><br>Mỗi ngăn xếp được số quyển sách là:<br>1 460 : 5 = 292 (quyển)<br>3 ngăn như thế xếp được số quyển sách là:<br>292 × 3 = 876 (quyển)<br>Đáp số: 876 quyển sách.' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Bài 4', pts: 1, type: 'type', lines: 3,
      text: 'Quan sát hình vẽ và cho biết giá tiền của mỗi đồ dùng học tập:' +
        '<table class="cal"><tr><td>Hộp màu + Hộp màu + Cái kéo</td><td>= 55 000 đồng</td></tr>' +
        '<tr><td>Hộp bút + Cái kéo + Cái kéo</td><td>= 60 000 đồng</td></tr>' +
        '<tr><td>Cái kéo + Hộp màu + Hộp bút</td><td>= 65 000 đồng</td></tr></table>' +
        'Vậy giá tiền mỗi loại là: Hộp màu: …… ; Hộp bút: …… ; Cái kéo: ……<br><i>(Ghi lần lượt giá hộp màu, hộp bút, cái kéo, cách nhau bởi dấu phẩy.)</i>',
      ans: '20000, 30000, 15000',
      alts: ['20 000, 30 000, 15 000', '20000 đồng, 30000 đồng, 15000 đồng', '20 000 đồng, 30 000 đồng, 15 000 đồng'],
      why: 'So sánh dòng 1 và dòng 3: cả hai đều có 1 cái kéo và 1 hộp màu; dòng 1 thêm 1 hộp màu, dòng 3 thêm 1 hộp bút. Dòng 3 nhiều hơn 65 000 – 55 000 = 10 000 đồng, nên hộp bút đắt hơn hộp màu 10 000 đồng.<br>' +
        'Thay hộp bút ở dòng 2 bằng "hộp màu + 10 000": hộp màu + 2 kéo = 60 000 – 10 000 = 50 000 đồng.<br>' +
        'Cộng với dòng 1 (2 hộp màu + 1 kéo = 55 000): 3 hộp màu + 3 kéo = 105 000, nên 1 hộp màu + 1 kéo = 105 000 : 3 = 35 000 đồng.<br>' +
        'Từ dòng 1: hộp màu = 55 000 – 35 000 = <b>20 000 đồng</b>; cái kéo = 35 000 – 20 000 = <b>15 000 đồng</b>; hộp bút = 20 000 + 10 000 = <b>30 000 đồng</b>.<br>' +
        'Thử lại: 20 000 + 20 000 + 15 000 = 55 000; 30 000 + 15 000 + 15 000 = 60 000; 15 000 + 20 000 + 30 000 = 65 000. Đúng.' },
  ],
},

/* ===================== 3807 — TH ĐẠI HÀ (HẢI PHÒNG) 2025–2026 ===================== */
{
  id: 3807, title: 'CK2 · TH Đại Hà (Hải Phòng) 2025–2026', time: 50, sem: 2,
  src: 'https://thdaiha.haiphong.edu.vn/toan-3/de-kiem-tra-toan-cuoi-hoc-ki-2-nam-hoc-2025-2026/ct/46494/637899',
  questions: [
    { sec: 'Trắc nghiệm (3 điểm)', name: 'Câu 1a', pts: 0.5,
      text: 'Năm mươi tám nghìn ba trăm mười lăm viết là:',
      opts: o4('58 351', '58 315', '58 135', '58 513'), ans: 'B',
      why: 'Năm mươi tám nghìn → 58 nghìn; ba trăm mười lăm → 315. Viết: 58 315.' },
    { sec: 'Trắc nghiệm (3 điểm)', name: 'Câu 1b', pts: 0.5,
      text: 'Tích của phép tính 2 054 × 3 là:',
      opts: o4('6 162', '6 052', '2 057', '2 062'), ans: 'A',
      why: '3 × 4 = 12, viết 2 nhớ 1; 3 × 5 = 15, thêm 1 là 16, viết 6 nhớ 1; 3 × 0 = 0, thêm 1 là 1; 3 × 2 = 6. Tích là 6 162.' },
    { sec: 'Trắc nghiệm (3 điểm)', name: 'Câu 2a', pts: 0.5,
      text: 'Số lớn nhất trong các số sau: 9 875; 8 975; 9 785; 9 587 là:',
      opts: o4('9 875', '8 795', '9 785', '9 587'), ans: 'A',
      why: 'Hàng nghìn: 9 > 8, loại 8 975. So hàng trăm của 9 875, 9 785, 9 587: 8 > 7 > 5. Số lớn nhất là 9 875.' },
    { sec: 'Trắc nghiệm (3 điểm)', name: 'Câu 2b', pts: 0.5,
      text: 'Số 23 511 làm tròn đến hàng nghìn là:',
      opts: o4('23 000', '23 500', '24 000', '23 100'), ans: 'C',
      why: 'Chữ số hàng trăm là 5 (≥ 5) nên làm tròn lên: 23 511 ≈ 24 000.' },
    { sec: 'Trắc nghiệm (3 điểm)', name: 'Câu 3a', pts: 0.5,
      text: 'Giá trị của biểu thức 386 × 2 + 18 092 là:',
      opts: o4('18 670', '18 864', '23 545', '23 520'), ans: 'B',
      why: 'Nhân trước, cộng sau: 386 × 2 = 772; 772 + 18 092 = 18 864.' },
    { sec: 'Trắc nghiệm (3 điểm)', name: 'Câu 3b', pts: 0.5,
      text: 'Thành phần chưa biết của phép tính: ? : 4 = 10 634',
      opts: o4('10 638', '10 630', '42 653', '42 536'), ans: 'D',
      why: 'Số bị chia = thương × số chia = 10 634 × 4 = 42 536.' },

    { sec: 'Tự luận (7 điểm)', name: 'Câu 4a', pts: 0.5, type: 'type',
      text: '5 giờ = …… phút', ans: '300', alts: ['300 phút'],
      why: '1 giờ = 60 phút nên 5 giờ = 60 × 5 = 300 phút.' },
    { sec: 'Tự luận (7 điểm)', name: 'Câu 4b', pts: 0.5, type: 'type',
      text: 'Các tháng có 31 ngày là: ……<br><i>(Ghi các số tháng theo thứ tự, cách nhau bởi dấu phẩy.)</i>',
      ans: '1, 3, 5, 7, 8, 10, 12',
      alts: ['1,3,5,7,8,10,12', 'tháng 1, 3, 5, 7, 8, 10, 12', 'tháng 1, tháng 3, tháng 5, tháng 7, tháng 8, tháng 10, tháng 12'],
      why: 'Các tháng có 31 ngày: tháng 1, 3, 5, 7, 8, 10, 12 (đếm trên nắm tay: tháng rơi vào đốt xương nhô lên có 31 ngày).' },
    { sec: 'Tự luận (7 điểm)', name: 'Câu 5a', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>15 806 × 6</b>', ...N('94 836'),
      why: '6 × 6 = 36, viết 6 nhớ 3; 6 × 0 = 0, thêm 3 là 3; 6 × 8 = 48, viết 8 nhớ 4; 6 × 5 = 30, thêm 4 là 34, viết 4 nhớ 3; 6 × 1 = 6, thêm 3 là 9. Kết quả 94 836.' },
    { sec: 'Tự luận (7 điểm)', name: 'Câu 5b', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>92 705 : 4</b><br><i>(Nếu có dư, ghi dạng: 123 dư 4)</i>', ...N('23 176 dư 1', '23176 (dư 1)', '23 176 (dư 1)'),
      why: '9 : 4 được 2, dư 1; hạ 2 được 12, 12 : 4 được 3; hạ 7, 7 : 4 được 1, dư 3; hạ 0 được 30, 30 : 4 được 7, dư 2; hạ 5 được 25, 25 : 4 được 6, dư 1. Kết quả 23 176 dư 1. (Thử lại: 23 176 × 4 + 1 = 92 705.)' },
    { sec: 'Tự luận (7 điểm)', name: 'Câu 6', pts: 1, type: 'type', lines: 4,
      text: 'Một tấm bìa hình chữ nhật có chiều rộng là 8cm, chiều dài là 3 dm. Tính diện tích tấm bìa đó?<br><i>(Trình bày bài giải; ô trả lời ghi đáp số.)</i>',
      ans: '240 cm²', alts: ['240', '240cm²', '240 cm2', '240cm2', '240 xăng-ti-mét vuông'],
      why: '<b>Bài giải</b><br>Đổi 3 dm = 30 cm.<br>Diện tích tấm bìa hình chữ nhật đó là:<br>30 × 8 = 240 (cm²)<br>Đáp số: 240 cm².' },
    { sec: 'Tự luận (7 điểm)', name: 'Câu 7', pts: 2, type: 'type', lines: 5,
      text: 'Một nông trường chè xếp hàng lên 2 xe tải, mỗi xe chở 4 833 túi chè. Số túi chè đó chia đều cho 3 siêu thị. Hỏi mỗi siêu thị nhận được bao nhiêu túi chè?<br><i>(Trình bày bài giải; ô trả lời ghi đáp số.)</i>',
      ...N('3 222', '3222 túi', '3 222 túi', '3222 túi chè', '3 222 túi chè'),
      why: '<b>Bài giải</b><br>Hai xe tải chở số túi chè là:<br>4 833 × 2 = 9 666 (túi)<br>Mỗi siêu thị nhận được số túi chè là:<br>9 666 : 3 = 3 222 (túi)<br>Đáp số: 3 222 túi chè.' },
    { sec: 'Tự luận (7 điểm)', name: 'Câu 8a', pts: 1, type: 'type', lines: 3,
      text: 'Tính nhanh giá trị biểu thức số dưới đây:<br><b>1 760 + 2 540 + 263 – 540 – 263 – 760</b>', ...N('3 000'),
      why: 'Nhóm các số "đi cặp" với nhau: (1 760 – 760) + (2 540 – 540) + (263 – 263) = 1 000 + 2 000 + 0 = 3 000.' },
    { sec: 'Tự luận (7 điểm)', name: 'Câu 8b', pts: 1, type: 'type', lines: 3,
      text: 'Tìm một số biết rằng nếu lấy số đó chia cho 7 thì được thương là 673 và số dư là số lớn nhất có thể.',
      ...N('4 717'),
      why: 'Số dư luôn bé hơn số chia, nên chia cho 7 thì số dư lớn nhất là 6.<br>Số cần tìm = 673 × 7 + 6 = 4 711 + 6 = 4 717.' },
  ],
},

/* ===================== 3808 — TH ĐỒNG HÒA (HẢI PHÒNG) 2025–2026 ===================== */
{
  id: 3808, title: 'CK2 · TH Đồng Hòa (Hải Phòng) 2025–2026', time: 40, sem: 2,
  src: 'https://thdonghoa.haiphong.edu.vn/de-kiem-tra/de-kiem-tra-cuoi-nam-mon-toan-lop-3-nam-hoc-2025-2026/ct/18909/681990',
  questions: [
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 1a', pts: 0.25, type: 'write', lines: 1,
      text: 'Đọc số sau: <b>2 535</b>',
      model: 'Hai nghìn năm trăm ba mươi lăm.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 1b', pts: 0.25, type: 'write', lines: 1,
      text: 'Đọc số sau: <b>10 605</b>',
      model: 'Mười nghìn sáu trăm linh năm (hoặc: mười nghìn sáu trăm lẻ năm).' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 1c', pts: 0.25, type: 'type',
      text: 'Viết số gồm: Hai chục nghìn, bốn nghìn, sáu trăm, sáu chục và chín đơn vị.', ...N('24 669'),
      why: '2 chục nghìn, 4 nghìn, 6 trăm, 6 chục, 9 đơn vị → 24 669.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 1d', pts: 0.25, type: 'type',
      text: 'Viết số: Bốn mươi nghìn ba trăm linh sáu.', ...N('40 306'),
      why: 'Bốn mươi nghìn → 40 nghìn; ba trăm linh sáu → 306 (hàng chục là 0). Viết: 40 306.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 2a', pts: 0.5,
      text: 'Làm tròn số 71 865 đến hàng nghìn, ta được số:',
      opts: o4('71 000', '71 900', '71 800', '72 000'), ans: 'D',
      why: 'Chữ số hàng trăm là 8 (≥ 5) nên làm tròn lên: 71 865 ≈ 72 000.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 2b', pts: 0.5, type: 'type',
      text: 'Đoạn thẳng PQ dài 12 cm, K là trung điểm của PQ. PK có độ dài là: ……', ans: '6 cm', alts: ['6', '6cm'],
      why: 'Trung điểm chia đoạn thẳng thành hai phần bằng nhau: PK = 12 : 2 = 6 (cm).' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 3a-1', pts: 0.25, type: 'type', img: I + 't3808-dh1.svg',
      text: 'Đồng hồ chỉ mấy giờ?<br><i>(Ghi dạng: … giờ … phút)</i>',
      ans: '3 giờ 20 phút', alts: ['3 giờ 20', '15 giờ 20 phút', '3:20', '15:20'],
      why: 'Kim ngắn (kim giờ) đã qua số 3 một chút; kim dài (kim phút) chỉ số 4, tức 4 × 5 = 20 phút. Đồng hồ chỉ 3 giờ 20 phút.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 3a-2', pts: 0.25, type: 'type', img: I + 't3808-dh2.svg',
      text: 'Đồng hồ chỉ mấy giờ?<br><i>(Ghi dạng: … giờ … phút)</i>',
      ans: '7 giờ 55 phút', alts: ['8 giờ kém 5 phút', '8 giờ kém 5', '7 giờ 55', '19 giờ 55 phút', '7:55', '19:55'],
      why: 'Kim ngắn gần tới số 8 (chưa tới); kim dài chỉ số 11, tức 11 × 5 = 55 phút. Đồng hồ chỉ 7 giờ 55 phút, hay 8 giờ kém 5 phút.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 3b', pts: 0.5,
      text: 'Mai đi từ nhà lúc 6 giờ 50 phút, tới trường lúc 7 giờ 13 phút. Thời gian Mai đi từ nhà đến trường là:',
      opts: o4('10 phút', '13 phút', '23 phút', '37 phút'), ans: 'C',
      why: 'Từ 6 giờ 50 phút đến 7 giờ là 10 phút; từ 7 giờ đến 7 giờ 13 phút là 13 phút. Tất cả 10 + 13 = 23 phút.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 4', pts: 1,
      text: 'Chị mua 1 chiếc bút máy hết 25 000 đồng, 1 thước kẻ hết 5 000 đồng. Hỏi chị mua 2 chiếc bút máy và 2 cái thước kẻ hết bao nhiêu tiền?',
      opts: o4('30 000 đồng', '45 000 đồng', '55 000 đồng', '60 000 đồng'), ans: 'D',
      why: '1 bút máy và 1 thước kẻ: 25 000 + 5 000 = 30 000 đồng. Mua 2 bộ như thế: 30 000 × 2 = 60 000 đồng.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 5a', pts: 0.5, type: 'type',
      text: 'Thống kê số học sinh lớp 3 tham gia câu lạc bộ như sau:' +
        '<table class="cal"><tr><th>Câu lạc bộ</th><th>Cờ vua</th><th>Cầu lông</th><th>Bơi lội</th><th>Võ</th></tr>' +
        '<tr><td>Số HS tham gia</td><td>125</td><td>120</td><td>315</td><td>135</td></tr></table>' +
        '+ Có …… câu lạc bộ.<br>+ Câu lạc bộ …… được nhiều học sinh tham gia nhất.<br>+ Câu lạc bộ …… ít học sinh tham gia nhất.<br>' +
        '<i>(Ghi lần lượt 3 chỗ trống, cách nhau bởi dấu phẩy.)</i>',
      ans: '4, Bơi lội, Cầu lông', alts: ['4, câu lạc bộ Bơi lội, câu lạc bộ Cầu lông', 'bốn, Bơi lội, Cầu lông'],
      why: 'Bảng có 4 câu lạc bộ: Cờ vua, Cầu lông, Bơi lội, Võ. So sánh: 315 > 135 > 125 > 120. Bơi lội đông nhất (315 bạn), Cầu lông ít nhất (120 bạn).' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 5b', pts: 0.5, type: 'type',
      text: 'Đúng ghi Đ, sai ghi S. Trong hộp có ba thẻ số 6, 7, 8. Nam không nhìn vào hộp, lấy ra một thẻ.<br>' +
        '① Nam có thể lấy được thẻ mang số 6. ☐<br>② Nam chắc chắn lấy được thẻ mang số 8. ☐<br>③ Nam không thể lấy được thẻ mang số 5. ☐<br>' +
        '<i>(Ghi lần lượt 3 ô bằng chữ Đ hoặc S, cách nhau bởi dấu phẩy.)</i>',
      ans: 'Đ, S, Đ', alts: ['ĐSĐ', 'Đúng, Sai, Đúng', 'D, S, D', 'DSD'],
      why: '① Đúng — trong hộp có thẻ số 6 nên có thể lấy được.<br>② Sai — Nam có thể lấy phải thẻ 6 hoặc 7, nên không chắc chắn lấy được thẻ 8.<br>③ Đúng — trong hộp không có thẻ số 5 nên không thể lấy được.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 6', pts: 1,
      text: 'Bác Hà cần rào một mảnh vườn hình chữ nhật có chiều dài là 25m, chiều rộng là 8m. Bác có để một lối vào 3m. Hàng rào khu vườn nhà bác Hà dài:',
      opts: o4('33 m', '66 m', '30 m', '63 m'), ans: 'D',
      why: 'Chu vi mảnh vườn: (25 + 8) × 2 = 66 (m). Trừ lối vào 3 m không rào: 66 – 3 = 63 (m).' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 7a', pts: 0.25, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>4 387 + 32 359</b>', ...N('36 746'),
      why: '7 + 9 = 16, viết 6 nhớ 1; 8 + 5 = 13, thêm 1 là 14, viết 4 nhớ 1; 3 + 3 = 6, thêm 1 là 7; 4 + 2 = 6; hạ 3. Kết quả 36 746.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 7b', pts: 0.25, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>79 020 – 5 819</b>', ...N('73 201'),
      why: '0 không trừ được 9, lấy 10 – 9 = 1, viết 1 nhớ 1; 1 thêm 1 là 2, 2 – 2 = 0; 0 không trừ được 8, lấy 10 – 8 = 2, viết 2 nhớ 1; 5 thêm 1 là 6, 9 – 6 = 3; hạ 7. Kết quả 73 201.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 7c', pts: 0.25, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>13 207 × 3</b>', ...N('39 621'),
      why: '3 × 7 = 21, viết 1 nhớ 2; 3 × 0 = 0, thêm 2 là 2; 3 × 2 = 6; 3 × 3 = 9; 3 × 1 = 3. Kết quả 39 621.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 7d', pts: 0.25, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>8124 : 4</b>', ...N('2 031'),
      why: '8 : 4 được 2; hạ 1, 1 : 4 được 0, viết 0; hạ 2 được 12, 12 : 4 được 3; hạ 4, 4 : 4 được 1. Kết quả 2 031. (Thử lại: 2 031 × 4 = 8 124.)' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 8a', pts: 0.5, type: 'type', lines: 2,
      text: 'Tính giá trị biểu thức: <b>5 × (17 280 – 12 078)</b>', ...N('26 010'),
      why: 'Tính trong ngoặc trước: 17 280 – 12 078 = 5 202. Rồi 5 × 5 202 = 26 010.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 8b', pts: 0.25, type: 'type',
      text: 'Số? 1kg 160g = …… g', ...N('1 160', '1160 g', '1 160 g'),
      why: '1 kg = 1 000 g; 1 000 g + 160 g = 1 160 g.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 8c', pts: 0.25, type: 'type',
      text: 'Số? 5 000 ml = …… l', ans: '5', alts: ['5 l', '5l', '5 lít'],
      why: '1 l = 1 000 ml nên 5 000 ml = 5 l.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 9', pts: 1, type: 'type', lines: 4,
      text: '5 thùng đựng được 2 365 lít dầu. Hỏi 7 thùng như thế đựng được bao nhiêu lít dầu?<br><i>(Trình bày bài giải; ô trả lời ghi đáp số.)</i>',
      ...N('3 311', '3311 l', '3 311 l', '3311 lít', '3 311 lít', '3311 lít dầu', '3 311 lít dầu'),
      why: '<b>Bài giải</b><br>Mỗi thùng đựng được số lít dầu là:<br>2 365 : 5 = 473 (l)<br>7 thùng như thế đựng được số lít dầu là:<br>473 × 7 = 3 311 (l)<br>Đáp số: 3 311 lít dầu.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 10a', pts: 0.5, type: 'type', lines: 3,
      text: 'Lan nghĩ ra một số, nếu lấy số đó chia cho 4 thì được thương là 2105 và số dư là số dư lớn nhất. Hãy tìm số đó.',
      ...N('8 423'),
      why: 'Chia cho 4 thì số dư lớn nhất là 3 (số dư phải bé hơn số chia).<br>Số Lan nghĩ = 2 105 × 4 + 3 = 8 420 + 3 = 8 423.' },
    { sec: 'Bài kiểm tra (10 câu, mỗi câu 1 điểm)', name: 'Câu 10b', pts: 0.5, type: 'type', img: I + 't3808-can.svg',
      text: 'Số? Quan sát ba cái cân thăng bằng. Cân 3: một hình vuông cân bằng với mấy hình tròn?<br>? hình tròn: ……',
      ans: '5', alts: ['5 hình tròn'],
      why: 'Cân 2: 1 hình tam giác nặng bằng 4 hình tròn, nên 3 hình tam giác nặng bằng 4 × 3 = 12 hình tròn.<br>' +
        'Cân 1: 2 hình vuông + 2 hình tròn nặng bằng 3 hình tam giác = 12 hình tròn. Bỏ bớt 2 hình tròn ở mỗi bên: 2 hình vuông nặng bằng 10 hình tròn.<br>' +
        'Vậy 1 hình vuông nặng bằng 10 : 2 = 5 hình tròn.' },
  ],
},

/* ===================== 3809 — TH MINH ĐỨC (TIÊN LÃNG, HẢI PHÒNG) 2025–2026 ===================== */
{
  id: 3809, title: 'CK2 · TH Minh Đức (Hải Phòng) 2025–2026', time: 40, sem: 2,
  src: 'https://thminhductienlang.haiphong.edu.vn/de-kiem-tra/de-kiem-tra-toan-3-hoc-ki-2-nam-hoc-2025-2026/ct/29112/676331',
  questions: [
    { sec: 'I. Phần trắc nghiệm (4 điểm)', name: 'Câu 1', pts: 0.5,
      text: 'Số gồm 6 chục nghìn 2 nghìn 8 chục 5 đơn vị được viết là:',
      opts: o4('60 285', '6 258', '62 085', '62 850'), ans: 'C',
      why: '6 chục nghìn, 2 nghìn, 0 trăm, 8 chục, 5 đơn vị → 62 085 (hàng trăm không có nên viết 0).' },
    { sec: 'I. Phần trắc nghiệm (4 điểm)', name: 'Câu 2', pts: 0.5,
      text: 'Làm tròn số 72 582 đến hàng chục nghìn được:',
      opts: o4('70 000', '73 000', '72 600', '72 580'), ans: 'A',
      why: 'Làm tròn đến hàng chục nghìn thì xét chữ số hàng nghìn: 2 < 5 nên làm tròn xuống: 72 582 ≈ 70 000.' },
    { sec: 'I. Phần trắc nghiệm (4 điểm)', name: 'Câu 3', pts: 0.5,
      text: 'Số chẵn liền trước của số nhỏ nhất có sáu chữ số là:',
      opts: o4('99 999', '99 998', '99 997', '99 990'), ans: 'B',
      why: 'Số nhỏ nhất có sáu chữ số là 100 000. Số liền trước là 99 999 (lẻ), số chẵn liền trước là 99 998.' },
    { sec: 'I. Phần trắc nghiệm (4 điểm)', name: 'Câu 4', pts: 0.5,
      text: 'Một mảnh vườn hình vuông có chu vi 36m. Diện tích mảnh vườn đó là:',
      opts: o4('72 m²', '144 m²', '18 m²', '81 m²'), ans: 'D',
      why: 'Cạnh hình vuông = chu vi : 4 = 36 : 4 = 9 (m). Diện tích = 9 × 9 = 81 (m²).' },
    { sec: 'I. Phần trắc nghiệm (4 điểm)', name: 'Câu 5', pts: 0.5,
      text: 'Hôm nay là ngày 29 tháng 2. Vậy ngày mai là:',
      opts: o4('Ngày 30 tháng 2', 'Ngày 31 tháng 2', 'Ngày 1 tháng 3', 'Ngày 2 tháng 3'), ans: 'C',
      why: 'Tháng 2 dài nhất cũng chỉ có 29 ngày (năm nhuận). Sau ngày 29 tháng 2 là ngày 1 tháng 3.' },
    { sec: 'I. Phần trắc nghiệm (4 điểm)', name: 'Câu 6', pts: 0.5,
      text: 'Mẹ mang 100 000 đồng đi chợ, mẹ mua thịt hết 57 000 đồng, mua rau hết 15 000 đồng. Hỏi mẹ còn lại bao nhiêu tiền?',
      opts: o4('38 000 đồng', '28 000 đồng', '18 000 đồng', '72 000 đồng'), ans: 'B',
      why: 'Mẹ đã tiêu: 57 000 + 15 000 = 72 000 đồng. Còn lại: 100 000 – 72 000 = 28 000 đồng.' },
    { sec: 'I. Phần trắc nghiệm (4 điểm)', name: 'Câu 7', pts: 0.5,
      text: 'Số 14 được viết bằng chữ số La Mã là:',
      opts: o4('XIIII', 'XVI', 'XIX', 'XIV'), ans: 'D',
      why: '14 = 10 + 4; X là 10, IV là 4. Viết: XIV. (Không viết 4 chữ I liền nhau.)' },
    { sec: 'I. Phần trắc nghiệm (4 điểm)', name: 'Câu 8', pts: 0.5,
      text: 'Một số chia cho số chẵn lớn nhất có 1 chữ số ta được kết quả là số lẻ bé nhất có 3 chữ số khác nhau và số dư lớn nhất. Số đó là:',
      opts: o4('831', '824', '842', '813'), ans: 'A',
      why: 'Số chẵn lớn nhất có 1 chữ số là 8 (số chia). Số lẻ bé nhất có 3 chữ số khác nhau là 103 (thương). Chia cho 8 thì số dư lớn nhất là 7.<br>Số đó = 103 × 8 + 7 = 824 + 7 = 831.' },

    { sec: 'II. Phần tự luận (6 điểm)', name: 'Câu 9a', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>18 254 + 17 370</b>', ...N('35 624'),
      why: '4 + 0 = 4; 5 + 7 = 12, viết 2 nhớ 1; 2 + 3 = 5, thêm 1 là 6; 8 + 7 = 15, viết 5 nhớ 1; 1 + 1 = 2, thêm 1 là 3. Kết quả 35 624.' },
    { sec: 'II. Phần tự luận (6 điểm)', name: 'Câu 9b', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>32 803 – 21 516</b>', ...N('11 287'),
      why: '3 không trừ được 6, lấy 13 – 6 = 7, viết 7 nhớ 1; 1 thêm 1 là 2, 0 không trừ được 2, lấy 10 – 2 = 8, viết 8 nhớ 1; 5 thêm 1 là 6, 8 – 6 = 2; 2 – 1 = 1; 3 – 2 = 1. Kết quả 11 287.' },
    { sec: 'II. Phần tự luận (6 điểm)', name: 'Câu 9c', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>17 160 × 5</b>', ...N('85 800'),
      why: '5 × 0 = 0; 5 × 6 = 30, viết 0 nhớ 3; 5 × 1 = 5, thêm 3 là 8; 5 × 7 = 35, viết 5 nhớ 3; 5 × 1 = 5, thêm 3 là 8. Kết quả 85 800.' },
    { sec: 'II. Phần tự luận (6 điểm)', name: 'Câu 9d', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>27 647 : 3</b><br><i>(Nếu có dư, ghi dạng: 123 dư 4)</i>', ...N('9 215 dư 2', '9215 (dư 2)', '9 215 (dư 2)'),
      why: '27 : 3 được 9; hạ 6, 6 : 3 được 2; hạ 4, 4 : 3 được 1, dư 1; hạ 7 được 17, 17 : 3 được 5, dư 2. Kết quả 9 215 dư 2. (Thử lại: 9 215 × 3 + 2 = 27 647.)' },
    { sec: 'II. Phần tự luận (6 điểm)', name: 'Câu 10', pts: 1, type: 'write', lines: 3,
      text: 'Trong hộp bi của Phong có các viên bi màu xanh, đỏ, vàng. Phong lấy ngẫu nhiên một viên bi. Các khả năng có thể xảy ra là:',
      model: '– Phong có thể lấy được viên bi màu xanh.<br>– Phong có thể lấy được viên bi màu đỏ.<br>– Phong có thể lấy được viên bi màu vàng.<br><i>Hướng dẫn chấm của trường: nêu đúng 2 khả năng được 0,6 điểm; đúng cả 3 khả năng được 1 điểm.</i>' },
    { sec: 'II. Phần tự luận (6 điểm)', name: 'Câu 11', pts: 2, type: 'type', lines: 5,
      text: 'Trong một ngày khu du lịch Cát Bà bán được 5 200 vé trẻ em, số vé người lớn bán được gấp 3 lần số vé trẻ em. Hỏi khu du lịch Cát Bà bán được tất cả bao nhiêu vé người lớn và trẻ em?<br><i>(Trình bày bài giải; ô trả lời ghi đáp số.)</i>',
      ...N('20 800', '20800 vé', '20 800 vé'),
      why: '<b>Bài giải</b><br>Khu du lịch bán được số vé người lớn là:<br>5 200 × 3 = 15 600 (vé)<br>Khu du lịch Cát Bà bán được tất cả số vé người lớn và trẻ em là:<br>5 200 + 15 600 = 20 800 (vé)<br>Đáp số: 20 800 vé.' },
    { sec: 'II. Phần tự luận (6 điểm)', name: 'Câu 12', pts: 1, type: 'type', lines: 3,
      text: 'Tính giá trị biểu thức: <b>612 – 342 : 9 + (102 – 68)</b>', ans: '608',
      why: 'Trong ngoặc trước: 102 – 68 = 34. Rồi chia trước: 342 : 9 = 38. Sau đó cộng, trừ từ trái sang phải: 612 – 38 = 574; 574 + 34 = 608.' },
  ],
},

/* ===================== 3810 — TH VINH QUANG (VĨNH BẢO, HẢI PHÒNG) 2024–2025 ===================== */
{
  id: 3810, title: 'CK2 · TH Vinh Quang (Hải Phòng) 2024–2025', time: 40, sem: 2,
  src: 'https://thvinhquang.haiphong.edu.vn/nam-hoc-2024-2025/de-kscl-hkii-mon-toan-khoi-3-tieu-hoc-vinh-quang/ct/29870/399529',
  questions: [
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 1', pts: 0.5,
      text: 'Số gồm 6 chục nghìn, 6 nghìn, 4 trăm, 1 đơn vị viết là:',
      opts: o4('66 400', '66 401', '6 641', '66 104'), ans: 'B',
      why: '6 chục nghìn, 6 nghìn, 4 trăm, 0 chục, 1 đơn vị → 66 401.' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 2', pts: 0.5,
      text: 'Giá trị của chữ số 8 trong số 23 687 là:',
      opts: o4('8', '800', '8000', '80'), ans: 'D',
      why: 'Trong 23 687, chữ số 8 đứng ở hàng chục nên có giá trị 80.' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 3', pts: 0.5,
      text: 'Số 9 viết theo số La Mã là:',
      opts: o4('IX', 'VI', 'IV', 'XI'), ans: 'A',
      why: '9 = 10 – 1: viết I đứng trước X → IX. (VI = 6, IV = 4, XI = 11.)' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 4', pts: 0.5,
      text: 'Nam ghi chép lại số vật nuôi của gia đình mình theo bảng số liệu như sau:' +
        '<table class="cal"><tr><th>Tên vật nuôi</th><th>Gà</th><th>Vịt</th><th>Lợn</th><th>Dê</th></tr>' +
        '<tr><td>Số lượng</td><td>10</td><td>8</td><td>3</td><td>6</td></tr></table>' +
        'Hỏi gia đình Nam có tất cả bao nhiêu con vật nuôi?',
      opts: o4('18 con', '21 con', '27 con', '19 con'), ans: 'C',
      why: '10 + 8 + 3 + 6 = 27 (con).' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 5', pts: 0.5, type: 'type',
      text: 'Số 10 501 làm tròn số đến hàng nghìn được số ……', ...N('11 000'),
      why: 'Làm tròn đến hàng nghìn thì xét chữ số hàng trăm: 5 (≥ 5) nên làm tròn lên: 10 501 ≈ 11 000.' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 6', pts: 0.5,
      text: 'Việt có một chuyến đi đến Cà Mau từ ngày 28 tháng 3 đến hết ngày 1 tháng 4 cùng năm. Vậy chuyến đi đó kéo dài bao nhiêu ngày?',
      opts: o4('2 ngày', '3 ngày', '4 ngày', '5 ngày'), ans: 'D',
      why: 'Tháng 3 có 31 ngày. Các ngày đi: 28, 29, 30, 31 tháng 3 và ngày 1 tháng 4 — tất cả 5 ngày.' },
    { sec: 'Phần I. Trắc nghiệm (4 điểm)', name: 'Câu 7', pts: 1, type: 'type', lines: 2,
      text: 'Người ta cần rào một khu vườn hình chữ nhật có chiều dài là 30m, chiều rộng bằng 1/3 chiều dài. Hàng rào khu vườn đó dài …… m.',
      ans: '80', alts: ['80 m', '80m'],
      why: 'Chiều rộng: 30 : 3 = 10 (m). Hàng rào dài bằng chu vi khu vườn: (30 + 10) × 2 = 80 (m).' },

    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Câu 8a', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>35692 + 6273</b>', ...N('41 965'),
      why: 'Viết 6 273 dưới 35 692, các hàng thẳng cột. 2 + 3 = 5; 9 + 7 = 16, viết 6 nhớ 1; 6 + 2 = 8, thêm 1 là 9; 5 + 6 = 11, viết 1 nhớ 1; 3 thêm 1 là 4. Kết quả 41 965.' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Câu 8b', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>76984 – 6778</b>', ...N('70 206'),
      why: '4 không trừ được 8, lấy 14 – 8 = 6, viết 6 nhớ 1; 7 thêm 1 là 8, 8 – 8 = 0; 9 – 7 = 2; 6 – 6 = 0; hạ 7. Kết quả 70 206.' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Câu 8c', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>1689 × 7</b>', ...N('11 823'),
      why: '7 × 9 = 63, viết 3 nhớ 6; 7 × 8 = 56, thêm 6 là 62, viết 2 nhớ 6; 7 × 6 = 42, thêm 6 là 48, viết 8 nhớ 4; 7 × 1 = 7, thêm 4 là 11. Kết quả 11 823.' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Câu 8d', pts: 0.5, type: 'type', lines: 3,
      text: 'Đặt tính rồi tính: <b>4896 : 8</b>', ans: '612',
      why: '48 : 8 được 6; hạ 9, 9 : 8 được 1, dư 1; hạ 6 được 16, 16 : 8 được 2. Kết quả 612. (Thử lại: 612 × 8 = 4 896.)' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Câu 9a', pts: 0.25, type: 'type',
      text: 'Điền số thích hợp vào chỗ chấm: 2 giờ = …… phút', ans: '120', alts: ['120 phút'],
      why: '1 giờ = 60 phút nên 2 giờ = 60 × 2 = 120 phút.' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Câu 9b', pts: 0.25, type: 'type',
      text: 'Điền số thích hợp vào chỗ chấm: 1 tuần 4 ngày = …… ngày', ans: '11', alts: ['11 ngày'],
      why: '1 tuần = 7 ngày; 7 + 4 = 11 ngày.' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Câu 9c', pts: 0.25, type: 'type',
      text: 'Điền số thích hợp vào chỗ chấm: 3m 6cm = …… cm', ans: '306', alts: ['306 cm', '306cm'],
      why: '3 m = 300 cm; 300 cm + 6 cm = 306 cm.' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Câu 9d', pts: 0.25, type: 'type',
      text: 'Điền số thích hợp vào chỗ chấm: 70 phút = …… giờ …… phút<br><i>(Ghi hai số, cách nhau bởi dấu phẩy.)</i>',
      ans: '1, 10', alts: ['1 giờ 10 phút', '1 giờ 10', '1 và 10'],
      why: '70 phút = 60 phút + 10 phút = 1 giờ 10 phút.' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Câu 10', pts: 2, type: 'type', lines: 5,
      text: 'Có ba kho thóc, mỗi kho chứa 12 504 kg thóc. Người ta đã bán đi 28 360 kg thóc. Hỏi trong ba kho đó còn lại bao nhiêu ki-lô-gam thóc?<br><i>(Trình bày bài giải; ô trả lời ghi đáp số.)</i>',
      ...N('9 152', '9152 kg', '9 152 kg', '9152kg', '9152 kg thóc', '9 152 kg thóc'),
      why: '<b>Bài giải</b><br>Ba kho chứa số ki-lô-gam thóc là:<br>12 504 × 3 = 37 512 (kg)<br>Trong ba kho đó còn lại số ki-lô-gam thóc là:<br>37 512 – 28 360 = 9 152 (kg)<br>Đáp số: 9 152 kg thóc.' },
    { sec: 'Phần II. Tự luận (6 điểm)', name: 'Câu 11', pts: 1, type: 'type', lines: 4,
      text: 'Mai nghĩ ra một số. Mai lấy số đó trừ đi số bé nhất có 4 chữ số, rồi chia cho số liền sau của số 5 thì được 815. Hỏi số Mai nghĩ là số nào?',
      ...N('5 890'),
      why: 'Số bé nhất có 4 chữ số là 1 000; số liền sau của 5 là 6.<br>Làm ngược lại: trước khi chia cho 6, số đó là 815 × 6 = 4 890; trước khi trừ 1 000, số Mai nghĩ là 4 890 + 1 000 = 5 890.<br>(Thử lại: (5 890 – 1 000) : 6 = 4 890 : 6 = 815.)' },
  ],
}
);
})();
