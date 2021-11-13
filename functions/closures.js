const createCounter =()=>{
    let count = 0
    return {
        increment(){
            count ++
        },
        decrement(){
            count ++
        },
        get(){
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
console.log(counter.get())
counter.decrement()


// challenge :
const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}
const tip1 = createTipper(.2)
const tip2 = createTipper(.4)
console.log(tip1(100))
console.log(tip2(100))


const add = (a, b) => a + b
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

// const myFunc = () =>{
//     const massage = 'This is my massage.'
//     const printMassage = ()=>{
//         console.log(massage)
//     }
//     return printMassage()
// }

// const myPrintMassage = myFunc()
// myPrintMassage()

