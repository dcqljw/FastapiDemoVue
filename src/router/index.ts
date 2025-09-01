import {createRouter, createWebHistory} from 'vue-router'
import MainLayout from '../layout/MainLayout.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainLayout,
        },
        {
            path: '/Login',
            name: 'Login',
            component: () => import('../views/LoginView.vue'),
        }
    ],
})

export default router
