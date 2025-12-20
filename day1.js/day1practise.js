// let name = "Piyush"
// let age = 19
// let isStudent = true

// console.log("Name:" , name)
// console.log("Age:" , age)
// console.log("is student:" , isStudent)

// let city = "Jaipur"
// city = "gurugram"
// const country = "India"
// country = "India"

// let a = 166
// let b = 33

// console.log(a+b)
// console.log(a-b)
// console.log(a==b)

// let value = 1234

// let numvalue = Number(value)
// console.log(numvalue)
// console.log(typeof numvalue)
// console.log(Number("abc"))

// let marks = 90

// if (marks >= 90){
//     console.log("Very Good Marks")

// } else{
//     console.log("Good Good")
// }

// let num = 90

// if (num % 3==0 && num % 5 == 0){
//     console.log("FizzBuzz")
// } else if( num % 3 == 0 ){
//     console.log("fizz")
// } else if(num % 5 ==0){
//     console.log("Buzz")
// }else {
//     console.log("Not Divisible")
// }

// for (let i = 1; i<= 5; i++){
//     console.log(i)
// }


// let marks = 67;

// if(marks> 90){
//     console.log("A")
// } else if(marks >=75 && marks <= 89){
//     console.log("B")
// } else if( marks >= 50 && marks <= 74){
//     console.log("C")
// } else {
//     console.log("Fail")
// }

// for(let i=1; i<=9; i = i+2){
//     console.log(i)
// }

// let sum = 0
// let array = [3,5,7,4,8,9]
// for ( let i = 0; i<array.length; i++){
//     console.log(array[i])
//     sum = sum + array[i]
// }

// console.log("Sum:" , sum )


let largest = 0
let array = [3,5,7,4,8,9]
for ( let i = 0; i<array.length; i++){
    console.log(array[i])
    if (array[i] > largest){
            largest = array[i]
    }
}


console.log("Largest:" , largest )