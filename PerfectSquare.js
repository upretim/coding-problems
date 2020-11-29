/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.
Do not use any built-in library function such as sqrt.
*/
var isPerfectSquare = function(num) {
    if (num===1) return true;
    let i=2;
    while(i*i<=num){
        let fNum = i*i;
        if(num%fNum==0){
            num = num/fNum;
            if(num===1) return true;
            i=2;
        }
        else{
           i++; 
        } 
    }
   return false;
};