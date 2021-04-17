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

 var removeDuplicatesUsingStack = function(s, k) {

    let stack = [[s.charAt(0),1]];
    for(let i=1; i<s.length; i++) {
        let last = stack.length-1;
       if((last >=0) && stack[last][0]==s.charAt(i)){
         stack[last][1]++;
         if(stack[last][1]==k) stack.pop();
       }
       else{
           stack.push([s.charAt(i), 1])
       }
    }
     let str = "";
     for(let i=0;i<stack.length;i++){
        str = str +stack[i][0].repeat(stack[i][1])
     }
     return str;
};


removeDuplicates("deeedbbcccbdaa", 3);
