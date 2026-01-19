function maxSum(arr){
    let max = arr[0]
    let cur =arr[0]
    for(let i =1; i < arr.length ; i++){
        cur = Math.max(arr[i] , arr[i] + cur)
        if(cur > max){
            max = cur
        }
    }
    return max
}

console.log(maxSum([-3, -2, -5, -1 , 9 , 1 , -1 , 8]
))