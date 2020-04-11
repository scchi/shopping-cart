import React from 'react';
import Product from './Product'

class EditableProduct extends React.Component {
    state = {
        editing: false
    }

    handleEdit(e) {
        console.log('editing')
    }

    render() {
        let { quantity, title, price, id } = this.props.product
        return (
            <Product
                key={id} 
                onAdd={() => this.props.onAdd(id)}
                onClose={() => this.props.onClose(id)}
                onEdit={this.handleEdit} 
                id={id} 
                quantity={quantity} 
                title={title} 
                price={price} 
            />
        )
    }               
}

export default EditableProduct;

