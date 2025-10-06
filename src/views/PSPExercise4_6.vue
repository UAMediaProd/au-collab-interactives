<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp4_6 from '../components/tutorials/PSP4_6.js';
</script>

<template>
  <div class="container mx-auto p-4 w-[768px]">
    <CodeTutorial :tutorial="psp4_6" language="python" />
  </div>
</template>

<style scoped></style>
