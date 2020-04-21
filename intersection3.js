function uniq(array) {
    var result=[];
      for(let i=0 ; i<array.length ; i++){
        let count = 0;
       for(let j =0 ; j<result.length ; j++){
        if(array[i] !== result[j]){
          count = count+1;
        } 
       }
        if (count === result.length){
        result = [...result, array[i]]   
       }
  }
  return result
}

function filter(collection, test) {
    let result=[];
    for(let i=0; i<collection.length ; i++){
    if(test(collection[i])){
      result=[...result, collection[i]];
    }
  }
  return result;
    };

    function flatten(nestedArray, result) {
   
          let flattened = [];
          function recursion (arr) {
            for(let i = 0; i < arr.length; i++) {
              if(Array.isArray(arr[i])){
                recursion(arr[i]);
              }
              else flattened.push(arr[i]);
            }
          }
          recursion(nestedArray);
          return flattened;
        }

    function intersection() {
        let result
        let args = [...arguments]
        let allarray = uniq(flatten(args))    
        let temp = []
        
          temp = filter(allarray, function(value){
              let count=0
            for (let i = 0; i < args.length; i++){
               if(args[i].includes(value)){
                 count=count+1
               }
            }  
            if(count===args.length){
                return true
            }
        })
        return temp
      };


      // intersection([1,2,3,4,5,6,7,8,9,10], [9,10,11,12,13,14,15]) --> [9,10]
      // intersection([1,2,3,4,5,6,7,8,9,10,10,10], [9,9,10,11,12,13,14,15])  --> (2) [9, 10]  --> need to be updated