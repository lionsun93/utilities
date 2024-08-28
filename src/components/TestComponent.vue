<template>
    <h1>wow</h1>
    <button class="btn btn-primary" @click="increment">Count is: {{ count }}</button>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const count = ref(0)
function increment() {
    count.value++
}
onMounted(() => {
    console.log(`Initial value of count is: ${count.value}`)
})
</script>
<style></style>