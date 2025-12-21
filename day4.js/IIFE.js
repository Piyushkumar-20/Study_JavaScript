// Immedietly Invoked Function Expression (IIFE)

/* global scope ke pollution se problem hoti hai kai baaar to usi global socpe ke 
declaration hai usi pollution ko hatane ke liye IIFe ka use kiya hai */

(function chai(){
    //Named IIFE
    console.log("DB coneected")
})();


( (name) => {
    //Unnamed IIFE
    console.log(`DB connected ${name} `);
}) ("Piyush")

//isme error aayega kyuki semicolon nhi hai aise case mai semicolon lagana hai.

