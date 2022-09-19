import { createRouter, createWebHistory } from 'vue-router'
import Tshirts from '../views/Categories/Tshirts.vue'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
import Register from '../views/Register.vue'
import Product from '../views/Product.vue'
import Account from '../views/Account.vue'
import Admin from '../views/AdminPanel/Admin.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: Home
    },
    {
      path: '/t-shirt',
      name: 't-shirt',
      component: Tshirts
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
      path: '/:category/produkt/:productId',
      name: 'produkt',
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
