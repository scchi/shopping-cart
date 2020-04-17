let initialProducts = [
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

let nextId = 7;

export default (state=initialProducts, action) => {
  let filteredProducts
  let productId

  switch (action.type) {
    case 'DELETE_PRODUCT':
      productId = action.payload

      return state.filter( (product) => {
        return product.id !== productId;
      })
    
    case 'ADD_TO_CART':
      productId = action.payload

      let productToAdd = state.find( (product) => {
        return product.id === productId;
      })
      filteredProducts = state.filter( (product) => {
        return product.id !== productId;
      })

      let decrementedQuantity = {...productToAdd, quantity: productToAdd.quantity - 1}
      return [...filteredProducts, decrementedQuantity]
    
    case 'UPDATE_PRODUCT':
      let { id, title, price, quantity } = action.payload

      filteredProducts = state.filter( (product) => {
      return product.id !== id
      })

      let updatedProduct = { 
        id,
        title,
        price: Number(price),
        quantity: Number(quantity)
      }

      return [...filteredProducts, updatedProduct]

    case 'CREATE_PRODUCT':
      let newProduct = {
        ...action.payload,
        id: nextId
      }

      nextId += 1

      return [...state, newProduct]
    default:
      return state;
  }
}