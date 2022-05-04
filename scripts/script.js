const url = "https://www.espenpedersen.no/exam1/wp-json/wp/v2/"

fetch(url)
 .then (response => response.json())
 .then (data => 
    {
        listData(data)
        console.log(data);
    })
    
 .catch((error) => {
     console.error('Error:' + error);
});

function listData (data) {
    console.log(data.posts.title);
}