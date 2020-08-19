var Arr = [1,2,3,4,5,6]

var newArr = Arr.map(function(val, index){
  return {key:index, value:val*val};
})

// console.log(`original : ${Arr}`)
// //console.log(`modified : ${newArr}`)
// console.log(newArr)


var newArr2 = Arr.map((val)=>{
  return val * val;
})


var newArr3 = Arr.map((val) => {
  return val + " Foo bar";
})


console.log(newArr3)