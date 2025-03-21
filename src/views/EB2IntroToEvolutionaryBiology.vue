<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { SVG } from '@svgdotjs/svg.js';

// Stylesheet for EB2 SVG
import '@/assets/styles/svg-eb2.css'
// Components for EB2 SVG
import EnvironmentDesert from '@/components/eb2/EnvironmentDesert.vue';
import EnvironmentForest from '@/components/eb2/EnvironmentForest.vue';
import EnvironmentArctic from '@/components/eb2/EnvironmentArctic.vue';
import Bones from '@/components/eb2/Bones.vue';
import Ground from '@/components/eb2/Ground.vue';
import Branches from '@/components/eb2/Branches.vue';
import Trunk from '@/components/eb2/Trunk.vue';
import ModalDialog from '@/components/ModalDialog.vue';

const DEBUG = false;

const regionActive = ref({
    biogeography: false,
    palaeontology: false,
    microevolution: false,
    macroevolution: false,
});

const hover = ref({
    biogeography: false,
    palaeontology: false,
    microevolution: false,
    macroevolution: false,
});

// Reference to store our SVG.js instance
const svgCanvas = ref(null);
const svgContainer = ref(null);

// Handle environment clicks
const handleClick = (region, event) => {
    // Stop event propagation to prevent parent SVG click handler from firing
    if (event) {
        event.stopPropagation();
    }

    console.log(`${region} region clicked!`);
    Object.keys(regionActive.value).forEach(key => key !== region && (regionActive.value[key] = false));
    regionActive.value[region] = !regionActive.value[region];
};

// Initialize SVG.js after component is mounted
onMounted(() => {
    // Initialize SVG.js with the main SVG element
    svgCanvas.value = SVG(svgContainer.value);
});

// Helper function to reset graphic elements
const resetElements = (selector) => {
    // If selector is a string, find elements using SVG.js
    if (typeof selector === 'string') {
        svgCanvas.value.find(selector).forEach(element => {
            element.animate(500).transform({}).opacity(1);
        });
    } else {
        // If it's already an element, animate it directly
        selector.animate(500).transform({}).opacity(1);
    }
    regionActive.value.biogeography = regionActive.value.palaeontology = regionActive.value.microevolution = regionActive.value.macroevolution = false;
}

// Helper computed properties to determine state of all regions
const allRegionsInactive = computed(() => !regionActive.value.biogeography && !regionActive.value.palaeontology && !regionActive.value.microevolution && !regionActive.value.macroevolution);
const anyRegionActive = computed(() => regionActive.value.biogeography || regionActive.value.palaeontology || regionActive.value.microevolution || regionActive.value.macroevolution);

const allElements = '.bones, .not-bones, .bone-1, .bone-2, .bone-3, .bone-4, .bone-5, .bone-6, .branches, .ground, .trunk, .environment, .not-environment, .environment-desert, .environment-forest, .environment-arctic, .not-trunk, .branches-top, .branches-middle, .branches-bottom, .branches-small';

// Biogeography animation
watch(() => regionActive.value.biogeography, (isActive) => {
    if (!svgCanvas.value) return;

    if (isActive) {
        svgCanvas.value.find('.environment-desert').forEach(element => {
            element.animate(1000).translate(30, 0).scale(1.05);
        });
        svgCanvas.value.find('.environment-forest').forEach(element => {
            element.animate(1000).translate(-30, 0).scale(1.05);
        });
        svgCanvas.value.find('.environment-arctic').forEach(element => {
            element.animate(1000).translate(20, -20).scale(1.05);
        });

        // Scale down other elements
        svgCanvas.value.find('.not-environment').forEach(element => {
            element.animate(500).opacity(0.2);
        });

    }
});


// Palaeontology animation
watch(() => regionActive.value.palaeontology, (isActive) => {
    if (!svgCanvas.value) return;

    if (isActive) {
        // Scale up bones
        svgCanvas.value.find('.bone-1').forEach(element => {
            element.animate(500).scale(1.1).translate(0, -50).rotate(10);
        });
        svgCanvas.value.find('.bone-2').forEach(element => {
            element.animate(500).scale(1.1).translate(0, -50).rotate(-10);
        });
        svgCanvas.value.find('.bone-3').forEach(element => {
            element.animate(500).scale(1.1).translate(0, -50).rotate(10);
        });
        svgCanvas.value.find('.bone-4').forEach(element => {
            element.animate(500).scale(1.1).translate(0, -50).rotate(-10);
        });
        svgCanvas.value.find('.bone-5').forEach(element => {
            element.animate(500).scale(1.1).translate(0, -50).rotate(10);
        });
        svgCanvas.value.find('.bone-6').forEach(element => {
            element.animate(500).scale(1.1).translate(0, -50).rotate(-10);
        });

        // Scale down other elements
        svgCanvas.value.find('.not-bones').forEach(element => {
            element.animate(500).opacity(0.2);
        });

    }
});

// Macroevolution animation
watch(() => regionActive.value.macroevolution, (isActive) => {
    if (!svgCanvas.value) return;

    if (isActive) {
        // Scale up trunk
        svgCanvas.value.find('.trunk').forEach(element => {
            element.animate(300).scale(1.02, 1.12).ease('<');
            element.animate(600).transform({}).scale(1.05).ease('>');
        });

        // Fade out other elements
        svgCanvas.value.find('.not-trunk').forEach(element => {
            element.animate(500).opacity(0.2);
        });

    }
});

// Microevolution animation
watch(() => regionActive.value.microevolution, (isActive) => {
    if (!svgCanvas.value) return;

    if (isActive) {
        // Animate branches
        svgCanvas.value.find('.branches-top, .branches-bottom').forEach(element => {
            element.animate(800).scale(1.1).opacity(1).transform({
                translateX: -10,
                rotate: 10,
                origin: 'bottom left'
            });
        });
        svgCanvas.value.find('.branches-middle').forEach(element => {
            element.animate(800).scale(1.1).opacity(1).transform({
                translateX: 10,
                rotate: -10,
                origin: 'bottom right'
            });
        });
        svgCanvas.value.find('.branches-top .branches-small, .branches-bottom .branches-small').forEach(element => {
            element.animate(300).transform({
                rotate: -5,
                origin: 'bottom',
                translateY: 5
            });
            element.animate(400).transform({
                rotate: 5,
                origin: 'bottom',
                translateY: 5
            });
            element.animate(400).transform({
                rotate: 0,
                origin: 'bottom',
                translateY: 5
            });
        });
        svgCanvas.value.find('.branches-middle .branches-small').forEach(element => {
            element.animate(300).transform({
                rotate: 5,
                origin: 'bottom',
                translateY: 5
            });
            element.animate(300).transform({
                rotate: -5,
                origin: 'bottom',
                translateY: 5
            });
            element.animate(400).transform({
                rotate: 0,
                origin: 'bottom',
                translateY: 5
            });
        });

        // Fade out other elements
        svgCanvas.value.find('.not-branches').forEach(element => {
            element.animate(500).opacity(0.2);
        });

    }
});

</script>

<template>
    <div v-if="DEBUG">
        <button class="p-1 bg-primary-lighter m-2 rounded"
        @click="regionActive.biogeography = !regionActive.biogeography">biogeography:
        {{ regionActive.biogeography }}</button>
        <button class="p-1 bg-primary-lighter m-2 rounded"
        @click="regionActive.palaeontology = !regionActive.palaeontology">palaeontology:
        {{ regionActive.palaeontology }}</button>
        <button class="p-1 bg-primary-lighter m-2 rounded"
        @click="regionActive.microevolution = !regionActive.microevolution">microevolution:
        {{ regionActive.microevolution }}</button>
        <button class="p-1 bg-primary-lighter m-2 rounded"
        @click="regionActive.macroevolution = !regionActive.macroevolution">macroevolution:
        {{ regionActive.macroevolution }}</button>
        <button class="p-1 bg-primary-lighter m-2 rounded" @click="resetElements(allElements)">reset animations</button>
        <p>All regions inactive: {{ allRegionsInactive }}</p>
        <p>Any regions active: {{ anyRegionActive }}</p>
    </div>
    <div id="graphic" class="max-w-[900px] mx-auto flex flex-col select-none pt-4">
        <div class="flex justify-between items-center">
            <div class="flex-auto relative">
                <ModalDialog class="absolute top-[60%] mx-3 min-w-64" :isVisible="regionActive.biogeography"
                    :onClose="() => resetElements(allElements)">
                    <h3>Biogeography</h3>
                    <p>Lineages split and diverge, responding to different environmental pressures.</p>
                </ModalDialog>
                <ModalDialog class="absolute bottom-[34%] mx-3 min-w-64" :isVisible="regionActive.palaeontology"
                    :onClose="() => resetElements(allElements)">
                    <h3>Palaeontology</h3>
                    <p>Study of life of the geologic past that involves the analysis of plant and animal fossils.</p>
                </ModalDialog>
                <ModalDialog class="absolute top-[60%] mx-3 min-w-64" :isVisible="regionActive.microevolution"
                    :onClose="() => resetElements(allElements)">
                    <h3>Microevolution</h3>
                    <p>Species change over time.</p>
                </ModalDialog>
                <ModalDialog class="absolute top-[50%] mx-3 min-w-64" :isVisible="regionActive.macroevolution"
                    :onClose="() => resetElements(allElements)">
                    <h3>Macroevolution</h3>
                    <p>New life-forms derive from older forms.</p>
                </ModalDialog>
                <svg id="svg" ref="svgContainer" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1920" class="overflow-visible"
                    :class="anyRegionActive ? 'cursor-pointer' : ''"
                    @click="() => { anyRegionActive ? resetElements(allElements) : null }">
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
                    </defs>
                    <g class="not-bones">
                        <g class="environments not-trunk not-branches">
                            <EnvironmentArctic class="environment environment-arctic"
                                @mouseover="hover.biogeography = true" @mouseout="hover.biogeography = false"
                                :class="allRegionsInactive ? 'cursor-pointer' : 'pointer-events-none', regionActive.biogeography || hover.biogeography ? 'region-active' : ''"
                                @click="(event) => handleClick('biogeography', event)" />
                            <EnvironmentForest class="environment environment-forest"
                                @mouseover="hover.biogeography = true" @mouseout="hover.biogeography = false"
                                :class="allRegionsInactive ? 'cursor-pointer' : 'pointer-events-none', regionActive.biogeography || hover.biogeography ? 'region-active' : ''"
                                @click="(event) => handleClick('biogeography', event)" />
                            <EnvironmentDesert class="environment environment-desert"
                                @mouseover="hover.biogeography = true" @mouseout="hover.biogeography = false"
                                :class="allRegionsInactive ? 'cursor-pointer' : 'pointer-events-none', regionActive.biogeography || hover.biogeography ? 'region-active' : ''"
                                @click="(event) => handleClick('biogeography', event)" />
                        </g>
                        <g class="not-environment">
                            <g class="not-trunk">
                                <Ground class="ground not-branches" />
                                <Branches class="branches" @mouseover="hover.microevolution = true"
                                    @mouseout="hover.microevolution = false"
                                    :class="allRegionsInactive ? 'cursor-pointer' : 'pointer-events-none', regionActive.microevolution || hover.microevolution ? 'region-active' : ''"
                                    @click="(event) => handleClick('microevolution', event)" />
                            </g>
                            <Trunk class="trunk" @mouseover="hover.macroevolution = true"
                                @mouseout="hover.macroevolution = false"
                                :class="allRegionsInactive ? 'cursor-pointer' : 'pointer-events-none', regionActive.macroevolution || hover.macroevolution ? 'region-active' : ''"
                                @click="(event) => handleClick('macroevolution', event)" />
                        </g>
                    </g>
                    <Bones class="bones not-environment not-trunk not-branches" @mouseover="hover.palaeontology = true"
                        @mouseout="hover.palaeontology = false"
                        :class="allRegionsInactive ? 'cursor-pointer' : 'pointer-events-none', regionActive.palaeontology || hover.palaeontology ? 'region-active' : ''"
                        @click="(event) => handleClick('palaeontology', event)" />
                </svg>
            </div>
        </div>
    </div>

</template>


<style>
#graphic .highlight {
    visibility: hidden;
}

#graphic .region-active .highlight {
    visibility: visible;
}
</style>