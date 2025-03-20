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

const regionActive = ref({
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

const allElements = '.bones, .not-bones, .branches, .ground, .trunk, .environment, .not-environment';

// Biogeography animation
watch(() => regionActive.value.biogeography, (isActive) => {
    if (!svgCanvas.value) return;

    if (isActive) {
        // Start by resetting all elements
        // resetElements(allElements);
        
        // Scale up environments and start wafting
        svgCanvas.value.find('.environment').forEach(element => {
            element.animate(500).scale(1.05);
        });

        // Scale down other elements
        svgCanvas.value.find('.not-environment').forEach(element => {
            element.animate(500).scale(0.95).opacity(0.5);
        });

    }
});

// Palaeontology animation
watch(() => regionActive.value.palaeontology, (isActive) => {
    if (!svgCanvas.value) return;

    if (isActive) {
        // Start by resetting all elements
        // resetElements(allElements);
        
        // Scale up bones
        svgCanvas.value.find('.bones').forEach(element => {
            element.animate(500).scale(1.1).translate(0, -50);
        });

        // Scale down other elements
        svgCanvas.value.find('.not-bones').forEach(element => {
            element.animate(500).scale(0.95).opacity(0.5);
        });

    }
});
</script>

<template>
    <!-- <RotateDeviceBanner class="sm:hidden" /> -->
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
        <p>All regions inactive: {{ allRegionsInactive }}</p>
        <p>Any regions active: {{ anyRegionActive }}</p>
    <div id="graphic" class="max-w-[900px] mx-auto flex flex-col select-none pt-4">
        <div class="flex justify-between items-center">
            <div class="flex-auto relative">
                <svg ref="svgContainer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1920 1920" class="overflow-visible" 
                    :class="anyRegionActive ? 'cursor-pointer' : ''"
                    @click="() => { anyRegionActive ? resetElements(allElements) : null }" >
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
                            <feGaussianBlur stdDeviation="20" result="blur" />
                            <feFlood flood-color="#4299e1" flood-opacity="0.7" result="color" />
                            <feComposite in="color" in2="blur" operator="in" result="glow" />
                            <feMerge>
                                <feMergeNode in="glow" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter id="drop-shadow">
                            <feDropShadow dx="10" dy="10" stdDeviation="0" flood-color="#4299e1" flood-opacity="0.7" />
                        </filter>

                        <filter id="hover-filter-lg" x="-10%" y="-10%" width="120%" height="120%">
                            <feMorphology in="SourceAlpha" result="expanded" operator="dilate" radius="12" />
                            <feFlood flood-color="white" result="outlineColor" />
                            <feComposite in="outlineColor" in2="expanded" operator="in" result="outline" />
                            <feMorphology in="SourceAlpha" result="glowExpanded" operator="dilate" radius="8" />
                            <feFlood flood-color="rgba(0, 0, 0, 0.5)" result="glowColor" />
                            <feComposite in="glowColor" in2="glowExpanded" operator="in" result="glowBase" />
                            <feGaussianBlur in="glowBase" stdDeviation="12" result="glow" />
                            <feMerge>
                                <feMergeNode in="glow" /> <!-- Blurry glow -->
                                <feMergeNode in="outline" /> <!-- Solid outline -->
                                <feMergeNode in="SourceGraphic" /> <!-- Original content -->
                            </feMerge>
                        </filter>
                        <filter id="hover-filter-sm" x="-5%" y="-5%" width="110%" height="110%">
                            <feMorphology in="SourceAlpha" result="expanded" operator="dilate" radius="8" />
                            <feFlood flood-color="white" result="outlineColor" />
                            <feComposite in="outlineColor" in2="expanded" operator="in" result="outline" />
                            <feMorphology in="SourceAlpha" result="glowExpanded" operator="dilate" radius="9" />
                            <feFlood flood-color="rgba(0, 0, 0, 0.3)" result="glowColor" />
                            <feComposite in="glowColor" in2="glowExpanded" operator="in" result="glowBase" />
                            <feGaussianBlur in="glowBase" stdDeviation="12" result="glow" />
                            <feMerge>
                                <feMergeNode in="glow" /> <!-- Blurry glow -->
                                <feMergeNode in="outline" /> <!-- Solid outline -->
                                <feMergeNode in="SourceGraphic" /> <!-- Original content -->
                            </feMerge>
                        </filter>
                    </defs>
                    <g class="not-bones">
                        <g class="not-environment">
                            <Ground class="ground" />
                            <Branches class="branches" 
                            :class="allRegionsInactive ? 'hover-filter-sm cursor-pointer' : 'pointer-events-none'"
                            @click="(event) => handleClick('microevolution', event)" />
                            <Trunk class="trunk"
                            :class="allRegionsInactive ? 'hover-filter-lg cursor-pointer' : 'pointer-events-none'"
                            @click="(event) => handleClick('macroevolution', event)" />
                        </g>
                        <g class="environments">
                            <EnvironmentArctic class="environment environment-arctic"
                            :class="allRegionsInactive ? 'hover-filter-lg cursor-pointer' : 'pointer-events-none'" 
                            @click="(event) => handleClick('biogeography', event)" />
                            <EnvironmentForest class="environment environment-forest" 
                            :class="allRegionsInactive ? 'hover-filter-lg cursor-pointer' : 'pointer-events-none'"
                            @click="(event) => handleClick('biogeography', event)" />
                            <EnvironmentDesert class="environment environment-desert" 
                            :class="allRegionsInactive ? 'hover-filter-lg cursor-pointer' : 'pointer-events-none'"
                            @click="(event) => handleClick('biogeography', event)" />
                        </g>
                    </g>
                    <Bones class="bones not-environment" 
                    :class="!regionActive.biogeography && !regionActive.palaeontology && !regionActive.microevolution && !regionActive.macroevolution ? 'hover-filter-sm cursor-pointer' : 'pointer-events-none'"
                    @click="(event) => handleClick('palaeontology', event)"/>
                </svg>
            </div>
        </div>
    </div>

</template>


<style scoped>
.hover-filter-lg:hover {
    filter: url(#hover-filter-lg);
    transition: filter 0.3s ease;
}
.hover-filter-sm:hover {
    filter: url(#hover-filter-sm);
    transition: filter 0.3s ease;
}
</style>
