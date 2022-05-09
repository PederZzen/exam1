// API Fetch - Henter JSON fil fra WP backend og skriver ut til siden 

const url = "https://espenpedersen.no/exam1/wp-json/wp/v2/posts?_embed";
const output = document.querySelector(".API-output");

fetch(url)
 .then(response => response.json())
 .then(posts => {
     listData(posts);
     console.log(posts);
 })
 .catch(error => console.error("Error: " + error));

 function listData(posts) {
    output.innerHTML = "";

    for (let post of posts) {
        output.innerHTML += `
        <a href="./blogpost.html?id=${post.id}">
            <div class="API-output__card">
                <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="${post._embedded['wp:featuredmedia']['0'].alt_text}" class="image-style">
                <p>${post.date}</p>
                <h2>${post.title.rendered}</h2>
            </div>
        </a>` 
    }
 }


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

