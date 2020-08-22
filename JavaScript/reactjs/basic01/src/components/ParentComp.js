import React, { Component } from 'react'
import RegComponent from './RegComponent';
import PureComp from './PureComponent';

class ParentComp extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       name : 'saurabh',
    }
  }

  componentDidMount(){
    setInterval( ()=>{
      this.setState({
        name : 'saurabh'
      })
    }, 2000)
  }
  
  
  render() {
    console.log("******parent component render********")
    return (
      <div>
        Parent Component
        <RegComponent name={this.state.name}/>
        <PureComp name={this.state.name}/>        
      </div>
    )
  }
}

export default ParentComp
