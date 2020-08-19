import React from 'react'
import './myStyles.css'
function StyleSheet(props) {
  let class_name = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${class_name} font-xl`}>StyleSheets</h1>
    </div>
  )
}

export default StyleSheet
