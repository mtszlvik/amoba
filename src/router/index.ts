import { createRouter, createWebHistory } from 'vue-router'
import HighScoresView from '../views/HighScoresView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/high-scores',
      name: 'high-scores',
      component: HighScoresView,
    },
  ],
})

export default router
