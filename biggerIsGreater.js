// Complete the biggerIsGreater function below.
function biggerIsGreater(w) {
    let arr = w.split('');
    let i = arr.length-1;
    while(i>0){
        let j = i-1;
        while(j>=0){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                return arr.join('');
            }
            j--;
        }
        i--;  
    }
    return "no answer";
}
console.log(biggerIsGreater("dkhc"));