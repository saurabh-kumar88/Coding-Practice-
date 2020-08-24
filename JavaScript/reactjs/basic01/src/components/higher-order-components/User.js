/** 
 * Render Props : Is a technique for sharing common code between React components using 
 * a props whose value is a function which controls what should be rendered to component 
 */

import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <p>{this.props.render(true)}</p>
    )
  }
}

export default User
