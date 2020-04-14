import React from 'react';

class ProductForm extends React.Component {
    state = {
        title: this.props.title,
        id: this.props.id,
        quantity: this.props.quantity,
        price: this.props.price
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value 
        })
    }

    handlePriceChange = (e) => {
        this.setState({
            price: e.target.value 
        })
    }

    handleQuantityChange = (e) => {
        this.setState({
            quantity: e.target.value 
        })
    }

    render() {
        return(
            <div className="raised card">
                <div className="ui form">

                    <div className="field">
                        <label>Product Name</label>
                        <input 
                            type="text" 
                            onChange={this.handleTitleChange} 
                            value={this.state.title}
                            placeholder={this.state.title} 
                        />
                    </div>

                    <div className="two fields">
                        <div className="field">
                            <label>Price</label> 
                            <input 
                                type="text"
                                onChange={this.handlePriceChange}
                                placeholder={this.state.price} 
                            />
                        </div>
                        <div className="field">
                            <label>Quantity</label>
                            <input 
                                type="text"
                                onChange={this.handleQuantityChange}
                                placeholder={this.state.quantity}
                            />
                        </div>
                    </div>
                    
                    <div onClick={() => this.props.onUpdate(this.state)} className={`olive ui bottom attached button`}>
                        <i className="edit icon"></i>
                        Update
                    </div>
                    <div onClick={() => this.props.onEditClose()} className="ui bottom attached button">
                        <i className="window close icon"></i>
                        Cancel
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductForm;