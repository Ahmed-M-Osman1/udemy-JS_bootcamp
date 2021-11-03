const todo = [
    {
        text: 'Pray',
        Completed: true
    },
    {
        text: 'Read',
        Completed: true
    },
    {
        text: 'Learn',
        Completed: false
    },
    {
        text: 'Sleep',
        Completed: false
    },
    {
        text: 'Eat',
        Completed: true
    }
]

// Challenge 38 Array Basics
// console.log( 'You have ' + todo.length + ' Todo.')
// console.log(` Todo : ${todo[0]}`)
// console.log(` Todo : ${todo[todo.length -1]}`)
// console.log(` Todo : ${todo[todo.length -2]}`)

// Challenge 39. Manipulating Arrays with Methods
// todo.splice(2,1,'new item no.3')
// todo.push('last item')
// todo.shift()
// console.log(todo)

// // challenge 40 

// todo.forEach(function(item, index){
//     console.log(`${index + 1}. ${item}`)
// })

// for (i=0; i>todo.length; i++){
//     console.log(`${i+1}. ${todo[i]}`)
// }

// const deleteTodo = function(todo, todoText){
//     let index = todo.findIndex(function (todo,index){
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     index>-1 ? todo.splice(index,1): '' 
// }
// deleteTodo(todo, 'Pray')
// console.log(todo)

// const getTodos = function (todo){
//     return todo.filter(function(todo) {
//         return todo.Completed === false 
//     })
// }

// console.log(getTodos(todo))


const sortTodos = function(todo){
    todo.sort(function(a,b){
        if(a.Completed === false ){
            return -1
        }else if(a.Completed === true ){
            return 1
    } else {
        return 0
    }
})}

sortTodos(todo) 
console.log(todo)

// andrew solution.
const sortTodos2 = function(todo){
    todo.sort(function(a,b){
        if(!a.Completed && b.Completed){
            return -1
        }else if(a.Completed && !b.Completed){
            return 1
    } else {
        return 0
    }
})}

sortTodos2(todo) 
console.log(todo)