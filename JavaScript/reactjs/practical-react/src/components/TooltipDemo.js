import React from 'react'
import ReactTooltip from 'react-tooltip'


function TooltipDemo() {
  return (
    <div>
    
    <p data-tip='warning'  data-place='right'  >React Tooltip warning</p>  
    <ReactTooltip effect='solid'
    textColor='blue'
    backgroundColor='grey' />      
    </div>
  )
}

export default TooltipDemo
