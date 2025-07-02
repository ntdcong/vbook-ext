load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:www\.)?([^/]+)(\/.+)/i, BASE_URL + "$2");
    let response = fetch(url);
    if (!response.ok) return null;
    let doc = response.html();
    let name = doc.select("h1").first().text();
    let cover = doc.select(".poster").first().attr("src");
    let author = "Không rõ";

    // Lấy phần mô tả (description) từ các thẻ <p> bên trong card-body
    let paragraphs = doc.select("div.card-body > p");
    let description = "";
    paragraphs.forEach(p => {
        let html = p.html().trim();
        if (html) {
            description += html + "<br><br>";
        }
    });

    let genres = [];
    doc.select('div.d-inline-block a').forEach(el => {
        let name = el.text().trim();
        if (name) {
            genres.push({
                title: name,
                input: name.toLowerCase().replace(/\s+/g, "-"),
                script: "gen.js"
            });
        }
    });

    return Response.success({
        name: name,
        cover: cover,
        author: author,
        description: description.trim(),
        detail: "Nguồn: Roliascan.com",
        genres: genres,
        host: BASE_URL
    });
}
