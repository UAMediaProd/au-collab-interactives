<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp_p4q11 from '../components/tutorials/PSP_P4Q11.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp_p4q11" language="python" codeHeight="min-h-[60ch]"/>
  </div>
</template>

<style scoped></style>
