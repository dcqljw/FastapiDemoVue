import type {RouteRecordRaw} from 'vue-router'

export const staticRoutes = <RouteRecordRaw[]>[
    {
        path: '/',
        name: 'index',
        component: () => import('@/layout/MainLayout.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
        meta: {name: "登录", permission: 'login'},
    },
];

export const dynamicRoutes = <RouteRecordRaw[]>[

    {
        path: '/dashboard',
        name: 'home',
        component: () => import('@/layout/MainLayout.vue'),
        meta: {name: "首页", icon: 'pi pi-home'},
        children: [
            {
                path: 'console',
                name: 'console',
                meta: {name: "工作台", role: ['admin']},
                component: () => import('@/views/HomeView.vue'),
            },
        ]
    }, {
        path: '/system',
        name: 'system',
        meta: {name: "系统管理", icon: 'pi pi-cog'},
        component: () => import('@/layout/MainLayout.vue'),
        children: [
            {
                path: 'user',
                name: 'user',
                meta: {name: "用户", role: ['admin']},
                component: () => import('@/views/UserView.vue'),
            },
            {
                path: 'role',
                name: 'role',
                meta: {name: "角色", role: ['sys:role']},
                component: () => import('@/views/RoleView.vue'),
            },
        ]
    }
]