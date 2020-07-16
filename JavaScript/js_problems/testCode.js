function checkSign(a, b){

  if (a < 0 && b > 0)  {
    console.log(a + " is negative")
    
  } else if(b < 0 && a > 0) {
    console.log(b + " is negative")
  } else{
    console.log("both are negative")
  }

}


// checkSign(-56, 10)
// checkSign( 6,  -9)
// checkSign(-1, -89)


// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string.
//  If the given string begins with "Py" then return the original string

function stringModifier(string){
  var isPy =  string.startsWith("Py");
  if (isPy) {
    console.log(string)
  }else{
    console.log("Py"+string)
  }
}

// stringModifier("Pysome")
// stringModifier("Foobar")

// 22. Write a JavaScript program to remove a character at the specified position 
// of a given string and return the new string.

function removeChar(string, n){
  var ans = string.replace(string[n], "")
  console.log(ans)
}

// removeChar("w3resources", 0)

var a = 45
var b = 1
var c = -9


function nearestTo100(arr){
  var max_num = Math.max(arr)
  return max_num
}

function replaceChar(string){

  var Alphabates = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
  var string_arr = [];  
  
  for (let index = 0; index < string.length; index++) {
    string_arr.push(string[index])
    
  }
  
  for (let index = 0; index < string_arr.length; index++) {
    var char_index = Alphabates.indexOf(string_arr[index]);
    
    string_arr.splice(char_index, Alphabates[char_index + 1])   
    
  }

  return string_arr

}

var arr = ['red', 'blue', 'green']
arr.splice(0, 'white')

// console.log( replaceChar("foo") )

function number_digitization(num){
  console.log(toString(num).split(""))
} 

number_digitization(1250)








