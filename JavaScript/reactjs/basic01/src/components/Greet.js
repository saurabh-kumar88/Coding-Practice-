import React from 'react'

// function Greet()
// {
//   return <h1>Hello Saurabh</h1>

// }

// ES6 version of Greet

 const Greet = ({first_name, last_name }) => {
  return(
    <h1>Hello {first_name} {last_name}</h1>
  )
  
 } 
  
export default Greet