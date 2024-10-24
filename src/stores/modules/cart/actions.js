import Cart from '@/apis/Cart'

export const addToCart = (
  { commit, state, dispatch },
  { product, quantity }
) => {
  const itemExist = state.carts.find(
    carts => carts.id === product.id.toString()
  )
  if (itemExist) {
    itemExist.quantity += quantity
    Cart.update(itemExist.id, itemExist)
      .then(response => {
        dispatch('getCart')
        dispatch('addNotification',{
          type: 'success',
          message: 'Product add to cart successfully!'
        }, {root:true})
        //console.table(response.data)
      })
      .catch(error => {
        console.log(error)
        dispatch('addNotification',{
          type: 'danger',
          message: 'Product add to cart failed!'
        }, {root:true})
      })
  } else {
    Cart.add({ id: product.id, product, quantity }).then(response => {
      commit('ADD_PRODUCT', response.data)
      dispatch('addNotification',{
          type: 'success',
          message: 'New product add to cart successfully!'
        }, {root:true})
      //console.table(response.data)
    })
  }
}

export const getCart = ({ commit }) => {
  Cart.all().then(response => {
    commit('SET_CART', response.data)
  })
}

export const removeItemCart = ({ state, dispatch }, productId) => {
  const itemExist = state.carts.find(carts => carts.id === productId.toString())
  if (itemExist) {
    Cart.delete(itemExist.id)
      .then(response => {
        dispatch('getCart')
        dispatch('addNotification',{
          type: 'success',
          message: 'Product remove from cart successfully!'
        }, {root:true})
      })
      .catch(error => {
        console.log(error)
        dispatch('addNotification',{
          type: 'danger',
          message: 'Product remove from cart failed!'
        }, {root:true})
      })
  }
}

export const removeAllCart = ({ state, dispatch }) => {
  dispatch('getCart')

  let status = {message: "Action error!"}

  try {
    state.carts.forEach(cart => {
      Cart.delete(cart.id)
        .then(response => {
          console.log('Deleted: ' + response.data)
        })
        .finally(() => {
          dispatch('getCart')
        })
        status={
            type:"success",
            message: "Cart clear successfully!"
          }
    })
  } catch (error) {
    status={
            type:"danger",
            message: "Cart clear failed!"
          }
  }

  if(status.type === "success"){
    dispatch('addNotification',{
          type: status.type,
          message: status.message
        }, {root:true})
  }else{
    dispatch('addNotification',{
          type: 'danger',
          message: status.message
        }, {root:true})
  }
}
