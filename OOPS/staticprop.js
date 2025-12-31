class user {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username: ${this.username}`);
    }
    static createid(){
        return `123`
    }
}
const piyush = new user("piyush")
console.log(piyush.createid())

class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const Iphone = new Teacher("iphone", "iphone@gmail.com")
console.log(Iphone.createId())