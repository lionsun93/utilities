<template>
  <div class='container'>
    <div class="row">
      <div class="col-4">
        <UnitConverter />
      </div>
      <div class="col-4">
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
