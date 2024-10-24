<template>
    <ul class="navbar-nav">
        <li class="nav-item dropdown mr-auto">
            <a class="nav-link dropdown-toggle position-relative" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                Cart
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {{getTotalItem}}
                </span>
            </a>
            <div @click="$event.stopPropagation()" class="dropdown-menu mr-0 " style="right: 0; left: auto; min-width: 18rem;">
                <div class="d-flex justify-content-between p-3" v-for="item in getCartItem" :key="item.product.id">
                    <div>
                        <strong>{{ item.product.title }}</strong><br>
                        {{ item.quantity }} x RM{{ item.product.price }}
                    </div>
                    <div>
                        <a href="#" class="btn btn-danger btn-sm" @click="removeItemCart(item.product.id)">Remove</a>
                    </div>
                </div>
                <hr />
                <div class="d-flex justify-content-between p-3">
                    <span>Total: RM{{ getTotalPrice }}</span>
                    <a href="#" class="btn btn-danger btn-sm" @click="removeAllCart()">Clear Cart</a>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props:[
    ],
    computed:{
        getCartItem(){
            return this.$store.state.carts
        },
        getTotalPrice(){
            return this.$store.getters.countTotalPrice
        },
        getTotalItem(){
            return this.$store.getters.countTotalItem
        }
    },
    methods:{
        removeItemCart(itemId){
            return this.$store.dispatch('removeItemCart', itemId)
        },
        removeAllCart(){
            return this.$store.dispatch('removeAllCart')
        }
    },
    mounted(){
        this.$store.dispatch('getCart')
    }
}
</script>

<style scoped>

</style>