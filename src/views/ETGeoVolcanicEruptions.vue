<script setup>
import Hotspot from '@/components/Hotspot.vue';
import RotateDeviceBanner from '@/components/RotateDeviceBanner.vue';
import ModalDialog from '@/components/ModalDialog.vue';
// import PositionDebugger from '@/components/PositionDebugger.vue';
import { ref } from 'vue';


const modalVisibility = ref({
    iceland: false,
    sakurajima: false,
    hawaii: false,
    mountStHelens: false,
    volcanDeFuego: false,
    volcanoUbinas: false,
    mayon: false,
    semeru: false,
    mtEtna: false,
    erteAle: false
});

const activateModal = (modal) => {
    Object.keys(modalVisibility.value).forEach(key => modalVisibility.value[key] = false);
    modalVisibility.value[modal] = !modalVisibility.value[modal];
}

</script>

<template>
    <RotateDeviceBanner class="sm:hidden" />
    <h2 class="text-4xl sm:text-5xl text-center text-primary p-3 sm:p-5">Volcanic Eruptions</h2>
    <div id="graph" class="max-w-[900px] mx-auto flex flex-col select-none overflow-x-hidden">
        <div class="relative">
            <div id="map-container" class="absolute inset-0 h-full w-full flex">
                <!-- Iceland -->
                <Hotspot class="absolute top-[14.35%] left-[39.83%]" :onClick="() => activateModal('iceland')" />
                <ModalDialog class="w-full" :isVisible="modalVisibility.iceland" :onClose="() => modalVisibility.iceland = false">
                    <h3>Iceland (2021)</h3>
                    <p><strong>Type</strong>: Shield, stratovolcanoes, subglacial and calderas</p>
                    <p><strong>Composition</strong>: Basalt</p>
                    <p><strong>Summary</strong>: They often erupt under glaciers, creating glacial floods.
                        Nearly
                        thirty volcanoes are known to have erupted in the last 11.7k yrs. Including Eldgjá which
                        is
                        the largest lava eruption in human history.</p>
                    <div class="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/S5qYg1OTUxs?&amp;clip=Ugkx7vU1dkKaoxJ1LVM_OR2SDHril6y__deM&amp;clipt=EMjTBhioqAo"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </ModalDialog>
                <!-- Sakurajima  -->
                <Hotspot class="absolute top-[30.76%] left-[87.94%]" :onClick="() => activateModal('sakurajima')" />
                <ModalDialog class="w-full" :isVisible="modalVisibility.sakurajima"
                    :onClose="() => modalVisibility.sakurajima = false">
                    <h3>Sakurajima, Japan (2024)</h3>
                    <p><strong>Type</strong>: Stratovolcano</p>
                    <p><strong>Composition</strong>: Andesite to Dacite</p>
                    <p><strong>Summary</strong>: Explosive eruption with ash clouds rising to approximately 3km
                    </p>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/Jfx0ME2WaXk" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </ModalDialog>
                <!-- Hawaii -->
                <Hotspot class="absolute top-[40.83%] left-[3.28%]" :onClick="() => activateModal('hawaii')" />
                <ModalDialog class="w-full" :isVisible="modalVisibility.hawaii" :onClose="() => modalVisibility.hawaii = false">
                    <h3>Hawaii, USA</h3>
                    <p><strong>Type</strong>: Shield volcanoes</p>
                    <p><strong>Composition</strong>: Basalt</p>
                    <p><strong>Summary</strong>: They are part of a chain that stretches across the Pacific
                        Ocean,
                        and are built by the Pacifc plate moving over a mantle plume </p>
                    <a href="https://adelaide.au.panopto.com/Panopto/Pages/Viewer.aspx?id=95f28523-4741-4c71-9372-b2a5000d6e0a" target="_blank"><button class="rounded border border-secondary text-secondary py-2 px-3 my-4 hover:bg-secondary-lighter"><i class="fas fa-external-link mr-2"></i>Watch on Panopto</button></a>
                </ModalDialog>
                <!-- Mount St Helens -->
                <Hotspot class="absolute top-[28.71%] left-[9.83%]" :onClick="() => activateModal('mountStHelens')" />
                <ModalDialog class="w-full" :isVisible="modalVisibility.mountStHelens"
                    :onClose="() => modalVisibility.mountStHelens = false">
                    <h3>Mount St Helens, USA (1980)</h3>
                    <p><strong>Type</strong>: Stratovolcano</p>
                    <p><strong>Composition</strong>: Basalt to Dacite</p>
                    <p><strong>Summary</strong>: The last eruption included lateral blast that involved
                        landslide
                        and directed explosion. It has steep slopes and its crater currently contains a glacier.
                        Eruptions have included lava, ash, and debris flows</p>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/bgRnVhbfIKQ" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </ModalDialog>
                <!-- Volcan de Fuego -->
                <Hotspot class="absolute top-[45.12%] left-[19.94%]" :onClick="() => activateModal('volcanDeFuego')" />
                <ModalDialog class="w-full" :isVisible="modalVisibility.volcanDeFuego"
                    :onClose="() => modalVisibility.volcanDeFuego = false">
                    <h3>Volcan de Fuego, Guatemala (2024)</h3>
                    <p><strong>Type</strong>: Stratovolcano</p>
                    <p><strong>Composition</strong>: Basalt to Andesite</p>
                    <p><strong>Summary</strong>: It is part of the volcano complex “Acatenango”. Its eruptions
                        have
                        included frequent small eruptions, ash plumes, pyroclastic flows, lava flows and ash.
                    </p>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/3jOFkq6ebyw" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </ModalDialog>
                <!-- Volcano Ubinas -->
                <Hotspot class="absolute top-[53.69%] left-[21.94%]" :onClick="() => activateModal('volcanoUbinas')" />
                <ModalDialog class="w-full" :isVisible="modalVisibility.volcanoUbinas"
                    :onClose="() => modalVisibility.volcanoUbinas = false">
                    <h3>Volcano Ubinas, Peru (2021)</h3>
                    <p><strong>Type</strong>: Stratovolcano</p>
                    <p><strong>Composition</strong>: Andesite to Rhyolite</p>
                    <p><strong>Summary</strong>: 1.4 km caldera diameter with cone shape mostly made of ash.
                        Activity has included long periods of degassing, pyroclastic and mudflows.</p>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/2VLE1CQsj-c" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </ModalDialog>
                <!-- Mayon -->
                <Hotspot class="absolute top-[45.67%] left-[82.83%]" :onClick="() => activateModal('mayon')" />
                <ModalDialog class="w-full" :isVisible="modalVisibility.mayon" :onClose="() => modalVisibility.mayon = false">
                    <h3>Mayon, Philippines (2018)</h3>
                    <p><strong>Type</strong>: Stratovolcano</p>
                    <p><strong>Composition</strong>: Basalt to Andesite</p>
                    <p><strong>Summary</strong>: It has a near-perfect cone shape and steep slopes. It has had
                        frequent eruptions including lava flows, pyroclastic flows, mudflows, and gas-and-ash
                        plumes. </p>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/aeWaEW8Vjbw" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </ModalDialog>
                <!-- Semeru -->
                <Hotspot class="absolute top-[56.49%] left-[80.72%]" :onClick="() => activateModal('semeru')" />
                <ModalDialog class="w-full" :isVisible="modalVisibility.semeru" :onClose="() => modalVisibility.semeru = false">
                    <h3>Semeru, Indonesia (2024)</h3>
                    <p><strong>Type</strong>: Stratovolcano</p>
                    <p><strong>Composition</strong>: Basalt to Andesite</p>
                    <p><strong>Summary</strong>: Frequent eruptions with ongoing lava flows. It also includes
                        ash plumes, pyroclastic flows and avalanches</p>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/uh824dzCSUE" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </ModalDialog>
                <!-- Mt Etna -->
                <Hotspot class="absolute top-[28.52%] left-[50.5%]" :onClick="() => activateModal('mtEtna')" />
                <ModalDialog class="w-full" :isVisible="modalVisibility.mtEtna" :onClose="() => modalVisibility.mtEtna = false">
                    <h3>Mt Etna, Sicily (2024)</h3>
                    <p><strong>Type</strong>: Stratovolcano</p>
                    <p><strong>Composition</strong>: Trachybasalt to phonotephrite</p>
                    <p><strong>Summary</strong>: Has a long documented history of activity, dating back to 1500
                        C.E. Typically erupts basaltic lava flows and known for 'fire fountaining' explosive
                        behaviour.</p>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/Y3n4p8Aj3FU" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </ModalDialog>
                <!-- Erte Ale -->
                <Hotspot class="absolute top-[44.56%] left-[57.22%]" :onClick="() => activateModal('erteAle')" />
                <ModalDialog class="w-full" :isVisible="modalVisibility.erteAle" :onClose="() => modalVisibility.erteAle = false">
                    <h3>Erte Ale, Ethiopia (2021)</h3>
                    <p><strong>Type</strong>: Shield volcano</p>
                    <p><strong>Composition</strong>: Basalt to andesite</p>
                    <p><strong>Summary</strong>: Magmatism is caused by rifting of the crust as Africa and Asia
                        move apart. It is one of a view volcanoes in the world with an active lava lake.</p>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/Vw_wZTox2yE" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </ModalDialog>
            </div>
            <img src="@/assets/map.jpg" alt="Map of the world" class="w-100">
        </div>

        <!-- Position Debugger Component -->
        <!-- <PositionDebugger targetSelector="#map-container" /> -->
    </div>
</template>

<style scoped>
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    /* 16:9 aspect ratio (9/16 = 0.5625) */
    margin-top: 1rem;
    margin-bottom: 0.5rem;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
}
</style>

<style>
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
