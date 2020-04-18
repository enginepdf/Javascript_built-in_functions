function each(arrobj, iterator) {
    if (Array.isArray(arrobj)){
      for(let i = 0 ; i< arrobj.length ; i++){
        iterator(arrobj[i],i, arrobj)
    }
  }
    else if(typeof(arrobj)=== 'object'){
      let key = Object.keys(arrobj);
      for(let i = 0 ; i<key.length ; i++){
        iterator(arrobj[key[i]],key[i], arrobj)
    }
    }
  };