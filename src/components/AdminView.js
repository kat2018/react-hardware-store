import React, { Component } from 'react'

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

                <h2>Create New Product</h2>
            </div>
        )
    }
}

export default AdminView