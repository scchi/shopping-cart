import React from 'react';
import EditableProduct from './EditableProduct';

class ProductList extends React.Component {
    productsList() {
        let products = this.props.products.map( (product) => {  
            return (
                <EditableProduct
                    key={product.id} 
                    product={product} 
                    onAdd={() => this.props.onAdd(product.id)}
                    onClose={() => this.props.onClose(product.id)}
                    onUpdate={this.props.onUpdate}
                />
            ) 
        })

        return (
            <div className="ui cards">
                {products}
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Products</h1>
                <ul>
                    {this.productsList()}
                </ul>
            </div>
        ) 
    }
}

export default ProductList;
