<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp2_1 from '../components/tutorials/PSP2_1.js';
</script>

<template>
  <div class="container mx-auto p-4 w-[1100px]">
    <CodeTutorial :tutorial="psp2_1" language="python" />
  </div>
</template>

<style scoped></style>
