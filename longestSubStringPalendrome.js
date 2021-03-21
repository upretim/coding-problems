//https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    if(!s || s.length <= 1) {
    return s
  }
  let longest = "";
  for(let i = 0; i < s.length; i++) {
    let temp = isPalindrome(s, i, i)
    if(temp.length > longest.length) {
      longest = temp
    }
    temp = isPalindrome(s, i, i + 1)
    if(temp.length > longest.length) {
      longest = temp
    }
  }
  return longest
};
function isPalindrome(str, start, end){
    while(start>=0 && end <=(str.length-1) && str[start]===str[end]){
        start--;
        end++;
    }
    return str.substring(start+1,end);
}