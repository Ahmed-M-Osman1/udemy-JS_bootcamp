// var is functional scope.
const setName = function(){
    var firstName = 'Ahmed'
}

// I can access the varible from out side even its a block scope
if(10 === 10 ){
    var firstName = 'Ahmed'
}

// can re-assign the same var with the same name.
firstName = 'Tarq'

var firstName = 'jen'

console.log(firstName)

// every time the var get heisted 
//ex. Var age - console.log(age) even its defined first

console.log(age)
var age 

am = 10 
console.log(am)
var am 

