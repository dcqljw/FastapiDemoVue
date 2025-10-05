import type {NavigationGuardNext, RouteLocationNormalized, Router} from "vue-router";
import {ref} from "vue";
import {dynamicRoutes} from "@/router/router.ts";
import {useMenuStore} from "@/stores/menu.ts";
import {useUserStore} from "@/stores/user.ts";


const isRouteRegistered = ref(false)

export function setupBeforeEachGuard(router: Router): void {
    router.beforeEach(async (to, from, next) => {
        await handleRouteGuard(to, from, next, router)
    })
}

const routerToMenu = async (route: any, parentPath = '') => {
    const currentPath = parentPath + (route.path || '')
    const children = route.children && route.children.length
        ? await Promise.all(route.children.map((child: any) => routerToMenu(child, currentPath + '/')))
        : [];

    return {
        label: route.meta?.name || '',
        path: currentPath,
        icon: route.meta?.icon || '',
        children
    }
}

async function handleRouteGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
    router: Router
): Promise<void> {
    const userStore = useUserStore();

    if (userStore.isLogin && isRouteRegistered && handleRootPathRedirect(to, next)) {
        return
    }
    if (!userStore.isLogin && to.path !== '/login') {
        next('/login')
        return
    }
    if (!isRouteRegistered.value && userStore.isLogin) {
        const menuStore = useMenuStore();
        const routerList = filterRoutes(dynamicRoutes, userStore.info.roles)
        const menuList = await Promise.all(routerList.map((route: any) => routerToMenu(route, '')))
        menuStore.setMenuList([{label: "root", children: menuList}])
        routerList.forEach((route: any) => {
            router.addRoute(route)
        })
        isRouteRegistered.value = true
        next({...to, replace: true})
        return
    }
    next()
}

const filterRoutes = (routes: any, permission: any) => {
    if (!permission) return [];
    const res = <any>[]
    routes.forEach((route: any) => {
        const menu = {...route};
        if (route.meta?.hidden) return;
        if (menu.children && menu.children.length) {
            menu.children = filterRoutes(menu.children, permission);
            if (menu.children.length === 0) return;
        } else {
            if (menu.meta?.role) {
                const roles = Array.isArray(menu.meta.role) ? menu.meta.role : [menu.meta.role]
                if (!roles.some((role: string) => permission.includes(role))) {
                    return;
                }
            }
        }
        res.push(menu)
    })
    return res
}

function handleRootPathRedirect(to: RouteLocationNormalized, next: NavigationGuardNext): boolean {
    if (to.path === '/') {
        const homePath = '/dashboard/console';
        if (homePath) {
            next({path: homePath, replace: true})
            return true
        }
    }
    return false
}