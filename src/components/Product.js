import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct, addToCart } from '../actions';

class Product extends React.Component {
  render() {
    let { id, title, price, quantity, addToCart, deleteProduct, onEdit } = this.props 
    let addButtonDisabled = quantity === 0 ? 'disabled' : '';
    
    return (
      <div className="raised card">
        <div className="content">
          <i onClick={() => deleteProduct(id)} className="red right floated window close icon"></i>
          <div className="header">{title}</div>
          <div className="description">{`$${price}`}</div>
          <div className="description">{`${quantity} left in stock`}</div>
        </div>
        <div onClick={() => addToCart(id)} className={`olive ui bottom attached button ${addButtonDisabled}`}>
          <i className="add icon"></i>
          Add to Cart
        </div>
        <div onClick={() => onEdit(this.props.id)} className="ui bottom attached button">
          <i className="edit icon"></i>
          Edit
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return { }
}


export default connect(mapStateToProps, { deleteProduct, addToCart }) (Product);