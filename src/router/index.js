import { createRouter, createWebHistory } from 'vue-router';
import auth from '../services/middleware.js/auth.js';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: () => import('@/views/main/MainPage.vue'),
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: () => import('@/views/login/LoginPage.vue'),
        },
        {
            path: '/register',
            name: 'RegisterPage',
            component: () => import('@/views/register/RegisterPage.vue'),
        },
        {
            path: '/contact',
            name: 'ContactPage',
            component: () => import('@/views/contact/ContactPage.vue'),

        },
        {
            path: '/profile',
            name: 'ProfilePage',
            component: () => import('@/views/profile/ProfilePage.vue'),
            meta: {
                auth: true
            }
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    if (to.meta.auth) {      
        await auth({next});
    } else {
        next();
    }
});

export default router
