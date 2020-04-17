function jsonstringify(obj) {
  if(typeof(obj)==='boolean' || typeof(obj)==='number' || obj===null){
    return ''+ obj +'' // ‘false’
  }
  if(typeof(obj)==='string'){
    return '"' + obj +'"'
  }
  if(typeof(obj)===undefined){
    return undefined
  }
  if(typeof(obj)==='function'){
    return undefined
  }
  if(Array.isArray(obj)){
    let result=[];
    if(obj.length===0){
      return '[]'
    }
    for(let i = 0; i < obj.length; i++) {
      result.push(jsonstringify(obj[i])); // ‘false’
    }
    return '[' + result + ']';
  }
  else if(typeof(obj)==='object'){
    let result = [];
    if(Object.keys(obj).length === 0) {
      return '{' + '}';
    }
    for(let key in obj){
      if(Array.isArray(obj[key])){
         jsonstringify(obj[key])
      }
      if(typeof(obj[key])==='function' || typeof(obj[key])===undefined){
        return '{}'
    }
  }
  for(let key in obj) {
    result.push(''+jsonstringify(key) + '' + ':' + '' + jsonstringify(obj[key]) + '');
  }
  return '{' + result + '}';
  }
};