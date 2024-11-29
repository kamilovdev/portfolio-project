import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('../views/home.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/blogs.vue'),
    },
    {
      path: '/sub',
      name: 'subscripe',
      component: () => import('../views/sub.vue'),
    },
  ],
})

export default router
