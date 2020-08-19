import React, { Component } from 'react'

export class ClassClick extends Component {
  clickHandler(){
    console.log("button-clicked")
  }
  render() {
    return (
      <div>
        <p>click events handling using class </p>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default ClassClick
