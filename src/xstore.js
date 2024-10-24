import { createStore } from 'vuex'

const store = createStore({
  state: {
    todos:[
        {
            title: "Todo item a",
            completed: false
        },
        {
            title: "Todo item b",
            completed: false
        }
    ]
  },
  getters: {
    completedTodo(state){
        return state.todos.filter(todo=>{
            return todo.completed === true
        }).length
    },
    pendingTodo(state){
        return state.todos.filter(todo=>{
            return todo.completed === false
        }).length
    }
  },
  mutations: {
    NEW_TODO(state, todoItem){
        state.todos.push({
            title: todoItem,
            completed: false
        })
    },
    DELETE_TODO(state, todoItem){
        let index = state.todos.indexOf(todoItem)
        state.todos.splice(index, 1)
    },
    UPDATE_TODO(state, todoItem){
        todoItem.completed = !todoItem.completed
    }
  },
  actions: {
    addNewTodo({commit}, todoItem){
        commit('NEW_TODO', todoItem)
    },
    deleteTodo({commit}, todoItem){
        commit('DELETE_TODO', todoItem)
    },
    updateTodoStatus({commit}, todoItem){
        commit('UPDATE_TODO', todoItem)
    }
  }
})

export default store
