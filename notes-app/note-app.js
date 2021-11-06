const notes = getSaveNotes()

const filter = {
    searchText: ''
}

renderNote(notes,filter)

document.querySelector('#create-note').addEventListener('click', function(e){
    notes.push({
        title: '',
        body:''
    })
    saveNotes(notes)
    renderNote(notes,filter)
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filter.searchText = e.target.value
    renderNote(notes,filter)
})

document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value)
  })

/*                     --:OLD CODE:--
//query and remove.
// const p = document.querySelector('p')
// p.remove()

//query selector all 
const p = document.querySelectorAll('p')
p.forEach(function(p){
    //p.textContent = 'My name Is ahmed'
    //console.log(p.textContent)
    // p.remove()
})

// add a new element
const text = document.createElement('p')
text.textContent = 'This is a new element from javascript.'
document.querySelector('body').appendChild(text)
*/

// localStorage.setItem('location','Cairo')
//console.log(localStorage.getItem('location'))
//localStorage.clear()
// const user = {
//     name: 'Ahmed',
//     age: 28
// }
// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user',userJSON)
// const userJSON = localStorage.getItem('user')
// const ahmed = JSON.parse(userJSON)
// console.log(`${ahmed.name} is ${ahmed.age}`)


// document.querySelector('#remove-all').addEventListener('click',function(){
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove()
//     })
// })


// document.querySelector('#name-form').addEventListener('submit',function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

// document.querySelector('#for-fun').addEventListener('change',function(e){
//     console.log(e.target.checked)
// })
