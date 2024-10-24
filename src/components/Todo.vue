<template>
    <div class="d-flex justify-content-between w-50 mx-auto">
        <span class="w-50" :class="{completed: todo.completed}" @click="updateTodoStatus(todo)" style="cursor: pointer;">{{ todo.title }}</span>

        <button @click="deleteTodo(todo)" >Delete</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props:{
        todo:[Object],
    },
    methods:{
        ...mapActions({
            deleteTodo:'deleteTodo',
            updateTodoStatus:'updateTodoStatus'
        })
    }
}
</script>

<style>
.completed{
    text-decoration: line-through;
}
</style>