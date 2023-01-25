let sizeInput = document.getElementById("sizeInput");
let colorInput = document.getElementById("colorInput");
let changeBtn = document.getElementById("printResult");
let text = document.getElementById("text");




let changeColor = (element, color = "black") => {
    if(isNaN(color)){
        element.style.color = color;
    } else {
        alert("Please enter text for color only!")
    }
}

let changeSize = (element, textSize = 24) => {
    if (!isNaN(textSize)) {
        element.style.fontSize = textSize + "px";
    } else {
        alert("Please enter a number for text size only!")
    }
}

changeBtn.addEventListener("click", () => {
    let sizeValue = sizeInput.value;
    let colorValue = colorInput.value;
    changeSize(text, sizeValue);
    changeColor(text, colorValue);
})