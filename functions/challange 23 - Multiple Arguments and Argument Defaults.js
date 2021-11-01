let bill = function(total, tipPrecent){
    return 'your total bill is ' +
    total + ' your tip will be ' + (total*tipPrecent) + 
    ' so you will pay ' + (total + (total*tipPrecent))
}

let result = bill(100,.2)
console.log( result )