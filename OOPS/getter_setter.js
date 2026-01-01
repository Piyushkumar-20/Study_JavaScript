class user {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email = value
    }
    get password(){
        return `${this._password}hitesh`
    }
    set password(value){
        this._password = value
    }
}
const piyush = new user("pi@gmail.com", "123abc")
console.log(piyush.password)
console.log(piyush.email)