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

// console.log(notes.pop())
// notes.push('My Note 4')

// console.log(notes.shift())
// notes.unshift('My first note.')

//notes.splice(1, 1 , ' new sec item ')

// notes[2] = 'this is new note 3.'

// notes.forEach(function(item, index){
//     console.log(index)
//     console.log(item)
// })

// console.log(notes.length)
// console.log(notes)
// console.log(notes.indexOf({}))

// something = {}
// otherThing = something
// console.log( otherThing ===  something)


// Counting ... 1, 2, 3
// for(let count=0; count <= 2; count++){
//     console.log(count)
// }

// for(let count=notes.length -1; count>=0;count--){
//     console.log(notes[count])
// }

// console.log(notes.indexOf('Note 2'))

// const index = notes.findIndex(function(note,index){
//     console.log(note)
//     return note.title === 'Hobbits to work on.'
// })

// console.log(index)


// const findNote = function(notes, noteTitle){
//     return notes.find(function (note,index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

// const findNote = function (notes, query){
//     return notes.filter(function(note,index){
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     })
// }

// console.log(findNote(notes, 'work'))

// const note = findNote(notes, 'office modification.')
// console.log(note)


const sortNotes = function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if(a.title.toLowerCase() > b.title.toLowerCase()){
            return 1
    } else {
        return 0
    }
})}

sortNotes(notes) 
console.log(notes)