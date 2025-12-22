//const usermail = []

// if(usermail){
//     console.log("Got user email");
// } else {
//     console.log("Dont have user mail");
// }

//falsy values 
// false, 0, -0, Bigint 0n, "", null , undefined, Nan 

//Truthy values 
// True, "0"(zero in string), "false"/'false'(because it is in string)
// " ", [], {}, function(){} --> (Empty function)

const usermail = []

if (usermail.length === 0){
    console.log("Array is empty")
}

const myObj = {}

if(Object.keys(myObj)){
    console.log("Objects")
}
