function map(collection, iterator) {
    let result = [];
    for (let i =0 ; i < collection.length ; i++){
      result = [...result, iterator(collection[i])]
    }
    return result 
 
};

function pluck(collection, key) {
  
  return map(collection, function(item) {
    return item[key];
  });
};

// var temperature = [{LA: 20, Barcelona: 21, Berlin: 25}, {Berlin: 23, Oslo: 20, Roma: 21}];
// pluck(temperature, 'Berlin')  --> (2) [25, 23]