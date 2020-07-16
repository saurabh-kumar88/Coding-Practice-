
function Celsius_to_F(celsius){
  return (9*celsius)/5 + 32
};

function Fahrenheit_to_C(fahrenheit){
  return 5 * (fahrenheit - 32)/9
};


function myFunction(){

  var tempValue = document.getElementById('temp_value').value;
  var convertTo = document.getElementById('temp_unit').value;
  
  if (convertTo === "Celsius") {
    var result = Celsius_to_F(tempValue)
    document.getElementById('result').innerHTML=result.toFixed(2) + " Fahrenheit"
  } else if(convertTo === "Fahrenheit") {
    var result = Fahrenheit_to_C(tempValue)
    document.getElementById('result').innerHTML=result.toFixed(2) + " Celsius"
  }
  
};





