// filepath: comic-extension/src/chap.js
load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();
    let images = [];

    doc.select(".manga-child-the-content img").forEach(e => {
        let img = e.attr("src");
        if (!img) return;

        img = img.trim();

        if (
            img.includes("warning") ||
            img.includes("discord") ||
            img.includes("x99") ||
            img.includes("donate") ||
            img.includes("creblogtruyen")
        ) {
            return;
        }

        if (img.startsWith("//")) img = "https:" + img;
        else if (img.startsWith("/")) img = BASE_URL + img;

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