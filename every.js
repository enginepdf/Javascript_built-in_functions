function every(collection, iterator) {
    let result = [];
    if (iterator !== undefined){
  for ( let i= 0 ; i < collection.length ; i++){
   result = [...result,iterator(collection[i])]
  }
  for (let i = 0 ; i < result.length ; i++){
   if (result[i]===false || result[i]===null || result[i]===undefined || result[i]===0){
     return false
   } 
  } 
     return true
} 
  else {
  for (let i = 0 ; i < collection.length ; i++){
   if (collection[i]===false){
     return false
   }
     }
     return true
  }
  };

// every([true,true,false,false,true])  --> false
// every([true,true,true,true,true])  --> true