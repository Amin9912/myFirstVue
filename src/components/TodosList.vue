<template>
    <div class="mx-auto">
        <Todo v-for="(todo, index) in todos" :key="index" :todo="todo" />
    </div>
</template>

<script>
import { mapState } from "vuex"
import Todo from "./Todo.vue"
export default {
    components:{
        Todo
    },
    computed:{
        ...mapState({
            todos:'todos'
        }),
    }
}
</script>