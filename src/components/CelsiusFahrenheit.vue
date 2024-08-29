<template>
  <div class="row">
    <div class="col">
      <label class="form-label" for="celsius">Celsius</label>
      <input type="number" id="celsius" name="celsius" class="form-control" v-model="celsius"
        @input="celsiusToFahreheit" />
    </div>
    <div class="col">
      <label class="form-label" for="fahrenheit">Fahrenheit</label>
      <input type="number" id="fahrenheit" name="fahrenheit" class="form-control" v-model="fahrenheit"
        @input="fahreheitToCelsius" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const celsius = ref()
const fahrenheit = ref()

const celsiusToFahreheit = () => {
  if (!isNaN(celsius.value)) {
    const result = celsius.value * (9 / 5) + 32;
    fahrenheit.value = result % 1 === 0 ? result.toFixed(0) : result.toFixed(2);
  } else {
    fahrenheit.value = ''
  }
}

const fahreheitToCelsius = () => {
  if (!isNaN(fahrenheit.value)) {
    const result = (fahrenheit.value - 32) * (5 / 9);
    celsius.value = result % 1 === 0 ? result.toFixed(0) : result.toFixed(2);
  } else {
    celsius.value = ''
  }
}
</script>
