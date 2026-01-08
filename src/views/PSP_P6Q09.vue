<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp_p6q09 from '../components/tutorials/PSP_P6Q09.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp_p6q09" language="python"/>
  </div>
</template>

<style scoped></style>
