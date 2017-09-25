# Intro to the DOM

### **Objectives**
* Define what the DOM is
* Understand why DOM Manipulation is awesome
* List a few examples of sites that use JS to manipulate the DOM
* Understand the SELECT, then MANIPULATE workflow

### Why Should You Care?
**A few examples:**

* Games
* Scrolling Effects
* Dropdown menus
* Form Validations
* Interactivity
* Animations
* Every awesome site ever

### The DOM (Document Object Model)
The Document Object Model is the interface between your Javascript and HTML+CSS

The browser turns every HTML tag into a Javascript object that we can manipulate

Everything is stored inside of the document object

**The Process**

* SELECT an element and then MANIPULATE
  * For our example, we'll change the `<h1>` color using JS

```javascript
//SELECT the <h1> and save to a variable
var h1 = document.querySelector("h1");`

//MANIPULATE using the <h1> we selected
h1.style.color = "pink";
```

* One more example

```javascript
//SELECT the <body> and change its color every second
var body = document.querySelector("body"); //SELECT
var isBlue = false;

setInterval(function(){   //MANIPULATE
 if (isBlue) {
   body.style.background = "white";
 } else {
   body.style.background = "#3498db";
 }
 isBlue = !isBlue;
}, 1000);
```

[Reference](http://webdev.slides.com/coltsteele/intro-to-the-dom-70#/4)