import React from 'react'
import ProductList from './ProductList';
// import Header from './Header';
import NewProductForm from './NewProductForm';


class App extends React.Component {
  // getNewCartState = (productId) => {
  //   let productExistsInCart = !!(this.state.cart.find( (product) => {
  //     return product.id === productId;
  //   }));

  //   let productToAdd
  //   let newQuantity

  //   if (productExistsInCart) {
  //     productToAdd = this.state.cart.find( (product) => {
  //       return product.id === productId;
  //     })
  //     newQuantity = productToAdd.quantity + 1;
  //   } else {
  //     productToAdd = this.state.products.find( (product) => {
  //       return product.id === productId;
  //     })
  //     newQuantity = 1
  //   }
    
  //   let filteredCartList = this.state.cart.filter( (product) => {
  //     return product.id !== productId;
  //   })
    
  //   return [...filteredCartList, { ...productToAdd, quantity: newQuantity }]
  // }

  // handleCheckout = () => {
  //   this.setState({
  //     cart: []
  //   })
  // }
    
  render() {
    return (
      <div className="ui container">
        {/* <div className="ui segment">
          <Header products={this.state.cart} onCheckout={this.handleCheckout}/>
        </div> */}
        <div className="ui segment">
          <ProductList  />
        </div>
        <div className="ui segment padded center aligned grid">
          <NewProductForm />
        </div>
      </div>
    )
  }   
}

export default App;