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
    path: '/psp-exercise-1-1',
    name: 'PSP: Coding Exercise 1.1',
    component: () => import('../views/PSPExercise1_1.vue')
  },
  {
    path: '/psp-exercise-1-2',
    name: 'PSP: Coding Exercise 1.2',
    component: () => import('../views/PSPExercise1_2.vue')
  },
  {
    path: '/psp-exercise-1-3',
    name: 'PSP: Coding Exercise 1.3',
    component: () => import('../views/PSPExercise1_3.vue')
  },
  {
    path: '/psp-exercise-2-1',
    name: 'PSP: Coding Exercise 2.1',
    component: () => import('../views/PSPExercise2_1.vue')
  },
  {
    path: '/psp-exercise-2-2',
    name: 'PSP: Coding Exercise 2.2',
    component: () => import('../views/PSPExercise2_2.vue')
  },
  {
    path: '/psp-exercise-3-1',
    name: 'PSP: Coding Exercise 3.1',
    component: () => import('../views/PSPExercise3_1.vue')
  },
  {
    path: '/psp-exercise-3-2',
    name: 'PSP: Coding Exercise 3.2',
    component: () => import('../views/PSPExercise3_2.vue')
  },
  {
    path: '/psp-exercise-3-3',
    name: 'PSP: Coding Exercise 3.3',
    component: () => import('../views/PSPExercise3_3.vue')
  },
  {
    path: '/psp-exercise-3-4',
    name: 'PSP: Coding Exercise 3.4',
    component: () => import('../views/PSPExercise3_4.vue')
  },
  {
    path: '/psp-exercise-3-5',
    name: 'PSP: Coding Exercise 3.5',
    component: () => import('../views/PSPExercise3_5.vue')
  },
  {
    path: '/psp-exercise-3-6',
    name: 'PSP: Coding Exercise 3.6',
    component: () => import('../views/PSPExercise3_6.vue')
  },
  {
    path: '/psp-exercise-3-7',
    name: 'PSP: Coding Exercise 3.7',
    component: () => import('../views/PSPExercise3_7.vue')
  },
  {
    path: '/psp-exercise-4-1',
    name: 'PSP: Coding Exercise 4.1',
    component: () => import('../views/PSPExercise4_1.vue')
  },
  {
    path: '/psp-exercise-4-2',
    name: 'PSP: Coding Exercise 4.2',
    component: () => import('../views/PSPExercise4_2.vue')
  },
  {
    path: '/psp-exercise-4-3',
    name: 'PSP: Coding Exercise 4.3',
    component: () => import('../views/PSPExercise4_3.vue')
  },
  {
    path: '/psp-exercise-4-4',
    name: 'PSP: Coding Exercise 4.4',
    component: () => import('../views/PSPExercise4_4.vue')
  },
  {
    path: '/psp-exercise-4-5',
    name: 'PSP: Coding Exercise 4.5',
    component: () => import('../views/PSPExercise4_5.vue')
  },
  {
    path: '/psp-exercise-4-6',
    name: 'PSP: Coding Exercise 4.6',
    component: () => import('../views/PSPExercise4_6.vue')
  },
  {
    path: '/psp-exercise-5-1',
    name: 'PSP: Coding Exercise 5.1',
    component: () => import('../views/PSPExercise5_1.vue')
  },
  {
    path: '/psp-exercise-5-2',
    name: 'PSP: Coding Exercise 5.2',
    component: () => import('../views/PSPExercise5_2.vue')
  },
  {
    path: '/psp-exercise-5-3',
    name: 'PSP: Coding Exercise 5.3',
    component: () => import('../views/PSPExercise5_3.vue')
  },
  {
    path: '/psp-exercise-5-4',
    name: 'PSP: Coding Exercise 5.4',
    component: () => import('../views/PSPExercise5_4.vue')
  },
  {
    path: '/psp-exercise-6-1',
    name: 'PSP: Coding Exercise 6.1',
    component: () => import('../views/PSPExercise6_1.vue')
  },
  {
    path: '/psp-exercise-6-2',
    name: 'PSP: Coding Exercise 6.2',
    component: () => import('../views/PSPExercise6_2.vue')
  },
  {
    path: '/psp-exercise-6-3',
    name: 'PSP: Coding Exercise 6.3',
    component: () => import('../views/PSPExercise6_3.vue')
  },
  {
    path: '/psp-exercise-6-4',
    name: 'PSP: Coding Exercise 6.4',
    component: () => import('../views/PSPExercise6_4.vue')
  },
  {
    path: '/psp-exercise-6-5',
    name: 'PSP: Coding Exercise 6.5',
    component: () => import('../views/PSPExercise6_5.vue')
  },
  {
    path: '/psp-exercise-6-6',
    name: 'PSP: Coding Exercise 6.6',
    component: () => import('../views/PSPExercise6_6.vue')
  },
  {
    path: '/psp-exercise-7-1',
    name: 'PSP: Coding Exercise 7.1',
    component: () => import('../views/PSPExercise7_1.vue')
  },
  {
    path: '/psp-exercise-7-2',
    name: 'PSP: Coding Exercise 7.2',
    component: () => import('../views/PSPExercise7_2.vue')
  },
  {
    path: '/psp-exercise-7-3',
    name: 'PSP: Coding Exercise 7.3',
    component: () => import('../views/PSPExercise7_3.vue')
  },
  {
    path: '/psp-exercise-7-4',
    name: 'PSP: Coding Exercise 7.4',
    component: () => import('../views/PSPExercise7_4.vue')
  },
  {
    path: '/psp-exercise-0-1',
    name: 'PSP: Coding Exercise 0.1',
    component: () => import('../views/PSPExercise0_1.vue')
  },
  {
    path: '/psp-exercise-0-2',
    name: 'PSP: Coding Exercise 0.2',
    component: () => import('../views/PSPExercise0_2.vue')
  },
  {
    path: '/psp-exercise-0-3',
    name: 'PSP: Coding Exercise 0.3',
    component: () => import('../views/PSPExercise0_3.vue')
  },
  {
    path: '/psp-exercise-0-4',
    name: 'PSP: Coding Exercise 0.4',
    component: () => import('../views/PSPExercise0_4.vue')
  },
  {
    path: '/psp-p2q14',
    name: 'PSP: Prac 2 Question 14',
    component: () => import('../views/PSP_P2Q14.vue')
  },
  {
    path: '/psp-p3q11',
    name: 'PSP: Prac 3 Question 11',
    component: () => import('../views/PSP_P3Q11.vue')
  },
  {
    path: '/psp-p3q12',
    name: 'PSP: Prac 3 Question 12',
    component: () => import('../views/PSP_P3Q12.vue')
  },
  {
    path: '/psp-p4q11',
    name: 'PSP: Prac 4 Question 11',
    component: () => import('../views/PSP_P4Q11.vue')
  },
  {
    path: '/psp-p4q13',
    name: 'PSP: Prac 4 Question 13',
    component: () => import('../views/PSP_P4Q13.vue')
  },
  {
    path: '/psp-p5q05',
    name: 'PSP: Prac 5 Question 5',
    component: () => import('../views/PSP_P5Q05.vue')
  },
  {
    path: '/psp-p5q06',
    name: 'PSP: Prac 5 Question 6',
    component: () => import('../views/PSP_P5Q06.vue')
  },
  {
    path: '/psp-p5q07',
    name: 'PSP: Prac 5 Question 7',
    component: () => import('../views/PSP_P5Q07.vue')
  },
  {
    path: '/psp-p6q08',
    name: 'PSP: Prac 6 Question 8',
    component: () => import('../views/PSP_P6Q08.vue')
  },
  {
    path: '/psp-p6q09',
    name: 'PSP: Prac 6 Question 9',
    component: () => import('../views/PSP_P6Q09.vue')
  },
  {
    path: '/psp-p6q10',
    name: 'PSP: Prac 6 Question 10',
    component: () => import('../views/PSP_P6Q10.vue')
  },
  {
    path: '/psp-p7q07',
    name: 'PSP: Prac 7 Question 7',
    component: () => import('../views/PSP_P7Q07.vue')
  },
  {
    path: '/psp-p7q08',
    name: 'PSP: Prac 7 Question 8',
    component: () => import('../views/PSP_P7Q08.vue')
  },
  {
    path: '/psp-p7q13',
    name: 'PSP: Prac 7 Question 13',
    component: () => import('../views/PSP_P7Q13.vue')
  },
  {
    path: '/psp-tp1',
    name: 'PSP: Team Problem 1 (Two-up)',
    component: () => import('../views/PSP_TP1.vue')
  },
  {
    path: '/psp-tp2',
    name: 'PSP: Team Problem 2 (Craps)',
    component: () => import('../views/PSP_TP2.vue')
  },
  {
    path: '/psp-tp3',
    name: 'PSP: Team Problem 3 (Caesar Cipher)',
    component: () => import('../views/PSP_TP3.vue')
  },
  {
    path: '/psp-tp4',
    name: 'PSP: Team Problem 4 (Crack the Code)',
    component: () => import('../views/PSP_TP4.vue')
  },
  {
    path: '/psp-tp5',
    name: 'PSP: Team Problem 5 (Credit Card Validation)',
    component: () => import('../views/PSP_TP5.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
