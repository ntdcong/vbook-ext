load('config.js');

function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let novelList = [];

        doc.select("div.p-3").forEach(e => {
            let aTag = e.select("a").first();
            let img = aTag.select("img").first();
            let title = e.select("h5 a").text();
            let link = aTag.attr("href");
            let cover = img ? img.attr("src") : "";
            let description = e.select(".custom-badge").text();  // Ví dụ: "Manhwa"

            novelList.push({
                name: title,
                link: link,
                cover: cover,
                description: description,
                host: BASE_URL
            });
        });

        return Response.success(novelList);
    }
    return null;
}
