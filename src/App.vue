<template>
  <!-- <div class="container text-center">
    <h1>Todos</h1>
    <h3>Completed: {{ completedTodo }}</h3>
    <h3>Pending: {{ pendingTodo }}</h3>
    <Todoslist />
    <TodoForm />
  </div> -->
  <header>
    <NavBar />
  </header>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Todoslist from './components/TodosList.vue'
import TodoForm from './components/TodoForm.vue'
import NavBar from "./components/layout/NavBar.vue";

export default{
  components:{  
    Todoslist,TodoForm, NavBar
  },
  computed:{
    ...mapGetters({
      completedTodo:'completedTodo',
      pendingTodo:'pendingTodo'
    })
  }
}
</script>

<style scoped>

</style>
