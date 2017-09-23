# Intro to JS Scope

Scope is the context that code is executed in.

When we declare a function, it has it's own scope. Variables declared inside the function are not recognized in other functions, as well as in global scope.

Variables declared in global scope can be recognized by functions.

### Higher Order Functions
We can pass function to other functions.
One example of higher order function is setInterval() function:

```javascript
setInterval(anotherFunc, interval);
```
Supposed it needs to sing twinkle, twinkle... every second. We need to create a function sing() to sing twinkle, twinkle and we can use setInterval to sing twinkle, twinkle every second.

```javascript
function sing() {
  console.log("Twinkle, twinkle..");
  console.log("How I wonder..");
}

setInterval(sing, 1000);
```

`setInterval` will return a number, that number can be used to stop the `setInterval` function by using clearInterval function
```javascript
clearInterval(number-returned-by-setInterval);
```

