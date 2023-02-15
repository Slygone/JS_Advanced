// Callbacks

// const simple = () => {
//     setTimeout(() =>{
//         console.log('First log,  waiting for second...');
//         setTimeout(() =>{
//             console.log('Second log.');
//         },1000)
//     },1000)
// }

// simple();

// complex - CALLBACK HELL

const complex = () =>{
    setTimeout(() =>{
        console.log('1. First thing, prepareing for the second');
        setTimeout(()=>{
            console.log('2. Second thing, preparing for the third');
            setTimeout(()=>{
                console.log('3. Third thing, preparing for the fourth');
                setTimeout(()=>{
                    console.log('4. Fourth thing, preparing for the fifth');
                    setTimeout(()=>{
                        console.log('5. Fifth thing, preparing for the sixth');
                        setTimeout(()=>{
                            console.log('6. Sixted and last thing');
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}

complex();

// [Promise]
// States: 
// 1. Pending
// 2. Fulfilled / Rejected (Sucess or Error)


// const first = (isOk) => {
//     return new Promise((resolve, reject) => {
//         if (isOk) {
//             resolve('ok')
//         } else {
//             reject('not ok')
//         }
//     })
// }

// first(true)
//     .then((data) => {
//         //do something with the data
//         console.log(data);
//     }).catch((error) => {
//         //
//         console.log(error);
//     })
//     .finally(() => {
//         //used to clean up the code. Hide the loading spinner
//         console.log('The end');
//     })

// https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G6/Class09/data/documents.json

// Example 1 

// const getDocuments = () => {
//     return new Promise ((resolve, reject) => {
//         fetch('https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G6/Class09/data/documents.json')
//             .then(response => {
//                 console.log('res', response);
//                 //check if response is ok and able to be parsed
//                 if(response.ok) {
//                     return response.json()
//                 } else{
//                     reject('Documents fetching failed.')
//                     // throw new Error('')
//                 }
//             })
//             .then(documents =>{
//                 resolve(documents)
//             })
//             .catch(error =>{
//                 reject(error)
//             })
//     })
// }

// const showDocuments = (documents) => {
//     if(!documents || !Array.isArray(documents)) {
//         throw new Error ('There is a problem with the documents.')
//     }

//     if(!documents.length){
//         throw new Error ('There are no documents.')
//     }

//     documents.forEach(document => {
//         console.log(`${document.name}.${document.type} ${document.size}MB`);
//     });
// }


// const documents = getDocuments()
// .then(documents => {
//     showDocuments(documents)
// })
// .catch(error => console.log(error))

//Example 2

// const getDocuments = () => {
//     return new Promise((resolve, reject) => {
//         fetch('https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs/main/G6/Class09/data/documents.json')
//             .then(response => {
//                 console.log('res', response);
//                 //check if response is ok and able to be parsed
//                 if (response.ok) {
//                     return response.json()
//                 } else {
//                     reject('Documents fetching failed.')
//                 }
//             })
//             .then(documents => {
//                 resolve(documents)
//             })
//             .catch(error => {
//                 reject(error)
//             })
//     })
// }

// const showDocuments = (documents) => {
//     documents.forEach(document => {
//         console.log(`${document.name}.${document.type} ${document.size}MB`);
//     });
// }

// const getImportantDocuments= (documents) =>{
//     return documents.filter(document => document.important)
// }

// const checkDocuments = (documents) =>{
//     if (!documents || !Array.isArray(documents)) {
//         throw new Error('There is a problem with the documents.')
//     }

//     if (!documents.length) {
//         throw new Error('There are no documents.')
//     }
// }

// const documents = getDocuments()
//     .then(documents => {
//         checkDocuments(documents)
//         const importantDocuments = getImportantDocuments(documents)
//         showDocuments(importantDocuments)
//     })
//     .catch(error => console.log(error))

// Example 3

const getDocuments = () => {
    return new Promise((resolve, reject) => {
        fetch('https://raw.githubusercontent.com/sedc-codecademy/mkwd11-04-ajs /main/G6/Class09/data/documents.json')
            .then(response => {
                // console.log('res', response);
                //check if response is ok and able to be parsed
                if (response.ok) {
                    return response.json()
                } else {
                    reject('Documents fetching failed.')
                }
            })
            .then(documents => {
                resolve(documents)
            })
            .catch(error => {
                reject(error)
            })
    })
}

const showDocuments = (documents) => {
    // console.log('showDocuments', documents);
    documents.forEach(document => {
        console.log(`${document.name}.${document.type} id: ${document.id} Size:${document.size}MB`);
    });
}

const getImportantDocuments = (documents) => {
    return new Promise((resolve,reject) =>{
        const importantDocuments = documents.filter(document => document.important)
        if(importantDocuments.length > 0) {
            //positivno
            resolve(importantDocuments)
        } else {
            //negativno
            reject('There are no documents')
        }
    })
}

const checkDocuments = (documents) => {
    if (!documents || !Array.isArray(documents)) {
        throw new Error('There is a problem with the documents.')
    }

    if (!documents.length) {
        throw new Error('There are no documents.')
    }
}

const showImportantDocuments = async () => {
    try {
        const documents = await getDocuments()
        checkDocuments(documents)
        const importantDocuments = await getImportantDocuments(documents);
        showDocuments(importantDocuments)
    } catch(error) {
        console.log('ERROR:', error);
    }
    
}


showImportantDocuments();