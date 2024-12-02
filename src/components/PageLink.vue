<script setup lang="ts">
defineProps<{ to: string }>()
</script>

<template>
  <RouterLink :to="to" class="flex items-center justify-center px-4 py-2 uppercase text-center">
    <slot></slot>
  </RouterLink>
</template>
