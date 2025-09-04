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
                    path: "user_center",
                    name: 'user_center',
                    component: () => import('../views/UserCenterView.vue'),
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
