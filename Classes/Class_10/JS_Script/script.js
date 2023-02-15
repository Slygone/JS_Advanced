// Everything in JS is an Object

// console.log(typeof window);
// console.log(typeof document);
// console.log(window.document);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof 'Nikola Jovanovski');
// console.log(typeof 'Nikola Jovanovski'.split(''));

// Shorthand method calls
// window.console.log('test')
// console.log('Window',window);
// console.log('console',window.console);
// console.log();
// console.error();
// console.table();
// alert('Test');
// window.alert('test2');

// Global Scope

// function sayHello(){
//     console.log('Hello');
// }
// sayHello();
// window.sayHello();

// let letVariable = 'let Variable';
// const constVariable = 'const Variable';
// var varVariable = 'varVariable';

// console.log(letVariable);
// console.log(window.letVariable);
// console.log(winodw.constVariable);
// console.log(window.varVariable);

// Constructor functions

// function Dog(name, color, age, favoriteFood, ownerName, city) {
//     this.name = name;
//     this.color = color;
//     this.age = age;
//     this.favoriteFood = favoriteFood;
//     this.ownerName = ownerName;
//     this.city = city;
// }

// let murdzo = new Dog('Murdzo', "Black/White", 5, "Chicken", "Nikola", "Skopje");

// let blacky = new Dog('Blacky', "black", 3, 'meet', 'Ivo', 'Skopje')

// let emptyDog = new Dog()

// let largeDog = new Dog('Large', 'Yellow',  2, 'meet', 'Ivo', 'Skopje','Topce')

// console.log(murdzo);
// console.log(blacky);
// console.log(emptyDog);
// console.log(largeDog);

// function Dog(name = 'N/A', color, age, favoriteFood, ownerName, city) {
//     this.name = name;
//     this.color = color || 'Colorful';
//     this.age = age ?? 'N/A' // ?? handles falsy values
//     // this.age = age >= 0 ? age : 'N/A' one way to handle it
//     // this.age = age || 'N/A'; 0 is a falsy value
//     this.favoriteFood = favoriteFood;
//     this.ownerName = ownerName;
//     this.hasOwner = !!ownerName;
//     this.city = city;

//     this.bark = function () {
//         console.log("af af");
//     }
// }
// let noNameDog = new Dog()
// console.log(noNameDog);
// let puppy = new Dog('Blacky', 'White', 0)
// console.log(puppy);

// let mike = new Dog('Mikey', 'Brown', 2, 'Meat', "Ivo");
// console.log(mike);

// noNameDog.bark()
// mike.bark()

// THIS What is THIS?
// window.surname = 'window obj surname'
// window.firstName = 'window obj firstName'
// window.whatIsThis = 'window obj this value'

// let thisObj = {
//     firstName: 'this obj name',
//     whatIsThis: this.surname, // references to the Window Object
//     whatIsThisMethod: function(){
//         console.log('Inside function this', this.firstName);
//         console.log('global this', globalThis); //references the global scope
//     },
//     whatIsThisArrowMethod: () => {
//         console.log('Inside arrow function this', this.firstName);//references the global scope and skips the block scope
//     }
// }
// // console.log(thisObj.whatIsThis);

// thisObj.whatIsThisMethod()
// thisObj.whatIsThisArrowMethod()

// Destructuring

// const blacky = new Dog('Blacky', null, null, 'meet', 'Kristijan', 'Tetovo');
// console.log(blacky);
// // console.log(blacky.name);

// // const { name, age } = blacky; //takes the properties we want out as variables outside the object for us to use
// // console.log(name, age);

// const color = 'yellow';

// const { age = 'N/A' , color: dogColor} = blacky

// console.log(age, dogColor);
// const rgb = [255,200,100];

// const green = rgb[1]

// const [red, green, blue] = rgb
//const [,, blue] = rgb

// console.log('red','green','blue');
// console.log(red,green,blue);
// console.log(blue);

// function Student(name, age, scores, subjects) {
//     this.name = name;
//     this.age = age;
//     this.scores = scores;
//     this.subjects = subjects
// }

// let nikola = new Student('Nikola', 33, { js: 8, net: 4 }, ['js', 'dotnet']);

// let kristijan = new Student('Kristijan', 28)

// // console.log(nikola);
// console.log(kristijan);

// console.log(nikola);

// // console.log(kristijan.scores.js);
// console.log(kristijan.subjects?.length);

// const averageScore = (nikola.scores.js + (kristijan.scores?.js ?? 0)) / 2

// console.log(averageScore);

// function Student(name, age, { js, net }, subjects) {
//     this.name = name;
//     this.age = age;
//     this.scores = { js, net }
//     this.subjects = subjects
// }

// let ivo = new Student('Ivo', 33, { js: 8, net: 4 }, ['js', 'net'])

// let kristijan = new Student('Kristijan', 28, { js: 8, net: 4 })
// console.log(ivo);
// console.log(kristijan);

// MAP

// let employee1 = {
//     id: 'abc',
//     name: 'Chris',
//     age: 20
// }

// let employee2 = {
//     id: 'efd',
//     name: 'Mike',
//     age: 22,
//     // ['full name']: 'Mike Something'
// }

// let employees = [employee1, employee2];
// console.log(employees);
// console.log(employee2['full name']);
// let studentGrades = {
//      KEY : VALUE
//     ['abc']: 5,
//     ['efd']: 4,
// }
// console.log(studentGrades['abc'])

// let employees = new Map();

// employees.set(employee1.id, employee1)
// employees.set(employee1.id, {name: 'Ivo', age:33})

// // console.log(employees);

// employees.set(employee2.id, employee2)

// console.log(employees);

// // let emp1 = employees.get('abc')
// // console.log(emp1);

// // employees.delete('efd')
// // console.log(employees);

//SET


let employee1 = {
    id: 'abc',
    name: 'Chris',
    age: 20
}

let employee2 = {
    id: 'efd',
    name: 'Mike',
    age: 22,
}

let employee3 = {
    id: 'abc',
    name: 'Ivo',
    age: 33,
}

let employees = new Set();

employees.add(employee1)
employees.add(employee2)
employees.add(employee3)
employees.add(employee1)
// employees.delete(employee1)

console.log(employees);
