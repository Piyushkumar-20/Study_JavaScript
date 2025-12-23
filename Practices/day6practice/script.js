//Problem 1
const h1 = document.querySelector("#heading")
console.log(h1)

//Problem 2
const h2 = document.querySelector("#title")
console.log(h2)

//Problem 3
const li = document.querySelectorAll("li")
console.log(li)
console.log(li[0].innerText)

//Problem 4
const parag = document.querySelector("p")
console.log(parag)
parag.style.color = "blue"
parag.style.fontSize = "24px"

//Problem 5
let create = document.createElement("div")
create.innerText = "DOM created"
console.log(create)
const news = document.querySelector("body").append(create)
console.log(news)

