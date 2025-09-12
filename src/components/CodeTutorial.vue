<template>
  <div class="code-tutorial">
    <div class="flex flex-col md:flex-row gap-4 min-h-[600px]">
      <!-- Code Display -->
      <div class="code-container w-full md:w-1/2 p-4 bg-gray-50 rounded shadow">
        <pre ref="codePreElement">
          <code :class="`hljs language-${language}`" v-html="highlightedCode"></code>
        </pre>
      </div>

      <!-- Instructions and Navigation -->
      <div class="instruction-container w-full md:w-1/2 p-4 pb-16 bg-white rounded shadow relative">
        <div class="explanation mb-4 p-4 bg-blue-50 rounded min-h-48">
          <!-- <h3 class="text-lg font-semibold mb-2">Step {{ currentStep + 1 }} of {{ tutorial.steps.length }}</h3> -->
          <p v-html="currentStepData.explanation"></p>
        </div>

        <!-- Dynamic Data Boxes -->
        <template v-if="currentStepData.boxes" v-for="(box, index) in currentStepData.boxes" :key="index">
          <div class="data-box mb-4 p-4 bg-gray-100 rounded min-h-24">
            <h4 class="text-md font-semibold mb-2">{{ box.title }}:</h4>
            
            <!-- Values without keys (simple array of values) -->
            <div v-if="Array.isArray(box.values)" class="flex flex-col">
              <div v-for="(value, i) in box.values" :key="i" class="mb-1">
                <span v-if="box.useHtml" v-html="value" class="font-mono"></span>
                <span v-else class="font-mono">{{ value }}</span>
              </div>
            </div>
            
            <!-- Key-value pairs -->
            <div v-else class="flex flex-col">
              <div v-for="(value, key) in box.values" :key="key" class="flex mb-1">
                <span class="font-mono mr-2">{{ key }}:</span>
                <span v-if="box.useHtml" v-html="value" class="font-mono"></span>
                <span v-else class="font-mono">{{ value }}</span>
              </div>
            </div>
          </div>
        </template>

        <!-- Navigation Controls -->
        <div class="navigation absolute bottom-4 right-4 flex space-x-2">
          <button 
            @click="prevStep" 
            :disabled="currentStep <= 0"
            class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded disabled:bg-blue-300"
            aria-label="Previous step"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
          <button 
            @click="nextStep" 
            :disabled="currentStep >= tutorial.steps.length - 1"
            class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded disabled:bg-blue-300"
            aria-label="Next step"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';
// Import languages
import python from 'highlight.js/lib/languages/python';
import javascript from 'highlight.js/lib/languages/javascript';

// Register languages
hljs.registerLanguage('python', python);
hljs.registerLanguage('javascript', javascript);

const props = defineProps({
  tutorial: {
    type: Object,
    required: true
  },
  language: {
    type: String,
    default: 'python'
  }
});

// Reactive state
const currentStep = ref(0);
const codePreElement = ref(null);

// Keep track of the last valid explanation text and code
const lastExplanation = ref('');
const lastCode = ref(props.tutorial.code || '');

// Generate highlighted code with line markers
const highlightedCode = ref('');

// Track current highlights
const currentHighlightLines = ref([]);

const currentStepData = computed(() => {
  const step = props.tutorial.steps[currentStep.value] || { 
    lineNumber: 0, 
    explanation: '', 
    highlightLines: [],
  };
  
  // Handle missing explanation - reuse previous explanation
  if (step.explanation === undefined) {
    // Use the last explanation
    step.explanation = lastExplanation.value;
  } else if (step.explanation === '') {
    // Empty string explicitly clears the explanation
    lastExplanation.value = '';
  } else {
    // Update the last explanation if this step has one
    lastExplanation.value = step.explanation;
  }
  
  // Handle code changes
  if (step.code !== undefined) {
    lastCode.value = step.code;
  }
  
  // Update highlighted lines
  currentHighlightLines.value = step.highlightLines || [];
  
  return step;
});

// No longer needed - boxes are now structured in the data

// Methods
const nextStep = () => {
  if (currentStep.value < props.tutorial.steps.length - 1) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

// Function to update the highlighted code
const updateHighlightedCode = () => {
  // First highlight the code with highlight.js
  const tempElement = document.createElement('div');
  const codeElement = document.createElement('code');
  codeElement.className = `language-${props.language}`;
  codeElement.textContent = lastCode.value;
  tempElement.appendChild(codeElement);
  hljs.highlightElement(codeElement);
  
  // Split the highlighted code by lines
  const lines = codeElement.innerHTML.split('\n');
  
  // Create line elements with highlight classes
  const formattedLines = lines.map((line, index) => {
    const isHighlighted = currentHighlightLines.value.includes(index);
    const highlightClass = isHighlighted ? 'line-highlight' : '';
    return `<div class="hljs-line ${highlightClass}">${line || ' '}</div>`;
  });
  
  // Set the highlighted HTML
  highlightedCode.value = formattedLines.join('');
};

// Update highlights when step changes
watch(currentStep, () => {
  nextTick(() => {
    updateHighlightedCode();
  });
});

// Update when code changes
watch(() => lastCode.value, () => {
  updateHighlightedCode();
});

// Update when highlight lines change
watch(() => currentHighlightLines.value, () => {
  updateHighlightedCode();
});

// Update when language changes
watch(() => props.language, () => {
  updateHighlightedCode();
});

// Initialize on mount
onMounted(() => {
  updateHighlightedCode();
});
</script>

<style>
p {
  margin-bottom: 0.5rem;
}

.line-highlight {
  background-color: rgba(152, 236, 160, 0.3); /* Pale green background */
  display: block;
  border-radius: 4px;
}

/* Styling for highlight.js */
pre {
  margin: 0;
  padding: 1rem;
  padding-top: 0;
  border-radius: 0.25rem;
  overflow: auto;
  max-height: 400px;
}

.hljs-line {
  line-height: 1.6;
  min-height: 1.6em;
  white-space: pre;
  position: relative;
  padding: 0 0.5rem;
}

/* GitHub Light theme customizations */
.hljs {
  background: transparent;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
}

pre code.hljs {
  padding-top: 0;
}

/* Styling for inline code in explanations */
.explanation code {
  background-color: #f0f0f0;
  border-radius: 3px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 0.9em;
  padding: 0.2em 0.4em;
  color: #d73a49; /* GitHub style red for code */
}
</style>
