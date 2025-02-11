/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// brute force:
var removeElement = function(nums, val) {
for(let i =0; i <nums.length; i++){
    if(nums[i] === val){
        nums.splice(i,1)
        i--
    }
}
};

// two pointers:
var removeElement = function(nums, val) {
    let k = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
