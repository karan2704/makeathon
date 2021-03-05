import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import DeliveryList from '../components/delivery/deliveryList'
import Modal from '../components/UI/modal/modal'
import MapHolder from '../components/UI/mapHolder/mapHolder'
import Backdrop from '../components/UI/backdrop/backdrop'

class CheckOut extends Component {

    state = {
        mapModal: false,
        address: {
            center: {
                lat: 30.3564242,
                lng: 76.3647012
              },
              zoom: 15
            }
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
        }
    }

    showMapModalHandler = () => {
        this.setState({mapModal: true})
    }

    closeMapModalHandler = () => {
        this.setState({mapModal: false})
    }

    
    render() {
        
        return(
            <div className='checkout'>
                <Backdrop 
                show={this.state.mapModal}
                cancel = {this.closeMapModalHandler}/>
                <Modal
                style={{ height: '100vh', width: '100%' }}
                show= {this.state.mapModal}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCPMwWgYAKcLKX6XjJkqaFvlLo_avNq29k'}}
                    defaultCenter={this.state.address.center}
                    defaultZoom={this.state.address.zoom}
                    >     
                     <MapHolder 
                     lat={30.3564242}
                     lng={76.3647012}
                     text="My Marker"/>     
                    </GoogleMapReact>
                </Modal>
                <DeliveryList
                showMap = {this.showMapModalHandler}
                deliveryList = {this.deliveryTypes}/>
            </div>    
        )
    }
}

export default CheckOut;