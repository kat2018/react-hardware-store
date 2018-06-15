import React, { Component } from 'react'
import ProductList from './ProductList';
import ProductForm from './ProductForm';

class AdminView extends Component {
    render() {
        //This is the long way: 
        // const productList = this.props.productList
        // console.log("Admin View!!", productList)

        // This is the short way: 
        console.log("Admin View!!", this.props.productList);


        return (
            <div>
                <h1>Admin View</h1>
                <h2>Products</h2>
                <ProductList productList={this.props.productList} />

                <h2>Create New Product</h2>
                <ProductForm 
                updateProductList={this.props.updateProductList}
                />
            </div>
        )
    }
}

export default AdminView