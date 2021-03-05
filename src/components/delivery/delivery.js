import React from 'react'
import './delivery.css'

const Delivery = (props) => {

    return (
        <div 
        className='delivery'
        onClick={props.showMap}>
            <img src={props.imgLink} alt='img' />
            <h3>{props.name}</h3>
            <p>Delivery charges: <strong>{props.charge}</strong></p>
        </div>
    )
}
export default Delivery;