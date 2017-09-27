// alert("COLOR GAME JS FILE CONNECTED!");

var numSquares = 6;
//generate colors for each box
var colors = generateRandomColors(numSquares);
//assigning colors in each boxes
var squares = document.querySelectorAll(".square");
//assigning the chosen color
var pickedColor = pickColor();
//select colorDisplay
var colorDisplay = document.getElementById("colorDisplay");
//update display color in html
colorDisplay.textContent = pickedColor;
//
var messageDisplay = document.querySelector("#message");
//
var h1 = document.querySelector("#egg-head");
//
var resetButton = document.querySelector("#reset");
//
var easyBtn = document.querySelector("#easyBtn");
//
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change color
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    
    //compare color to pickedColor
    
    //console.log(clickedColor, pickedColor);
    
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      h1.style.backgroundColor = "steelblue";
      messageDisplay.textContent = "Try again";
    }
  });
}


function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
  
}

function pickColor(){
  //this will select the colors array
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  
  //repeat num times
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}