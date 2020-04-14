import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

class NewProductForm extends React.Component {
  state = {
    open: false,
    title: '',
    quantity: null,
    price: null
  }

  show = () => this.setState({ open: true })
  
  close = () => this.setState({ 
    open: false,
    title: '',
    quantity: null,
    price: null
  })

  handleTitleChange = (e) => {
    this.setState({
        title: e.target.value 
    })
  }

  handlePriceChange = (e) => {
    this.setState({
        price: Number(e.target.value)
    })
  }

  handleQuantityChange = (e) => {
    this.setState({
        quantity: Number(e.target.value)
    })
  }

  onNewProduct = () => {
      let newProductDetails = { 
          title: this.state.title,
          quantity: this.state.quantity,
          price: this.state.price
        }

      this.props.onNewProduct(newProductDetails)
      this.close()
  }

  render() {
    const { open } = this.state

    return (
      <div>
        <Button className="circular ui icon olive button center" onClick={this.show}><i className="plus icon"></i></Button>

        <Modal size="mini" open={open} onClose={this.close}>
          <Modal.Header>Add New Product</Modal.Header>
          <Modal.Content>
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
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={this.onNewProduct}
              positive
              icon='plus'
              labelPosition='right'
              content='Add'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default NewProductForm;