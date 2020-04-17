import React from 'react';
import Product from './Product';
import ProductForm from './ProductForm';

class EditableProduct extends React.Component {
    state = {
        editing: false
    }

    toggleEdit = () => {
        this.setState({ editing: !this.state.editing })
    }

    render() {
        let { quantity, title, price, id } = this.props.product

        return (
            this.state.editing ?
            (<ProductForm 
                onCancel={this.toggleEdit}
                toggleEdit={this.toggleEdit}
                id={id} 
                quantity={quantity} 
                title={title} 
                price={price} 
            />)
            :
            (<Product
                key={id} 
                onEdit={this.toggleEdit} 
                id={id} 
                quantity={quantity} 
                title={title} 
                price={price} 
            />)
        )
    }               
}

export default EditableProduct;

