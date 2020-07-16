function leapYear(year){
  
  if(year < 0){return null}
  

  // if (year%400 === 0) {
  //   return true
    
  // } else if(year%100 === 0) {
  //   return false
  // } else if(year%4 === 0){
  //   return true
  // } else{
  //   return false
  // }

  // compact code
  return (year%100 === 0) ? (year%400 == 0) : (year%4 ===0) 

};


var x = leapYear(2024)
console.log(x)