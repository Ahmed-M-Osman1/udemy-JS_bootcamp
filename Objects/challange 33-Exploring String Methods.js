let password1 = 'abc123passward897'
let password2 = 'abc'
let password3 = 'abc123897'

let isValidPassword = function(passward){
    if(passward.length > 8 && !passward.includes('passward')){
        return true;
    } else {
        return false;
    }
}

console.log(isValidPassword(password1))
console.log(isValidPassword(password2))
console.log(isValidPassword(password3))

// Other Solution 

let isValidPassword2 = function(passward){
    return passward.length > 8 && !passward.includes('passward')
}

console.log(isValidPassword2(password1))
console.log(isValidPassword2(password2))
console.log(isValidPassword2(password3))