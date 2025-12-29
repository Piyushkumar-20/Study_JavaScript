function setusername(username){

    this.username = username
    console.log("called")
}

function createuser(username, email, password){
    setusername.call(this, username)
    this.email= email
    this.password = password
}

const chai = new createuser("chai", "chai@fb.com", 123)
console.log(chai)

function A () {}
const a = new A

console.log(a.__proto__ === A.prototype)