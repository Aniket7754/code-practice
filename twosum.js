function twoSum(nums, target) {
    const numMap = new Map();  // To store number and its index
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        console.log(` complement: ${complement}`);
        console.log(` numMap: ${numMap}`);
        console.log(numMap.has(complement));
        if (numMap.has(complement)) {
        console.log("if conditions",numMap.has(complement));

            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
}


console.log(twoSum([3,2,4], 6))