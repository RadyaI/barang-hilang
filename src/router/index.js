import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// USER (HARUS lOGIN)
import registerBarang from '@/views/user/registerBarang.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user/barang/register',
    component: registerBarang
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
