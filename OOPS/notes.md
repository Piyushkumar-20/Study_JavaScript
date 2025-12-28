    # JavScript and Classes

    
## OOP--> Object Oriented Programming

    ##Object
    - collection of properties and methods.
    - Ex: toLowercase, toUppercase 
 

## Arts of OOP
    Object Literal (means exactly or litteraly)

    - constructor function -> Always gives a new function
    - Prototypes
    - Classes
    - Instances(new, this)
    - new keyword 
- Step1 -> whenver use a (new) keyword an empty object is created which is called instances.
- step2 -> Constructor function is called due to (new) keyword.
- step3 -> all the arguments are injected into the (this) keyword.
- step4 -> we get our functions.

## Four Pillars
    - Abstraction -  detail Hide (Ex: Fetch)
    - Encapsulation - Many forms 
    - Inheritence
    - Polymorphism

# Day 10 – JavaScript (Fetch + OOPs)  
## Important Questions & Answers

---

### Why does `fetch()` resolve even on 404 or 500 errors?

**Answer:**  
Because HTTP errors (404, 500) are still valid HTTP responses.  
`fetch()` only rejects when a **network error** occurs (like no internet, DNS failure, or CORS issue).

    js
    const res = await fetch(url)

    if (!res.ok) {
    throw new Error(res.status)
    } 

## What is the difference between instance method and prototype method?

**Answer:**

- Instance properties are stored **inside each object**
- Methods are stored on the **prototype** and shared by all objects

```js
class User {
  constructor(name) {
    this.name = name   // instance property
  }

  sayHi() {            // prototype method
    console.log(this.name)
  }
} 
```
## What does this refer to inside a class method?

Answer:

this refers to the object that calls the method.

    user1.sayHi() // this → user1
    user2.sayHi() // this → user2

## Why is async/await just syntax sugar over Promises?

Answer:

Because async/await does not change how Promises work; it only improves readability.

```async function getData() {
  const res = await fetch(url)
  return res.json()
}

function getData() {
  return fetch(url).then(res => res.json())
}
```
- async always returns a Promise

- await pauses function execution, not the JavaScript engine

## Where does OOP actually help in frontend applications?

Answer:

OOP helps when applications grow and need structure, reuse, and scalability.

## Used for:

- API services

- Authentication logic

- State management

- Business logic

```class UserService {
  async login() {}
  async logout() {}
  async getProfile() {}
}
```
- OOP provides structure and maintainability, not magic.





