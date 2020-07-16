
// program to guess a number between 0-9

const MAX_INT = 1
const MIN_INT = 0

function guessNumber(){
  document.querySelector(".guessNumber_form").addEventListener('submit', (event)=>{
  // event.preventDefault();
  var random_number = getRandomInt(MAX_INT, MIN_INT) 
  var input_num = parseInt(event.target.users_guess.value);
  console.log(random_number)
  var text = ""
  
  if (input_num > MAX_INT || input_num < MIN_INT) {
    document.getElementById("result").innerHTML=`${input_num} is not in range` 
  return 
  }

  if ( input_num === random_number) {
    text = `Right answer : ${random_number}`   
    var result = text.fontcolor('green')
    document.getElementById("result").innerHTML=result

  } else {
    text = `Wrong answer, correct number is : ${random_number}`   
    var result = text.fontcolor('red')
    document.getElementById("result").innerHTML=result
  }

  // event.target.users_guess.value = null
    
  },false)
  
} 

function resetForm(){
  document.getElementById("guessNumber_form").reset()
}



function getRandomInt(max, min){
  return Math.floor(Math.random()*(max-min + 1)) + min;
}








