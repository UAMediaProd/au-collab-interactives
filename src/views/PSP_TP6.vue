<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp_tp6 from '../components/tutorials/PSP_TP6.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp_tp6" language="python" code-width="w-[58%]" data-boxes-width="w-[42%]"/>
  </div>
</template>

<style scoped></style>
