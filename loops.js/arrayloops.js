// ["", "", ""]
// [{}, {}, {}]
// for of loop
const arr = [10, 20, 30, 40, 50];
for (const element of arr) {
    //console.log(element);
}
const greetings = "Hello world"
for(const char of greetings){
    //console.log(`Each char is ${char}`)
}

// maps 
// the map object holds key-value pairs and remembers the original insertion order of the keys.
// any value (both objects and primitive values) may be used as either a key or a value.
// it do not store duplicate keys
// map is not an iterable 
// creating a map
const map = new Map();
map.set('a',1)
map.set('b',2)
map.set('c',3)

//console.log(map)

// iterating over map using for of loop

for(const [key, value] of map){
    //console.log(key, ':-', value)
}

const myObj = {
    "Game1": "Ps5",
    "Game2": "Fifa23",
    "Game3": "Assasins Creed"
}

//for(const [key, values] of myObj){
   // console.log(values)
//}

for (const key in map) {
   console.log(key);
    
}