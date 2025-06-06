function twosum(nums, target) {
        let arr = []
        for (let i =0 ; i<nums.length ; i++){
            for(let j = i+1 ;j < nums.length ; j++){
                let sum = nums[i] + nums[j]
                console.log(`i: ${i}, j: ${j}, sum: ${sum}`)
                if(target === sum){
                    arr.push(i)
                    arr.push(j)
                }

            }

        }
        return arr

    }

    // twosum([3,2,4], 9); // /[0, 1]
console.log(twosum([3,2,4], 6)); // [0, 1]   