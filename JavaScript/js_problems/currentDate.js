// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

today = new Date()
// console.log(today.toLocaleString('en-US', {weekday: "long"} ))
var month = today.toLocaleString("en-US", {month:"2-digit"} )
var day = today.toLocaleString("en-US", {day:"2-digit"})
var year = today.toLocaleString("en-US",{year:"numeric"})
var date_format1 = `${month}-${day}-${year}`
var date_format2 = `${month}/${day}/${year}`
var date_format3 = `${day}-${month}-${year}`
var date_format4 = `${day}/${month}/${year}`

console.log(date_format1)
console.log(date_format2)
console.log(date_format3)
console.log(date_format4)

