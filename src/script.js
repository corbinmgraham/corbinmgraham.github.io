var more_links = false;

function start_app() {
    load_page("home");
    // marquee_func();
}
// function marquee_func() {
//     const st = document.getElementById("bottom_st");
//     let w = 10;
//     let t = "CORBIN.ML ";
//     while(w > 0) {
//         t += t;
//         w--;
//     }
//     st.innerText = t;
// }
// function change_title(title=null) {
//     if (title == null) return;
//     document.getElementById("page_title").innerText = title;
// }
var x = 1000;
function get_browser() {
    const browser = document.getElementById("browse");
    return browser;
}
function deep_scroll(browser=get_browser()) {
    // x += 10;
    // get_browser().style.height = (x + 'px');
}
function get_file(f) {
    f = '<object id="stan" type="text/html" data="src/pages/' + f + '.html"></object>';

    return f;
}
function load_page(page=null) {
    const browser = get_browser();
    const file = get_file(page);
    x = 1000;
    if (page == null) return;
    browser.innerHTML = file;
    // change_title(page);
    more_links = true;
    nav_more();
}
function nav_more() {
    const n = document.getElementById("more-nav");
    const m = document.getElementById("more-icon");
    if (more_links) {
        m.className = "fa-solid fa-angle-down";
        n.style.visibility = "hidden";
        n.style.height = "0";
        more_links = false;
    } else {
        m.className = "fa-solid fa-angle-up";
        n.style.visibility = "visible";
        n.style.height = "auto";
        more_links = true;
    }
}