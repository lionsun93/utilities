<!-- src/components/ThemeSwitch.vue -->
<template>
  <div class="form-check form-switch mx-2">
    <label class="form-check-label" for="theme-switch">
      <i v-if="!isDarkTheme" class="bi bi-sun-fill mx-1"></i>
      <i v-if="isDarkTheme" class="bi bi-moon-fill mx-1"></i>
    </label>
    <input class="form-check-input" type="checkbox" id="theme-switch" v-model="isDarkTheme" @change="toggleTheme" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDarkTheme = ref(false)

const loadTheme = () => {
  const storedGlobalTheme = localStorage.getItem('globalTheme')
  if (storedGlobalTheme) {
    document.body.setAttribute('data-bs-theme', storedGlobalTheme)
    isDarkTheme.value = (storedGlobalTheme === 'dark')
  } else {
    document.body.setAttribute('data-bs-theme', 'dark')
    localStorage.setItem('globalTheme', 'dark')
    isDarkTheme.value = true
  }
}

const toggleTheme = () => {
  const newTheme = isDarkTheme.value ? 'dark' : 'light'
  document.body.setAttribute('data-bs-theme', newTheme)
  localStorage.setItem('globalTheme', newTheme)
}

onMounted(() => {
  loadTheme()
})
</script>

<style scoped>
/* Add any specific styles for the theme switch here if needed */
</style>
