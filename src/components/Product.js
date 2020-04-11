import React from 'react';

const Product = ({ quantity, price, title, id, onAdd, onClose, onEdit }) => {
    let addButtonDisabled = quantity === 0 ? 'disabled' : '';

    return (
        <div className="raised card">
            <div className="content">
                <i onClick={() => onClose(id)} className="red right floated window close icon"></i>
                <div className="header">{title}</div>
                <div className="description">{`$${price}`}</div>
                <div className="description">{`${quantity} left in stock`}</div>
            </div>
            <div onClick={() => onAdd(id)} className={`olive ui bottom attached button ${addButtonDisabled}`}>
                    <i className="add icon"></i>
                    Add to Cart
            </div>
            <div onClick={() => onEdit(id)} className="ui bottom attached button">
                <i className="edit icon"></i>
                Edit
            </div>
        </div>
    )
}

export default Product;