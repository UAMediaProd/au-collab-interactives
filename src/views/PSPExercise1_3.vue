<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp1_3 from '../components/tutorials/PSP1_3.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp1_3" language="python" />
  </div>
</template>

<style scoped></style>
