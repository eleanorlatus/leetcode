/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
*/

// brute force:
var twoSum = function(nums, target) {

    for(let i = 0 ; i < nums.length; i++){
        for(let j=0; j < nums.length; j++){
            if(nums[i] + nums[j] === target && j !== i){
                return [i, j]
            }
        }
    }
    
};

// hash map one pass:
var twoSum = function(nums, target) {
const prevMap = new Map();

for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
    }

    prevMap.set(nums[i], i);
}

};
