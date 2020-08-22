import React, { Component } from 'react'

/** Using react Refs focus on particular DOM element on page load
 * Refs also allows to read DOM values,
 * there are 2 methods to create react Refs
 * a. using constructor Refs method ( React.createRef() )
 * b. using callback Refs method (First create property , assign null to it
 * then create a callback method in which pass a DOM element as parameter and assign it to property)
 */


class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef() // first way to create Refs, constructor-Refs
    this.cbRef = null // second method : callback refs
    this.setCbRef = element => {
      this.cbRef = element
    }
  } 
  
  componentDidMount()
  {
    // this.inputRef.current.focus()
    // console.log(this.inputRef)
    
    // callback Ref method
    if(this.cbRef){
      this.cbRef.focus()
    }

  }

  clickHandler = () => {
    // alert(this.inputRef.current.value)
    console.log(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} placeholder="constructor Ref demo" />
        <input type="text" ref={this.setCbRef} placeholder="callback Ref demo"/>
        <button onClick={this.clickHandler}>Click</button>        
      </div>
    )
  }
}

export default RefsDemo
