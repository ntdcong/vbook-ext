# Comic Extension Template

Đây là template để tạo extension đọc truyện cho một trang web truyện tranh bất kỳ.

## Cấu trúc thư mục

```
comic-extension/
├── icon.png
├── plugin.json
├── src
│   ├── chap.js
│   ├── detail.js
│   ├── genre.js
│   ├── home.js
│   ├── search.js
│   ├── toc.js

```

## Hướng dẫn tạo extension mới

1. **Sao chép thư mục mẫu này** và đổi tên cho phù hợp với trang truyện bạn muốn làm extension.

2. **Chỉnh sửa file `plugin.json`:**
   - `name`: Tên extension.
   - `author`: Tên của bạn.
   - `version`: Phiên bản extension.
   - `source`: Địa chỉ trang web truyện.
   - `regexp`: Regex để nhận diện URL truyện/chapter.
   - `description`: Mô tả ngắn về extension.
   - `locale`: Ngôn ngữ (ví dụ: `en_US`).
   - `type`: Luôn để là `comic`.
   - `language`: Ngôn ngữ lập trình, thường là `javascript`.
   - Trong phần `script`, khai báo các file js tương ứng với từng chức năng.

3. **Cập nhật các file JS**:
   - `home.js`: Lấy danh sách truyện mới/cập nhật.
   - `genre.js`: Lấy danh sách thể loại.
   - `search.js`: Tìm kiếm truyện.
   - `detail.js`: Lấy thông tin chi tiết truyện.
   - `toc.js`: Lấy danh sách chương.
   - `chap.js`: Lấy nội dung chương.

4. **Viết code cho từng file JS** theo API hoặc cấu trúc HTML của trang truyện bạn muốn lấy dữ liệu.

5. **Kiểm tra lại extension** trên ứng dụng hoặc nền tảng hỗ trợ.

## Lưu ý

- Đảm bảo tuân thủ điều khoản sử dụng của trang web truyện.
- Không sử dụng extension cho mục đích thương mại nếu chưa được phép.

---

**Ví dụ cấu hình `plugin.json`:**

```json
{
  "metadata": {
    "name": "Comic Extension",
    "author": "Your Name",
    "version": 1,
    "source": "https://yourcomicwebsite.com",
    "regexp": "yourcomicwebsite\\.com/(manga|reader)/[^/]+(/chapter-\\d+)?/?$",
    "description": "An extension for reading comics on yourcomicwebsite.com",
    "locale": "en_US",
    "type": "comic",
    "language": "javascript"
  },
  "script": {
    "home": "home.js",
    "genre": "genre.js",
    "search": "search.js",
    "detail": "detail.js",
    "toc": "toc.js",
    "chap": "chap.js"
  }
}
```

Chúc bạn thành công!

---
