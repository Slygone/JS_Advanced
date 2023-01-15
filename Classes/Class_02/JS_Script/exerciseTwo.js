//array to store remainders
let reminders = [];

let titleInput = document.getElementById("title");
let priorityInput = document.getElementById("priority");
let colorInput = document.getElementById("color");
let descriptionInput = document.getElementById("description");
let addButton = document.getElementById("add-reminder");
let showButton = document.getElementById("show-reminders");

//add event listener for button when clicked it adds an object

addButton.addEventListener("click", function(){
    let reminder = {
        title: titleInput.value,
        priority: priorityInput.value,
        color: colorInput.value,
        description: descriptionInput.value
    }
    reminders.push(reminder)//push the properties to the array
})

//show btn event listner to create a table and append the properites of the object.
showButton.addEventListener("click",function(){
    let table = document.createElement("table");
    
    let headerRow = document.createElement("tr");
    let titleHeader = document.createElement("th");
    titleHeader.innerText = "Title";
    
    let priorityHeader = document.createElement("th");
    priorityHeader.innerText = "Priority";
    
    let descriptionHeader = document.createElement("th");
    descriptionHeader.innerText = "Description"

    headerRow.appendChild(titleHeader);
    headerRow.appendChild(priorityHeader);
    headerRow.appendChild(descriptionHeader);
    table.appendChild(headerRow);

    for(let i = 0; i < reminders.length; i++){
        let reminder = reminders[i];
        let row = document.createElement("tr");
        let title = document.createElement("td");
        let priority = document.createElement("td");
        let description = document.createElement("td");

        title.innerText = reminder.title;
        
        title.style.color = reminder.color;        

        priority.innerText = reminder.priority;

        description.innerText = reminder.description;

        row.appendChild(title);
        row.appendChild(priority);
        row.appendChild(description);
        table.appendChild(row);
    }
    document.getElementById("createTable").appendChild(table)
})