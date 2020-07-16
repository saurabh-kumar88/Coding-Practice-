// document.querySelector('.signUp').addEventListener('submit', (event)=>{
      
//     event.preventDefault();
//     console.log(event.target.Email.value);
//     // console.log(event.target.userName.value);
//     // console.log(event.target.password.value);
//     // console.log(event.target.retype_password.value);

//     // clear the form
//     event.target.email.value = '';
//     // event.target.userName.value = '';
//     // event.target.password.value = '';
//     // event.target.retype_password.value = '';
      
//   })

const SuperHero = {
  name : "Wonder woman",
  age: 125,
  isActive : true,
}

// convert object into string
let object_to_string = JSON.stringify(SuperHero); 
//console.log(object_to_string);
//localStorage.setItem('super' , object_to_string);
let value = localStorage.getItem('super');
let object = JSON.parse(value) 

// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     console.log(object[key]);
    
//   }
// }





console.log( object.age );





