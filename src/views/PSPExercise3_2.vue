<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp3_2 from '../components/tutorials/PSP3_2.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp3_2" language="python" />
  </div>
</template>

<style scoped></style>
