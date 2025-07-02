load('config.js');

function execute() {
    let response = fetch(BASE_URL + "/genres/");
    if (response.ok) {
        let doc = response.html();
        let genreList = [];

        doc.select("div.article-feed > div.post").forEach(e => {
            let name = e.select("h6 a").text();
            let link = e.select("h6 a").attr("href");

            genreList.push({
                title: name,
                input: link,
                script: "gen.js"
            });
        });

        return Response.success(genreList);
    }

    return null;
}
