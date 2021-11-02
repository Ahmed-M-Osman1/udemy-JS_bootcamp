let makeGuess = function (num){
let min = 1
let max = 5
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
return num === randomNum
}
console.log(makeGuess(2))