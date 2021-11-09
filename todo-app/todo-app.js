let todos = [];

const filter = {
  searchBox: "",
  hideCompleted: false,
};

getSaveTodos();

document
  .querySelector("#hideCompleted")
  .addEventListener("change", (e) => {
    filter.hideCompleted = e.target.checked;
    renderTodo(todos, filter);
  });

renderTodo(todos, filter);

document.querySelector("#filter-todo").addEventListener("input",(e)=> {
  filter.searchBox = e.target.value;
  renderTodo(todos, filter);
});

document.querySelector("#add-note").addEventListener("submit", (e)=> {
  e.preventDefault();
  todos.push({
    id: uuidv4(),
    text: e.target.elements.addTodo.value,
    Completed: false,
  });
  saveTodo(todos);
  e.target.elements.addTodo.value = "";
  renderTodo(todos, filter);
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
