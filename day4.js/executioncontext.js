//Execution Context 
// in browser java code ---> Global execution ---->this 
// in case of browser value of this ---> window object
// a. Global execution context
// b. Function Execution Context 
// c. Eval Execution Context(Optional) 

// javascript code -----> execution in two phase 
// A. Memory creation Phase ----> In this phase,the variables are set to undefined 
//until the execution phase(next phase) and the functions are set to their definitions.

// example Memory creation phase 

let val1 = 20
let val2 = 30

function addNum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,20)

//          +++++++++ Phase 1 +++++++++++
// 1st global execution ---> allocated in this. 

//          +++++++++ Phase 2 +++++++++++

// 2nd Memory creation Phase ---> In this phase,the variables are set to undefined 
//until the execution phase(next phase) and the functions are set to their definitions.
// val1 - undefined, val2 - undefined, addNum - function definition
// result1 and result2 -> undefined

//          +++++++++ Phase 3 +++++++++++
// execution phase. val1 - 20 val2 - 30 
// addNum executional context is created (this will happen everytime when a function reach)
//         |
//         |
// new variable environment + execution thread (After global execution context this will be deleted)
//         |
//         |
//         |
//Memory Phase - val1,val2,total ---> undefined
//         |
//         |
//         |
//execution context --> num1-> 20 num2--> 30 total --->50
//Total value returned ----> global execution context

// resul2 ---> new variable environment + execution thread (After global execution context this will be deleted)
//Memory Phase - val1,val2,total ---> undefined
//         |
//         |
//         |
//execution context --> num1-> 10 num2--> 20 total --->30
//Total value returned ----> global execution context

//       ++++++++++++++ CALL STACK ++++++++++++++++++++
// works on- LIFO --> Last in First Out 

// Summary 
// The working of the JavaScript works on three phases:
// 1. Global Execution Context
// 2. Memory phase / Creation phase
// 3. Execution phase

// Phase 1: Global Execution Context
// The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

// Phase 2: Memory phase
// During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

// Phase 3: Execution phase
// After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
// 1. Memory phase 
// 2. Execution phase 
// The return value of the 'Function Execution' context is passed to the Global Execution Context
