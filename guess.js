let targetNumber = Math.floor(Math.random() * 100) + 1; 
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');

function checkGuess() {
    const userGuess = parseInt(guessInput.value); 


    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        console.log("Please enter a valid number between 1 and 100.");
        message.textContent = "Please enter a valid number between 1 and 100."
        return;
    }

    attempts++; 

    
    if (userGuess === targetNumber) {
        console.log("Congrats, you guessed it right!");
        message.textContent = `Congrats! You guessed it right in ${attempts} attempts!`;
        submitBtn.disabled = true;
    } else if (userGuess > targetNumber) {
        console.log("go lower buddy, you got this");
        message.textContent = "go lower buddy, you got this 👇";
    } else {
        console.log("OOPS go higher");
        message.textContent = "OOPS go higher ☝️";
    }

    guessInput.value = '';
    guessInput.focus();
      if (attempts >= 7) {
        console.log("Game Over! You ran out of attempts.");
        message.textContent = ` Game Over! You used all 7 attempts. The number was ${targetNumber}.`;
        endGame();
    }
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = "";
    guessInput.value = '';
    submitBtn.disabled = false;
    guessInput.focus();
    console.log("Game restarted! Guess a new number.");
}


submitBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);

guessInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
//3X3 grid , icon ->wackamole
//