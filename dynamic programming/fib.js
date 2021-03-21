
/* this program returns nth febonacci number, it uses recursion and memoization */
const fib = (num, memo={})=>{
    //fetching value from memo if present
    if(memo[num]) return  memo[num];
   // base case
    if(num<=2) return 1;
     memo[num]= fib(num-1,memo)+fib(num-2,memo);
     //setting value in memo
    return memo[num];
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));