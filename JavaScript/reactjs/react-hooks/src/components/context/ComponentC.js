import React, {useContext} from 'react'
import {userContext, channelContext} from '../../App';

const user = useContext(userContext)
const channel = useContext(channelContext)


function ComponentC() {
  return ( 
    <div>
      {user} -- {channel}
    </div>

    // <div>
    //   <userContext.Consumer>
    //   {
    //     user => {
    //       return (
    //         <channelContext.Consumer>
    //         {
    //           channel => {
    //             return <div>userContext : {user}, channelContext : {channel}</div>
    //           }
    //         }
    //         </channelContext.Consumer>
    //       ) 
    //     }
    //   }
    //   </userContext.Consumer>
    // </div>
  )
}

export default ComponentC
