/**
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear
 *  twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let obj = {};
    let holdingArr =[];
    for (let i=0;i<nums.length;i++)
       obj[nums[i]] = true;
    for (let i=1;i<=nums.length;i++)
      if (obj[i] === undefined) holdingArr.push(i);
    
    return holdingArr;  
};