<script setup>
const props = defineProps({
    interactive: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <div class="text-sm sm:text-lg text-primary absolute pointer-events-auto -translate-x-1/2 -translate-y-1/2 bg-primary-lighter px-2 py-1 sm:px-3 sm:py-1 rounded backdrop-blur-xs bg-opacity-70 text-nowrap"
        :class="interactive ? 'hover:bg-[#D0CFDCB3] transition-all duration-200 pointer-events-auto' : 'pointer-events-none'">
        <slot></slot>
    </div>
</template>

<style scoped></style>
