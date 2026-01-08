<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp_p5q05 from '../components/tutorials/PSP_P5Q05.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp_p5q05" language="python" code-width="w-[72%]" data-boxes-width="w-[28%]"/>
  </div>
</template>

<style scoped></style>
