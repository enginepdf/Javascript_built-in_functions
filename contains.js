function contains(arrayobject, target) {
    for (let key in arrayobject){
    if (arrayobject[key]===target){
      return true;
    }
    }return false;
    };
    