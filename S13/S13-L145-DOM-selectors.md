# DOM Selectors

### It all starts with the document, the root node

### **Methods**
The document comes with a bunch of methods for selecting elements.  We're going to learn about the following 5:

* document.getElementById()
* document.getElementsByClassName()
* document.getElementsByTagName()
* document.querySelector()
* document.querySelectorAll()

**getElementById**  
Takes a string argument and returns the one element with a matching ID

```javascript
var tag = document.getElementById("highlight");
```

```html
<body>
  <h1>Hello</h1>
  <h1>Goodbye</h1>
  <ul>
    <li id="highlight">List Item 1</li>
    <li class="bolded">List Item 2</li>
    <li class="bolded">List Item 3</li>
  </ul>
</body>
```

**getElementsByClassName**  
Takes a string argument and returns a list of elements that have a matching class.

```javascript
var tags = document.getElementsByClassName("bolded");
console.log(tags[0]);

var tags = document.getElementsByTagName("h1");
console.log(tags[0]);
```

```html
<body>
  <h1>Hello</h1>
  <h1>Goodbye</h1>
  <ul>
    <li id="highlight">List Item 1</li>
    <li class="bolded">List Item 2</li>
    <li class="bolded">List Item 3</li>
  </ul>
</body>
```
**querySelector**  
Returns the first element that matches a given CSS-style selector

```javascript
//select by ID
var tag = document.querySelector("#highlight");

//select by Class
var tag = document.querySelector(".bolded");

//select by tag
var tag = document.querySelector("h1");
```

```html
<body>
  <h1>Hello</h1>
  <h1>Goodbye</h1>
  <ul>
    <li id="highlight">List Item 1</li>
    <li class="bolded">List Item 2</li>
    <li class="bolded">List Item 3</li>
  </ul>
</body>
```

**querySelectorAll**  
Returns a list of elements that matches a given CSS-style selector

```javascript
//select by tag
var tags = document.querySelectorAll("h1");

//select by class
var tags = document.querySelectorAll(".bolded");
```

```html
<body>
  <h1>Hello</h1>
  <h1>Goodbye</h1>
  <ul>
    <li id="highlight">List Item 1</li>
    <li class="bolded">List Item 2</li>
    <li class="bolded">List Item 3</li>
  </ul>
</body>
```