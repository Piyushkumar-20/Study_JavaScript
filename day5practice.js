//Problem 1

const myarr1 = [1,2,3,4,5,6,7,8,9,10]
const newnum = myarr1.map( (num)=> num*10 )
console.log(newnum)

//Problem 2

const myarr2 = [26,5621,59,56,98,596,59,5,59]
const newnum2 = myarr2.filter( (num) => num%2==0)
console.log(newnum2)

//Problem 3
const myarr3 = [2656,59,5,2,3,1,89,0]
const newnum3 = myarr3.filter( (num) => num > 5)
console.log(newnum3)

// Problem 4 

const myarr4 = [1,2,3,4,5,6,7,8,9,10];
const newnum4 = myarr4
  .filter (num => num > 3)
  .map (num => num*2);

console.log(newnum4);

// Problem 5

const myarr5 = [2,6,5,89,5,6,5]
const newnum5 = myarr5.reduce((acc, currentvalue) => acc + currentvalue,0)
console.log(newnum5)

//Problem 6 

const numbers = [10, 25, 5, 40, 15];
const max = numbers.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});

console.log(max);

//Problem 7
const arr = ["J", "S", " ", "R", "o", "c", "k", "s"];

const result = arr.reduce((acc, curr) => acc + curr, "");

console.log(result);

// //Problem 8
const marks = {
  math: 80,
  english: 70,
  science: 90
};

let total = 0;

for (let subject in marks) {
  total += marks[subject];
}

console.log(total);

