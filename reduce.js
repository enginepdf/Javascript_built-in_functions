function reduce(array, iteratorfunc, accumulator) {
    let acc ;
     if(accumulator !== undefined){
       acc = accumulator;  
   for (let i = 0 ; i < array.length ; i++){
    let temp =iteratorfunc(acc,array[i])
      if (temp === undefined){
       continue;}
    else{  acc = temp
    }
   }
 return acc
     }
    else if (accumulator=== undefined){
        acc = array[0];
     for (let i = 1 ; i < array.length ; i++){
    let temp = iteratorfunc(acc,array[i])
     if (temp === undefined){
       continue}
    else {
      acc =  temp
    }
   } 
         return acc
   }
       }