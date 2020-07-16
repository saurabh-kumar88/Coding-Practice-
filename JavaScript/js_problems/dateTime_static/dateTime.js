// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday. 
// Current time is : 10 PM : 30 : 38

class CurrentDateTime{
  constructor(){
    //
  }

  display_dateTime(){
    
    let today = new Date()
    let day = today.toLocaleDateString('en-US', {weekday: 'long'})
    var hour = parseInt( today.getHours() ) 
    let minutes = today.toLocaleString('en-US', { minute: 'numeric', minute59: true })  
    let seconds = today.toLocaleString('en-US', { second: 'numeric', second59: true })
    let midday_string = ""
    
    if (hour > 12) {
      hour = hour - 12
      midday_string = "PM" 
    }
    else{
      midday_string = "AM"
      }
      
      minutes = this.Counter(minutes);
      seconds = this.Counter(seconds);

      // send data to html
      document.getElementById("day").innerHTML=`Today is - ${day}`;
      document.getElementById("time").innerHTML= `Current time is - ${hour} : ${minutes} : ${seconds} ${midday_string}`;
      var t = setTimeout(this.display_dateTime, 500);
    }

   Counter(i){
    if (i<10) {
      i = "0" + i
    }
    return i
   } 


};

var obj = new CurrentDateTime()
obj.display_dateTime()


// var time = new Date();
// console.log(
//   time.toLocaleString('en-US', { minute: 'numeric', minute59: true })
// )  






 