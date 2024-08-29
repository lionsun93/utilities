<template>
    <button class="btn btn-primary" @click="toggleState">Toggle State!</button>
    <div :class="{ 'text-warning': warning, 'text-danger': danger }">warning text!</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const warning = ref(false)
const danger = ref(true)

const toggleState = () => {
    warning.value = (warning.value === true) ? false : true
    danger.value = (danger.value === true) ? false : true
}
</script>
