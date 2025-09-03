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
                    path: "personal_center",
                    name: 'personal_center',
                    component: () => import('../views/PersonalCenterView.vue'),
                }
            ]
        },
        {
            path: '/Login',
            name: 'Login',
            component: () => import('../views/LoginView.vue'),
        }
    ],
})

export default router
