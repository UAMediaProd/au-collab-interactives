<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp7_2 from '../components/tutorials/PSP7_2.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp7_2" language="python" />
  </div>
</template>

<style scoped></style>
