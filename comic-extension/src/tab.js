// filepath: comic-extension/comic-extension/src/tab.js
load('config.js');

function execute(url, page) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        let comicList = [];
        let elements = doc.select(".comic-item");

        if (elements.isEmpty()) {
            return Response.error("No comics found.");
        }

        elements.forEach(e => {
            let title = e.select(".comic-title a").text();
            let link = e.select(".comic-title a").attr("href");
            let coverImage = e.select("img").first().attr("src");
            let summary = e.select(".comic-summary").text();

            comicList.push({
                title: title,
                link: link,
                cover: coverImage,
                summary: summary,
                host: BASE_URL
            });
        });

        return Response.success(comicList);
    }

    return Response.error("Fetch failed.");
}