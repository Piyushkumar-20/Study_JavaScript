// for loop 
for(let i = 0; i <= 10 ; i++){
    const element = i;
    if(element == 5){
        //console.log("5 is a best number")
    }
    //console.log(element)
}

for (let i = 0; i <= 20; i++) {
    console.log(`Outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`)   
        //console.log(`${i} * ${j} = ${i * j}`) 
    }
    
}

let myarray = ['apple', 'banana', 'mango', 'grapes', 'orange']
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];

    //console.log(element)
    
}

//break and continue

// for(let i = 1; i<=20; i++){
//     if(i == 5){
//         console.log("5 is detected")
//         break;  // it will break the loop when i is 5
//     }
//     console.log(`value of i is: ${i}`)
// }

for(let i = 1; i<=20; i++){
    if(i == 5){
        console.log("5 is detected")
        continue;  // it will skip the iteration when i is 5
    }
    console.log(`value of i is: ${i}`)
}

