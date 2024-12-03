<script setup lang="ts">
import { ref } from 'vue'
import GameBoard from '../components/GameBoard.vue'
import PageFooter from '../components/PageFooter.vue'
import PageHeader from '../components/PageHeader.vue'

const width = 30
const height = 25
const active = ref(-1)
const board = ref<(number | null)[][]>(Array(height).fill(Array(width).fill(null)))

function handle(i: number, j: number) {
  board.value = board.value.map((row, idx) => {
    return row.map((cell, jdx) => {
      if (cell !== null) return cell
      return idx === i && jdx === j ? active.value : cell
    })
  })
  active.value *= -1
}
</script>

<template>
  <PageHeader />
  <main>
    <GameBoard :board @change="handle" />
  </main>
  <PageFooter />
</template>
