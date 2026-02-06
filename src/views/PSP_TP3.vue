<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp_tp3 from '../components/tutorials/PSP_TP3.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp_tp3" language="python" />
  </div>
</template>

<style scoped></style>
