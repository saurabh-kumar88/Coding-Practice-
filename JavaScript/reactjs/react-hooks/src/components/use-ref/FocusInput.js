import React, { useEffect, useRef } from 'react'

function FocusInput() { 
  const inputRef = useRef(null)

  useEffect(()=>{
    // focus on input element
    inputRef.current.focus()
  },[])
  return (
    <div>
      <p>Focus on input on every reload</p>
      <input type="text" ref={inputRef} />      
    </div>
  )
}

export default FocusInput
