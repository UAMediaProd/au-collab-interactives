<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div class="flex flex-col justify-start">
      <div class="bg-primary m-0 min-h-[30px] py-4">
        <div class="home-wrapper"><img class="my-2" src="@/assets/au-logo.svg" width="160" alt="" /></div>
      </div>
      <div class="home-wrapper">
        <h3 class="mt-6 text-primary">AU Collab Interactives</h3>
        <p>Collab Interactives for AU work</p>

        <hr class="mt-4 mb-2" />
      </div>
      <div class="home-wrapper">
        <ul class="list-none mb-6">
          <li class="home-list-item">
            <i class="fas fa-circle text-[6px] my-auto align-middle mr-3" />
            <RouterLink to="/etgeo-particle-movement-in-fluids" class="home-router-link">ETGeo: Particle movement in fluids</RouterLink>
          </li>
          <li class="home-list-item">
            <i class="fas fa-circle text-[6px] my-auto align-middle mr-3" />
            <RouterLink to="/etgeo-particle-movement-in-air" class="home-router-link">ETGeo: Particle movement in air</RouterLink>
          </li>
          <li class="home-list-item">
            <i class="fas fa-circle text-[6px] my-auto align-middle mr-3" />
            <RouterLink to="/etgeo-planets" class="home-router-link">ETGeo: Planets</RouterLink>
          </li>
        </ul>
      </div>
    </div>



    <div class="bg-primary m-0 min-h-[100px] p-4 text-white">
      <div class="home-wrapper">
        <div class="flex my-4">
          <p class="my-auto">&copy; Adelaide University</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>