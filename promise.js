const resolvePromise = new Promise((resolve , reject) => {
    const success = true
    if(success){
        resolve("promise resolve")
    }else{
        reject("promise reject")
    }
})

resolvePromise.then(result =>{
    console.log("resolve" , result)

}
).catch(error =>{
    consol.error("reject" , error)
})


const rejectpromise = new Promise((res , rej) =>{
    const success = false
    if(success){
        res("resolve")
    }else{
        rej("reject Sorry")
    }
})

rejectpromise.then(result => {
    console.log("resolve" , result)
}).catch(error => {
    console.log("error",error)
})