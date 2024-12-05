<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getHighScores } from '../api'
import GameBoard from '../components/GameBoard.vue'
import PageFooter from '../components/PageFooter.vue'
import PageHeader from '../components/PageHeader.vue'

const { isPending, isError, data, error } = useQuery({
  queryKey: ['high-scores'],
  queryFn: getHighScores,
})
</script>

<template>
  <PageHeader />
  <main>
    <GameBoard class="overflow-hidden">
      <div class="grid justify-center bg-black/50">
        <div>
          <h1 class="text-5xl my-8 leading-normal font-['PlasticSans'] text-[--brand-blue-light]">
            Toplista
          </h1>
          <span v-if="isPending">Loading...</span>
          <span v-else-if="isError">Error: {{ error?.message }}</span>
          <!-- We can assume by this point that `isSuccess === true` -->
          <ul v-else class="grid gap-4">
            <li v-for="player in data" :key="player.id">
              <div>
                <span class="mr-2">name:</span>
                <span>"{{ player.name }}"</span>
              </div>
              <div>
                <span class="mr-2">score:</span>
                <span>{{ player.score }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </GameBoard>
  </main>
  <PageFooter />
</template>
