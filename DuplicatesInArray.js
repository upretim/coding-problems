/**
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), 
 * some elements appear twice and others appear once.
  Find all the elements that appear twice in this array.
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let duplicateArr =[], holdingObj={};
    for(let i=0;i<nums.length;i++){
        if(holdingObj[nums[i]]===undefined){
            holdingObj[nums[i]] = true;
        }
        else{
            duplicateArr.push(nums[i])
        }
    }
    return duplicateArr;
};