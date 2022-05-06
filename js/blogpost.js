const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
const url = "https://espenpedersen.no/exam1/wp-json/wp/v2/posts/" + id;
const out = document.querySelector(".blogPost");

fetch(url)
 .then(response => response.json())
 .then(data => {
     console.log(data);
     listData(data);
 })
 .catch(error => console.error("Error: " + error));

 let listData = (data) => {
    document.title = "Helt på Bærtur | " + data.title.rendered;

    out.innerHTML += `
    <h1>${data.title.rendered}</h1>`


 }