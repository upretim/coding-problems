/*Given a set of non-negative integers, and a value sum, 
determine if there is a subset of the given 
set with sum equal to given sum. */
let map = new Map();
const subSetSum =(arr, sum, len, map)=>{
    if(sum==0) return true;
    if(len==0) return false;
    if(sum>=arr[len-1]){
        let result1 = subSetSum(arr, sum-arr[len-1], len-1, map);
        let result2 = subSetSum(arr, sum, len-1, map);
        if(result1||result2) return true;
       // return result1||result2;

    }else{
        if(subSetSum(arr, sum, len-1, map)==true) return true;
        //return subSetSum(arr, sum, len-1, map);
    }
    return false;
}
console.log(subSetSum([1,1,1,7,8],10, 5, map));//true
console.log(subSetSum([1,1,1,7,8],18, 5, map));//true
console.log(subSetSum([1,1,1,7,8],5, 5, map)); //false;
console.log(subSetSum([1,1,1,7,8],19, 5, map));//false;
console.log(subSetSum([1,1,1,7,8],11, 5, map)); //true