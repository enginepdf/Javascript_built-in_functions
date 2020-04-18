function memoize(func) {
      let data = {};
      return function() {
        let arg = JSON.stringify(...arguments);
        if(data[arg]) {
          return data[arg];
        }else {
          data[arg] = func(...arguments);
          return data[arg];
        }
      }
  };