let a = {value: 10};
let b = a;
b. value = 20
console.log(a.value);

// output 20 hoga kyuki a and b same object ka reference le rhe hai

let x = {value:20}
let y = {...x}

y.value = 10

console.log(x.value);

//spread se naya object bana 

let c = 20
let d = c 

d = 30

console.log(d);
 // output 20 hoga kyuki stack mai copy jata hai value ka 

function one(){
    second();
}
function second(){
    third();
}
function third(){
    console.log("Hello")
}
one();

console.log(0.1 + 0.2)

console.log("8" + 2)
console.log("8"*2)

