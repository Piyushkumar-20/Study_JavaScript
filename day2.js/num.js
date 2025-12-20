const score = 400
console.log(score)

const balance = new Number(500.3216582654)
console.log(balance)

console.log(balance.toString()) // it will convert number to string
console.log(typeof balance) // it will return type of balance
console.log(balance.toFixed(2)) // it will convert number to string with 2 decimal places

const otherNumber = 325.262
console.log(otherNumber.toPrecision(4)) // it will format number to specified length

const hundered = 10000000
console.log(hundered.toLocaleString('en-IN')) // it will format number according to locale

// ++++++++++++++++++ Math Object ++++++++++++++++++

console.log(Math.abs(-4)) 
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.PI) // it will return value of PI
console.log(Math.E) // it will return value of Euler's number
console.log(Math.min(2,6,1,5,2,3))
console.log(Math.max(2,6,1,5,2,3))

console.log(Math.random()) // it will return random number between 0 to 1
console.log((Math.random()*10) + 1) // it will return random number between 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)) // it will return random number between min to max (both inclusive)