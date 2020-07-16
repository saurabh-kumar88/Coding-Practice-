
document.getElementById('multiply').addEventListener('click', (event)=>{
  var result = new calculator(event)
  result.multiply()
},false)

document.getElementById('divide').addEventListener('click', (event)=>{
  var result = new calculator(event)
  result.divide()
},false)

document.getElementById('add').addEventListener('click', (event)=>{
  var result = new calculator(event)
  result.add()
},false)

document.getElementById('sub').addEventListener('click', (event)=>{
  var result = new calculator(event)
  result.sub()
},false)

document.getElementById('reset').addEventListener('click', (event)=>{
  var result = new calculator(event)
  result.reset()
},false)



class calculator{
  constructor(event){
    event.preventDefault();
    this.first_number = parseFloat(document.getElementById('first_number').value);
    this.second_number = parseFloat(document.getElementById('second_number').value);
  }

  add(){
    var ans = this.first_number + this.second_number
    document.getElementById('result').innerHTML=`Result ${ans}`
  }

  sub(){
    var ans = this.first_number - this.second_number
    document.getElementById('result').innerHTML=`Result ${ans}`
  }

  multiply(){
    var ans = this.first_number * this.second_number
    document.getElementById('result').innerHTML=`Result ${ans}`
    
  }

  divide(){
    var ans = this.first_number / this.second_number 
    if(ans === Infinity){
      var result = ("Math error : Infinity").fontcolor('red')
      document.getElementById('result').innerHTML=result
    }else{
      document.getElementById('result').innerHTML=`Result ${ans}`
    }
    
  }

  reset(){
    window.location.reload()
  }

} 




 /** button event handling Non OOP approach */ 

// function addition(elem){
//   var num1 = parseFloat(document.getElementById('first_number').value);
//   var num2 = parseFloat(document.getElementById('second_number').value);
//   var result  = num1 + num2
//   document.getElementById('result').innerHTML=`Result : ${result}`

// }

// function subtraction(elem){
//   var num1 = parseFloat(document.getElementById('first_number').value);
//   var num2 = parseFloat(document.getElementById('second_number').value);
//   var result  = num1 - num2
//   document.getElementById('result').innerHTML=`Result : ${result}`

// }

// function multiply(elem){
//   var num1 = parseFloat(document.getElementById('first_number').value);
//   var num2 = parseFloat(document.getElementById('second_number').value);
//   var result  = num1 * num2
//   document.getElementById('result').innerHTML=`Result : ${result}`

// }

// function divide(elem){
//   var num1 = parseFloat(document.getElementById('first_number').value);
//   var num2 = parseFloat(document.getElementById('second_number').value);
//   var result  = num1 / num2
//   document.getElementById('result').innerHTML=`Result : ${result}`

// }