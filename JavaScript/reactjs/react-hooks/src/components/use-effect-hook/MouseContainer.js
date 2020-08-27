/**This component use HookMouse component and un-mount & mount (toggle) it by click of a button */
import React, {useState, useEffect } from 'react'
import HookMouse from './HookMouse';
import ClassMouse from './ClassMouse';


function MouseContainer() {
  const [ display, setDisplay ] = useState(true)
  return (
    <div>
      <p>HookMouse with clean up code</p>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      { display && <HookMouse/>}
      {/** { display && <ClassMouse/> } */}
      
    </div>
  )
}

export default MouseContainer
