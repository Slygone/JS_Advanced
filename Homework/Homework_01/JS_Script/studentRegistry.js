function Student(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
  let database = [];
  
  let form = document.getElementById("student-form");
  let firstNameInput = document.getElementById("first-name");
  let lastNameInput = document.getElementById("last-name");
  let ageInput = document.getElementById("age");
  let emailInput = document.getElementById("email");
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    
    let newStudent = new Student(firstNameInput.value, lastNameInput.value, ageInput.value, emailInput.value);
    
    
    database.push(newStudent);
    
    
    console.log(database);
    
    
    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
  });
  