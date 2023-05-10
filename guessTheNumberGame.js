function guessTheNumberGame() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let computerGuess = Math.floor(Math.random() * 100);
  let guess;
  console.log("Instructions:\nThe program will randomly choose a number between 1 and 100.\nYou will need to guess that number by writing it below the prompt.\nThe game has started...\nGood luck!");
  let recursiveAsyncReadLine = function () {
    readline.question(`Guess the number (0-100): `, (number) => {
      guess = Number(number);
      if (guess <= 100 && guess >= 0) {
        if (guess === computerGuess) {
          console.log(`Thats right! The correct number is ${guess} !`);
          return readline.close;
        } else if (guess < computerGuess) {
          console.log(`Wrong! The correct number is higher than ${guess} !\nPlease try again:`);
          recursiveAsyncReadLine();
        } else if (guess > computerGuess) {
          console.log(`Wrong! The correct number is lower than ${guess} !\nPlease try again:`);
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
function startTheGame() {
  const beginGame = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let option;
  let isStarted = false;
  let recursiveStartQuestion = function () {
    beginGame.question(`Please write "start" to begin the game: `, (answer) => {
      option = (answer);
      if (option === "start"){
        isStarted = true;
        beginGame.close();
        guessTheNumberGame() 
      } else {
        console.log(`You wrote ${option}. You need to just write "start" without the quotes to begin the game.`);
        recursiveStartQuestion()
      }
    });
  };
  recursiveStartQuestion()
  if (!isStarted){
    return;
  }
}
startTheGame()

