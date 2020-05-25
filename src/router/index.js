import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'
import Detail from 'views/detail/Detail.vue'
import Category from 'views/category/Category.vue'
import Profile from 'views/profile/Profile.vue'
import ShopCart from 'views/shopcart/ShopCart.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    component: Home,
    meta:{
      showTabBar: true
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta:{
      showTabBar: false
    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      showTabBar: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      showTabBar: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta:{
      showTabBar: true
    }
  },
  {
    path: '/',
    redirect: '/home',
    meta:{
      showTabBar: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
