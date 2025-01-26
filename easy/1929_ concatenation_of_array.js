/*
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// two pass:
var getConcatenation = function(nums) {
    const ans = []

    for(let i = 0; i < 2; i++){
        for(let num of nums){
          ans.push(num)
        }
    }
    return ans
};

//one pass:
var getConcatenation = function(nums) {
    const n = nums.length
    const ans = []

    for(let i = 0; i < n; i++){
        ans[i] = ans[i+n] = nums[i]
    }
    return ans
};
