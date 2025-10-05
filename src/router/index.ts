import type {App} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import {staticRoutes} from "@/router/router.ts";
import {setupBeforeEachGuard} from "@/router/guards/beforeEach.ts";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: staticRoutes
})

export function initRouter(app: App<Element>) {
    setupBeforeEachGuard(router)
    app.use(router)
}

