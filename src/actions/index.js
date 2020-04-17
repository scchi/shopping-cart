export const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: id
  }
}

export const addToCart = (id) => {
  return {
    type: 'ADD_TO_CART',
    payload: id
  }
}

export const updateProduct = (updateDetails) => {
  return {
    type: 'UPDATE_PRODUCT',
    payload: updateDetails
  }
}

export const createProduct = (newProductDetails) => {
  return {
    type: 'CREATE_PRODUCT',
    payload: newProductDetails
  }
}