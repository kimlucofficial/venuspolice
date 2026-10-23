# Venus Police Department — Website

Website tĩnh (HTML/CSS/JS thuần), không cần build. Deploy thẳng lên Vercel.

## Cấu trúc

```
index.html        Bố cục trang
style.css         Toàn bộ giao diện
data.js           Nội dung: Discord, ban lãnh đạo, lực lượng, cấp bậc, bảng xếp hạng
laws.js           Nội dung 7 bộ luật
main.js           Hiệu ứng, slide, tra cứu, bảng xếp hạng
logo.webp, favicon.png, og.png
vercel.json       Cấu hình Vercel
```

## Sửa nội dung

- **Link Discord, ban lãnh đạo, ảnh:** `data.js` → `discord`, `people` (dán link ảnh vào `img`).
- **Bảng xếp hạng:** `data.js` → `officers` (hiện là dữ liệu mẫu) và `points` (hệ số điểm).
- **Bộ luật:** `laws.js`. Thêm loại cướp: sao chép một khối `<details class="heist">…</details>`.

## Chạy thử trên máy

Mở thẳng `index.html` bằng trình duyệt là chạy.

## Deploy

1. Tạo repo GitHub, đẩy toàn bộ thư mục này lên.
2. Vào vercel.com → Add New → Project → chọn repo.
3. Framework Preset: **Other**. Build Command để trống. Output Directory để trống.
4. Deploy.
