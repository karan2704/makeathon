import React from 'react'

import './backdrop.css'
const Backdrop = (props) => {
    return (
        <div 
        style = {props.show? {display:'block'}: {display:'none'}}
        onClick={props.cancel} 
        className='Backdrop'>
        </div>
    )
}

export default Backdrop;