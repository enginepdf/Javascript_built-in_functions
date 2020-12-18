function flatten(nestedArray) {
   
  function flt(arr){
    let temparr=[]
    for(let i = 0 ; i < arr.length ; i++){
      if(!Array.isArray(arr[i])){
        temparr.push(arr[i])
      }  
    else if (Array.isArray(arr[i])){
     for(let j=0 ; j<arr[i].length ; j++){
       temparr.push(arr[i][j])
     }
    }
  }
return temparr  
}
function recur(nestedArr){
   let count=0;
   let result=[]
  for (let i = 0 ; i < nestedArr.length ; i++){
    if(Array.isArray(nestedArr[i])){
      result=[...result, ...flt(nestedArr[i])]
      count=count+1
    } else{
      result.push(nestedArr[i])
      } 
  }
  if(count===0){
    return result
  } else{
      return recur(result)
    }
  }
  
  let res=recur(nestedArray) 
  return res
 }; 