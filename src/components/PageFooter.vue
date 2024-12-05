<script setup lang="ts">
import { useRoute } from 'vue-router'
import PageLink from '../components/PageLink.vue'
import { useGameStore } from '@/stores/game'

const game = useGameStore()
const route = useRoute()
</script>

<template>
  <footer class="flex items-center justify-center">
    <nav class="grid md:hidden grid-cols-2 items-center gap-4">
      <PageLink v-if="route.path !== '/'" to="/" class="bg-[--brand-orange]"
        >Játék indítása</PageLink
      >
      <button v-else @click="game.restart" class="md:hidden btn">Játék indítása</button>
      <PageLink to="/high-scores" class="bg-[--brand-blue-light]">Toplista</PageLink>
    </nav>
  </footer>
</template>
