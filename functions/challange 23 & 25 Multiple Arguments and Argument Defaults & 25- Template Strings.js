// challange 23 
let bill = function(total, tipPrecent = 0.2){
    return 'your total bill is ' +
    total + ' your tip will be ' + (total*tipPrecent) + 
    ' so you will pay ' + (total + (total*tipPrecent))
}

let result = bill(100,.3)
console.log( result )

// challange 25
let bill25 = function(total, tipPrecent = 0.2){
    return `your total bill is ${total} $. Your tip will be (${total * tipPrecent} $). So, you will pay ${total + (total * tipPrecent)}. 
    OR your ${tipPrecent * 100 }% tip of a total ${total} bill will be ${total + (total * tipPrecent)}
    `
}

let result25 = bill25(100)
console.log( result25 )