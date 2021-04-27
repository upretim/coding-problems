/**
 * this function takes a number (target) and an array of numbers as arguments and 
 * return any combination of numbers from array that adds up to target(first arguement), if target sum cannot be formed
 * it returns null; array is having only non negative numbers
 * If there are multiple combinations it can return any one such combination, a number can be used multiple times
 */

const howsum=(num, array, memo={})=>{
  if(num in memo) return memo[num];
  if(num==0) return [];
  if(num<0) return null;
  for(let numb of array){
      let reminder = num - numb;
      let result = howsum(reminder, array, memo);
      if(result!==null){
          memo[num] = result;
          return([...result, numb]);
      }
  }
  memo[num] = null;
  return null;
}

const howsumTabulation=(num, array)=>{
   let arr = new Array(num+1).fill(null);
   arr[0]=[];
   for(let i=0;i<arr.length;i++){
     if(Array.isArray(arr[i])){
       for(let value of array){
         if(i+value<=num) arr[i+value] = [...arr[i],value];
       }
     }
   }
   return arr[num];
}

console.log(howsumTabulation(7,[5,3,4]));
console.log(howsumTabulation(7,[2,3]));
console.log(howsumTabulation(300,[7,14]));

console.log(howsum(7,[5,3,4]));
console.log(howsum(7,[2,3]));
console.log(howsum(300,[7,14]));