import React, { Component } from 'react';
import { UserConsumer } from './UserContext';

class ComponentF extends Component {
  render() {
    /** Step3: finally receive data in lowest level F as
    parameter of arrow function and return the appropriate JSX  
    */
   
    /**
     This way we have passed data from top level ComponentC to deeply nested ComponentF
     without passing any data to its intervening component i.e ComponentE. 
     */
  
    return (
      
      <UserConsumer>
        {
          (username) => {
            return <div>Hello {username}</div>
          }
        }
      </UserConsumer>
    )
    
  }
}

export default ComponentF
