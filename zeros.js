// move the all zeros at the end 

function movezeros(arr){
    let pos = 0
    for (let i =0 ; i < arr.length ; i++){
        if(arr[i] !== 0){
            // c÷onsole.log(arr[i])
            arr[pos] = arr[i] 
            pos++
        }
    }
    console.log(pos)
    while(pos < arr.length){
        arr[pos] = 0
        pos++
    }
    return arr
}
console.log(movezeros([0 ,1 ,1 ,0 ,2 ,0 ,0 ,0]))