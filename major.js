function major(arr) {
  const n = arr.length;
  let count = 0;
  let major = null;

  // Step 1: Find candidate
  for (let i = 0; i < n; i++) {
    if (count === 0) {
      major = arr[i];
      count = 1;
        console.log("ist")

    } else if (arr[i] === major) {
        console.log("ist")
      count++;
      return
    } else {
      count--;
    }
  }

  // Step 2: Verify
  count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === major) count++;
  }

  return count > Math.floor(n / 2) ? major : -1;
}

console.log(major([1, 1, 2, 1, 3, 5, 1]));
// Output
