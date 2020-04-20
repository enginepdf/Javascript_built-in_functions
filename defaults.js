function defaults(obj) {
    for (let i=0 ; i<arguments.length ; i++){
    for (let key in arguments[i]){
      if (!(key in obj)&&obj[key]===undefined){
           obj[key]= arguments[i][key]
      }
    }  
    }
    return obj ;
  };


  // defaults({ a: 90, b: 92, c:120 }, { a: 100, b: 200, c: 300, d: 230, e: 350 }) --> {a: 90, b: 92, c: 120, d: 230, e: 350}