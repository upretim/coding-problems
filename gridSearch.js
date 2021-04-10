//https://www.hackerrank.com/challenges/the-grid-search/problem

// Complete the gridSearch function below.
function gridSearch(G, P) {
    let str = P[0];
    let index=-1;
    let start;
    for(let i=0;i<G.length;i++){
        index = G[i].indexOf(str);
        start =i+1;
        while(index!==-1){
            let p=1;
            start =i+1;
            let found = true;
            while(p<P.length){
                  if(G[start].indexOf(P[p],index)!==index){
                      found = false;
                      index = G[i].indexOf(str, index+1);
                      break;
                  }
                  start++;
                  p++;
            }
            if(found)  return "YES";
        }
    }
     return "NO"
 }
//
 console.log(gridSearch(['111111111111111',
 '111111111111111',
 '111111111111111',
 '111111011111111',
 '111111111111111',
 '111111111111111',
 '101010101010101'], ['11111', '11111', '11111','11110']));