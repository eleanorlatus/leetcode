// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Hash set length:

var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

// Hash set:

var containsDuplicate = function(nums) {
    const hashSet = new Set();

    for(const num of nums){
        if(hashSet.has(num)){
            return true;
        }
        hashSet.add(num);
    }
    return false
};

// brute force:

var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
    return false;
}
