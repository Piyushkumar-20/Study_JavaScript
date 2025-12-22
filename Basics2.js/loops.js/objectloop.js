// Example of looping through an object's properties using a forin loop

const myObject = {
    js: "javascript",
    py: "python",
    rb: "ruby",
    java: "java",
}

for (const key in myObject) {
   //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Example of looping through an array's properties using a forin loop 

const programming = ["js", "py", "rb", "java"];

for (const index in programming){
    console.log(`index values are: ${index}`)
}

