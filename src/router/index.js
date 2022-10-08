import Vue from 'vue'
import VueRouter from 'vue-router'
import Feeds from '@/views/FeedPage/Feed'
import Login from '@/views/Login/Login'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Feeds',
    component: Feeds
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
