import React from 'react'

function InlineStyles() {
  const heading = {
    fontSize: '72px',
    color: 'blue',
    backgroundColor:'orange',

  }
  return (
    <div>
      <h1 style={heading}>Inline styling in react</h1>
    </div>
  )
}

export default InlineStyles
