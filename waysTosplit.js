/* number of ways string such as abbcabbacbbc can be divided in three parts so that it has equal number of char a */

function numberOfWays(str, char){
    // lets count number of char's in string
    let charCount =0;
    for(let i=0;i<str.length;i++)
        if(str.charAt(i)==char) charCount++;

    if(charCount%3!==0) return 0;

    let num = charCount/3;
    let startMap = new Map();
    let endMap = new Map();
    let i=0, j= str.length-1;
    startMap.set(char,0);
    endMap.set(char,0);
    let startCounter =0, endCounter =0;


    while((startCounter<num) || (endCounter<num)){
        if((startCounter<num)){
            if(str.charAt(i)==char) startCounter++;
            startMap.set(char,startCounter);
            if (startCounter<=num) i++;
        }

        if((endCounter<num)){
            if(str.charAt(j)==char) endCounter++;
            endMap.set(char,endCounter);
            if (endCounter<=num) j--;
        } 
     }


     let ways =0;
     while((str.charAt(i)!==char)|| (str.charAt(j)!==char)){
        if((str.charAt(i)!==char)){
            i++;
            ways++;
         }
         if((str.charAt(j)!==char)){
            j--;
            ways++;
         }
     }
   return ways;
}

numberOfWays('abbcabbacbbc','b');