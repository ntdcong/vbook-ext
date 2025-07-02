load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();
    let images = [];

    // Lấy tất cả ảnh trong content chương
    doc.select(".manga-child-the-content img").forEach(e => {
        let img = e.attr("src");
        if (!img) return;

        img = img.trim();

        // Loại ảnh không cần
        if (
            img.includes("warning") ||
            img.includes("discord") ||
            img.includes("x99") ||
            img.includes("donate") ||
            img.includes("creblogtruyen")
        ) {
            return;
        }

        // Chuẩn hóa URL ảnh
        if (img.startsWith("//")) img = "https:" + img;
        else if (img.startsWith("/")) img = BASE_URL + img;

        // Thêm fallback link (vBook yêu cầu)
        images.push({
            link: img,
            fallback: [
                null,
                'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&resize_h=0&rewriteMime=image/*&url=' + encodeURIComponent(img)
            ]
        });
    });

    return Response.success(images);
}
