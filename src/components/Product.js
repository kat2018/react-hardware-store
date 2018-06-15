import React, { Component } from 'react'

class Product extends Component {

    deleteHandler = () => {

        this.props.deleteProduct(this.props.index)
    }
    

    render() {
        const product = this.props.product



        return (
            <div>
                <h3>Name: {product.productName}</h3>
                <h4>Price: {product.price} </h4>
                <p>Description: {product.description}</p>
                <div><button 
                onClick={this.deleteHandler}
                >delete</button>
                </div>
            </div>
        )
    }
}

export default Product