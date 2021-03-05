import React from 'react';

import './item.css'

const Item = props => {

    let disable = false;
    if (props.quantity === 0){
        disable = true
    }
    return(
        <React.Fragment>
        <div className='item'>
            <img src= {props.img} alt='img' />
        <div className='detail'>
            <h2>{props.name}</h2>
            <p><strong>Rs. {props.price}/kg</strong></p>
        </div>
        <div className = 'functionality'>
            <button onClick={() => props.add(props.name, props.price)}>+</button>
            <p><strong>{props.quantity}</strong></p>
            <button disabled={disable} onClick={() => props.remove(props.name, props.price)}>-</button>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Item;