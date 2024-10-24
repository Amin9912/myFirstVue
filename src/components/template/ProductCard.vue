<template>
    <div class="card mb-3 mt-5">

        <Router-link class="h3 card-header link-underline link-underline-opacity-0" :to="{name: 'product', params: {id: product.id}}" >{{ product.title }}</Router-link>

        <img :src="product.image" alt="">
        <div class="card-body">
            <h5 class="card-title">RM {{ product.price }}</h5>
            <h6 class="card-subtitle text-muted">{{ product.description }}</h6>
            <button class="btn btn-primary btn-sm float-end mt-2" @click="addToCart">Add to cart</button>
        </div>
        <div class="card-footer text-muted">
            2 days ago
        </div>
    </div>
</template>

<script>
export default {
    props:[
        "product"
    ],
    methods:{
        addToCart(){
            this.$store.dispatch('addToCart',{
                product: this.product,
                quantity:1
            })
        }
    },
    mounted(){
        
    }
}
</script>

<style>

</style>