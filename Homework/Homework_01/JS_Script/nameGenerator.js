let buttonForFillingTheListWithNames = document.getElementById("generate");
let listForNameStorage = document.getElementById("list-of-names");

let names = ["Luke Skywalker", "Lea Organa", "Darth Vader", "Han Solo", "Chewbacca"]

buttonForFillingTheListWithNames.addEventListener("click", () => {
    appendingTheNamesToTheList();
})


function appendingTheNamesToTheList(){
    for (let i = 0; i < names.length; i++) {
        let newItem = document.createElement("li");
        newItem.innerText = names[i];
        listForNameStorage.appendChild(newItem);
    }
}