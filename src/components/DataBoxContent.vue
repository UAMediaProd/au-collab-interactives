<template>
  <!-- Values without keys (simple array of values) -->
  <div v-if="Array.isArray(box.values)" class="flex flex-col">
    <div v-for="(value, i) in box.values" :key="i" class="mb-1">
      <span v-if="box.useHtml" v-html="value" class="font-mono"></span>
      <span v-else :class="['font-mono', box.title !== 'Output' ? 'value-box' : '']">{{ value === '' ? '\u00A0' : value }}</span>
    </div>
  </div>
  
  <!-- Key-value pairs -->
  <div v-else class="flex flex-col gap-y-1 leading-[1.2]">
    <template v-for="(valueData, key) in box.values" :key="key">
      <!-- Check if value is an array (string/list representation) -->
      <!-- Arrays can be in simple format or wrapped in object with metadata -->
      <template v-if="Array.isArray(valueData) || (typeof valueData === 'object' && valueData !== null && 'value' in valueData && Array.isArray(valueData.value))">
        <div class="flex flex-col gap-y-1">
          <!-- Variable name on its own line -->
          <div class="font-mono variable-name">
            <span
              :data-var-name="key"
              :id="`var-${box.title}-${key}`"
            >{{ key.startsWith('_') ? '' : key }}</span>
          </div>
          <!-- Array items as connected boxes -->
          <div :class="box.stacked ? 'flex flex-col items-end gap-y-0' : 'flex justify-end'">
            <span
            v-for="(item, index) in (Array.isArray(valueData) ? valueData : valueData.value)"
            :key="index"
            :class="['font-mono', 'array-item-box', index === 0 ? 'first-item' : '', box.stacked ? 'stacked-item' : '', shouldHighlightArrayItem(box, key, index) ? 'highlighted' : '']"
            :id="`val-${box.title}-${key}`"
            :ref="el => { if (el && index === 0) valueRefs.set(`val-${box.title}-${key}`, el) }"
          >{{ item }}</span>
          </div>
        </div>
      </template>
      
      <!-- Regular grid for non-array values -->
      <div v-else class="grid grid-cols-[2fr_1fr] gap-x-4">
      <!-- Determine if this is a simple value or an object with metadata -->
      <template v-if="typeof valueData === 'object' && valueData !== null && 'value' in valueData">
        <!-- This is a value with metadata -->
        <!-- Only show variable name if named=true (default) or not specified -->
        <div v-if="valueData.named !== false" class="font-mono variable-name">
          <span
            :data-var-name="key"
            :id="`var-${box.title}-${key}`"
            :ref="el => { if (el) varRefs.set(`var-${box.title}-${key}`, el) }"
          >{{ key.startsWith('_') ? '' : key }}</span>
        </div>
        <!-- For unnamed values, keep the grid layout with an empty cell -->
        <div v-else class="font-mono variable-name m-auto"></div>
        
        <!-- Only show value if valued=true (default) or not specified -->
        <div v-if="valueData.valued !== false" class="m-auto">
          <span 
            v-if="box.useHtml" 
            v-html="valueData.value" 
            class="font-mono"
            :id="`val-${box.title}-${key}`"
            :ref="el => { if (el) valueRefs.set(`val-${box.title}-${key}`, el) }"
          ></span>
          <span 
            v-else 
            :class="['font-mono', box.title !== 'Output' ? 'value-box' : '', valueData.highlight ? 'highlighted' : '']"
            :id="`val-${box.title}-${key}`"
            :ref="el => { if (el) valueRefs.set(`val-${box.title}-${key}`, el) }"
          >{{ valueData.value }}</span>
        </div>
        <!-- For values without a value box, keep grid layout with empty cell -->
        <div v-else class="m-auto"></div>
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
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  box: {
    type: Object,
    required: true
  },
  varRefs: {
    type: Map,
    required: true
  },
  valueRefs: {
    type: Map,
    required: true
  },
  shouldHighlightArrayItem: {
    type: Function,
    required: true
  }
});
</script>
