function sec(arr){
    let h = -Infinity
    let s = -Infinity
    for(let i =0 ; i < arr.length ; i++){
        if(arr[i] > h){
            s = h
            h = arr[i]
        }else if(arr[i] > s && arr[i] !== h){
            s = arr[i]
        }
    }
    return s === -Infinity ? -1 :s
}
console.log(sec([10 , 5 ,10]))