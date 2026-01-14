<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp_p3q11 from '../components/tutorials/PSP_P3Q11.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp_p3q11" language="python" code-width="w-[60%]" data-boxes-width="w-[40%]"/>
  </div>
</template>

<style scoped></style>
