// filepath: comic-extension/comic-extension/src/search.js
load('config.js');

function execute(query) {
    let response = fetch(BASE_URL + "/search?q=" + encodeURIComponent(query));
    if (!response.ok) return Response.error("Search failed.");

    let doc = response.html();
    let results = [];

    doc.select(".search-results .result-item").forEach(e => {
        let title = e.select(".title a").text();
        let link = e.select(".title a").attr("href");
        let cover = e.select("img").attr("src");
        let description = e.select(".description").text();

        results.push({
            title: title,
            link: link.startsWith("http") ? link : BASE_URL + link,
            cover: cover,
            description: description,
            host: BASE_URL
        });
    });

    if (results.length === 0) {
        return Response.error("No results found.");
    }

    return Response.success(results);
}