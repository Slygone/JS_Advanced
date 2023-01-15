// let arrBy3 = [];

// for(let i = 0; i <= 1000; i++){
//     if(i % 3 == 0){
//         arrBy3.push(i);
//     }
// }

// console.log(arrBy3);

// let arrBy4 = [];

// for(let i = 0; i <= 1000; i++){
//     if(i % 4 == 0){
//         arrBy4.push(i)
//     }
// }

// console.log(arrBy4);


// let arrWith1 = [];

// for(let i = 0; i <= 1000; i++){
//     if(i % 10 == 1){
//         arrWith1.push(i)
//     }
// }

// console.log(arrWith1);
// let mixedArray = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];


// function cleanArrayString(arr) {
//     let cleanedArrayString = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'string') {
//         cleanedArrayString.push(arr[i]);
//       }
//     }
//     return cleanedArrayString;
//   }

// let cleanedArrayString = cleanArrayString(mixedArray);
// console.log(cleanedArrayString);

// function cleanedArrayNumbers(arr){
//     let cleanedArrayNumbers = [];
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === "number" && !isNaN(arr[i])){
//             cleanedArrayNumbers.push(arr[i]);
//         }
//     }
//     return cleanedArrayNumbers;
// }

// let cleanedArrayNum = cleanedArrayNumbers(mixedArray);
// console.log(cleanedArrayNum);

// function cleannedArrayNaN(arr){
//     let cleanedArrayNaN = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] || typeof(arr[i]) === "boolean"){
//             cleanedArrayNaN.push(arr[i]);
//         }
        
//     }
//     return cleanedArrayNaN;
// }

// let cleanedArrayNan = cleannedArrayNaN(mixedArray);
// console.log(cleanedArrayNan);



function Student(firstName, lastName, birthYear, academy,grades){
    this.firstName = !firstName ? "Unnamed" : firstName;
    this.lastName = !lastName ? "Unnamed" : lastName;
    this.birthYear = birthYear;
    this.academy = !academy ? "No Academy" : academy
    this.grades = grades;
    this.getAge = function (){
        if(!this.birthYear){
            return "missing birth year";
        } else return new Date().getFullYear() - this.birthYear;
    }
    this.getInfo = function(){
        return `This student is ${this.firstName} ${this.lastName} from academy ${this.academy}!`;
    }
    this.getGradesAverage = function() {
        if(!this.grades || this.grades.length === 0){
            return "missing grades";
        } else{
            let total = 0;
            for (let i = 0; i < this.grades.length; i++) {
              total += this.grades[i];
            }
            return total / this.grades.length;
        }
      };
}

let student1 = new Student("Nikola", "Jovanovski", 1989, "SEDC", [90, 85, 88, 92]);
let student2 = new Student("Borko", "Borkovski", 1984, "Fon", [45, 32, 56, 66]);
let student3 = new Student("Ivana", "Ivanovska", 2005, "Masinski", [90, 92, 94, 92]);
let student4 = new Student("","Ivanovska",'', "Masinski", [90, 92, 94, 92]);
console.log(student1.getAge());
console.log(student1.getInfo()); 
console.log(student1.getGradesAverage());
console.log("===========================");
console.log(student2.getAge());
console.log(student2.getInfo()); 
console.log(student2.getGradesAverage());
console.log("===========================");
console.log(student3.getAge());
console.log(student3.getInfo()); 
console.log(student3.getGradesAverage());
console.log("===========================");
console.log(student4.getAge());
console.log(student4.getInfo()); 
console.log(student4.getGradesAverage());