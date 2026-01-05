<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp0_2 from '../components/tutorials/PSP0_2.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp0_2" language="python" :show-boxes="false"/>
  </div>
</template>

<style scoped></style>
