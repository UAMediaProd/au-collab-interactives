<template>
  <div class="code-tutorial">
    <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <!-- Left column: Code + Explanation + Navigation -->
        <div :class="[computedCodeWidth, 'flex', 'flex-col', 'gap-4']">
          <!-- Code Display -->
          <div v-if="showCode" class="code-container p-4 bg-gray-50 rounded shadow" :class="codeHeight">
            <!-- Supplementary Info 2 -->
            <div v-if="currentStepData.info2" v-html="currentStepData.info2" class="info2" style="min-height: 24rem;"></div>
            <pre v-else ref="codePreElement"><code :class="`hljs language-${currentLanguage}`" v-html="highlightedCode"></code></pre>
          </div>
          
          <!-- Explanation -->
          <div ref="explanationElement" class="explanation p-4 bg-gray-50 shadow rounded min-h-[19rem] h-full flex flex-col">
            <div class="flex-grow overflow-auto">
              <p v-html="currentStepData.explanation"></p>
            </div>
            <!-- Navigation Controls -->
            <div class="navigation flex justify-center space-x-2 pt-2 mt-auto">
              <button 
                @click="prevStep" 
                :disabled="currentStep <= 0"
                class="w-20 h-10 flex items-center justify-center bg-[#666] hover:bg-[#555] text-white rounded disabled:bg-[#CCC]"
                aria-label="Previous step"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
              <button 
                @click="nextStep" 
                :disabled="currentStep >= tutorial.steps.length - 1"
                class="w-20 h-10 flex items-center justify-center bg-[#666] hover:bg-[#555] text-white rounded disabled:bg-[#CCC]"
                aria-label="Next step"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
        </div>
        
        <!-- Right column: Data Boxes / Supplementary Information -->
        <div v-if="showBoxes" :class="[dataBoxesWidth, dataBoxesHeight, 'p-4', 'bg-gray-50', 'rounded', 'shadow', 'relative']">
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
          
          <!-- Supplementary Info -->
           <div v-html="currentStepData.info" class="info"></div>
          <!-- Dynamic Data Boxes -->
          <template v-if="currentStepData.boxes" v-for="(box, index) in currentStepData.boxes" :key="index">
            <!-- Only render parent boxes (boxes without parentBox property) -->
            <div v-if="!box.parentBox" class="data-box mb-4 p-4 bg-white border-2 border-gray rounded min-h-[12rem] relative">
              <h4 class="text-md font-semibold mb-2 data-box-title">{{ box.title }}:</h4>
              
              <DataBoxContent 
                :box="box" 
                :varRefs="varRefs" 
                :valueRefs="valueRefs" 
                :shouldHighlightArrayItem="shouldHighlightArrayItem" 
              />
              
              <!-- Render child boxes here -->
              <template v-for="(childBox, childIndex) in currentStepData.boxes" :key="'child-' + childIndex">
                <div v-if="childBox.parentBox === box.title" class="data-box mt-4 p-4 bg-gray-100 border-2 border-gray-400 rounded min-h-[8rem] relative">
                  <h4 class="text-md font-semibold mb-2 data-box-title">{{ childBox.title }}:</h4>
                  
                  <DataBoxContent 
                    :box="childBox" 
                    :varRefs="varRefs" 
                    :valueRefs="valueRefs" 
                    :shouldHighlightArrayItem="shouldHighlightArrayItem" 
                  />
                </div>
              </template>
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
import DataBoxContent from './DataBoxContent.vue';
// Import languages
import python from 'highlight.js/lib/languages/python';
import pythonRepl from 'highlight.js/lib/languages/python-repl';
import javascript from 'highlight.js/lib/languages/javascript';

// Register languages
hljs.registerLanguage('python', python);
hljs.registerLanguage('python-repl', pythonRepl);
hljs.registerLanguage('javascript', javascript);

const props = defineProps({
  tutorial: {
    type: Object,
    required: true
  },
  language: {
    type: String,
    default: 'python'
  },
  codeWidth: {
    type: String,
    default: 'w-2/3'
  },
  codeHeight: {
    type: String,
    default: 'h-full'
  },
  dataBoxesWidth: {
    type: String,
    default: 'w-1/3'
  },
  dataBoxesHeight: {
    type: String,
    default: ''
  },
  showBoxes: {
    type: Boolean,
    default: true
  },
  showCode: {
    type: Boolean,
    default: true
  }
});

// Compute code width
const computedCodeWidth = computed(() => {
  return props.showBoxes ? props.codeWidth : 'w-full';
});

// Reactive state
const currentStep = ref(0);
const codePreElement = ref(null);
const explanationElement = ref(null);
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
const currentSecondaryHighlightLines = ref([]);
const currentHighlightChars = ref([]);

// Computed property to determine the current language
const currentLanguage = computed(() => {
  // Scan backwards through steps to find the most recent language override
  let languageToUse = props.language; // Start with the default language from props
  for (let i = 0; i <= currentStep.value; i++) {
    if (props.tutorial.steps[i].language !== undefined) {
      languageToUse = props.tutorial.steps[i].language;
    }
  }
  return languageToUse;
});

const currentStepData = computed(() => {
  const step = props.tutorial.steps[currentStep.value] || { 
    lineNumber: 0, 
    explanation: '', 
    highlightLines: [],
    secondaryHighlightLines: [],
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
  
  // Handle code changes - scan backwards to find the most recent code
  let codeToUse = props.tutorial.code || '';
  for (let i = 0; i <= currentStep.value; i++) {
    if (props.tutorial.steps[i].code !== undefined) {
      codeToUse = props.tutorial.steps[i].code;
    }
  }
  lastCode.value = codeToUse;
  
  // Update highlighted lines
  currentHighlightLines.value = step.highlightLines || [];
  currentSecondaryHighlightLines.value = step.secondaryHighlightLines || [];
  currentHighlightChars.value = step.highlightChars || [];
  
  return step;
});

// No longer needed - boxes are now structured in the data

// Helper function to determine if an array item should be highlighted
const shouldHighlightArrayItem = (box, key, index) => {
  if (!box.values || !box.values[key]) return false;
  const varData = box.values[key];
  
  // Check if there's a highlight property
  if (varData.highlight !== undefined) {
    // If highlight is a number, check if it matches the index
    if (typeof varData.highlight === 'number') {
      return varData.highlight === index;
    }
    // If highlight is an array of numbers, check if index is in the array
    if (Array.isArray(varData.highlight)) {
      return varData.highlight.includes(index);
    }
    // If highlight is true, highlight all items
    if (varData.highlight === true) {
      return true;
    }
  }
  return false;
};

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

// Function to highlight inline code blocks in the explanation
const highlightExplanationCode = () => {
  if (!explanationElement.value) return;
  
  // Find all code elements within the explanation that have a language class
  const codeBlocks = explanationElement.value.querySelectorAll('code.language-python, code.language-javascript');
  
  codeBlocks.forEach(block => {
    // Only highlight if not already highlighted
    if (!block.classList.contains('hljs')) {
      hljs.highlightElement(block);
    }
  });
};

// Helper function to highlight specific characters in a line
const highlightCharsInLine = (lineHtml, lineIndex) => {
  // Find all character highlights for this line
  const charsToHighlight = currentHighlightChars.value.filter(h => h.line === lineIndex);
  
  if (charsToHighlight.length === 0) {
    return lineHtml;
  }
  
  // Create a temporary div to work with the HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = lineHtml;
  
  // Get the text content to search in
  const textContent = tempDiv.textContent || '';
  
  // Process each highlight specification
  charsToHighlight.forEach(highlight => {
    const className = highlight.class || 'span-highlight';
    
    // If startChar and endChar are provided, use position-based highlighting
    if (highlight.startChar !== undefined && highlight.endChar !== undefined) {
      // Position-based highlighting (fallback method)
      wrapTextByPosition(tempDiv, highlight.startChar, highlight.endChar, className);
    } else if (highlight.match) {
      // Match-based highlighting (primary method)
      const occurrence = highlight.occurrence || 1; // Default to first occurrence
      wrapTextByMatch(tempDiv, highlight.match, occurrence, className);
    }
  });
  
  return tempDiv.innerHTML;
};

// Helper function to wrap text by character position
const wrapTextByPosition = (element, startChar, endChar, className) => {
  let charCount = 0;
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
  const nodesToProcess = [];
  
  // Collect all text nodes and their positions
  let node;
  while (node = walker.nextNode()) {
    const nodeStart = charCount;
    const nodeEnd = charCount + node.textContent.length;
    charCount = nodeEnd;
    
    if (nodeEnd > startChar && nodeStart < endChar) {
      nodesToProcess.push({ node, nodeStart, nodeEnd });
    }
  }
  
  // Process nodes in reverse to avoid position shifts
  nodesToProcess.reverse().forEach(({ node, nodeStart, nodeEnd }) => {
    const relativeStart = Math.max(0, startChar - nodeStart);
    const relativeEnd = Math.min(node.textContent.length, endChar - nodeStart);
    
    const before = node.textContent.substring(0, relativeStart);
    const highlighted = node.textContent.substring(relativeStart, relativeEnd);
    const after = node.textContent.substring(relativeEnd);
    
    const span = document.createElement('span');
    span.className = className;
    span.textContent = highlighted;
    
    const fragment = document.createDocumentFragment();
    if (before) fragment.appendChild(document.createTextNode(before));
    fragment.appendChild(span);
    if (after) fragment.appendChild(document.createTextNode(after));
    
    node.parentNode.replaceChild(fragment, node);
  });
};

// Helper function to wrap text by matching string
const wrapTextByMatch = (element, matchText, occurrence, className) => {
  const textContent = element.textContent || '';
  
  // Find all occurrences of the match text
  let currentOccurrence = 0;
  let searchIndex = 0;
  let matchIndex = -1;
  
  while ((matchIndex = textContent.indexOf(matchText, searchIndex)) !== -1) {
    currentOccurrence++;
    if (currentOccurrence === occurrence) {
      // Found the right occurrence
      const startChar = matchIndex;
      const endChar = matchIndex + matchText.length;
      wrapTextByPosition(element, startChar, endChar, className);
      return;
    }
    searchIndex = matchIndex + 1;
  }
};

// Function to update the highlighted code
const updateHighlightedCode = () => {
  // First highlight the code with highlight.js
  const tempElement = document.createElement('div');
  const codeElement = document.createElement('code');
  codeElement.className = `language-${currentLanguage.value}`;
  codeElement.textContent = lastCode.value;
  tempElement.appendChild(codeElement);
  hljs.highlightElement(codeElement);
  
  // Split the highlighted code by lines
  const lines = codeElement.innerHTML.split('\n');
  
  // Create line elements with highlight classes and character highlights
  const formattedLines = lines.map((line, index) => {
    const primaryHighlightIndex = currentHighlightLines.value.indexOf(index);
    const isPrimaryHighlighted = primaryHighlightIndex !== -1;
    const isSecondaryHighlighted = currentSecondaryHighlightLines.value.indexOf(index) !== -1;
    
    let highlightClass = '';
    if (isPrimaryHighlighted) {
      // First highlighted line gets primary highlight, others get secondary green
      highlightClass = primaryHighlightIndex === 0 ? 'line-highlight' : 'line-highlight-secondary';
    } else if (isSecondaryHighlighted) {
      // Secondary highlight lines get yellow highlight
      highlightClass = 'line-highlight-yellow';
    }
    
    // Apply character-level highlighting if specified
    let processedLine = line || ' ';
    if (currentHighlightChars.value.length > 0) {
      processedLine = highlightCharsInLine(processedLine, index);
    }
    
    return `<div class="hljs-line ${highlightClass}">${processedLine}</div>`;
  });
  
  // Set the highlighted HTML
  highlightedCode.value = formattedLines.join('');
};

// Update highlights when step changes
watch(currentStep, () => {
  nextTick(() => {
    updateHighlightedCode();
    highlightExplanationCode();
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

// Update when secondary highlight lines change
watch(() => currentSecondaryHighlightLines.value, () => {
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
  
  // Find all boxes (parent and child)
  const allBoxes = document.querySelectorAll('.data-box');
  allBoxes.forEach(box => {
    const boxTitle = box.querySelector('h4')?.textContent?.trim().replace(':', '');
    // Previously we were only using boxes with 'memory' in the title.
    // if (!boxTitle?.toLowerCase().includes('memory')) return;
    if (!boxTitle) return;
    
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
      const toBox = connection.toBox; // Optional: specify which box to search in
      
      if (!fromVar) return;
      if (!toValue && !toKey) return;
      
      // Find the source variable element
      const sourceVarEl = box.querySelector(`[data-var-name="${fromVar}"]`);
      if (!sourceVarEl) return;
      
      let targetValueEl = null;
      
      // Determine which box to search in for the target value
      let searchBox = box; // Default to current box
      if (toBox) {
        // Find the specified box by title
        const allBoxes = document.querySelectorAll('.data-box');
        for (const b of allBoxes) {
          const bTitle = b.querySelector('h4')?.textContent?.trim().replace(':', '');
          if (bTitle === toBox || bTitle?.includes(toBox) || toBox.includes(bTitle)) {
            searchBox = b;
            break;
          }
        }
      }
      
      // Get the target box's data for value lookup
      let targetBoxData = boxData;
      if (toBox && currentStepData.value.boxes) {
        targetBoxData = currentStepData.value.boxes.find(b => 
          b.title === toBox || b.title.includes(toBox) || toBox.includes(b.title)
        ) || boxData;
      }
      
      // Case 1: Using toKey to point to another variable's value
      if (toKey) {
        // Find the value element associated with the specified key
        const targetValueSelector = `#val-${targetBoxData.title.replace(/\s+/g, '-')}-${toKey}`;
        targetValueEl = searchBox.querySelector(targetValueSelector);
      }
      // Case 2: Using toValue to point to a value by its content
      else if (toValue) {
        // Find all value elements in the search box (both .value-box and .array-item-box)
        const valueElements = searchBox.querySelectorAll('.value-box, .array-item-box.first-item');
        
        // Check each value element to find the one matching our target value
        valueElements.forEach(valueEl => {
          // Extract the raw value - handle both simple values and metadata objects
          let elValue;
          
          // Get the box's original value data
          const keyName = valueEl.id.split('-').pop(); // Extract key from id
          if (!keyName) return;
          
          // Find the original value in targetBoxData
          const originalValue = targetBoxData.values[keyName];
          
          // Extract the actual value depending on if it's a simple value or one with metadata
          if (typeof originalValue === 'object' && originalValue !== null && 'value' in originalValue) {
            elValue = originalValue.value;
          } else {
            elValue = originalValue;
          }
          
          // For arrays, compare the arrays themselves
          if (Array.isArray(toValue) && Array.isArray(elValue)) {
            if (JSON.stringify(elValue) === JSON.stringify(toValue)) {
              targetValueEl = valueEl;
            }
          }
          // For non-arrays, compare as strings
          else if (elValue !== undefined && elValue.toString() === toValue.toString()) {
            targetValueEl = valueEl;
          }
          
          // Fallback to text content if the above approach fails
          if (!targetValueEl && !Array.isArray(toValue)) {
            const textContent = valueEl.textContent?.trim();
            if (textContent === toValue.toString()) {
              targetValueEl = valueEl;
            }
          }
        });
      }
      
      if (sourceVarEl && targetValueEl) {
        createArrow(sourceVarEl, targetValueEl, !!toBox);
      }
    });
  });
};

// Create an arrow between two DOM elements
const createArrow = (fromElement, toElement, isCrossBox = false) => {
  if (!arrowsSvg.value || !fromElement || !toElement) return;
  
  // Get the positions relative to the SVG
  const svgRect = arrowsSvg.value.getBoundingClientRect();
  const fromRect = fromElement.getBoundingClientRect();
  const toRect = toElement.getBoundingClientRect();
  
  // Check if target is an array item box (string/list)
  // Only use array-style arrow if it's NOT a cross-box connection
  const isArrayTarget = toElement.classList.contains('array-item-box') && !isCrossBox;
  
  let fromX, fromY, toX, toY;
  
  if (isArrayTarget) {
    // For arrays in the same box: start from bottom center of variable name
    fromX = fromRect.left + fromRect.width / 2 - svgRect.left;
    fromY = fromRect.top + fromRect.height - svgRect.top + 5;
    // End at left edge of first array item
    toX = toRect.left - svgRect.left - 5;
    toY = toRect.top + toRect.height / 2 - svgRect.top;
  } else {
    // For regular values: start from right edge of variable name
    fromX = fromRect.left + fromRect.width - svgRect.left + 5;
    fromY = fromRect.top + fromRect.height / 2 - svgRect.top;
    // End at left edge of value
    toX = toRect.left - svgRect.left - 5;
    toY = toRect.top + toRect.height / 2 - svgRect.top;
  }
  
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
  highlightExplanationCode();
  
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

.font-mono {
  font-size: 0.9rem;
}

.line-highlight {
  background-color: rgba(152, 236, 160, 0.3); /* Pale green background */
  display: block;
  border-radius: 4px;
}

.line-highlight-secondary {
  background-color: rgba(152, 236, 160, 0.15); /* Paler green for secondary highlights */
  display: block;
  border-radius: 4px;
}

.line-highlight-yellow {
  background-color: #fef9c3; /* Yellow highlight - same as value box highlight */
  display: block;
  border-radius: 4px;
}

.span-highlight {
  background-color: #DCF6E0; /* Pale green background */
  border-radius: 4px;
}

/* Styling for highlight.js */
pre {
  margin: 0;
  /* padding: 1rem; */
  padding-top: 0;
  border-radius: 0.25rem;
  /* Probably gonna need to switch this back on at some point */
  /* overflow: auto; */
  min-height: 24rem;
}

.hljs-line {
  line-height: 1.6;
  min-height: 1.6em;
  white-space: pre;
  position: relative;
  /* padding: 0 0.5rem; */
}

/* GitHub Light theme customizations */
.hljs {
  background: transparent;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
}

pre code.hljs {
  padding: 0;
  font-size: 0.9rem;
}

/* Styling for inline code in explanations */
.explanation code, .info code, .info2 code {
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 0.9em;
  padding: 0.2em 0.4em;
  /* GitHub style red for code */
  /* color: #d73a49; */
}

.variable-name {
  padding: calc(0.1rem + 1px) 0;
}

.value-box {
  border: 1px solid black;
  padding: 0.1rem 0.3rem;
  background: white;
  /* position: relative; */
  /* display: inline-block; */
  min-width: 2rem;
  /* max-width: 60%; */
  float: right;
  text-align: center;

}

.array-item-box {
  border: 1px solid black;
  border-left: none;
  padding: 0.1rem 0.3rem;
  background: white;
  position: relative;
  display: inline-block;
  min-width: 1.5rem;
  text-align: center;
}

.array-item-box.first-item {
  border-left: 1px solid black;
}

/* Stacked array items */
.array-item-box.stacked-item {
  border-left: 1px solid black;
  /* border-top: none; */
  margin-bottom: -1px;
}

.array-item-box.stacked-item.first-item {
  border-top: 1px solid black;
}

/* Highlighted value boxes */
.highlighted {
  background-color: #fef9c3 !important; /* Pale yellow */
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

.data-box-title {
  position: relative;
  z-index: 20;
  text-shadow: 3px 3px 5px white, 3px -3px 5px white;
}

.inline-highlight {
  background-color: #fef9c3;
  padding: 0px;
  outline: 2px solid black;
  outline-offset: 4px;
  box-shadow: 0 0 0 6px #fef9c3;
}

.inline-pre {
	text-align: left;
	background-color: #f0f0f0;
	font-size: 1.2rem;
	min-height: unset;
	margin: 0 auto;
	width: 34ch;
	padding: 0.5rem;
	margin-bottom: 0.5rem;
}

.inline-pre code {
	background-color: transparent;
}

hr {
  margin: 1rem 0;
}

.flowchart-solid {
	text-align: center;
	margin: 1rem 0;
  background-color: #E5E1FF;
  border: 2px solid #c1b5ff;
  border-radius: 5px;
  padding: 0.7rem;
}
.flowchart-light {
	text-align: center;
	margin: 1rem 0;
  background-color: #f0edff;
  border: 2px solid #E5E1FF;
  border-radius: 5px;
  padding: 0.7rem;
}

.flowchart-outline {
  text-align: center;
  margin: 1rem 0;
  border: 2px solid #c1b5ff;
  border-radius: 5px;
  padding: 0.7rem;
}

.flowchart-connection {
  text-align: center;
	font-size: 1.4rem;
	line-height: 0;
}

.flowchart-highlight {
  border-color: #b7debb;
}

.flowchart-solid.flowchart-highlight, .tr-highlight {
  background-color: #DDF5E0 !important;
}

ul, ol {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.25rem;
  display: list-item;
  list-style-position: outside;
}

ol {
	list-style-type: decimal;
}

ul {
	list-style-type: disc;
}

/* Table styles */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.9rem;
  background-color: white;
}

thead th {
  background-color: #3b67ff;
  border: 1px solid #dee2e6;
  padding: 0.5rem;
  text-align: left;
  font-weight: 600;
  color: white;
}

tbody td {
  border: 1px solid #dee2e6;
  padding: 0.5rem;
  vertical-align: top;
}

tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

tbody tr:hover {
  background-color: #e9ecef;
}


</style>
