<script setup lang="ts">
import PageLink from '../components/PageLink.vue'
</script>

<template>
  <header
    class="py-1"
    :class="{
      'bg-[--color-header]': true,
      'bg-transparent': false,
    }"
  >
    <div class="max-w-screen-xl mx-auto flex items-center justify-around">
      <nav class="grid gap-4 text-center items-center">
        <PageLink to="/" class="hidden md:flex bg-[--brand-orange]">Játék indítása</PageLink>
        <h1 class="text-4xl leading-normal font-['PlasticSans']">Amőba</h1>
        <PageLink to="/high-scores" class="hidden md:flex bg-[--brand-blue-light]"
          >Toplista</PageLink
        >
      </nav>
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
