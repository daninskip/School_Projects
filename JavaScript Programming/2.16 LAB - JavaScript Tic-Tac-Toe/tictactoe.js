let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}

	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	
	const buttons = getGameBoardButtons();

	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			
			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				return gameStatus.HUMAN_WINS;
			}
			else {
				return gameStatus.COMPUTER_WINS;
			}
		}
	}

	// See if any more moves are left
	let foundEmpty = false;
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}

	// If no winner and no moves left, then it's a draw
	return gameStatus.DRAW_GAME;
}

function newGame() {
	clearTimeout(computerMoveTimeout);
	computerMoveTimeout = 0;

	const buttons = getGameBoardButtons()
	for (let button of buttons) {
		button.innerHTML = "";
		button.disabled = false;
		button.className = "";
	}
	playerTurn = true;
	let turnInfo = document.querySelector("#turnInfo");
	turnInfo.innerHTML = "Your turn";
}

function boardButtonClicked(button) {
	if (playerTurn){
		button.innerHTML = "X";
		button.className = "x";
		button.disabled = true;
		switchTurn();
	}
}

function switchTurn() {
	// TODO: Complete the function
	let gameStatus = checkForWinner();
	if (gameStatus === 1){
		if(playerTurn){
			computerMoveTimeout = setTimeout(makeComputerMove, 1000);
			playerTurn = !playerTurn;
			turnInfo.innerHTML = "Computer's turn";
		}
		else {
			turnInfo.innerHTML = "Your turn";
		}
	}
	else {
		playerTurn = false;
		if (gameStatus === 2){
			turnInfo.innerHTML = "You win!";
		}
		if (gameStatus === 3){
			turnInfo.innerHTML = "Computer wins!";
		}		
		if (gameStatus === 4){
			turnInfo.innerHTML = "Draw game";
		}		
	}
}

function makeComputerMove() {
	// TODO: Complete the function
	const availableButtons = document.querySelectorAll('#gameBoard > button:not([disabled])');
  
	if (availableButtons.length > 0) {
	  const randomIndex = Math.floor(Math.random() * availableButtons.length);
	  const selectedButton = availableButtons[randomIndex];
	  
	  selectedButton.innerHTML = "O";
	  selectedButton.classList.add("o");
	  selectedButton.disabled = true;
	  
	  switchTurn();
	}
}