//values for my result
let colorValue = document.getElementById("rgb-value");
//value for my body
let body = document.querySelector("body");



//center my display via js because i want to. I could use CSS but this is better for practise 
colorValue.style.position = "absolute";
colorValue.style.top = "50%";
colorValue.style.left = "50%";
colorValue.style.transform = "translate(-50%, -50%)";


//function to generate a random number and a color tied to that number
function randomBackgroundColor() {
    //random number generator
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    //switch case for numbers attached to random colors
    //could use for loop but this is better imo
    switch (randomNumber) {
        case 1:
            body.style.backgroundColor = "red"
            break;
        case 2:
            body.style.backgroundColor = "lightblue"
            break;
        case 3:
            body.style.backgroundColor = "yellow"
            break;
        case 4:
            body.style.backgroundColor = "green"
            break;
        case 5:
            body.style.backgroundColor = "purple"
            break;
        case 6:
            body.style.backgroundColor = "pink"
            break;
        case 7:
            body.style.backgroundColor = "orange"
            break;
        case 8:
            body.style.backgroundColor = "blue"
            break;
        case 9:
            body.style.backgroundColor = "violet"
            break;
        case 10:
            body.style.backgroundColor = "indigo"
            break;
        default:
            return 0;
    }
    //take the current rgb values
    let currentColor = window.getComputedStyle(body).getPropertyValue("background-color");
    //display the current rgb value
    colorValue.innerText = currentColor;
}

//eventlistener to call my function on refresh of page or load on page.
window.addEventListener("load", randomBackgroundColor);
