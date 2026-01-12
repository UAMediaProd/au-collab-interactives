<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp_p6q10 from '../components/tutorials/PSP_P6Q10.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp_p6q10" language="python" code-width="w-[74%]" data-boxes-width="w-[26%]"/>
  </div>
</template>

<style scoped></style>
