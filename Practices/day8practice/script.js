// const button = document.querySelector('#btn')
// button.addEventListener("clicked" , function  (e){
//     console.log("Button Clicked")
//     console.log("e.target")

// })

// const color = document.querySelector('.container')
// color.addEventListener("click", function(e){
//     console.log(e.target.innerHTML)
//     if (e.target.tagtName === 'BUTTON'){
//         const container = document.body.style.backgroundColor = e.target.innerText.toLowerCase();
//     }
// })

const form = document.querySelector('#myForm')
const msg = document.querySelector('#msg')
form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.querySelector('#name').value

    if(name === ""){
        msg.innerText = "Name Required";
    } else{
        msg.innerText = 'Form Submitted'
    }
});


