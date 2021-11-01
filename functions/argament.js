//multiple argument.
let add = function(a, b, c){
    return a+b +c
}

let result = add (10,1, 5)

console.log(result)

//Default argument.

let getScoreText = function (name = null ,score = 0) {
return 'name : '+ name + ' score : ' + score
}

getScoreText("ahmed",100)