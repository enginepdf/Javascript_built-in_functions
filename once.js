function once(func) {
    let count = 0;
    let result 
    return function() {
      if (count ===0){
        result = func(...arguments)
        count = count+1
        return result 
 }      
      else if (count >=1){
        return result
      }
    };
  };

  function test(){
      console.log('this works')
  }

  /*
let result=once(test)
result()  --> this works
result()  --> undefined
*/