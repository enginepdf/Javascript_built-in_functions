function delay(func, wait) {
    let arg = [];
    for (let i=2 ; i <arguments.length ; i++){
      arg=[...arg,arguments[i]]
    }
    if (arguments.length === 2) {
      setTimeout(func, wait);
    } else {
      setTimeout(func(...arg), wait); 
    }
  };

  function test(){
      console.log('this works')
  }

  // delay(test, 500) --> this works