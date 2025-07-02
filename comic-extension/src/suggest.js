// filepath: comic-extension/src/suggest.js
load('config.js');

function execute() {
    let suggestions = [];
    
    // Example logic for generating suggestions
    let response = fetch(BASE_URL + "/popular-comics");
    if (response.ok) {
        let doc = response.html();
        doc.select(".comic-item").forEach(e => {
            let title = e.select(".comic-title").text();
            let link = e.select(".comic-title a").attr("href");
            let cover = e.select(".comic-cover img").attr("src");

            suggestions.push({
                title: title,
                link: link.startsWith("http") ? link : BASE_URL + link,
                cover: cover
            });
        });
    }

    return Response.success(suggestions);
}