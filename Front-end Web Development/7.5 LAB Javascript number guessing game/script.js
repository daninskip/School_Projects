function playGuessingGame(numToGuess, totalGuesses = 10) {
    let promptText = "Enter a number between 1 and 100.";
    for (let guesses = 1; guesses <= totalGuesses; guesses++) {      
       let num = prompt(promptText)      
       if (num === null) {
          return 0;
       }
       else if (num === "" || isNaN(num)) {
          promptText = "Please enter a number.";
          guesses--;
       }
       else if (num == numToGuess) {
       
          return guesses;
       }
       else if (num < numToGuess) {
          promptText = num + " is too small. Guess a larger number.";
       }
       else {
          promptText = num + " is too large. Guess a smaller number.";
       }
    }
    return 0;
 }
 
