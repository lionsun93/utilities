<template>
  <div class="input-group">
    <input v-model.trim="newTodo" type="text"
      class="form-control my-1" placeholder="Enter todo..." />
    <button type="button" class="btn btn-primary my-1"
      @click="addTodo"><i
        class="bi bi-plus-square icon-big"></i></button>
  </div>

  <div class="form-check form-switch">
    <input v-model="hideCompleted" class="form-check-input"
      type="checkbox" id="hideCompleted" />
    <label for="hideCompleted">
      {{ hideCompleted ? 'Completed Hidden' : 'All Shown' }}
    </label>
  </div>

  <ul class="list-group my-2">
    <li v-for="todo in filteredTodos" :key="todo.id"
      class="list-group-item">
      <input type="checkbox" class="form-check-input mx-2"
        v-model="todo.done" />
      <span :class="{ done: todo.done }"> {{ todo.text }}</span>
      <button class="btn py-0 px-2 m-0" @click="removeTodo(todo)"><i
          class="bi bi-x-square text-warning icon-big"></i>
      </button>
    </li>
  </ul>

</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

let id = 0

const todos = ref([
  // { id: id++, text: 'Learn HTML', done: true }, <=== template

])

const newTodo = ref('')

const hideCompleted = ref(false)

const filteredTodos = computed(() => {
  return todos.value.filter((todo) => {
    return !todo.done || !hideCompleted.value;
  })
})

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todos.value.push({ id: id++, text: newTodo.value })
  }
}

const removeTodo = (todo) => {
  todos.value = todos.value.filter((x) => { return x !== todo })
}
</script>
<style>
.done {
  text-decoration: line-through;
}

.icon-big {
  font-size: 1.3rem;
}
</style>
