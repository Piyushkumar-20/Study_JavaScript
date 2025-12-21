const myarr = [1, 2, 3, 4, 5];// in javascript array ka size change ho sakta hai
const myheroes = ['Ironman', 'Spiderman', 'Thor', 'Hulk'];
const myarr2 = new Array (1,23,32,6,5,1,5,95,59,5,9,5)
console.log(myarr) // Array indexing start with 0 
console.log(myarr2) // Array indexing start with 0 

// Shallow copy - a shallow copy of an object whose properties share the same references as the original object.
// Deep copy - a deep copy of an object is a copy whose properties do not share references with the original object.

// Array Methods 

myarr.push(6)
console.log(myarr)

myarr.pop(1)
console.log(myarr)

myarr.unshift(5) // add element at first position
myarr.shift(1) // first element remove
console.log(myarr);

console.log(myarr.includes(10))

console.log(myarr.indexOf(100))

console.log(myarr.indexOf(1))

const newArr = myarr.join()
console.log(myarr);
console.log(typeof newArr);

// slice, splice 

console.log("A", myarr)
const mynewarray = myarr.slice(1,3) // end index is not included
const mynewarray2 = myarr.splice(1,3) // end index is included

console.log(mynewarray)
console.log("B", myarr)

console.log(mynewarray2)
console.log("C", myarr)

const marvelheroes = ['Ironman', 'Spiderman', 'Thor', 'Hulk'];
const dcheroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];

marvelheroes.push(dcheroes) // spread operator
console.log(marvelheroes);

const mixheroes = marvelheroes.concat(dcheroes)
console.log(mixheroes);

const allnewheroes= [...marvelheroes, ...dcheroes]
console.log(allnewheroes);

const anotherarray = [1.3,5,6,7,[1,2,3],4554489,48,[12,34,56]]

const realanotherarray = anotherarray.flat(2)
 // flat method is used to remove nested arrays

 console.log(realanotherarray);

 console.log(Array.isArray(realanotherarray)) // to check whether it is array or not

 console.log(Array.from("Piyushkumarisagoodboy")) // to convert string into array

  console.log(Array.from({Name: "Piyushkumarisagoodboy"})) // to convert object into array but it will give empty array because object dont have length property

  let score1 = 100
  let score2 = 200
  let score3 = 300  
  console.log(Array.of(score1, score2, score3)) // to convert multiple variables into array