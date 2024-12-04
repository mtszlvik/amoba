<script setup lang="ts">
import { useGameStore } from '../stores/game'
import GameBoard from '../components/GameBoard.vue'
import PageFooter from '../components/PageFooter.vue'
import PageHeader from '../components/PageHeader.vue'

const game = useGameStore()
</script>

<template>
  <PageHeader />
  <main>
    <GameBoard>
      <div
        v-if="!!game.winner || game.state !== 'play'"
        class="grid items-start justify-center bg-black/50 p-8"
      >
        <button
          v-if="!!game.winner"
          @click="game.restart"
          class="flex items-center justify-center px-4 py-2 uppercase text-center bg-[--brand-orange]"
        >
          Új játék
        </button>
      </div>
    </GameBoard>
  </main>
  <PageFooter />
</template>
