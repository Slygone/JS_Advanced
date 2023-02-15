// let trainer = {
//     fristName: `Ivo`,
//     lastName: `Kostovski`,
//     location: `Skopje, Macedonia`,
//     age: 33,
//     hobbies: [`Gaming`, `Karting`, `Movies`],
//     pets: [
//         {
//             name: `Khaleese`,
//             type: `Lizard`,
//             breed: `Bearded Dragon`,
//         },
//         {
//             name: `Boem`,
//             type: `Dog`,
//             breed: `Golden Retriver`,
//         },
//         {
//             name: `Galen`,
//             type: `Dog`,
//             breed: `Golden Retriver`,
//         },
//     ],
// }
//     function printNames (trainer){
//         for(let i = 0; i < trainer.pets.length; i++){
//             console.log(trainer.pets[i].name);
//             console.log(trainer.pets[i].type);
//             console.log(trainer.pets[i].breed);
//         }
//     }
//     printNames(trainer);



// functions

// function sayHello(){
//     console.log("hello");
// }
// sayHello();

// const sayHello = () => {
//     console.log("Hello");
// }

// sayHello();

//VOID function (does not return anything)
// const saySomething = (word) => {
//     console.log(word);
// }

// const value = saySomething("Hello");
// console.log(`Vredonsta na funkcijata`, value);

//Return Function
// const saySomething = (word) => {
//     return word;
// }

// const sayHelloName = (name) =>{
//     return saySomething(`Hello`) + " " + name
// }

// const value1 = sayHelloName(`Nikola`);
// const value2 = saySomething('Zdravo');

// console.log(`Vredonsta`, value1);
// console.log(`Vredonsta`, value2);

// function calculator(calculateFn, number1, number2) {
//     return calculateFn(number1, number2);
// }

// function sum(number1, number2) {
//     return number1 + number2
// }

// function difference(number1, number2) {
//     return number1 - number2;
// }

// console.log(sum(1, 2));
// console.log(difference(10, 2));
// console.log(calculator(sum, 10, 20));
// console.log(calculator(difference, 15, 5));
//reference vs calling a function
// console.log(calculator(sum, sum(1,1),10));

// const numbers = [1, 2, 3, 4, 5];

// const numbersTimesTwo = [];
// console.log('PRED', numbersTimesTwo);

// for (const number of numbers) {
//     const numberTimesTwo = number * 2;
//     numbersTimesTwo.push(numberTimesTwo);
// }

// console.log('Potoa', numbersTimesTwo);

// const numbersTimesTwo = numbers.map((number) => { return number * 2; })
//.filter((number)=>{ return number % 2 !== 0}) return all odd numbers

// const numbersTimesTwo = []

// numbers.forEach((number) => {
//     numbersTimesTwo.push(number * 2)
// })

// console.log(numbersTimesTwo);



// const numbersTimesTwo = []

// numbers.filter((number) => {
//     numbersTimesTwo.push(number * 2)
//     return true;
// })

// console.log(numbersTimesTwo);


// => ARROW ZNACI RETURN
// const numbersLargerThanTwo = []
// for (const number of numbers) {
//     if(number > -1) {
//         numbersLargerThanTwo.push(number)
//     }
// }
// console.log(numbersLargerThanTwo);

// const numbersLargerThanTwo = numbers.filter((number) => { return number > 2})

// const numbersLargerThanTwo = numbers.filter((number) => number > 2 ? true : false)



// const numbersLargerThanTwo = numbers.filter((number) => number > 2)

// console.log(numbersLargerThanTwo);

// [reduce]

// const numbers = [0, 1, 2, 3, 4, 5];

// let sum = 0;

// for (const number of numbers) {
//     sum += number;    
// }


// let sum = numbers.reduce((acc, curr)=>{
//     console.log('accumlated Value', acc);
//     console.log('current Value', curr);
//     return acc + curr;
// },0)


//reduce reduces the array to one single value
//what it returns is decided by the last parameter (0 in this case)
// let sum = numbers.reduce((acc, curr) => acc + curr, 0)

// console.log(sum, typeof(sum));


//[sort]

// const numbers = [100, 5, 5, 10, 1, 29, 6];

// // const ascSortedNumbers = numbers;
// const ascSortedNumbers = [...numbers];// [...name of array] is pushing the array into a new one

// ascSortedNumbers.sort((a, b) => a - b)


// console.log('original', numbers);
// console.log('sort',ascSortedNumbers);

// // const dscSortedNumbers = numbers.sort((a, b) => b - a)
// // console.log(dscSortedNumbers);

// // const ascSortedNumbers = numbers.sort((a, b) => {
// //     console.log('a', a);
// //     console.log('b', b);
// //     console.log('res', a - b);
// //     return a - b
// // })

// let name1 = 'Ivo';
// let name2 = name1;

// let person1 = {
//     name: 'Ivo'
// }
// let person2 = person1;

// person2.name = 'Kristijan';
// console.log(person2.name);
// console.log(person1.name);

// const numbers = [100, 5, 5, 10, 1, 29, 6];

// // const sortedNumbers = [];


// let done = false;
// while (!done) {
//     done = true;
//     for (let i = 0; i < numbers.length; i++) {
//         //predhoden   //momentalen
//         if (numbers[i - 1] > numbers[i]) {
//             done = false;
//             const temp = numbers[i - 1];
//             numbers[i - 1] = numbers[i];
//             numbers[i] = temp;
//         }
//     }

// }

// console.log(numbers);



// [some]

// const numbers = [100, 5, 5, 10, 1, 29, 6];

// const hasEvenNumbers = numbers.some((number => number % 2 === 0));
// const hasOddNumbers = numbers.some((number => number % 2 !== 0));

// console.log(hasEvenNumbers);
// console.log(hasOddNumbers);

// [every]

// const numbers = [100, 5, 5, 10, 1, 29, 6];

// const evenNumbers = [2, 4, 6, 8];
// const oddNumbers = [1, 3, 5, 7];

// const areAllEvenNumbers = evenNumbers.every((number => number % 2 === 0));
// const areAllOddNumbers = evenNumbers.every((number => number % 2 !== 0));

// console.log(areAllEvenNumbers);
// console.log(areAllOddNumbers);

// [slice] pass by value (creates new array)

// const daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursady','Friday','Saturday','Sunday'];

// const weekendDays = daysOfTheWeek.slice(5,7);

// const workDays = daysOfTheWeek.slice(0,5)

// const test = daysOfTheWeek.slice(-2)

// console.log(test);
// console.log(weekendDays);
// console.log(workDays);
// console.log(daysOfTheWeek);

// [splice] pass by reference (alters existing/original array)

// const daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursady','Friday','Saturday','Sunday'];

// const workDays = [...daysOfTheWeek].splice(0,5);
// const weekendDays = [...daysOfTheWeek].splice(5,2);

// console.log(workDays);
// console.log(weekendDays);
// console.log(daysOfTheWeek);

//[includes]

// const daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursady','Friday','Saturday','Sunday'];

// const hasMondayCapitalized =  daysOfTheWeek.includes("Monday");
// const hasMondayLowercase =  daysOfTheWeek.includes("monday"); //make all to upper to solve?
// console.log(hasMondayCapitalized);
// console.log(hasMondayLowercase);


// [find]

// const daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursady','Friday','Saturday','Sunday'];

// const monday = daysOfTheWeek.find((day)=> day === "Monday") 

// console.log(monday);

// [find index]
// const daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursady','Friday','Saturday','Sunday'];

// const index = daysOfTheWeek.findIndex((day)=> day === "Monday") 
// const jindex = daysOfTheWeek.findIndex((day)=> day === "January") 

// //returns the index
// console.log(index);
// // -1 means false or does not exist in the array
// console.log(jindex);

// //altenrative to includes
// console.log(index !== -1);
// console.log(jindex !== -1);



// [split]

// const banana = 'banana'
// const bananaArr = banana.split('');
// console.log(bananaArr);

// const ivo = "Ivo Kostovski"

// const fNameLName = ivo.split(' ');
// console.log(fNameLName);

// // [join]
// const fullName = fNameLName.join(' ')

// console.log(fullName);


// [reverse]

// const banana = 'banana';
// console.log(banana);

// const splittedBananaArr = banana.split('');
// console.log(splittedBananaArr);

// const reversedBanana = splittedBananaArr.reverse();
// console.log(reversedBanana);

// const joinedBanana = reversedBanana.join('');
// console.log(joinedBanana);

// const ultimateBanana = banana.split('').reverse().join('');
// console.log(ultimateBanana);

// const numbers = [1,2,3];

// const test = numbers.map(num => num *2).reduce(() =>{})

// const number = "60-130";

// let sorted = number.split('-').pop();
// sorted = parseInt(sorted)
// console.log(sorted);
