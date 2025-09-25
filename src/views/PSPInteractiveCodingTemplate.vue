<script setup>
import { ref } from 'vue';
import CodeTutorial from '../components/CodeTutorial.vue';
import variablesTutorial from '../components/tutorials/VariablesTutorial.js';
import loopTutorial from '../components/tutorials/LoopTutorial.js';
import functionTutorial from '../components/tutorials/FunctionTutorial.js';
import whatIsTheOutputProduced from '../components/tutorials/WhatIsTheOutputProduced.js';
import multiCodeExample from '../components/tutorials/MultiCodeExample.js';
import toKeyExample from '../components/tutorials/ToKeyExample.js';
import unnamedValuesExample from '../components/tutorials/UnnamedValuesExample.js';
</script>

<template>
  <div class="container mx-auto p-4 w-[1100px]">
    <h1 class="text-2xl font-bold mb-6">Interactive Coding Tutorials</h1>
    
    <div class="mb-8">
        <h2 class="mb-4">What is the output produced by the following code?</h2>
        <CodeTutorial :tutorial="whatIsTheOutputProduced" language="python" />
    </div>
    
    <div class="mb-8">
      <h2 class="mb-4">Unnamed Values Example</h2>
      <CodeTutorial :tutorial="unnamedValuesExample" language="python" />
    </div>
    
    <div class="mb-8">
      <h2 class="mb-4">Variable References Example (toKey)</h2>
      <CodeTutorial :tutorial="toKeyExample" language="python" />
    </div>
    
    <div class="mb-8">
      <h2 class="mb-4">Multiple Code Examples Tutorial</h2>
      <CodeTutorial :tutorial="multiCodeExample" language="python" />
    </div>

    <div class="mb-8">
      <h2 class="mb-4">Variables Tutorial</h2>
      <CodeTutorial :tutorial="variablesTutorial" language="python" />
    </div>
    
    <div class="mb-8">
      <h2 class="mb-4">Loops Tutorial</h2>
      <CodeTutorial :tutorial="loopTutorial" language="python" />
    </div>
    
    <div class="mb-8">
      <h2 class="mb-4">Functions Tutorial</h2>
      <CodeTutorial :tutorial="functionTutorial" language="python" />
    </div>
  </div>
</template>

<style scoped>

</style>
