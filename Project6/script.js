// Generate a Random Color

const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for( let i = 0; i<6; i++){
        color += hex[(Math.floor(Math.random()*16))]
    }
    return color
}
let intervalId
const startchangingcolor = function (){

    if(!intervalId){
        intervalId = setInterval( changebgcolor , 2000 )
    }

     intervalId = 

    function changebgcolor(){
    document.body.style.backgroundColor = randomcolor();
}

}

document.querySelector("#start").
addEventListener('click', startchangingcolor)

const stopchangingcolor = function (){
    clearInterval(intervalId)
    intervalId = null; 
}

document.querySelector('#stop').
addEventListener('click', stopchangingcolor)

