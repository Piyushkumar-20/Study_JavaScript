function delayedprofile(callback){
    setTimeout(callback, 1000)
}

class User {
    constructor(name, email, loggedin){
        this.name = name;
        this.email = email;
        this._loggedin = loggedin;
    }

    get status(){
        return this._loggedin ? "Loggedin" : "Loggedout"
    }

    set login(value){
        if(typeof value !== "boolean"){
            console.log("Invalid Value")
            return
        } else {
            this._loggedin = value
        }
    }

    showprofile(){
        console.log(`Name:${this.name}`)
        console.log(`Email:${this.email}`)
        console.log(`Status:${this.status}`)
    }
}

const user1 = new User ("Piyush", "piyush@gmail.com", false)
const user2 = user1
user1.showprofile()

delayedprofile(user1.showprofile.bind(user1))

user2.login = true



function delayedaccount(callback){
    setTimeout(callback, 1000)
}
class BankAccount{
    constructor(ownername, balance){
        this. ownername = ownername;
        this._balance = balance;
    }
    get balance(){
        return `${this._balance}`
    }
    set deposit(amount){
        if (typeof amount !== 'number' || amount <=0){
            console.log("Invalid Output")
            return 
        }
        else{
            this._balance += amount

        }
    }

    showaccount(){
        console.log(`Owner: ${this.ownername}`)
        console.log(`Balance: ${this.balance}`)

    }
}

const acc1 = new BankAccount("Piyush", 5000)
     const acc2 = acc1
     acc1.showaccount()

delayedaccount(acc1.showaccount.bind(acc1))
acc2.deposit = 2000


