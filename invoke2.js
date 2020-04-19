function map(collection, iterator) {
    let result = [];
    for (let i =0 ; i < collection.length ; i++){
      result = [...result, iterator(collection[i])]
    }
    return result 
  }

function invoke(collection, methodname, args) {
    if(typeof methodname === 'function') {
      return map(collection, function(element) {
        return methodname.apply(element, [args]);
      })
    } else {
      return map(collection, function (element) {

        return element[methodname].apply(element, [args])
      })
    }
}

/* 
var manyThings = [  
  ['C++', 'C', 'java'], 
  ['HTML', 'CSS', 'JS']];

  invoke(manyThings, 'join', ' # ')  // ["C++ # C # java", "HTML # CSS # JS"]

  invoke(['charger', 'for', 'appledevice'], 'toUpperCase')   //  ["CHARGER", "FOR", "APPLEDEVICE"]
*/


/* 
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);   // this as 'null' in function max

console.log(max);
// expected output: 7

*/