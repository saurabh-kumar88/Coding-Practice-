import React, {Component} from 'react';

class Welcome extends Component{

  render(){
    const {name, heroname} = this.props
    return(
      <div>
        <h1>Welcome {name} a.k.a {heroname}</h1>
        {this.props.children}
      </div>
    )   
  }
}

export default Welcome