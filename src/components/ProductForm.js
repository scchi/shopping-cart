import React from 'react';

const ProductForm = () => {
    return (
        <div className="ui large form">
            <div className="three fields">
                <div className="field">
                    <label>Product Name</label>
                    <input type="text"></input>
                </div>
                <div className="field">
                    <label>Price</label>
                    <input type="text"></input>
                </div>
                <div className="field">
                    <label>Quantity</label>
                    <input type="text"></input>
                </div>
            </div>
            <button className="ui olive button">Add</button>
            <button className="ui button">Cancel</button>
        </div>    
    )
}

export default ProductForm;