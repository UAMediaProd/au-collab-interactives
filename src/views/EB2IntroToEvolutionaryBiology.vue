<script setup>
import { ref } from 'vue';
import Hotspot from '@/components/Hotspot.vue';
// import PositionDebugger from '@/components/PositionDebugger.vue';

// Stylesheet for EB2 SVG
import '@/assets/styles/svg-eb2.css'
// Components for EB2 SVG
import EnvironmentDesert from '@/components/eb2/EnvironmentDesert.vue';
import EnvironmentForest from '@/components/eb2/EnvironmentForest.vue';
import EnvironmentArctic from '@/components/eb2/EnvironmentArctic.vue';
import Bones from '@/components/eb2/Bones.vue';
import Ground from '@/components/eb2/Ground.vue';
import LargeBranches from '@/components/eb2/LargeBranches.vue';
import SmallBranches from '@/components/eb2/SmallBranches.vue';
import Trunk from '@/components/eb2/Trunk.vue';
import WhiteOverlay from '@/components/eb2/WhiteOverlay.vue';

// Create reactive state for visibility of each element and hotspot states
const modalActive = ref({
    biogeography: false,
    palaeontology: false,
    microevolution: false,
    macroevolution: false,
});

const handleClick = () => {
    alert('Clicked!');
}
</script>

<template>
    <!-- <PositionDebugger targetSelector="#graphic" /> -->
    <!-- <RotateDeviceBanner class="sm:hidden" /> -->
    <div id="graphic" class="max-w-[900px] mx-auto flex flex-col select-none pt-4">
        <div class="flex justify-between items-center">
            <div class="flex-auto relative">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1920 1920" class="overflow-visible pointer-events-auto"
                    >
                    <defs>
                        <linearGradient id="linear-gradient" x1="1637.12" y1="815.15" x2="1634.87" y2="649.69"
                            gradientUnits="userSpaceOnUse">
                            <stop offset=".05" stop-color="#e1f4f0" />
                            <stop offset=".2" stop-color="#c8e8ea" />
                            <stop offset=".42" stop-color="#abdbe4" />
                            <stop offset=".6" stop-color="#9ad2e1" />
                            <stop offset=".74" stop-color="#94d0e0" />
                        </linearGradient>
                        <linearGradient id="linear-gradient-2" x1="1667.6" y1="779.4" x2="1665.76" y2="644"
                            gradientTransform="translate(3058.96) rotate(-180) scale(1 -1)"
                            xlink:href="#linear-gradient" />
                        <linearGradient id="linear-gradient-3" x1="1628.68" y1="776.6" x2="1626.93" y2="647.87"
                            gradientTransform="translate(3058.96) rotate(-180) scale(1 -1)"
                            xlink:href="#linear-gradient" />
                        <linearGradient id="linear-gradient-4" x1="1303.71" y1="772.03" x2="1301.96" y2="643.3"
                            gradientTransform="translate(474.47)" xlink:href="#linear-gradient" />
                        <filter id="hover-glow">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feFlood flood-color="#4299e1" flood-opacity="0.7" result="color" />
                            <feComposite in="color" in2="blur" operator="in" result="glow" />
                            <feMerge>
                                <feMergeNode in="glow" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <Ground class="scale-initial"
                        :class="{ 'scale-down': modalActive.biogeography || modalActive.palaeontology }"
                        
                        />
                    <SmallBranches class="scale-initial"
                        :class="{ 'scale-down': modalActive.biogeography || modalActive.palaeontology }" />
                    <LargeBranches class="scale-initial"
                        :class="{ 'scale-down': modalActive.biogeography || modalActive.palaeontology }" />
                    <Trunk class="scale-initial"
                        :class="{ 'scale-down': modalActive.biogeography || modalActive.palaeontology }" />
                    <WhiteOverlay :visible="modalActive.biogeography" :maxOpacity="60" color="white" :duration="500" />
                    <EnvironmentArctic class="scale-initial pointer-events-auto"
                        :class="{ 'scale-up': modalActive.biogeography, 'scale-down': modalActive.palaeontology }" 
                        />
                    <EnvironmentForest class="scale-initial"
                        :class="{ 'scale-up': modalActive.biogeography, 'scale-down': modalActive.palaeontology }" />
                    <EnvironmentDesert class="scale-initial"
                        :class="{ 'scale-up': modalActive.biogeography, 'scale-down': modalActive.palaeontology }" />
                    <WhiteOverlay :visible="modalActive.palaeontology" :maxOpacity="20" color="white" :duration="500" />
                    <Bones class="scale-initial"
                        :class="{ 'scale-up': modalActive.palaeontology, 'scale-down': modalActive.biogeography }" 
                        @click="handleClick"
                        />
                </svg>
            </div>
        </div>
    </div>
</template>


<style scoped>
path {
    transition: filter 0.2s ease;
}


/* Add transition classes for fade effect */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.rotated-text-container {
    width: 3rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.rotated-text {
    transform: rotate(-90deg);
    white-space: nowrap;
    /* Ensures single-line text */
    display: block;
}

/* Environment animation styles */
.scale-initial {
    transform-origin: center;
    transition: transform 0.5s ease-out;
}

.scale-up {
    transform: scale(1.05);
    transition: transform 0.5s ease-out, filter 0.5s ease-out;
}

.glow {
    /* Refactor for Safari compatibility */
    filter: drop-shadow(0 0 50px rgba(64, 237, 93, 0.5));
}

.scale-down {
    transform: scale(0.95);
    transition: transform 0.5s ease-out, filter 0.5s ease-out;
}

.environment-arctic:hover {
  filter: url(#hover-glow);
}

/* Disable pointer events by default */
svg * {
  pointer-events: none;
}

/* Enable pointer events only on the groups you want to be clickable */
.environment-arctic,
.environment-forest,
.environment-desert,
.bones {
  pointer-events: auto;
}
</style>

<style>
/* .v-popper__arrow-container {
    transform: scale(2);
} */

.v-popper__arrow-outer {
    border-width: 10px;
    left: -5px !important;
}

.v-popper__arrow-inner {
    border-width: 11px;
    left: -6px !important;
}

.v-popper__popper[data-popper-placement^="bottom"] .v-popper__arrow-outer {
    top: -10px;
}

.v-popper__popper[data-popper-placement^="bottom"] .v-popper__arrow-inner {
    top: -9px;
}
</style>