const name = "Piyush"
const repocount = 50

console.log(`Hello my name is ${name} and my repocount is ${repocount}`)

const gameName = new String('piyushi')
console.log(gameName[0]);
console.log(gameName.toUpperCase()); // it will convert string to uppercase
console.log(gameName.charAt(3));  // it will give character at index 3


const newString = gameName.substring(0,4) // it will extract from index 0 to 4 but not including 4
console.log(newString);

const anotherString = gameName.slice(-8,3) // if we give negative index it will count from last
console.log(anotherString);

const newStringone = "  Piyush  "
console.log(newStringone);
console.log(newStringone.trim()); // Removes whitespace from both ends

const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
console.log(url.replace('watch?' , 'w')) // it will replace watch? with w

console.log(url.includes('youtube')) // it will return true if youtube is present in url otherwise false

console.log(gameName.split('i')) // it will split string at each occurrence of 'i' and return array