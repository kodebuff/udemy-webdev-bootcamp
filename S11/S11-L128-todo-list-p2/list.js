var todos = ["Buy new shoes"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  //handle input
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "del") {
    delTodo();
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

//REFACTOR Functions

function listTodos() {
  //console.log(todos);
  console.log("**********");
  todos.forEach(function(todo, i) { //second argument i, will display the index
    console.log(i + ": " + todo);
  });
  console.log("**********");
}

function addTodo() {
  //ask for new todo
  var newTodo = prompt("Enter new todo");
  //add to todos array
  todos.push(newTodo);
  console.log("Added Todo");
}

function delTodo() {
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete:");
  //delete that todo by using splice array method
  todos.splice(index, 1);
  console.log("Deleted Todo");
}