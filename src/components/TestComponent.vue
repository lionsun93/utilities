<template>
  <h2>{{ pokemon.name }}</h2>
  <ul class="list-group">
    <div class="list-group-item" v-for="(sprite, key) in pokemon.sprites" :key="sprite">
      <img :src="sprite" />
    </div>
  </ul>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const pokemon = ref({})

onMounted(
  async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await response.json()
    pokemon.value = data
  })
</script>
