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
        let result=[]
        let concated = []
        count = {};
        const arglength = args.length;

        // 모든 array를 합쳐 놓음 
        each(args, cur => concated = concated.concat(cur));
        
        let store = key => {
          count[key] = ++count[key] || 1;
        }
        // object에 저장
        each(concated, store);
        
        let countkeys = Object.keys(count);
    
        return filter(countkeys, cur => count[cur] === arglength)
      };

      /*

      intersection([1,2,3,10,50,100],[1,2,3,4,5,6,7,8,9,10,100]) --> (5) ["1", "2", "3", "10", "100"]
      intersection([1,2,2,3,3,10,50,100],[1,2,2,3,4,5,6,7,8,9,10]) --> ["1", "10"]  -->  need to be updated
      */