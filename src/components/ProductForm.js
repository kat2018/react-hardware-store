import React, { Component } from 'react'

class ProductForm extends Component {
    state = {
        newProduct: {}
    }

    handleNewProductChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        const newProduct = { ...this.state.newProduct }
        newProduct[name] = value

        this.setState({ newProduct })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("I SUBMITTED FROM THE PRODUCT FORM")
        this.props.updateProductList(this.state.newProduct)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <input
                            name="productName"
                            type="text"
                            placeholder="Name"
                            onChange={this.handleNewProductChange} />
                    </div>

                    <div><input name="description" type="text" placeholder="Description" onChange={this.handleNewProductChange} /></div>
                    <div><input name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this.handleNewProductChange} /></div>
                    <div><input type="submit" value="Create New Product" /></div>
                </form>
            </div>)
    }
}

export default ProductForm