<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isPortrait = ref(false);
const isDismissed = ref(false);

const checkOrientation = () => {
  isPortrait.value = window.innerWidth < window.innerHeight;
};

const dismissBanner = () => {
  isDismissed.value = true;
  // Store dismissal in session storage so it persists during the session
  sessionStorage.setItem('rotateBannerDismissed', 'true');
};

onMounted(() => {
  // Check if banner was previously dismissed in this session
  if (sessionStorage.getItem('rotateBannerDismissed') === 'true') {
    isDismissed.value = true;
  }
  
  checkOrientation();
  window.addEventListener('resize', checkOrientation);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkOrientation);
});
</script>

<template>
  <div>
    <!-- Position the banner at the top of the viewport -->
    <div 
      v-if="isPortrait && !isDismissed" 
      class="fixed top-0 left-0 right-0 z-50 bg-primary text-white px-4 py-3 flex items-center justify-between shadow-md banner-animation"
    >
      <div class="flex items-center">
        <!-- <i class="far fa-mobile-android fa-rotate-90 mr-3 text-xl"></i> -->
         <img src="@/assets/rotate-device.svg" alt="Rotate device" class="size-6 mr-3 fill-white">
        <span class="text-sm sm:text-base">Rotate your device for a better experience</span>
      </div>
      <button @click="dismissBanner" class="text-white hover:text-gray-200 focus:outline-none ml-2">
        <i class="far fa-times text-lg"></i>
      </button>
    </div>
    
    <!-- Add a spacer to push content down when banner is visible -->
    <div v-if="isPortrait && !isDismissed" class="h-12"></div>
  </div>
</template>

<style scoped>
/* Simple animation for the banner */
.banner-animation {
  animation: slide-down 0.3s ease-out;
}

@keyframes slide-down {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
