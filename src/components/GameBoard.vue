<script setup lang="ts">
const defaultSize = 30
const { disabled = false, board = Array(defaultSize).fill(Array(defaultSize).fill(null)) } =
  defineProps<{
    disabled?: boolean
    board?: Array<Array<number | null>>
  }>()
const emit = defineEmits<{
  (e: 'change', i: number, j: number): void
}>()

function handleClick(i: number, j: number) {
  if (disabled) return
  emit('change', i, j)
}
</script>

<template>
  <div
    class="overflow-auto grid place-content-center bg-gray-600"
    :class="{ 'overflow-hidden pointer-events-none': disabled }"
  >
    <table class="border-separate bg-gray-600 min-w-0 min-h-0 table-fixed">
      <tbody>
        <tr :key="i" v-for="(row, i) in board">
          <td :key="j" v-for="(cell, j) in row" class="p-0 bg-gray-800 leading-[0]">
            <button :disabled="cell !== null" class="w-8 h-8" @click="handleClick(i, j)">
              {{ cell < 0 ? 'X' : cell > 0 ? 'O' : null }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
