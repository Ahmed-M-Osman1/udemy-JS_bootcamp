const todo = [
  {
    text: "Pray",
    Completed: true,
  },
  {
    text: "Read",
    Completed: true,
  },
  {
    text: "Learn",
    Completed: false,
  },
  {
    text: "Sleep",
    Completed: false,
  },
  {
    text: "Eat",
    Completed: true,
  },
];

// const p = document.querySelectorAll('p')

// p.forEach(function(p){
//     if (p.textContent.includes('the')){
//         p.remove()
//     }
// })

const filter = {
  searchBox: '',
  hideCompleted: false
}

document.querySelector('#hideCompleted').addEventListener('change',function(e){
  filter.hideCompleted = e.target.checked
  renderTodo(todo,filter)
})


const renderTodo = function(todo,filter){
  const filterTodo = todo.filter(function(todo){
    return todo.text.toLowerCase().includes(filter.searchBox.toLowerCase())
  })
  document.querySelector("#filter-todo-div").innerHTML = ''
  const leftTodo = filterTodo.filter(function (todo) {
      return todo.Completed === false;
    });
  
  const leftTodotext = document.createElement("h2");
  leftTodotext.textContent = ` There is ${leftTodo.length} todos left`;
  document.querySelector("#filter-todo-div").appendChild(leftTodotext);
  
  if (filter.hideCompleted){
      leftTodo.forEach(function (filterTodo) {
      const leftTodo = document.createElement("p");
      leftTodo.textContent = filterTodo.text;
      document.querySelector("#filter-todo-div").appendChild(leftTodo);
    });
  } else {
  filterTodo.forEach(function (filterTodo) {
    const leftTodo = document.createElement("p");
    leftTodo.textContent = filterTodo.text;
    document.querySelector("#filter-todo-div").appendChild(leftTodo);
  });
}
}
renderTodo(todo,filter)
// listen for new todo creation
// document.querySelector('#new-todo').addEventListener('click', function(e){
//   console.log('add new Todo')
// })
// document.querySelector('#new-todo-text').addEventListener('input',function(e){
//   console.log(e.target.value)
// })

document.querySelector('#filter-todo').addEventListener('input',function(e){
  filter.searchBox = e.target.value
  renderTodo(todo,filter)
})

document.querySelector('#add-note').addEventListener('submit', function(e){
  e.preventDefault()
  console.log(e.target.elements.addTodo.value)
  todo.push({
    text: e.target.elements.addTodo.value ,
    Completed: false,
})
e.target.elements.addTodo.value = ''
renderTodo(todo,filter)
})


