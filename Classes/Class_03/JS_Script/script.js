// $(function () {
//     let callBtn = document.getElementById("callBtn");
//     let result = document.getElementById("result");
//     let globalResponse;

    // function populateList(students) {
    //     let resultList = result.getElementsByTagName("ul")[0];
    //     resultList.innerHTML = "";

    //     for (let student of students) {
    //         let listItem = document.createElement('li');
    //         listItem.innerText = student;
    //         resultList.appendChild(listItem);
    //     }
    // }

    // function printAcademy(academy){   //globalResponse.academy (already parsed)
    //     let resultTitle = result.getElementsByTagName("h1")[0];
    //     resultTitle.innerText = `${academy} Academy`
    // }

//     callBtn.addEventListener("click", () => {
//         $.ajax({
//             url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
//             success: function (response) {
//                 console.log("Successfully requested data!");
//                 globalResponse = JSON.parse(response);


//                 printAcademy(globalResponse.academy);
//                 populateList(globalResponse.students);
//             },
//             error: function (error) {
//                 console.log(error);
//             }
//         })
//     })
// })

let callBtn = document.getElementById("callBtn");
callBtn.addEventListener("click", handleWithFetch);
let result = document.getElementById("result");

function populateList(students) {
    let resultList = result.getElementsByTagName("ul")[0];
    resultList.innerHTML = "";

    for (let student of students) {
        let listItem = document.createElement('li');
        listItem.innerText = student;
        resultList.appendChild(listItem);
    }
}

function printAcademy(academy){   //globalResponse.academy (already parsed)
    let resultTitle = result.getElementsByTagName("h1")[0];
    resultTitle.innerText = `${academy} Academy`
}

function handleWithFetch() {
    fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson)=>{
            console.log(myJson);
            printAcademy(myJson.academy);
            populateList(myJson.students);
        })
}
