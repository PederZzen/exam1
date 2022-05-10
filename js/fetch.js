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