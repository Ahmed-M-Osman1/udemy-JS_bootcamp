
let tempConversion = function (fahrenheit) {

    return {
        fahrenheit: fahrenheit,
        celsuis: (fahrenheit - 32) / (9/5),
        kelvin : (fahrenheit + 459.67) * 5/9
    }
}

let temp = tempConversion(32)
console.log(temp.fahrenheit)
console.log(temp.celsuis)
console.log(temp.kelvin)