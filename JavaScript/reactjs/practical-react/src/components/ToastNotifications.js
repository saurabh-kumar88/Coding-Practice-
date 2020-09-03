import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()
function ToastNotifications() {
  const notify = () => {
    toast(' Basic React-ToastNotification ', { position : toast.POSITION.TOP_LEFT })
    toast(' Basic React-ToastNotification ', { position : toast.POSITION.TOP_RIGHT })
    toast(' Basic React-ToastNotification ', { position : toast.POSITION.TOP_CENTER })
    toast(' Basic React-ToastNotification ', { position : toast.POSITION.TOP_BOTTOM_LEFT })
    toast(' Basic React-ToastNotification ', { position : toast.POSITION.TOP_BOTTOM_RIGHT })
    toast(' Basic React-ToastNotification ', { position : toast.POSITION.TOP_CENTER })
  }
  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  )
}

export default ToastNotifications
