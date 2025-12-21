// This - it refer to the current context
const user = {
    username: "Piyush",
    Price: 333223,

    welcomwmessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this)

    }

}
// user.welcomwmessage()
// user.username = "Sam"
// user.welcomwmessage()

//console.log(this)

function chai(){
    let username = "Piyush"
    console.log(this.username)
}
// chai()

// const chai = function(){
//      let username = "Piyush"
//     console.log(this.username)
// }

                   //                    ARROW FUNCTIONS

const tea = () => {    // this is an arrow function syntax
    let username = "Piyush"
    console.log(this.username)
}

tea()

//() => {} // basic arrow function


// If {} is used it must to use return.
//Explicit Return
// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
//  console.log(addtwo(3,5))

// if {} not used the this is also a way to write a function, but use ()
// Implecit return 
 const addtwo = (num1, num2) => (num1 + num2)
 const addthree = (bum1, bum2) => ({username: "Piyush"})

 console.log(addtwo(3,5))
 console.log(addthree(3,5))

 const myArr = [2,5,8,8,5,5]
 myArr.forEach(function() { 2,3,5})