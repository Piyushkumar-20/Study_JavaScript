// while loop
// execute the block of code as long as the condition is true
let index = 0;
while (index <= 10){
    console.log(`Value of index is: ${index}`)
    index = index + 2;
} 
    
let myArr = ['flash', 'superman', 'batman', 'wonderwoman'];

let arr = 0;
while(arr < myArr.length){
    console.log(`value is ${myArr[arr]}`);
    arr = arr + 1;
}

// do while loop
// execute the block of code once before checking the condition
let score = 11
do {
    console.log(`score is: ${score}`);
    score++
} while(score <= 10)