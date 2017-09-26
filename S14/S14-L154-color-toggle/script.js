// alert("JS FILE CONNECTED!");

var button = document.querySelector("button");
var body = document.querySelector("body");
var isColorWhite = true;

//SETUP CLICK LISTENER
button.addEventListener("click", function() {
  
  //if body color is white, change it to green
  if (isColorWhite) {
    body.style.background = "green";
  //if not, change it to white  
  } else {
    body.style.background = "white";
  }
  //toggle
  isColorWhite = !isColorWhite;  
});
