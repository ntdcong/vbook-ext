load('config.js');

function execute() {
    return Response.success([
        {title: "Latest Updates", input: BASE_URL + "/updated-comics", script: "tab.js"},
        {title: "A-Z", input: BASE_URL + "/comics/?_sort_posts=title_a_z", script: "tab.js"},
        {title: "Genres", input: BASE_URL + "/genres", script: "genre.js"},
        {title: "Search", input: BASE_URL + "/search", script: "search.js"}
    ]);
}