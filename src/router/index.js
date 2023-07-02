import Vue from 'vue'
import VueRouter from 'vue-router'
import NxLogin from '../components/Login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: NxLogin
  },
  {
    path: '/browse',
    name: 'browse',
    component: NxLogin
  }
]

const router = new VueRouter({
  routes
})

export default router
