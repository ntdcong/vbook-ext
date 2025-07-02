load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:www\.)?[^\/]+/, BASE_URL);

    if (!url.endsWith("/chapterlist/")) {
        if (!url.endsWith("/")) url += "/";
        url += "chapterlist/";
    }

    let response = fetch(url);
    if (!response.ok) {
        return Response.error("Unable to load chapter page.");
    }

    let doc = response.html();
    let chapters = [];

    doc.select("#chapter-list a.seenchapter").forEach(e => {
        let name = e.text().trim();
        let href = e.attr("href");

        if (name && href) {
            chapters.push({
                name: name,
                url: href.startsWith("http") ? href : BASE_URL + href,
                host: BASE_URL
            });
        }
    });

    if (chapters.length === 0) {
        return Response.error("No chapters found.");
    }

    return Response.success(chapters.reverse());
}