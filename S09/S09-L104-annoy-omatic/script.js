/*
Annoy-Omatic

Ask the user "Are we there yet?"
Keep asking again and again until they enter "yes" OR "yeah"
Then, alert "Yay, we finally made it!"

*/

//VERSION 1
// var answer = prompt("Are we there yet?");

// while ((answer !== "yes") && (answer !== "yeah")) {
//   answer = prompt("Are we there yet?");
// }

// alert("Yay, we finally made it!");

//VERSION 2
var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
  answer = prompt("Are we there yet?");
}

alert("Yay, we finally made it!")