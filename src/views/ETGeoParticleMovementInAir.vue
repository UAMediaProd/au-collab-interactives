<script setup>
import { ref } from 'vue';
import Hotspot from '@/components/Hotspot.vue';
import GraphLabel from '@/components/GraphLabel.vue';
import RotateDeviceBanner from '@/components/RotateDeviceBanner.vue'

// Create reactive state for visibility of each element
const visibility = ref({
    mars: true,
    earth: true,
    titan: true,
    venus: true,
    labels: true,
    hotspots: true
});

const toggleVisibility = (elementId) => {
    visibility.value[elementId] = !visibility.value[elementId];
}
</script>

<template>
    <RotateDeviceBanner class="sm:hidden" />
    <h2 class="text-4xl sm:text-5xl text-center text-primary p-3 sm:p-5">Particle movement in air</h2>
    <div id="graph" class="max-w-[900px] mx-auto flex flex-col select-none">
        <div class="flex justify-between items-center">
            <div class="rotated-text-container">
                <span class="rotated-text px-3 sm:p-5 sm:text-xl text-primary">
                    Threshold friction wind speed (m/s)
                </span>
            </div>
            <div class="flex-auto relative">
                <div class="absolute inset-0 h-full w-full flex" v-show="visibility.hotspots"
                    @click="glow.washload = glow.bedload = glow.suspended = false">
                    <!-- Earth hotspot -->
                    <VDropdown :placement="'top'" distance="32" class="absolute top-[50.5%] left-[29%]">
                        <Hotspot />
                        <template #popper class="m-2">
                            <div class="p-4 max-w-md">
                                <p>
                                    Higher windspeed is required to move
                                    the smallest and largest particles than
                                    the intermediate sized particles on Earth,
                                    Mars and Venus. Why is this?
                                </p>
                                <p class="pt-2"><strong>Hint</strong>: think about the forces acting on the particles.
                                </p>
                            </div>
                        </template>
                    </VDropdown>
                    <!-- Mars hotspot -->
                    <VDropdown :placement="'top'" distance="32" class="absolute top-[20%] left-[36%]">
                        <Hotspot />
                        <template #popper class="m-2">
                            <div class="p-4 max-w-md">
                                <p>Denser atmosphere = stronger particle lift forces.</p>
                                <p class="pt-2">What does this suggest about the difference in atmospheric density
                                    between Mars and Venus?</p>
                            </div>
                        </template>
                    </VDropdown>
                    <!-- Titan/Venus hotspot -->
                    <VDropdown :placement="'top'" distance="32" class="absolute top-[73%] left-[90%]">
                        <Hotspot />
                        <template #popper class="m-2">
                            <div class="p-4 max-w-md">
                                <p>Why does the data for Titan show a different pattern here compared to the other planets? </p>
                                <p class="pt-2"><strong>Hint</strong>: What is different about Titan?</p>
                            </div>
                        </template>
                    </VDropdown>
                </div>
                <div class="absolute inset-0 h-full w-full flex pointer-events-none" v-show="visibility.labels">
                    <transition name="fade">
                        <GraphLabel v-show="visibility.mars" class="absolute top-[23%] left-[50%]" :interactive="false">
                            Mars
                        </GraphLabel>
                    </transition>
                    <transition name="fade">
                        <GraphLabel v-show="visibility.earth" class="absolute top-[54%] left-[50%]"
                            :interactive="false">Earth
                        </GraphLabel>
                    </transition>
                    <transition name="fade">
                        <GraphLabel v-show="visibility.titan" class="absolute top-[71%] left-[50%]"
                            :interactive="false">Titan
                        </GraphLabel>
                    </transition>
                    <transition name="fade">
                        <GraphLabel v-show="visibility.venus" class="absolute top-[82%] left-[50%]"
                            :interactive="false">Venus
                        </GraphLabel>
                    </transition>
                </div>
                <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 422.72 363.08">
                    <g id="Layer_1-2" data-name="Layer_1">
                        <g>
                            <g id="Graph_border_and_lines">
                                <polyline class="cls-6"
                                    points="410.81 5.33 410.81 343.56 31.23 343.56 31.23 5.33 41.82 5.33" />
                                <line class="cls-6" x1="31.23" y1="121.04" x2="41.83" y2="121.04" />
                                <line class="cls-6" x1="31.23" y1="230.96" x2="41.83" y2="230.96" />
                                <g>
                                    <line class="cls-6" x1="31.23" y1="307.88" x2="36.53" y2="307.88" />
                                    <line class="cls-6" x1="31.23" y1="286.88" x2="36.53" y2="286.88" />
                                    <line class="cls-6" x1="31.23" y1="272.88" x2="36.53" y2="272.88" />
                                    <line class="cls-6" x1="31.23" y1="262.88" x2="36.53" y2="262.88" />
                                    <line class="cls-6" x1="31.23" y1="254.88" x2="36.53" y2="254.88" />
                                    <line class="cls-6" x1="31.23" y1="247.88" x2="36.53" y2="247.88" />
                                    <line class="cls-6" x1="31.23" y1="241.88" x2="36.53" y2="241.88" />
                                    <line class="cls-6" x1="31.23" y1="235.88" x2="36.53" y2="235.88" />
                                </g>
                                <g>
                                    <line class="cls-6" x1="87.88" y1="343.53" x2="87.88" y2="338.23" />
                                    <line class="cls-6" x1="121.63" y1="343.53" x2="121.63" y2="338.23" />
                                    <line class="cls-6" x1="146.14" y1="343.53" x2="146.14" y2="338.23" />
                                    <line class="cls-6" x1="163.64" y1="343.53" x2="163.64" y2="338.23" />
                                    <line class="cls-6" x1="177.64" y1="343.53" x2="177.64" y2="338.23" />
                                    <line class="cls-6" x1="191.9" y1="343.53" x2="191.9" y2="338.23" />
                                    <line class="cls-6" x1="205.4" y1="343.53" x2="205.4" y2="338.23" />
                                    <line class="cls-6" x1="213.9" y1="343.53" x2="213.9" y2="338.23" />
                                </g>
                                <g>
                                    <line class="cls-6" x1="278.64" y1="343.53" x2="278.64" y2="338.23" />
                                    <line class="cls-6" x1="312.53" y1="343.53" x2="312.53" y2="338.23" />
                                    <line class="cls-6" x1="337.13" y1="343.53" x2="337.13" y2="338.23" />
                                    <line class="cls-6" x1="354.7" y1="343.53" x2="354.7" y2="338.23" />
                                    <line class="cls-6" x1="368.76" y1="343.53" x2="368.76" y2="338.23" />
                                    <line class="cls-6" x1="383.06" y1="343.53" x2="383.06" y2="338.23" />
                                    <line class="cls-6" x1="396.62" y1="343.53" x2="396.62" y2="338.23" />
                                    <line class="cls-6" x1="405.15" y1="343.53" x2="405.15" y2="338.23" />
                                </g>
                                <g>
                                    <line class="cls-6" x1="31.23" y1="197.88" x2="36.53" y2="197.88" />
                                    <line class="cls-6" x1="31.23" y1="176.88" x2="36.53" y2="176.88" />
                                    <line class="cls-6" x1="31.23" y1="162.88" x2="36.53" y2="162.88" />
                                    <line class="cls-6" x1="31.23" y1="152.88" x2="36.53" y2="152.88" />
                                    <line class="cls-6" x1="31.23" y1="144.88" x2="36.53" y2="144.88" />
                                    <line class="cls-6" x1="31.23" y1="137.88" x2="36.53" y2="137.88" />
                                    <line class="cls-6" x1="31.23" y1="131.88" x2="36.53" y2="131.88" />
                                    <line class="cls-6" x1="31.23" y1="125.88" x2="36.53" y2="125.88" />
                                </g>
                                <g>
                                    <line class="cls-6" x1="31.23" y1="83.58" x2="36.53" y2="83.58" />
                                    <line class="cls-6" x1="31.23" y1="62.58" x2="36.53" y2="62.58" />
                                    <line class="cls-6" x1="31.23" y1="48.58" x2="36.53" y2="48.58" />
                                    <line class="cls-6" x1="31.23" y1="38.58" x2="36.53" y2="38.58" />
                                    <line class="cls-6" x1="31.23" y1="30.58" x2="36.53" y2="30.58" />
                                    <line class="cls-6" x1="31.23" y1="23.58" x2="36.53" y2="23.58" />
                                    <line class="cls-6" x1="31.23" y1="17.58" x2="36.53" y2="17.58" />
                                    <line class="cls-6" x1="31.23" y1="11.58" x2="36.53" y2="11.58" />
                                </g>
                                <line class="cls-6" x1="222.02" y1="332.96" x2="222.02" y2="343.56" />
                            </g>
                            <text class="cls-1" transform="translate(0 343.56)">
                                <tspan x="0" y="0">0.01</tspan>
                            </text>
                            <text class="cls-1" transform="translate(5.8 233.88)">
                                <tspan x="0" y="0">0.1</tspan>
                            </text>
                            <text class="cls-1" transform="translate(13.72 124.04)">
                                <tspan x="0" y="0">1</tspan>
                            </text>
                            <text class="cls-1" transform="translate(7.92 8.58)">
                                <tspan x="0" y="0">10</tspan>
                            </text>
                            <text class="cls-1" transform="translate(26.01 361.26)">
                                <tspan x="0" y="0">10</tspan>
                            </text>
                            <text class="cls-1" transform="translate(214.02 361.26)">
                                <tspan x="0" y="0">100</tspan>
                            </text>
                            <text class="cls-1" transform="translate(399.52 361.26)">
                                <tspan x="0" y="0">1000</tspan>
                            </text>
                            <transition name="fade">
                                <path v-show="visibility.mars" class="cls-3"
                                    d="M405.45,57.16c-43.27,11.81-87.35,20.67-131.83,26.49-15.89,2.08-31.9,3.77-47.92,3.34-48.22-1.3-93.62-21.62-137.54-41.57-17.26-7.84-32.36-14.7-49.62-22.55" />
                            </transition>
                            <transition name="fade">
                                <path v-show="visibility.earth" class="cls-2"
                                    d="M405.28,151.05c-43.2,15.55-88,27.94-133.05,36.8-42.92,8.43-87.76,13.69-130.03,2.47-17.09-4.53-33.36-11.66-49.55-18.76-18.58-8.15-35.53-15.58-54.11-23.73" />
                            </transition>
                            <transition name="fade">
                                <path v-show="visibility.titan" class="cls-5"
                                    d="M405.28,259.15c-60.25,15.79-124.47,23.92-183.84,5.1-10.79-3.42-21.28-7.69-31.72-12.06-52.51-21.97-100.06-44.42-151.18-69.45" />
                            </transition>
                            <transition name="fade">
                                <path v-show="visibility.venus" class="cls-4"
                                    d="M405.27,247.91c-33.32,9.04-58,17-102.59,31.04-38.65,12.17-54.09,25.49-111.75,20.48-53.92-4.69-103.18-24.41-152.39-46.95" />
                            </transition>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="rotated-text-container"></div>
        </div>
        <div class="flex justify-center">
            <span class="py-3 sm:p-5 sm:text-xl text-primary">Particle diameter (µm)</span>
        </div>
        <div class="flex justify-center">
            <div class="bg-primary-lighter p-5 pb-2 mb-5 rounded max-w-xl">
                <p class="text-center text-lg pb-2"><strong>Visibility toggles</strong></p>
                <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center">
                    <button class="p-3 rounded inline-flex items-center hover:bg-primary-light/10"
                        @click="toggleVisibility('mars')">
                        <span class="w-5 inline-block text-center"><i class="fal"
                                :class="visibility.mars ? 'fa-eye' : 'fa-eye-slash'"></i></span>
                        <span class="w-4 h-4 ml-2 bg-[#ed1c24] rounded-full"></span>
                        <span class="ml-2">Mars</span>
                    </button>
                    <button class="p-3 rounded inline-flex items-center hover:bg-primary-light/10"
                        @click="toggleVisibility('earth')">
                        <span class="w-5 inline-block text-center"><i class="fal"
                                :class="visibility.earth ? 'fa-eye' : 'fa-eye-slash'"></i></span>
                        <span class="w-4 h-4 ml-2 bg-[#93278f] rounded-full"></span>
                        <span class="ml-2">Earth</span>
                    </button>
                    <button class="p-3 rounded inline-flex items-center hover:bg-primary-light/10"
                        @click="toggleVisibility('titan')">
                        <span class="w-5 inline-block text-center"><i class="fal"
                                :class="visibility.titan ? 'fa-eye' : 'fa-eye-slash'"></i></span>
                        <span class="w-4 h-4 ml-2 bg-[#1448ff] rounded-full"></span>
                        <span class="ml-2">Titan</span>
                    </button>
                    <button class="p-3 rounded inline-flex items-center hover:bg-primary-light/10"
                        @click="toggleVisibility('venus')">
                        <span class="w-5 inline-block text-center"><i class="fal"
                                :class="visibility.venus ? 'fa-eye' : 'fa-eye-slash'"></i></span>
                        <span class="w-4 h-4 ml-2 bg-[#09892a] rounded-full"></span>
                        <span class="ml-2">Venus</span>
                    </button>
                    <button class="p-3 rounded inline-flex items-center hover:bg-primary-light/10"
                        @click="toggleVisibility('labels')">
                        <span class="w-5 inline-block text-center"><i class="fal"
                                :class="visibility.labels ? 'fa-eye' : 'fa-eye-slash'"></i></span>
                        <span class="ml-2">Planetary body labels</span>
                    </button>
                    <button class="p-3 rounded inline-flex items-center hover:bg-primary-light/10"
                        @click="toggleVisibility('hotspots')">
                        <span class="w-5 inline-block text-center"><i class="fal"
                                :class="visibility.hotspots ? 'fa-eye' : 'fa-eye-slash'"></i></span>
                        <span class="ml-2">Hotspots</span>
                    </button>
                </div>
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

/* SVG CSS */
.cls-1 {
    fill: #140f50;
    font-family: Lato-Regular, Lato, sans-serif;
    font-size: 10px;
}

.cls-2 {
    stroke: #93278f;
}

.cls-2,
.cls-3,
.cls-4,
.cls-5 {
    stroke-linecap: round;
}

.cls-2,
.cls-3,
.cls-4,
.cls-5,
.cls-6 {
    fill: none;
    stroke-miterlimit: 10;
}

.cls-3 {
    stroke: #ed1c24;
}

.cls-4 {
    stroke: #09892a;
}

.cls-5 {
    stroke: #1448ff;
}

.cls-6 {
    stroke: gray;
    stroke-width: .5px;
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