# Ôn Thi Học Kì — Toán 2 Cuối Học Kì 2

App Android giúp học sinh lớp 2 luyện **10 đề kiểm tra Toán cuối học kì 2** dưới dạng trắc nghiệm — chuyển thể đầy đủ từ bộ đề gốc (đủ đề, đủ câu, đủ hình minh họa), có chấm điểm theo biểu điểm 10 và lời giải chi tiết từng câu.

## Tính năng
- **256 câu hỏi / 10 đề**, mỗi đề 35 phút, thang điểm 10 đúng theo biểu điểm gốc
- Mọi dạng bài (trắc nghiệm, tự luận, đúng/sai, nối, điền số, chắc chắn–có thể–không thể) đều được chuyển thể trắc nghiệm
- Hình minh họa: sơ đồ/hình học vẽ lại bằng **SVG** sắc nét; ảnh gốc được xử lý tăng nét
- Đồng hồ đếm ngược, lưới điều hướng câu hỏi, tự nộp khi hết giờ
- Màn kết quả: vòng điểm, xếp loại, thống kê Đúng/Sai/Bỏ qua, **xem lời giải chi tiết**
- Lưu tiến độ & điểm cao nhất từng đề trên máy (localStorage) — chạy **hoàn toàn offline**

## Cấu trúc
- `web/` — toàn bộ ứng dụng (HTML/CSS/JS + `data.js` chứa 10 đề + `assets/` hình)
- `app/` — module Android (WebView + WebViewAssetLoader, đọc assets từ `../web`)

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
