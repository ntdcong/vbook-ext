load('config.js');

function execute(url, page) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        let novelList = [];
        let elements = doc.select(".post");

        if (elements.isEmpty()) {
            return Response.error("Không tìm thấy .post nào.");
        }

        elements.forEach(e => {
            let name = e.select(".titleh6series a").text();
            let link = e.select(".titleh6series a").attr("href");
            let cover = e.select("img").first().attr("src");
            let description = e.select("table tr").first().select("a").text();

            novelList.push({
                name: name,
                link: link,
                cover: cover,
                description: description,
                host: BASE_URL
            });
        });

        return Response.success(novelList);
    }

    return Response.error("Fetch không thành công.");
}
