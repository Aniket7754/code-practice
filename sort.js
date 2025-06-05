function sort(arr) {
    let obj = {}
    const n = arr.length;
    for (let num of arr) {
        obj[num] = (obj[num] || 0) + 1
        if (obj[num] > Math.floor(n / 2)) {
            return num
        }
    }
    return -1
}
console.log(sort([2, 2, 1, 1, 2, 2, 2]))

function findMajorityElement(arr) {
    const freq = {};
    const n = arr.length;

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > Math.floor(n / 2)) {
            return num;
        }
    }

    return -1;
}
// console.log(findMajorityElement([2, 2, 1, 1, 2, 2, 2])); // Output: 2
// console.log(findMajorityElement([1, 2, 3, 4]));          // Output: -1
