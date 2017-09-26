//alert("SCORE KEEPER JS FILE CONNECTED!");

//select buttons
var btnP1 = document.getElementById("p1");
var btnP2 = document.getElementById("p2");
var btnReset = document.getElementById("reset");

//select displays
var displayP1 = document.querySelector("#display-P1");
var displayP2 = document.querySelector("#display-P2");
var displayWinScore = document.querySelector("p span")

//select input
var winScoreInput = document.querySelector("input");

//score variables
var gameOver = false;
var scoreP1 = 0;
var scoreP2 = 0;
var winningScore = 0;

btnP1.addEventListener("click", function(){
  if (!gameOver) {   //if not game over yet, do
    scoreP1++;   //add 1 to Player One score
    if (scoreP1 === winningScore) {  //check if score is same with winningScore
      displayP1.classList.add("winner");
      gameOver = true; // if score is the same as winning score, game over
    }
    displayP1.textContent = scoreP1;  //display Player One score
  }
});

btnP2.addEventListener("click", function(){
  if (!gameOver) {
    scoreP2++;   //add 1 to Player Two score
    if (scoreP2 === winningScore) {
      displayP2.classList.add("winner");
      gameOver = true;
    }
    displayP2.textContent = scoreP2;  //updated Player One score
  }
});

//reset scores and displays
btnReset.addEventListener("click", function(){
  reset();
});

//update winning score whenever score input changes and reset
winScoreInput.addEventListener("change", function(){
  displayWinScore.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});

function reset() {
  scoreP1 = 0;
  scoreP2 = 0;
  gameOver = false;
  
  //update both scores to 0
  displayP1.textContent = scoreP1;
  displayP2.textContent = scoreP2;
  
  displayP1.classList.remove("winner");
  displayP2.classList.remove("winner");
}