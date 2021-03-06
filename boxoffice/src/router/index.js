import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)
import filmRouter from '@/router/routes/film.js'
import cinema from '@/router/routes/cinema.js'
import center from '@/router/routes/center.js'
import detail from '@/router/routes/detail.js'
// import store from '../store'
import store from './../store/index'
const routes = [
  {
    path: '/',
    redirect: '/film'
  },
  {
    path: '/city',
    component: () => import('./../views/city/city.vue'),
  },
  {
    path: '/login',
    component: () => import('./../views/login/login.vue'),
  },
  {
    path: '/zhuce',
    component: () => import('./../views/login/zhuce.vue'),
  },
  filmRouter,
  center,
  cinema,
  detail

  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//全局路由守卫
router.beforeEach((to, from, next) => {
  let arr = ['/center']
  if (arr.includes(to.path)) {
    if (store.state.usermobile) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})
export default router
