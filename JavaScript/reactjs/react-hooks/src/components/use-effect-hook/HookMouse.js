import React, {useState, useEffect} from 'react'

// compare its equivalent class based code in ClassMouse

function HookMouse() {
  
  const [x ,setX] = useState(0)
  const [y ,setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect( () => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)
    // clean up code for MouseContainer.js : remove all event Listeners after component un-mount
    // simply return a function from the function to cancel all subscriptions, timers and event listeners
    return () => { 
      console.log('Component un-mounted : Disabling event listeners')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, []) // Mimicking componentDidMount() method by simpy passing an empty array as second parameter, 
        // which tells that useEffect that this effect does not depends on any props or state, so no need to run it again after every render.

  return (
    <div>
      X - {x} Y - {y}    
    </div>
  )
}

export default HookMouse
