const arr = [1,2,3,4,5,6]

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function reducer2(accumulator, currentValue){
  return accumulator + currentValue;
}

console.log(arr.reduce(reducer2))
console.log(arr.reduce(reducer2, 10))