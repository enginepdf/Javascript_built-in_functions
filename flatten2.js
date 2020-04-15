function flatten(nestedArray) {
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