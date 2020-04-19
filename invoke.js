function each(collection, iterator) {
    if (Array.isArray(collection)){
      for(let i = 0 ; i< collection.length ; i++){
        iterator(collection[i],i, collection)
    }
  }
    else if(typeof(collection)=== 'object'){
      let key = Object.keys(collection);
      for(let i = 0 ; i<key.length ; i++){
        iterator(collection[key[i]],key[i], collection)
    }
    }
  };  

 
function invoke(collection, methodname, args) {
    
    let arr = [];
    if(typeof methodname === 'function'){
      each(collection, function(element){
        arr.push(methodname.call(element, args));
      });
    } else {
      each(collection, function(element){
        arr.push(element[methodname](args));
      })
    }
    return arr;
};

/* 
var manyThings = [  
  ['C++', 'C', 'java'], 
  ['HTML', 'CSS', 'JS']];

  invoke(manyThings, 'join', ' # ')  // ["C++ # C # java", "HTML # CSS # JS"]

  invoke(['charger', 'for', 'appledevice'], 'toUpperCase')   //  ["CHARGER", "FOR", "APPLEDEVICE"]
*/

  /*

  function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);   // this as 'Food' in function Product
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"

*/