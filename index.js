const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the Number Guessing Game!");
console.log("I' thinking of a number between 1 and 100.");
guesses = 0;

function askdiffculty() {
  readline.question("Enter a difficulty: ", (choice) => {
    switch (choice) {
      case "1":
        guesses = 10;
        break;
      case "2":
        guesses = 5;
        break;
      case "3":
        guesses = 3;
        break;
    }
    guess();
  });
}

com_num = Math.floor(Math.random() * 100);

function guess() {
  console.log(`You have ${guesses} guesses remaining`);
  readline.question("Enter you guess: ", (number) => {
    if (number < com_num) {
      console.log("Guess a Larger number");
      guesses--;
      guess();
    } else if (number == com_num) {
      console.log("Correct number");
      readline.close();
    } else {
      console.log("Guess a smaller number");
      guesses--;
      guess();
    }
  });
  if (!guesses) {
    console.log("Out of guesses, try again");
  }
}

askdiffculty();
