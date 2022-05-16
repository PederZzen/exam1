const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
const detailsURL = "https://espenpedersen.no/exam1/wp-json/wp/v2/posts/" + id + "?_embed";
const out = document.querySelector(".blogPost");

fetch(detailsURL)
 .then(response => response.json())
 .then(data => {
     console.log(data);
     listDetails(data);
 })
 .catch(error => console.error("Error: " + error));

let listDetails = (data) => {
    const hero = document.querySelector("#hero__blog-post");
    const blogpostTrail = document.querySelector(".blogpostTrail");

    let date = new Date(data.date);
    let localDate = date.toLocaleString("default", {day: "numeric", month: "short", year: "numeric"});

    document.title = "Helt på Bærtur | " + data.title.rendered;
    hero.style.backgroundImage = `url(${data._embedded['wp:featuredmedia']['0'].source_url})`
    blogpostTrail.innerHTML = data.title.rendered;


    out.innerHTML += `
    <h1 id="left-aligned">${data.title.rendered}</h1>
    <p>${localDate}</p>
    <div id="blogContent">${data.content.rendered}</div>`
}