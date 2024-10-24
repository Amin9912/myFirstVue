<template>
    <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-3" v-for="product in products">
            <ProductCard :key="product.id" :product="product"/>
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
    components:{
        ProductCard
    },
    computed:{
        ...mapState('product',['products']),
    },
    methods: {
        ...mapActions('product', ['getProducts']) 
    },
    mounted() {
    this.getProducts(); 
    }
}
</script>

<style lang="scss" scoped>

</style>