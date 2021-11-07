// Read existing notes from local-storage
const getSaveNotes = function () {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
      return []
  }
};
// remove note from the list
const removeNote = function(id){
    const noteIndex = notes.findIndex(function(note){
        return note.id === id
    })
    if(noteIndex >-1){
        notes.splice(noteIndex,1)
    }
}


// generate the DOM structure for a note.
const generateNoteDOM = function(note){

const noteEL = document.createElement('div')
const textEL = document.createElement('span')
const button = document.createElement('button')

//setup the remove note button
button.textContent = 'X'
noteEL.appendChild(button)
button.addEventListener('click',function(){
    removeNote(note.id)
    saveNotes(notes)
    renderNote(notes,filter)
})

//setup the text title
        if(note.title.length > 0){
            textEL.textContent = note.title
        document.querySelector('#notes').appendChild(textEL)
    } else {
        textEL.textContent = 'Unnamed note'
    }
    noteEL.appendChild(textEL)
    return noteEL
}

// Render application 

const renderNote = function(notes,filter){
    const filterNote = notes.filter(function(note){
        return note.title.toLowerCase().includes(filter.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ''
    filterNote.forEach(function (note){
        const noteEL = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEL)
    })
}

// Save Notes
const saveNotes = function(notes){
localStorage.setItem('notes',JSON.stringify(notes))
}