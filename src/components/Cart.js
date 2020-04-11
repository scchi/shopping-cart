import React from 'react';

class Cart extends React.Component {
    cartProductsList() {
        let emptyCart = this.props.products.length === 0;

        let checkoutButtonDisabled = emptyCart ? 'disabled' : '';

        let cartProducts = this.props.products.map( (product) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                </tr>
            )
        })

        let totalPrice = this.props.products.reduce( (accum, currVal) => {
            return accum + (currVal.quantity * currVal.price)
        }, 0 )

        let productTable = (
            <table className="ui basic table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartProducts} 
                </tbody>
            </table>
        )

        return (
            <div>
                { emptyCart ? (<h3 className="ui right aligned header">Your cart is empty</h3>) : productTable}
                <h3 className="ui right aligned header">{`Total: $${totalPrice.toFixed(2)}`}</h3>
                <div onClick={() => this.props.onCheckout()} className={`yellow ui bottom attached button ${checkoutButtonDisabled}`}>
                            <i className="shopping cart icon"></i>
                            Checkout
                </div>
            </div>
            
        )
    }

    render() {
        return (
            <div>
                {this.cartProductsList()}
            </div>
        )
    }
}

export default Cart;