<script setup lang="ts">
import GameBoard from '../components/GameBoard.vue'
import PageFooter from '../components/PageFooter.vue'
import PageHeader from '../components/PageHeader.vue'
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
        </div>
      </div>
    </GameBoard>
  </main>
  <PageFooter />
</template>
