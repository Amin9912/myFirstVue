<template>
    <div class="row mt-5">
        <div class="col-sm-12 col-lg-4">
            <img class="image-fluid w-100" :src="product.image" alt="">
        </div>
        <div class="col-sm-12 col-lg-8">
            <div class="card border-light mb-3">
                <div class="card-header">{{ product.title }}</div>
                <div class="card-body">
                    <h4 class="card-title">{{ product.price }}</h4>
                    <p class="card-text">{{ product.description }}</p>
                </div>
                <div class="card-body">
                    <div class="input-group mb-3 w-50 float-end">
                        <input type="number" class="form-control" placeholder="Select Total" aria-label="Select Total" aria-describedby="button-addon2" v-model="quantity" min="1" required>
                        <button class="btn btn-primary" type="button" id="button-addon2" @click="onAddToCart">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
    data(){
        return{
            quantity: 1,
        }
    },
    props:[
        "id"
    ],
    computed: {
        ...mapState("product",["product"])
    },
    methods:{
        ...mapActions("cart", ["addToCart"]),
        ...mapActions("product", ["getProduct"]),
        onAddToCart(){
            this.addToCart({
                product: this.product,
                quantity: this.quantity
            })
        }
    },
    mounted(){
        this.getProduct(this.id)
    }
}
</script>

<style>

</style>