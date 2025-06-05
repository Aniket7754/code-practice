function duplicateArray(arr) {
    if (arr.length === 0) return []
    if (arr.length === 1) return []
    let obj = {}
    let array = []
    arr.forEach(ele => {
        if (!obj[ele]) {
            obj[ele] = 1
        } else {
            obj[ele] += 1;
            if (obj[ele] === 2) {
                array.push(ele); // only push on the second occurrence
            }
        }
    })
    return array
}
console.log(duplicateArray([1, 1, 2, 2, 1])); // Output: [1, 2, 3, 4]