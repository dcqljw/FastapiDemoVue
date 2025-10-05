import type {App} from 'vue'
import {createPinia} from 'pinia'
import {createPersistedState} from 'pinia-plugin-persistedstate'

export const store = createPinia();

store.use(
    createPersistedState({
        storage: window.sessionStorage,
    })
)

export function initStore(app: App<Element>) {
    app.use(store)
}