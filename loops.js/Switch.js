// switch (key) {
//     case value:
// break;

// default:
//     break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("jan")
        break;
    
    case 2:
        console.log("Feb")
        break;

    case 3:
        console.log("March")
        break;

    default:
        console.log("Default case");
        break;
}
//f there is no break statement added before the default case, default will also be executed. 
// In this example, the default case was not executed because the break keyword was used before it.