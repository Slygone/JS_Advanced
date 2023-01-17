let colorInput = document.getElementById("color-input");
let fontInput = document.getElementById("font-size-input");
let itemInput = document.getElementById("items-input");
let buttonForAdding = document.getElementById("listGenerator");
let result = document.getElementById("result");


buttonForAdding.addEventListener("click",()=>{
    let colorValue = colorInput.value;
    console.log(colorValue);
    let fontValue = fontInput.value;
    console.log(fontValue);
    let itemValue = itemInput.value;
    console.log(itemValue);
    
    let items = itemValue.split(",")    
    let newList = document.createElement("ul");
    newList.style.color = colorValue;
    newList.style.fontSize = `${fontValue}px`;
    // newList.style.fontSize = fontValue + "px";

    for (let i = 0; i < items.length; i++){
        let newItem = document.createElement("li");
        newItem.innerText = items[i];
        newList.appendChild(newItem);
    }

    result.appendChild(newList);
})