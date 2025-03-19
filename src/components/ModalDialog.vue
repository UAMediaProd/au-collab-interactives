<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true
  },
  onClose: {
    type: Function,
    required: true
  }
});
</script>

<template>
  <div v-if="isVisible"
    class="p-4 m-2 sm:m-[3rem] sm:mx-[6rem] w-full bg-white rounded border border-neutral-200 z-20 drop-shadow-md overflow-auto">
    <div @click="onClose"
      class="sticky top-0 float-right size-6 scale-125 bg-neutral-200 bg-opacity-90 hover:bg-neutral-300 rounded-full flex items-center justify-center z-30 shadow-[0_0_10px_white]">
      <span class="m-auto">&times;</span>
    </div>
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
/* You can add any modal-specific styles here if needed */
</style>
