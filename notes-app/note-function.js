// Read existing notes from local-storage
const getSaveNotes = function () {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
      return []
  }
};

// generate the DOM structure for a note.
const generateNoteDOM = function(note){
const noteEL = document.createElement('p')
        if(note.title.length > 0){
        noteEL.textContent = note.title
        document.querySelector('#notes').appendChild(noteEL)
    } else {
        noteEL.textContent = 'Unnamed note'
    }
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