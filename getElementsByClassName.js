function getElementsByClassName(className) {
  let result=[];
 function inspector(param){
    if(param.classList.contains(className)){
      result.push(param)
    }
      for(let j=0 ; j<param.children.length ; j++){
      inspector(param.children[j])
    }
}
inspector(document.body)
return result;
};