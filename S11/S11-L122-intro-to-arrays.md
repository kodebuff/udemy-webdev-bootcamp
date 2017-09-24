# Javascript Arrays

### Our first Data Structure

**Objectives**
* Understand arrays conceptually
* Write code using JS arrays

Suppose I wanted to model a group of friends:

```javascript
var friend1 = "Charlie";
var friend2 = "Liz";
var friend3 = "David";
var friend4 = "Mattias";
```

This is a lot of code, and it doesn't let us group the friends together

This is a perfect use case for an ARRAY
```javascript
var friends = ["Charlie", "Liz", "David", "Mattias"];
```

### **Arrays**

Arrays let us group data together in lists
```javascript
var friends = ["Charlie", "Liz", "David", "Mattias"];
```


| Charlie |  Liz |  David | Mattias | 
| -- | -- | -- | -- |
|  0 |  1 | 2 | 3 |

Array are indexed starting at 0.  Every slot has a corresponding number

We can use those indices to retrieve data

```javascript
var friends = ["Charlie", "Liz", "David", "Mattias"];

console.log(friends[0])   //"Charlie"

friends[1] + " <3 " + friends[2]  //"Liz <3 David"
```

```javascript
var friends = ["Charlie", "Liz", "David", "Mattias"];

friends[0] = "Chuck";
friends[1] = "Lizzie";
```

We can also update arrays

| Charlie |  Liz |  David | Mattias |
| -- | -- | -- | -- |
|  0 |  1 | 2 | 3 |

```javascript
var friends = ["Charlie", "Liz", "David", "Mattias"];

friends[0] = "Chuck";
friends[1] = "Lizzie";
```

| Chuck |  Lizzie |  David | Mattias |
| -- | -- | -- | -- |
|  0 |  1 | 2 | 3 |

We can also add new data

| Charlie |  Liz |  David | Mattias |
| -- | -- | -- | -- |
|  0 |  1 | 2 | 3 |

```javascript
var friends = ["Charlie", "Liz", "David", "Mattias"];
friends[4] = "Amelie";
```

| Charlie |  Liz |  David | Mattias | Amelie |
| -- | -- | -- | -- | -- |
|  0 |  1 | 2 | 3 | 4 |

Last few things

```javascript
//We can initialize an empty array two ways:
var friends = []; //no friends :(
var friends = new Array() //uncommon

//Arrays can hold any type of data
var random_collection = [49, true, "Hermione", null];

//Arrays have a length property
var nums = [45,37,89,24];
nums.length   //4
```