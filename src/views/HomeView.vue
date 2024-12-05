<script setup lang="ts">
import { useGameStore } from '../stores/game'
import GameBoard from '../components/GameBoard.vue'
import PageFooter from '../components/PageFooter.vue'
import PageHeader from '../components/PageHeader.vue'
import PlayerForm from '../components/PlayerForm.vue'
import BoardForm from '../components/BoardForm.vue'

const game = useGameStore()
</script>

<template>
  <PageHeader />
  <main>
    <GameBoard>
      <BoardForm v-if="game.state === 'init'" />
      <PlayerForm v-if="game.state === 'playerX'" :player="game.playerX" next-state="playerO" />
      <PlayerForm v-if="game.state === 'playerO'" :player="game.playerO" next-state="play" />
    </GameBoard>
  </main>
  <PageFooter />
</template>
