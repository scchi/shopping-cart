import React from 'react'
import ProductList from './ProductList';
import Header from './Header';
import ProductForm from './ProductForm';
// import ProductForm from './ProductForm';

let products = [
  {
    id: 1,
    title: 'Amazon Kindle E-reader',
    quantity: 5,
    price: 79.99
  },
  {
    id: 2,
    title: 'Apple 10.5-Inch iPad Pro',
    quantity: 3,
    price: 649.99
  },
  {
    id: 3,
    title: 'Yamaha Portable Keyboard',
    quantity: 2,
    price: 155.99
  },
  {
    id: 4,
    title: 'Tinker, Tailor, Soldier, Spy - A John le Carre Novel',
    quantity: 12,
    price: 13.74
  }
]

let cart = [];

class App extends React.Component {
  state = { products, cart }

  handleAdd = (productId) => {
    let filteredProductList = this.state.products.filter( (product) => {
      return product.id !== productId;
    })

    let [productToAdd] = this.state.products.filter( (product) => {
      return product.id === productId;
    })

    let decrementedQuantity = {...productToAdd, quantity: productToAdd.quantity - 1}

    console.log([...filteredProductList, decrementedQuantity])
    
    this.setState({
      products: [...filteredProductList, decrementedQuantity]
    })

  }

  handleClose() {
    console.log('close')
  }
    
  render() {
    return (
      <div className="ui container">
        <div className="ui segment">
          <Header />
        </div>
        <div className="ui segment">
          <ProductList products={this.state.products} onAdd={this.handleAdd} onClose={this.handleClose}/>
        </div>
        <div className="ui segment">
          <ProductForm />
        </div>

      </div>
    )
  }   
}

export default App;