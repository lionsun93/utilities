<template>
  <div class='container'>
    <div class="row">
      <div class="col">
        <div class="h3">Celsius / Fahrenheit</div>
        <CelsiusFahrenheit />
      </div>
      <div class="col">
        <div class="h3">Test Component</div>
        <TestComponent />
      </div>
    </div>
  </div>
</template>

<script setup>
import CelsiusFahrenheit from '../components/CelsiusFahrenheit.vue';
import TestComponent from '../components/TestComponent.vue';
</script>
