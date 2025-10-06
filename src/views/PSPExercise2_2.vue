<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp2_2 from '../components/tutorials/PSP2_2.js';
</script>

<template>
  <div class="container mx-auto p-4 w-[768px]">
    <CodeTutorial :tutorial="psp2_2" language="python" />
  </div>
</template>

<style scoped></style>
