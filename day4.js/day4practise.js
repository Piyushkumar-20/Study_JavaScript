function multiply (a, b){
    return a* b;
}
const result = multiply(4,5)
console.log(result);

let x = 10;
function testsope(){
    let x = 20;
    console.log(x);
}
testsope();
console.log(x)

function avgage(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}
console.log(avgage([20,30,36]))

const user = {
    name: "Piyush",
    normalfunction(){
        console.log(this.name)
    },
    arrowfunction:() => {
        console.log(this.name);
    }
};

(function (){
    let secret = "hidden";
    console.log(secret);
}) ();

const add = (a, b) => a+ b;
console.log(add(3,7))

let value = "";

if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

let score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else {
  console.log("C");
}

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
if (null || "hello" && 0) {
  console.log("YES");
} else {
  console.log("NO");
}
