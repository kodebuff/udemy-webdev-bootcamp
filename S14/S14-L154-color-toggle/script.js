// alert("JS FILE CONNECTED!");

var button = document.querySelector("button");
var body = document.querySelector("body");

//SETUP CLICK LISTENER
button.addEventListener("click", function() {
  body.style.background = "green";
  //alert("Button Clicked!");
});