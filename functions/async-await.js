const getDataPromise = (num)=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
    typeof num === 'number' ? resolve(num*2):reject('Number must be provided')
    },2000)
})

const processData =async ()=>{
    let data = await getDataPromise('abd')
    data = await getDataPromise(data)
    return data    
    //.then((data)=>{
    //     console.log(data)
    // })
    // throw new Error('something is missing')
    // return 12
}

//console.log(processData()) // return a promise
processData().then((data)=>{ 
    console.log('Data', data)
}).catch((error)=>{
    console.log('Error',error)
})