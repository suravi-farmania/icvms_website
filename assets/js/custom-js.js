window.addEventListener("load", function () {
  AOS.init();
});;


// ====== Hamburger Menu Click Js ====== //

const hamburger = document.getElementById("hamburger_menu");
hamburger.addEventListener('click', function () {
    var element1 = document.getElementById("collapse_menu");
    var element2 = document.getElementById("menu_overlay");
    var element3 = document.getElementById("body");
    element1.classList.toggle("collapse-menu-open");
    element2.classList.toggle("collapse-overlay");
    element3.classList.toggle("overflow-hidden");
});

// ====== Menu Overlay Click Js ====== //

const menuoverlay = document.getElementById("menu_overlay");
menuoverlay.addEventListener('click', function () {
    var element4 = document.getElementById("collapse_menu");
    var element5 = document.getElementById("menu_overlay");
    var element6 = document.getElementById("body");
    element4.classList.toggle("collapse-menu-open");
    element5.classList.toggle("collapse-overlay");
    element6.classList.toggle("overflow-hidden");
});

// ====== Menu Close Click Js ====== //

const menuclose = document.getElementById("colapse_close");
menuclose.addEventListener('click', function () {
    var element7 = document.getElementById("collapse_menu");
    var element8 = document.getElementById("menu_overlay");
    var element9 = document.getElementById("body");
    element7.classList.toggle("collapse-menu-open");
    element8.classList.toggle("collapse-overlay");
    element9.classList.toggle("overflow-hidden");
});




// ====== OnScroll Header Class Add and Remove Js ====== //

const main_Header = document.querySelector(".main-header")
const main_Header_Height = main_Header.offsetHeight

const add_class_on_scroll = () => main_Header.classList.add("dark");
const remove_class_on_scroll = () => main_Header.classList.remove("dark");

window.addEventListener('scroll', function () {
    // scrollpos = window.scrollY;

    if (window.scrollY >= main_Header_Height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    // console.log(scrollpos)

})


// header search function

let header_SearchEl = document.querySelector(".header-search-icon");
let header_Srch_Frm = document.querySelector(".header-srch-wpr");
let header_Srch_close = document.querySelector(".header-srch-close");
if (header_SearchEl) {
    header_SearchEl.onclick = () => {
        header_Srch_Frm.classList.add("open");
    }
}

if (header_Srch_close) {
    header_Srch_close.onclick = () => {
        header_Srch_Frm.classList.remove("open");
    }
}


