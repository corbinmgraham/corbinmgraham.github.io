var more_links = false;

function start_app() {
    const addr = window.location.href;
    if (addr.includes('?')) {
        set_addr( addr.split('?')[1]);
    }
    else load_page("home");
    // marquee_func();
}
function set_addr(loc) {
    
    // load_page("loc")
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

function set_addr(page=null) {
    const browser = get_browser();
    const file = get_file(page);
    x = 1000;
    if (page == null) return;
    browser.innerHTML = file;
    // change_title(page);
    more_links = true;
    custom_bg(page);
    nav_more();
}
function load_page(page=null) {
    if (!page) return;
    const addr = window.location.href
    window.location.href = addr.split('?')[0] + '?' + page;
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
function custom_bg(page)
{
    const body = document.querySelector("body");
    // if(page === "ml") body.style.background = "white";
    if (page === "crypto") body.style.background = "black";
}