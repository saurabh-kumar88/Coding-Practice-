import React, { useState } from 'react'

function useCounter(initialCount = 0, countSize = 1) {
  
  const [count, setCount] = useState(initialCount)
  
  const increment = () => {
    setCount(prevCount => prevCount + countSize)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - countSize)
  }

  const reset = () => {
    setCount(0)
  }

  return [ count, increment, decrement, reset ]

}

export default useCounter
