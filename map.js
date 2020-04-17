function map(array, iteratorfunc) {
    let result = [];
    for (let i =0 ; i < array.length ; i++){
      result = [...result, iteratorfunc(array[i])]
    }
    return result 
};