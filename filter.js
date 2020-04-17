 function filter(array, testfunc) {
  let result=[];
  for(let i=0; i<array.length ; i++){
  if(testfunc(array[i])){
    result=[...result, array[i]];
  }
}
return result;
  };
  
  
  
  


  
