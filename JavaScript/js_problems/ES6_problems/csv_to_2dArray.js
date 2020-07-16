

// 3. Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.

const csv_string ="a,b\nc,d";

function csv_2dArray(string){
  var str = string.split("\n")
  
  var temp = []
  var x;
    for (let index = 0; index < str.length; index++) {
      // temp.push(str[index]);
      x = str[index].split(",")
      temp.push(x)
      
    }

    return temp

}


console.log(string_csv( csv_string ))

