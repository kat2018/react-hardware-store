import React, { Component } from 'react'
import Product from './Product';

class ProductList extends Component {

    render() {
        console.log("Product List!!", this.props.productList)

        const productComponents = 
        this.props.productList.map((product, i) => {
            return <Product 
            key={i} 
            product={product}
            deleteProduct={this.props.deleteProduct}
            index={i} />
        })

        return (
            <div>
                {productComponents}
            </div>
        )
    }
}

export default ProductList