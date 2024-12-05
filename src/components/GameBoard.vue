<script setup lang="ts">
import { useGameStore } from '../stores/game'

const game = useGameStore()
</script>

<template>
  <div class="grid *:row-start-1 *:col-start-1">
    <div
      class="grid bg-gray-600 h-[calc(100dvh-2*4rem-2rem)]"
      :class="{ 'overflow-auto': game.state === 'play', 'overflow-hidden': game.state !== 'play' }"
    >
      <table class="border-separate bg-gray-600 table-fixed place-self-center">
        <tbody>
          <tr :key="i" v-for="(row, i) in game.board">
            <td :key="j" v-for="(cell, j) in row" class="p-0 bg-gray-800 leading-[0]">
              <button
                :disabled="cell !== null || !!game.winner"
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
    </div>
    <slot></slot>
  </div>
</template>
