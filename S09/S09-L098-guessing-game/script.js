//create secret Number
var secretNumber = 4;

//ask to guess a number
var stringGuess = prompt("Guess a number");

//convert stringGuess to type Number
var guess = Number(stringGuess);

//check if guess is correct
if (guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}
//otherwise, if too high
else if (guess > secretNumber) {
  alert("Too high. Guess again.");
}
//otherwise, if too low
else {
  alert("Too low. Guess again.");
}

// MY WHILE SOLUTION
//create secret Number
//var secretNumber = 4;

// do {
//   //ask user to guess
//   var stringGuess = prompt("Guess a number");
  
//   //convert stringGuess to type Number
//   var guess = Number(stringGuess);
  
//   if (guess === secretNumber) {
//     alert("YOU GOT IT RIGHT!");
//     break;
//   }
//   //otherwise, if too high
//   else if (guess > secretNumber) {
//     alert("Too high. Guess again.");
//   }
//   //otherwise, if too low
//   else {
//     alert("Too low. Guess again.");
//   }
  
// }
// while (guess !== secretNumber); 



