<template>
  <h2>Child component</h2>
</template>
<script setup>
const emit = defineEmits(['response'])
emit('response', 'Hello from child!')
</script>
