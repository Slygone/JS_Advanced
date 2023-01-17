let colorInput = document.getElementById("color-input");
let fontInput = document.getElementById("font-size-input");
let titleInput = document.getElementById("text-input");
let button = document.getElementById("show-title");
let result = document.getElementById("result")


button.addEventListener("click",()=>{
    let colorValue = colorInput.value;
    //fix for fontValue input, browser cannot read it on my end
    let fontValue = fontInput.value + "px";
    let titleValue = titleInput.value;

    let newTitle = document.createElement("h1");
    newTitle.style.color = colorValue;
    newTitle.innerText = titleValue;
    newTitle.style.fontSize = fontValue;

    result.appendChild(newTitle);    
})