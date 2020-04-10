import React from 'react';

class ProductList extends React.Component {
    productsList() {
        let products = this.props.products.map( (product) => {
            
            let disabled = '';
            
            if (product.quantity === 0) {
                disabled = 'disabled';
            }

            return (
                <div key={product.id} className="raised card">
                    <div className="content">
                        <i onClick={this.props.onClose} className="red right floated window close icon"></i>
                        <div className="header">{product.title}</div>
                        <div className="description">{`$${product.price}`}</div>
                        <div className="description">{`${product.quantity} left in stock`}</div>
                    </div>
                    <div onClick={() => this.props.onAdd(product.id)} className={`olive ui bottom attached button ${disabled}`}>
                            <i className="add icon"></i>
                            Add to Cart
                    </div>
                    <div onClick={this.onEdit} className="ui bottom attached button">
                        <i className="edit icon"></i>
                        Edit
                    </div>
                </div>
            )
        })

        return (
            <div className="ui cards">
                {products}
            </div>
        )
    }

    onEdit(e) {
        console.log('editing')
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

// return (
//     <div className="item" key={song.title} >
//         <div className="right floated content">
//             <button 
//                 className="ui button primary"
//                 onClick={() => this.props.selectSong(song)}>
//                 Select
//             </button>
//         </div>

//         <div className="content">{song.title}</div>
//     </div>
// );