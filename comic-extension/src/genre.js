load('config.js');

function execute() {
    let genres = [];
    let response = fetch(BASE_URL + "/genres");
    
    if (!response.ok) {
        return Response.error("Unable to fetch genres.");
    }

    let doc = response.html();
    doc.select(".genre-list a").forEach(e => {
        let name = e.text().trim();
        let link = e.attr("href");

        if (name && link) {
            genres.push({
                name: name,
                url: link.startsWith("http") ? link : BASE_URL + link,
                host: BASE_URL
            });
        }
    });

    if (genres.length === 0) {
        return Response.error("No genres found.");
    }

    return Response.success(genres);
}