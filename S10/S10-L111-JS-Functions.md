# JS Functions

### Objectives

* Understand why we use functions
* Define a function without arguments
* Define a function with arguments
* Return a value from a function

**Functions**  
It let us wrap bits of code up into **REUSABLE** packages. They are one of the building block of JS.

Declare function first:
```javascript
function doSomething() {
  console.log("HELLO WORLD");
}
```

Then call it:
```javascript
doSomething();
doSomething();
doSomething();
```

Suppose I want to write a code to sing "Twinkle Twinkle Little Star"
```javascript
console.log("Twinkle, twinkle little star");
console.log("How I wonder what you are!");
console.log("Up above the world so high,");
console.log("Like a diamond in the sky.");
```

To sing it again, I have to rewrite all the code. This is not DRY!
```javascript
console.log("Twinkle, twinkle little star");
console.log("How I wonder what you are!");
console.log("Up above the world so high,");
console.log("Like a diamond in the sky.");
```

We can write a function to help us out
```javascript
function singSong() {
  console.log("Twinkle, twinkle little star");
  console.log("How I wonder what you are!");
  console.log("Up above the world so high,");
  console.log("Like a diamond in the sky.");
}
```

To sing the song, we just need to call singSong()
```javascript
singSong();
singSong();
singSong();
singSong();
```