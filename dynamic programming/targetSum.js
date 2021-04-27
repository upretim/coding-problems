/**
 * write a function that takes a target sum and an array of numbers as arguements, function should
 * return boolean indicating if it is possible to generate the target sum using numbers of array
 * we can use a number multiple time and array contains non negative numbers only.
 */

const canSum=(target, array, memo={})=>{
    if(target in memo) return memo[target];
    if(target==0) return true;
    if(target<0) return false;
     for(let num of array){
         const remender = target-num;
        if(canSum(remender, array, memo)===true) {
            memo[target] = true;
            return true;
        }
       
     }
    memo[target] = false;
    return false;
}

function canSumTabulation(target, array){
    let table = new Array(target+1).fill(false);
    table[0] = true;
    for(let i=0;i<table.length;i++){
        if(table[i]){
            for(let value of array){
                if(i+value<=target) table[i+value] = true;
            }
        }
    }
  //  console.log(table);
    return table[target];
}
/*

console.log(canSum(7,[4,2]));
console.log(canSum(7,[4,3]));
console.log(canSum(300,[7,14]));
*/
console.log(canSumTabulation(7,[4,2]));
console.log(canSumTabulation(7,[4,3]));
console.log(canSumTabulation(300,[7,14]));