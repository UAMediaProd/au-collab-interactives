<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp4_2 from '../components/tutorials/PSP4_2.js';
</script>

<template>
  <div class="container mx-auto p-4 m-w-[1024px]">
    <CodeTutorial :tutorial="psp4_2" language="python" />
  </div>
</template>

<style scoped></style>
