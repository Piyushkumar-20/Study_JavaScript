const mynums = [ 1,2,3,4,5,6,7,8]

// const mytotal = mynums.reduce( function (acc, currentvalue){
//     console.log(`acc: ${acc} and currentvalue: ${currentvalue}`)
//     return acc = acc + currentvalue
// }, 0)

//const mytotal = mynums.reduce(  (acc, currentvalue ) => acc + currentvalue,0 )
//console.log(mytotal);

const shoppingcart = [
    {
        itemname: "Js",
        price: 2999
    },
    
    {
        itemname: "Mobile",
        price: 25999
    },
    
    {
        itemname: "Dev",
        price: 259599
    },
    
    {
        itemname: "MobileDev",
        price: 259959
    },

]

const total = shoppingcart.reduce( (acc, item) => acc + item.price , 0 )
console.log(total)