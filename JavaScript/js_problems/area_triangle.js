function area_triangle(x,y,z){
  // using Hero's formula
  var p = (x + y + z)/2
  return Math.sqrt( p*(p-x)*(p-y)*(p-z) )
}


// console.log( area_triangle(5,6,7) )

var string = "w3school"

var i = 0
var text = ""
while (i < string.length) {
  text = text + string[i]
  console.log(text)
  i++
}
