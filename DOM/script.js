// queryselector returns nodelist of first element
// queryselectorall returns nodelist of all elements
// nodelist is similar to array but not exactly array
// we can use forEach loop in nodelist but not other array methods like map, filter etc.
// we can convert nodelist to array using Array.from() method
// parent chid sibling
// In DO TREE there 
// are different types of nodes like element node, text node, comment node etc.
// element node is the actual HTML element
// text node is the text inside the element
// comment node is the comment inside the element
// we work on element node 


// // console.dir(document.body.childNodes[1]);
// // document.body.style.background = "lightblue";

// let heading = document.getElementById("myid")
// console.log(heading)

// const para = document.getElementsByClassName("myclass")
// console.log(para)

// const tag = document.getElementsByTagName("p");
// console.dir(tag)

// const element = document.querySelector(".myclass");
// console.log(element)

// const Allele = document.querySelectorAll(".myclass")
// console.log(Allele)

// const Allel = document.querySelector("#myid")
// console.dir(Allel)

// const tag = document.querySelector("p")
// console.dir(tag)


//console.dir(document.body.childNodes);

// let div = document.querySelector("div")
// console.dir(div)

// let heading = document.querySelector("h1")
// console.dir(heading)

// const news = document.querySelector("h2")
// console.dir(news.innerText)

// news.innerText = news.innerText + " from Apna College Students"
// console.log(news.innerText)

// const divs = document.querySelectorAll("div")
// divs[0].innerText= divs[0].innerText + " is very good" 
// divs[1].innerText= divs[1].innerText + " is very good" 
// divs[2].innerText= divs[2].innerText + " is very good" 

// console.log(divs[0].innerText)
// console.log(divs[1].innerText)
// console.log(divs[2].innerText)

// const divs = document.querySelectorAll(".box")
// let index = 1;
// for(div of divs){
//     div.innerText = `new unique value ${index}`;
//     index++;

// }

// const div = document.querySelector("div");
// console.log(div)

// let id = div.getAttribute("id")
// console.log(id)

// let name = div.getAttribute("name")
// console.log(name)

// const para = document.querySelector("p")
// console.log(para.setAttribute("class","new-class"))

// let divs = document.querySelector("div")
// console.log(divs)

// let newbtn = document.createElement("button")
// newbtn.innerText = "clickMe!"
// console.log(newbtn)

// let div = document.querySelector("div")
// div.append(newbtn) // adds at the end
// div.prepend(newbtn) // adds at the beginning

// let newHeading = document.createElement("h1")
// newHeading.innerText = "This is My New Heading"
// document.querySelector("body").prepend(newHeading)

// let para = document.querySelector("p")
// para.remove()

// let newbutton = document.createElement("button")
// newbutton.innerText = "clickme!"
// newbutton.style.backgroundColor = "red";
// newbutton.style.color= "white" 
// console.log(newbutton)
// let body = document.querySelector("body")
// body.prepend(newbutton)

let para = document.querySelector("p")
para.getAttribute("class")
para.classList.add("new-class")