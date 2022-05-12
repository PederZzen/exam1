// API Fetch - Henter JSON fil fra WP backend og skriver ut til siden 

const url = "https://espenpedersen.no/exam1/wp-json/wp/v2/posts?_embed";
const output = document.querySelector(".API-output");

fetch(url)
 .then(response => response.json())
 .then(posts => {
     listData(posts);
     console.log(posts);
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
        <a href="./blogpost.html?id=${posts[i].id}">
            <div class="API-output__card">
                <img src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${posts[i]._embedded['wp:featuredmedia']['0'].alt_text}" class="image-style">
                <p>${posts[i].date}</p>
                <h2>${posts[i].title.rendered}</h2>
            </div>
        </a>` 
    }
 }