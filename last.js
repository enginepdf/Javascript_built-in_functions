function last(array, n) {
    if(n===undefined){
      return array[array.length-1]
    }
    if(array.length < n){
      return array;
    }
    if(n===0){
      return [];
    }
    return array.slice(array.length-n, array.length);
  };

  // last([1,2,3,4,5,6,7,8,9,10],5)  --> (5) [6, 7, 8, 9, 10]