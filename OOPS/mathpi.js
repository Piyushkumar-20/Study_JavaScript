const value = Object.getOwnPropertyDescriptor(Math, "PI")
//console.log(value)

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderchai: function(){
        console.log("Chai nhi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    emuerable: true,
    //configurable: true
    })

for (let [key,value] of Object.entries(chai)){
    if (typeof value != 'function'){
        console.log(`${key}, ${value}`)
    }
}