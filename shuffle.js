function shuffle(array){
    let result = [];
    let  max =array.length;
    while(result.length<array.length){
      let idx= Math.floor(Math.random() * (max - 0)) + 0; //maximum excluded, minimum included
      if(!result.includes(array[idx])){
      result.push(array[idx])
    }
    }
    return result 
  };

// shuffle([1,2,3,4,5,6,7,8,9,10]) --> (10) [5, 2, 10, 1, 7, 8, 6, 9, 3, 4]
// shuffle([1,2,3,4,5,6,7,8,9,10]) --> (10) [7, 10, 4, 9, 5, 1, 8, 3, 2, 6]