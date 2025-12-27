// Promise is an Object.

// Creating Promises
const promise1 = new Promise(function (resolve, reject){
    // Do And Async Task
    // DB calls, cryptography, network
    setTimeout(function (){
        //console.log("Async task is complete")
        resolve() // By using resolve() it is connected to then function
    }, 2000)
})

// Consuming Promising
promise1.then(function(){
    //console.log("Promise Consumed")
})

const promise = new Promise(function (resolve, reject){
    setTimeout(function (){
        //console.log("ASYNC task 2")
        resolve() // By using resolve it get connected to then function
    },2000)
}).then(function(){
    //console.log("ASYNC2 Resolved")
})

//    PROMISES WITH DATA PASSED DATA CONSUMPTION
const promise3 = new Promise(function (resolve, reject){
    setTimeout(function (){
        resolve({username: "Piyush", email: "Piyush@123.com"})
    }, 2000)
})
promise3.then(function (user){
    //console.log(user)
})


// HOW TO AVOID CALLBACK HELL
const promise4 = new Promise(function (resolve, reject){
    setTimeout(function (){
        let error = false
        if (!error){
            resolve({username: "Piyush", Password: 123})
        } else{
            reject('ERROR: Something Went Wrong')
        }
    }, 2000)
}) 
// CHAINING METHOD

/* then() => then() method schedules a callback function to be 
executed when the promis is successfull. */

/* catch() => the catch() method scheduled a callback function to be 
executed when the promise is rejected. */

/* finally() => the callback function provided to finally() runs when 
the promise is settled(mean its is fullfilled or rjected). */

promise4
.then((user) => {  
    //console.log(user)
    return user.Password
})
.then((Password) => {
    //console.log(Password)
})
.catch((error) => {
    //console.log(error)
})
//.finally(() => console.log("The promise is resolve either its rejected"))

const promise5 = new Promise(function(resolve, reject){
    setTimeout( () => {
        let error = true
        if(!error){
            resolve({username: "JavaScript", Password: 321})
        } else{
            reject("JavaScript went Wrong")
        }
    },1000)
})
async function consumepromise5(){
    const response = await promise5
    console.log(response)
}
