function myname(){
    // console.log("My name is John")
    // console.log("My age is 30")
    // console.log("My city is New York")
    // console.log("My profession is Developer")
}
myname()

// function addtwonumbers(number1, number2){ // function with parameters

//     console.log(number1 + number2) 
// }
// addtwonumbers(3, null) // function call with arguments

function addtwonumbers(number1, number2){ // function with parameters
    // let result = number1 + number2
    // return result
    //console.log("Piyush") // After return statement nothing will print 
}
const result = addtwonumbers(3, 5)
//console.log("Result: ",result)

function loginUserMessage (username = "Sam") {
    if(!undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} justloggedin`

}
//console.log(loginUserMessage("Piyush"))
//console.log(loginUserMessage())

function cartcalculator(val1, val2, ...num1){
    return num1
}
// console.log(cartcalculator(200,300,3665,659,52))
// output is [ 3665, 659, 52 ] 200,300 these are val1 and val2

const user = {
    username: "Piyush",
    price: 200
}

function handelobject (anyobject){
   // console.log(`usernme is ${anyobject.username} and price is ${anyobject.price}`)

}
handelobject({
    usrename: "Sam",
    price: "300"
})

const mynewarray = [200,300,525,2,4,65,2,5,6,1595,95,95,95,959,62,95,9]
    function getvalue(newvalue){
        return newvalue[2,6,4]
    }

    console.log(getvalue(mynewarray))