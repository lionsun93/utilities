<template>
  <div class="row">
    <div class="col-12">
      <label class="form-label" for="unitType">Unit Type</label>
      <select class="form-select" id="unitType">
        <option>Area</option>
        <option>Data Transfer Rate</option>
        <option>Digital Storage</option>
        <option>Energy</option>
        <option>Frequency</option>
        <option>Fuel Economy</option>
        <option>Length</option>
        <option>Mass</option>
        <option>Plane Angle</option>
        <option>Pressure</option>
        <option>Speed</option>
        <option>Temperature</option>
        <option>Time</option>
        <option>Volume</option>
      </select>
    </div>
    <!--     <div class="col-6">
        <select class="form-label" for="celsius"></select>
        <input type="number" :id="firstInput" :name="firstInput" class="form-control" v-model="celsius"
          @input="celsiusToFahreheit" />
      </div>
      <div class="col-6">
        <select class="form-select" for="fahrenheit">Fahrenheit</select>
        <input type="number" :id="secondInput" :name="secondInput" class="form-control" v-model="fahrenheit"
          @input="fahreheitToCelsius" />
      </div> -->
  </div>

</template>
<script setup>
import { ref } from 'vue'


const celsius = ref()
const fahrenheit = ref()

function round(x, n = 3) {
  return Math.round(x * (10 ** n)) / (10 ** n)
}

const celsiusToFahreheit = () => {
  if (!isNaN(celsius.value)) {
    const result = celsius.value * (9 / 5) + 32;
    fahrenheit.value = round(result);
    console.log(result)
  } else {
    fahrenheit.value = ''
  }
}

const fahreheitToCelsius = () => {
  if (!isNaN(fahrenheit.value)) {
    const result = (fahrenheit.value - 32) * (5 / 9);
    celsius.value = round(result)
    console.log(result)
  } else {
    celsius.value = ''
  }
}
</script>
