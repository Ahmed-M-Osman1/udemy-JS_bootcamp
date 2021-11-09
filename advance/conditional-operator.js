// const myAge = 27
// const massage = myAge >= 18 ? "you can vote!" : "you cannot vote"
// // if (myAge>= 18){
// //     massage = "you can vote!"
// // } else {
// //     massage = "you cannot vote"
// // }
// console.log(massage)

const myAge = 27
const showPage = () =>{
    return 'showing the page'
}
const showErrorPage = () =>{
    return 'showing the error page'
}
const massage = myAge >= 21 ? showPage():showErrorPage()

console.log(massage)

const team = [ 'tyler', 'porter' , 'ahmed','tarq', 'alaa']
console.log(team.length <= 4 ? `Team size ${team.length}.`: "Too many people in your team.")