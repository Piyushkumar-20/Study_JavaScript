let x = 10;

function outer() {
  let x = 20;

  function inner() {
    console.log(x);
  }

  inner();
}

outer();
// function parent() {
//   let a = 5;

//   function child() {
//     let b = 10;
//   }

//   console.log(a);
//   console.log(b);
// }

// parent();
function outer() {
  let msg = "Hello";

  function inner() {
    console.log(msg);
  }

  msg = "Hi";
  return inner;
}

const fn = outer();
fn();
