function leaders(arr){
    const Newarr = []
    let max = -Infinity
    for(let i = arr.length -1 ; i >=0 ; i--){
        if(arr[i] >= max){
            Newarr.push(arr[i])
            max = arr[i]
        }
    }
    return Newarr.reverse()
}

console.log(leaders([16 , 6,7 , 8 ,9 ,2]))