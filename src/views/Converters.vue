<template>
  <div class='container'>
    <div class="row g-3">
      <div class="col-lg-4">
        <div class="card shadow">
          <div class="card-header">Unit Converter</div>
          <div class="card-body">
            <UnitConverter />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card shadow">
          <div class="card-header">Todo Tool</div>
          <div class="card-body">
            <TodoTool />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card shadow">
          <div class="card-header">Fetch Mock Todo</div>
          <div class="card-body">
            <FetchMockTodo />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card shadow">
          <div class="card-header">Test Component</div>
          <div class="card-body">
            <Testcomponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UnitConverter from '../components/UnitConverter.vue'
import TodoTool from '../components/TodoTool.vue';
import FetchMockTodo from '../components/FetchMockTodo.vue';
import Testcomponent from '../components/Testcomponent.vue';
</script>
