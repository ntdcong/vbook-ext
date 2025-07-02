load('config.js');

function execute(key, page) {
    if (!page) page = 1;
    let url = BASE_URL + "/?s=" + encodeURIComponent(key) +
        "&asp_active=1&p_asid=1&p_asp_data=1&asp_gen[]=excerpt&asp_gen[]=title&asp_gen[]=exact&filters_initial=1&filters_changed=0&qtranslate_lang=0&current_page_id=-1";

    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();
    let list = [];

    doc.select("div.card.border-0.shadow-sm").forEach(card => {
        let name = card.select("h4 a").text();
        let link = card.select("h4 a").attr("href");
        let cover = card.select("img").attr("src");

        list.push({
            name: name,
            link: link,
            cover: cover,
            host: BASE_URL
        });
    });

    return Response.success(list);
}

