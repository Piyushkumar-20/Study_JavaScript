// let myname = "Piyush            "
// console.log(myname.truelength);

let myheroes = ["Thor", "Ironman"]
let heropower = {
    thor: "Hammer",
    Ironman: "IQ",

getIronmanpower: function(){
    console.log(`Ironman power is ${this.Ironman}`)
    }
}
Object.prototype.piyush = function() {
    console.log(`piyush is present in all objects`)
}

Array.prototype.mypiyush = function (){
    console.log(`Piyush says hello`)
}

// myheroes.mypiyush()
// heropower.mypiyush()
// myheroes.piyush()
// heropower.piyush()

// IHERITENCE

const user ={
    name: "chai",
    gmail: "chai@google.com"
}

const Teacher = {
    makevideo: true
}

const teachingsupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teachingsupport
}

Teacher.__proto__ = user

// MODERN SYNTAX

Object.setPrototypeOf(teachingsupport, Teacher)


let anothername = "chaiaurcode   "  
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anothername.truelength()
"piyush".truelength()