<script setup lang="ts">
import GameBoard from '../components/GameBoard.vue'
import PageFooter from '../components/PageFooter.vue'
import PageHeader from '../components/PageHeader.vue'
</script>

<template>
  <PageHeader />
  <main class="grid items-start *:row-start-1 *:col-start-1">
    <GameBoard disabled />
    <div class="grid place-content-center">
      <div>
        <h1 class="text-5xl my-8 leading-normal font-['PlasticSans'] text-[--brand-blue-light]">
          Toplista
        </h1>
      </div>
    </div>
  </main>
  <PageFooter />
</template>
