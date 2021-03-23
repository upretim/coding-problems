/*this function prints n natural numbers in increasing order recursively */

function printNumInc(n){
    if(n==0) return;
    printNumInc(n-1);
    console.log(n);
}

console.log(printNumInc(4));
/*this function prints n natural numbers in decreasing order recursively */
function printNumDesc(n){
    if(n==0) return;
    console.log(n);
    printNumDesc(n-1);
}

console.log(printNumDesc(4));
/*this function prints n natural numbers in decreasing / increasing order recursively */
function printNumIncDesc(n){
    if(n==1){
        console.log(n);
        return;
    }
    console.log(n);
    printNumIncDesc(n-1);
    console.log(n);
}
console.log(printNumIncDesc(4));