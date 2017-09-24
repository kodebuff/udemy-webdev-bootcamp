# Array Iteration

### **Objectives**

* Use a for loop to iterate over an array
* Use forEach to iterate over an array
* Compare and contrast for loops and forEach

**For Loop**  
To loop over an array using a for loop, we need to make use of the array's  length property.
```javascript
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```  

**ForEach**  
JavaScript provides an easy built-in way of iterating over an array,  ForEach: `arr.forEach(someFunction)`
```javascript
var colors = ["red", "orange","yellow", "green"];

colors.forEach(function(color){
//color is a placeholder, call it whatever you want
  console.log(color);
});
```

**For vs. ForEach**  

The following 2 code snippets do the same thing:
```javascript
//with a for loop
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

```javascript
//using forEach
var colors = ["red", "orange","yellow", "green"];

colors.forEach(function(color){
  console.log(color);
});
```