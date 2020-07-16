//alert("file is attached!");

 const pElements = document.querySelector('p');
// console.log(pElements.textContent='This has been changed my JS!');


const pTags = document.querySelectorAll('p')

// pTags.forEach( element => {
//     console.log(element.textContent="All have been changed by JavaScript!")
//     // To remove elements
//     //element.remove()
// });

// const mydata = "test data";
// pTags.forEach( function(element, mydata){
//     console.log(element.textContent=mydata)
// });


const mydata2 = "my test data2";

// Using arrow function
// pTags.forEach( (element, mydata2) => {
//     console.log(element.textContent = "changed using arrow");
// } )

/** Selecting html elements */

//console.log(document.title);

//console.log(document.getElementById("done"));
//console.log(document.getElementsByClassName(".myclass") );
// console.log( document.querySelector('#done') );
// console.log( document.querySelector(".myclass") );

/** event listener */

const buttonElement = document.querySelector('#btn');

// buttonElement.addEventListener('click', function(event){
//     alert("Button have been pressed!");
// });

// using handleEvent property
// buttonElement.addEventListener('click', {
//     handleEvent: function (event) {
//       alert('Element clicked through handleEvent property!');
//     }
//   });

//**keyboard events */
// document.addEventListener('keydown', (event)=>{
//     const keyName = event.key;

//     if (keyName == 'Control') {
//         return;        
//     } else if(event.ctrlKey) {
//         alert(`Combination of control key : ${keyName}`);
//     } else{
//         alert(`Key pressed ${keyName}`);
//     }

// },false)



















