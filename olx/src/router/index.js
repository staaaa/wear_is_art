import { createRouter, createWebHistory } from 'vue-router'
import Tshirts from '../views/Categories/Tshirts.vue'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
import Register from '../views/Register.vue'
import Product from '../views/Product.vue'
import Account from '../views/Account.vue'
import Admin from '../views/AdminPanel/Admin.vue'
import Home from '../views/Home.vue'
import Regulations from '../views/Regulations.vue'
import NotFound from '../views/NotFound.vue'
import Contact from '../views/Contact.vue'
import Cart from '../views/Cart.vue'
import Payment from '../views/Payment.vue';

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
      path: '/rejestracja',
      name: 'rejestracja',
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
      path: '/konto',
      name: 'konto',
      component: Account
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/regulamin',
      name: '/regulamin',
      component: Regulations,
    },
    {
      path: '/kontakt',
      name: '/kontakt',
      component: Contact,
    },
    {
      path: '/koszyk',
      name: '/koszyk',
      component: Cart,
    },
    {
      path: '/platnosc',
      name: '/platnosc',
      component: Payment,
    },
    //CATCH ALL MUSI BYC OSTATNIE
    { 
      path: "/:catchAll(.*)",
      component: NotFound, 
    }
  ]
})

export default router
