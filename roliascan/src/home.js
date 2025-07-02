load('config.js');
function execute() {
    return Response.success([
        {title: "Mới cập nhật", input: BASE_URL + "/updated-mangas0", script: "tab.js"},
        {title: "A-Z", input: BASE_URL + "/manga/?_sort_posts=title_a_z", script: "tab.js"}
    ]);
}
