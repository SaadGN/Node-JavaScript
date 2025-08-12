console.log("*****************************************");
console.log("               PROMISES");
console.log("*****************************************");

// Do an async task
// DB calss
// cryptography ,network calls

const promise1 = new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("Async task complete")
        resolve();
    }, 1000)

})

promise1.then(function () {
    console.log("Promise Consumed!!!")
})


//***************Without declaring variable***********

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("\nAsync task 2")
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved")
})

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ name: "John", email: "js@example.com" })
    }, 1000)
})

//**************************************** */

promise3.then(function (user) {
    console.log("\nPromise 3 : ", user)
})

//******************CHAINING********************** */


const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true  // or  false
        if(!error){
            resolve({name : "Edward" , pwd : "123"})
        }
        else{
            reject("Something went wrong!!!")
        }
    },1000)
})

promise4.then( (user) => {
    console.log("\nPromise4 User : ",user)
    return user.name
} ).then((username) => {
    console.log("promise 4 username : ",username)
}).catch(function (error) {
    console.log("\npromise 4 : ",error)
}).finally()

//************** ASYNC / AWAIT **************** */

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({name : "JavaScript" , pwd : "123"})
        }
        else{
            reject("Error : Something in js went wrong!!!")
        }
    },1000)
})

async function consumedPromse5(){
    try {
    const response = await promise5
    console.log("\nPromise 5  : ",promise5)
    } catch (error) {
        console.log("\nPromise 5  : ",error)
    }
}
consumedPromse5()

//****************** fetch() by ASYNC / AWAIT ********************* */

// async function getUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log("\n",data)
//     } catch (error) {
//         console.log("Error :",error)
//     }
    
// }
// getUser()

//****************** fetch() by .then / .catch ********************* */

fetch("https://jsonplaceholder.typicode.com/users").then(function(response) {
    return response.json()
}).then( function(data) {
    console.log(data)
}).catch(function(error) {
    console.log("E : ",error)
})