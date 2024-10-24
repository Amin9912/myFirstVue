<template>
    <div class="alert alert-dismissible" :class="typeClass">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <p class="mb-0">{{ notification.message }}</p>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data(){
        return {
            timeout: null
        }
    },
    props:[
        "notification"
    ],
    computed:{
        typeClass(){
            return `alert-${this.notification.type}`
        }
    },
    created(){
        this.timeout = setTimeout(()=>{
            this.removeNotification(this.notification)
        },3000)
    },
    beforeDestroy() {
        clearTimeout(this.timeout)
    },
    methods:{
        ...mapActions(["removeNotification"])
    }
}
</script>

<style>
</style>