import React, {useReducer} from 'react'
// Multiple useReducers
/** Summary : When dealing with multiple state variables that have the same state transitions,
it is best practice to use multiple useReducer hooks making use of the same common reducer function 
(i.e sharing code or common functionality among different counters ) */  

const initialState = 0
const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}


function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [count2, dispatch2] = useReducer(reducer, initialState)
  return (
    <div>
      <h2>Multiple counters by multiple useReducers</h2>
      <div>
        <h3>Count :  {count}</h3>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
      
      <div>
        <h3>Count :  {count2}</h3>
        <button onClick={() => dispatch2('increment')}>Increment</button>
        <button onClick={() => dispatch2('decrement')}>Decrement</button>
        <button onClick={() => dispatch2('reset')}>Reset</button>
      </div>

    </div>
  )
}

export default CounterThree 
