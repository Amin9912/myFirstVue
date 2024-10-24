//import './assets/main.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootswatch/dist/lux/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import { createWebHistory, createRouter } from 'vue-router'
import store from './stores'

const app = createApp(App)
const router = createRouter({
  routes,
  history: createWebHistory(),
})

app.use(store)
app.use(router)

app.mount('#app')

