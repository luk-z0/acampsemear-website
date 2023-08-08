import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './../views/MainPage.vue';
import MainBar from './../components/MainBar.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
  ]
})

export default router