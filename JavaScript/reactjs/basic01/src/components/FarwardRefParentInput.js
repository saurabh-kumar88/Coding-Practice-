import React, { Component } from 'react'
import FarwardRefInput from './FarwardRefInput';

class FarwardRefParentInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  
  clickHandler = () =>{
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <FarwardRefInput ref={this.inputRef} />
        <button onClick={this.clickHandler} >Focus Input</button>
      </div>
    )
  }
}

export default FarwardRefParentInput
