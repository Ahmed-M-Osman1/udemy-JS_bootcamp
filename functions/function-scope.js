//Global scope (convertToCelsuis, firstTemp, secoundTemp)
// Local scope (celsuies, num) 
    // local scope (isFreesing)

let convertToCelsuis = function (num){
    let celsuis = (num - 32) / (9/5)

    if (celsuis <= 0) {
        let isFreesing = true
    }
    return celsuis    
}

let firstTemp = convertToCelsuis(32)
console.log(firstTemp)
let secoundTemp = convertToCelsuis(68)
console.log(secoundTemp)