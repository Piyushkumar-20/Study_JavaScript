const user = {
    username: "Piyush",
    logincount: 58,
    isLoggedin: true,

    getuserdetails: function(){
        console.log("Got user detail from database")

    }
}

console.log(user.username)
console.log(user.getuserdetails());