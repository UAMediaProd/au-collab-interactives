<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp6_4 from '../components/tutorials/PSP6_4.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp6_4" language="python" />
  </div>
</template>

<style scoped></style>
