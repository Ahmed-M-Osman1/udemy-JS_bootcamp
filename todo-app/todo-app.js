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

const leftTodo = function (todo) {
  return todo.filter(function (todo) {
    return todo.Completed === false;
  });
};

// console.log(leftTodo(todo).length)

const leftTodotext = document.createElement("h2");
leftTodotext.textContent = ` There is ${leftTodo(todo).length} todos left`;
document.querySelector("div").appendChild(leftTodotext);

todo.forEach(function (todo) {
  const leftTodo = document.createElement("p");
  leftTodo.textContent = `${todo.text}`;
  document.querySelector("body").appendChild(leftTodo);
});

// listen for new todo creation
document.querySelector('button').addEventListener('click', function(e){
  console.log('add new Todo')
})