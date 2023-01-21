//AJAX Call

// $(document).ready(function () {

//     //print function
//     function printTitles(response) {
//         let unorderedList = document.getElementById("starWars");
//         unorderedList.innerHTML = "";
//         for (const title of response.results) {
//             unorderedList.innerHTML += `<li> ${title.title} </li>`;
//         }
//     }

//     document.getElementById("callBtn")
//         .addEventListener("click", () => {
//             $.ajax({
//                 url: "https://swapi.dev/api/films",
//                 success: function (response) {
//                     console.log("Request was successful");
//                     printTitles(response);
//                 },
//                 error: function (response) {
//                     console.log("Request Failed" + response.status);
//                     console.log(response.responseText);
//                 }
//             })
//         })
// })

//fetch call
let callBtn = document.getElementById("callBtn");
let unorderedList = document.getElementById("starWars");
callBtn.addEventListener("click",fetchStarWarsTitle);


function printFetchTitles(response){
    console.log(response);
    unorderedList.innerHTML = "";
    for (const title of response.results) {
        unorderedList.innerHTML += `<li> ${title.title} </li>`;
    }
}



function fetchStarWarsTitle(){
    fetch('https://swapi.dev/api/films')
    .then((response) =>{
        return response.json();
    })
    .then((myJson) =>{
        printFetchTitles(myJson);
    })
}