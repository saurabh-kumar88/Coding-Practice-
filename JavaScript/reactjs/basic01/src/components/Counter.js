import React, { Component } from 'react'

/**
 * 
 rule1: Always make use of setState() method, never modify the state directly
 rule2: If some code needs to be executed right after setState, place it in callback function which is a second argument of setState
 rule3: When you have to update state based on its previous state, pass in a arrow function as argument instead of the regular object. 
 

 */


class Counter extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }

  increment(){
    
    this.setState(prevState => ({
      count : prevState.count + 1
    }))
    console.log(this.state.count)

  }

  decrement(){
    if(this.state.count !== 0)
    {
      this.setState(prevState => ({
        count:prevState.count - 1
      }))
    }
    
    console.log(this.state.count)
  }

  
  render() {
    return (
      <div className="counter">
        <h1>Count - {this.state.count}</h1>
        <button onClick={()=>this.increment()}>Increment</button>
        <button onClick={()=>this.decrement()}>Decrement</button>
      </div>
    )
  }
}

export default Counter
