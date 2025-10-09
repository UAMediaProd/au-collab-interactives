<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp6_5 from '../components/tutorials/PSP6_5.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp6_5" language="python" code-width="w-[55%]" data-boxes-width="w-[45%]" data-boxes-height="min-h-[52.2rem]"/>
  </div>
</template>

<style scoped></style>
