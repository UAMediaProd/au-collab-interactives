<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp_tp2 from '../components/tutorials/PSP_TP2.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp_tp2" language="python" />
  </div>
</template>

<style scoped></style>
