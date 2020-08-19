import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <p>ChildComponent</p>
      <button onClick={ () =>  props.greetHandler('child') } >Greet parent</button>
    </div>
  )
}

export default ChildComponent
