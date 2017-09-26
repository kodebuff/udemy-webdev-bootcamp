// alert("JS FILE CONNECTED!");


// //THIS WORKS OK
// var button = document.querySelector("button");
// var body = document.querySelector("body");
// var isGreen = false;

// //SETUP CLICK LISTENER
// button.addEventListener("click", function() {
  
//   //if body color is green, change it to white
//   if (isGreen) {
//     body.style.background = "white";
//   //if not, change it to green  
//   } else {
//     body.style.background = "green";
//   }
//   //toggle
//   isGreen = !isGreen;  
// });

//BUT THIS ONE IS WAY SHORTER
var button = document.querySelector("button");

button.addEventListener("click", function(){
  document.body.classList.toggle("green");
});