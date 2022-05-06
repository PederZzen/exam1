const url = "https://espenpedersen.no/exam1/wp-json/wp/v2/posts?_embed";
const output = document.querySelector(".carousel__container");

fetch(url)
 .then(response => response.json())
 .then(data => {
     listData(data);
     console.log(data);
 })
 .catch(error => console.error("Error: " + error));

 function listData(data) {
    output.innerHTML = "";

    for (let post of data) {
        output.innerHTML += `
        <div class="carousel__container--card">
            <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="${post._embedded['wp:featuredmedia']['0'].alt_text}">
            <p>${post.date}</p>
            <h2>${post.title.rendered}</h2>
        </div>`
    }
 }