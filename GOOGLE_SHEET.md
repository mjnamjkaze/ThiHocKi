# Thống kê kết quả thi về Google Sheet

Web app đã có sẵn code gửi kết quả mỗi lần học sinh nộp bài. Chỉ cần tạo một
Google Apps Script (miễn phí, chỉ cần tài khoản Google thường) và dán URL vào
`web/app.js` là chạy.

## Bước 1 — Tạo Google Sheet + Apps Script

1. Vào https://sheets.new tạo một Sheet mới, đặt tên ví dụ **"KetQua OnThiHocKi"**.
2. Trên Sheet đó: menu **Tiện ích mở rộng (Extensions) → Apps Script**.
3. Xóa hết code mẫu, dán đoạn sau rồi bấm **Lưu**:

```javascript
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('KetQua') || ss.insertSheet('KetQua');
  if (sh.getLastRow() === 0) {
    sh.appendRow(['Thời gian nộp', 'Học sinh', 'Môn', 'Đề', 'Điểm', 'Đúng', 'Sai', 'Bỏ qua', 'Ghi chú']);
  }
  sh.appendRow([
    new Date(d.date), String(d.user).slice(0, 30), d.subject, d.exam,
    d.score, d.correct, d.wrong, d.skip, d.auto ? 'hết giờ, nộp tự động' : '',
  ]);
  return ContentService.createTextOutput('ok');
}
```

## Bước 2 — Deploy thành Web App

1. Bấm **Triển khai (Deploy) → Tùy chọn triển khai mới (New deployment)**.
2. Loại: **Ứng dụng web (Web app)**.
3. **Execute as / Thực thi với tư cách**: *Tôi (Me)*.
4. **Who has access / Ai có quyền truy cập**: *Bất kỳ ai (Anyone)* — bắt buộc,
   nếu không trang web sẽ không gửi được.
5. Bấm **Deploy**, cấp quyền khi Google hỏi (Authorize access).
6. Copy **URL Web app** (dạng `https://script.google.com/macros/s/AKfycb.../exec`).

## Bước 3 — Dán URL vào web app

Mở `web/app.js`, tìm dòng:

```javascript
const SHEET_ENDPOINT = '';
```

dán URL vào giữa hai dấu nháy, commit + push lên `main` — trang tự deploy lại.

## Ghi chú

- Mỗi lần học sinh nộp bài (kể cả hết giờ tự nộp), Sheet thêm một dòng.
- Gửi lỗi (mất mạng…) thì bỏ qua trong im lặng, không ảnh hưởng việc làm bài;
  kết quả vẫn luôn lưu trong máy học sinh như trước.
- Muốn đổi code Apps Script sau này: sửa xong phải **Deploy → Manage deployments
  → Edit → Version: New version** thì thay đổi mới có hiệu lực (URL giữ nguyên).
