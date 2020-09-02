import React, { useState } from 'react'
import useCounter from './hooks/useCounter';

function CounterOne() {
  
  const [count, increment, decrement, reset ] = useCounter() //custom hook

  return (
    <div>
      <p>First Counter</p>
      Count : {count}
        <div>
          <button onClick={ increment }>Increment</button>
          <button onClick={ decrement }>Decrement</button>
          <button onClick={ reset }>Reset</button>
        </div>
    </div>
  )
}

export default CounterOne
