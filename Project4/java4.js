let randomNumber = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector('#submitguess');
const userinput = document.querySelector('#guessfield');
const guessslot = document.querySelector('.guesses');
const lastguess = document.querySelector('.lastresult');
const loworhigh = document.querySelector('.loworhigh');
const startover = document.querySelector('.resultparas');

const p = document.createElement('p');

let prevguess = [];
const maxGuesses = 10;
let guessesRemaining = maxGuesses;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        if (!playgame) return;
        e.preventDefault();
        const guess = parseInt(userinput.value, 10);
        validateguess(guess);
    });
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
        return;
    } else if (guess < 1) {
        alert('Please enter a number greater than 0');
        return;
    } else if (guess > 100) {
        alert('Please enter a number less than 101');
        return;
    }

    prevguess.push(guess);
    displayguess();
    checkguess(guess);
}

function checkguess(guess) {
    if (guess === randomNumber) {
        displaymessage('Congratulations! You guessed it.');
        endgame();
        return;
    }

    guessesRemaining--;

    if (guessesRemaining <= 0) {
        displaymessage(`Game Over. Random number was ${randomNumber}`);
        endgame();
        return;
    }

    if (guess < randomNumber) {
        displaymessage('Your guess is too low');
    } else {
        displaymessage('Your guess is too high');
    }
}

function displayguess() {
    userinput.value = '';
    guessslot.textContent = prevguess.join(', ');
    lastguess.textContent = String(guessesRemaining);
}

function displaymessage(message) {
    loworhigh.textContent = message;
}

function endgame() {
    playgame = false;
    userinput.disabled = true;
    submit.disabled = true;
    p.classList.add('button');
    p.innerHTML = `<button id="newGameBtn">Start New Game</button>`;
    startover.appendChild(p);
    document.querySelector('#newGameBtn').addEventListener('click', newgame);
}

function newgame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevguess = [];
    guessesRemaining = maxGuesses;
    userinput.value = '';
    userinput.disabled = false;
    submit.disabled = false;
    guessslot.textContent = '';
    lastguess.textContent = String(maxGuesses);
    loworhigh.textContent = '';
    startover.removeChild(p);
    playgame = true;
}