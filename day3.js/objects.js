// // non singelton A non-singleton object allows multiple, independent instances of a class, each with its own state
// // Singelton while a singleton object restricts the creation of a class to only one instance., which is shared globally throughout the application. 

// // object literals
// const mysym = Symbol("obj1")


const javauser = {} // empty object
const pythonuser = {
    name: "Piyush",
    [mysym]: "myobj1",
    age: 20,
    email: "pk565@google.com",
    location: "jaipur",
    isloggedin: false,
    lastloggedindays: ["Monday", "Friday"]
}
console.log(pythonuser["name"])
console.log(pythonuser[mysym])
console.log(typeof pythonuser[mysym])

pythonuser.email = "piyush@google.com" // update email
//Object.freeze(pythonuser) // to make object immutable

pythonuser.email = "piyush@123gmail.com"
console.log(pythonuser.email)

pythonuser.greeting = function(){
    console.log(`Hello Java User`, `${this.name}`)
}
console.log(pythonuser.greeting())

//const tinderuser = new object {} // empty singelton object 
const tinderuser = {} // empty nonsingelton object
tinderuser.id = "123abc";
tinderuser.name = "Piyush";
tinderuser.isloggedin = false;
tinderuser.age = 21;

// console.log(tinderuser)

const regularuser = {
    email: "piyush@gmail.com",
    fullname: {
        firstname: "Piyush",
        Lastname: "Kumar",
    },
    age: 20,
    isloggedin: true,
}

//console.log(regularuser["email","age","fullname"])

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = Object.assign({},obj1, obj2, obj4) // merging two objects
//{}  - it is the target and others are source objects

const obj3 = {...obj1, ...obj2, ...obj4} // merging two objects using spread operator

// console.log(obj3)

const user = [
    {
        userId: 1,
        fname: "Piyush",
        lname: "Kumar",
        age: 20,
    },
    {   userId: 2,
        fname: "John",
        lname: "Doe",
        age: 25,
    },
    {   userId: 3,
        fname: "Jane",
        lname: "Smith",
        age: 22,    
    }

]
user[1].age

console.log(tinderuser);
console.log(Object.keys(tinderuser)); // to get all keys of an object
console.log(Object.values(tinderuser)); // to get all values of an object
console.log(Object.entries(tinderuser)); // to get all entries of an object as array of arrays
console.log(tinderuser.hasOwnProperty("isloggedin")) // to check if object has a particular property or not

const course = {
    coursename: "JavaScript",
    price: 9999,
    courseteacher: "Hitesh"
}

const {coursename: cname} = course;
console.log(cname);

// API - Application Programming Interface 
// API is a set of rules and protocols that allows different software applications to communicate with each other.
// It defines how requests and responses should be structured, enabling seamless interaction between different systems, services, or components.

// JSON - JavaScript Object Notation
// JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
// It is commonly used for transmitting data between a server and a web application as text. JSON is based on a subset of the JavaScript programming language and uses a simple syntax consisting of key-value pairs and arrays.

                                // Example of JSON object               
// {
//     "name": "Piyush",
//     "age": 20,
//     "isloggedin": false,
// }