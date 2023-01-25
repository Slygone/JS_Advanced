let mainApi = "https://swapi.dev/api/"
let previousButton = document.getElementById("previous-button");
let nextButton = document.getElementById("next-button");
let personImage = document.getElementById("person-image");
let shipImage = document.getElementById("ship-image");

var peopleUrl = `${mainApi}people/?page=1`;
var previousPeopleUrl = null;

var shipUrl = `${mainApi}starships/?page=1`;
var previousShipUrl = null;

var myJson = null;

var action = "";




function getPeopleApi(peopleUrl) {
    fetch(peopleUrl)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.action = "people"
            this.myJson = myJson
            this.peopleUrl = myJson.next; //page 2
            this.previousPeopleUrl = myJson.previous;
            console.log(peopleUrl);
            if (this.peopleUrl === null) {
                nextButton.disabled = true;
            } else {
                nextButton.disabled = false;
            }
            if (this.previousPeopleUrl === null) {
                previousButton.disabled = true;
            } else {
                previousButton.disabled = false;
            }
            generatePeopleTable(myJson.results);
        })
}

function getShipApi(shipUrl) {
    fetch(shipUrl)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.action = "ship";
            this.myJson = myJson
            this.shipUrl = myJson.next; //page 2
            this.previousShipUrl = myJson.previous;
            console.log(shipUrl);
            if (this.shipUrl === null) {
                nextButton.disabled = true;
            } else {
                nextButton.disabled = false;
            }
            if (this.previousShipUrl === null) {
                previousButton.disabled = true;
            } else {
                previousButton.disabled = false;
            }
            generateShipTable(myJson.results)
        })
}

function generatePeopleTable(people) {
    let table = document.getElementById("data-table");
    table.innerHTML = "";//clear the table
    let rowHeader = table.insertRow();
        rowHeader.innerHTML = `
        <th>Name</th>
        <th>Height</th>
        <th>Mass</th>
        <th>Gender</th>
        <th>Birth Year</th>
        <th>Films</th>
        `
    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let row = table.insertRow();
        
        row.innerHTML = `
            <td>${person.name}</td>
            <td>${person.height}</td>
            <td>${person.mass}</td>
            <td>${person.gender}</td>
            <td>${person.birth_year}</td>
            <td>${person.films.length}</td>
        `
    }
}

//TODO fix crew and passangers math
function generateShipTable(starships) {
    let table = document.getElementById("data-table");
    table.innerHTML = "";//clear the table

    let rowHeader = table.insertRow();
        rowHeader.innerHTML = `
        <th>Name</th>
        <th>Model</th>
        <th>Manufacturer</th>
        <th>Cost in Credits</th>
        <th>Capacity</th>
        <th>Starship Class</th>
        `
    for (let i = 0; i < starships.length; i++) {
        let ship = starships[i];
        let row = table.insertRow();
        var crewCapacity;
        var passangersCapacity;
        
        if(ship.crew.includes("-")){
            crewCapacity = ship.crew.split("-").pop()
        } else if(ship.crew === "n/a" || ship.crew === "undefined" || ship.crew === "unknown"){
            crewCapacity = 0;
        } else if(ship.crew.includes(",")){
            crewCapacity = ship.crew.split(",").pop()
        } else if(ship.crew.includes(".")){
            crewCapacity = ship.crew.split(".").pop();
        } else {
            crewCapacity = ship.crew;
        }

        if(ship.passengers.includes("-")){
            passangersCapacity = ship.passengers.split("-").pop()
        } else if(ship.passengers === "n/a" || ship.passengers === "undefined" || ship.passengers === "unknown"){
            passangersCapacity = 0;
        } else if(ship.passengers.includes(",")){
            passangersCapacity = ship.passengers.split(",").pop()
        } else if(ship.passengers.includes(".")){
            passangersCapacity = ship.passengers.split(".").pop();
        } else {
            passangersCapacity = ship.passengers;
        }

        // let capacity = ship.crew.includes("-") ? ship.crew.split("-").pop() : (ship.crew === 'n/a' || ship.crew === 'undefined') ? 0 : ship.crew;
        // capacity = capacity.includes(",") || capacity.includes(".") ? capacity.replace(/[.,]/g, '') : capacity;

        let size = parseInt(crewCapacity) + parseInt(passangersCapacity)
        
        row.innerHTML = `
        <td>${ship.name}</td>
        <td>${ship.model}</td>
        <td>${ship.manufacturer}</td>
        <td>${ship.cost_in_credits}</td>
        <td>${size}</td>
        <td>${ship.starship_class}</td>
        `

    }
}

personImage.addEventListener("click", () => {
    getPeopleApi(peopleUrl);
    nextButton.disabled = false;
});

shipImage.addEventListener("click", () => {
    getShipApi(shipUrl);
    nextButton.disabled = false;
})
previousButton.addEventListener("click", () => {
    if (action === "ship") {
        getShipApi(previousShipUrl)
    } else if (action === "people") {
        getPeopleApi(previousPeopleUrl);
    }

})

nextButton.addEventListener("click", () => {
    if (action === "ship") {
        getShipApi(shipUrl);
    } else if (action === "people") {
        getPeopleApi(peopleUrl);
    }
});
