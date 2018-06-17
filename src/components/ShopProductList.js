import React, { Component } from 'react'
import ShopProduct from './ShopProduct';

class ShopProductList extends Component {

    render() {
        console.log("Shop Product List!!", this.props.shopProductList)

        const shopProductComponents = this.props.shopProductList.map((shopProduct, i) => {
            return <ShopProduct 
            key={i} 
            shopProduct={shopProduct}
            addToCart={this.props.addToCart}
            index={i} />
        })

        return (
            <div>
                {shopProductComponents}
            </div>
        )
    }
}

export default ShopProductList