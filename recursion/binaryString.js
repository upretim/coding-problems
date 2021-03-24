//*for  a given number n, this function calculates number of possible string without consecutive ones*/

function possibleCombination(n){
    if(n==1) return 2;
    if(n==2) return 3;
    return (possibleCombination(n-1)+ possibleCombination(n-2));
}

console.log(possibleCombination(5));