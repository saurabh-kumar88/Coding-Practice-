// program to find day of 1st january between 2014 and 2050
// this function will return true if given date is on sunday

function is_Sunday(date_string){

  var date_obj = new Date(date_string)
  var result = date_obj.toLocaleDateString("en-US", {weekday: "long"})
  return true ? (result === "Sunday") : false
}

var year = 2014
while (year <= 2050) {
  // var string = `20${year},01,26`
  var d = new Date(`${year},01,01`)
  if(d.getDay() === 0){
    console.log(`${year},01,01` + " sunday")

  }

  // if (is_Sunday( string )) {
  //  console.log(string + " sunday") 
  // }
  year++
}