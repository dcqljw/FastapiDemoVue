import {createRouter, createWebHistory} from 'vue-router'
import MainLayout from '../layout/MainLayout.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainLayout,
            children: [
                {
                    path: "",
                    name: 'index',
                    component: () => import('../views/HomeView.vue'),
                },
                {
                    path: "user_center",
                    name: 'user_center',
                    component: () => import('../views/UserCenterView.vue'),
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
        }
    ],
})

export default router
