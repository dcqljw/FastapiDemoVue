import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import PrimeVue from 'primevue/config';
import ToastService from "primevue/toastservice";
import Aura from '@primeuix/themes/aura';

import App from './App.vue'
import {initRouter} from "@/router";
import {initStore} from "@/stores";
import 'primeicons/primeicons.css'


const app = createApp(App)
initStore(app)
initRouter(app)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(ToastService)

app.mount('#app')
