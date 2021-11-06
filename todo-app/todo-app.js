let todo = [
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

const filter = {
  searchBox: "",
  hideCompleted: false,
};

getSaveTodos();

document
  .querySelector("#hideCompleted")
  .addEventListener("change", function (e) {
    filter.hideCompleted = e.target.checked;
    renderTodo(todo, filter);
  });

renderTodo(todo, filter);

document.querySelector("#filter-todo").addEventListener("input", function (e) {
  filter.searchBox = e.target.value;
  renderTodo(todo, filter);
});

document.querySelector("#add-note").addEventListener("submit", function (e) {
  e.preventDefault();
  todo.push({
    text: e.target.elements.addTodo.value,
    Completed: false,
  });
  saveTodo(todo);
  e.target.elements.addTodo.value = "";
  renderTodo(todo, filter);
});

/*                     --:OLD CODE:--
// const p = document.querySelectorAll('p')

// p.forEach(function(p){
//     if (p.textContent.includes('the')){
//         p.remove()
//     }
// })
// listen for new todo creation
// document.querySelector('#new-todo').addEventListener('click', function(e){
//   console.log('add new Todo')
// })
// document.querySelector('#new-todo-text').addEventListener('input',function(e){
//   console.log(e.target.value)
// })
*/
