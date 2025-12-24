const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target)

        switch (e.target.id){
            case 'grey':
                body.style.backgroundColor = "grey";
                break;
            case "green":
                body.style.backgroundColor = "green";
                break;
            case "blue":
                body.style.backgroundColor = "blue";
                break;
            case "black":
                body.style.backgroundColor = "black";
                break;
            default:
                body.style.backgroundColor = "white";
        }
    })
})

