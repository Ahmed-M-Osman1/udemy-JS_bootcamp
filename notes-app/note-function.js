// Read existing notes from local-storage
const getSaveNotes = () => {
  const notesJSON = localStorage.getItem("notes");

return notesJSON ? JSON.parse(notesJSON) : []
};

// remove note from the list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note)=> note.id === id);
  
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// generate the DOM structure for a note.
const generateNoteDOM = (note) => {
  const noteEL = document.createElement("div");
  const button = document.createElement("button");

  // make the A tag
  const textEL = document.createElement("a");
  textEL.setAttribute("href", `/edit.html#${note.id}`);

  //setup the remove note button
  button.textContent = "X";
  noteEL.appendChild(button);
  button.addEventListener("click", function () {
    removeNote(note.id);
    saveNotes(notes);
    renderNote(notes, filter);
  });

  //setup the text title
  if (note.title.length > 0) {
    textEL.textContent = note.title;
    document.querySelector("#notes").appendChild(textEL);
  } else {
    textEL.textContent = "Unnamed note";
  }
  noteEL.appendChild(textEL);
  return noteEL;
};

// Render application

const renderNote = (notes, filter) => {
  notes = sortNote(notes, filter.sortBy);
  const filterNote = notes.filter((note)=> note.title.toLowerCase().includes(filter.searchText.toLowerCase()));
  document.querySelector("#notes").innerHTML = "";
  filterNote.forEach((note)=> {
    const noteEL = generateNoteDOM(note);
    document.querySelector("#notes").appendChild(noteEL);
  });
};

// Save Notes
const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// sort the note by one of three ways:
const sortNote = (notes, sortBy) => {
  if (sortBy === "byEdited") {
    return notes.sort((a, b)=> {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    })
  } else if (sortBy === "byCreated") {
    return notes.sort((a, b)=> {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    })
  } else if (sortBy === "byAlphabetic") {
    return notes.sort((a, b)=> {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    })
  }
};
