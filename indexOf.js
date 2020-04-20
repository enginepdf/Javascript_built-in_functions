function each(collection, iterator) {
    if (Array.isArray(collection)){
      for(let i = 0 ; i< collection.length ; i++){
        iterator(collection[i],i, collection)
    }
  }
    else if(typeof(collection)=== 'object'){
      let key = Object.keys(collection);
      for(let i = 0 ; i<key.length ; i++){
        iterator(collection[key[i]],key[i], collection)
    }
    }
  };
 
  function indexOf(array, target) {
   
    let result = -1;
    each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
        return result;
      }
    });
    return result;
  };

  // indexOf([1,2,3,4,5,6,7,8,9,10], 10) --> 9