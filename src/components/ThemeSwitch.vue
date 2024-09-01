<template>
  <button class="btn text-body" @click="toggleTheme">
    <i v-if="globalTheme === 'light'" class="bi bi-sun mx-1"></i>
    <i v-else class="bi bi-moon mx-1"></i>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const globalTheme = ref('dark')

const loadTheme = () => {
  const storedGlobalTheme = localStorage.getItem('globalTheme')
  if (storedGlobalTheme) {
    document.body.setAttribute('data-bs-theme', storedGlobalTheme)
    globalTheme.value = storedGlobalTheme
  } else {
    document.body.setAttribute('data-bs-theme', 'dark')
    localStorage.setItem('globalTheme', 'dark')
    globalTheme.value = 'dark'
  }
}

const toggleTheme = () => {
  globalTheme.value = (globalTheme.value === 'dark') ? 'light' : 'dark'
  document.body.setAttribute('data-bs-theme', globalTheme.value)
  localStorage.setItem('globalTheme', globalTheme.value)
}

onMounted(() => {
  loadTheme()
})
</script>

<style scoped></style>
