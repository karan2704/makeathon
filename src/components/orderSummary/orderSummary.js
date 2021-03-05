import React from 'react'

import './orderSummary.css'

const OrderSummary = props => {
    const finalOrder = Object.keys(props.cart)
    .map(cartKey => {
        return (<li key={cartKey}>
            <strong>{cartKey}: {props.cart[cartKey]}</strong>
        </li>)
    })
    return (
        <div className='ordersummary'>
            <h2>Are you sure you want to proceed?</h2>
            <ul>
            {finalOrder}
            </ul>
            <p><span>Your Total: <strong>Rs. {props.cost}</strong></span></p>
            <button onClick={() => alert('PROCEED')}>Proceed</button>
            <button onClick={props.cancel}>Cancel</button>
        </div>
    )
}

export default OrderSummary;