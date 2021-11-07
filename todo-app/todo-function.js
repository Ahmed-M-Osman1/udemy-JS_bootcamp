// fetch existing TODOs from localStorage.
const getSaveTodos = function () {
  const JSONTodo = localStorage.getItem("storedTodo");
  if (JSONTodo !== null) {
    todos = JSON.parse(JSONTodo);
  }
};

// remove Todo:
const removeTodo = function(id){
  const todoIndex = todos.findIndex(function(todo){
    return todo.id === id 
  })
  if (todoIndex > -1){
    todos.splice(todoIndex,1)
  }
}

//change the complete of todo:
const changeComplete = function(id){
  const changedTodoIndex = todos.findIndex(function(todo){
    return todo.id === id
  })
  todos[changedTodoIndex].Completed = !todos[changedTodoIndex].Completed
}
// andrew solution was the same but he use (find not findIndex)
// Get the DOM element:
const generateTodoDOM = function (filterTodo) {
  const todoContainer = document.createElement("div");
  const leftTodo = document.createElement("span");

  // checkBox
  const todoCheckBox = document.createElement("input");
  todoCheckBox.setAttribute("type", "checkbox");
// check the checkbox
  todoCheckBox.checked = filterTodo.Completed
  todoCheckBox.addEventListener('change', function(){
    changeComplete(filterTodo.id)
    saveTodo(todos)
    renderTodo(todos, filter)
  });


  leftTodo.textContent = filterTodo.text;

  todoContainer.appendChild(todoCheckBox);
  todoContainer.appendChild(leftTodo);

// remove btn
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "x";
  todoContainer.appendChild(removeBtn);

  removeBtn.addEventListener('click', function(){
    removeTodo(filterTodo.id)
    saveTodo(todos)
    renderTodo(todos, filter)
  });


  document.querySelector("#filter-todo-div").appendChild(todoContainer);
};

// render TODO:
const renderTodo = function (todos, filter) {
  const filterTodo = todos.filter(function (todos) {
    return todos.text.toLowerCase().includes(filter.searchBox.toLowerCase());
  });
  document.querySelector("#filter-todo-div").innerHTML = "";
  const leftTodo = filterTodo.filter(function (todos) {
    return todos.Completed === false;
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
const saveTodo = function (todos) {
  localStorage.setItem("storedTodo", JSON.stringify(todos));
};
