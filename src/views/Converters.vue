<template>
  <div class='container'>
    <div class="row">
      <div class="col-lg-4 m-1">
        <UnitConverter />
      </div>
      <div class="col-lg-4 m-1">
        <TodoTool />
      </div>
    </div>
  </div>
</template>

<script setup>
import UnitConverter from '../components/UnitConverter.vue'
import TodoTool from '../components/TodoTool.vue';
</script>
