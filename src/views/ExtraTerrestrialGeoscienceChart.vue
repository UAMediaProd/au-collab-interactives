<script setup>
import { ref } from 'vue';

// Create reactive state for visibility of each element
const visibility = ref({
    quartz: true,
    basalt: true,
    organics: true,
    water: true,
    labels: true
});

const toggleVisibility = (elementId) => {
    visibility.value[elementId] = !visibility.value[elementId];
}
</script>

<template>
    <!-- <button id="button" class="border" @click="toggleVisibility($event)">Toggle visibility</button> -->
    <!-- max-w-[900px] mx-auto flex h-screen items-center justify-center -->
    <div id="graph" class="max-w-[900px] mx-auto flex flex-col border">
        <div class="flex justify-between items-center">
            <span class="rotated-text px-3 sm:p-5 sm:text-xl text-primary">
                Frictional shear velocity (cm/s)
            </span>
            <div class="flex-auto">
                <!-- <img src="@/assets/chart.svg" alt="Extra Terrestrial Geoscience Chart" /> -->
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 405 343.7">
                    <g>
                        <g id="Layer_1">
                            <g>
                                <g id="Text">
                                    <text class="cls-1" transform="translate(11.9 341.5)">
                                        <tspan x="0" y="0">0.001</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(86.9 341.5)">
                                        <tspan x="0" y="0">0.01</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(164.9 341.5)">
                                        <tspan x="0" y="0">0.1</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(243.9 341.5)">
                                        <tspan x="0" y="0">1</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(310 341.9)">
                                        <tspan x="0" y="0">10</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(0 268.9)">
                                        <tspan x="0" y="0">10</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(11.6 265.6) scale(.6)">
                                        <tspan x="0" y="0">0</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(0 325.9)">
                                        <tspan x="0" y="0">10</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(11.6 322.6) scale(.6)">
                                        <tspan x="0" y="0">-1</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(0 205.9)">
                                        <tspan x="0" y="0">10</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(11.6 202.6) scale(.6)">
                                        <tspan x="0" y="0">1</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(0 136.9)">
                                        <tspan x="0" y="0">10</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(11.6 133.6) scale(.6)">
                                        <tspan x="0" y="0">2</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(0 74.9)">
                                        <tspan x="0" y="0">10</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(11.6 71.6) scale(.6)">
                                        <tspan x="0" y="0">3</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(0 12.9)">
                                        <tspan x="0" y="0">10</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(11.6 9.6) scale(.6)">
                                        <tspan x="0" y="0">4</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(390 273.9)">
                                        <tspan x="0" y="0">10</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(401.6 270.6) scale(.6)">
                                        <tspan x="0" y="0">1</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(389 206.9)">
                                        <tspan x="0" y="0">10</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(400.6 203.6) scale(.6)">
                                        <tspan x="0" y="0">2</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(389 141.9)">
                                        <tspan x="0" y="0">10</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(400.6 138.6) scale(.6)">
                                        <tspan x="0" y="0">3</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(389 76.9)">
                                        <tspan x="0" y="0">10</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(400.6 73.6) scale(.6)">
                                        <tspan x="0" y="0">4</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(389 11.9)">
                                        <tspan x="0" y="0">10</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(400.6 8.6) scale(.6)">
                                        <tspan x="0" y="0">5</tspan>
                                    </text>
                                    <text class="cls-1" transform="translate(373 341.9)">
                                        <tspan x="0" y="0">100</tspan>
                                    </text>
                                </g>
                                <transition name="fade">
                                    <g v-show="visibility.quartz">
                                        <path class="cls-2"
                                            d="M32,308.1c50.2-25,103.3-48.2,158.9-55.9,11.5-1.6,23.4-1.5,34.3-5.4,29.8-10.7,47.8-27.7,77.2-39.6,15.4-6.2,62.6-29.1,78.6-35.1" />
                                        <path class="cls-2"
                                            d="M187.4,252.7c21.7-27.8,44-55.3,73.9-74,8.1-5.1,16.7-9.3,25.3-13.5,32-15.7,61.8-29.6,94.4-44.1" />
                                        <path class="cls-2"
                                            d="M129.3,266.6c16.3-30.5,35.6-59.3,55.7-87.5,14.1-19.9,28.8-39.8,46.6-56.4,24.5-22.8,49.2-34.1,79.4-48.6,20.6-9.9,48.4-24.5,70-32" />
                                    </g>
                                </transition>
                                <transition name="fade">
                                    <g v-show="visibility.basalt">
                                        <path class="cls-3"
                                            d="M32,319.1c60.1-28.9,120.3-53.5,184.8-62.2,9.3-1.3,22.8-4.5,31.2-8.8,12-6,21.6-11.1,31-17,23.2-14.5,42.8-20.9,67.9-31.7,11.9-5.2,22.2-10.1,34.1-15.3" />
                                        <path class="cls-3"
                                            d="M195,260.1c22.7-35.1,52.6-63.5,90-83,23-12,87.7-41.2,96-45" />
                                        <path class="cls-3"
                                            d="M381,54.1c-100,41-131.2,67.3-137,72-10.7,8.7-19.4,19.5-28.3,30-28.1,32.9-59.8,80.1-78.7,119" />
                                    </g>
                                </transition>
                                <transition name="fade">
                                    <g v-show="visibility.organics">
                                        <path class="cls-4" d="M189,274.1c20.3-34,51.8-61.1,86-81s70.4-32.6,106-50" />
                                        <path class="cls-4"
                                            d="M130,289c7.1-16,17.2-32,26.7-46.7,23.7-36.6,46.7-74.4,80.3-102.2,29.7-24.6,66.5-40,101.6-55.8,14.3-6.4,28.1-12.7,42.4-19.2" />
                                        <path class="cls-4"
                                            d="M50.4,321c33-15,66.9-28.2,101.4-39.4,13.9-4.5,24.6-5.7,39.1-7.5,16.2-2,35-5.7,50-12,5.7-2.4,17.6-9.9,23-13,42-24,73-33,117-54" />
                                    </g>
                                </transition>
                                <transition name="fade">
                                    <g v-show="visibility.water">
                                        <path class="cls-5"
                                            d="M71.3,322.5c41.3-18.9,76.3-35.4,123.7-42.4,18.5-2.7,41.9-5.5,59-13,14.4-6.3,26-17,39.5-25,8.4-5,17.5-8.8,26.5-12.6,20.6-8.8,41.3-17.6,62-26.4" />
                                        <path class="cls-5"
                                            d="M195.3,280.1c20.2-33,47.7-60,83.7-80,33.8-18.8,66.1-33.7,102-48" />
                                        <path class="cls-5"
                                            d="M139.1,293.9c26-50,47.4-83.2,77.9-120.8,5.7-7,11.7-13.6,18-20,27-27.6,110.5-63.9,146-79" />
                                    </g>
                                </transition>
                                <g id="Graph_border_and_lines">
                                    <polyline class="cls-6" points="384.5 6.6 384.5 325.6 26.5 325.6 26.5 6.6" />
                                    <line class="cls-6" x1="26.5" y1="69.6" x2="36.5" y2="69.6" />
                                    <line class="cls-6" x1="26.5" y1="134.6" x2="36.5" y2="134.6" />
                                    <line class="cls-6" x1="26.5" y1="199.6" x2="36.5" y2="199.6" />
                                    <line class="cls-6" x1="26.5" y1="264.6" x2="36.5" y2="264.6" />
                                    <line class="cls-6" x1="374.5" y1="73.6" x2="384.5" y2="73.6" />
                                    <line class="cls-6" x1="374.5" y1="138.6" x2="384.5" y2="138.6" />
                                    <line class="cls-6" x1="374.5" y1="203.6" x2="384.5" y2="203.6" />
                                    <line class="cls-6" x1="374.5" y1="268.6" x2="384.5" y2="268.6" />
                                    <line class="cls-6" x1="317.5" y1="315.6" x2="317.5" y2="325.6" />
                                    <line class="cls-6" x1="244.2" y1="315.6" x2="244.2" y2="325.6" />
                                    <line class="cls-6" x1="170.8" y1="315.6" x2="170.8" y2="325.6" />
                                    <line class="cls-6" x1="97.5" y1="315.6" x2="97.5" y2="325.6" />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <span class="rotated-text px-3 sm:p-5 sm:text-xl text-primary">
                Mean flow velocity (cm/s)</span>
        </div>
        <div class="flex justify-center">
            <span class="py-3 sm:p-5 sm:text-xl text-primary">Grain diameter (mm)</span>
        </div>
        <div class="flex justify-center">
            <div class="bg-primary-lighter p-5 pb-2 mb-5 rounded max-w-xl">
                <p class="text-center text-lg pb-2"><strong>Visibility toggles</strong></p>
                <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center">
                    <button class="p-3 rounded inline-flex items-center hover:bg-primary-light/10" @click="toggleVisibility('quartz')">
                        <span class="w-5 inline-block text-center"><i class="fal"
                                :class="visibility.quartz ? 'fa-eye' : 'fa-eye-slash'"></i></span>
                        <span class="w-4 h-4 ml-2 bg-[#93278f] rounded-full"></span>
                        <span class="ml-2">Quartz in H<sub>2</sub>O on Earth</span>
                    </button>
                    <button class="p-3 rounded inline-flex items-center hover:bg-primary-light/10" @click="toggleVisibility('basalt')">
                        <span class="w-5 inline-block text-center"><i class="fal"
                                :class="visibility.basalt ? 'fa-eye' : 'fa-eye-slash'"></i></span>
                        <span class="w-4 h-4 ml-2 bg-[#ed1c24] rounded-full"></span>
                        <span class="ml-2">Basalt in H<sub>2</sub>O on Mars</span>
                    </button>
                    <button class="p-3 rounded inline-flex items-center hover:bg-primary-light/10" @click="toggleVisibility('organics')">
                        <span class="w-5 inline-block text-center"><i class="fal"
                                :class="visibility.organics ? 'fa-eye' : 'fa-eye-slash'"></i></span>
                        <span class="w-4 h-4 ml-2 bg-[#09892a] rounded-full"></span>
                        <span class="ml-2">Organics in CH<sub>4</sub>N<sub>2</sub> on Titan</span>
                    </button>
                    <button class="p-3 rounded inline-flex items-center hover:bg-primary-light/10" @click="toggleVisibility('water')">
                        <span class="w-5 inline-block text-center"><i class="fal"
                                :class="visibility.water ? 'fa-eye' : 'fa-eye-slash'"></i></span>
                        <span class="w-4 h-4 ml-2 bg-[#1448ff] rounded-full"></span>
                        <span class="ml-2">H<sub>2</sub>O in CH<sub>4</sub>N<sub>2</sub> on Titan</span>
                    </button>
                    <button class="p-3 rounded inline-flex items-center hover:bg-primary-light/10" @click="toggleVisibility('labels')">
                        <span class="w-5 inline-block text-center"><i class="fal"
                                :class="visibility.labels ? 'fa-eye' : 'fa-eye-slash'"></i></span>
                        <span class="ml-2">Labels (Coming soon)</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
/* Add transition classes for fade effect */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.rotated-text {
    writing-mode: sideways-lr;
    text-orientation: mixed;
    white-space: nowrap;
    /* Ensures single-line text */
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