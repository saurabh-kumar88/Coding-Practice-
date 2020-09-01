/**spread vs rest operator */
// Spread operator takes an array or object and spread it into individual values
// Rest operator takes any arbitrary number of values and combine them as array

// spread operator example:

function SumOne(a, b){
  return a + b; // if u don't want to change the function definition, then spread the values 
}

myArray = [1,2,3,4,5,4,6]


// rest operator example:

function SumTwo(...args){
  console.log("combined as array " + args)

  
  let sum = 0
  args.forEach(element => {
    sum += element
  });
  return sum
}

function SumThree(a, b,...args){
  console.log("combined as array " + args)

  let product = a * b
  
  let sum = 0
  args.forEach(element => {
    sum += element
  });
  return `product of fist two values ${product} : Sum of rest of values ${sum}`
}

console.log( SumOne(...myArray) )
console.log(SumTwo(1,2,3))
console.log(SumThree(1,2,3,4,5))
