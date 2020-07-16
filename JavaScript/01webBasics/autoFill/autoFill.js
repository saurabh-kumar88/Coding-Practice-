/** track input form */
alert("autoFill.js loaded!")

function myValidation(){
  let myValue = document.getElementById('myform').value.trim();
  console.log(myValue + " " + typeof myValue);
  // avoid special character 
  if (myValue >=100 || myValue<0 ) {
    alert(`Number ${myValue} is not valid`);
  }else if(myValue==""){
    alert(`Please fill the empty fields`);
  }

  // Assignment --> change <p id="done"> tag's inner text with myValue
  let newText = document.getElementById('done').innerText=myValue; 
  
};


/** Fom validation 2 */

// document.querySelector('#fullName').addEventListener('submit', (event)=>{
//   console.log(event.target.firstName.value);
//   console.log(event.target.lastName.value);
// })

  
// function myValidation2(){
//   // let fName = document.getElementById('firstName').value.trim();
//   // let lName = document.getElementById('lastName').value.trim();
//   // console.log(fName);
//   // console.log(lName);
//   document.querySelector('.fullName').addEventListener('submit', (event)=>{
      
//     console.log(event.target.firstName.value);
//       console.log(event.target.lastName.value);
//       //event.preventDefault();  
//     },false)
// };


document.querySelector('.fullName').addEventListener('submit', (event)=>{
      
    console.log(event.target.firstName.value);
    console.log(event.target.lastName.value);
    
    // clear the form
    event.target.firstName.value = '';
    event.target.lastName.value = '';
    event.preventDefault();  
  },false)




