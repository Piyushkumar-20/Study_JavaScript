console.log("Its Day3 of Java Script Practise");

const user = [
    {
        name: "John",
        age: 25,
        city: "New York",
        joined : "2020-01-15"
    },
    {
        name: "Jane",
        age: 30,
        city: "Los Angeles",
        joined : "2019-03-22"
    }
];
console.log(user);

const jsonData = JSON.stringify(user);
console.log(jsonData);

const parsedData = JSON.parse(jsonData);
console.log(parsedData);

let totalage = 0;
for(let i = 0; i <= parsedData.length-1; i++){
    totalage += parsedData[i].age;
}
console.log(`Average ages is :  ${totalage / parsedData.length}`)
