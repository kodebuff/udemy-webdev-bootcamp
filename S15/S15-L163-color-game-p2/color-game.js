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
var pickedColor = colors[3];

//update display color in html
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      alert("correct!");
    } else {
      alert("wrong");
    }
  });
}

