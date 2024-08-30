<template>
  <input @change="toggle" type="checkbox" name="" class="form-check-input" true-value='dark' false-value='light'
    v-model="theme" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const theme = ref('light')
const toggle = (e) => {
  console.log(theme.value)
}
</script>
