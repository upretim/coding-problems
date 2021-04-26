/*Write a function best sum  bestSum(targetSum, array), it takes a target sum and an array of
 positive numbers, the function returns the smallest length combination of numbers that adds
 up to target sum.
*/

function bestSum(targetSum, array, memo={}){

    if(memo[targetSum]) return memo[targetSum];

    if(targetSum===0) return [];
    if(targetSum<0) return null;
    let shortestLength = null;
    
    for(let num of array){
        let reminder = targetSum - num;
        let reminderCombination = bestSum(reminder, array, memo);
        if(reminderCombination!==null){
          const combination = [...reminderCombination,num];
          if(shortestLength==null || combination.length < shortestLength.length){
            shortestLength = combination;
          }
        }
    }
    memo[targetSum] =  shortestLength;
    return shortestLength;
}

console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(8,[2,3,5]));
console.log(bestSum(8,[1,5,4]));
console.log(bestSum(100,[1,2,5,25]));
console.log(bestSum(100,[3,7,26]));
console.log(bestSum(100,[7,26]));


