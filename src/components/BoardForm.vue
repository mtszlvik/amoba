<script setup lang="ts">
import { ref } from 'vue'
import { type Player, type State, useGameStore } from '../stores/game'

const game = useGameStore()

const targetCount = ref(game.targetCount)
const width = ref(game.width)
const height = ref(game.height)

function handleSubmit() {
  game.targetCount = targetCount.value
  game.width = width.value
  game.height = height.value
  game.state = 'playerX'
}
</script>

<template>
  <div class="grid place-content-center bg-black/50 p-8">
    <form @submit.prevent="handleSubmit" class="grid gap-4">
      <p class="justify-self-center grid gap-2">
        <label for="targetCount">Egyező jelek száma</label>
        <input id="targetCount" type="number" v-model="targetCount" />
      </p>
      <p class="justify-self-center grid gap-2">
        <label for="width">Szélesség</label>
        <input id="width" type="number" v-model="width" class="justify-self-center" />
      </p>
      <p class="justify-self-center grid gap-2">
        <label for="height">Magasság</label>
        <input id="height" type="number" v-model="height" class="justify-self-center" />
      </p>
      <button type="submit" class="btn primary">Next</button>
    </form>
  </div>
</template>
