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
  },
  {
    path: '/etgeo-particle-movement-in-air',
    name: 'ETGeo: Particle movement in air',
    component: () => import('../views/ETGeoParticleMovementInAir.vue')
  },
  {
    path: '/etgeo-planets',
    name: 'ETGeo: Planets',
    component: () => import('../views/ETGeoPlanets.vue')
  },
  {
    path: '/etgeo-volcanic-eruptions',
    name: 'ETGeo: Volcanic Eruptions',
    component: () => import('../views/ETGeoVolcanicEruptions.vue')
  },
  {
    path: '/eb2-intro-to-evolutionary-biology',
    name: 'EB2: Intro to Evolutionary Biology',
    component: () => import('../views/EB2IntroToEvolutionaryBiology.vue')
  },
  {
    path: '/psp-interactive-coding-template',
    name: 'PSP: Interactive Coding Template',
    component: () => import('../views/PSPInteractiveCodingTemplate.vue')
  },
  {
    path: '/psp-exercise-2-1',
    name: 'PSP: Coding Exercise 2.1',
    component: () => import('../views/PSPExercise2_1.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
