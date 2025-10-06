<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp3_3 from '../components/tutorials/PSP3_3.js';
</script>

<template>
  <div class="container mx-auto p-4 m-w-[1024px]">
    <CodeTutorial :tutorial="psp3_3" language="python" />
  </div>
</template>

<style scoped></style>
