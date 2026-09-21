# MA TRẬN PHỦ CHƯƠNG TRÌNH — NGÂN HÀNG ĐỀ THCS

**Quy mô:** 4 khối × 3 môn × **50 đề** = **600 đề** × 30 câu = **18 000 câu**
**Quy cách mỗi đề:** 30 câu trắc nghiệm 4 lựa chọn — 60 phút — ma trận 9 NB / 9 TH / 3 VD / 9 NC
**Đầu ra:** `web/data-<môn><lớp>.js` (dùng trên app) → xuất `.md` để in bằng `tools/export-de-thcs-md.mjs`

Tài liệu này là **hợp đồng phủ chương trình**: duyệt ma trận trước, sinh câu hỏi sau. Nếu ma trận sai thì 18 000 câu sinh ra đều sai chỗ.

---

## 1. KHUNG 50 ĐỀ (áp dụng cho cả 12 bank)

| Nhóm | Đề | Mục đích | Phạm vi |
|------|----|----------|---------|
| **A. Đề theo chương** | 1 – 30 | Đào sâu từng chương/chủ đề, **bảo đảm không bỏ sót mạch kiến thức nào** | Mỗi đề = 1 chương/chủ đề |
| **B. Đề theo kì** | 31 – 40 | Luyện đúng dạng đề nhà trường | GK I (31–32), CK I (33–35), GK II (36–37), CK II (38–40) |
| **C. Tổng hợp & nâng cao** | 41 – 50 | Ôn tổng lực, phân hóa học sinh khá – giỏi | Cuối năm (41–42), ôn nửa đầu (43), ôn nửa sau (44), chuyên đề (45–46), HSG (47–49), tổng duyệt (50) |

**Quy tắc phủ:** mỗi mạch kiến thức của chương trình xuất hiện ở **ít nhất 1 đề riêng** trong nhóm A, **lặp lại trong ≥2 đề** nhóm B, và **≥1 đề** nhóm C. Không mạch nào chỉ xuất hiện đúng một lần.

**Đề 50** của mỗi bank là đề "Tổng duyệt cuối năm" — chính là 12 đề `.md` đã biên soạn ở đợt trước, sẽ được chuyển sang định dạng `.js` để thống nhất một nguồn dữ liệu duy nhất.

---

## 2. TIẾN ĐỘ

| Bank | File dữ liệu | Đề đã có | Còn lại |
|------|--------------|---------:|--------:|
| Toán 6 | `web/data-toan6.js` | **50** | 0 |
| Toán 7 | `web/data-toan7.js` | 0 | 50 |
| Toán 8 | `web/data-toan8.js` | 0 | 50 |
| Toán 9 | `web/data-toan9.js` | 0 | 50 |
| KHTN 6 | `web/data-khtn6.js` | **50** | 0 |
| KHTN 7 | `web/data-khtn7.js` | 0 | 50 |
| KHTN 8 | `web/data-khtn8.js` | 0 | 50 |
| KHTN 9 | `web/data-khtn9.js` | 0 | 50 |
| Tiếng Anh 6 | `web/data-tienganh6.js` | **50** | 0 |
| Tiếng Anh 7 | `web/data-tienganh7.js` | 0 | 50 |
| Tiếng Anh 8 | `web/data-tienganh8.js` | 0 | 50 |
| Tiếng Anh 9 | `web/data-tienganh9.js` | 0 | 50 |
| | **TỔNG** | **150** | **450** |

*(12 đề `.md` hiện có sẽ được tính vào cột "đã có" sau khi chuyển sang `.js`.)*

---

## 3. TOÁN

### Quy ước viết công thức (môn Toán)

Công thức viết bằng LaTeX trong cặp `$...$` — phân số, căn, lũy thừa. Trang web
dùng KaTeX nên kí hiệu nét ở mọi cỡ chữ; file `.md` xem bằng trình đọc có
MathJax/KaTeX (GitHub hiển thị sẵn).

> Trong file `.js` phải gõ **hai** dấu gạch chéo ngược thì khi chạy mới còn một.
> Gõ một dấu thì JavaScript hiểu đó là kí tự điều khiển và công thức hỏng.
>
> Khi viết script sửa hàng loạt: không dùng heredoc của shell cho nội dung có
> dấu gạch chéo ngược (shell nuốt bớt), và không dùng `String.replace` với
> chuỗi thay thế chứa `$` (ký hiệu `$'` sẽ nhân đôi nội dung file).

### 3.1. TOÁN 6 — đề 1–30 (theo chương)

| Đề | Chủ đề | Trọng tâm |
|---:|--------|-----------|
| 1 | Tập hợp. Ghi số tự nhiên | Kí hiệu ∈, ⊂; số La Mã; thứ tự trong ℕ |
| 2 | Bốn phép tính với số tự nhiên | Tính nhanh, tính chất phép tính |
| 3 | Lũy thừa. Thứ tự thực hiện phép tính | Nhân/chia lũy thừa cùng cơ số; biểu thức nhiều tầng ngoặc |
| 4 | Quan hệ chia hết. Dấu hiệu chia hết | Chia hết cho 2, 3, 5, 9; tính chất chia hết của tổng |
| 5 | Số nguyên tố. Phân tích ra thừa số nguyên tố | Sàng, phân tích, đếm ước |
| 6 | ƯCLN – BCNN | Tìm ƯCLN/BCNN bằng phân tích thừa số |
| 7 | Bài toán thực tế về ƯCLN – BCNN | Chia nhóm, xếp hàng, cắt vật liệu |
| 8 | Tập hợp số nguyên. Thứ tự trong ℤ | Số đối, giá trị tuyệt đối, so sánh |
| 9 | Cộng, trừ số nguyên | Quy tắc dấu, quy tắc dấu ngoặc |
| 10 | Nhân, chia số nguyên. Ước và bội trong ℤ | Dấu của tích/thương; tìm x |
| 11 | Phân số. Phân số bằng nhau. Rút gọn | Tính chất cơ bản, phân số tối giản |
| 12 | Cộng, trừ phân số | Quy đồng, tính nhanh, tìm x |
| 13 | Nhân, chia phân số | Số nghịch đảo, giá trị phân số của một số |
| 14 | So sánh – quy đồng phân số. Hỗn số | Quy đồng, so sánh gián tiếp qua phần bù |
| 15 | Hai bài toán về phân số | Tìm giá trị phân số của một số và ngược lại |
| 16 | Bài toán thực tế với số nguyên | Nhiệt độ, độ cao, thu – chi |
| 17 | Số thập phân. So sánh. Làm tròn | Làm tròn đến hàng, ước lượng |
| 18 | Các phép tính với số thập phân | Tính nhanh, bài toán mua bán |
| 19 | Tỉ số. Tỉ số phần trăm | Đổi tỉ số ↔ phần trăm |
| 20 | Hai bài toán về tỉ số phần trăm | Tìm giá trị phần trăm và tìm số ban đầu |
| 21 | Bài toán thực tế về phần trăm | Giảm giá liên tiếp, lãi suất, thuế VAT |
| 22 | Tam giác đều, hình vuông, lục giác đều | Nhận dạng, tính chất cạnh – góc |
| 23 | HCN, hình thoi, hình bình hành, hình thang cân | Dấu hiệu nhận biết, tính chất đường chéo |
| 24 | Chu vi – diện tích các hình đã học | Công thức và tính ngược (tìm cạnh, chiều cao) |
| 25 | Bài toán thực tế về chu vi – diện tích | Lát nền, rào vườn, đổi đơn vị |
| 26 | Trục đối xứng. Tâm đối xứng | Nhận dạng ở hình, chữ cái, vật thật |
| 27 | Điểm, đường thẳng, tia. Ba điểm thẳng hàng | Đếm đường thẳng, điểm nằm giữa |
| 28 | Đoạn thẳng. Trung điểm. Góc và số đo góc | Cộng đoạn thẳng, trung điểm kép, đo góc |
| 29 | Thu thập – tổ chức dữ liệu. Bảng và biểu đồ | Biểu đồ tranh, cột, cột kép |
| 30 | Xác suất thực nghiệm | Gieo xúc xắc, đồng xu, gộp dữ liệu |

### 3.2. TOÁN 7 — đề 1–30

| Đề | Chủ đề | Trọng tâm |
|---:|--------|-----------|
| 1 | Tập hợp số hữu tỉ. Thứ tự trong ℚ | Biểu diễn trên trục số, so sánh |
| 2 | Cộng, trừ số hữu tỉ | Quy tắc chuyển vế, dấu ngoặc |
| 3 | Nhân, chia số hữu tỉ | Số nghịch đảo, tính nhanh |
| 4 | Lũy thừa của một số hữu tỉ | Nhân/chia/lũy thừa của lũy thừa |
| 5 | Thứ tự thực hiện phép tính trong ℚ | Biểu thức hỗn hợp phân số – số thập phân |
| 6 | Số vô tỉ. Căn bậc hai số học | Phân biệt hữu tỉ – vô tỉ, ước lượng căn |
| 7 | Tập hợp số thực. Giá trị tuyệt đối | Tìm x với |x|, GTNN/GTLN đơn giản |
| 8 | Làm tròn và ước lượng | Làm tròn đến hàng, sai số |
| 9 | Tỉ lệ thức | Tính chất nhân chéo, tìm số hạng chưa biết |
| 10 | Tính chất dãy tỉ số bằng nhau | Chia số thành các phần tỉ lệ |
| 11 | Đại lượng tỉ lệ thuận | Hệ số tỉ lệ, bài toán chia phần |
| 12 | Đại lượng tỉ lệ nghịch | Tích không đổi, bài toán năng suất |
| 13 | Bài toán thực tế về đại lượng tỉ lệ | Tỉ lệ bản đồ, pha trộn, máy móc – ngày công |
| 14 | Biểu thức đại số. Giá trị của biểu thức | Thay số, biểu thức có điều kiện |
| 15 | Đa thức một biến. Cộng, trừ đa thức | Thu gọn, sắp xếp, bậc, hệ số |
| 16 | Nhân, chia đa thức một biến | Chia hết, chia có dư |
| 17 | Nghiệm của đa thức một biến | Kiểm tra nghiệm, tìm tham số |
| 18 | Góc ở vị trí đặc biệt. Tia phân giác | Đối đỉnh, kề bù, tính số đo góc |
| 19 | Hai đường thẳng song song. Tiên đề Euclid | So le trong, đồng vị, trong cùng phía |
| 20 | Định lí và chứng minh định lí | Giả thiết – kết luận, định lí đảo |
| 21 | Tổng ba góc trong một tam giác | Góc ngoài, tam giác vuông |
| 22 | Hai tam giác bằng nhau | Các trường hợp c.c.c, c.g.c, g.c.g |
| 23 | Tam giác cân. Đường trung trực | Tính chất, dấu hiệu nhận biết |
| 24 | Quan hệ giữa góc – cạnh. Bất đẳng thức tam giác | Sắp xếp cạnh/góc, điều kiện ba cạnh |
| 25 | Các đường đồng quy trong tam giác | Trung tuyến, phân giác, trung trực, đường cao |
| 26 | Hình hộp chữ nhật. Hình lập phương | Diện tích xung quanh, thể tích |
| 27 | Lăng trụ đứng tam giác, tứ giác | Diện tích xung quanh, thể tích |
| 28 | Bài toán thực tế về hình khối | Bể nước, lều trại, hộp quà |
| 29 | Thu thập dữ liệu. Biểu đồ đoạn thẳng, hình quạt tròn | Đọc – phân tích biểu đồ |
| 30 | Biến cố và xác suất của biến cố | Biến cố chắc chắn/không thể; xác suất đồng khả năng |

### 3.3. TOÁN 8 — đề 1–30

| Đề | Chủ đề | Trọng tâm |
|---:|--------|-----------|
| 1 | Đơn thức, đa thức nhiều biến | Thu gọn, bậc, giá trị |
| 2 | Cộng, trừ đa thức nhiều biến | Nhóm hạng tử đồng dạng |
| 3 | Nhân, chia đa thức | Nhân đơn × đa, đa × đa |
| 4 | Hằng đẳng thức (1)(2)(3) | Bình phương tổng/hiệu, hiệu hai bình phương |
| 5 | Hằng đẳng thức (4)(5)(6)(7) | Lập phương, tổng/hiệu hai lập phương |
| 6 | Phân tích đa thức thành nhân tử | Đặt nhân tử chung, nhóm, hằng đẳng thức |
| 7 | Phân thức đại số. Rút gọn | Điều kiện xác định, rút gọn |
| 8 | Cộng, trừ phân thức | Quy đồng mẫu thức |
| 9 | Nhân, chia phân thức | Biểu thức hữu tỉ tổng hợp |
| 10 | Phương trình bậc nhất một ẩn | Quy tắc chuyển vế, nhân; phương trình đưa về bậc nhất |
| 11 | Giải bài toán bằng cách lập phương trình | Chuyển động, năng suất, tỉ lệ |
| 12 | Hàm số. Mặt phẳng tọa độ | Giá trị hàm số, tọa độ điểm |
| 13 | Hàm số bậc nhất y = ax + b. Đồ thị | Vẽ – đọc đồ thị, điểm thuộc đồ thị |
| 14 | Hệ số góc của đường thẳng | Song song, cắt nhau, tham số |
| 15 | Tứ giác. Tổng các góc của tứ giác | Tính góc còn lại |
| 16 | Hình thang cân | Tính chất, dấu hiệu nhận biết |
| 17 | Hình bình hành | Tính chất, dấu hiệu nhận biết |
| 18 | Hình chữ nhật. Hình thoi. Hình vuông | Sơ đồ nhận biết, đường chéo |
| 19 | Định lí Pythagore và ứng dụng | Thuận – đảo, bài toán thực tế |
| 20 | Định lí Thalès trong tam giác | Thuận – đảo, chia đoạn tỉ lệ |
| 21 | Đường trung bình của tam giác | Tính độ dài, chứng minh song song |
| 22 | Tính chất đường phân giác trong tam giác | Tỉ số đoạn thẳng |
| 23 | Hai tam giác đồng dạng | Các trường hợp g.g, c.g.c, c.c.c |
| 24 | Đồng dạng trong tam giác vuông | Hệ thức đường cao, tỉ số diện tích |
| 25 | Ứng dụng đồng dạng để đo đạc | Đo chiều cao cây, cột đèn, bề rộng sông |
| 26 | Hình chóp tam giác đều | Diện tích xung quanh, thể tích |
| 27 | Hình chóp tứ giác đều | Trung đoạn, diện tích toàn phần, thể tích |
| 28 | Thu thập, phân loại, biểu diễn dữ liệu | Bảng tần số, biểu đồ phù hợp |
| 29 | Phân tích số liệu. Nhận xét biểu đồ | Số trung bình, phát hiện dữ liệu bất thường |
| 30 | Xác suất của biến cố ngẫu nhiên | Không gian mẫu, xác suất lí thuyết |

### 3.4. TOÁN 9 — đề 1–30

| Đề | Chủ đề | Trọng tâm |
|---:|--------|-----------|
| 1 | Phương trình bậc nhất hai ẩn | Nghiệm, biểu diễn hình học |
| 2 | Hệ hai phương trình bậc nhất hai ẩn | Nhận dạng số nghiệm |
| 3 | Giải hệ: phương pháp thế và cộng đại số | Kĩ thuật giải, hệ chứa tham số |
| 4 | Giải bài toán bằng cách lập hệ phương trình | Chuyển động, năng suất, hỗn hợp |
| 5 | Bất đẳng thức. Tính chất | So sánh, chứng minh đơn giản |
| 6 | Bất phương trình bậc nhất một ẩn | Giải và biểu diễn tập nghiệm |
| 7 | Căn bậc hai. Căn thức bậc hai | Điều kiện xác định, √A² = |A| |
| 8 | Khai căn. Biến đổi biểu thức chứa căn | Đưa thừa số vào/ra ngoài dấu căn |
| 9 | Trục căn thức. Rút gọn biểu thức chứa căn | Biểu thức liên hợp |
| 10 | Căn bậc ba | Tính chất, so sánh |
| 11 | Phương trình quy về bậc nhất | Phương trình tích, chứa ẩn ở mẫu |
| 12 | Hàm số y = ax² và đồ thị | Tính đồng biến – nghịch biến, giao điểm |
| 13 | Phương trình bậc hai một ẩn | Công thức nghiệm, biệt thức Δ |
| 14 | Định lí Viète và ứng dụng | Tổng – tích nghiệm, biểu thức đối xứng |
| 15 | Giải bài toán bằng cách lập phương trình bậc hai | Diện tích, chuyển động, tăng giảm |
| 16 | Tỉ số lượng giác của góc nhọn | Định nghĩa, tỉ số của góc phụ nhau |
| 17 | Hệ thức về cạnh và góc trong tam giác vuông | Giải tam giác vuông |
| 18 | Ứng dụng tỉ số lượng giác vào thực tế | Chiều cao, khoảng cách, góc nâng |
| 19 | Đường tròn. Vị trí tương đối điểm – đường thẳng | Tiếp xúc, cắt nhau, không giao |
| 20 | Dây và khoảng cách từ tâm đến dây | Quan hệ đường kính – dây |
| 21 | Tiếp tuyến của đường tròn | Dấu hiệu, hai tiếp tuyến cắt nhau |
| 22 | Vị trí tương đối của hai đường tròn | Tiếp xúc trong/ngoài, cắt nhau |
| 23 | Góc ở tâm. Góc nội tiếp | Quan hệ góc – cung |
| 24 | Tứ giác nội tiếp | Dấu hiệu, tổng hai góc đối |
| 25 | Đa giác đều. Độ dài cung, diện tích hình quạt | Công thức và bài toán thực tế |
| 26 | Hình trụ | Diện tích xung quanh, thể tích |
| 27 | Hình nón | Đường sinh, diện tích, thể tích |
| 28 | Hình cầu | Diện tích mặt cầu, thể tích |
| 29 | Bảng tần số, tần số tương đối, ghép nhóm | Đọc và xử lí bảng |
| 30 | Xác suất của biến cố | Xác suất lí thuyết và thực nghiệm |

---

## 4. KHOA HỌC TỰ NHIÊN

### 4.1. KHTN 6 — đề 1–30

| Đề | Chủ đề | Phân môn |
|---:|--------|----------|
| 1 | Giới thiệu về KHTN. An toàn trong phòng thực hành | Chung |
| 2 | Dụng cụ đo. Đo chiều dài, khối lượng, thời gian | Chung |
| 3 | Đo nhiệt độ. Thang nhiệt độ | Chung |
| 4 | Sự đa dạng của chất. Ba thể của chất | Hóa |
| 5 | Tính chất của chất. Sự chuyển thể | Hóa |
| 6 | Oxygen và không khí | Hóa |
| 7 | Chất tinh khiết, hỗn hợp, dung dịch | Hóa |
| 8 | Tách chất ra khỏi hỗn hợp | Hóa |
| 9 | Tế bào — đơn vị cơ sở của sự sống | Sinh |
| 10 | Từ tế bào đến cơ thể: mô – cơ quan – hệ cơ quan | Sinh |
| 11 | Phân loại thế giới sống. Khóa lưỡng phân | Sinh |
| 12 | Virus và vi khuẩn | Sinh |
| 13 | Nguyên sinh vật và nấm | Sinh |
| 14 | Thực vật: rêu, dương xỉ, hạt trần, hạt kín | Sinh |
| 15 | Động vật không xương sống | Sinh |
| 16 | Động vật có xương sống | Sinh |
| 17 | Đa dạng sinh học và bảo vệ đa dạng sinh học | Sinh |
| 18 | Ô nhiễm không khí và bảo vệ môi trường không khí | Hóa |
| 19 | Nguyên liệu. Lương thực – thực phẩm | Hóa |
| 20 | Nhiên liệu và an toàn khi sử dụng nhiên liệu | Hóa |
| 21 | Thực hành: quan sát bằng kính lúp và kính hiển vi | Sinh |
| 22 | Thực hành: đo và xử lí số liệu trong KHTN | Lí |
| 23 | Sự chuyển thể và tính chất của chất — tổng hợp | Hóa |
| 24 | Vai trò của thực vật và động vật trong tự nhiên | Sinh |
| 25 | Lực. Biểu diễn lực. Lực tiếp xúc – không tiếp xúc | Lí |
| 26 | Lực hấp dẫn. Trọng lượng và khối lượng | Lí |
| 27 | Lực ma sát | Lí |
| 28 | Biến dạng của lò xo. Lực đàn hồi | Lí |
| 29 | Năng lượng. Chuyển hóa, bảo toàn và hao phí năng lượng | Lí |
| 30 | Chuyển động nhìn thấy của Mặt Trời, Mặt Trăng. Hệ Mặt Trời | Lí |

### 4.2. KHTN 7 — đề 1–30

| Đề | Chủ đề | Phân môn |
|---:|--------|----------|
| 1 | Phương pháp và kĩ năng học tập môn KHTN | Chung |
| 2 | Nguyên tử | Hóa |
| 3 | Nguyên tố hóa học | Hóa |
| 4 | Sơ lược bảng tuần hoàn các nguyên tố hóa học | Hóa |
| 5 | Phân tử. Đơn chất và hợp chất | Hóa |
| 6 | Liên kết ion, liên kết cộng hóa trị | Hóa |
| 7 | Hóa trị và công thức hóa học | Hóa |
| 8 | Tốc độ chuyển động. Đo tốc độ | Lí |
| 9 | Đồ thị quãng đường – thời gian | Lí |
| 10 | Tốc độ và an toàn giao thông | Lí |
| 11 | Sóng âm. Độ to và độ cao của âm | Lí |
| 12 | Phản xạ âm. Chống ô nhiễm tiếng ồn | Lí |
| 13 | Năng lượng ánh sáng. Tia sáng, vùng tối – nửa tối | Lí |
| 14 | Sự phản xạ ánh sáng | Lí |
| 15 | Ảnh của vật tạo bởi gương phẳng | Lí |
| 16 | Từ trường. Nam châm | Lí |
| 17 | Từ trường Trái Đất. Nam châm điện | Lí |
| 18 | Trao đổi chất và chuyển hóa năng lượng ở sinh vật | Sinh |
| 19 | Quang hợp ở thực vật | Sinh |
| 20 | Yếu tố ảnh hưởng đến quang hợp. Thí nghiệm quang hợp | Sinh |
| 21 | Hô hấp tế bào và các yếu tố ảnh hưởng | Sinh |
| 22 | Trao đổi khí ở sinh vật | Sinh |
| 23 | Vai trò của nước và chất dinh dưỡng | Sinh |
| 24 | Trao đổi nước và chất dinh dưỡng ở thực vật | Sinh |
| 25 | Trao đổi nước và chất dinh dưỡng ở động vật | Sinh |
| 26 | Cảm ứng ở sinh vật. Tập tính ở động vật | Sinh |
| 27 | Sinh trưởng và phát triển ở sinh vật | Sinh |
| 28 | Yếu tố ảnh hưởng đến sinh trưởng và phát triển | Sinh |
| 29 | Sinh sản vô tính và sinh sản hữu tính | Sinh |
| 30 | Yếu tố ảnh hưởng đến sinh sản. Điều hòa sinh sản | Sinh |

### 4.3. KHTN 8 — đề 1–30

| Đề | Chủ đề | Phân môn |
|---:|--------|----------|
| 1 | An toàn hóa chất. Biến đổi vật lí và hóa học | Hóa |
| 2 | Phản ứng hóa học. Định luật bảo toàn khối lượng | Hóa |
| 3 | Mol và tỉ khối chất khí | Hóa |
| 4 | Tính theo phương trình hóa học | Hóa |
| 5 | Nồng độ dung dịch | Hóa |
| 6 | Tốc độ phản ứng và chất xúc tác | Hóa |
| 7 | Acid. Thang pH | Hóa |
| 8 | Base. Oxide | Hóa |
| 9 | Muối | Hóa |
| 10 | Phân bón hóa học | Hóa |
| 11 | Khối lượng riêng | Lí |
| 12 | Áp suất trên bề mặt. Áp suất chất lỏng, chất khí | Lí |
| 13 | Lực đẩy Archimedes. Sự nổi | Lí |
| 14 | Tác dụng làm quay của lực. Moment lực | Lí |
| 15 | Đòn bẩy và ứng dụng | Lí |
| 16 | Hiện tượng nhiễm điện. Dòng điện. Nguồn điện | Lí |
| 17 | Mạch điện đơn giản. Tác dụng của dòng điện | Lí |
| 18 | Cường độ dòng điện và hiệu điện thế | Lí |
| 19 | Năng lượng nhiệt. Nội năng | Lí |
| 20 | Dẫn nhiệt, đối lưu, bức xạ nhiệt | Lí |
| 21 | Sự nở vì nhiệt và ứng dụng | Lí |
| 22 | Hệ vận động ở người | Sinh |
| 23 | Hệ tiêu hóa và dinh dưỡng | Sinh |
| 24 | Hệ tuần hoàn. Máu và nhóm máu | Sinh |
| 25 | Hệ hô hấp | Sinh |
| 26 | Hệ bài tiết. Da và điều hòa thân nhiệt | Sinh |
| 27 | Hệ thần kinh, giác quan và hệ nội tiết | Sinh |
| 28 | Môi trường và nhân tố sinh thái. Quần thể sinh vật | Sinh |
| 29 | Quần xã. Hệ sinh thái. Chuỗi và lưới thức ăn | Sinh |
| 30 | Cân bằng tự nhiên. Bảo vệ môi trường | Sinh |

### 4.4. KHTN 9 — đề 1–30

| Đề | Chủ đề | Phân môn |
|---:|--------|----------|
| 1 | Động năng và thế năng | Lí |
| 2 | Cơ năng. Công và công suất | Lí |
| 3 | Khúc xạ ánh sáng | Lí |
| 4 | Tán sắc ánh sáng qua lăng kính. Màu sắc | Lí |
| 5 | Thấu kính. Ảnh của vật qua thấu kính | Lí |
| 6 | Kính lúp. Ứng dụng của thấu kính | Lí |
| 7 | Điện trở. Định luật Ohm | Lí |
| 8 | Đoạn mạch nối tiếp và song song | Lí |
| 9 | Năng lượng điện. Công suất điện | Lí |
| 10 | Định luật Joule – Lenz. An toàn điện | Lí |
| 11 | Cảm ứng điện từ | Lí |
| 12 | Dòng điện xoay chiều và tác dụng | Lí |
| 13 | Năng lượng của Trái Đất. Năng lượng tái tạo | Lí |
| 14 | Tính chất chung của kim loại | Hóa |
| 15 | Dãy hoạt động hóa học của kim loại | Hóa |
| 16 | Tách kim loại. Hợp kim: gang và thép | Hóa |
| 17 | Phi kim. Bảng tuần hoàn và tính chất | Hóa |
| 18 | Giới thiệu về hợp chất hữu cơ | Hóa |
| 19 | Alkane. Methane | Hóa |
| 20 | Alkene. Ethylene | Hóa |
| 21 | Dầu mỏ, khí thiên nhiên và nhiên liệu | Hóa |
| 22 | Ethylic alcohol | Hóa |
| 23 | Acetic acid | Hóa |
| 24 | Lipid và chất béo | Hóa |
| 25 | Carbohydrate: glucose, saccharose, tinh bột, cellulose | Hóa |
| 26 | Protein. Polymer | Hóa |
| 27 | Nhiễm sắc thể. Nguyên phân và giảm phân | Sinh |
| 28 | Các quy luật di truyền của Mendel | Sinh |
| 29 | DNA, gene, đột biến. Di truyền học với con người | Sinh |
| 30 | Tiến hóa. Nguồn gốc sự sống | Sinh |

---

## 5. TIẾNG ANH

### 5.1. TIẾNG ANH 6 (A1) — đề 1–30

| Đề | Chủ đề / Unit | Trọng tâm ngôn ngữ |
|---:|---------------|--------------------|
| 1 | My new school | Present simple |
| 2 | My house | *there is/are*, giới từ chỉ nơi chốn |
| 3 | My friends | Present continuous, tính từ chỉ tính cách |
| 4 | My neighbourhood | So sánh hơn, chỉ đường |
| 5 | Natural wonders of Viet Nam | So sánh nhất, danh từ đếm được/không đếm được |
| 6 | Our Tet holiday | *should/shouldn't*, *must/mustn't* |
| 7 | Television | Câu hỏi Wh-, liên từ |
| 8 | Sports and games | Past simple (có quy tắc & bất quy tắc) |
| 9 | Cities of the world | So sánh nhất, *have been to* |
| 10 | Our houses in the future | *will* / *might* |
| 11 | Our greener world | Từ vựng môi trường, *reduce – reuse – recycle* |
| 12 | Robots | *can/could*, *will be able to* |
| 13 | Ôn tập ngữ pháp: các thì hiện tại | Hiện tại đơn ↔ hiện tại tiếp diễn |
| 14 | Ôn tập: thì quá khứ và tương lai | Past simple, *will* |
| 15 | Ôn tập: so sánh hơn – so sánh nhất | Tính từ ngắn/dài, bất quy tắc |
| 16 | Ôn tập: giới từ thời gian và nơi chốn | *in / on / at* |
| 17 | Ôn tập: đại từ và tính từ sở hữu | *my – mine*, đại từ tân ngữ |
| 18 | Ôn tập: mạo từ, lượng từ, danh từ | *a/an/the*, *some/any*, *much/many* |
| 19 | Ôn tập: câu hỏi Wh- và Yes/No | Chọn từ để hỏi theo câu trả lời |
| 20 | Ôn tập: trạng từ tần suất và trật tự từ | Vị trí *always/often/never* |
| 21 | Phát âm: đuôi *-s/-es* và *-ed* | /s/ /z/ /ɪz/ – /t/ /d/ /ɪd/ |
| 22 | Phát âm: nguyên âm và trọng âm từ hai âm tiết | Phân biệt nguyên âm dễ nhầm |
| 23 | Từ vựng: trường học, gia đình, nhà ở | Word form cơ bản |
| 24 | Từ vựng: thiên nhiên, lễ hội, thành phố | Từ trong ngữ cảnh |
| 25 | Communication: chào hỏi, giới thiệu, lời mời | Đáp lời phù hợp |
| 26 | Communication: hỏi đường, mua sắm, gợi ý | Chọn câu nói đúng tình huống |
| 27 | Reading: miêu tả người và nơi chốn | Thông tin chi tiết |
| 28 | Reading: thói quen và hoạt động hằng ngày | Suy luận đơn giản |
| 29 | Cloze test: giới từ và liên từ | Điền từ vào đoạn văn ngắn |
| 30 | Tổng hợp functional language | Chọn phản hồi đúng chức năng giao tiếp |

### 5.2. TIẾNG ANH 7 (A1+) — đề 1–30

| Đề | Chủ đề / Unit | Trọng tâm ngôn ngữ |
|---:|---------------|--------------------|
| 1 | Hobbies | Verbs of liking + V-ing / to-V |
| 2 | Healthy living | *should/shouldn't*, câu mệnh lệnh |
| 3 | Community service | Past simple, từ vựng hoạt động cộng đồng |
| 4 | Music and arts | So sánh tính từ và trạng từ |
| 5 | Food and drink | Lượng từ, danh từ đếm được/không đếm được |
| 6 | A visit to a school | Hiện tại tiếp diễn chỉ tương lai |
| 7 | Traffic | *used to*, *it takes…* |
| 8 | Films | Tính từ miêu tả phim, *although* |
| 9 | Festivals around the world | Ôn câu hỏi Wh- và Yes/No |
| 10 | Energy sources | *will*, câu điều kiện loại 1 |
| 11 | Travelling in the future | *will* ↔ *might* |
| 12 | English-speaking countries | Mạo từ, giới từ |
| 13 | Ôn tập: các thì hiện tại | Hiện tại đơn ↔ tiếp diễn (đối lập trong một câu) |
| 14 | Ôn tập: quá khứ đơn và tương lai đơn | Dấu hiệu nhận biết |
| 15 | Ôn tập: so sánh tính từ và trạng từ | *better*, *more slowly*, bất quy tắc |
| 16 | Ôn tập: liên từ | *and / but / so / because / although* |
| 17 | Ôn tập: giới từ đi với tính từ và động từ | *interested in*, *good at* |
| 18 | Ôn tập: V-ing và to-V sau động từ | *enjoy*, *want*, *decide* |
| 19 | Ôn tập: *It + be + adj + to-V*, đại từ | Chủ ngữ giả |
| 20 | Ôn tập: câu hỏi và đại từ nghi vấn | Ghép câu hỏi với câu trả lời |
| 21 | Phát âm: đuôi *-ed* và cặp phụ âm dễ nhầm | /t/ /d/ /ɪd/ |
| 22 | Phát âm: trọng âm từ hai và ba âm tiết | Quy tắc hậu tố |
| 23 | Từ vựng: sở thích, sức khỏe, cộng đồng | Từ trong ngữ cảnh |
| 24 | Từ vựng: giao thông, năng lượng, du lịch | Collocation cơ bản |
| 25 | Communication: đề nghị, rủ rê và cách đáp | *Why don't we…?*, *Shall we…?* |
| 26 | Communication: ý kiến, cảm thông, khen ngợi | Đáp lời tin vui/tin buồn |
| 27 | Reading: môi trường và năng lượng | Nguyên nhân – kết quả |
| 28 | Reading: văn hóa và lễ hội | Thông tin chi tiết, đại từ quy chiếu |
| 29 | Cloze test: từ nối và cấu trúc tương quan | *not only… but also*, *however* |
| 30 | Tổng hợp: đọc hiểu + từ vựng theo ngữ cảnh | Kĩ năng suy luận |

### 5.3. TIẾNG ANH 8 (A2) — đề 1–30

| Đề | Chủ đề / Unit | Trọng tâm ngôn ngữ |
|---:|---------------|--------------------|
| 1 | Leisure time | Verbs + V-ing / to-V |
| 2 | Life in the countryside | So sánh trạng từ |
| 3 | Teenagers | Câu tường thuật (câu kể) |
| 4 | Ethnic groups of Viet Nam | Ôn câu hỏi, từ vựng dân tộc |
| 5 | Our customs and traditions | *should / ought to*, *must / have to* |
| 6 | Lifestyles | Present perfect ↔ past simple |
| 7 | Environmental protection | Câu bị động (hiện tại đơn) |
| 8 | Shopping | Câu bị động (quá khứ đơn) |
| 9 | Natural disasters | Past continuous |
| 10 | Communication in the future | Thì tương lai, modals dự đoán |
| 11 | Science and technology | Mệnh đề quan hệ xác định |
| 12 | Life on other planets | Câu điều kiện loại 1 và 2 |
| 13 | Ôn tập: present perfect | *since / for / already / yet* |
| 14 | Ôn tập: câu bị động các thì cơ bản | Chuyển chủ động ↔ bị động |
| 15 | Ôn tập: câu tường thuật | Lùi thì, đổi đại từ và trạng ngữ |
| 16 | Ôn tập: mệnh đề quan hệ | *who / which / that / whose* |
| 17 | Ôn tập: câu điều kiện loại 1 và 2 | Phân biệt *will* ↔ *would* |
| 18 | Ôn tập: *used to*, quá khứ tiếp diễn | *when / while* |
| 19 | Ôn tập: liên từ nhượng bộ và nguyên nhân | *although / because / so / however* |
| 20 | Ôn tập: gerund và infinitive | Động từ theo sau bởi V-ing hay to-V |
| 21 | Phát âm: /θ/ – /ð/, /s/ – /ʃ/ | Cặp phụ âm dễ nhầm |
| 22 | Phát âm: trọng âm từ ba và bốn âm tiết | Hậu tố *-tion*, *-ic*, *-ity* |
| 23 | Từ vựng: môi trường, thiên tai, khoa học công nghệ | Collocation |
| 24 | Từ vựng: phong tục, dân tộc, mua sắm | Word form |
| 25 | Communication: từ chối lịch sự, xin phép | Mức độ lịch sự |
| 26 | Communication: mua sắm, hỏi giá, đổi trả | Câu nói đúng tình huống |
| 27 | Reading: môi trường và biến đổi khí hậu | Nguyên nhân – kết quả, suy luận |
| 28 | Reading: văn hóa và xã hội | Phân loại thông tin, câu NOT true |
| 29 | Cloze test: từ nối và collocation | Điền từ theo mạch lập luận |
| 30 | Nhận diện lỗi sai (error identification) | Xung đột thì – trạng từ, cấu trúc sai |

### 5.4. TIẾNG ANH 9 (A2 hoàn chỉnh) — đề 1–30

| Đề | Chủ đề / Unit | Trọng tâm ngôn ngữ |
|---:|---------------|--------------------|
| 1 | Local community | Câu ghép, phrasal verbs |
| 2 | City life | So sánh, phrasal verbs |
| 3 | Teen stress and pressure | Câu tường thuật (câu hỏi) |
| 4 | Life in the past | *used to*, *wish* ở hiện tại |
| 5 | Wonders of Viet Nam | Ôn câu bị động |
| 6 | Viet Nam then and now | Present perfect, mạo từ |
| 7 | Recipes and eating habits | Lượng từ, câu mệnh lệnh |
| 8 | Tourism | Mệnh đề quan hệ xác định & không xác định |
| 9 | English in the world | Câu điều kiện loại 1 và 2 |
| 10 | Space travel | Modals, thì tương lai |
| 11 | Changing roles in society | Mệnh đề trạng ngữ nhượng bộ – nguyên nhân |
| 12 | My future career | *suggest* + V-ing / that, verb patterns |
| 13 | Ôn tập: câu tường thuật đầy đủ | Câu kể, câu hỏi, câu mệnh lệnh |
| 14 | Ôn tập: mệnh đề quan hệ | Xác định ↔ không xác định, khi nào không dùng *that* |
| 15 | Ôn tập: câu bị động các thì | Bao gồm bị động với modals |
| 16 | Ôn tập: câu điều kiện và *wish* | Loại 1, loại 2, *wish* hiện tại |
| 17 | Ôn tập: liên từ và trạng từ liên kết | *although / despite / in spite of / however* |
| 18 | Ôn tập: phrasal verbs thông dụng | *give up*, *take up*, *look after*… |
| 19 | Ôn tập: gerund, infinitive, verb patterns | Sau động từ, giới từ, tính từ |
| 20 | Ôn tập: so sánh và cấu trúc so sánh đặc biệt | *the same as*, *not as… as* |
| 21 | Phát âm: nguyên âm đơn và nguyên âm đôi | /ɒ/ – /əʊ/, /ɪ/ – /iː/ |
| 22 | Phát âm: trọng âm từ và trọng âm câu | Từ bốn âm tiết |
| 23 | Từ vựng: du lịch, di sản, môi trường sống | Collocation nâng cao |
| 24 | Từ vựng: nghề nghiệp, vai trò xã hội, vũ trụ | Word form |
| 25 | Communication: phỏng vấn, giới thiệu bản thân | Ngôn ngữ trang trọng |
| 26 | Communication: gợi ý, khuyên nhủ, nêu quan điểm | Mức độ lịch sự và phù hợp |
| 27 | Reading: bài đọc dài về xã hội và nghề nghiệp | Suy luận thái độ, ý chính |
| 28 | Reading: bài đọc dài về văn hóa và du lịch | Từ đồng nghĩa trong ngữ cảnh |
| 29 | Cloze test nâng cao | Collocation, từ nối, mạch lập luận |
| 30 | Đề luyện thi vào lớp 10 — dạng tổng hợp | Đủ 5 phần theo cấu trúc đề tuyển sinh |

---

## 6. ĐỀ 31–50 (áp dụng cho cả 12 bank)

| Đề | Tên | Phạm vi kiến thức |
|---:|-----|-------------------|
| 31 | Giữa học kì I — đề 1 | Các chương đầu HK I |
| 32 | Giữa học kì I — đề 2 | Như trên, đổi ngữ liệu |
| 33 | Cuối học kì I — đề 1 | Toàn bộ HK I |
| 34 | Cuối học kì I — đề 2 | Toàn bộ HK I |
| 35 | Cuối học kì I — đề 3 (phân hóa cao) | Toàn bộ HK I, tăng tỉ trọng câu khó ở chương trọng tâm |
| 36 | Giữa học kì II — đề 1 | Các chương đầu HK II |
| 37 | Giữa học kì II — đề 2 | Như trên, đổi ngữ liệu |
| 38 | Cuối học kì II — đề 1 | HK II (có phần ôn HK I) |
| 39 | Cuối học kì II — đề 2 | HK II (có phần ôn HK I) |
| 40 | Cuối học kì II — đề 3 (phân hóa cao) | HK II, tăng tỉ trọng câu khó |
| 41 | Tổng hợp cuối năm — đề 1 | Cả năm, phủ đều mọi chương |
| 42 | Tổng hợp cuối năm — đề 2 | Cả năm, đổi ngữ liệu |
| 43 | Ôn tập trọng tâm nửa đầu chương trình | Chương 1 → giữa chương trình |
| 44 | Ôn tập trọng tâm nửa sau chương trình | Giữa chương trình → hết |
| 45 | Chuyên đề ứng dụng thực tế | Toán/KHTN: bài toán đời sống · Tiếng Anh: đọc hiểu nâng cao |
| 46 | Chuyên đề suy luận – phân tích dữ liệu | Bảng số liệu, biểu đồ, thí nghiệm, lập luận |
| 47 | Nâng cao — đề 1 (HSG cấp trường) | Cả năm, 50% câu nâng cao |
| 48 | Nâng cao — đề 2 (HSG cấp trường) | Cả năm, 50% câu nâng cao |
| 49 | Nâng cao — đề 3 (HSG cấp huyện) | Cả năm, 60% câu nâng cao |
| 50 | Tổng duyệt cuối năm | Đề đã biên soạn ở đợt trước (chuyển từ `.md` sang `.js`) |

> **Lưu ý về ma trận độ khó:** đề 1–46 giữ ma trận chuẩn **9 NB / 9 TH / 3 VD / 9 NC**. Riêng đề 47–49 (HSG) dùng ma trận **4 NB / 7 TH / 4 VD / 15 NC** — đây là ngoại lệ có chủ ý, sẽ được ghi rõ trong phần thống kê của từng đề.

---

## 7. QUY TRÌNH SINH ĐỀ (mỗi đợt)

1. Viết/bổ sung `web/data-<môn><lớp>.js` theo đúng convention repo (`o4`, `SUBJECTS.push`).
2. Mỗi câu hỏi mang đủ: `sec` (chủ đề), `lvl` (`NB`/`TH`/`VD`/`NC`), `text`, `opts`, `ans`, `why`.
3. Chạy `node tools/export-de-thcs-md.mjs` → sinh `.md` để in (không gõ tay hai lần).
4. Chạy `node tools/check-de-thcs.mjs` → kiểm tra tự động: đủ 30 câu, đúng ma trận độ khó, cân bằng A/B/C/D, không có chuỗi đáp án lặp, không có cụm ≥3 câu nâng cao liền nhau.
5. Cập nhật bảng **TIẾN ĐỘ** ở mục 2.
