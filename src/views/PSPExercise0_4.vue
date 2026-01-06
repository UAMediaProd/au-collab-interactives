<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import psp0_4 from '../components/tutorials/PSP0_4.js';
</script>

<template>
  <div class="container mx-auto p-4 max-w-[1024px]">
    <CodeTutorial :tutorial="psp0_4" language="python" :show-code="false" :show-boxes="false" />
  </div>
</template>

<style scoped>
</style>
