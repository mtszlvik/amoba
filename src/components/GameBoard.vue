<script setup lang="ts">
import { useGameStore } from '../stores/game'

const game = useGameStore()
</script>

<template>
  <div class="overflow-auto grid *:row-start-1 *:col-start-1 bg-gray-600 h-full">
    <table class="border-separate bg-gray-600 min-w-0 min-h-0 table-fixed place-self-center">
      <tbody>
        <tr :key="i" v-for="(row, i) in game.board">
          <td :key="j" v-for="(cell, j) in row" class="p-0 bg-gray-800 leading-[0]">
            <button
              :disabled="cell !== null"
              class="w-8 h-8 font-sans font-bold"
              :class="{
                'text-blue-500': (cell ?? 0) > 0,
                'bg-red-500/50 text-red-500':
                  game.winner && game.winner.match.some((c) => c.x === i && c.y === j),
              }"
              @click="game.change(i, j)"
            >
              {{ cell === null ? null : cell < 0 ? 'X' : 'O' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <slot></slot>
  </div>
</template>
