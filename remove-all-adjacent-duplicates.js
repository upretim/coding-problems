// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/submissions/
/**
 * Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.
 * 
 */

 /**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let sReplaced = s;
     let i=0;
     while(i<s.length){
        let regex = new RegExp(s.charAt(i).repeat(k), "gi");
         sReplaced = s.replace(regex, "");
         if(sReplaced.length == s.length){
            i++;
         }
         else {
             s = sReplaced;
             i=0;
         }
     }
     return sReplaced;   
 };

removeDuplicates("deeedbbcccbdaa", 3);
