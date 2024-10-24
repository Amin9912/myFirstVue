export const SET_CART = (state, items) => {
  state.carts = items
}

export const ADD_PRODUCT = (state, product) => {
  state.carts.push(product)
}

export const REMOVE_PRODUCT_CART = (state, productId) => {
  const productIndex = state.carts.findIndex(
    carts => carts.product.id === productId
  )
  console.log(productIndex)
  if (productIndex !== -1) {
    state.carts.splice(productIndex, 1)
  }
}

export const REMOVE_ALL_CART = state => {
  state.carts = []
}
