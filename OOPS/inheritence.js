class user {
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username, gmail, password){
        super(username)
        this.gmail = gmail
        this.password = password
    
}

addcourse(){
    console.log(`A new user is created by ${this.username}`)
    }
}

const chai = new Teacher("Piyush", "piyush@gmail.com", 123 )
chai.addcourse()

const massalachai = new user("massala chai")

massalachai.logme()

console.log(chai instanceof Teacher)
console.log(chai instanceof user)

