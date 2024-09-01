<template>
  <button class="btn btn-primary my-2" :disabled="!todoData"
    @click="randomTodoId">Fetch Next</button>
  <p>ID: {{ todoId }}</p>
  <p v-if="!todoData">Loading...</p>
  <p v-else>Task: <strong>{{ todoData.title.toUpperCase()
      }}</strong>
  </p>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

const randomInteger = () => {
  return Math.floor(Math.random() * 100) + 1
}

const randomTodoId = () => {
  todoId.value = randomInteger()
}

const fetchData = async () => {
  todoData.value = null
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  todoData.value = await res.json()
}

todoId.value = randomInteger()
fetchData()

watch(todoId, fetchData)

</script>
<style></style>
