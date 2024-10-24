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
import NavBar from "./components/layout/NavBar.vue";

export default{
  components:{  
    NavBar
  },
  computed:{
  }
}
</script>

<style scoped>

</style>
