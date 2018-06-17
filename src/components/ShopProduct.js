import React, { Component } from 'react'

class ShopProduct extends Component {

    addToCartHandler = () => {

        this.props.addToCart(this.props.index)
    }
    

    render() {
        const shopProduct = this.props.shopProduct



        return (
            <div>
                <h3>Name: {shopProduct.shopProductName}</h3>
                <h4>Price: {shopProduct.price} </h4>
                <p>Description: {shopProduct.description}</p>
                <div><button 
                onClick={this.addToCartHandler}
                >Add to Cart</button>
                </div>
            </div>
        )
    }
}

export default ShopProduct