const noteID = location.hash.substring(1);
let notes = getSaveNotes();
const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeBtn = document.querySelector("#remove-note");
const lastEdit = document.querySelector("#last-edit")


let note = notes.find(function (note) {
  return note.id === noteID;
});
if (note === undefined) {
  location.assign("/index.html");
}
//title change
titleElement.value = note.title;
titleElement.addEventListener("input", function (e) {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf()
  lastEdit.textContent = `last edited ${moment(note.updatedAt).fromNow()}`
  saveNotes(notes);
});

// body change
bodyElement.value = note.body;
bodyElement.addEventListener("input", function (e) {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf()
  lastEdit.textContent = `last edited ${moment(note.updatedAt).fromNow()}`
  saveNotes(notes);
});

removeBtn.addEventListener("click", function () {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("/index.html");
});

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    let note = notes.find(function (note) {
      return note.id === noteID;
    });
    if (note === undefined) {
      location.assign("/index.html");
    }
    //title change
    titleElement.value = note.title;
    bodyElement.value = note.body;
    lastEdit.textContent = `last edited ${moment(note.updatedAt).fromNow()}`
  }
});

// set last edit by: 
lastEdit.textContent = `last edited ${moment(note.updatedAt).fromNow()}`