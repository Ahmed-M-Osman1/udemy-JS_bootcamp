'use strict'

const HangmanGame1 = new HangmanGame('Try me',2)
console.log(HangmanGame1.Guessed())

let notes = getSaveNotes()

const filter = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNote(notes,filter)

document.querySelector('#create-note').addEventListener('click', function(e){
    const id = uuidv4();
    const timeStamp = moment().valueOf();
    notes.push({
        id: id,
        title: '', 
        body:'',
        createdAt: timeStamp,
        updatedAt: timeStamp
    })
    saveNotes(notes)
    renderNote(notes,filter)
    location.assign(`/edit.html#${id}`);
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filter.searchText = e.target.value
    renderNote(notes,filter)
})

document.querySelector('#filter-by').addEventListener('change',function(e){
    filter.sortBy = e.target.value
    renderNote(notes,filter)
  })

window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue);
    renderNote(notes,filter)
    }
})


/*                     --:OLD CODE:--

// const now = moment()
// now.subtract(1,'week').subtract(20,'day')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())
// const nowTimeStamp = now.valueOf()
// console.log(moment(nowTimeStamp).fromNow())

// const myBirthday = moment()
// myBirthday.year(1993).month(4).date(22)
// console.log(myBirthday.format('MMM D, YYYY'))
// console.log(myBirthday.fromNow())


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
