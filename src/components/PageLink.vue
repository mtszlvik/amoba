<script setup lang="ts">
defineProps<{ to: string }>()
</script>

<template>
  <RouterLink :to="to" class="btn">
    <slot></slot>
  </RouterLink>
</template>
