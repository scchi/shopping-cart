import React from 'react';
import { connect } from 'react-redux';
import EditableProduct from './EditableProduct';

class ProductList extends React.Component {
  productsList() {
    let products = this.props.products.map( (product) => {  
      return (
        <EditableProduct
          key={product.id} 
          product={product} 
        />
      ) 
    })

    return (
      <div className="ui cards">
        {products}
      </div>
    )
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

const mapStateToProps = (state) => {
  return { products: state.products }
}

export default connect(mapStateToProps) (ProductList);
