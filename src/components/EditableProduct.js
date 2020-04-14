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

    onUpdate = (state) => {
        this.toggleEdit()
        this.props.onUpdate(state)
    }

    render() {
        let { quantity, title, price, id } = this.props.product

        return (
            this.state.editing ?
            (<ProductForm 
                onEditClose={this.toggleEdit}
                onUpdate={this.onUpdate}
                id={id} 
                quantity={quantity} 
                title={title} 
                price={price} 
            />)
            :
            (<Product
                key={id} 
                onAdd={this.props.onAdd}
                onClose={this.props.onClose}
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

