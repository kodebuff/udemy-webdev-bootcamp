# DOM Events

#### Making things interactive

**Events are everywhere**

* Clicking on a button
* Hovering over a link
* Dragging and Dropping
* Pressing the Enter key

**The Process**  
We select an element and then add an event listener

* "Listen for a click on this `<button>`"
* "Listen for a hover event on the `<h1>`"
* "Listen for a keypress event on text input"

**The Syntax**  
To add a listener, we use a method called *addEventListener*

```javascript
element.addEventListener(type, functionToCall);
```

```javascript
var button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("SOMEONE CLICKED THE BUTTON!");
});
```

Let's display a message when a button is clicked

```html
<button>Click Me</button>
<p>No One Has Clicked Me Yet</p>
```

```javascript
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//SETUP CLICK LISTENER
button.addEventListener("click", function() {
  paragraph.textContent = "Someone Clicked the Button!";
});
```

We could also rewrite it using a named function

```javascript
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", changeText);

function changeText() {
  paragraph.textContent = "Someone Clicked the Button!";
}
```