import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'
import Category from 'views/category/Category.vue'
import Profile from 'views/profile/Profile.vue'
import ShopCart from 'views/shopcart/ShopCart.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/',
    redirect: '/home'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
