<template>
    <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        :fill="color"
        :style="{
            transition: `opacity ${duration}ms ${easing}`,
            opacity: visible ? maxOpacity / 100 : 0
        }"
    />
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    // Whether the overlay is visible
    visible: {
        type: Boolean,
        default: false
    },
    // Maximum opacity when visible (0-100)
    maxOpacity: {
        type: Number,
        default: 80,
        validator: (value) => value >= 0 && value <= 100
    },
    // Color of the overlay
    color: {
        type: String,
        default: 'white'
    },
    // Transition duration in milliseconds
    duration: {
        type: Number,
        default: 500
    },
    // CSS easing function
    easing: {
        type: String,
        default: 'ease-in-out'
    }
});
</script>

<style scoped>
/* All transition styling is handled inline for maximum flexibility */
</style>