import React from 'react'

function FunctionClick() {

  function clickHandler(){
    console.log("button-clicked")
  }


  return (
    <div>
    <h1>click events handling</h1>
      <button onClick={clickHandler} >Click</button>    
    </div>
  )
}   

export default FunctionClick
