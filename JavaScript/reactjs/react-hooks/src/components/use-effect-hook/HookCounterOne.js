import React, {useState, useEffect} from 'react'
// Compare it with ClassCounter.js
function HookCounterOne() {
  
  const [count, setCount] = useState(0) 
  const [name, setName] = useState('')
  
  // Note: useEffect working --> 
  /** useEffect hook takes an arrow function as parameter and excuets 
   it after every times components renders */ 
  useEffect( () => {
    document.title = `You clicked ${count} times`
    // window.alert(`You clicked ${count} times`)
    console.log(`You clicked ${count} times`)

  },[name])
  // conditional execution:, useEffect takes an array as optional second parameter, which defines conditional execution of useEffect hook.
  // here is name changes then only () => function will be executed   




  return (
    <div>
      <p>Hooks counter</p>
      <input type="text" value={name} onChange={e => {setName(e.target.value)}} />
      <button onClick={ () => setCount(count + 1) }>Clicked {count} times</button>
    </div>
  )
}

export default HookCounterOne
