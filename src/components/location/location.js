import React from 'react'

import { Link } from 'react-router-dom'

import './location.css'

const Location = props => {

    // stationArr = Object.keys(props.stationList)
    // .map(stnKey => {
    //     return (
    //         <li key={stnKey}>
    //             <button 
    //             onClick={() => props.click(props.stationList[stnKey].lat, props.stationList[stnKey].lng)}>
    //                 props.stationList[stnKey].name
    //             </button> 
    //         </li>
    //     )
    // })

    return(
        <form>
            <label>Address: </label> 
            <input name='address' required={true}/>
            <button className='btn' type='submit'><Link style={{textDecoration: 'none', color: 'black'}}to="/payment">Submit</Link></button>
        </form>
    )
}

export default Location;