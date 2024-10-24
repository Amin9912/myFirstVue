<template>
    <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-3" v-for="product in products">
            <ProductCard :key="product.id" :product="product"/>
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
    components:{
        ProductCard
    },
    computed:{
        products(){
            return this.$store.state.products
        }
    },
    mounted(){
        this.$store.dispatch('getProducts')
    }
}
</script>

<style lang="scss" scoped>

</style>