import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/features',
    name: 'Features',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Features/Features.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
