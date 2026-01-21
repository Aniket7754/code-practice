function secMax(arr){
    let max = -Infinity;
    let secMax = -Infinity;
    for(let i =0 ; i < arr.length ; i++){
        if(arr[i] > max){
            secMax = max
            max = arr[i]
        }else if(arr[i] > secMax && max !== arr[i]){
            secMax = arr[i]
        }
    }
    return secMax
}

console.log(secMax([1 ,2 ,3 , 9 , 98]))