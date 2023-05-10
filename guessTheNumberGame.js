function guessTheNumberGame() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let computerGuess = Math.floor(Math.random() * 100);
  let guess;
  let recursiveAsyncReadLine = function () {
    readline.question(`Guess the number (0-100): `, (number) => {
      guess = Number(number);
      if (guess <= 100 && guess >= 0) {
        if (guess === computerGuess) {
          console.log(`Thats right! The correct number is ${guess} !`);
          return readline.close;
        } else if (guess < computerGuess) {
          console.log(`Wrong! The correct number is higher than ${guess} !`);
          recursiveAsyncReadLine();
        } else if (guess > computerGuess) {
          console.log(`Wrong! The correct number is lower than ${guess} !`);
          recursiveAsyncReadLine();
        }
      } else {
        console.log(
          `You are supposed to give me a number between 0 and 100! Try again!`
        );
        recursiveAsyncReadLine();
      }
    });
  };
  recursiveAsyncReadLine();
}

guessTheNumberGame();
