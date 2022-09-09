import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
import Register from '../views/Register.vue'
import Product from '../views/Product.vue'
import Account from '../views/Account.vue'
import Admin from '../views/AdminPanel/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: Product
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    }
  ]
})

export default router
