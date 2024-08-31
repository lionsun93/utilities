<template>
  <div :class="messageClass">{{ message }}</div>
  <button class="btn btn-primary" @click="toggleClass">Toggle</button>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const message = ref("hello world")
const messageClass = ref('text-warning')
const toggleClass = () => {
  messageClass.value = (messageClass.value === 'text-warning') ? 'text-danger' : 'text-warning'
}
</script>
