import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'
import Detail from 'views/detail/Detail.vue'
import Category from 'views/category/Category.vue'
import Profile from 'views/profile/Profile.vue'
import ShopCart from 'views/shopcart/ShopCart.vue'
import Login from 'views/login/Login.vue'

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
      showTabBar: true,
      requireAuth: true
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
    path: '/login',
    component: Login,
    meta:{
      showTabBar: false
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

router.beforeEach((to, from, next) => {
  if(from.name == "Login"){ // 如果不需要权限校验，直接进入路由界面
    next();
  }else if(to.meta.requireAuth){
    // 判断该路由是否需要登录权限
    if (localStorage.getItem("Authorization")) {  // 获取当前的token是否存在
      console.log("token存在");
      next();
    } else {
      alert('请登录后再访问')
      console.log("token不存在");
      next({
        path: '/login', // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query: {redirect: to.fullPath}
      })
    }
  }else { // 如果不需要权限校验，直接进入路由界面
    next();
  }
})

export default router
