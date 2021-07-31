import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../apps/home/index.vue'
import SGX from '../apps/sgx/index.vue'
import TDX from '../apps/tdx/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tdx',
    name: 'TDX',
    component: TDX
  },
  {
    path: '/sgx',
    name: 'SGX',
    component: SGX
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
