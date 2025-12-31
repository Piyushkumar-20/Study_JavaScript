// ES6

class user{
    constructor(username, gmail, password){
        this.username = username;
        this.gmail = gmail;
        this.password = password;
    }


encryptpassword(){
    return `${this.password}abc`
}
}
const code = new user("piyush", "piyush@gmail.com", "323465")
console.log(code.encryptpassword())

// BEHIND THE SCENE

function User(username, email, password){
    this.username = username;
    this.password = password;
    this.email = email;
}

User.prototype.encryptpassword = function(){
       return `${this.password}abc`
}

const tea = new User("tea", "tea@google.com", 123)
console.log(tea.encryptpassword())