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

  function filter(collection, test) {
    let result=[];
    for(let i=0; i<collection.length ; i++){
    if(test(collection[i])){
      result=[...result, collection[i]];
    }
  }
  return result;
    };

   

  function intersection(...args) {
    let result = [];
    let concated = [];
    let arglength = args.length;
    
    each(args, arr => concated = concated.concat(arr));

    each(concated, arr => { 
      if(filter(concated, arrcheck => arrcheck === arr).length === arglength && !(result.includes(arr))){ 
        // count the number of element called arr, in concated and check if it is same with arglength
        result.push(arr);
      }
    })
    return result;
  };

// intersection([1,2,3,4,5,6,7,8,9,10], [9,10,11,12,13,14,15])  --> [9,10]
// intersection([1,2,3,4,5,6,7,8,9,10,10,10], [9,9,10,11,12,13,14,15]) --> []  --> need to be updated
