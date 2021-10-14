import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SingleBlog from '../views/SingleBlog.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import UpdateBlog from '../views/UpdateBlog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path : '/blog/:id',
    name : 'blog',
    component : SingleBlog
  },
  {
    path : '/login',
    name : 'login',
    component : Login
  },
  {
    path : '/dashboard',
    name : 'dashboard',
    component: Dashboard
  },
  {
    path : '/update/blog/:id',
    name : 'updBlog',
    component : UpdateBlog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
