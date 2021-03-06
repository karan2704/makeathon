import React from 'react'
import {Link} from 'react-router-dom'

import './orderSummary.css'

const OrderSummary = props => {

    let disableProceed = true
    const finalOrder = Object.keys(props.cart)
    .map(cartKey => {
        return (<li key={cartKey}>
            <strong>{cartKey}: {props.cart[cartKey]}</strong>
        </li>)
    })

    if(props.price !== 0){
        disableProceed = false
    }
    
    return (
        <div className='ordersummary'>
            <h2>Are you sure you want to proceed?</h2>
            <ul>
            {finalOrder}
            </ul>
            <p><span>Your Total: <strong>Rs. {props.cost}</strong></span></p>
            <button>
            <Link style={disableProceed ? {pointerEvents: 'none', textDecoration: 'none'} : {textDecoration: 'none'}} 
            to="/checkout">
            Proceed
            </Link>
            </button>
            <button onClick={props.cancel}>Cancel</button>
        </div>
    )
}

export default OrderSummary;