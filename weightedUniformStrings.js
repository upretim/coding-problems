// Complete the weightedUniformStrings function below.
function weightedUniformStrings(s, queries) {
    let prevValue =0, counter =0;
    let myArr = [];
    for(let i=0;i<s.length;i++){
        let charVal = s.charCodeAt(i);
        if(prevValue==0){
            myArr.push(charVal-96);
            prevValue = charVal-96;
            counter = 1;
        }
        else if(prevValue==(charVal-96)){
            counter++;
            myArr.push((charVal-96)*counter);
        }
        else{
            myArr.push(charVal-96);
            prevValue =charVal-96;
            counter = 1;
        }    
    }
    let retArr=[];
    for(let j=0;j<queries.length;j++){
        if(myArr.indexOf(queries[j])>-1) retArr.push("Yes");
        else retArr.push('No');  
    }
     return retArr;
}

console.log(weightedUniformStrings("aaabbbbcccddd",[9,7,8,12, 5]))