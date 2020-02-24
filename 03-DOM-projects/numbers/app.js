/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
- HAVE FUN :) 
*/

// Game values
let min = 1,
	max = 10,
	winningNum = getRandomNum(min, max),
	guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
	minNum = document.querySelector('.min-num'),
	maxNum = document.querySelector('.max-num'),
	guessBtn = document.querySelector('#guess-btn'),
	guessInput = document.querySelector('#guess-input'),
	message = document.querySelector('.message');

// Assign user interface min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e) {
	if (e.target.className === 'play-again') {
		window.location.reload();
	}
});

// Listen for guess
guessBtn.addEventListener('click', function () {
	let guess = parseInt(guessInput.value);

	// Validate (guess is a number between min and max)
	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}

	// Check if win
	if (guess === winningNum) {
		// Game over - won
		gameOver(true, `WINNER WINNER CHICKEN DINNER`);
	}
	else {
		// Wrong number, take a guess away
		guessesLeft -= 1;

		if (guessesLeft === 0) {
			// Game over - lost
			gameOver(false, `Game Over, you lost bot. The correct number was ${winningNum}`);
		}
		else {
			// Game continues - answer wrong

			// Change border color
			guessInput.style.borderColor = 'red';

			// Clear Input / reset input field
			guessInput.value = '';

			// Tell user its the wrong number
			setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
		}
	}
});

// Game over
function gameOver (won, msg) {
	let color;
	// if win equals true, set color to green, else to red
	won === true ? (color = 'green') : (color = 'red');

	// Disable input
	guessInput.disabled = true;
	// Change border color
	guessInput.style.borderColor = color;
	// Set text color
	message.style.color = color;
	// Set message
	setMessage(msg);

	// PLay Again?
	guessBtn.value = 'Play Again';
	guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum (min, max) {
	// Math.floor to remove decimal (rounds down)
	// Math.random returns a decimal 0 to 1
	// * (max-min + 1) + min gives our correct range
	return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(winningNum);

// Set message
function setMessage (msg, color) {
	// Avengers assemble the message show to the user
	message.style.color = color;
	message.textContent = msg;
}
