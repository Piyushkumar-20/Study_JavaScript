// Scope of var.let,const

// 1. const : once it is created and intialzed it will not be changed.
// 2. var,let : var,let value will be changed if you want.
// 3. All there variables inside the function and outside is global.
// 4. But if you create a var inside if/while/else/elseif... then var becomes global and the value gets changed as mentioned below value will get 3.
// // ----> In case if/else/elseif...... the scope becomes block/local scope
// code enviroment mai jab example run hote hai to global scope alaga hai aur jab window ya console mai run karte hai to global scope alag hai 
if(true){
    let a = 10
    const b = 200
    // var c = 323
    //console.log("Inner:", a)
}

let a = 200
//console.log("Outer:", a )

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Hitesh"

function two(){
    const website = "Youtube"
    //console.log(username)
    }
    //console.log(website)

    two()
}
 one ()

 if(true){
    const username = "piyush"
    if(username === "piyush"){
        const website = " youtube"
        //console.log(username + website)
    }
    //console.log(website)
 }

 //console.log(username);

 // +++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++

 console.log(addone(2))
 function addone (num) {
    return num + 1

 }
 
const addtwo = function(num) {
    return num + 2
 }
console.log(addtwo(5))

 