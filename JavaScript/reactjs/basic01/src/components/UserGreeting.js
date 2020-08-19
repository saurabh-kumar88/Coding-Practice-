import React, { Component } from 'react'
/**Objective : Conditional rendering (render a component based on some if, else condition )
 * there are four ways to conditionally render react components. mostly used approach's are 3rd and 4th.  
 */
class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : false,
    }
  }

  render() {
    
    // 1st approach (code repetition)
    // if(this.state.isLoggedIn)
    // {
    //   return(
    //     <div>Welcome Saurabh</div>
    //   )
    // }
    // else{
    //   return(
    //     <div>Welocme Guest</div>
    //   )
      
    // }
    // return (
    //   <div>
    //     <p>Welcome Saurabh</p>
    //     <p>Welocome Guest</p>        
    //   </div>
    // )


    // 2nd approach (javascript variable)
    
    // let message
    // if(this.state.message)
    // {
    //   message = <div>Hello Saurabh</div>
    // }
    // else{
    //     message = <div>Hello Guest</div>
    // }

    // return(
    //   <div>{message}</div>
    // )

    //3rd approach (ternary if else)
    return( 
      this.state.isLoggedIn ?
      <div>Welcome Saurabh</div> :
      <div>Welcome Guest</div>
    )

    // 4th approach (short circuit method)

    //return this.state.isLoggedIn && <div>Welcome Saurabh</div>



  }
}

export default UserGreeting
