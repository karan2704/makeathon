import React from 'react'
import Delivery from './delivery'

import './deliveryList.css'

const DeliveryList = (props) => {

    const deliveryList = Object.keys(props.deliveryList)
    .map(delKey => {
        return(
            <li key = {delKey}>
                <Delivery 
                
                imgLink = {props.deliveryList[delKey].img} 
                name = {props.deliveryList[delKey].type}
                charge = {props.deliveryList[delKey].cost}
                showMap = {props.showMap} />
            </li>
        
    )})

    return (
        <div className='DeliveryList'>
            <ul>
            {deliveryList}
            </ul>
            
        </div>
    )
}

export default DeliveryList