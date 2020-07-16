// compare two objects

function compare_objects(a,b){
  return ( Object.keys(a).every(key=> a.hasOwnProperty(key) && a[key]===b[key]) );
}

// var A = {id:56};
// var B = {id:56};

var A = {id:100, name:"saurabh"}
var B = {ud:400, isActive:true}

console.log( compare_objects( A, B) )

// Note: 
// Object.hasOwnProperty('key') ---> checks if hash-map have specified key---> returns true or false
// Array.every(condition) ---> returns true if all elements satisfies the condition otherwise false







