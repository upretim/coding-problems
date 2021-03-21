/**
 * write a function that takes a target sum and an array of numbers as arguements, function should
 * return boolean indicating if it is possible to generate the target sum using numbers of array
 * we can use a number multiple time and array contains non negative numbers only.
 */

const canSum=(target, array)=>{
    if(target==0) return true;
    if(target<0) return false;
     for(let num of array){
         const remender = target-num;
        if(canSum(remender, array)===true) return true;
     }
  return false;
}

console.log(canSum(7,[4,2]));
console.log(canSum(7,[4,3]))