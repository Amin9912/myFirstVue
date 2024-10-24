<template>
    <div class="notification-custom">
        <NotificationMessage v-for="notification in notifications" :key="notification.id" :notification="notification"/>
    </div>
</template>

<script>
import NotificationMessage from './NotificationMessage.vue';
import { mapState } from 'vuex';
export default {
    components:{
        NotificationMessage
    },
    computed:{
        ...mapState(['notifications'])  
    },
}
</script>

<style >
.notification-custom{
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 1rem;
    width: 320px;
}
</style>