// Callback
const getDataCallback = (callback)=>{
    setTimeout(()=>{
        callback(undefined,'this is working')
    }, 2000)
}

getDataCallback((err,data)=>{
    if(err){

    }else {
        console.log(data)
    }
})