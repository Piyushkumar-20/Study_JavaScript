//Premitive Data Type 
// 7 Types: Number, String, Boolean, Null, Undefined, Symbol(unique value), BigInt 

// JavaScript is a dynamically typed Language 

// Reference Data Type (Non Premitive data Type)
// 2 Types: Array, Object, Functions

//Stack(Premitive data Type) in stack we will get copy of that , Heap Memory(Non-Premitive) in hea we will get reference of value 

let myname = "PiyushKumar" //It will go into stack memory 

let anothername = myname 
anothername = "chaiauecode"
console.log(anothername );
console.log(myname)

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "user22@gmail.com"

console.log(user1.email)
console.log(user2.email)