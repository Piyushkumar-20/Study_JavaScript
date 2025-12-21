const coding = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

// coding.forEach( (language) => {
//     console.log(language);
// })

// coding.forEach( function (val){
//     console.log(val);
// })

function printme(item){
   // console.log(item)
}
coding.forEach(printme) // call back function only reference
// coding.forEach( printme ) // call back function without parenthesis

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
})

const myCODING = [
    {
        first: 'JavaScript',
        second: 'Python'
    },
    {
        first: 'Java',
        second: 'C++'
    },
    {
        first: 'Ruby',
        second: 'GoLang'
    }
]
myCODING.forEach ((item) => {
    console.log(item.first, item.second)
} )
