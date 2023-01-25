let showButton = document.getElementById("printApiCall");
let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");
let count = 1;
let baseUrl = `https://swapi.dev/api/planets/?page=${count}`;



showButton.addEventListener("click",()=>{
    callApi(baseUrl);
    showButton.hidden = true;
    nextButton.hidden = false;
})

nextButton.addEventListener("click",()=>{
    count = 2;
    baseUrl = `https://swapi.dev/api/planets/?page=${count}`;
    callApi(baseUrl);
    nextButton.hidden = true;
    previousButton.hidden = false;
})

previousButton.addEventListener("click",()=>{
    count = 1;
    baseUrl = `https://swapi.dev/api/planets/?page=${count}`;
    callApi(baseUrl);
    previousButton.hidden = true;
    nextButton.hidden = false;
})

function callApi(planetApi){
    fetch(planetApi)
    .then((response) =>{
        return response.json();
    })
    .then((myJson)=>{
        printPlanetsInTable(myJson.results)
    })
}

function printPlanetsInTable(planetData){
    let table = document.getElementById("data-table");
    table.innerHTML = "";

    for(let i = 0; i < planetData.length; i++){
        let planet = planetData[i]
        let row = table.insertRow();
        row.innerHTML = `
            <td>${planet.name}</td>
            <td>${planet.population}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>        
        `
    }
}

