import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import axios from "axios";


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app')
