<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp7_4 from '../components/tutorials/PSP7_4.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp7_4" language="python" />
  </div>
</template>

<style scoped></style>
