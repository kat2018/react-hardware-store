import React, {Component} from 'react'
import AdminView from "./AdminView";
import ShopView from './ShopView';


class HomePage extends Component {
    constructor () {
        super()

        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: true, 
            productList: [
                {
                    productName: 'Hammer',
                    description: 'Its a hammer',
                    price: 12.3,
                },
                {
                    productName: 'Nail',
                    description: 'Its a nail',
                    price: 0.12,
                }
            ]
        }
    }
    
    toggleEditSaleItem = () => {
        const updatedEditSaleItem = !this.state.editSaleItem

        this.setState({ editSaleItem: updatedEditSaleItem})
    }

    //lets type a new function
    handleItermCurrentlyOnSaleChange = (event) => {
        console.log(event.target.value)
        //here we will store it so we can change it
        const value = event.target.value
    //here we are catching it and changing it in HTML by using the set state that is a function that takes a object
        this.setState({ itemCurrentlyOnSale: value})
    }

    updateProductList = (newProduct) => {
        console.log("CAUGHT IT FROM THE HOME PAGE")
        const productList = [...this.state.productList]
        productList.push(newProduct)
        this.setState({ productList })
    }

    deleteProduct = (index) => {
        console.log("Deleted Product")
        const productList = [...this.state.productList]
        productList.splice(index, 1)
        this.setState({ productList })
    }
    
    render(){
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>Currently on Sale: {this.state.itemCurrentlyOnSale}!</div>
                <div>
                    <button onClick={this.toggleEditSaleItem}>
                    {/* here we created a ternary boolean to change ow the button behaves */}
                        {this.state.editSaleItem ? "Hide" : "Edit Sale Item"}
                        
                    </button>
                     </div>
                    {this.state.editSaleItem 
                    ? <div> 
                        <input 
                        type="text" 
                        value={this.state.itemCurrentlyOnSale}
                        onChange={this.handleItermCurrentlyOnSaleChange} 
                        /> 
                    </div> 
                    : null}

                {/* Product List is the name of the property */}
                <AdminView
                    productList={this.state.productList}
                    updateProductList={this.updateProductList}
                    deleteProduct={this.deleteProduct}
                    />

                <ShopView
                    productList={this.state.productList}
                    addToCart=
                    {this.state.addToCart}
                />

            </div>
        )
        
    }

}

export default HomePage