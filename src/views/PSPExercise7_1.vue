<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp7_1 from '../components/tutorials/PSP7_1.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp7_1" language="python" />
  </div>
</template>

<style scoped></style>
