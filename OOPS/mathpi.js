const value = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(value)

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    emuerable: false,
    configurable: true
    })

for (let [key,value] of Object.entries(chai)){
        console.log(`${key}, ${value}`)
}