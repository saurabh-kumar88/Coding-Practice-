// let sym1 = symbol('foo')
// let sym2 = symbol('foo')

// console.log(sym1)
// console.log(sym2)

cars = {
  sedan : "tesla",
  suv : "landrover",
  maruti : "800",
  honda : "civic",
   
};

function display()
{
  return "foo bar!"
}

let bikes = new Map();
bikes['honda'] = "bar"
bikes['foo'] = display()
bikes[cars] = "foo bar"

console.log(bikes['foo'])