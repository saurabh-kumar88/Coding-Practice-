import React from 'react'
import CountUp, { useCountUp } from 'react-countup'


function CountUpDemo() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
    startOnMount : false,
  })
  return (
    <div>
      {/** <CountUp end={500}/>*/}
      <br />
      <CountUp start={500} end={1000} duration={5} />
      
      <h2>Jack Pot Counter
        <CountUp end={500} duration={5} prefix=' $ ' decimals={2} /> 
      </h2>

      <h2>Jack Pot Counter2 
        <CountUp end={500} duration={5} suffix=' USD ' decimals={2} /> 
      </h2>

      <div> CountUp with more controls :
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => update(9000)}>Update to 2000</button>
      </div>

    </div>
  )
}

export default CountUpDemo
