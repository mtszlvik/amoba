<script setup lang="ts">
import { ref } from 'vue'
import { type Player, type State, useGameStore } from '../stores/game'

const { player, nextState } = defineProps<{
  player: Player
  nextState: State
}>()

const game = useGameStore()

const name = ref(player.name)
const icon = ref(player.icon)

function handleSubmit() {
  game.setPlayer(player.id, name.value, icon.value)
}
</script>

<template>
  <div class="grid place-content-center bg-black/50 p-8">
    <form @submit.prevent="handleSubmit" class="grid gap-4 justify-items-center">
      <fieldset class="grid md:grid-cols-3 gap-4">
        <label class="has-[:checked]:border">
          <input type="radio" class="hidden" v-model="icon" :value="'maci_01'" />
          <img
            src="/maci_01.svg"
            alt="maci 1"
            width="100"
            height="100"
            class="w-full max-w-40 md:max-w-none aspect-square"
          />
        </label>
        <label class="has-[:checked]:border">
          <input type="radio" class="hidden" v-model="icon" :value="'maci_02'" />
          <img
            src="/maci_02.svg"
            alt="maci 2"
            width="100"
            height="100"
            class="w-full max-w-40 md:max-w-none aspect-square"
          />
        </label>
        <label class="has-[:checked]:border">
          <input type="radio" class="hidden" v-model="icon" :value="'maci_03'" />
          <img
            src="/maci_03.svg"
            alt="maci 3"
            width="100"
            height="100"
            class="w-full max-w-40 md:max-w-none aspect-square"
          />
        </label>
      </fieldset>
      <input type="text" v-model="name" class="text-gray-900 justify-self-center" />
      <button type="submit" class="btn primary">Next</button>
    </form>
  </div>
</template>
