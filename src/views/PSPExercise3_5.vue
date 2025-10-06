<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp3_5 from '../components/tutorials/PSP3_5.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp3_5" language="python" />
  </div>
</template>

<style scoped></style>
