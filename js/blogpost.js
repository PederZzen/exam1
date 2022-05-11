const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
const url = "https://espenpedersen.no/exam1/wp-json/wp/v2/posts/" + id + "?_embed";
const out = document.querySelector(".blogPost");

fetch(url)
 .then(response => response.json())
 .then(data => {
     console.log(data);
     listData(data);
 })
 .catch(error => console.error("Error: " + error));

 let listData = (data) => {
    const hero = document.querySelector("#hero__blog-post");
    const blogpostTrail = document.querySelector(".blogpostTrail");

    document.title = "Helt på Bærtur | " + data.title.rendered;
    hero.style.backgroundImage = `url(${data._embedded['wp:featuredmedia']['0'].source_url})`
    blogpostTrail.innerHTML = data.title.rendered;


    out.innerHTML += `
    <h1 id="left-aligned">${data.title.rendered}</h1>
    <p>${data.date}</p>
    <p id=blogContent>${data.content.rendered}</p>`


 }