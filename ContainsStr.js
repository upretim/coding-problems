/**
 * Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the
 original string by deleting some (can be none) of the characters
  without disturbing the relative positions of the remaining characters. 
  (ie, "ace" is a subsequence of "abcde" while "aec" is not).
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length>t.length) return false;
    let i=0;
    let c=0;
    while(c < s.length){
        let index =(t.indexOf(s[c],i));
        if (index<0) return false;
        i = index+1;
        c++;
    }
    return true;
};