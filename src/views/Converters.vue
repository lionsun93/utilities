<template>
  <div class='container'>
    <div class="row">
      <div class="col">
        <UnitConverter />
      </div>
      <div class="col">
        <TodoTool />
      </div>
    </div>
  </div>
</template>

<script setup>
import UnitConverter from '../components/UnitConverter.vue'
import TodoTool from '../components/TodoTool.vue';
</script>
