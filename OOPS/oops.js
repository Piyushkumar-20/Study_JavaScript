const user = {
    username: "Piyush",
    logincount: 58,
    isLoggedin: true,

    getuserdetails: function(){
        //console.log("Got user detail from database")
        //console.log(`username: ${this.username}`)
        //console.log(this)
    }
}

// Constructor Function -> Always gives a new function

//const promise1 = new Promise() // Here new keyword is a constructor function.
//const date = new Date // new is used to create new instance.

function User(username, logincount, isloggedin){
    this.username = username;
    this.logncount = logincount
    this.isloggedin = isloggedin

   // return this //implicitly return defined 
}

// new keyword 
// Step1 -> whenver use a (new) keyword an empty object is created which is called instances.
// step2 -> Constructor function is called due to (new) keyword.
// step3 -> all the arguments are injected into the (this) keyword.
// step4 -> we get our functions.

const user1 = new User("Piyush", 12, true)
const user2 = new User("Piyushi", 22, false)
console.log(user1.constructor) 
//console.log(user2)
