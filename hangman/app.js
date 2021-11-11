// I solve it by my self but I did not know how to make the no. of guesses decrement
const puzzleEl = document.querySelector('#theWord')
const guessesEl = document.querySelector('#remaining')
const game1 = new Hangman('try me', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle 
    guessesEl.textContent = game1.statusMessage
})
/*              == Old Code ==
// anther solution :
// window.addEventListener('keypress', function (e) {
//     if(game1.status === 'playing'){
//     const guess = e.key
//     game1.makeGuess(guess)
//     puzzleEl.textContent = game1.getPuzzle()
//     guessesEl.textContent = 'Your remaining guesses :' + game1.remainingGuesses
//     console.log(game1.status)
// } else if (game1.status === 'failed'){
//     console.log(game1.status)
//     status.textContent = 'Nice Try!. The word was ( ' + game1.word.join('') + ' ).'

// }else if (game1.status === 'finished'){
//     console.log(game1.status)
//     status.textContent = 'Great Work!. you guessed the word.'
// }
// })


// primitive value : string, number, boolean, null and undefined

// object: product. --> object.prototype --> null
// Array: myArray -> array.prototype -> object.prototype -> null
// function: myFunc -> function.prototype -> object.prototype -> null
// string: myString -> string.prototype -> object.prototype -> null
// number: myNumber -> number.prototype -> object.prototype -> null
// Boolean: myBoolean -> Boolean.prototype -> object.prototype -> null

// const product = 'Computer'
// console.log(product)

// const otherProduct = new String('mouse')
// console.log(otherProduct)

// const Product = new Object( {
//     name:'the war of art'
// })

// Object.prototype.someNewMethod = () => 'this is new function'

// //hasOwnProperty
// console.log(Product.hasOwnProperty('influence'))
// console.log(Product.someNewMethod())

// const team = new Array(['Luke','Maddison'])
// console.log(team)

// const getScore = () => 1
// console.log(getScore)

window.addEventListener('keypress', function (e) {
    if(game1.status === 'playing'){
    const guess = e.key
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = 'Your remaining guesses :' + game1.remainingGuesses
    console.log(game1.status)
} else if (game1.status === 'failed'){
    console.log(game1.status)
    status.textContent = 'Nice Try!. The word was ( ' + game1.word.join('') + ' ).'

}else if (game1.status === 'finished'){
    console.log(game1.status)
    status.textContent = 'Great Work!. you guessed the word.'
}
})


*/
