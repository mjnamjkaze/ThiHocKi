# Ôn Thi Học Kì — Lớp 2 & Lớp 3

App luyện đề trắc nghiệm (web tĩnh + WebView Android), chạy hoàn toàn offline. **189 đề · 1 815 câu.**

### Lớp 2
- **Toán 2 — Cuối học kì 2**: 15 đề (321 câu) chuyển thể từ bộ đề gốc + 5 đề Cánh Diều
- **Toán tư duy lớp 2**: 24 đề × 10 câu chuyển thể từ "175 bài toán tư duy hàng tuần" + "1001 bài toán tư duy"
- **Tư duy MathX lớp 2**: 50 phiếu hàng tuần (258 câu)
- **ASMO Toán quốc tế lớp 2**: 4 đề thi thật (2014 · 2015 · 2017 · 2018) × 20 câu, dịch tiếng Việt, đủ 5 lựa chọn A–E
- **Đấu trường VioEdu lớp 2**: Toán · Tiếng Việt · Toán Tiếng Anh — mỗi môn 16 đề

### Lớp 3
- **Đấu trường VioEdu lớp 3**: Toán · Tiếng Việt · Toán Tiếng Anh — mỗi môn 16 đề

### Bộ đề VioEdu (96 đề)
Đủ các vòng của **hai năm học 2024–2025 và 2025–2026**, mỗi năm: **Sơ loại vòng 1 → vòng 6 → Cấp Trường → Cấp Quận/Huyện**.
Cấu trúc vòng thi và chủ điểm bám theo thể lệ chính thức [Đấu trường Toán học VioEdu](https://vio.edu.vn) (FPT).
Các câu đánh dấu `/*src*/` trong file dữ liệu là câu **thật** từ đề công bố công khai
([VnExpress](https://vnexpress.net/3-de-on-luyen-cho-hoc-sinh-lop-hai-tai-dau-truong-toan-hoc-vioedu-4291978.html),
[HoaTieu](https://hoatieu.vn/de-thi-vioedu-lop-2-245854), [Toán IQ](https://www.toaniq.com/));
các câu còn lại được biên soạn bám sát chủ điểm và dạng bài của từng vòng.
Môn Toán Tiếng Anh ra đề **song ngữ Anh – Việt**, lời giải bằng tiếng Việt.

## Tính năng
- **Chọn lớp** ngay ở trang chủ (lớp 2 / lớp 3), danh sách môn học đổi theo khối
- Mọi dạng bài (trắc nghiệm, tự luận, đúng/sai, nối, điền số, quy luật hình…) đều chuyển thể trắc nghiệm 4 lựa chọn + **lời giải chi tiết từng câu**
- Hình minh họa **vẽ lại bằng SVG** sắc nét, không watermark
- Đồng hồ đếm ngược, lưới điều hướng câu hỏi, tự nộp khi hết giờ
- Màn kết quả: vòng điểm, xếp loại, thống kê Đúng/Sai/Bỏ qua, xem lời giải
- Lưu tiến độ & điểm cao nhất từng đề trên máy (localStorage) — chạy **hoàn toàn offline**

## Cấu trúc
- `web/` — toàn bộ ứng dụng (HTML/CSS/JS). Mỗi ngân hàng đề là một file `data-*.js` tự đăng ký vào `SUBJECTS`:
  `data.js` (Toán CK2) · `data-ck2cd.js` (Cánh Diều) · `data-tuduy.js` · `data-mathx.js` · `data-asmo.js` ·
  `data-vioedu2-{toan,tviet,tanh}.js` · `data-vioedu3-{toan,tviet,tanh}.js`
- `web/assets/` — hình minh hoạ (`td/` tư duy, `mathx/`, `asmo/`, `vioedu/`)
- `app/` — module Android (WebView + phục vụ assets nội bộ, đọc assets từ `../web`)
- Web tĩnh tự deploy lên GitHub Pages khi push nhánh `main` (xem `.github/workflows/`)

## Build
```powershell
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
.\gradlew.bat assembleRelease
# APK: app\build\outputs\apk\release\app-release.apk
```

Chạy thử trên trình duyệt (không cần Android):
```
cd web && node serve.mjs   # mở http://localhost:8123
```

## Ghi chú
Nội dung câu hỏi chuyển thể từ bộ đề ôn tập của giáo viên (dùng cho mục đích học tập cá nhân).
