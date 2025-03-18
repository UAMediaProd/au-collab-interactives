<script setup>
import { ref, onMounted, watch } from 'vue';
// import PositionDebugger from '@/components/PositionDebugger.vue';
import { SVG } from '@svgdotjs/svg.js';

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

const modalActive = ref({
    biogeography: false,
    palaeontology: false,
    microevolution: false,
    macroevolution: false,
});

// Reference to store our SVG.js instance
const svgCanvas = ref(null);
const svgContainer = ref(null);

// Handle environment clicks
const handleClick = (region) => {
    console.log(`${region} region clicked!`);
    modalActive.value[region] = !modalActive.value[region];
};

// Initialize SVG.js after component is mounted
onMounted(() => {
    // Initialize SVG.js with the main SVG element
    svgCanvas.value = SVG(svgContainer.value);
    
    // Add click handlers to environments using SVG.js
    if (svgCanvas.value) {
        // Find elements by their class and add event listeners
        svgCanvas.value.find('#EnvironmentArctic').forEach(element => {
            element.click(() => handleClick('biogeography'));
        });
        
        svgCanvas.value.find('#EnvironmentForest').forEach(element => {
            element.click(() => handleClick('biogeography'));
        });
        
        svgCanvas.value.find('#EnvironmentDesert').forEach(element => {
            element.click(() => handleClick('biogeography'));
        });
        
        svgCanvas.value.find('#Bones').forEach(element => {
            element.click(() => handleClick('palaeontology'));
        });
    }
});

// Watch for changes to trigger animations
watch(() => modalActive.value.biogeography, (isActive) => {
    if (!svgCanvas.value) return;
    
    if (isActive) {
        // Create or find the white overlay
        let overlay = svgCanvas.value.findOne('#bioOverlay');
        if (!overlay) {
            // Create a white rectangle covering the entire SVG
            overlay = svgCanvas.value.rect(1920, 1920).fill('white').opacity(0).id('bioOverlay');
            
            // Position it right before the environment elements
            // This ensures it covers everything except the environments
            const firstEnv = svgCanvas.value.findOne('#Environments');
            if (firstEnv) {
                overlay.after(firstEnv);
            }
        }
        
        // Scale up environments
        svgCanvas.value.find('#Environments').forEach(element => {
            element.animate(500).scale(1.05);
        });
        
        // Scale down other elements
        svgCanvas.value.find('#NotEnvironments').forEach(element => {
            element.animate(500).scale(0.95);
        });
        
        // Show the overlay with animation
        overlay.animate(500).opacity(0.5);
    } else {
        // Hide the overlay
        const overlay = svgCanvas.value.findOne('#bioOverlay');
        if (overlay) {
            overlay.animate(500).opacity(0);
        }
        
        // Reset all elements
        svgCanvas.value.find('#Environments').forEach(element => {
            element.animate(500).scale(0.95);
        });
        
        svgCanvas.value.find('#NotEnvironments').forEach(element => {
            element.animate(500).scale(1.05);
        });
    }
});

// Watch for palaeontology changes
watch(() => modalActive.value.palaeontology, (isActive) => {
    if (!svgCanvas.value) return;
    
    if (isActive) {
        // Create or find the white overlay for palaeontology
        let overlay = svgCanvas.value.findOne('#palaeoOverlay');
        if (!overlay) {
            // Create a white rectangle covering the entire SVG
            overlay = svgCanvas.value.rect(1920, 1920).fill('white').opacity(0).id('palaeoOverlay');
            
            // Position it right before the bones element
            // This ensures it covers everything except the bones
            const bones = svgCanvas.value.findOne('#Bones');
            if (bones) {
                overlay.before(bones);
            }
        }
        
        // Scale up bones
        svgCanvas.value.find('#Bones').forEach(element => {
            element.animate(500).scale(1.1);
        });
        
        // Scale down other elements
        svgCanvas.value.find('#NotEnvironments').forEach(element => {
            element.animate(500).scale(0.95);
        });
        
        svgCanvas.value.find('#EnvironmentArctic, #EnvironmentForest, #EnvironmentDesert').forEach(element => {
            element.animate(500).scale(0.95);
        });
        
        // Show the overlay with animation
        overlay.animate(500).opacity(0.5);
    } else {
        // Hide the overlay
        const overlay = svgCanvas.value.findOne('#palaeoOverlay');
        if (overlay) {
            overlay.animate(500).opacity(0);
        }
        
        // Reset all elements if no other modal is active
        if (!modalActive.value.biogeography) {
            svgCanvas.value.find('#Bones').forEach(element => {
                element.animate(500).scale(1);
            });
            
            svgCanvas.value.find('#NotEnvironments').forEach(element => {
                element.animate(500).scale(1);
            });
            
            svgCanvas.value.find('#EnvironmentArctic, #EnvironmentForest, #EnvironmentDesert').forEach(element => {
                element.animate(500).scale(1);
            });
        }
    }
});
</script>

<template>
    <!-- <PositionDebugger targetSelector="#graphic" /> -->
    <!-- <RotateDeviceBanner class="sm:hidden" /> -->
    <button class="p-1 bg-primary-lighter m-2 rounded"
        @click="modalActive.biogeography = !modalActive.biogeography">biogeography: {{modalActive.biogeography}}</button>
    <button class="p-1 bg-primary-lighter m-2 rounded"
        @click="modalActive.palaeontology = !modalActive.palaeontology">palaeontology: {{modalActive.palaeontology}}</button>
    <button class="p-1 bg-primary-lighter m-2 rounded"
        @click="modalActive.microevolution = !modalActive.microevolution">microevolution: {{modalActive.microevolution}}</button>
    <button class="p-1 bg-primary-lighter m-2 rounded"
        @click="modalActive.macroevolution = !modalActive.macroevolution">macroevolution: {{modalActive.macroevolution}}</button>
    <div id="graphic" class="max-w-[900px] mx-auto flex flex-col select-none pt-4">
        <div class="flex justify-between items-center">
            <div class="flex-auto relative">
                <svg ref="svgContainer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1920 1920" class="overflow-visible"
                    id="eb2-svg">
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
                    <g id="NotEnvironments">
                        <Ground id="Ground" />
                        <SmallBranches id="SmallBranches" />
                        <LargeBranches id="LargeBranches" />
                        <Trunk id="Trunk" />
                        <Bones id="Bones" />
                    </g>
                    <g id="Environments">
                        <EnvironmentArctic id="EnvironmentArctic" />
                        <EnvironmentForest id="EnvironmentForest" />
                        <EnvironmentDesert id="EnvironmentDesert" />
                    </g>
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

#EnvironmentArctic:hover {
  filter: url(#hover-glow);
}

/* SVG.js will handle the events, so we don't need these pointer-event styles */
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