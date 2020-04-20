function first(array, n){
    return n === undefined ? array[0] : array.slice(0, n);
  };

 // first([1,2,3,4,5], 2)  --> (2) [1, 2]