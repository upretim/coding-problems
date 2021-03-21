//https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxproductArray = nums[0];
    let minproductArray = nums[0];
    let max = nums[0]
     let min = nums[0]
    for(let i=1;i<nums.length;i++){
            let temp = Math.max(nums[i], max*nums[i], min*nums[i]);
            min = Math.min(nums[i], max*nums[i], min*nums[i]);
            if(min<minproductArray)  minproductArray = max;  
            max = temp;
           if(max>maxproductArray) maxproductArray = max;        
    };
    return maxproductArray;
};
maxProduct([2,3,-2,4]);