/**
 * @param {string} s
 * @return {string}
 */
//https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/
 var reverseParentheses = function(s) {
    let stack = [];
    for(let i=0;i<s.length;i++){
        if(s.charAt(i)=='(') stack.push('(');
        else if(s.charAt(i)==')'){
         let word = stack.pop();
         if(word==='(') continue;
           let revWord =  word.split('').reverse().join('');
            stack.pop();
           if(stack.length>0 && stack[stack.length-1]!=='(') {
             stack.push(stack.pop()+revWord);
           }else if(stack.length>0 && stack[stack.length-1]==='('){
            stack.push(revWord);
           }else stack.push(revWord);
          if(stack.length==0 && i+1==s.length) return revWord;
        }
        else {
            if(stack.length>0 && stack[stack.length-1]!=='(') stack.push(stack.pop()+ s.charAt(i));
            else stack.push(s.charAt(i));
        }
    }
     return stack[0];
 };

reverseParentheses("(sugqlinrwj)gasmtbk");