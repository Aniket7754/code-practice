function minJumps(arr) {
    let jumps = 0
    let farthest = 0
    let currentEnd = 0

    for (let i = 0; i < arr.length - 1; i++) {
        farthest = Math.max(farthest, i + arr[i])
        // console.log(i)
        if (i === currentEnd) {
            console.log(i , currentEnd)
            jumps++
            currentEnd = farthest
        }

        if (currentEnd <= i) return -1
    }

    return jumps
}

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))
