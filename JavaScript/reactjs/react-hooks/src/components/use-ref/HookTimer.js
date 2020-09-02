import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {
  const [timer, setTimer ] = useState(0)
  const intervalRef = useRef()


  useEffect(() => {
    const intervalRef = setInterval(() => {
      setTimer(prevState => prevState + 1)  
    }, 1000);

    return () => {
      //cleanup
      clearInterval(intervalRef.current)
    };
  }, [])


  return (
    <div>
      Hook Timer : {timer}
      <div>
      <button onClick={() => clearInterval(intervalRef.current)}>clear</button>
      </div>        
    </div>
  )
}

export default HookTimer
