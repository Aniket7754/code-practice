function duplicateArray(arr) {
    let a = {}
    arr.forEach(element => {
        if (a[element] === 1) {
            console.log()
            a[element] += 1
        }else{
            a[element] =1
        }

    });
    return a
}
console.log(duplicateArray([1, 1, 1, 1])); // Output: [1, 2, 3, 4]