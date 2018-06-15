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
        console.log(event)
    }
    
    render(){
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>Currently on Sale: {this.state.itemCurrentlyOnSale}!</div>
                <div>
                    <button onClick={this.toggleEditSaleItem}>
                        Edit Sale Item
                    </button>
                    
                    {this.state.itemCurrentlyOnSale 
                    ? <div> 
                        <input type="text" value={this.state.itemCurrentlyOnSale}/> 
                    </div> 
                    : null}

                </div>
            </div>
        )
        
    }

}

export default HomePage