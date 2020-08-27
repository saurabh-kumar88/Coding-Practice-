import React, { Component } from 'react'
// compare it with HookCounter.js
class ClassCounterHook extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0,
       name : '',
    }
  }

  componentDidMount(){
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState){
    // conditionally executing useEffect
    if(prevState.name !== this.state.name)
    {
      console.log(`Updating document title`)
      document.title = `Clicked ${this.state.count} times`
    }
    
    
  }

  render() {
    return (
      <div>
        <p>class counter</p>
        <input type="text"
        value = {this.state.name}
        onChange={e => {
          this.setState({name : e.target.value})
        }} />
        <button onClick={ ()=> {this.setState({count : this.state.count + 1})}}>
        Clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default ClassCounterHook
