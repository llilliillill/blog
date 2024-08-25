import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../pages/Main.vue'
import Blog from '../pages/Blog.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
