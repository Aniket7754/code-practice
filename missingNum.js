function miss(arr){
    const n = arr.length
    console.log(n)
        let orgSum =0
        for(let i =0 ; i < n ; i++){
            orgSum += arr[i]
        }
        
        const realSum = (n*(n+1))/2
        console.log(realSum)
        return realSum - orgSum
    
}

console.log(miss([1 , 2 ,4]))