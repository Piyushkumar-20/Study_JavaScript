const promise1 = new Promise(function (resolve, reject){
    let error = true
    setTimeout(function(){

        if(!error){
            resolve("Success")
        } else {
            reject("Something Went Wrong")
        }
    },2000)
}) 
promise1.
then((data) => {
    console.log("ok")
}).
catch((error) => {
    console.log("Not ok")
})

console.log("Hiii")
const promise2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Helloo")
    },2000)

})
promise2. then( function(msg){
    console.log("Hii")
})

console.log("byy")

const promise3 = new Promise((resolve, reject) => {
    resolve(5)
})

.then((num)=>{
    return num*2
})
.then((num) => {
    return num*3
})
.then((result)=> {
    console.log(result)
})

async function getAlluser(){
    try{
    const response = await fetch ('https://api.github.com/users/hiteshchoudhary')
    
    const data = await response.json()
  console.log(data)
    } catch (error){
      console.log("E:", error)
    }
}
getAlluser()