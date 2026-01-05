<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp0_1 from '../components/tutorials/PSP0_1.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp0_1" language="python-repl" :show-boxes="false"/>
  </div>
</template>

<style scoped></style>
