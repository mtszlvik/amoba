import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { postResult } from '../api'

export type Board = Array<Array<number | null>>

export type Player = {
  id: number
  name: string
  coordinates: Array<{ x: number; y: number }>
}

export type Winner = Player & {
  match: Array<{ x: number; y: number }>
}

export const useGameStore = defineStore('game', () => {
  const width = ref(30)
  const height = ref(30)
  const targetCount = ref(5)

  const playerX = reactive<Player>({
    id: -1,
    name: 'Player X',
    coordinates: [],
  })
  const playerO = reactive<Player>({
    id: 1,
    name: 'Player O',
    coordinates: [],
  })

  const state = ref<'init' | 'playerX' | 'playerO' | 'play'>('init') // TODO

  const active = computed(() => {
    const m = (playerX.coordinates.length + playerO.coordinates.length) % 2
    return m === 0 ? playerX : playerO
  })
  const board = computed<Board>(() => {
    return Array<Board>(height.value)
      .fill(Array(width.value).fill(null))
      .map((row, i) => {
        return row.map((_cell, j) => {
          const hasX = playerX.coordinates.some((c) => c.x === i && c.y === j)
          const hasO = playerO.coordinates.some((c) => c.x === i && c.y === j)

          return hasX ? -1 : hasO ? 1 : null
        })
      })
  })
  const winner = computed<Winner | null>(() => {
    const w = getWinner(board.value, targetCount.value)
    if (!w) return null
    const p = w.id === -1 ? playerX : playerO
    return {
      ...p,
      match: w.match,
    }
  })

  function restart() {
    playerX.coordinates = []
    playerO.coordinates = []
    state.value = 'play' // TODO
  }

  async function change(x: number, y: number) {
    active.value.coordinates.push({ x, y })

    if (!winner.value) {
      return
    }
    const points = winner.value.coordinates.length
    const name = winner.value.name

    console.log({ points, name })
    await postResult(name, points)
  }

  return { state, board, playerX, playerO, winner, change, restart }
})

function horizontalMatch(board: Board, targetCount: number) {
  for (const [i, row] of board.entries()) {
    for (const [j, cell] of row.entries()) {
      const r = sum([cell, ...row.slice(j + 1, j + targetCount)])
      if (Math.abs(r) === targetCount) {
        return {
          id: r / Math.abs(r),
          match: Array(targetCount)
            .fill({ x: 0, y: 0 })
            .map((_c, idx) => ({
              x: i,
              y: j + idx,
            })),
        }
      }
    }
  }
  return null
}

function verticalMatch(board: Board, targetCount: number) {
  const newBoard = board.map((row, i) => {
    return row.map((_cell, j) => {
      return board[j][i]
    })
  })
  const result = horizontalMatch(newBoard, targetCount)
  if (!result) return null
  return {
    id: result.id,
    match: result.match.map((c) => ({ x: c.y, y: c.x })),
  }
}

function getWinner(board: Board, targetCount: number) {
  const hw = horizontalMatch(board, targetCount)
  const vw = verticalMatch(board, targetCount)

  return hw ?? vw ?? null
}

function sum(array: Array<number | null>) {
  return array.reduce<number>((x, y) => (x ?? 0) + (y ?? 0), 0)
}
