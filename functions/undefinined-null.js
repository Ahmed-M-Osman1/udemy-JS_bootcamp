//undefined for variables
let name = 'Ahmed'

if(name === undefined){
    console.log('please provide name') 
} else {
    console.log(name)
}

//undefined for function arg.

let square = function (num){
    console.log(num)
}


let result = square()
//undefined for function return.
console.log(result)

// null as assigned value.
let age = 28 
age = null

console.log(age)
