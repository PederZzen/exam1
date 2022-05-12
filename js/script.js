// -----------------------------------------------------------------------------------
//  Hamburger menu - Viser meny og endrer ikon

const menuBtn = document.querySelector("#menu-icon");
const menuBtnClose = document.querySelector("#menu-icon__close");
const menu = document.querySelector(".top__nav");

menuBtn.addEventListener("click", () => {
    menu.style.display = "block";
    menuBtn.style.display = "none";
    menuBtnClose.style.display = "block";
})

menuBtnClose.addEventListener("click", () => {
    menu.style.display = "none";
    menuBtn.style.display = "block";
    menuBtnClose.style.display = "none";
})


// ------------------------------------------------------------------------------------
// Scroll effect - Endrer bakgrunnsfargen på header for bedre kontrast ved scrolling

window.onscroll = function () { scrollFunction() };

function scrollFunction () {
    const headerShadow = document.querySelector("#header-shadow")
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        headerShadow.classList.add("header-shadow__scroll");
    } else {
        headerShadow.classList.remove("header-shadow__scroll");
    }
}
