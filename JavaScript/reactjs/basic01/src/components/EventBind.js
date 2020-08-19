import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message : "hello",
    }
    /** this binding in constructor is the best option */
    //this.clickHandler = this.clickHandler.bind(this) 
  }

  // clickHandler(){
  //   this.setState({
  //     message : "Goodbye!",
  //   })
  //   // console.log(this)
  // }

  // { fourth : method } this binding using arrow function
  clickHandler = () =>{
    this.setState({
      message: "Goodbye!"
    })
  } 
  
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/**<button onClick={this.clickHandler.bind(this)}>click me</button> */} {/** first method */}
        {/*<button onClick={ () => this.clickHandler()}>click me</button>*/} {/** second  */}
        <button onClick={this.clickHandler}>click me</button> {/**third approach -- react official */}
      </div>
    )
  }
}

export default EventBind
