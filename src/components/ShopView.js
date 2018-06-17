import React, { Component } from 'react'
import ProductList from './ProductList';


class ShopView extends Component {
    render() {
        console.log("Shop View!!", this.props.productList);


        return (
            <div>
                <h1>Shop</h1>
                <h2>Products</h2>
                <ProductList
                    productList={this.props.productList}
                    addProductToCart={this.props.addProductToCart}
                />

            </div>
        )
    }
}

export default ShopView