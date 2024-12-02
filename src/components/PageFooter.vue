<script setup lang="ts">
import PageLink from '../components/PageLink.vue'
</script>

<template>
  <footer class="md:hidden flex items-center justify-center">
    <nav class="grid grid-cols-2 items-center gap-4">
      <PageLink to="/" class="bg-[--brand-orange]">Játék indítása</PageLink>
      <PageLink to="/high-scores" class="bg-[--brand-blue-light]">Toplista</PageLink>
    </nav>
  </footer>
</template>
