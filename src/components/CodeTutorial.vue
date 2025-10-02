<template>
  <div class="code-tutorial">
    <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <!-- Left column: Code + Explanation + Navigation -->
        <div class="w-2/3 flex flex-col gap-4">
          <!-- Code Display -->
          <div class="code-container p-4 bg-gray-50 rounded shadow h-[24rem]">
            <pre ref="codePreElement">
              <code :class="`hljs language-${language}`" v-html="highlightedCode"></code>
            </pre>
          </div>
          
          <!-- Explanation -->
          <div class="explanation p-4 bg-gray-50 shadow rounded h-[19rem] flex flex-col">
            <div class="flex-grow overflow-auto">
              <p v-html="currentStepData.explanation"></p>
            </div>
            <!-- Navigation Controls -->
            <div class="navigation flex justify-center space-x-2 pt-2 mt-auto">
              <button 
                @click="prevStep" 
                :disabled="currentStep <= 0"
                class="w-20 h-10 flex items-center justify-center bg-[#666] text-white rounded disabled:bg-[#CCC]"
                aria-label="Previous step"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
              <button 
                @click="nextStep" 
                :disabled="currentStep >= tutorial.steps.length - 1"
                class="w-20 h-10 flex items-center justify-center bg-[#666] text-white rounded disabled:bg-[#CCC]"
                aria-label="Next step"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
        </div>
        
        <!-- Right column: Data Boxes -->
        <div class="w-1/3 p-4 bg-gray-50 rounded shadow relative">
          <!-- SVG overlay for arrows -->
          <svg class="arrows-svg" ref="arrowsSvg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 10;">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="black"/>
              </marker>
            </defs>
            <!-- Arrows will be added here dynamically -->
          </svg>
          
          <!-- Dynamic Data Boxes -->
          <template v-if="currentStepData.boxes" v-for="(box, index) in currentStepData.boxes" :key="index">
            <div class="data-box mb-4 p-4 bg-white border-2 border-gray rounded min-h-[12rem] relative">
              <h4 class="text-md font-semibold mb-2">{{ box.title }}:</h4>
              
              <!-- Values without keys (simple array of values) -->
              <div v-if="Array.isArray(box.values)" class="flex flex-col">
                <div v-for="(value, i) in box.values" :key="i" class="mb-1">
                  <span v-if="box.useHtml" v-html="value" class="font-mono"></span>
                  <span v-else :class="['font-mono', box.title !== 'Output' ? 'value-box' : '']">{{ value }}</span>
                </div>
              </div>
              
              <!-- Key-value pairs -->
              <div v-else class="grid grid-cols-[2fr_1fr] gap-x-4 gap-y-1">
                <template v-for="(valueData, key) in box.values" :key="key">
                  <!-- Determine if this is a simple value or an object with metadata -->
                  <template v-if="typeof valueData === 'object' && valueData !== null && 'value' in valueData">
                    <!-- This is a value with metadata -->
                    <!-- Only show variable name if named=true (default) or not specified -->
                    <div v-if="valueData.named !== false" class="font-mono variable-name m-auto">
                      <span
                        :data-var-name="key"
                        :id="`var-${box.title}-${key}`"
                        :ref="el => { if (el) varRefs.set(`var-${box.title}-${key}`, el) }"
                      >{{ key.startsWith('_') ? '' : key }}</span>
                    </div>
                    <!-- For unnamed values, keep the grid layout with an empty cell -->
                    <div v-else class="font-mono variable-name m-auto"></div>
                    
                    <div class="m-auto">
                      <span 
                        v-if="box.useHtml" 
                        v-html="valueData.value" 
                        class="font-mono"
                        :id="`val-${box.title}-${key}`"
                        :ref="el => { if (el) valueRefs.set(`val-${box.title}-${key}`, el) }"
                      ></span>
                      <span 
                        v-else 
                        :class="['font-mono', box.title !== 'Output' ? 'value-box' : '']"
                        :id="`val-${box.title}-${key}`"
                        :ref="el => { if (el) valueRefs.set(`val-${box.title}-${key}`, el) }"
                      >{{ valueData.value }}</span>
                    </div>
                  </template>
                  
                  <!-- Legacy support for simple values without metadata -->
                  <template v-else>
                    <div class="font-mono variable-name">
                      <span
                        :data-var-name="key"
                        :id="`var-${box.title}-${key}`"
                        :ref="el => { if (el) varRefs.set(`var-${box.title}-${key}`, el) }"
                      >{{ key === '' ? '' : key }}</span>
                    </div>
                    <div class="m-auto">
                      <span 
                        v-if="box.useHtml" 
                        v-html="valueData" 
                        class="font-mono"
                        :id="`val-${box.title}-${key}`"
                        :ref="el => { if (el) valueRefs.set(`val-${box.title}-${key}`, el) }"
                      ></span>
                      <span 
                        v-else 
                        :class="['font-mono', box.title !== 'Output' ? 'value-box' : '']"
                        :id="`val-${box.title}-${key}`"
                        :ref="el => { if (el) valueRefs.set(`val-${box.title}-${key}`, el) }"
                      >{{ valueData }}</span>
                    </div>
                  </template>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
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
const arrowsSvg = ref(null);

// Maps to store references to variable and value DOM elements
const varRefs = new Map();
const valueRefs = new Map();
const connections = ref([]);

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

// Draw arrows between variables and their values
const drawArrows = () => {
  // Clear any existing arrows
  if (arrowsSvg.value) {
    const arrowElements = arrowsSvg.value.querySelectorAll('line.var-arrow');
    arrowElements.forEach(arrow => arrow.remove());
  }
  
  // Find all Memory boxes
  const memoryBoxes = document.querySelectorAll('.data-box');
  memoryBoxes.forEach(box => {
    const boxTitle = box.querySelector('h4')?.textContent?.trim().replace(':', '');
    if (!boxTitle?.includes('Memory')) return;
    
    // Find the current box data
    let boxData = null;
    if (currentStepData.value.boxes) {
      boxData = currentStepData.value.boxes.find(b => 
        b.title === boxTitle || b.title.includes(boxTitle) || boxTitle.includes(b.title)
      );
    }
    
    if (!boxData?.connections) return;
    
    // Process each connection
    boxData.connections.forEach(connection => {
      const fromVar = connection.from;
      const toValue = connection.toValue;
      const toKey = connection.toKey;
      
      if (!fromVar) return;
      if (!toValue && !toKey) return;
      
      // Find the source variable element
      const sourceVarEl = box.querySelector(`[data-var-name="${fromVar}"]`);
      if (!sourceVarEl) return;
      
      let targetValueEl = null;
      
      // Case 1: Using toKey to point to another variable's value
      if (toKey) {
        // Find the value element associated with the specified key
        const targetValueSelector = `#val-${boxData.title.replace(/\s+/g, '-')}-${toKey}`;
        targetValueEl = box.querySelector(targetValueSelector);
      }
      // Case 2: Using toValue to point to a value by its content
      else if (toValue) {
        // Find all value elements in this box
        const valueElements = box.querySelectorAll('.value-box');
        
        // Check each value element to find the one matching our target value
        valueElements.forEach(valueEl => {
          // Extract the raw value - handle both simple values and metadata objects
          let elValue;
          
          // Get the box's original value data
          const keyName = valueEl.id.split('-').pop(); // Extract key from id
          if (!keyName) return;
          
          // Find the original value in boxData
          const originalValue = boxData.values[keyName];
          
          // Extract the actual value depending on if it's a simple value or one with metadata
          if (typeof originalValue === 'object' && originalValue !== null && 'value' in originalValue) {
            elValue = originalValue.value;
          } else {
            elValue = originalValue;
          }
          
          // Compare with the toValue
          if (elValue !== undefined && elValue.toString() === toValue.toString()) {
            targetValueEl = valueEl;
          }
          
          // Fallback to text content if the above approach fails
          if (!targetValueEl) {
            const textContent = valueEl.textContent?.trim();
            if (textContent === toValue.toString()) {
              targetValueEl = valueEl;
            }
          }
        });
      }
      
      if (sourceVarEl && targetValueEl) {
        createArrow(sourceVarEl, targetValueEl);
      }
    });
  });
};

// Create an arrow between two DOM elements
const createArrow = (fromElement, toElement) => {
  if (!arrowsSvg.value || !fromElement || !toElement) return;
  
  // Get the positions relative to the SVG
  const svgRect = arrowsSvg.value.getBoundingClientRect();
  const fromRect = fromElement.getBoundingClientRect();
  const toRect = toElement.getBoundingClientRect();
  
  // Calculate start point (right edge of text span) and end point (left edge of value)
  // Add 5px offset on each end for better spacing
  const fromX = fromRect.left + fromRect.width - svgRect.left + 5;
  const fromY = fromRect.top + fromRect.height / 2 - svgRect.top;
  const toX = toRect.left - svgRect.left - 5;
  const toY = toRect.top + toRect.height / 2 - svgRect.top;
  
  // Create the arrow line
  const arrowLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  arrowLine.setAttribute('x1', fromX);
  arrowLine.setAttribute('y1', fromY);
  arrowLine.setAttribute('x2', toX);
  arrowLine.setAttribute('y2', toY);
  arrowLine.setAttribute('stroke', 'black');
  arrowLine.setAttribute('stroke-width', '1.5');
  arrowLine.setAttribute('marker-end', 'url(#arrowhead)');
  arrowLine.classList.add('var-arrow');
  
  arrowsSvg.value.appendChild(arrowLine);
};

// Update arrows when data changes
watch(currentStep, () => {
  nextTick(() => {
    // Clear ref maps when step changes
    varRefs.clear();
    valueRefs.clear();
    
    // Need to wait for DOM to update before drawing arrows
    setTimeout(() => {
      drawArrows();
    }, 50);
  });
});

// Handle keyboard navigation
const handleKeyDown = (event) => {
  // Only handle arrow keys
  if (event.key === 'ArrowLeft') {
    // Left arrow - previous step
    if (currentStep.value > 0) {
      prevStep();
    }
  } else if (event.key === 'ArrowRight') {
    // Right arrow - next step
    if (currentStep.value < props.tutorial.steps.length - 1) {
      nextStep();
    }
  }
};

// Initialize on mount
onMounted(() => {
  updateHighlightedCode();
  
  // Draw arrows after initial render
  nextTick(() => {
    setTimeout(() => {
      drawArrows();
    }, 100);
  });
  
  // Add keyboard event listener
  window.addEventListener('keydown', handleKeyDown);
});

// Clean up event listeners on unmount
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
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
  /* Probably gonna need to switch this back on at some point */
  /* overflow: auto; */
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
  padding: 0;
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

.variable-name {
  padding: calc(0.1rem + 1px) 0;
}

.value-box {
  border: 1px solid black;
  padding: 0.1rem 0.3rem;
  background: white;
  position: relative;
  display: inline-block;
}

del {
  position: relative;
  display: inline-block;
  text-decoration: none; /* Remove the default line */
}

del::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #d73a49;
  left: 0;
  top: 50%;
  /* This transformation ensures the line goes from bottom-left to top-right */
  transform-origin: center;
  transform: translateY(-50%) rotate(-12deg) scaleX(1.2);
}
</style>
