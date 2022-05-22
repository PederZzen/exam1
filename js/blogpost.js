const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const hero = document.querySelector("#hero__blog-post");
const blogpostTrail = document.querySelector(".blogpostTrail");
const metaDescription = document.querySelector(".description");

const id = params.get("id");
const detailsURL = "https://espenpedersen.no/exam1/wp-json/wp/v2/posts/" + id + "?_embed";
const out = document.querySelector(".blogPost");

fetch(detailsURL)
 .then(response => response.json())
 .then(data => {
     console.log(data.content.rendered);
     listDetails(data);
 })
 .catch(error => console.error("Error: " + error))
 .finally(document.getElementById("loading").style.display = "none");

let listDetails = (data) => {
    document.title = "Helt på Bærtur | " + data.title.rendered;

    const description = data.excerpt.rendered.replace("<p>", "").replace("</p>", "");
    metaDescription.setAttribute("content", `${description}`);
    // console.log(metaDescription);
 
    let date = new Date(data.date);
    let localDate = date.toLocaleString("default", {day: "numeric", month: "short", year: "numeric"});

    hero.style.backgroundImage = `url(${data._embedded['wp:featuredmedia']['0'].source_url})`
    blogpostTrail.innerHTML = data.title.rendered;

    out.innerHTML += `
        <h1 id="left-aligned">${data.title.rendered}</h1>
        <p>${localDate}</p>
        <div id="blogContent">${data.content.rendered}</div>
    `

    const image = document.querySelectorAll(".wp-block-image");
    console.log(image); 

    var modal = document.querySelector(".modal");
    modal.innerHTML += `<img src="${image.source_url}" alt="${image.alt_text}" class="modal-img modal-img-${blog.slug}">`;

    image.addEventlistener("click", () => {
        console.log("hello");
        modal.style.display = "block";
    })
}

