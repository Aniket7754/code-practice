function minJumps(arr) {
    const n = arr.length;
    if (n <= 1) return 0;
    if (arr[0] === 0) return -1;

    let jumps = 0, currentEnd = 0, farthest = 0;

    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + arr[i]);

        if (i === currentEnd) {
            console.log(`Jumping from index ${i}, farthest reachable index is ${farthest}`);
            jumps++;
            currentEnd = farthest;

            if (currentEnd >= n - 1) return jumps;
        }
    }

    return -1;
}
console.log(minJumps([2, 3, 1, 1, 4])); // Output: 2
// console.log(minJumps([1, 0, 3, 2]));    // Output: -1
// console.log(minJumps([1, 1, 1, 1]));    // Output: 3
