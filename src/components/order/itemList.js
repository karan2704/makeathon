import React from 'react';
import Item from './item'

import './itemList.css'

const ItemList = (props) => {
    
    const renderedList = Object.keys(props.prodList)
        .map(prodKey => {
            return (
            <li>
                <Item 
            key={prodKey}
            name={props.prodList[prodKey].name} 
            price={props.prodList[prodKey].price}
            img={props.prodList[prodKey].img}
            quantity = {props.cart[props.prodList[prodKey].name]}
            add={props.addToCart}
            remove={props.removeFromCart} />
            </li>
            
        )})

    return(
        // props.prodList.map((item, index) => {
        //     return (<Item key={index} listItem = {item} />)
        // })
        <ul className='itemList'>
            {renderedList}
        </ul>
        
    )
}

export default ItemList
