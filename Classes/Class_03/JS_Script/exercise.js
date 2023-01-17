let printBtn = document.getElementById("printBtn");
let result = document.getElementById("result");
printBtn.addEventListener("click", fetchPersonOne)



//get the name of the person in an h1 tag
function getName(name){
    let resultName = result.getElementsByTagName("h1")[0];
    resultName.innerText = name;
}


//TODO add CSS with backticks

//get the person stats and print them in a table
function getStats(height,mass,eyeColor,hairColor){
    let resultStats = result.getElementsByTagName("tbody")[0];
    let newRow = resultStats.insertRow();

    let heightCell = newRow.insertCell();
    heightCell.innerText = `Height: ${height}`

    let massCell = newRow.insertCell();
    massCell.innerText = `Weight: ${mass}`

    let eyeColorCell = newRow.insertCell();
    eyeColorCell.innerText = `Eye Color: ${eyeColor}`

    let hairColorCell = newRow.insertCell();
    hairColorCell.innerText = `Hair Color: ${hairColor}`

}


//TODO solve with one object request
function fetchPersonOne(){
    fetch('https://swapi.dev/api/people/1/')
    .then((response) =>{
        return response.json();
    })
    .then((myJson)=>{
        getName(myJson.name);
        getStats(myJson.height,myJson.mass,myJson.eye_color,myJson.hair_color);
    })

}