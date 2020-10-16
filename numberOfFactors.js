let numberOfFactors=(num)=>{
    let numberOfFactors = 0;
    if(num==1 || num==2) return num;
    let i;
    for( i=1;i*i<num;i++){
        if(num%i==0) numberOfFactors = numberOfFactors+2;
    }
    if(i*i==num) numberOfFactors++;
    return numberOfFactors;
}
console.log(numberOfFactors(3));
console.log(numberOfFactors(4));
console.log(numberOfFactors(5));
console.log(numberOfFactors(15));