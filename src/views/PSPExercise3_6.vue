<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp3_6 from '../components/tutorials/PSP3_6.js';
</script>

<template>
  <div class="container mx-auto p-4 m-w-[1024px]">
    <CodeTutorial :tutorial="psp3_6" language="python" />
  </div>
</template>

<style scoped></style>
