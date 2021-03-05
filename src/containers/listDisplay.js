import React, {Component} from 'react'
import ItemList from '../components/order/itemList'
import Modal from '../components/UI/modal/modal'
import OrderSummary from '../components/orderSummary/orderSummary'
import Backdrop from '../components/UI/backdrop/backdrop'


class ListDiplay extends Component {

    state = {
        cart: {
            Carrot:0,
            Onion: 0,
            Chicken: 0,
            Meat:0
        },
        totalPrice: 0,
        checkingOut: false
    }

        
    products = {
        1: {name: 'Carrot', 
            price: 50,
            img: 'https://cdn-b.medlife.com/2019/01/carrot.jpg'},
        2: {name: 'Onion', 
            price: 100,
            img: 'https://economictimes.indiatimes.com/thumb/msid-75350989,width-1200,height-900,resizemode-4,imgsize-360856/5.jpg?from=mdr'},
        3: {name: 'Chicken', 
            price: 150,
            img: 'https://www.gannett-cdn.com/-mm-/857724d0e7f46fe30f451142b8187537a99ddfb9/c=0-201-3865-2375/local/-/media/2016/07/25/Reno/B9323099756Z.1_20160725192556_000_GFDF3SOAA.1-0.jpg'},
        4: {name: 'Meat',
            price: 200,
            img: 'https://www.incimages.com/uploaded_files/image/1024x576/getty_80116649_344560.jpg'}
    }

    additionHandler = (item, cost) => {
        const updatedCount = this.state.cart[item] + 1
        const updatedCart = {
            ...this.state.cart
        }
        updatedCart[item] = updatedCount
        const updatedPrice = this.state.totalPrice + cost
        this.setState({cart: updatedCart, totalPrice: updatedPrice })
    }

    removalHandler = (item, cost) => {
        const updatedCount = this.state.cart[item] - 1
        const updatedCart = {
            ...this.state.cart
        }
        updatedCart[item] = updatedCount
        const updatedPrice = this.state.totalPrice - cost
        this.setState({cart: updatedCart, totalPrice: updatedPrice })
    }

    checkoutHandler = () => {
        this.setState({checkingOut: true})
    }

    cancelCheckoutHandler = () => {
        this.setState({checkingOut: false})
    }
    
    

    render () {
        return (
            <React.Fragment>
                <Backdrop 
                show={this.state.checkingOut}
                cancel = {this.cancelCheckoutHandler}/>
                <Modal
                show={this.state.checkingOut}>
                    <OrderSummary 
                    cart = {this.state.cart}
                    cost = {this.state.totalPrice}
                    cancel = {this.cancelCheckoutHandler} />
                </Modal>
                <ItemList 
                cart = {this.state.cart}
                addToCart = {this.additionHandler}
                removeFromCart = {this.removalHandler}
                prodList = {this.products} />
                <button onClick={this.checkoutHandler}>Checkout</button>
            </React.Fragment>
            
        )
    }
}

export default ListDiplay;