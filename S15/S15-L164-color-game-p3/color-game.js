// alert("COLOR GAME JS FILE CONNECTED!");

//generate colors for each box
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
  ];

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


for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
}


function changeColors(color){
  //loop through all squares
  for(var i = 0; squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
  
}

function pickColor(){
  //this will select the colors array
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}