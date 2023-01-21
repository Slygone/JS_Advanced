//Ajax Call
// $(document).ready(function () {

//     function getVehicleName(vehicle){
//         let resultName = document.getElementsByTagName("h1")[0];
//         resultName.innerText = vehicle.name;
//         console.log(vehicle.name);
//     }
//     function getVehicleStats(response){
//         let resultStats = document.getElementsByTagName("tbody")[0];
//         let firstRow = resultStats.insertRow();
        
//         let modelCell = firstRow.insertCell();
//         modelCell.innerText = `Model: ${response.model}`

//         let manufacturerCell = firstRow.insertCell();
//         manufacturerCell.innerText = `Manufacturer: ${response.manufacturer}`;

//         let crewCell = firstRow.insertCell();
//         crewCell.innerText = `Crew capacity: ${response.crew}`;

//         let PassengersCell = firstRow.insertCell();
//         PassengersCell.innerText = `Passengers capacity: ${response.passengers}`;

//         let classCell = firstRow.insertCell();
//         classCell.innerText = `Class: ${response.vehicle_class}`
//     }

//     document.getElementById("starWarsVehicle")
//         .addEventListener("click", () => {
//             $.ajax({
//                 url: "https://swapi.dev/api/vehicles/20",
//                 success: function (response) {
//                     console.log(response);
//                     getVehicleName(response);
//                     getVehicleStats(response);
//                 },
//                 error: function (response) {
//                     console.log("Request Failed" + response.status);
//                     console.log(response.responseText);
//                 }
//             })
//         })
// })


//Fetch Call
let callBtn = document.getElementById("starWarsVehicle");
let resultName = document.getElementsByTagName("h1")[0];
let resultStats = document.getElementsByTagName("tbody")[0];

function getVehicleName(vehicle){
    resultName.innerText = vehicle.name;
    console.log(vehicle.name);
}
function getVehicleStats(response){
    let firstRow = resultStats.insertRow();
    
    let modelCell = firstRow.insertCell();
    modelCell.innerText = `Model: ${response.model}`

    let manufacturerCell = firstRow.insertCell();
    manufacturerCell.innerText = `Manufacturer: ${response.manufacturer}`;

    let crewCell = firstRow.insertCell();
    crewCell.innerText = `Crew capacity: ${response.crew}`;

    let PassengersCell = firstRow.insertCell();
    PassengersCell.innerText = `Passengers capacity: ${response.passengers}`;

    let classCell = firstRow.insertCell();
    classCell.innerText = `Class: ${response.vehicle_class}`
}

callBtn.addEventListener("click",fetchStarWarsVehicle);

function fetchStarWarsVehicle(){
    fetch('https://swapi.dev/api/vehicles/20')
    .then((response) =>{
        return response.json();
    })
    .then((myJson)=>{
        getVehicleName(myJson);
        getVehicleStats(myJson);
    })
}

