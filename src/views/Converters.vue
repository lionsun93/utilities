<template>
  <div class='container'>
    <div class="row">
      <div class="col">
        <UnitConverter />
      </div>
      <div class="col">
        <div class="h3">Test Component</div>
        <TestComponent />
      </div>
    </div>
  </div>
</template>

<script setup>
import UnitConverter from '../components/UnitConverter.vue'
import TestComponent from '../components/TestComponent.vue';
</script>
