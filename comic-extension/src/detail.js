// filepath: comic-extension/src/detail.js
load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:www\.)?[^\/]+/, BASE_URL);

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();
    let title = doc.select("h1.title").text();
    let author = doc.select(".author").text();
    let cover = doc.select(".cover img").attr("src");
    let description = doc.select(".description").text();
    let genres = [];
    
    doc.select(".genres a").forEach(e => {
        genres.push(e.text());
    });

    return Response.success({
        title: title,
        author: author,
        cover: cover,
        description: description,
        genres: genres,
        host: BASE_URL
    });
}