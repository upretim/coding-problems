// https://www.hackerrank.com/challenges/palindrome-index/problem
// Complete the palindromeIndex function below.
function palindromeIndex(s) {
   let i=0, j=s.length-1;
   let counter =0;
   let misMatch;
   while(i<j){
       if(s.charAt(i)!=s.charAt(j)){  
           if((i+1)==j) return i;
           counter++;
           if(counter ==2) return -1;
           let checkNextI= (s.charAt(i+1)==s.charAt(j));
           let checkNextJ= (s.charAt(i)==s.charAt(j-1));
           if(checkNextI && checkNextJ){
                     if(isPalindrome(s,i+1,j)===false && isPalindrome(s,i,j-1)==false)
                     return -1;
                     else if (isPalindrome(s,i+1,j)) return i;
                     else if (isPalindrome(s,i,j-1)) return j;                 
                }
            else if(checkNextI){
                     misMatch = i;
                    i++;
                }
            else if(checkNextJ){
                    misMatch = j;
                    j--;  
                }              
       }
       else{
           i++;
           j--;
       }
   }
   if(counter) return misMatch;
   return -1;
}
function isPalindrome(s,i,j){
      while(i<j){
          if(s.charAt(i)!==s.charAt(j)) return false;
          i++;
          j--;
      }
      return true;    
}