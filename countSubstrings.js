
//https://leetcode.com/problems/palindromic-substrings/
var countSubstrings = function(s) {
    if(s.length<=1) return s.length;
    let counter =0;
    for(let i=0;i<s.length;i++){
       counter =  counter + isPalindrome(s,i,i) +  isPalindrome(s,i,i+1)
    }
    return counter;
};

function isPalindrome(str, start, end){
   if(str.length==end) return 0;
    let counter = 0;
   while(start>=0 && end <=(str.length-1) && str[start]===str[end]){
        start--;
        end++;
       counter++;
    }
    return counter;
}

console.log(countSubstrings("ab"));