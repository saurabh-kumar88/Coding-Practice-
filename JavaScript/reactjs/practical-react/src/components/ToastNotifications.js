import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()
function ToastNotifications() {
  const notify = () => {
    toast(' basic-toast ', { position : toast.POSITION.TOP_LEFT })
    toast.success(' success-toast ', 
    { position : toast.POSITION.TOP_RIGHT,
      autoClose : 1000 })
    toast.error(' error-toast ',
    { position : toast.POSITION.TOP_CENTER,
    autoClose : false })

    toast.error(<CustomToast />,
    { position : toast.POSITION.TOP_CENTER,
    autoClose : false })

    // toast.info(' info-toast ', { position : toast.POSITION.BOTTOM_LEFT })
    // toast.warn(' warning-toast ', { position : toast.POSITION.BOTTOM_RIGHT })
    
    
  }
  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  )
}

// user defined toast

const CustomToast = ({ closeToast }) => {
  return(
    <div>
      Custom toast 
      <button onClick={closeToast}>close</button>
    </div>
  )
}



export default ToastNotifications
