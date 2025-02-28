import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/etgeo-particle-movement-in-fluids',
    name: 'ETGeo: Particle movement in fluids',
    component: () => import('../views/ETGeoParticleMovementInFluids.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
