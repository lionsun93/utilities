<template>
  <div class="row g-2">
    <div class="col-12">

      <label class="form-label" for="unitType">Unit Type</label>
      <select v-model="selectedUnitType"
        @change="handleSelectedUnitTypes" class="form-select"
        id="unitType" name="unitType">
        <option v-for="(unitType, index) in unitTypes"
          :value="unitType" :key="index">
          {{ unitType.text }}
        </option>
      </select>

    </div>

    <div class="col-6">
      <input type="number" class="form-control rounded-bottom-0"
        name="input1" id="input1" />
      <select v-model="selectedUnitTypeOption1"
        class="form-select rounded-top-0" name="unitTypeOption1"
        id="unit-type-option1"
        @change="handleSelectedUnitTypeOptions">
        <option v-for="(unitTypeOption, index) in unitTypeOptions"
          :key="index" :value="unitTypeOption">
          {{ unitTypeOption.text }}
        </option>
      </select>
    </div>

    <div class="col-6">
      <input type="number" class="form-control rounded-bottom-0"
        name="input2" id="input2" />
      <select v-model="selectedUnitTypeOption2"
        class="form-select rounded-top-0" name="unitTypeOption2"
        id="unit-type-option2"
        @change="handleSelectedUnitTypeOptions">
        <option v-for="(unitTypeOption, index) in unitTypeOptions"
          :key="index" :value="unitTypeOption">
          {{ unitTypeOption.text }}
        </option>
      </select>
    </div>

  </div>

</template>
<script setup>
import { ref, computed } from 'vue'
import { unitTypes as importedUnitTypes } from '../assets/unitTypes';

const unitTypes = ref(importedUnitTypes)
const selectedUnitType = ref(unitTypes.value[0])
const unitTypeOptions = ref(selectedUnitType.value.options)
const selectedUnitTypeOption1 = ref(unitTypeOptions.value[0])
const selectedUnitTypeOption2 = ref(unitTypeOptions.value[1])
// Save previous states of unittype options so we can swap inputs
// in case the same unit options are selected
let selectedUnitTypeOption1Previous = { ...selectedUnitTypeOption1.value }
let selectedUnitTypeOption2Previous = { ...selectedUnitTypeOption2.value }

const handleSelectedUnitTypes = () => {
  unitTypeOptions.value = selectedUnitType.value.options
  selectedUnitTypeOption1.value = unitTypeOptions.value[0]
  selectedUnitTypeOption2.value = unitTypeOptions.value[1]
  selectedUnitTypeOption1Previous = { ...selectedUnitTypeOption1.value }
  selectedUnitTypeOption2Previous = { ...selectedUnitTypeOption2.value }
}

const handleSelectedUnitTypeOptions = (e) => {
  // Swap selected unit options if on selector is set to the same as other
  if (selectedUnitTypeOption1.value.value === selectedUnitTypeOption2.value.value) {
    selectedUnitTypeOption2.value = selectedUnitTypeOption1Previous
    selectedUnitTypeOption1.value = selectedUnitTypeOption2Previous
  }
  // After swapping we preserve previous state of selectors for next time
  selectedUnitTypeOption1Previous = { ...selectedUnitTypeOption1.value }
  selectedUnitTypeOption2Previous = { ...selectedUnitTypeOption2.value }
}

</script>
