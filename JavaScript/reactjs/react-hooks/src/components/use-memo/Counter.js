/**Objective :
 * This component renders two counters CounterOne and CounterTwo, we have 
 introduced as delay and odd-even count checker function in counterOne
 
 * But in browser we have seen that the delay introduced in counterOne also 
 affects counterTwo

 * Reason - Because every time the states updates, the component re-renders, and 
 when component re-renders, isEven function is called again, so even when update
 counterTwo the same isEven function invoked and delay introduced.

 * So we need to tell react that not to calculate isEven when we are updating counterTwo
 here useMemo comes into picture.

 * useMemo is a hook that will only recompute the cached values, only when one
 of the dependencies changed.

 * This optimization avoids expensive calculations at every render.


 * useCallback vs useMemo -- 

 * useCallback caches the instance itself of provided function on the other hand
  useMemo invokes the provided function and caches its result.
 */
import React, { useState, useMemo } from 'react'

function Counter() {
  const [ countOne , setCounterOne ] = useState(0)
  const [ countTwo , setCounterTwo ] = useState(0)

  const incrementOne = () => {
    setCounterOne(countOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(countTwo + 1)
  }

  // react is using cached value  of isEven function -- with help of useMeme hook
  // with countOne as dependency

  const isEven = useMemo(() => {
    let i = 0
    while( i< 200000000 ) i++
    return countOne % 2 === 0
  },[countOne])
 
  return (
    <div>
      <div>
        <button onClick={incrementOne}>Counter One {countOne}</button>
        <span>{ isEven ? ' Even' : ' Odd' }</span>
      </div>

      <div>
        <button onClick={incrementTwo}>Counter Two {countTwo}</button>
      </div>
    </div>
  )
}

export default Counter
