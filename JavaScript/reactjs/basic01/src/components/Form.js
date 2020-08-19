import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username : "",
       comments : "",
       topic : "react",
    }
  }

  handelUserNameChange = (event) => {
     this.setState({
       username : event.target.value
     }) 
  }

  handelCommentsChange = (event) => {
    this.setState({
      comments : event.target.value,
    })
  }

  handelTopicChange = (event) => {
    this.setState({
      topic : event.target.value
    })
  }

  handelSubmit = (event) => {
    
    window.alert(`${this.state.username} ${this.state.comments} ${this.state.topic }`)
    event.preventDefault();
  }
  
  render() {
    const {username, comments, topic} = this.state // destructuring state bindings
    return (
    <form onSubmit={this.handelSubmit}>
      <div>
        <lable>username : </lable>
        <input type="text" value={username} onChange={this.handelUserNameChange} />
      </div>
      
      <div>
        <lable>Comments</lable>
        <textarea value={comments} onChange={this.handelCommentsChange}></textarea>
      </div>
      
      <div>
        <lable>Topic</lable>
        <select value={topic} onChange={this.handelTopicChange}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form> 
      
    )
  }
}

export default Form

