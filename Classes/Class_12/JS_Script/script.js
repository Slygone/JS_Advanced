class User {
    constructor(name, email) {
        this.id = Math.floor(Math.random() * 1000);
        this.name = name;
        this.email = email;
    }

    #password = ''; // private property, cannot be accessed outside of the class

    //make a methond in the clas to change private properties form the outside of the block code
    setPassword(password) {
        this.#password = password
    }

    printUserInfo() {
        console.log(`${this.name} - ${this.email}`);
    }
}

const dejan = new User('Dejan', 'dejan@gmail.com');
// console.log(dejan);
// public properties
// console.log(dejan.id);
// console.log(dejan.name);
//private properties
// console.log(dejan.#password);
dejan.setPassword('new pass')
// console.log(dejan);
// dejan.printUserInfo();

// STUDENT nasleduva od USER
class Student extends User {
    constructor(name, email, academy, group, track) {
        //asign the inhereted parametars from parrent
        super(name, email);
        this.academy = academy;
        this.group = group;
        this.track = track;
    }

    printStudentInfo() {
        console.log(`${this.name} is a student of the ${this.academy} academy, in trach ${this.track} within group ${this.group}`);
    }
}

const martin = new Student('Martin', 'marting@gmail.com', 'SEDC', 'G1', 'dotnet');



// martin.printUserInfo();
martin.setPassword('very strong password');
// console.log(martin);

// martin.printStudentInfo();
// dejan.printStudentInfo();

const isInstanceOfUser = dejan instanceof User
//instance if keyword 
// console.log(dejan instanceof User); //true
// console.log(dejan instanceof Student); //false
// console.log(martin instanceof Student); //true
// console.log(martin instanceof User); //true
// console.log(martin instanceof Object); //true
// console.log(martin instanceof String);
// console.log(martin instanceof Array);


class Trainer extends Student {
    constructor(name, email, academy, group, track, jobTitle, experience, students, isActive = false) {
        super(name, email, academy, group, track)
        this.jobTitle = jobTitle;
        this.experience = experience;
        this.students = students;
        this.isActive = isActive
    }

    
    get academy(){
        return this._academy;    
    }

    set academy(academy){
        this._academy = academy + ` Academy`
    }

    static addYearsOfExperience(trainer){
        trainer.experience += 1; //increase amount by one
    }

    printTrainerInfo(){
        console.log(`${this.name} is a trainer in the ${this.academy}, with group ${this.group}`);
    }

}

const gjorgje = new Trainer('Gjorgje', 'gjorgje@gmail.com', 'SEDC','G7','Node JS','JS Developer', 3, [])
// console.log(gjorgje);
// console.log(gjorgje instanceof Trainer);
// console.log(gjorgje instanceof Student);
// console.log(gjorgje instanceof User);
// console.log(gjorgje instanceof Object);
// console.log(gjorgje.academy);
// gjorgje.printTrainerInfo()

Trainer.addYearsOfExperience(gjorgje)
console.log(gjorgje);