import Vue from 'vue'
import VueRouter from 'vue-router'
import Feeds from '@/views/FeedPage/Feed'
import Login from '@/views/Login/Login'
import Account from '@/views/Account/Account'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Feeds',
    component: Feeds,
    meta: {
      auth: true
    }
  },
  {
    path: '/user',
    name: 'User',
    component: Account,
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      notUser: true,
      hidden: true
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = window.localStorage.getItem("access_token");
  if (to.path)
    if (to.matched.some((route) => route.meta.auth)) {
      if (!isAuthenticated) {
        return next({ name: "Login" });
      } else {
        return next();
      }
    } else if (to.matched.some((record) => record.meta.notUser)) {
      if (isAuthenticated) {
        return next({ name: "Feeds" });
      } else {
        return next();
      }
    }
  next();
})



export default router
