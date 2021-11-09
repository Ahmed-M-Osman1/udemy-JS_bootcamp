const getTip = (amount) => {amount*.25
if(typeof amount === 'number'){
    return amount * .25
}else{
    throw Error('Argument must be number')
}}

try{
    const result  = getTip(10)
    console.log(result)
} catch(e){
    console.log(e)
}
