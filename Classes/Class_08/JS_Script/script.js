// Synchronous execution
// console.log('A');
// console.log('B');
// console.log('C');

// Asynchronous execution

// console.log('pred timeout');

// setTimeout(() => {
//     console.log('vnatre vo set timeout');
// })

// console.log('posle timeout');

// Callback Function

// const callbackFn = () => console.log('callback');

// console.log('pred');

// setTimeout(callbackFn);

// console.log('potoa');

// const first = () => console.log('first');
// const second = () => {
//     console.log('second');
//     first();
// }

// second();

// const first = () => setTimeout(() => console.log('first'));
// const second = () => console.log('second');

// first();
// second();

// let number = 0;

// setInterval(()=> console.log(number += 1),1000);

debugger;
console.log('pred fetch');

let luke;

fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then((myJson) => {
        luke = myJson;
        console.log('luke vnatre', luke.name);
    });


//type to handle this

// setTimeout(() => {
//     console.log('luke nadvor',luke);
// },1000)
console.log('luke nadvor',luke);
console.log('posle fetch');


// fetch('https://swapi.dev/api/people/a/')
//     .then(response => console.log(response))
//     .then((myJson) => {
//         console.log(myJson);
//         console.log('luke vnatre', luke.name);
//     })
//     .catch((error)=>{
//         console.log('error',error);
//     })
//     .finally(()=>{
//         console.log('finally');
//     })

