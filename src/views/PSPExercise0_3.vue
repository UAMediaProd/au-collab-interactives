<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp0_3 from '../components/tutorials/PSP0_3.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp0_3" language="python" code-width="w-[55%]" data-boxes-width="w-[45%]"/>
  </div>
</template>

<style scoped></style>
