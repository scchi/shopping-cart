import React from 'react';
import Cart from './Cart';

class Header extends React.Component {
    render() {
        return (
            <div className="ui grid">
                <div className="column">
                    <h1 className="twelve wide column">The Shop!</h1>
                    <Cart className="four wide column" />
                </div>

            </div>
        )
    }
}

export default Header;
