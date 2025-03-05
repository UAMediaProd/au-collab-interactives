<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  targetSelector: {
    type: String,
    default: null
  }
});

// Debug state for cursor position
const cursorPosition = ref({ x: 0, y: 0 });
const showDebugInfo = ref(true);
const copyStatus = ref('');
const targetElement = ref(null);

// Function to track cursor position as percentages
const trackCursorPosition = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  
  cursorPosition.value = {
    x: Math.round(x * 100) / 100,
    y: Math.round(y * 100) / 100
  };
};

// Toggle debug info visibility
const toggleDebugInfo = () => {
  showDebugInfo.value = !showDebugInfo.value;
};

// Copy position classes to clipboard
const copyPositionClasses = () => {
  const positionClasses = `top-[${cursorPosition.value.y}%] left-[${cursorPosition.value.x}%]`;
  navigator.clipboard.writeText(positionClasses);
  
  // Show feedback
  copyStatus.value = 'Copied!';
  setTimeout(() => {
    copyStatus.value = '';
  }, 1500);
};

// Add keyboard listener for 'c' key
onMounted(() => {
  // Find target element if selector is provided
  if (props.targetSelector) {
    targetElement.value = document.querySelector(props.targetSelector);
    if (targetElement.value) {
      targetElement.value.addEventListener('mousemove', trackCursorPosition);
    }
  }

  // Add keyboard listener
  window.addEventListener('keydown', (event) => {
    if (event.key === 'c' && showDebugInfo.value) {
      copyPositionClasses();
    }
  });
});
</script>

<template>
  <!-- Debug info panel -->
  <div v-if="showDebugInfo" class="debug-panel fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded-lg z-50 font-mono text-sm">
    <div class="flex justify-between items-center mb-2">
      <h4 class="font-bold">Cursor Position</h4>
      <button @click="toggleDebugInfo" class="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded">Hide</button>
    </div>
    <div>
      <p>Left: <span class="font-bold">{{ cursorPosition.x }}%</span></p>
      <p>Top: <span class="font-bold">{{ cursorPosition.y }}%</span></p>
    </div>
    <div class="mt-2 text-xs text-gray-300">
      <p>Use these values for hotspot positioning:</p>
      <div class="flex items-center">
        <code class="block bg-gray-800 p-1 mt-1 rounded flex-grow">
          top-[{{ cursorPosition.y }}%] left-[{{ cursorPosition.x }}%]
        </code>
        <button 
          @click="copyPositionClasses" 
          class="ml-2 mt-1 bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs"
        >
          Copy
        </button>
      </div>
      <p class="text-green-400 h-5 mt-1">{{ copyStatus }}</p>
      <p class="mt-1"><kbd class="bg-gray-700 px-1 rounded">c</kbd> key to copy position</p>
    </div>
  </div>
</template>

<style scoped>
.debug-panel {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
