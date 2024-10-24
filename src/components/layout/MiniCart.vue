<template>
    <ul class="navbar-nav">
        <li class="nav-item dropdown mr-auto">
            <a class="nav-link dropdown-toggle position-relative" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                Cart
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {{countTotalItem}}
                </span>
            </a>
            <div @click="$event.stopPropagation()" class="dropdown-menu mr-0 " style="right: 0; left: auto; min-width: 18rem;">
                <div class="d-flex justify-content-between p-3" v-for="item in carts" :key="item.product.id">
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
                    <span>Total: RM{{ countTotalPrice }}</span>
                    <a href="#" class="btn btn-danger btn-sm" @click="removeAllCart">Clear Cart</a>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
    props:[
    ],
    computed:{
        ...mapState("cart", ["carts"]),
        ...mapGetters("cart", ["countTotalPrice", "countTotalItem"])
    },
    methods: {
        ...mapActions("cart", ["removeItemCart", "removeAllCart", "getCart"]),

        removeItem(itemId) {
            this.removeItemCart(itemId);
        }
    },
    mounted() {
        this.getCart(); 
    }
}
</script>

<style scoped>

</style>