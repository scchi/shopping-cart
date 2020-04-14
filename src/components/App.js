import React from 'react'
import ProductList from './ProductList';
import Header from './Header';
import NewProductForm from './NewProductForm';

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
];

let cart = [
  {
    id: 4,
    title: 'Tinker, Tailor, Soldier, Spy - A John le Carre Novel',
    quantity: 12,
    price: 13.74
  },
  {
    id: 5,
    title: 'Libro',
    quantity: 3,
    price: 10.75
  }
];

class App extends React.Component {
  state = { products, cart, nextId: 6 }

  handleAdd = (productId) => {
    let newProductsState = this.getNewProductsState(productId)
    let newCartState = this.getNewCartState(productId)
    
    this.setState({
      products: newProductsState,
      cart: newCartState
    })
  }

  getNewProductsState = (productId) => {
    let productToAdd = this.state.products.find( (product) => {
      return product.id === productId;
    })

    let filteredProductList = this.state.products.filter( (product) => {
      return product.id !== productId;
    })

    let decrementedQuantity = {...productToAdd, quantity: productToAdd.quantity - 1}
    return [...filteredProductList, decrementedQuantity]
  }

  getNewCartState = (productId) => {
    let productExistsInCart = !!(this.state.cart.find( (product) => {
      return product.id === productId;
    }));

    let productToAdd
    let newQuantity

    if (productExistsInCart) {
      productToAdd = this.state.cart.find( (product) => {
        return product.id === productId;
      })
      newQuantity = productToAdd.quantity + 1;
    } else {
      productToAdd = this.state.products.find( (product) => {
        return product.id === productId;
      })
      newQuantity = 1
    }
    
    let filteredCartList = this.state.cart.filter( (product) => {
      return product.id !== productId;
    })
    
    return [...filteredCartList, { ...productToAdd, quantity: newQuantity }]
  }

  handleClose = (productId) => {
    let filteredProducts = this.state.products.filter( (product) => {
      return product.id !== productId;
    })

    this.setState({
      products: [...filteredProducts]
    })
  }

  handleCheckout = () => {
    this.setState({
      cart: []
    })
  }

  handleUpdate = ({id, title, price, quantity}) => {
    let filteredProducts = this.state.products.filter( (product) => {
      return product.id !== id
    })

    let updatedProduct = { 
      id,
      title,
      price: Number(price),
      quantity: Number(quantity)
    }

    this.setState({
      products: [...filteredProducts, updatedProduct]
    })
  }

  handleNewProduct = (newProductDetails) => {
    let newProduct = {
      ...newProductDetails,
      id: this.state.nextId
    }

    this.setState({
      products: [...this.state.products, newProduct],
      nextId: this.state.nextId + 1
    })
  }
    
  render() {
    return (
      <div className="ui container">
        <div className="ui segment">
          <Header products={this.state.cart} onCheckout={this.handleCheckout}/>
        </div>
        <div className="ui segment">
          <ProductList 
            products={this.state.products} 
            onAdd={this.handleAdd} 
            onClose={this.handleClose}
            onUpdate={this.handleUpdate}  
          />
        </div>
        <div className="ui segment padded center aligned grid">
          <NewProductForm onNewProduct={this.handleNewProduct}/>
        </div>

      </div>
    )
  }   
}

export default App;