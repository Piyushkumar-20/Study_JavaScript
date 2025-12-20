let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString())
// console.log(typeof mydate)

// let myowndate = new Date(2024, 1, 25)
let myowndate = new Date("01-20-2024")
// console.log(myowndate.toLocaleString())

// in java script month starts from 0 to 11

// let myTimestamp = Date.now()
// console.log(myTimestamp)
// console.log(myowndate.getTime()) 
// console.log(Math.floor(Date.now()/1000)) 

let newDate = new Date()
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday: 'long',
    year:'numeric',
    month:'long',
    day:'2-digit',
    timezone: 'UTC',
}))