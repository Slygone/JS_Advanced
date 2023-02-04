fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
.then((response)=>{
    return response.json();
})
.then((myJson) =>{
    masterCall(myJson);
    //clean up functions
    // fStudentsAvgGradeFive(myJson);
    // mStudentsInSkopjeOlder18(myJson);
    // avarageGradeFeStudentsOver20(myJson);
    // sortedStudentsByLName(myJson);
})


function fStudentsAvgGradeFive(people){
    let fPeopleGradeAv5 = people.filter(person => person.gender === 'Female' 
    && person.averageGrade === 5)
    console.log(fPeopleGradeAv5);
}

function mStudentsInSkopjeOlder18(people) {
    let malePeople = people.filter(person => person.gender === 'Male'
    && person.city === 'Skopje'
    && person.age >= 18)
    .map(person => `${person.firstName} ${person.lastName}`)
    console.log(malePeople);
}

function avarageGradeFeStudentsOver20(people){
    let fStudentsGradesOver24 = people.filter(person => person.gender === 'Female'
    && person.age > 24
    && person.averageGrade)
    console.log(fStudentsGradesOver24);
}

function sortedStudentsByLName(students){
    let sortedByLastName = students.sort((a,b) => (a.lastName > b.lastName) - (a.lastName < b.lastName))
    console.log(sortedByLastName)
}

function masterCall(data){
    fStudentsAvgGradeFive(data);
    mStudentsInSkopjeOlder18(data);
    avarageGradeFeStudentsOver20(data);
    sortedStudentsByLName(data);
}