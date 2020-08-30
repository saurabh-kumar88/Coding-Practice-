/** If states are objects  */
import React, {useReducer} from 'react'

// 1. By objects as states, we can maintain states of two or more counters
// 2. We cab maintain both states and action as objects
// 3. Using action as object we can pass additional data to reducer function ( e.g ...state )
// 4. Using state as object, we can keep track of multiple different state variables
// 5. But this approach is suitable for global state variable only.

const initialState = { 
    firstCounter : 0,
    secondCounter : 10, 
}
const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return { ...state, firstCounter : state.firstCounter + action.value}
    case 'decrement':
      return { ...state, firstCounter : state.firstCounter - action.value}
    case 'increment5':
      return { ...state, firstCounter : state.firstCounter + action.value}
    case 'decrement5':
      return { ...state, firstCounter : state.firstCounter - action.value}
    case 'increment2':
      return { ...state, secondCounter : state.secondCounter + action.value}
    case 'decrement2':
      return { ...state, secondCounter : state.secondCounter + action.value}
    case 'reset':
      return initialState
    default:
      return state
  }
}

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div> comples states : objects as states
      <div> 
        <h2>First Counter</h2>
        <h3>Count :  {count.firstCounter}</h3>
          <button onClick={() => dispatch({type : 'increment', value : 1})}>Increment</button>
          <button onClick={() => dispatch({type : 'decrement', value : 1})}>Decrement</button>
          <button onClick={() => dispatch({type : 'increment5', value : 5})}>Increment by 5</button>
          <button onClick={() => dispatch({type : 'decrement5', value : 5})}>Decrement by 6</button>
      </div>
      
      <div>
        <h2>Second Counter</h2>
        <h3>Count :  {count.secondCounter}</h3>
          <button onClick={() => dispatch({type : 'increment2', value : 2})}>Increment2</button>
          <button onClick={() => dispatch({type : 'decrement2', value : 2})}>Decrement2</button>
      </div>
      <button onClick={() => dispatch({type : 'reset'})}>Reset</button>

    </div>
  )
}

export default CounterTwo
  