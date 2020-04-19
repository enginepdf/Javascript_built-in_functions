function reduce(collection, iterator, accumulator) {
    let acc ;
     if(accumulator !== undefined){
       acc = accumulator;  
   for (let i = 0 ; i < collection.length ; i++){
    let temp =iterator(acc,collection[i])
      if (temp === undefined){
       continue}
    else{  acc = temp
    }
   }
 return acc
     }
    else if (accumulator=== undefined){
        acc = collection[0];
     for (let i = 1 ; i < collection.length ; i++){
    let temp = iterator(acc,collection[i])
     if (temp === undefined){
       continue}
    else {
      acc =  temp
    }
   } 
         return acc
   }
       } 
      
      function zip() {
        let maxlength = reduce([...arguments], (acc, cur) => Math.max(acc, cur.length), 0);
        let result = [];
          for(let i = 0; i < maxlength ; i++) {
            if(result[i] === undefined){
            result[i] = []; 
            for(let j=0 ; j<arguments.length; j++){  
            result[i].push(arguments[j][i]);
            }
            }
        }
        return result;
        };
        
        

  /*    
let cities = ['LA', 'Paris', 'Barcelona'];
let ages = [30, 50, 60];
let America = [true];
let France =[,true,];
let Spain=[,,true];
zip(cities, ages, America, France, Spain)

(3) [Array(5), Array(5), Array(5)]
0: (5) ["LA", 30, true, undefined, undefined]
1: (5) ["Paris", 50, undefined, true, undefined]
2: (5) ["Barcelona", 60, undefined, undefined, true]
length: 3
__proto__: Array(0)

 */