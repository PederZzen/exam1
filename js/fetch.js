// API Fetch - Henter JSON fil fra WP backend og skriver ut til siden 

const url = "https://espenpedersen.no/exam1/wp-json/wp/v2/posts?_embed";
const output = document.querySelector(".API-output");

fetch(url)
 .then(response => response.json())
 .then(posts => {
     listData(posts);
     console.log(posts)
     carouselFunction();
 })
 .catch(error => console.error("Error: " + error))
 .finally(document.getElementById("loading").style.display = "none");


function listData(posts) {
    output.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {

        // Laster inn alle poster for bloggsiden, men bare de seks nyeste på framsiden 
        if(!document.querySelector(".loadAllPosts")) {
            if(i === 6) { break }
        }
        output.innerHTML += `
        <div class="API-output__card">
            <a href="./blogpost.html?id=${posts[i].id}">
                <img src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${posts[i]._embedded['wp:featuredmedia']['0'].alt_text}" class="image-style">
                <p>${posts[i].date}</p>
                <h2>${posts[i].title.rendered}</h2>
            </a>
        </div>` 
    }
}

let carouselFunction = () => {
    let slideIndex = 1;
    showsSlides(slideIndex);

    function plusSlides(n) {
        showsSlides(slideIndex += n);
    }

    function showsSlides(n) {
        let slides = document.querySelectorAll(".API-output__card");
        let currentCard = slides[slideIndex - 1];
        let nextCard = slides[slideIndex];

        if (n > slides.length - 1) { slideIndex = 1 };
        if (n < 1) {slideIndex = slides.length - 1};
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex].style.display = "block";
        slides[slideIndex - 1].style.display = "block";
    }

   let rightBtn = document.querySelector(".carousel-button__right");
   rightBtn.addEventListener("click", () => {
        plusSlides(1);
    })

   let leftBtn = document.querySelector(".carousel-button__left");
   leftBtn.addEventListener("click", () => {
       plusSlides(-1);
    })
}


