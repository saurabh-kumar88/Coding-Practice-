
function myTask(){
  var d = new Date()
  var seconds = d.getSeconds()
  document.getElementById("txt").innerHTML = seconds;
  
}


function myClock() {
  var today = new Date()
  //date
  var date = today.toDateString()

  //time
  // var hour = today.getHours()
  // var min = today.getMinutes()
  // var Sec = today.getSeconds()

  var time = today.toLocaleTimeString('en-US', {seconds:'numeric', second59:true})

  //day
  var day = today.toLocaleDateString('en-US', {weekday: 'long'})
  
  document.getElementById("date").innerHTML=`Today is - ${date}`
  document.getElementById("time").innerHTML= `Current time is - ${time}`;
  
}

var myTimer = setInterval(
  myClock , 1000
)

myTimer()
