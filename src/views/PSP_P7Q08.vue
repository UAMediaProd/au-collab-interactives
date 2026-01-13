<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp_p7q08 from '../components/tutorials/PSP_P7Q08.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp_p7q08" language="python" :show-boxes="false"/>
  </div>
</template>

<style scoped></style>
