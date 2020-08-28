/**Be careful while mimicking componentDidmount method using useEffect
 * before passing empty array, make sure you have no dependency absolutely
 
 */

import React, {useState, useEffect} from 'react'

function HookIntervalCounter() {
  
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount( prevCount => prevCount + 1 )
  }

  useEffect( ()=> {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [] ) // use [count] as dependency to look after its update, or use prevState  
  
  return (
    <div> Hook interval counter
      {count}
    </div>
  )
}

export default HookIntervalCounter
