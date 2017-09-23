/***********************************************************

1. isEven()
Write a function isEven() which takes a single numeric argument
and returns true if the number is even, and false otherwise.

2. factorial()
Write a function factorial() which takes a single numeric 
argument and returns the factorial of that number.

3. kebabToSnake()
Write a function kebabToSnake() which takes  a single kebab-cased
string argument and returns the snake_cased version.

***********************************************************/

//1. isEven()
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// //Colt's solution
// function isEven() {
//   return num % 2 === 0;
// }



//2. factorial()
function factorial(num) {
  if (num > 0) {
    var x = num;
    var i = 0;
    for (i = num; i > 1; i--) {
      x = x * (i - 1);
    }
    return x;
  } else if (num === 0) {
    return 1;
  } else {
    return undefined;
  }
}

// //Colt's solution
// function factorial(num) {
//   var result = 1;
//   for (var i = 2; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }



//3. kebabToSnake()
function kebabToSnake(str) {
  str = str.split("-").join("_");
  return str;
}

//Colt's solution
// function kebabToSnake(str) {
//   var newStr = str.replace(/-/g , "_");
//   return newStr;
// }