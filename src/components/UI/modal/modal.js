import React from 'react'
import './modal.css'

const Modal = (props) => {
    return(
        <div 
        style = {props.show? {display:'block'}: {display:'none'}}
        className='modal'>
            {props.children}
        </div>
    )
}

export default Modal;