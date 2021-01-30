/**
 * https://leetcode.com/problems/word-pattern/
 * Given a pattern and a string s, find if s follows the same pattern.
   Here follow means a full match, such that there is a bijection between a letter 
   in pattern and a non-empty word in s.
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let patternMap = new Map();
    let sArr = s.split(" ");
    if(pattern.length!=sArr.length) return false;
    for(let i=0;i<pattern.length;i++){
        if(patternMap.has(pattern.charAt(i))){
           if(patternMap.get(pattern.charAt(i))!=sArr[i]) return false;
        }
        else{
            patternMap.set(pattern.charAt(i), sArr[i])
        }
    }
    let s1= new Set(patternMap.keys());
    let s2= new Set(patternMap.values());
    if(s1.size!=s2.size)  return false;
    return true;
    
};