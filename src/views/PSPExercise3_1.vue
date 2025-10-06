<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp3_1 from '../components/tutorials/PSP3_1.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp3_1" language="python" />
  </div>
</template>

<style scoped></style>
