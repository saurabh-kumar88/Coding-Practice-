import React from 'react'

/**
 * Higher order component (HOC) is a pattern where a function accepts 
 * a component and returns a new enhanced component.
 * e.g const IronMan = HOC(Tony Stark)
 * 
 * HOC provides or shares common functionality between different components
 * without repetition of code.
 * 
 * Basically we defined the code/functionality inside HOC which can be 
 * then shared among different components.
 * 
 * Please use spread operator to pass rest of the props to HOC 
 * {...this.props}
 * 
 * Passing parameters to HOC functions  
 */

const withCounter = (WrappedComponent, incrementNumber) => {
  class withCounter extends React.Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      }
    }  
    
    incrementCount = () => {
      this.setState(prevState => {
        return{ count : prevState.count + incrementNumber}
      })
    }
    
    render(){
      console.log(this.props.name)
      return <WrappedComponent count={this.state.count} 
              incrementCount={this.incrementCount } 
              {...this.props}/>
    }
  }
  return withCounter
}

export default withCounter