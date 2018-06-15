import React, { Component } from 'react'
import Product from './Product';

class ProductList extends Component {

    render() {
        console.log("Product List!!", this.props.productList)

        const productComponents = this.props.productList.map((product, i) => {
            return <Product key={i} product={product} />
        })

        return (
            <div>
                {productComponents}
            </div>
        )
    }
}

export default ProductList