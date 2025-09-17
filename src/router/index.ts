import {createRouter, createWebHistory} from 'vue-router'
import MainLayout from '../layout/MainLayout.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainLayout,
            meta: {
                title: '首页'
            },
            children: [
                {
                    path: "",
                    name: 'index',
                    meta: {
                        title: '首页'
                    },
                    component: () => import('../views/HomeView.vue'),
                },
                {
                    path: "user_center",
                    name: 'user_center',
                    meta: {
                        title: '用户中心'
                    },
                    component: () => import('../views/UserCenterView.vue'),
                },
                {
                    path: "user",
                    name: 'user',
                    meta: {
                        title: '用户'
                    },
                    component: () => import('../views/UserView.vue'),
                },
                {
                    path: 'role',
                    name: 'role',
                    meta: {
                        title: '角色'
                    },
                    component: () => import('../views/RoleView.vue'),
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
