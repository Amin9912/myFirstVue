export const countTotalPrice = state => {
  let price = 0
  state.carts.forEach(item => {
    price += item.quantity * item.product.price
  })

  return price
}

export const countTotalItem = state => {
  let total = state.carts.length

  return total
}
