<script setup>
// Component logic here if needed
</script>

<template>
    <div class="group absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-10">
        <div class="size-8 sm:size-12 hover:size-12 sm:hover:size-16 bg-primary-light rounded-full bg-opacity-30 hover:bg-opacity-50 cursor-pointer transition-all duration-200 animate-pulse-subtle">
            <div class="size-4 sm:size-6 group-hover:size-5 sm:group-hover:size-7 bg-primary-light rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_white] transition-all duration-200"></div>
        </div>
    </div>
</template>

<style scoped>
@keyframes pulse-subtle {
    0% {
        transform: scale(1);
        /* opacity: var(--tw-bg-opacity); */
    }
    50% {
        transform: scale(1.1);
        /* opacity: calc(var(--tw-bg-opacity) * 1.2); */
    }
    100% {
        transform: scale(1);
        /* opacity: var(--tw-bg-opacity); */
    }
}

.animate-pulse-subtle {
    animation: pulse-subtle 4s ease-in-out infinite;
}
</style>