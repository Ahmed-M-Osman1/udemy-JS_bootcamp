
let convertToCelsuis = function (num){
    let celsuis = (num - 32) / (9/5)
    return celsuis    
}

let firstTemp = convertToCelsuis(32)
console.log(firstTemp)
let secoundTemp = convertToCelsuis(68)
console.log(secoundTemp)