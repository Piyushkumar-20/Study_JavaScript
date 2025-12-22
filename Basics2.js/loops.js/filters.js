// const coding = ["Java", "ruby", "javascript", "Python", "CPP"]

// const values = CSSGroupingRule.forEach( (item) => {
//     //console.log(item)
//     return item;
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => num > 5)
// console.log(newNums);

// const newNums = myNums.filter( (num)=> {
//     return num> 4
// })


// const newNums = []

// myNums.forEach( (num) =>{
//     if(num > 4){
//         newNums.push(num)
//     }
// } )
// console.log(newNums);

const books = [
    {title: 'Book one', genre: 'Fiction', publish: 1981},
    {title: 'Book two', genre: 'Non - Fiction', publish: 1983},
    {title: 'Book three', genre: 'Fiction', publish: 2081},
    {title: 'Book four', genre: 'Non - Fiction', publish: 1961},
    {title: 'Book five', genre: 'Non - Fiction', publish: 1951},
    {title: 'Book six', genre: 'Fiction', publish: 2031}
];

let userbooks = books.filter( (mybooks) => mybooks.genre === 'Fiction' )
 userbooks = books.filter( (mybooks) => {
    return mybooks.publish = 1981 && mybooks.genre === "Fiction"
} )
console.log(userbooks);

