# Ôn Thi Học Kì — Toán 2 & Toán Tư Duy 2

App Android giúp học sinh lớp 2 luyện đề trắc nghiệm, chạy hoàn toàn offline:
- **Toán 2 — Cuối học kì 2**: 10 đề (256 câu), chuyển thể đầy đủ từ bộ đề gốc, chấm theo biểu điểm 10
- **Toán tư duy lớp 2**: 24 đề × 10 câu = **240 bài** chuyển thể từ "175 bài toán tư duy hàng tuần" + "1001 bài toán tư duy (phần 1, bài 1–65)"
- **ASMO Toán quốc tế lớp 2**: 4 đề thi thật (2014 · 2015 · 2017 · 2018) × 20 câu, dịch tiếng Việt, đủ 5 lựa chọn A–E như đề gốc + lời giải chi tiết

## Tính năng
- Mọi dạng bài (trắc nghiệm, tự luận, đúng/sai, nối, điền số, quy luật hình…) đều chuyển thể trắc nghiệm 4 lựa chọn + **lời giải chi tiết từng câu**
- Hình minh họa **vẽ lại bằng SVG** sắc nét, không watermark
- Đồng hồ đếm ngược, lưới điều hướng câu hỏi, tự nộp khi hết giờ
- Màn kết quả: vòng điểm, xếp loại, thống kê Đúng/Sai/Bỏ qua, xem lời giải
- Lưu tiến độ & điểm cao nhất từng đề trên máy (localStorage) — chạy **hoàn toàn offline**

## Cấu trúc
- `web/` — toàn bộ ứng dụng (HTML/CSS/JS + `data.js` Toán CK2 + `data-tuduy.js` Toán tư duy + `assets/` hình, `assets/td/` hình tư duy)
- `app/` — module Android (WebView + phục vụ assets nội bộ, đọc assets từ `../web`)

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
