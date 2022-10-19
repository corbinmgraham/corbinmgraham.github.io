function start_app() {
    load_page("home");
    const st = document.getElementById("bottom_st");
    let w = 10;
    let t = "CORBIN.ML ";
    while(w > 0) {
        t += t;
        w--;
    }
    st.innerText = t;
}
function change_title(title=null) {
    if (title == null) return;
    document.getElementById("page_title").innerText = title;
}
function load_page(page=null) {
    if (page == null) return;
    document.getElementById("browse").innerHTML =
        '<object type="text/html" data="src/pages/' + page + '.html"></object>';
    change_title(page);
}