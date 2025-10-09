<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp6_3 from '../components/tutorials/PSP6_3.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp6_3" language="python" code-width="w-[60%]" data-boxes-width="w-[40%]"/>
  </div>
</template>

<style scoped></style>
