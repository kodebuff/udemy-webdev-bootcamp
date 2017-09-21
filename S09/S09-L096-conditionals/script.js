/**************************************************

//MY SOLUTION

var age = prompt("How old are you?");

if(age < 0) {
	alert("Age is invalid.");
}

else if(age < 18) {
	alert("Sorry, you are not old enough to enter the venue.");
}

else if(age < 21) {
	alert("You can enter, but cannnot drink");
}

else if(age == 21) {
	alert("Happy 21st birthday!");
}

else {
	alert("Come on in. You can drink.");
}
**************************************************/


// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

// If age is negative
if(age < 0) {
 console.log("Come back once you're out of the womb");
}

// If age is 21  
if(age === 21) {
 console.log("Happy 21st Birthday!");
}

// If age is odd
//(not evenly divisible by two)
if(age % 2 !== 0) {
 console.log("Your age is odd!");
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}