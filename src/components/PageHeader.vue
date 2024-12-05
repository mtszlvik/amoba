<script setup lang="ts">
import { useRoute } from 'vue-router'
import PageLink from '../components/PageLink.vue'
import { useGameStore } from '@/stores/game'

const game = useGameStore()
const route = useRoute()
</script>

<template>
  <header
    class="py-1"
    :class="{
      'bg-[--color-header]': true,
      'bg-transparent': false,
    }"
  >
    <div class="max-w-screen-lg mx-auto flex items-center justify-between">
      <img
        :src="`/${game.playerX.icon}.svg`"
        alt="player x"
        width="100"
        height="100"
        class="w-10 aspect-square"
      />
      <nav class="grid gap-4 text-center items-center">
        <PageLink v-if="route.path !== '/'" to="/" class="hidden md:flex bg-[--brand-orange]"
          >Játék indítása</PageLink
        >
        <button v-else @click="game.restart" class="hidden md:flex btn bg-[--brand-orange]">
          Játék indítása
        </button>
        <h1 class="text-4xl leading-normal font-['PlasticSans']">Amőba</h1>
        <PageLink to="/high-scores" class="hidden md:flex bg-[--brand-blue-light]"
          >Toplista</PageLink
        >
      </nav>
      <img
        :src="`/${game.playerO.icon}.svg`"
        alt="player o"
        width="100"
        height="100"
        class="w-10 aspect-square"
      />
    </div>
  </header>
</template>

<style scoped>
@media (min-width: 576px) {
  nav {
    grid-template-columns: repeat(3, 1fr);
  }

  .link {
    display: flex;
  }
}
</style>
