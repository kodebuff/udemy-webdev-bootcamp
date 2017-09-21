/***********************************************************
USE WHILE LOOP TO:

1. Print all numbers between -10 to 19

2. Print all even numbers between 10 and 40

3. Print all odd numbers between 300 and 333

4. Print all numbers divisible by 5 AND 3 between 5 and 50

***********************************************************/

var num;

//1. Print all numbers between -10 to 19
console.log("Print all numbers between -10 to 19");
num = -10;
while (num < 20) {
  console.log(num);
  num += 1;
}

// 2. Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
num = 10;
while (num <= 40) {
  //print if num is an even number
  if (num % 2 === 0) {
    console.log(num);
  }
  num += 1;
}

//3. Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
num = 300;
while (num <= 333) {
  //print if num is an even number
  if (num % 2 !== 0) {
    console.log(num);
  }
  num += 1;
}

//4. Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
num = 5;
while (num <= 50) {
  //print if num is an even number
  if ((num % 3 === 0) && (num % 5 === 0)) {
    console.log(num);
  }
  num += 1;
}