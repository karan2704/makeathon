import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'

import DeliveryList from '../components/delivery/deliveryList'
import Modal from '../components/UI/modal/modal'
import MapHolder from '../components/UI/mapHolder/mapHolder'
import Backdrop from '../components/UI/backdrop/backdrop'
import Location from '../components/location/location'


class CheckOut extends Component {

    state = {
        address: {
            center: {
                lat: 28.6380333,
                lng: 77.215812
              },
              zoom: 10
            },
        locationSelectModal: false,
        mapModal: false,
        locationSelectModalType: ''
        }
    
    stations = {
        1: {
            name: 'Chandni Chowk',
            lat: 28.6617638,
            lng: 77.2284468
        },
        2: {
            name: 'Rajiv Chowk',
            lat: 28.6380333,
            lng: 77.215812
        },
        3: {
            name: 'Vaishali',
            lat: 28.6498778,
            lng: 77.3375513
        },
        4: {
            name: 'Noida City Centre',
            lat: 28.5746081,
            lng: 77.3539227
        },
    }



    deliveryTypes = {
        1: {
            type: 'Drone',
            cost: 100,
            img: 'https://i.ytimg.com/vi/mzhvR4wm__M/maxresdefault.jpg'
        },
        2: {
            type: 'Delivery Partner',
            cost: 70,
            img: 'https://image.freepik.com/free-photo/delivery-man-isolated-yellow-with-thumbs-up-because-something-good-has-happened_1368-70622.jpg'
        },
        3: {
            type: 'Metro',
            cost: 0,
            img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201511/delhi-metro_647_112215094932.jpg?size=770:433'
        }
    }

    showLocationSelectModal = (delType) => {
        this.setState({locationSelectModal: true})
        this.setState({locationSelectModalType: delType})
    }

    showMapModalHandler = (latitude, longitude) => {
        const updatedAddress = {
            ...this.state.address
        }
        updatedAddress.center.lat = latitude
        updatedAddress.center.lng = longitude
        this.setState({mapModal: true, locationSelectModal: false, address: {...updatedAddress}})
        console.log(this.state.address)
        console.log(updatedAddress)
    }

    closeModals = () => {
        this.setState({mapModal: false})
        this.setState({locationSelectModal: false})
    }

    

    
    render() {
        let modalContent
        const stationArr = Object.keys(this.stations)
        .map(stnKey => {
            return (
                    <li key={stnKey}>
                        <button 
                        onClick={() => {this.showMapModalHandler(this.stations[stnKey].lat, this.stations[stnKey].lng)}} 
                        style={{margin: '10px'}}>
                            {this.stations[stnKey].name}
                        </button>
                    </li>
            )
        })

        if(this.state.locationSelectModalType === 'Drone'){
            modalContent = stationArr
        }
        else if(this.state.locationSelectModalType === 'Delivery Partner'){
            modalContent = <Location />
        }
        else{
            modalContent = stationArr
        }

        return(
            <div className='checkout'>
                <h1>Please select the type of delivery</h1>
                <Backdrop 
                show={this.state.locationSelectModal || this.state.mapModal}
                cancel = {this.closeModals}/>
                <Modal
                show={this.state.locationSelectModal}>
                    <ul style={{listStyle: 'none'}}>
                        {modalContent}
                    </ul>
                </Modal>
                <Modal
                style={{ height: '100vh', width: '100%' }}
                show= {this.state.mapModal}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCPMwWgYAKcLKX6XjJkqaFvlLo_avNq29k'}}
                    defaultCenter={this.state.address.center}
                    defaultZoom={this.state.address.zoom}
                    >     
                       <MapHolder 
                        lat={this.state.address.center.lat}
                        lng={this.state.address.center.lng}
                        text="My Marker"/>  
                    </GoogleMapReact>
                    <button><Link to='/payment'>Confirm</Link></button>
                    <button onClick={this.closeModals}>Cancel</button>
                </Modal>
                <DeliveryList
                selectLocation = {this.showLocationSelectModal}
                deliveryList = {this.deliveryTypes}/>
            </div>    
        )
    }
}

export default CheckOut;