<template>
  <select class="form-select" name="unitTyps"
    v-model="selectedUnitType" @change="handleSelectedUnitTypes">
    <option v-for="(unitType, index) in unitTypes" :value="unitType"
      :key="index">
      {{ unitType.text }}
    </option>
  </select>

  <select class="form-select" name="unitTyps"
    v-model="selectedUnitTypeOptions">
    <option v-for="(unitTypeOption, index) in selectedUnitTypeOptions"
      :value="unitTypeOption" :key="index">
      {{ unitTypeOption.text }}
    </option>
  </select>

</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { unitTypes as importedUnitTypes } from '../assets/unitTypes2';
import ChildTestComponent from './ChildTestComponent.vue';

const unitTypes = ref(importedUnitTypes)
const selectedUnitType = ref(unitTypes.value[0])

const selectedUnitTypeOptions = computed(() => {
  return selectedUnitType.value.options
})

const handleSelectedUnitTypes = () => {
  console.log(selectedUnitType.value)
  console.log(selectedUnitTypeOptions.value)
}

</script>
<style></style>
