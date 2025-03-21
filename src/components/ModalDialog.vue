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
    class="p-4 m-2 sm:m-[3rem] sm:mx-[6rem] bg-white rounded border border-neutral-200 z-20 overflow-auto modal-container">
    <div @click="onClose"
      class="sticky top-0 float-right size-6 scale-125 bg-neutral-200 bg-opacity-90 hover:bg-neutral-300 rounded-full flex items-center justify-center z-30 shadow-[0_0_10px_white] cursor-pointer">
      <span class="m-auto">&times;</span>
    </div>
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  /* Safari-specific fixes */
  /* -webkit-filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06)); */
}
</style>
