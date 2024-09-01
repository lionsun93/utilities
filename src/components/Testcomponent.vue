<template>
  <p>{{ childMessage }}</p>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import ChildTestComponent from './ChildTestComponent.vue';

const childMessage = ref('No child messages yet')
</script>
<style></style>
