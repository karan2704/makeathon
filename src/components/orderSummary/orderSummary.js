import React from 'react'
import {Link} from 'react-router-dom'

import './orderSummary.css'

const OrderSummary = props => {

    let disableProceed = true
    const finalOrder = Object.keys(props.cart)
    .map(cartKey => {
        return (
        <li key={cartKey}>
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
            <button style={{width: '5rem', height: '2rem',margin:'auto 5px', borderRadius: '20px', backgroundColor:'#9ecca4'}} >
            <Link style={{textDecoration: 'none', color: 'black'}}
            to="/checkout">
            Proceed
            </Link>
            </button>
            <button 
            style={{width: '5rem', height: '2rem', margin:'auto 5px', borderRadius: '20px', backgroundColor:'#c15050', color: 'white'}}
            onClick={props.cancel}>Cancel</button>
        </div>
    )
}

export default OrderSummary;