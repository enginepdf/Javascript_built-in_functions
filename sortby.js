function sortby(collection, iterator) {
    if(typeof iterator === 'string') {
      return collection.sort((a, b) => {
     if(a[iterator] > b[iterator]){
       return -1;
     }
     if(a[iterator] < b[iterator]){
       return 1;
     }
     return 0;
    })
     }
 else return collection.sort((a, b) => {
    if(iterator(a) > iterator(b)){
        return -1;
      }
      if(iterator(a) < iterator(b)){
        return 1;
      }
      return 0;
     })
}


var people = [
    { name: 'Jone', age: 21 },
    { name: 'Sheeren', age: 37 },
    { name: 'Ruke', age: 45 },
    { name: 'Casey', age: 20 },
    { name: 'Irene', age: 13 },
    { name: 'Tim', age: 37 }
  ];

/* sortby(people, 'age')
(6) [{…}, {…}, {…}, {…}, {…}, {…}]
0: {name: "Ruke", age: 45}
1: {name: "Sheeren", age: 37}
2: {name: "Tim", age: 37}
3: {name: "Jone", age: 21}
4: {name: "Casey", age: 20}
5: {name: "Irene", age: 13}
*/