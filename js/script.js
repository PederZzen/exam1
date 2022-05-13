// -----------------------------------------------------------------------------------
//  Hamburger menu - Viser meny og endrer ikon

const menuBtn = document.querySelector("#menu-icon");
const menuBtnClose = document.querySelector("#menu-icon__close");
const menu = document.querySelector(".top__nav");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
    menu.style.transform = "translateY(0)";
    menuBtn.style.display = "none";
    menuBtnClose.style.display = "block";
})

menuBtnClose.addEventListener("click", () => {
    body.classList.remove("show_menu");
    menu.style.transform = "translateY(-100%)";
    menuBtn.style.display = "block";
    menuBtnClose.style.display = "none";
})


// ------------------------------------------------------------------------------------
// Scroll effect - Endrer bakgrunnsfargen på header for bedre kontrast ved scrolling

window.onscroll = function () { scrollFunction() };

function scrollFunction () {
    const headerShadow = document.querySelector("#header-shadow")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerShadow.classList.add("header-shadow__scroll");
    } else {
        headerShadow.classList.remove("header-shadow__scroll");
    }
}
