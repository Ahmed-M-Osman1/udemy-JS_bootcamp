// fetch existing TODOs from localStorage.
const getSaveTodos = function () {
  const JSONTodo = localStorage.getItem("storedTodo");
  if (JSONTodo !== null) {
    todo = JSON.parse(JSONTodo);
  }
};

// Get the DOM element:
const generateTodoDOM = function (filterTodo) {
  const leftTodo = document.createElement("p");
  leftTodo.textContent = filterTodo.text;
  document.querySelector("#filter-todo-div").appendChild(leftTodo);
};

// render TODO:
const renderTodo = function (todo, filter) {
  const filterTodo = todo.filter(function (todo) {
    return todo.text.toLowerCase().includes(filter.searchBox.toLowerCase());
  });
  document.querySelector("#filter-todo-div").innerHTML = "";
  const leftTodo = filterTodo.filter(function (todo) {
    return todo.Completed === false;
  });

  const leftTodotext = document.createElement("h2");
  leftTodotext.textContent = ` There is ${leftTodo.length} todos left`;
  document.querySelector("#filter-todo-div").appendChild(leftTodotext);

  if (filter.hideCompleted) {
    leftTodo.forEach(generateTodoDOM);
  } else {
    filterTodo.forEach(generateTodoDOM);
  }
};

// Save TODO:
const saveTodo = function (todo) {
  localStorage.setItem("storedTodo", JSON.stringify(todo));
};
