function extend(obj) {
    for (let i=0 ; i<arguments.length ; i++){
    for (let key in arguments[i]){
     obj[key]= arguments[i][key]
    }
    }
    return obj ;
  };

// extend({ a: 100 }, { b: 100 }, { c: 99 }) --> {a: 100, b: 100, c: 99}