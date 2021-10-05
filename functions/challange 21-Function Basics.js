
let convertToCelsuis = function (num){
    let celsuis = (num - 32) / (9/5)
    return celsuis    
}

let firstTest = convertToCelsuis(32)
console.log(firstTest)
let secoundTest = convertToCelsuis(68)
console.log(secoundTest)