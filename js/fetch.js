// API Fetch - Henter JSON fil fra WP backend og skriver ut til siden 

const url = "https://espenpedersen.no/exam1/wp-json/wp/v2/posts?_embed";
const output = document.querySelector(".API-output");

fetch(url)
 .then(response => response.json())
 .then(posts => {
     listData(posts);
     console.log(posts)
     enableCarousel();
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
    
        let date = new Date(posts[i].date);
        let localDate = date.toLocaleString("default", {day: "numeric", month: "short", year: "numeric"});
        // console.log(localDate);

        output.innerHTML += `
        <div class="API-output__card">
            <a href="./blogpost.html?id=${posts[i].id}">
                <img src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${posts[i]._embedded['wp:featuredmedia']['0'].alt_text}" class="image-style">
                <p>${localDate}</p>
                <h2>${posts[i].title.rendered}</h2>
            </a>
        </div>` 
    }
}

let enableCarousel = () => {
    let rightBtn = document.querySelector(".carousel-button__right");
    let leftBtn = document.querySelector(".carousel-button__left");
    let cards = document.querySelectorAll(".API-output__card");
    let nextCardIndex = 1;

    function changeCard(i) {
        carousel(nextCardIndex += i);
    }

    rightBtn.addEventListener("click", () => changeCard(1))
    leftBtn.addEventListener("click", () => changeCard(-1))
    
    carousel(nextCardIndex);

    function carousel() {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "none";
        }

        cards[nextCardIndex].style.display = "block";
        cards[nextCardIndex - 1].style.display = "block";

        if (nextCardIndex === 5) {
            rightBtn.style.display = "none";
        } else if (nextCardIndex === 1) {
            leftBtn.style.display = "none";
        } else {
            rightBtn.style.display ="block";
            leftBtn.style.display ="block";
        }
    }
}


