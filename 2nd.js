function jumps(a){
    let leaders = [];
    const n = a.length;
    if (n === 0) return leaders;
     let maxFromRight = a[n - 1];
    leaders.push(maxFromRight); // Rightmost is always a leader
    for (let i = n - 2; i >= 0; i--) {
        if (a[i] > maxFromRight) {
            maxFromRight = a[i];
            leaders.push(maxFromRight);
        }
    }
    return leaders.reverse(); // Reverse to maintain original order
}

console.log(jumps([1 , 2, 4, 5,6 ,4])); // Output: [2, 3, 1, 1, 4]