
https://www.hackerrank.com/challenges/funny-string/problem
function funnyString(s) {
    let arr=[];
    for(let i=0;i<s.length;i++){
        arr.push(s.charCodeAt(i));
    }
    let sum1=0,sum2=0;
    let i=1, j= arr.length-1;
    while(i<arr.length){
        sum1 = sum1+ Math.abs(arr[i-1] - arr[i]);
        sum2 = sum2+ Math.abs(arr[j] - arr[j-1]);
        if(sum1!=sum2) return "Not Funny";
        i++;
        j--;
    }
      return "Funny";
  
  }

  console.log(funnyString("ponml"))