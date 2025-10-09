<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp4_1 from '../components/tutorials/PSP4_1.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp4_1" language="python" code-width="w-[60%]" data-boxes-width="w-[40%]" />
  </div>
</template>

<style scoped></style>
