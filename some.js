function some(collection, iterator) {
    let result = [];
    if (iterator !== undefined){
  for ( let i= 0 ; i < collection.length ; i++){
   result = [...result,iterator(collection[i])]
  }
    let count = 0;
  for (let i = 0 ; i < result.length ; i++){
   if (result[i]===false || result[i]===null || result[i]===undefined || result[i]===0){
     count = count+1
   } 
  } 
  if (count===result.length){
    return false
  }
  else{
    return true
    }
} 
  else {
  let count = 0 ;
  for (let i = 0 ; i < collection.length ; i++){
   if (collection[i]===false){
   count = count+1
   }
     }
  if (count=== collection.length){
    return false
  }else{
    return true
  }
  }
  };

  /*
some([true,true,false,false,true]) --> true
some([false,false,false,false,false]) --> false
some([true,true]) --> true
*/