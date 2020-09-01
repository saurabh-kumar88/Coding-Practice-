import React from 'react'

function Button({ handelClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handelClick}>
      {children}
    </button>
  )
}

export default React.memo(Button)
