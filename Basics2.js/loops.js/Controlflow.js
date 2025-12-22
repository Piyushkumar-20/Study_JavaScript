// if --> if true then code will execute 
// if false then not execute
// operators <, >, <=, >=, ==, !=, =, ===
// !== -> negative check

const isuserloggedin = true
if(true){
    console.log("Hello")
}

if(2 == "2"){
    console.log("executed")
}

if(2 === "2"){
    console.log("executed")
}

const temprature = 500
if(temprature < 50) {
    console.log("Temprature is less")
} else {
    console.log("N no no no no no no  no ")
}

const score = 2000
if(score> 200){
    const power = "fly"
    console.log(`User power: ${power}`)
}

const balance = 1000
if (balance> 500) console.log("Very saving"),
console.log("saving 2");

if (balance > 500) {
    console.log("Less than")
} else if( balance < 750 ){
    console.log("Less than 750")
} else if ( balance < 900 ){
    console.log("less than 900")
} else {
    console.log("Moti chain mota paisa")
}

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

//in this method all condition must be true
if(userloggedin && debitcard ) {
    console.log("Allow to buy course")
}
// for checking multiple codition
if(loggedinfromgoogle || loggedinfromemail){
    console.log("User login")
}

// Nullish Colescing Operator (??): Null Undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//var1 = undefined ?? 15
var1 = null ?? 10?? 15 // first assigned value will be the output 
console.log(var1)

// Terniary Operator 

// condition ? true : false 

const iceteaprice = 100
iceteaprice <=80 ? console.log("less than 80"): console.log("More than 80")

