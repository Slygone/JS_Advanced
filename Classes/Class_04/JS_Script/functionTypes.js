// let greeting = function(name){
//     return `Hello ${name}`;
// }

// greeting("Jane");

// let button = document.getElementsByTagName("button")[0];
// button.addEventListener("click",function(){
//     console.log("button is clicked");
// })


// let logSomething = function () {
//     console.log("Hello World!")
// }


// logSomething();

// let logSomethingWIthArrowFunc = () => console.log("Hello World from arrow function!");
// logSomethingWIthArrowFunc();


// let sumWith10 = function(num){
//     return num + 10;
// }
// sumWith10();

// let sumArrow = num => num + 10;

// sumArrow();

// let sumAnnon = function(num1, num2){
//     return num1 + num2;
// }

// let sumArrowAnnon = (num1, num2) => num1 + num2;


// let sumAnnonMultipleExp  = function (num1, num2){
//     let result = num1 + num2;
//     console.log(`The result from Anon func is: ${result}`);
//     return result;
// }

// //Arrow function

// let sumArrowMultipleExp = (num1,num2) => {
//     let resultArrow = num1 + num2;
//     console.log(`The result from Arrow func is: ${resultArrow}`);
//     return resultArrow;
// }

// let button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", ()=>{
//     console.log(("Arrow function is saying button is clicked!"));
// })


//Self Invoked Functions
//annonimous

// let sayHello = function (name) {
//     console.log(`Hello there 12 ${name}`);
// }

//     //Self Invoked 
//     (function (name) {
//         console.log(`Hello there ${name} from self fuc`);
//     });

// let fullName = ((firstName, lastName) => { `${firstName}, ${lastName}` })("Jane", "Doe");

// function sum(num1, num2) {
//     return num1 + num2;
// }

// let number1 = 25;
// let number2 = "15";
// let result = sum(number1, (num => parseInt(num))(number2))
// console.log(result);