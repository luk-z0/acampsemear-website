import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './../views/MainPage.vue';
import LoginPage from './../views/LoginPage.vue';
import RegisterPage from './../views/RegisterPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
    },
  ]
})

export default router
