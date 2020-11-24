import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)
import filmRouter from '@/router/routes/film.js'
import cinema from '@/router/routes/cinema.js'
import center from '@/router/routes/center.js'
import detail from '@/router/routes/detail.js'
const routes = [
  {
    path: '/',
    redirect: '/film'
  },
  {
    path: '/city',
    component: () => import('./../views/city/city.vue'),
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

export default router
