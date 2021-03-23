/**this function returns nth fibonacci number */

function fib(n){
    //base case
    if(n==0) return 0;
    if(n==1) return 1;
    // resursive call to solve smaller problem
    let subProblem = fib(n-1)+fib(n-2);
    return subProblem;
}

console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));