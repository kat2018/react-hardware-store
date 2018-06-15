import React, {Component} from 'react'

class HomePage extends Component {
    constructor () {
        super()

        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: true
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
                    
                    {this.state.itemCurrentlyOnSale 
                    ? <div> 
                        <input 
                        type="text" 
                        value={this.state.itemCurrentlyOnSale}
                        onChange={this.handleItermCurrentlyOnSaleChange} 
                        /> 
                    </div> 
                    : null}

                </div>
            </div>
        )
        
    }

}

export default HomePage