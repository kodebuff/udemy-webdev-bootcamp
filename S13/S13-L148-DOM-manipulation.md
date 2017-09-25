# DOM Manipulation

* changing an element's style
* adding/removing classes
* changing the content of a tag
* changing attributes(src, href, etc.)

**Style**  
The style property is one way to manipulate an element's style

```javascript
/SELECT
var tag = document.getElementById("highlight");

//MANIPULATE
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
```

**An Alternative**  
Rather than directly manipulating style with JS, we can define a CSS class and then toggle it on or off with JS

```javascript
//INSTEAD OF THIS:
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";
```

```css
/*DEFINE A CLASS IN CSS*/
.some-class {
  color: blue;
  border: 10px solid red;
}
```

```javascript
var tag = document.getElementById("highlight");
//ADD THE NEW CLASS TO THE SELECTED ELEMENT
tag.classList.add("some-class");
```

**classList**  
A read-only list that contains the classes for a given element.  It is **not an array.**

```css
/*DEFINE A CLASS IN CSS*/
.another-class {
  color: purple;
  fontSize: 76px;
}
```

```javascript
var tag = document.querySelector("h1");

//ADD A CLASS TO THE SELECTED ELEMENT
tag.classList.add("another-class");

//REMOVE A CLASS
tag.classList.remove("another-class");

//TOGGLE A CLASS
tag.classList.toggle("another-class");
```

**textContent**  
Returns a string of all the text contained in a given element.

```html
<p>
  This is an <strong>awesome</strong> paragraph 
</p>
```

```javascript
/Select the <p> tag:
var tag = document.querySelector("p");

//Retrieve the textContent:
tag.textContent //"This is an awesome paragraph"

//alter the textContent:
tag.textContent = "blah blah blah";
```

**innerHTML**  
Similar to textContent, except it returns a string of all the HTML contained in a given element

```html
<p>
  This is an <strong>awesome</strong> paragraph 
</p>
```

```javascript
//Select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML
```

**Attributes**  
Use getAttribute() and setAttribute() to read and write attributes like src or href

```thml
<a href="www.google.com">I am a link</a>
<img src="logo.png">
```

```javascript
var link = document.querySelector("a");
link.getAttribute("href");  //"www.google.com"
//CHANGE HREF ATTRIBUTE
link.setAttribute("href","www.dogs.com"); 
///<a href="www.dogs.com">I am a link</a>

//TO CHANGE THE IMAGE SRC
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
//<img src="corgi.png">
```