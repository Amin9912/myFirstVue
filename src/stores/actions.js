import axios from 'axios'
import Product from '@/apis/Product'
import Cart from '@/apis/Cart'

//list product (home module)
export const getProducts = ({commit}) =>{
    Product.all().then(response=>{
        commit('SET_PRODUCTS', response.data)
    })
}

export const getProduct = ({ commit }, productId) => {

  Product.get(productId).then(response => {
    commit('SET_PRODUCT', response.data)
  })
}

//cart module
export const addToCart = ({ commit, state, dispatch }, {product, quantity}) => {
  
  const itemExist = state.carts.find(carts => carts.id === product.id.toString())
  if(itemExist){
    itemExist.quantity += quantity
    Cart.update(itemExist.id, itemExist).then(response=>{
      dispatch('getCart')
      //console.table(response.data)
    }).catch(error=>{
      console.log(error)
    })

  }else{
    Cart.add({"id":product.id, product, quantity}).then(response => {
      commit('ADD_PRODUCT', response.data)
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
  if(itemExist){
    Cart.delete(itemExist.id).then(response=>{
      dispatch('getCart')
    }).catch(error=>{
      console.log(error)
    })
  }
}

export const removeAllCart = ({ state, dispatch }) => {

  dispatch('getCart')

  state.carts.forEach(cart => {
    Cart.delete(cart.id).then(response=>{
      console.log("Deleted: "+ response.data)
    }).catch(error=>{
      console.log(error)
    }).finally(()=>{
      dispatch('getCart')
    })
  });
}
