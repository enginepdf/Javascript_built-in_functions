function throttle(func, wait) {
    let count = 0;
    return function() {
      if(count===0){
        count=count+1
        func();
      } else if(count>=1){
        count=count+1
        setTimeout(func, wait)
      }
  };
}