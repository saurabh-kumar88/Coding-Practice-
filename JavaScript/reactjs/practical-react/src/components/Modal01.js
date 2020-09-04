import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
function Modal01() {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  return (
    <div>
      <button onClick={() => setModalIsOpen(true) }>open modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={ () => setModalIsOpen(false)}
      style={
        {
          overlay:{
            backgroundColor : 'whitesmoke',
          },
          content:{
            color : 'orange'
          }
        }
      }
      >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <button onClick={ () => setModalIsOpen(false) } >close</button>
      </Modal>
    </div>
  )
}

export default Modal01
