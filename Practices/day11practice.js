function user (name){
    this.name = name
}
user.prototype.sayHi = function(){
    console.log(this.name)
}

const u1 = user("Piyush")
u1.sayHi // output it willl throw an error because say.hi is undefined

