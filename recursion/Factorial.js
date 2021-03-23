/** this program  is calculating factorial of a number recursively */

function getFactorial(n){
     //base case 
     if(n==0 || n==1) return 1;
     // recursive call for samller problem
     let subProblem = n*getFactorial(n-1);
     return subProblem;
}

console.log(getFactorial(3));
console.log(getFactorial(4));
console.log(getFactorial(5));