const notes = [
    {
        title:'my next trip.',
        body:'I would like to go to spain.'
    },{
        title:'Hobbits to work on.',
        body:'Exercise, Eating a bit better.'
    },{
        title:'Office modification.',
        body:'Get a new seats.'
    }
]

/*
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

const filter = {
    searchText: ''
}

const renderNote = function(notes,filter){
    const filterNote = notes.filter(function(note){
        return note.title.toLowerCase().includes(filter.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ''

    filterNote.forEach(function (note){
        const noteEL = document.createElement('p')
        noteEL.textContent = note.title
        document.querySelector('#notes').appendChild(noteEL)
    })
}

renderNote(notes,filter)

document.querySelector('#create-note').addEventListener('click', function(e){
    console.log('did this work ?')
    e.target.textContent = 'Hi all'
})

// document.querySelector('#remove-all').addEventListener('click',function(){
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove()
//     })
// })

document.querySelector('#search-text').addEventListener('input',function(e){
    filter.searchText = e.target.value
    renderNote(notes,filter)
})

// document.querySelector('#name-form').addEventListener('submit',function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

document.querySelector('#for-fun').addEventListener('change',function(e){
    console.log(e.target.checked)
})